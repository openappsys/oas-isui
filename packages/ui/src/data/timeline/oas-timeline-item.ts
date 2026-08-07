import { OASElement } from '@oas-isui/core'

export class OASTimelineItem extends OASElement {
  static override get observedAttributes(): string[] {
    return ['time', 'color']
  }

  protected override render(): void {
    this.shadow.innerHTML = `<slot></slot>`
  }
}
