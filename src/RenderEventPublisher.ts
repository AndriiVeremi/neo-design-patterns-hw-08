import { RenderContext } from './interfaces/RenderContext';
import { RenderEventSubscriber } from './interfaces/RenderEventSubscriber';

export class RenderEventPublisher {
  private static subscribers: RenderEventSubscriber[] = [];

  static subscribe(subscriber: RenderEventSubscriber): void {
    RenderEventPublisher.subscribers.push(subscriber);
  }

  static unsubscribe(subscriber: RenderEventSubscriber): void {
    RenderEventPublisher.subscribers = RenderEventPublisher.subscribers.filter(
      (sub) => sub !== subscriber
    );
  }

  static notify(context: RenderContext): void {
    for (const subscriber of RenderEventPublisher.subscribers) {
      subscriber.update(context);
    }
  }
}