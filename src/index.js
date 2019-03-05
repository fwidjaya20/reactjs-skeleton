import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {ApplicationRouting} from "./bootstraps/routing";

import './index.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/component.css';

ReactDOM.render(ApplicationRouting, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
