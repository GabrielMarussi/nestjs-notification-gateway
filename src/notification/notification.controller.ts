import { Body, Controller, Post } from '@nestjs/common';
import { NotificationFactory } from './notification.factory';
import { SendNotificationDto } from './dto/send-notification.dto';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationFactory: NotificationFactory) {}

  @Post()
  async sendNotification(@Body() dto: SendNotificationDto) {
    const sender = this.notificationFactory.getSender(dto.type);

    await sender.send(dto.to, dto.message);

    return {
      success: true,
      message: 'Notification sent successfully',
      type: dto.type,
    };
  }
}
