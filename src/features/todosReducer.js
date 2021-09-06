import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const todosReducer = createSlice({
  name: 'todos',
  initialState: [
    {
      listId: 0,
      listTitle: 'To Do',
      cards: [
        {
          id: 0,
          content: 'This is a test card',
        },
        {
          id: 1,
          content: 'This is another test card 1',
        },
        {
          id: 2,
          content: 'This is another test card 2',
        },
      ],
    },
    {
      listId: 1,
      listTitle: 'In Progress',
      cards: [
        {
          id: 3,
          content: 'This is another test card 3',
        },
      ],
    },
    {
      listId: 2,
      listTitle: 'Completed',
      cards: [],
    },
  ],
  reducers: {
    addList: (state, action) => {
      const newList = {
        id: uuidv4(),
        listTitle: action.payload,
        cards: [],
      };
      return [...state, newList];
    },
    deleteList: (state, action) => {
      return state.filter(list => list.listId !== action.payload.listId);
    },
    addCard: (state, action) => {
      const newCard = {
        id: uuidv4(),
        content: action.payload.content,
      };

      const newState = state.map(list => {
        if (list.listId === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;
    },
    deleteCard: (state, action) => {
      state.map(lists =>
        lists.listId === action.payload.listId
          ? (lists.cards = [
              lists.cards.slice(0, action.payload.indexCard),
              lists.cards.slice(action.payload.indexCard + 1),
            ].flat())
          : { ...lists },
      );
    },
  },
});

export const { addList, deleteList, addCard, deleteCard } =
  todosReducer.actions;

export default todosReducer.reducer;
