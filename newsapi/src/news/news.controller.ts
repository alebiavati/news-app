import { Controller, Post, Body } from '@nestjs/common';
import { News } from '../interfaces/news.interface';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Post()
  async search(@Body('input') { query }: { query: string }): Promise<News[]> {
    return this.newsService.search(query);
  }
}
