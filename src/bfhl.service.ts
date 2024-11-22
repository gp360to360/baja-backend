import { Injectable } from '@nestjs/common';
// import * as base64 from 'base64-js';
import * as mime from 'mime-types';

@Injectable()
export class BfhlService {
  async processData(data: any): Promise<any> {
    const userId = 'john_doe_17091999';
    const email = 'john@xyz.com';
    const rollNumber = 'ABCD123';

    const numbers = data.data.filter((item) => !isNaN(item));
    const alphabets = data.data.filter((item) => isNaN(item));
    const highestLowercaseAlphabet = alphabets
      .filter((item) => item === item.toLowerCase())
      .sort((a, b) => b.localeCompare(a))[0];

    const fileValid = data.file_b64 ? true : false;
    const fileMimeType = fileValid ? mime.lookup(data.file_b64) : null;
    const fileSizeKb = fileValid
      ? ((data.file_b64.length * 3) / 4 / 1024).toFixed(2)
      : null;

    const isPrimeFound = numbers.some((item) => this.isPrime(item));

    return {
      is_success: true,
      user_id: userId,
      email,
      roll_number: rollNumber,
      numbers,
      alphabets,
      highest_lowercase_alphabet: [highestLowercaseAlphabet],
      is_prime_found: isPrimeFound,
      file_valid: fileValid,
      file_mime_type: fileMimeType,
      file_size_kb: fileSizeKb,
    };
  }

  private isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }
}
