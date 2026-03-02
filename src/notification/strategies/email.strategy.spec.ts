import { Test, TestingModule } from '@nestjs/testing';
import { EmailStrategy } from './email.strategy';
import { Logger } from '@nestjs/common';

describe('EmailStrategy', () => {
  let strategy: EmailStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailStrategy],
    }).compile();

    strategy = module.get<EmailStrategy>(EmailStrategy);
  });

  it('should be defined', () => {
    expect(strategy).toBeDefined();
  });

  it('should log the correct message when sending an email', async () => {
    const loggerSpy = jest.spyOn(Logger.prototype, 'log');
    const email = 'test@example.com';
    const message = 'Hello World';

    await strategy.send(email, message);

    expect(loggerSpy).toHaveBeenCalledWith(
      expect.stringContaining(`📧 Enviando EMAIL para ${email}: ${message}`),
    );
  });
});
