import { RenderEventSubscriber } from '../interfaces/RenderEventSubscriber';
import { RenderContext } from '../interfaces/RenderContext';

export class PerformanceSubscriber implements RenderEventSubscriber {
    private totalRenderTime: number = 0;

    update(context: RenderContext): void {
        if (context.renderTime) {
            this.totalRenderTime += context.renderTime;
        }
    }

    logTotalTime(): void {
        console.log(`[Performance] Total render time: ${this.totalRenderTime}ms`);
    }
}