import * as PropTypes from 'prop-types';
import {merge} from 'lodash';
import {MountRendererProps} from 'enzyme';
import {createPolarisContext, polarisContextTypes} from '@shopify/polaris';
import {PartialRouterContext, createDefaultRouterContext} from './router';

export * from '@shopify/enzyme-utilities';

interface Configs {
  additionalOptions?: MountRendererProps;
  locale?: string;
  router?: PartialRouterContext;
}

export function createWithAppMountOptions(
  configs?: Configs,
): MountRendererProps {
  const polarisOptions = {
    context: {...createPolarisContext()},
    childContextTypes: polarisContextTypes,
  };

  const defaultRouter = createDefaultRouterContext();
  const mergedRouter = merge(defaultRouter, (configs && configs.router) || {});
  const routerOptions = {
    context: {
      router: mergedRouter,
    },
    childContextTypes: {
      router: PropTypes.object,
    },
  };

  const additionalOptions =
    configs && configs.additionalOptions ? {...configs.additionalOptions} : {};

  return merge(additionalOptions, polarisOptions, routerOptions);
}
