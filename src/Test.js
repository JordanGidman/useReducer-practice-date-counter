import { useReducer } from "react";

const initialState = {
  count: 0,
};

function Test() {
  function reducer(state, action) {
    switch (action.type) {
      case "add":
        return {
          ...state,
          count: state.count + action.payload,
        };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        className=""
        onClick={() =>
          dispatch({
            type: "add",
            payload: 1,
          })
        }
      >
        X
      </button>
    </div>
  );
}

export default Test;
