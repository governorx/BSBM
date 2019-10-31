import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Navbar, Nav, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';
import Topbar from '../components/Topbar.jsx';


configure({adapter: new Adapter()});

it('Should Render Topbar without crashing', () => {
  const div = document.createElement('div');
  render(<Topbar />, div);
  unmountComponentAtNode(div);
});

it('Should Render all of the Topbar props', () => {
  const wrapper = shallow(<Topbar />);
  expect(wrapper.find(Nav).at(0).props().children[0].props.href).toBe('#home');
  expect(wrapper.find(Nav).at(0).props().children[1].props.href).toBe('#link');
  expect(wrapper.find(Nav).at(0).props().children[2].props.children).toHaveLength(5);
});
