import { initstore } from "../App";

const reducer = (oldstate = initstore, action) => {
  console.log(oldstate, action);
  switch (action.type) {
    case "inccount":
      return { ...oldstate, count: oldstate.count + 1 };
    case "deccount":
      return { ...oldstate, count: oldstate.count - 1 };
    default:
      return oldstate;
  }
};

export { reducer };
