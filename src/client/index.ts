import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("app-viewport")
export class AppViewport extends LitElement {
   static styles = css`
    :host {
      color: blue;
    }
    :host p {
      margin: 0;
      min-height: 50vh;
      background: lime;
      display: grid;
      place-items: center;
    }
  `;

  @property()
  name?: string = 'World';

  // Render the UI as a function of component state
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

