import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Book } from './schemas/book.sheama';
import { BookService } from './books.service';
import { CreateBookDto } from './dtos/createBook.dto';
import { UpdateBookDto } from './dtos/updateBook.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Post()
  create(@Body() book: CreateBookDto): Promise<Book> {
    return this.bookService.create(book);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() book: UpdateBookDto): Promise<Book> {
    return this.bookService.update(id, book);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    this.bookService.delete(id);
  }
}
