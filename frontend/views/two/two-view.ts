import { css, customElement, html, LitElement } from "lit-element";
import sharedStyles from "../../shared.css";

@customElement("two-view")
export class TwoView extends LitElement {
  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: 12px;
      }
    `,
  ];

  render() {
    return html`
      <div>
        Content placeholder

        <div class="warning">Yup, dragons</div>
      </div>
    `;
  }
}
