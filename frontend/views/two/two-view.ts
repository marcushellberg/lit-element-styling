import { css, customElement, html, LitElement } from "lit-element";

@customElement("two-view")
export class TwoView extends LitElement {
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
      <div>
        Content placeholder

        <div class="warning">Yup, dragons</div>
      </div>
    `;
  }
}
