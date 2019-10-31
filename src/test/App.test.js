import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

/*
* This is the basic react test - does you component render on the page or not
* Each of the components will have this.
* This one is different because its the whole application
*/
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
