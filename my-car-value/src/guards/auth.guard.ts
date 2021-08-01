import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AuthGuard implements CanActivate {
  /**
   * 리턴값이 falsy값이면 403 코드와 함께 접근 못하게 함
   * @param context
   * @returns cookie session에 저장된 사용자 id
   */
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    return request.session.userId;
  }
}
