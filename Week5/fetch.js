fetch('https//httpbin.org/uuid/404')
.then((response) => {
  console.log(response)
  if (!response.ok) {
    console.log("Response not ok");
    // Throw an error
    throw new Error('HTTP error, status = ' + response.status);
  }
  return response.json();
})
.then((data) => {
  console.log('Got data:', data);
})
.catch((error) => {
  console.log("IN catch:", error);
});
