import { Module } from '@nestjs/common';
import { NotificationController } from './notification/notification.controller';
import { NotificationFactory } from './notification/notification.factory';
import { SMSStrategy } from './notification/strategies/sms.strategy';
import { EmailStrategy } from './notification/strategies/email.strategy';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [NotificationFactory, SMSStrategy, EmailStrategy],
})
export class AppModule {}
