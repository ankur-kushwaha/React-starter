function customFetch(url) {
  return fetch(__APIURL__ + url).then((res) => res.json());
}

export default customFetch;
