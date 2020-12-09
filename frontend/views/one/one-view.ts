import "./child-component";
import { css, customElement, html, LitElement } from "lit-element";
import "@vaadin/vaadin-text-field";
import sharedStyles from "../../shared.css";

@customElement("one-view")
export class OneView extends LitElement {
  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: var(--lumo-space-m);
        --my-color: red;
      }

      p {
        color: var(--my-color);
      }

      child-component::part(button) {
        border-radius: 5px;
        background: hotpink;
        padding: 5px;
        border: none;
      }

      vaadin-text-field::part(label) {
        font-size: 20px;
      }
    `,
  ];

  render() {
    return html`
      <p>Here's some text</p>

      <child-component></child-component>

      <vaadin-text-field label="Enter some text"></vaadin-text-field>

      <div class="warning">Here be dragons</div>
    `;
  }
}
