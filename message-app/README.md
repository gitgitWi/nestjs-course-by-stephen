# 02. Basic Message App

간단한 JSON 기반 메시지 save & retrieve 앱

## Validation Pipes

- POST Request
- Validation Pipes
  - `class-transformer`: body => DTO class
  - `class-validator`: validate the instance
  - if validation error - else

## Inversion of Control

Nest.js IoC 간단한 코드 예제

**BAD**

```typescript
export class MessagesService {
  repository: MessagesRepository;

  constructor() {
    this.repository = new MessagesService();
  }
}
```

**Better**

```typescript
export class MessagesService {
  repository: MessagesRepository;

  constructor(repo: MessagesRepository) {
    this.repository = repo;
  }
}
```

**BEST** : DI, 특정 `MessgesRepository`를 요구하지 않음

```typescript
interface Repository {
  findOne(id: string);
  findAll();
  create(content: string);
}

export class MessagesService {
  repository: Repository;

  constructor(repo: Repository) {
    this.repository = repo;
  }
}
```

### Why the 'Good' case is Good?

Example.

- In Production : `class MessagesRepository` => `class MessagesService`
- While AUTOMATED Testing : `class FakeRepository` => `class MessagesService`

=> 교체 가능하기 쉽도록 인터페이스만 맞추는 것

---

## DI

```typescript
const repo = new MessagesRepository();
const service = new MessagesService(repo);
const controller = new MessagesController(service);
```

지금은 단 하나의 controller, service, repo만 있어서 큰 문제가 되지 않지만,

controller, service, repo의 수가 여러 개로 늘어난다면?

의존성 문제 때문에 관리하기가 너무 힘들어진다!

### Nest DI Container

Nest DI Container가 의존성 관계를 정리하고 각각에 대한 인스턴스를 자동으로 만들어줌

**\* TypeScript Syntactic Sugar**

```typescript
class SomeClass {
  private someMember: SomeInterface;

  constructor(someArg: SomeInterface) {
    this.someMember = someArg;
  }
}
```

=> 아래와 같이 축약 가능

```typescript
class SomeClass {
  constructor(private someArg: SomeInterface) {}
}
```
