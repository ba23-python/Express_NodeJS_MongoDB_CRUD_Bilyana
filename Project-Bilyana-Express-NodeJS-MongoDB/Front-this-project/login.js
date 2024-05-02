const inputEmail = document.querySelector('.js_email');
const inputPassword = document.querySelector('.js_password');
const inputBtn = document.querySelector('.js_btn');
const p = document.querySelector('.js_result');

const handleClick = () => {
  const user = {
    email: inputEmail.value,
    password: inputPassword.value,
  };
  fetch('https://api-nodejs-project-bilyana-1.onrender.com/user/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        localStorage.setItem('token', data.token);
      } else {
        p.innerHTML = data.message;
      }
    });
};

inputBtn.addEventListener('click', handleClick);
