function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
function redirectTo(url) {
  window.location.href = url;
}
  
function changeBackground1() {
  document.body.style.background = 'url(meme.jpg) no-repeat';
}

function changeBackground2() {
  document.body.style.background = 'url(meme.jpg) no-repeat';
}
function changeBackground3() {
  document.body.style.background = 'url(meme.jpg) no-repeat';
}
function changeBackground4() {
  document.body.style.background = 'url(meme.jpg) no-repeat';
}
function submitForm() {
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  if (name && phone && email && message) {
      alert('Thank you for reaching out! Your message has been received, and we\'ll get back to you as soon as possible. In the meantime, feel free to explore more of our offerings. Have a great day!');
  } else {
      alert('Please fill out all fields before submitting.');
  }
}
