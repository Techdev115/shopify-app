import * as React from 'react';
import {shallow} from 'enzyme';
import {Page, EmptyState} from '@shopify/polaris';
import NotFound from '../NotFound';

jest.mock('@shopify/polaris', () => ({
  ...require.requireActual('@shopify/polaris'),
  Page: function Page({children}: any) {
    return children;
  },
  EmptyState: function EmptyState({children}: any) {
    return children;
  },
}));

describe('<NotFound />', () => {
  it('renders one <Page />', () => {
    const notFound = shallow(<NotFound />);
    expect(notFound.find(Page)).toExist();
  });

  it('renders one <EmptyState />', () => {
    const notFound = shallow(<NotFound />);
    expect(notFound.find(EmptyState)).toExist();
  });
});
