export function myCreateStore(reducer) {
  let state = reducer(undefined, { type: "doiqwjoidhqbuojiqhwciqwjchbqw" });
  let subFns = [];

  function dispatch(action) {
    state = reducer(state, action);
    subFns.forEach((subFn) => subFn());
  }

  function getState() {
    return state;
  }

  function subscribe(cb) {
    subFns.push(cb);
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}