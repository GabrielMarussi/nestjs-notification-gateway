import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('NotificationController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/notifications (POST) - Success Email', async () => {
    const response = await request(app.getHttpServer() as App)
      .post('/notifications')
      .send({
        type: 'email',
        to: 'gabriel@mukai.com',
        message: 'E2E Test Message',
      });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      success: true,
      message: 'Notification sent successfully',
      type: 'email',
    });
  });

  it('/notifications (POST) - Success SMS', async () => {
    const response = await request(app.getHttpServer() as App)
      .post('/notifications')
      .send({
        type: 'sms',
        to: '11999999999',
        message: 'E2E SMS Test',
      });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      success: true,
      message: 'Notification sent successfully',
      type: 'sms',
    });
  });

  it('/notifications (POST) - Error: Invalid Type', async () => {
    const response = await request(app.getHttpServer() as App)
      .post('/notifications')
      .send({
        type: 'push',
        to: 'device-id',
        message: 'Should fail',
      });

    expect(response.status).toBe(400);
  });

  it('/notifications (POST) - Error: Missing Fields', async () => {
    const response = await request(app.getHttpServer() as App)
      .post('/notifications')
      .send({
        type: 'email',
      });

    expect(response.status).toBe(400);
  });
});
