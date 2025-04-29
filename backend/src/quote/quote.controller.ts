import { Body, Controller, Post } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { Quote } from './quote.schema';

@Controller('quotes')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Post()
  async submitQuote(@Body() data: Partial<Quote>) {
    return this.quoteService.create(data);
  }
}
