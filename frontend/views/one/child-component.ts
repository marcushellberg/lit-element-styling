import { customElement, LitElement, html, css } from "lit-element";

@customElement("child-component")
export class ChildComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <p>This is a child component</p>
      <button>It has a button</button>
    `;
  }
}
