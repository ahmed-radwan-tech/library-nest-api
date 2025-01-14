import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  ADVENTURE = 'Adventure',
  SCIENCE = 'Science',
  FICTION = 'Fiction',
  HORROR = 'Horror',
}
@Schema({
  timestamps: true,
})
export class Book {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  author: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  category: Category;
}
export const BookSchema = SchemaFactory.createForClass(Book);
