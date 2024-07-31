
import { createStore } from 'redux';



export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});


const initialState = { data: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;