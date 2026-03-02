import { Module } from '@nestjs/common';
import { NotificationFactory } from './notification.factory';
import { EmailStrategy } from './strategies/email.strategy';
import { SMSStrategy } from './strategies/sms.strategy';

@Module({
  controllers: [],
  providers: [
    NotificationFactory, // 👈 This is the main provider
    EmailStrategy, // 👈 Strategy providers
    SMSStrategy, // 👈 Strategy providers
  ],
})
export class NotificationModule {}
