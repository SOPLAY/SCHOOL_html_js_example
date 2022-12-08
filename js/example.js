// alert('asdf');

const $ = (str) => document.querySelector(str);

const nameElement = $('h1.inline');
const connectNameElement = $('span.red');
const inputModalElement = $('#inputMadal');
const modalSubmitBtn = $('button.modalSubmit');

const localName = localStorage.getItem('userName');

const setName = (name) => {
  nameElement.textContent = name;
  connectNameElement.textContent = name;
};

if (localName) {
  setName(localName);
}

// modal open
nameElement.onclick = () => inputModalElement.showModal();

// modal btn click
modalSubmitBtn.onclick = () => {
  const modalFormElement = $('.modalForm');
  const formData = new FormData(modalFormElement);
  for (const [key, value] of formData) {
    localStorage.setItem(key, value);
    if (key === 'userName') {
      setName(value);
    }
  }
};

inputModalElement.onclick = (event) => {
  if (event.target.nodeName === 'DIALOG') {
    inputModalElement.close();
  }
};
