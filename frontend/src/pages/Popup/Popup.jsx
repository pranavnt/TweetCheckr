import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import { Header, Message, Table, Icon } from 'semantic-ui-react';
import './Popup.css';

const Popup = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      let title = tabs[0].title;
      console.log(url, title);
    });
  });

  return (
    <div>
      {' '}
      <Header size="huge">Tweetcheckr</Header>
    </div>
  );
};

export default Popup;
