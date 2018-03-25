import './Actions';

var initialState = {
  searchData: []
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_SEARCH_DATA':
      return {
        ...state,
        searchData: action.data
      };
    default:
      return state;
  }
}

export default mainReducer;
