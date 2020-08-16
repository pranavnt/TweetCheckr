import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import { Header, Message, Table, Icon } from 'semantic-ui-react';
import './Popup.css';

const Popup = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [probability, setProbability] = useState('');

  useEffect(() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      let title = tabs[0].title;
      setCurrentUrl(url);
      setCurrentTitle(title);
      console.log(url, title);
    });
  });

  return (
    <div style={{ padding: '2em' }}>
      {' '}
      <Header size="huge">Tweetcheckr</Header>
      <Message>Tweet</Message>
    </div>
  );
};

export default Popup;
