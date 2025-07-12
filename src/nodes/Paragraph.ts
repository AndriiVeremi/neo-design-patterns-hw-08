import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";

export class Paragraph implements DocNode {
  constructor(private text: string, private renderer: DocRenderer) {}
  render(): string {
    const startTime = performance.now();
    const content = this.renderer.renderParagraph(this.text);
    const endTime = performance.now();
    RenderEventPublisher.notify({
      type: 'Paragraph',
      content: this.text,
      renderTime: endTime - startTime,
    });
    return content;
  }
}
