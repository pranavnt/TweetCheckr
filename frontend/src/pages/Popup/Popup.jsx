import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import { Header, Message, Table, Icon } from 'semantic-ui-react';
import './Popup.css';

const Popup = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [probability, setProbability] = useState('');
  const [tone, setTone] = useState('');
  const [emotion, setEmotion] = useState('');

  useEffect(() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      let title = tabs[0].title;
      setCurrentUrl(url);
      setCurrentTitle(title);
      
    });
    fetch('/factCheck').then(res => res.json()).then(data => {
      setProbability(data)
    })

  });

  return (
    <div style={{ padding: '2em' }}>
      {' '}
      <Header size="huge">Tweetcheckr</Header>
      <Table celled stackable>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>Tweet</Table.Cell>
            <Table.Cell id="tweetContents">Tweet Contents</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table celled stackable>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>Analysis</Table.Cell>
            <Table.Cell negative>
              <Icon name="warning" />
              Misinformation, {probability}% confident
            </Table.Cell>

          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default Popup;
