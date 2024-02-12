import { Controller, Post } from '@nestjs/common';
import { SeedService } from './seed.service';
import { Auth, GetUser } from 'src/auth/decorators';
import { ValidPermissions } from 'src/auth/interfaces';
import { User } from 'src/auth/entities';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Seed')
@ApiBearerAuth()
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post()
  @ApiOperation({
    summary:
      'A user with administrator permission can run a seed to create many countries in the database',
    description:
      'A user with administrator permission can run a seed to create many countries in the database',
  })
  @ApiResponse({ status: 200, description: 'Seed executed' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized, token not valid' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related' })
  @Auth(ValidPermissions.write)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createSeeds(@GetUser() user: User) {
    return this.seedService.runSeed();
  }
}
