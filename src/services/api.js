const dataApi = (data) => {
  return fetch('https://dev.adalab.es/api/projectCard',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' }
    }
  )
    .then(response => response.json())

}

export default dataApi;