const getData = url => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => resolve(res.json()))
      .catch(err => reject(err));
  });
};
getData("https://jsonplaceholder.typicod.com/posts/1")
  .then(res => console.log(res))
  .catch(err => console.log(err));
