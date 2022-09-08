import { Controller, Get } from '@nestjs/common';
import { K8sService } from './k8s.service';

@Controller('k8s')
export class K8sController {
  constructor(private readonly k8sService: K8sService) {}

  @Get()
  getLs(): string {
    return this.k8sService.getLs();
  }
}
