import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<a href="/graphql">Go to /graphQL</a>';
  }
}
