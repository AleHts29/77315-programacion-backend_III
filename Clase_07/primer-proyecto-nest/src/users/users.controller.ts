import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    // validacion
    if(!createUserDto.first_name || !createUserDto.last_name) throw new HttpException('datos incompletos', HttpStatus.BAD_REQUEST)
    const newUser = await this.usersService.create(createUserDto);
    return {status: 'Success', payload: newUser}
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return {status: 'Success', payload: users}
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if(isNaN(+id)) throw new HttpException('El id debe ser de tipo Number', HttpStatus.BAD_REQUEST)
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
