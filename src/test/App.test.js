import React from 'react';
import ReactDOM from 'react-dom';
import App from '../pages/app';

/*
 * Jest unit test cases. Test drivern development, cover UI, action, reducer parts.
 */

// App render test.
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
