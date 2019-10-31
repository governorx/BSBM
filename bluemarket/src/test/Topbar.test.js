import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Navbar, Nav, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';
import Topbar from '../components/Topbar.jsx';

/*
* This is Part of a Testing Framework Called Enzyme it will make testing in the
* future easier but as we have no functionality rn it does little but add
* shallow rendering
*/
configure({adapter: new Adapter()});

/*
* This is the basic react test - does you component render on the page or not
* Each of the components will have this.
*/
it('Should Render Topbar without crashing', () => {
  const div = document.createElement('div');
  render(<Topbar />, div);
  unmountComponentAtNode(div);
});

/*
* What this is doing is checking to see if all of the sub componets are rendering
*/
it('Should Render all of the Topbar props', () => {
  const wrapper = shallow(<Topbar />);
  expect(wrapper.find(Nav).at(0).props().children[0].props.href).toBe('#home');
  expect(wrapper.find(Nav).at(0).props().children[1].props.href).toBe('#link');
  expect(wrapper.find(Nav).at(0).props().children[2].props.children).toHaveLength(5);
});
