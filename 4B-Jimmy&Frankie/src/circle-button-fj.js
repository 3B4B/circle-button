import { html, css, LitElement } from 'lit';
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
//https://dev.to/cicciosgamino/dark-theme-on-litelement-app-32a3
export class CircleButtonFj extends LitElement {

  //Update so button is somehow a circle
  //Colors
  //CSS Vars
  static get styles() {
    return css`
      :host {
        display: inline; 
        color: var(--circle-button-fj-text-color, #000);
      }
      
      :host([disabled]){
        cursor: not-allowed;
        pointer-events: none;
        --bk-color: #ff0000;
      }
      
      :host([contrast]) {
        --bk-color: #000000;
        --font-color: #39FF14;
        --secondary-font-color: #83EEFF;
              
      }

      :host([dark]){
        --bk-color: #000000;
        --font-color: #FFFFFF;
      }

      :host:not([dark]) {
        --bk-color: #FFFFFF;
        --font-color: #000000;
      }

      a {
        background-color: var(--bk-color);
        border-radius: 100%; 
        border:2px solid #000000;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        display:inline-block;
        cursor:pointer;
 
        height: 80px; 
        width: 80px; 

        color: var(--font-color);


      }
      a:hover {
      
        border: 2.5px solid #000000;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
      a:active {
        border: 3px solid #000000;
      }       
      button {
        border: none; 
        background-color: transparent;
        font-family: "Courier New", monospace;
        font-size: small;
        color: var(--font-color);
      }
      span {
        font-family: "Andale Mono", monospace; 
        font-weight: 1000;
        font-size: small;  
        color: var(--secondary-font-color);
      }
      
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      icon: { type: String },
      disabled: { type: Boolean, reflect: true },
      description: { type: String },
      contrast: { type: Boolean, reflect: true },
      dark: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.title = 'Yes';
    this.description = ''
    this.link = "https://blog.hubspot.com/marketing/call-to-action-examples";
    this.icon = null;
    this.disabled = false;
    this.dark = false;
  }

  //Add onclick function
  __clickButton(e) {
    e.preventDefault();
    let audio = new Audio(new URL(`airhorn.mp3`, import.meta.url).href);
    audio.play();
    audio.onended = () => {
      window.open(this.link, '_blank', 'noopener');
    }
  }

  // <a> tag wrapping a span
  render() {
    return html`
    

  <a @click="${this.__clickButton}" class="ctaButton" href=${this.link} tabindex="-1" rel="noopener">
      <button class="ctaButton" ?disabled="${this.disabled}">
        ${this.icon ? html`<simple-icon-lite icon=${this.icon}></simple-icon-lite>` : ``}
        <br>
        <span>${this.title}</span>
        <br>
        ${this.description}
      </button>
  </a>


 
    `;
  }
}
