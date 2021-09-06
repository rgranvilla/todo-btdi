import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch, connect } from 'react-redux';

import { deleteList } from '../../features/todosReducer';
import Card from '../Card/Card';
import AddCardButton from '../AddCardButton/AddCardButton';

import { Container } from './styles';

function List({ title, cards, listId, indexList }) {
  const dispatch = useDispatch();
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  useEffect(() => {
    switch (title) {
      case 'To Do':
        setShowDeleteIcon(false);
        break;
      case 'In Progress':
        setShowDeleteIcon(false);
        break;
      case 'Completed':
        setShowDeleteIcon(false);
        break;
      default:
        setShowDeleteIcon(true);
    }
  }, [title]);

  const counterCards = cards?.length ? cards.length : 0;

  function handleDeleteList() {
    dispatch(deleteList({ listId }));
  }

  return (
    <Container>
      <header className="header-wrapper">
        <div>
          {showDeleteIcon && <FiTrash2 onClick={handleDeleteList} />}
          <h4>{title}</h4>
        </div>
        <div className="counter">
          <p>{counterCards}</p>
        </div>
      </header>
      <main className="content">
        <ul>
          {cards?.map((card, index) => (
            <Card
              listId={listId}
              key={card.id}
              indexCard={index}
              indexList={indexList}
              cardId={card.id}
              content={card.content}
            />
          ))}
        </ul>
      </main>

      <footer>
        <AddCardButton listId={listId} />
      </footer>
    </Container>
  );
}

export default connect()(List);
