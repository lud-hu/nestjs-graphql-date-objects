import { Args, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { DummyService } from './dummy.service';
import { Dummy } from './graphql.schema';

@Resolver('Dummy')
export class DummyResolver {
  constructor(private dummyService: DummyService) {}

  @Query()
  async dummy(@Args('id') id: string): Promise<Dummy> {
    console.log('id', id);
    return this.dummyService.findOneById(new Date());
  }

  @ResolveField()
  async createdAt(@Args('createdAt') createdAt: Date): Promise<Date> {
    // This prints "received type string"
    console.log('received type', typeof createdAt);
    return new Date();
  }
}
