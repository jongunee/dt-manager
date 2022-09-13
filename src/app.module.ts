import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { K8sModule } from './k8s/k8s.module';

@Module({
  imports: [K8sModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
