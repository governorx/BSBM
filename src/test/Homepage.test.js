import React from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Homepage from '../components/Homepage.jsx';

configure({adapter: new Adapter()});

/*
* This is the basic react test - does you component render on the page or not
* Each of the components will have this.
*/
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*
* This is checking whether the background image is rendered
*
*/
it('Renders the Background image', () => {
  const wrapper = shallow(<Homepage/>)
  expect(wrapper.find('img').at(0).prop('src'))
  .toBe('ogdenhall.svg')
})

/*
* This is checking whether the background text is rendered
*/
it('Renders Background Text', () => {
  const wrapper = shallow(<Homepage/>)
  expect(wrapper.find('div').at(0).props()
  .children[1].props.children).toBe("Welcome to Blue Market")
});
