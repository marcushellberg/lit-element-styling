import "./child-component";
import { css, customElement, html, LitElement } from "lit-element";
import "@vaadin/vaadin-text-field";

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
      <p>Here's some text</p>

      <child-component></child-component>

      <vaadin-text-field label="Enter some text"></vaadin-text-field>

      <div class="warning">Here be dragons</div>
    `;
  }
}
