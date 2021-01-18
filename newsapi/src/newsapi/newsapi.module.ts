import { Module, HttpModule } from '@nestjs/common';
import { NewsAPIService } from './newsapi.service';

@Module({
  imports: [HttpModule],
  providers: [NewsAPIService],
  exports: [NewsAPIService]
})
export class NewsAPIModule {}
