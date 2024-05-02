const inputName = document.querySelector('.js_name');
const inputEmail = document.querySelector('.js_email');
const inputPassword = document.querySelector('.js_password');
const inputBtn = document.querySelector('.js_btn');
const p = document.querySelector('.js_result');

const handleClick = () => {
  const user = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
  };
  fetch('https://api-nodejs-project-bilyana-1.onrender.com/user/register', {
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
      if (!data.success) {
        p.innerHTML = data.message;
      } else {
        p.innerHTML = ' registrado con exito';
      }
    });
};

inputBtn.addEventListener('click', handleClick);
