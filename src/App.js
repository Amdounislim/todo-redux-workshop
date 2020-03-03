import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import AddItems from './components/AddItems';
import ListItems from './components/ListItems';

function App() {
  return (
    <Container>
      <AddItems />
      <ListItems />
    </Container>
  );
}

export default App;
