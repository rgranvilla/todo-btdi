import React from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { MdDragHandle } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { deleteCard } from '../../features/todosReducer';

import { Container, GrabbingBar } from './styles';

function Card({ content, cardId, listId, index }) {
  const dispatch = useDispatch();

  function handleDeleteCard() {
    dispatch(deleteCard({ cardId, listId }));
  }

  return (
    <Container>
      <div className="wrapper">
        <header>
          <FiEdit />
          <FiTrash2 onClick={handleDeleteCard} />
        </header>
        <main>
          <p>{content}</p>
        </main>
        <GrabbingBar>
          <MdDragHandle />
        </GrabbingBar>
      </div>
    </Container>
  );
}

export default Card;
