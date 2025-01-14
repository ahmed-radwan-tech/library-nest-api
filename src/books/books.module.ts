import { Module } from '@nestjs/common';
import { BookController } from './books.controller';
import { BookService } from './books.service';
import { BookSchema } from './schemas/book.sheama';
import { MongooseModule } from '@nestjs/mongoose';
import { Book } from './schemas/book.sheama';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
