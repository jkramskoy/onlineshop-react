//tamplate,example file for using Redux library
const redux = require("redux");
const create = redux.createStore;

const initialState = {
  counter: 0,
  auth: false,
};

const rootReducer = (state = initialState, action) => {
  if (action.type == "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type == "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
};

const store = create(rootReducer);

//console.log(store.getState());

store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 100 });

//console.log(store.getState());
