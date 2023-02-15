import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/dbModule';
import { ValidationModule } from './config/configModule';
import { PostsModule } from './components/posts/posts.module';
import { AuthModule } from './components/auth/auth.module';
import { UsersModule } from './components/users/users.module';

@Module({
  imports: [
    ConfigModule,
    ValidationModule,
    DatabaseModule,
    PostsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
