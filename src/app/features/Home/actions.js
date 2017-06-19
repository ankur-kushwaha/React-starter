import fetch from "app/utils/fetch";
// ------------------------------------
// Constants
// ------------------------------------
export const TIMER = "TIME";

function fetchTime() {
  return fetch(`/posts`).then((json) => json);
}

// action creator
export const loadTime = () => ({
  type: TIMER,
  payload: fetchTime()
});

export const actions = {
  loadTime
};
