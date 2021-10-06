import { Module } from '@nestjs/common';
import { DummyService } from './dummy.service';
import { DummyResolver } from './dummy.resolver';

@Module({
  imports: [],
  providers: [DummyService, DummyResolver],
})
export class DummyModule {}
