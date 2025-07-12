import { RenderEventSubscriber } from '../interfaces/RenderEventSubscriber';
import { RenderContext } from '../interfaces/RenderContext';

export class SummaryCollector implements RenderEventSubscriber {
    private counts: { [key: string]: number } = {};

    update(context: RenderContext): void {
        this.counts[context.type] = (this.counts[context.type] || 0) + 1;
    }

    // This method would typically be called after all rendering is complete
    // For this exercise, we'll assume it's called at the end of main.ts
    logSummary(): void {
        const sections = this.counts['Section'] || 0;
        const paragraphs = this.counts['Paragraph'] || 0;
        const lists = this.counts['List'] || 0;
        console.log(`[Summary] Rendered ${sections} sections, ${paragraphs} paragraphs, ${lists} lists`);
    }
}