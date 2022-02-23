import { html } from 'lit';
import '../src/user-profile.js';

export default {
  title: 'UserProfile',
  component: 'user-profile',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <user-profile
      style="--user-profile-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </user-profile>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
