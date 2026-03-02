import { Test, TestingModule } from '@nestjs/testing';
import { SMSStrategy } from './sms.strategy';
import { Logger } from '@nestjs/common';

describe('SMSStrategy', () => {
  let strategy: SMSStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SMSStrategy],
    }).compile();

    strategy = module.get<SMSStrategy>(SMSStrategy);
  });

  it('should be defined', () => {
    expect(strategy).toBeDefined();
  });

  it('should log the correct message when sending an sms', async () => {
    const loggerSpy = jest.spyOn(Logger.prototype, 'log');
    const phoneNumber = '+5511999999999';
    const message = 'Hello World';

    await strategy.send(phoneNumber, message);

    expect(loggerSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        `📱 Enviando SMS para ${phoneNumber}: ${message}`,
      ),
    );
  });
});
