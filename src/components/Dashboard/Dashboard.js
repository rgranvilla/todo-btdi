import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

import AddListButton from '../AddListButton/AddListButton';
import List from '../List/List';

function Dashboard() {
  const lists = useSelector(state => state.todos);

  return (
    <Container>
      {lists?.map((list, index) => (
        <List
          title={list.listTitle}
          cards={list.cards}
          listId={list.listId}
          key={list.listId}
        />
      ))}
      <AddListButton />
    </Container>
  );
}

export default Dashboard;
