import './sass/main.scss';

const refs = {
  switch: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// localStorage.clear();

window.addEventListener('load', onCurrentTheme);
refs.switch.addEventListener('change', onChangeTheme);

function onCurrentTheme() {
  localStorage.getItem('ThemeDark', refs.switch.checked);
  refs.switch.checked = JSON.parse(localStorage.getItem('ThemeDark', refs.switch.checked));
  // console.log(refs.switch.checked);
  onCurrentClass();
}

function onChangeTheme(event) {
  event.preventDefault();
  onCurrentClass();
  localStorage.setItem('ThemeDark', refs.switch.checked);
}

function onCurrentClass() {
  if (refs.switch.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    // console.log(refs.switch.checked);
    return refs.body.classList.add(Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    // console.log(refs.switch.checked);
    return refs.body.classList.add(Theme.LIGHT);
  }
}
