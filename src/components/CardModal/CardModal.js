import React, { useRef, useCallback, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDispatch, connect } from 'react-redux';
import TextArea from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';

import { updateCard } from '../../features/todosReducer';

import {
  Background,
  Container,
  CloseModalButton,
  CardContainer,
  ControlContainer,
} from './styles';

function CardModal({
  content,
  cardId,
  listId,
  indexCard,
  indexList,
  showModal,
  setShowModal,
}) {
  const dispatch = useDispatch();

  const [text, setText] = useState(content);
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal],
  );

  function handleInputChange(e) {
    setText(e.target.value);
  }

  function handleUpdateCard() {
    const content = text;
    dispatch(updateCard({ indexCard, content, listId }));
    setShowModal(prev => !prev);
  }

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <Container>
              <div>
                <CardContainer>
                  <CloseModalButton
                    aria-label="Close modal"
                    onClick={() => setShowModal(prev => !prev)}
                  />
                  <TextArea
                    value={text}
                    onChange={handleInputChange}
                    className="textarea-input"
                  />
                </CardContainer>
                <ControlContainer>
                  <div>
                    <Button
                      className="teste"
                      onMouseDown={handleUpdateCard}
                      variant="contained"
                      style={{ color: 'white', backgroundColor: '#5aac44' }}
                    >
                      Update Card
                    </Button>
                  </div>
                </ControlContainer>
              </div>
            </Container>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
}

export default connect()(CardModal);
