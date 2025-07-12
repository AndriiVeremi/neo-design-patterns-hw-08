import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";

export class Section implements DocNode {
  constructor(
    private title: string,
    private renderer: DocRenderer,
    private children: DocNode[] = [],
    private level: number = 1
  ) {}

  add(child: DocNode): void {
    this.children.push(child);
  }

  render(): string {
    const startTime = performance.now();
    let content = this.renderer.renderHeader(this.level, this.title);
    for (const child of this.children) {
      content += child.render();
    }
    const endTime = performance.now();
    RenderEventPublisher.notify({
      type: 'Section',
      content: this.title,
      level: this.level,
      renderTime: endTime - startTime,
    });
    return content;
  }
}
