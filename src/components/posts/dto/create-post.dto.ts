import { IsNotEmpty, Length } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @Length(5, 20)
  title: string;

  description: string;
  thumbnail: string;
  creator: string;
}
