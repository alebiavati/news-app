import { Module } from '@nestjs/common';
import { GuardianModule } from 'src/guardian/guardian.module';
import { NewsAPIModule } from 'src/newsapi/newsapi.module';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [GuardianModule, NewsAPIModule]
})
export class NewsModule {}
