import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { K8sController } from './k8s/k8s.controller';
import { K8sService } from './k8s/k8s.service';

@Module({
  imports: [],
  controllers: [AppController, K8sController],
  providers: [AppService, K8sService],
})
export class AppModule {}
