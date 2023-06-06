import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
  import { jwtConstants } from './jwt.constants';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      if (!token) {
        throw new UnauthorizedException();
      }
      try {
        const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret: jwtConstants.secret
          }
        );
        // console.log(payload, 'antes de agregar los 20 minutos')
        
        const expirationDate = new Date(payload.exp * 1000);
        const currentTime = new Date();
        const timeDiffMinutes = Math.floor((expirationDate.getTime() - currentTime.getTime()) / 60000);
        // console.log(timeDiffMinutes, 'diferencia de tiempo')
        
        if (timeDiffMinutes <= 20) {
          // console.log('estro')
          const newExpirationDate = new Date();
          newExpirationDate.setMinutes(newExpirationDate.getMinutes() + 60); // Agrega 60 minutos (40 minutos adicionales)
          payload.exp = Math.floor(newExpirationDate.getTime() / 1000)  
        } 
          // 💡 We're assigning the payload to the request object here
        // so that we can access it in our route handlers
        // console.log(payload, 'despues de agregar los 20 minutos')
        request['user'] = payload;
      } catch {
        throw new UnauthorizedException();
      }
      return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }


