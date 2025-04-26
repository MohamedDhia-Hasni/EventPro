import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuoteModule } from './quote/quote.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://yassine:zlibigot@cluster0.eitpy.mongodb.net/',
    ),
    QuoteModule,
  ],
})
export class AppModule {}
