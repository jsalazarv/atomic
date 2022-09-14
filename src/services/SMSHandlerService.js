import { BaseService } from './BaseService.js';

export class SMSHandlerService extends BaseService {
  async getVerificationCode(payload) {
    return this.client.post('/otp', payload);
  }

  async verifyCode(payload) {
    return this.client.post('/otp/verify', payload);
  }
}
