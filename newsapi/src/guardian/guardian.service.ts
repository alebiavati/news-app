import { Injectable, HttpService } from '@nestjs/common';
import { News } from '../interfaces/news.interface';
import * as _ from 'lodash';

const SOURCE_NAME = 'guardian';

const resolveNewsItem = ({ id, webUrl, webTitle, webPublicationDate, sectionName }) => ({
  source_name: SOURCE_NAME,
  source_id: id,
  url: webUrl,
  title: webTitle,
  publish_date: webPublicationDate,
  section: sectionName,
})

@Injectable()
export class GuardianService {
  apiKey: string;

  constructor(private httpService: HttpService) {
    this.apiKey = process.env.GUARDIAN_API_KEY;
  }

  async search(query): Promise<News[]> {
    const response = await this.httpService.get(`https://content.guardianapis.com/search?api-key=${this.apiKey}&q=${query}`).toPromise();
    const posts = _.get(response, 'data.response.results', []);

    return posts.map(resolveNewsItem)
  }
}
