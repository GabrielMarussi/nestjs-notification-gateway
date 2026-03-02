import { BadRequestException, Injectable } from '@nestjs/common';
import { EmailStrategy } from './strategies/email.strategy';
import { SMSStrategy } from './strategies/sms.strategy';

@Injectable()
export class NotificationFactory {
  constructor(
    private readonly emailStrategy: EmailStrategy,
    private readonly smsStrategy: SMSStrategy,
  ) {}

  getSender(type: 'email' | 'sms') {
    switch (type) {
      case 'email':
        return this.emailStrategy;
      case 'sms':
        return this.smsStrategy;
      default:
        throw new BadRequestException('Invalid notification type');
    }
  }
}
