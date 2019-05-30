import types from '../types';

const initialState = {
  showModal: false
};

const ModalReducer = (state = initialState, action) => {
  const mutatedState = { ...state };

  switch(action.type) {
    case types.toggleModalVisibility: {
      mutatedState.showModal = mutatedState.showModal === false;
    }
  }

  return mutatedState;
};

export default ModalReducer;
