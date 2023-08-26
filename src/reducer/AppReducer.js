const appReducer = (state, { type, payload }) => {
  switch (type) {
    case "TOGGLE_FILTER":
      return { ...state, showFilter: !state.showFilter };
    case "TOGGLE_SEARCH":
      return { ...state, showGuest: false, showSearch: true };
    case "TOGGLE_GUEST":
      return { ...state, showSearch: false, showGuest: true };
    case "SET_FILTER":
      return {
        ...state,
        city:payload.city,
        apartments: payload.apartments,
        noOfChildren: payload.noOfChildren,
        noOfAdults: payload.noOfAdults,
      };
    default:
      return state;
  }
};
export default appReducer;
