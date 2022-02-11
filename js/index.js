import * as storage from './storage/index.js';
import * as api from './api/index.js';

async function onSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const username = form.username.value;
  const password = form.password.value;

  const userInfo = await api.auth(username, password);

  if (userInfo) {
    storage.save('token', userInfo.token);
    alert("Login success!")
    window.location.reload()
  } else {
    form.reset();
  }
}

async function setup() {
  const form = document.querySelector('form');

  window.api = api;

  console.log(api.isAuthed())

  if (api.isAuthed()) {
    form.style.display = 'none';
    document.querySelector('main').innerHTML = `
    <div class="container">
      <h1>You are logged in already</h1>
      <button class="btn btn-primary" onclick="api.logOut()">Log Out</button>
    </div>`;
  } else {
    form.addEventListener('submit', onSubmit);
  }
}

setup();