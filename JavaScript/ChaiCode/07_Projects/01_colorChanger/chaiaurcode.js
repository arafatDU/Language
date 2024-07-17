const button = document.querySelectorAll('.button');
console.log(button);

button.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target.id);
    document.body.style.backgroundColor = e.target.id;
  });
})
