import { Injectable } from '@nestjs/common';
import { News } from '../interfaces/news.interface';
import * as _ from 'lodash';
import { GuardianService } from 'src/guardian/guardian.service';
import { NewsAPIService } from 'src/newsapi/newsapi.service';

@Injectable()
export class NewsService {
  constructor(private guardianService: GuardianService, private newsapiService: NewsAPIService, ) {}

  search(query): Promise<News[]> {
    return Promise.all([
      this.guardianService.search(query),
      // this.newsapiService.search(query),
    ]).then(_.flatten);
  }
}
