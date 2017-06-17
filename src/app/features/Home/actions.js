import fetch from 'isomorphic-fetch'
// ------------------------------------
// Constants
// ------------------------------------
export const TIMER = 'TIME'

function fetchTime () {
  return fetch(`https://script.googleusercontent.com/macros/echo?user_content_key=pIpaxeaNsDxX9wZE5adDSVH8RYp66delG49bSk0uk3RjnNcTgIJsNsOFMivEtiVQe8JF72YS1FCxmBF2yKdEdlYXb0Oapk_Ym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJ9GRkcRevgjTvo8Dc32iw_BLJPcPfRdVKhJT5HNzQuXEeN3QFwl2n0M6ZmO-h7C6eIqWsDnSrEd&lib=MwxUjRcLr2qLlnVOLh12wSNkqcO1Ikdrk`)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      ).then(json => {
        return json.fulldate
      })
}

// action creator
export const loadTime = () => ({
  type: TIMER,
  payload: fetchTime()
})

export const actions = {
  loadTime
}
