import { Injectable } from '@nestjs/common';
import { exec, execSync } from 'child_process';

@Injectable()
export class K8sService {
  getLs(): string {
    // let ret = 'a';
    const res = 'a';
    // const res = execSync('ls').toString();
    // process.stdout.on('data', function (data) {
    //   // console.log(data.split('\n')[0].toString());

    //   ret = data.split('\n')[0].toString();
    //   console.log(ret);

    //   return ret;
    // });

    console.log(`return: ${res}`);
    return res;
  }
}
