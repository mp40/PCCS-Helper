const updatePathReducer = (state, payload) => ({ ...state, activeModal: payload });

export default (state, action) => {
  switch (action.type) {
    case 'MODAL_SHOWN':
      return updatePathReducer(state, action.payload);
    default:
      return state;
  }
};
