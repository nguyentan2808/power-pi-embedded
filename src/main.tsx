import { render } from 'preact';
import App from './routes';
import './index.css';

render(<App />, document.getElementById('app') as HTMLElement);
