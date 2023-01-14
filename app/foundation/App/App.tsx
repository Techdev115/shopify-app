import * as React from 'react';
import {AppProvider} from '@shopify/polaris';
import Link from '../Link';
import Routes from '../Routes';

export default function App() {
  return (
    <AppProvider linkComponent={Link}>
      <Routes />
    </AppProvider>
  );
}
