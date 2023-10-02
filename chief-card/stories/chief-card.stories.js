import { html } from 'lit';
import '../src/chief-card.js';

export default {
  title: 'ChiefCard',
  component: 'chief-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <chief-card
      style="--chief-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </chief-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
