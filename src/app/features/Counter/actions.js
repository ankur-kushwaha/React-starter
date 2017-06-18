// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
export const TIMER = "TIME";

// ------------------------------------
// Actions
// ------------------------------------
export function increment(value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  };
}

export const actions = {
  increment
};
