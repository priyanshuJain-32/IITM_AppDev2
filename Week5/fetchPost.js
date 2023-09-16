data = {'name':'thejesh', 'city':'Bengaluru'};

fetch('https://httpbin.org', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data);
})
.catch((e) => {
  console.log('Error:', e);
});
      
