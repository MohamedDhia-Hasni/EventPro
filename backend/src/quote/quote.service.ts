import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Quote, QuoteDocument } from './quote.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuoteService {
  constructor(
    @InjectModel(Quote.name) private quoteModel: Model<QuoteDocument>,
  ) {}

  async create(data: Partial<Quote>): Promise<Quote> {
    console.log('🛠 Saving to DB:', data);
    const newQuote = new this.quoteModel(data);
    const savedQuote = await newQuote.save();
    console.log('✅ Saved:', savedQuote);
    return savedQuote;
  }
}
