import * as React from 'react';
import {mount} from 'enzyme';
import {createWithAppMountOptions} from 'tests/utilities';

import {Page} from '@shopify/polaris';
import HomeIndex from '../HomeIndex';

jest.mock('@shopify/polaris', () => ({
  ...require.requireActual('@shopify/polaris'),
  Page: function Page() {
    return null;
  },
}));

describe('<HomeIndex />', () => {
  describe('<Page />', () => {
    it('renders', () => {
      const homeIndex = mount(<HomeIndex />, createWithAppMountOptions());
      expect(homeIndex.find(Page)).toExist();
    });

    it('renders app title', () => {
      const homeIndex = mount(<HomeIndex />, createWithAppMountOptions());
      expect(homeIndex.find(Page)).toHaveProp('title', 'App Name');
    });
  });
});
