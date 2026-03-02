import { Injectable, Logger } from '@nestjs/common';
import { INotificationSender } from '../interfaces/notification-sender.interface';

@Injectable()
export class EmailStrategy implements INotificationSender {
  private readonly logger = new Logger(EmailStrategy.name);

  async send(to: string, message: string): Promise<void> {
    this.logger.log(`📧 Enviando EMAIL para ${to}: ${message}`);
  }
}
