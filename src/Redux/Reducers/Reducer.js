const initialState = {
    selectedFruits: [],
  };
  
  export default function Reducer(state = initialState, action) {
    switch (action.type) {
      case "SELECTED_FRUITS":
        return {
          ...state,
          selectedFruits: [...state.selectedFruits, "TOMATO"],
        };
      default:
        return state;
    }
  }
  
