import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

/**
 * @description
 * ClassSerializerInterceptor를 대신할 custom interceptor
 * - 사용자 role이 admin인 경우와 일반 사용자인 경우 findUser response에 담길 내용이 다르기 때문
 */
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run someting before a request is handled by the request handler
    // console.log(`I'm running before the handler`);

    return handler.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out
        // console.log(`I'm running before the response is sent out: ${data}`);
        return plainToClass(this.dto, data, { excludeExtraneousValues: true });
      }),
    );
  }
}

/**
 * @description
 * Serialize에 클래스 타입이 아닌 다른 타입이 들어오는 것을 방지하기 위한 임시 인터페이스
 */
interface ClassConstructor {
  new (...args: any[]): unknown;
}

/**
 * @description
 * 컨트롤러에 붙는 어노테이션 `UseInterceptors(new SerializeInterceptor(UserDto))`이
 * 너무 길어지기 때문에 한번 감싸는 어노테이션
 * - 컨트롤러 전체에 붙여도 되고
 * - 컨트롤러 내부 handler 각각에 붙여도 됨
 * @example `@Serialize(UserDto)`
 */
export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}
