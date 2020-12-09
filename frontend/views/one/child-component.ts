import { customElement, LitElement, html, css } from "lit-element";

@customElement("child-component")
export class ChildComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    p {
      color: var(--my-color, blue);
    }
  `;

  render() {
    return html`
      <p>This is a child component</p>
      <button part="button">It has a button</button>
    `;
  }
}
