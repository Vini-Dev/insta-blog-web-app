import { FC } from 'react';

import { ThemeProvider } from 'styled-components';

import { createBrowserHistory } from 'history';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'src/components/Toast';
import Routes from 'src/routes/Routes';
import { store, persistor } from 'src/store/index';
import GlobalStyle from 'src/styles/GlobalStyle';
import { theme } from 'src/styles/themes/light';

const history = createBrowserHistory();

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes />
            <Toast />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
