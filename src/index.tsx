import dva from 'dva';
import './index.less';
import registerServiceWorker from './registerServiceWorker';
import { routerConfig } from './Routes'
const app = dva();

app.router(routerConfig);
app.start('#root');
registerServiceWorker();
