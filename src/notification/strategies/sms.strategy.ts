import { Injectable, Logger } from '@nestjs/common';
import { INotificationSender } from '../interfaces/notification-sender.interface';

@Injectable()
export class SMSStrategy implements INotificationSender {
  private readonly logger = new Logger(SMSStrategy.name);

  async send(to: string, message: string): Promise<void> {
    this.logger.log(`📱 Enviando SMS para ${to}: ${message}`);
  }
}
