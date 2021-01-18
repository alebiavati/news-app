import { Module, HttpModule } from '@nestjs/common';
import { GuardianService } from './guardian.service';

@Module({
  imports: [HttpModule],
  providers: [GuardianService],
  exports: [GuardianService]
})
export class GuardianModule {}
