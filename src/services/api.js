const dataApi = (data) => {
  fetch('https://dev.adalab.es/api/projectCard',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' }
    }
  )
    .then(response => response.json())
    .then(data => {
      return data;
    })
}
export default dataApi;