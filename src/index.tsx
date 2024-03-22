import dva from 'dva';
import '../style/index.scss'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./loginPages/loginModel').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
// window.addEventListener('hashchange', (e) => {
//     console.log('hashchange')
// })