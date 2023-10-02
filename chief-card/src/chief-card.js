import { LitElement, html, css } from 'lit';

const chief = new URL('../assets/chief.jpg', import.meta.url).href;

export class ChiefCard extends LitElement {
  static properties = {
    version: {},
  };

  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },
      position: {
        type: String,
      }
    }
  }

  static get styles() {
    return css`
    :host((accent-color="blue")) .wrapper{
      background-color: blueviolet;
      color: white;
    }
    :host((accent-color="red")) .wrapper{
      background-color: red;
      color: white;
    }
    :host((accent-color="green")) .wrapper{
      background-color: green;
      color: white;
    }
    .wrapper {
      display: inline-block;
      background-color: blue;
      font-size: 24px;
      padding: 100px;
      text-align: center;
      max-width: 400px;
      margin: 20px auto;
      border: 3.5px solid;
    }   
    .wrapper img {
      max-width: 100%;
      height: auto;
      width: 100%;
      border: 3.5px solid;
    }
    @media only screen and (max-width: 1200px){
      .wrapper {
        background-color: pink;
      }
    }
    @media only screen and (max-width: 600px) {
      .wrapper {
        background-color: purple;
      }
    }
    @media only screen and (max-width: 425px){
      .wrapper {
        font-weight: normal;
      }
      .wrapper .header h2 {
        font-size: 12px;
      }
      .wrapper .paragraph p {
        font-size: 10px !important;
      }
      .wrapper {
        display: none;
      }
    }
  `
  }

  constructor() {
    super();
    this.name = "Dank Meme Collection Beware";
    this.position = "Here's a homemade Chief Keef meme enjoy!";
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="container">
        <img class="image" src ="${chief}"/>
          <div class="header">
            <h3>${this.name}</h3>
            <h4>${this.position}</h4>
          </div>
          <details class="details">
            <Summary>Hit Songs</summary>
            <div>
              <ul>
                <li>Love Sosa</li>
                <li>Don't Like</li>
                <li>Hate Being Sober</li>
              </ul>
            </div>
          </details>
        </div>
  </div>
    `;
  }
}

customElements.define('chief-card', ChiefCard);