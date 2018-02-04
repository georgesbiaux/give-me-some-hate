import React from 'react';

import { FormattedMessage } from 'react-intl';
import './style.css';

const Home = () => (
  <div>
    <p className="intro">
      <FormattedMessage
        id="home.get-started"
        defaultMessage="To get started, edit"
      />
      <code className="intro-code">src/App.js</code>
      <FormattedMessage id="home.save-to-reload" />
    </p>
  </div>
);

export default Home;
