const API_KEY = `548fddbc-b16a4210-9bb19577-b682b006`;

useEffect(function getGoods() {
  fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.featured && setGoods(data.featured);
      setLoading(false);
    });
}, []);
