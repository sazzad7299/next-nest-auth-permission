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
  singleData(id: string, slug?: string) {
    if (slug) {
      return { data: 'Helooo this is my' };
    } else {
      return { data: 'hello this is my productitnve mas' };
    }
  }
}
