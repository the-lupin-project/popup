import * as actionTypes from '../constants/actionTypes';

const initialState = {
  events: [],
  // title: '',
  // description: '',
  // maxAttendees: 0,
  // host: '',
  // location: '',
  // cuisineType: '',
  // rating: 0,
  // start: undefined,
  // end: undefined,
  // date: undefined,
  // price: 0,
};

const reducer = (state = initialState, action) => {
  let events;
  // right now we'll only handle getting and displaying the events;
  switch (action.type) {
    case actionTypes.GET_EVENTS:
      events = action.payload;
      return {
        ...state,
        events,
      };
    default:
      return state;
  }
};

export default reducer;
