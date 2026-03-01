export const initialState = { type: '', activeKey: null, value: null };

export const FILTER_ACTIONS = {
  TOGGLE: 'toggle',
  CLOSE: 'close',
  SUBMIT: 'submit',
};

export const filterReducer = (state, payload) => {
  switch (payload.type) {
    case FILTER_ACTIONS.TOGGLE:
      if (payload.colKey === state.activeKey) {
        return { activeKey: null, value: null };
      }

      return { activeKey: payload.colKey, value: null };

    case FILTER_ACTIONS.SUBMIT:
      return { activeKey: state.activeKey, value: payload.value };

    case FILTER_ACTIONS.CLOSE:
      return { activeKey: null, value: null };

    default:
      return state;
  }
};
