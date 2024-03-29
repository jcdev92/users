import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from '../auth/dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { User } from 'src/auth/entities';
import { Auth, GetUser } from 'src/auth/decorators';
import { ValidPermissions } from 'src/auth/interfaces';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({
    summary: 'A user with read permission can get all users',
    description: 'A user with read permission can get all users',
  })
  @ApiResponse({ status: 200, description: 'List of users' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized, token not valid' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'offset',
    type: Number,
    required: false,
  })
  @Auth(ValidPermissions.read)
  findAll(
    @Query() paginationDto: PaginationDto,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @GetUser() user: User,
  ) {
    return this.userService.findAll(paginationDto);
  }

  @Get(':term')
  @ApiOperation({
    summary:
      'A user with read permission can get a specific user, you can also find it by ID, name, or email. You can also search for it by id, name, and email.',
    description:
      'A user with read permission can get a specific user, you can also find it by ID, name, or email. You can also search for it by id, name, and email.',
  })
  @ApiResponse({ status: 200, description: 'User found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized, token not valid' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related' })
  @Auth(ValidPermissions.read)
  findOne(
    @Param('term') term: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @GetUser() user: User,
  ) {
    return this.userService.findOne(term);
  }

  @Get('role/:term')
  @ApiOperation({
    summary:
      'A user with administrator permission can get a specific user with their respective roles ad permissions. Search for it by id, name, or email.',
    description:
      'A user with administrator permission can get a specific user with their respective roles ad permissions. Search for it by id, name, or email.',
  })
  @ApiResponse({ status: 200, description: 'User with role found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized, token not valid' })
  @ApiResponse({ status: 404, description: 'User with role not found' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related' })
  @Auth(ValidPermissions.administrator)
  findOneWithRolesadPermissions(
    @Param('term') term: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @GetUser() user: User,
  ) {
    return this.userService.findOneWithRolesAndPermissions(term);
  }

  @Patch(':id')
  @ApiOperation({
    summary:
      'A user with write permission can update a user. Search for it by id to update.',
    description:
      'A user with write permission can update a user. Search for it by id to update.',
  })
  @ApiResponse({ status: 200, description: 'User updated' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized, token not valid' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Auth(ValidPermissions.write)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @GetUser() user: User,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary:
      'A user with delete permission can delete a user. Search for it by id to delete.',
    description:
      'A user with delete permission can delete a user. Search for it by id to delete.',
  })
  @ApiResponse({ status: 200, description: 'User deleted' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized, token not valid' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @Auth(ValidPermissions.delete)
  remove(
    @Param('id', ParseUUIDPipe) id: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @GetUser() user: User,
  ) {
    return this.userService.remove(id);
  }
}
