//===============================change theme==============================

const html = document.getElementsByTagName('html');
const input = document.getElementById('slider');
const toggle = document
  .getElementById('theme-switch__toggle')
  .addEventListener('change', changeTheme);

if (localStorage.theme) {
  html[0].dataset.theme = localStorage.theme;
} else {
  html[0].dataset.theme = 'light';
}

if (html[0].dataset.theme === 'dark') {
  input.classList.add('transform');
}

function changeTheme() {
  transition();
  if (this.checked) {
    document.documentElement.setAttribute(
      'data-theme',
      html[0].dataset.theme === 'light' ? 'dark' : 'light',
    );
    window.localStorage.setItem('theme', html[0].dataset.theme);
  } else {
    document.documentElement.setAttribute(
      'data-theme',
      html[0].dataset.theme === 'dark' ? 'light' : 'dark',
    );
    window.localStorage.setItem('theme', html[0].dataset.theme);
  }
  if (input.classList.contains('transform')) {
    input.classList.remove('transform');
  }
}

const transition = () => {
  document.documentElement.classList.add('transition');
  setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 400);
};

//=============================change language first variant===================

let en = {
  name: 'Vladyslav Sidikov',
  job: 'Junior Front End Developer',
};
let ru = {
  name: 'Владислав Сидиков',
  job: 'Junior Front End Разработчик',
};

function changeLang(lang) {
  lengthObjLang = Object.getOwnPropertyNames(lang).length;

  for (let i = 0; i <= lengthObjLang - 1; i++) {
    objKey = Object.getOwnPropertyNames(lang)[i];
    document.getElementById(objKey).innerText = func(objKey);
  }

  function func(a) {
    for (key in lang) {
      if (key == a) {
        return lang[key];
      }
    }
  }
}

//=============================change language second variant with localStorage===================

let txt = {
  en: { name: 'Vladyslav Sidikov', job: 'Junior Front End Developer' },
  ru: { name: 'Владислав Сидиков', job: 'Junior Front End Разработчик' },
};
document
  .getElementById('e-lang-en')
  .addEventListener('click', setLang.bind(null, 'en'));
document
  .getElementById('e-lang-ru')
  .addEventListener('click', setLang.bind(null, 'ru'));

function setLang(lang) {
  let p;
  if (!txt.hasOwnProperty(lang)) return;
  if (window.hasOwnProperty('localStorage'))
    window.localStorage.setItem('lang', lang);
  for (p in txt[lang]) {
    document.getElementById(p).innerText = txt[lang][p];
  }
}

var lang =
  (window.hasOwnProperty('localStorage') &&
    window.localStorage.getItem('lang', lang)) ||
  'en';
setLang(lang);
