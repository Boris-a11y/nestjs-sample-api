import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../repositories/repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { HashService } from './hash.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
    private hashService: HashService,
  ) {}
  async register(createUserDto: CreateUserDto): Promise<CreateUserDto & User> {
    createUserDto.password = await this.hashService.hashPassword(
      createUserDto.password,
    );

    const user = await this.userRepository.save(createUserDto);
    return user;
  }
}
