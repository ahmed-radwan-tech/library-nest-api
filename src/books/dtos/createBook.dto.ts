import { Category } from '../schemas/book.sheama';

export class CreateBookDto {
  title: string;
  description: string;
  author: string;
  price: number;
  category: Category;
}
