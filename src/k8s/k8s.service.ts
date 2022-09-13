import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';

@Injectable()
export class K8sService {
  getLs(): string {
    let ret = 'a';
    var process = exec('ls');
    process.stdout.on('data', function (data) {
      // console.log(data.split('\n')[0].toString());

      ret = data.split('\n')[0].toString();
      console.log(ret);
      process.disconnect();

      return ret;
    });

    console.log(`return: ${ret}`);
    return 'not conn';
  }
}
