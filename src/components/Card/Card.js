import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { useDispatch, connect } from 'react-redux';

import { deleteCard } from '../../features/todosReducer';
import CardModal from '../CardModal/CardModal';

import { Container } from './styles';

function Card({ content, cardId, listId, indexCard, indexList }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(prev => !prev);
  }

  function handleDeleteCard() {
    dispatch(deleteCard({ indexCard, indexList, cardId, listId }));
  }

  return (
    <Draggable draggableId={String(cardId)} index={indexCard}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="wrapper">
            <header>
              <FiEdit onClick={handleShowModal} />
              <FiTrash2 onClick={handleDeleteCard} />
              <CardModal
                showModal={showModal}
                setShowModal={setShowModal}
                content={content}
                cardId={cardId}
                listId={listId}
                indexCard={indexCard}
                indexList={indexList}
              />
            </header>
            <main>
              <p>{content}</p>
            </main>
          </div>
        </Container>
      )}
    </Draggable>
  );
}

export default connect()(Card);
