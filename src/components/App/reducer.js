const showModalReducer = (state, payload) => ({ ...state, activeModal: payload });

export default (state, action) => {
  switch (action.type) {
    case 'MODAL_SHOWN':
      return showModalReducer(state, action.payload);
    default:
      return state;
  }
};
