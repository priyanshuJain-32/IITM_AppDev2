form = new FormData(document.getElementById('my-form'));
fetch('https://httpbin.org/post', {
  method: 'POST',
  body: form
});