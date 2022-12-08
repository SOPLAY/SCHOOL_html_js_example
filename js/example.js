// alert('asdf');

const $ = (str) => document.querySelector(str);

const nameElement = $('h1.inline');
const connectNameElement = $('span.red');

const localName = localStorage.getItem('name');
if (localName) {
  nameElement.textContent = localName;
  connectNameElement.textContent = localName;
}

nameElement.onclick = () => {
  const inputName = prompt('이름을 입력해 주세요.');
  if (inputName) {
    localStorage.setItem('name', inputName);
    nameElement.textContent = inputName;
    connectNameElement.textContent = inputName;
  } else {
    alert('이름이 입력되지 않았습니다.');
  }
};
