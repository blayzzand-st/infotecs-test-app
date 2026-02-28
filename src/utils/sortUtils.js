export const SORT_STATES = {
  DEFAULT: 'default',
  ASC: 'asc',
  DESC: 'desc',
};

export const getNextSortState = (state) => {
  switch (state) {
    case SORT_STATES.DEFAULT:
      return { state: SORT_STATES.ASC, description: 'Ascending order' };
    case SORT_STATES.ASC:
      return { state: SORT_STATES.DESC, description: 'Descending order' };
    case SORT_STATES.DESC:
      return { state: SORT_STATES.DEFAULT, description: 'No sorting applied' };
    default:
      return { state: SORT_STATES.DEFAULT, description: 'No sorting applied' };
  }
};

export const initialState = { activeKey: null, direction: SORT_STATES.DEFAULT };

export const reducer = (state, colKey) => {
  // Если нажали на кнопку, которая сейчас не отслеживается -
  // то начинаем отслеживать нажатую кнопку
  if (colKey !== state.activeKey) {
    return {
      activeKey: colKey,
      direction: SORT_STATES.ASC,
    };
  }

  const next = getNextSortState(state.direction).state;

  return {
    activeKey: next === SORT_STATES.DEFAULT ? null : colKey,
    direction: next,
  };
};
