import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './App';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import { offsetLimitPagination } from '@apollo/client/utilities';
import { setupStore } from './store';
import { Provider } from 'react-redux';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        ships: offsetLimitPagination(),
      }
    }
  }
});

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: cache,
});

const store = setupStore();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
