import { Injectable } from '@nestjs/common';
import { Book } from './schemas/book.sheama';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateBookDto } from './dtos/updateBook.dto';

@Injectable()
export class BookService {
  update(id: string, book: UpdateBookDto): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, book, { new: true });
  }
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    const books = await this.bookModel.find();
    return books;
  }

  async findOne(id: string): Promise<Book> {
    return await this.bookModel.findById(id);
  }

  async create(book: Book): Promise<Book> {
    const newBook = await this.bookModel.create(book);
    return newBook;
  }

  async delete(id: string) {
    await this.bookModel.findByIdAndDelete(id);
  }
}
