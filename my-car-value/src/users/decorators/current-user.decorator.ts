import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  /**
   *
   * @param data Annotation 인자로 들어오는 것, 여기선 사용하지 않으므로 never 타입으로 지정
   * @param context HTTP, WebSocket, gRPC 등 각 프로토콜에서 발생하는 요청
   */
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.currentUser;
  },
);
