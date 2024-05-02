const result = document.querySelector('.js_result');

const token = localStorage.getItem('token');

if (!token) {
  console.log(token);
  result.classList.remove('hidden');
} else {
  fetch('https://api-nodejs-project-bilyana-1.onrender.com/user/alluser', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // ìntar en el HTML los datos de todos los usuarios
    });
}

const logout = document.querySelector('.js-logout');

function handleClickLogout(event) {
  localStorage.removeItem('token');
}
logout.addEventListener('click', handleClickLogout);
