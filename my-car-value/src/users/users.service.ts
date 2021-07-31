import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    /** Repository 자동 생성 */
    @InjectRepository(User) private repo: Repository<User>,
  ) {}

  create(email: string, password: string) {
    /**
     * `this.repo.save({ email, password })`로도 바로 row 생성할 수 있지만,
     *  class-validator가 작동하기 위해선 instance가 생성되어야 하므로 create를 거쳐야 함
     *  또한 AfterInsert 등 Hooks가 동작하려면 instance가 생성되어야 함
     */
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  find(email: string) {
    return this.repo.find({ email });
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException(`User not found`);

    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException(`User not found`);

    return this.repo.remove(user);
  }
}
