import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SessionProvider } from './context/SessionContext';
import { ThemeProvider } from '@material-ui/core/styles';

describe('App Test', () => {
  it('Render without crashing', () => {
    const root = document.createElement('root');
    ReactDOM.render(
      <SessionProvider>
        <App />
      </SessionProvider>,
      root,
    );
    ReactDOM.unmountComponentAtNode(root);
  });
});
