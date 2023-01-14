import * as Koa from 'koa';
import * as session from 'koa-session';

import {ip, port} from '../config/server';
import renderApp from './render-app';

const app = new Koa();

app.use(session(app));

app.use(renderApp);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[init] listening on ${ip}:${port}`);
});

export default app;
