import { OASElement } from '@oas-isui/core'

export class OASDescriptionsItem extends OASElement {
  static override get observedAttributes(): string[] {
    return ['label']
  }

  protected override render(): void {
    this.shadow.innerHTML = `<slot></slot>`
  }
}
