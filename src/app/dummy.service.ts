import { Injectable } from '@nestjs/common';
import { Dummy } from './graphql.schema';

@Injectable()
export class DummyService {
  findOneById(createdAt: Date): Dummy {
    return {
      id: '1',
      name: 'Hi',
      createdAt: new Date(),
    };
  }
}
