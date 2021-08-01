import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { UsersService } from '../users.service';

/**
 * Decorator에서 직접 DI 인스턴스에 접근할 수 없기 때문에,
 * Interceptor에서 처리하고 Decorator에 넘겨줌
 */
@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private usersService: UsersService) {}

  async intercept(context: ExecutionContext, handler: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session || {};

    if (userId) {
      const user = await this.usersService.findOne(parseInt(userId));
      request.currentUser = user;
    }

    return handler.handle();
  }
}
