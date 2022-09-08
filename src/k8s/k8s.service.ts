import { Injectable } from '@nestjs/common';
const { exec } = require('child_process');

@Injectable()
export class K8sService {
  getLs() {
    var process = exec('ls');
    process.stdout.on('data', function (data) {
      console.log(data.toString()[0]);

      return data;
    });
  }
}
