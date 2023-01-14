import * as React from 'react';
import {Context} from 'koa';
import {resolve} from 'path';
import {readJSONSync} from 'fs-extra';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import HTML, {DOCTYPE} from '@shopify/react-html';

import {vendorBundleUrl} from '../config/server';
import App from '../app';

const assetsPath = resolve(__dirname, '../build/client/assets.json');

export default function renderApp(ctx: Context) {
  const {js, css} = readJSONSync(assetsPath).entrypoints.main;
  const scripts =
    // eslint-disable-next-line no-process-env
    process.env.NODE_ENV === 'development'
      ? [{path: vendorBundleUrl}, ...js]
      : js;

  const context = {};

  try {
    ctx.status = 200;
    ctx.body =
      DOCTYPE +
      renderToString(
        // eslint-disable-next-line react/jsx-pascal-case
        <HTML scripts={scripts} styles={css}>
          <StaticRouter location={ctx.request.url} context={context}>
            <App />
          </StaticRouter>
        </HTML>,
      );
  } catch (error) {
    throw error;
  }
}
