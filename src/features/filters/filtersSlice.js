const initialState = {
  status: "All",
  colors: [],
};
export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/statusFilterChanged": {
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    }
    case "filters/colorFilterChanged": {
      let { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          {
            if (state.colors.includes(color)) {
              return state;
            }
          }
          return {
            ...state,
            colors: state.colors.concat(color),
          };
        default:
          return state;
      }
    }
    default:
      return state;
  }
}
