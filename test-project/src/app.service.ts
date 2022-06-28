import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  reverseMessage(str: string) {
    let strResponse = '';
    for (let i = str.length - 1; i >= 0; i--) {
      strResponse += str[i];
    }
    return { message: strResponse };
  }
}
