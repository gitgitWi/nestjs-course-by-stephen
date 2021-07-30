# 03. DI 연습 프로젝트

Nest DI, Multi Module에 익숙해지기 위한 짧은 프로젝트

---

Module 내부의 `Service`, `Repository` 등 의존성은 모두 private

다른 Module에서 사용하기 위해선 `exports`에 등록해야 함

```typescript
@Module({
  imports: [PowerModule],
  providers: [DiskService],
  exports: [DiskService],
})
export class DiskModule {}

// ,,,

@Module({
  imports: [CpuModule, DiskModule],
  controllers: [ComputerController],
})
export class ComputerModule {}
```
