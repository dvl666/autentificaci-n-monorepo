import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { LoginDto } from './dto/login-dto';

@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService
  ) {}

  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDto
  ) {
    return this.usersService.createUser(createUserDto)
  }

  @Get()
  async getUsers() {
    return this.usersService.getUsers()
  }

  @Post('login')
  async login(
    @Body() loginDto: LoginDto
  ) {
    return this.usersService.validateUser(loginDto.email, loginDto.password)
  } 

}
