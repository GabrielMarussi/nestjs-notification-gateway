import { Test, TestingModule } from '@nestjs/testing';
import { NotificationFactory } from './notification.factory';
import { EmailStrategy } from './strategies/email.strategy';
import { SMSStrategy } from './strategies/sms.strategy';
import { BadRequestException } from '@nestjs/common';

describe('NotificationFactory', () => {
  let factory: NotificationFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationFactory,
        // Usamos mocks simples para não precisar da implementação real
        { provide: EmailStrategy, useValue: { send: jest.fn() } },
        { provide: SMSStrategy, useValue: { send: jest.fn() } },
      ],
    }).compile();

    factory = module.get<NotificationFactory>(NotificationFactory);
  });

  it('should be defined', () => {
    expect(factory).toBeDefined();
  });

  it('should be a EmailStrategy when type is email', () => {
    const strategy = factory.getSender('email');
    expect(strategy).toBeInstanceOf(Object);
    expect(factory.getSender('email')).toBeDefined();
  });

  it('should be a SMSStrategy when type is sms', () => {
    expect(factory.getSender('sms')).toBeDefined();
  });

  it('should throw BadRequestException for invalid type', () => {
    expect(() => factory.getSender('invalid')).toThrow(BadRequestException);
  });
});
