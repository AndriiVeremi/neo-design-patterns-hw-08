import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";

export class List implements DocNode {
  constructor(private items: string[], private renderer: DocRenderer) {}
  render(): string {
    const startTime = performance.now();
    const content = this.renderer.renderList(this.items);
    const endTime = performance.now();
    RenderEventPublisher.notify({
      type: 'List',
      content: '',
      items: this.items,
      renderTime: endTime - startTime,
    });
    return content;
  }
}
