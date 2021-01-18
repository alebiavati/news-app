import { Injectable, HttpService } from '@nestjs/common';
import { News } from '../interfaces/news.interface';
import * as _ from 'lodash';

const SOURCE_NAME = 'newsapi';

const resolveNewsItem = ({ url, title, publishedAt }) => ({
  source_name: SOURCE_NAME,
  source_id: url,
  url,
  title,
  publish_date: publishedAt,
  section: 'Other',
})

@Injectable()
export class NewsAPIService {
  apiKey: string;

  constructor(private httpService: HttpService) {
    this.apiKey = process.env.NEWSAPI_API_KEY;
  }

  async search(query): Promise<News[]> {
    const response = await this.httpService.get(`https://newsapi.org/v2/top-headlines?apiKey=${this.apiKey}&country=ca&q=${query}`).toPromise();
    const posts = _.get(response, 'data.articles', []);
    return posts.map(resolveNewsItem)
  }
}
