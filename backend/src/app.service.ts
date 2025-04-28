import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAll(): string {
    return 'this is all return able data man';
  }
  // app.service.ts
  singleData(id: string, slug?: string, sort?: string) {
    if (slug) {
      if (sort) {
        return {
          data: 'Here Id is :' + id + '; slug is: ' + slug + '; query is ' + sort
        };
      }
      return { data: 'Here Id is :' + id + '; slug is:' + slug };
    } else {
      if (sort) {
        return { data: 'hello id is' + id + '; query is ' + sort };
      }
      return { data: 'hello id is' + id };
    }
  }
}
