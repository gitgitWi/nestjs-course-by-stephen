# Final. My Car Value

- TypeORM
- User Auth.
- Test: Unit Test, E2E Test
- Deploy: Heroku

## API Design

|                                                                                                        | Method & Route    | Body or QS                                                    |
| ------------------------------------------------------------------------------------------------------ | ----------------- | ------------------------------------------------------------- |
| Users sign up with email/password                                                                      | POST /auth/signup | Body {email, password}                                        |
| Users sign in with email/password                                                                      | POST /auth/signin | Body {email, password}                                        |
| Users get an estimate for <br />how much their car is worth<br /> based on the make/model/year/mileage | GET /reports      | QS {make, model, year, mileage, longitude, latitude}          |
| Users can report what they sold their vehicles for                                                     | POST /reports     | Body {make, model, year, mileage, longitude, latitude, price} |
| Admins have to approve reported sales                                                                  | PATCH /reports    | Body {approved}                                               |

## Module Design

=> Users, Reports

## Database

프로젝트 초기에는 TypeORM + SQLite, 이후 TypeORM + PostgresQL

각 모듈에 필요한 Entity만 생성, 간단한 CRUD는 TypeORM에서 제공하는 Repository를 활용
