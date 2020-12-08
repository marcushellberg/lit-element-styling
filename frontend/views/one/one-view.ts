import "./child-component";
import { css, customElement, html, LitElement } from "lit-element";

@customElement("one-view")
export class OneView extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 12px;
      }
    `;
  }

  render() {
    return html`
      <p>Content placeholder</p>
      <child-component></child-component>

      <div class="warning">Here be dragons</div>
    `;
  }
}
