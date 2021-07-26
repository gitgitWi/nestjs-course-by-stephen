# 01. Basics of Nest

nest-cli 사용하지 않고 최소한의 패키지-설정만으로 Nest.js 프로젝트 빌드하기

## 패키지 설치

- 강의와 동일한 결과물 위해 버전도 모두 맞춤

```bash
npm i @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2
```

## 컨트롤러-모듈 구현

어떤 언어, 프레임워크로 구현하든지 Request-Response cycle은 동일

1. Request
2. Validate data contained in the request :arrow_right: `Pipe`
3. (Make sure the user is authenticated) :arrow_right: `Guard`
4. Route the request to a particular function :arrow_right: `Controller`
5. Run some business logic :arrow_right: `Service`
6. Access a database :arrow_right: `Repository`
7. Response

Nest.js App을 실행시키는 entry-point 함수명을 `bootstrap`으로 짓는 것은 컨벤션임

## 앱 실행

```bash
npm run dev

# or
npx ts-node-dev src/main.ts
```

## File Naming Conventions

- 1 클래스 1 파일
  - 일부 예외는 있음
- Class names shoul include the kind of thing we are creating
- Name of class and name of file should always match up
- Filename template: _`name.type_of_thing.ts`_
