import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import ReactMarkdown from 'react-markdown';
import README from '../../utils/README.md';
const Home = styled.div``;

const HomeComponent = props => {
  const [text, setText] = useState('');
  fetch(README)
    .then(response => {
      return response.text();
    })
    .then(text => {
      setText(text);
    });
  return (
    <Home>
      <ReactMarkdown source={text} />
    </Home>
  );
};

export default HomeComponent;
