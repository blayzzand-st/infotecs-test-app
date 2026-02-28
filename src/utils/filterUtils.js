export const initialState = { activeKey: null, value: null };

export const filterReducer = (state, colKey) => {
  if (colKey !== state.activeKey) {
    return {
      activeKey: colKey,
      value: null,
    };
  }

  return {
    activeKey: null,
    value: null,
  };
};
