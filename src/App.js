import React from 'react';
import './App.css';
import client from './Apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ExchangeRates from './ExchangeRates';
import TestQL from './TestQL';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex">
        <div>
          <h1>Working USD</h1>
          <ExchangeRates />
        </div>
        <div>
          <h1>Test GBP</h1>
          <TestQL />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
