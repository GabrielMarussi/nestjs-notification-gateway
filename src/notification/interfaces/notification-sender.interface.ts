export interface INotificationSender {
  send(to: string, message: string): Promise<void>;
}
