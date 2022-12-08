// alert('asdf');

const $ = (str) => document.querySelector(str);

const nameElement = $('h1.inline');
const connectNameElement = $('span.red');
const studentNoElement = $('span.studentNo');
const emailElemnt = $('span.email');
const inputModalElement = $('#inputMadal');
const modalSubmitBtn = $('button.modalSubmit');

const getLocalItem = (str) => localStorage.getItem(str);

// const [localName, localStdNo, localEmail] =
// [getLocalItem('userName'), getLocalItem('studentNo'), getLocalItem('email')];

const localName = getLocalItem('userName');
const localStdNo = getLocalItem('studentNo');
const localEmail = getLocalItem('email');

const setValue = (name, stdNo, email) => {
  nameElement.textContent = name;
  connectNameElement.textContent = name;
  studentNoElement.textContent = `학번 : ${stdNo}`;
  emailElemnt.textContent = `이메일 : ${email}`;
};

if (localName && localStdNo && localEmail) {
  setValue(localName, localStdNo, localEmail);
}

const filter = {
  userName: /^[가-힣a-zA-Z]{1,10}/,
  studentNo: /^[0-9]{9}/,
  email: /^[a-zA-Z0-9]+@+[a-zA-Z-0-9]+\.+[a-zA-Z]/,
};

const engToKorName = {
  userName: '이름',
  studentNo: '학번',
  email: '이메일',
};

// modal open
nameElement.onclick = () => inputModalElement.showModal();

// modal btn click
modalSubmitBtn.onclick = () => {
  const modalFormElement = $('.modalForm');
  const formData = new FormData(modalFormElement);
  let checkValue = false;

  for (const [key, value] of formData) {
    checkValue = filter[key].test(value);
    if (checkValue === false) {
      alert(`${engToKorName[key]} 값을 확인해 주세요!`);
      break;
    }
  }

  if (checkValue) {
    const data = [];
    formData.forEach((value, key) => {
      data.push(value);
      localStorage.setItem(key, value);
    });
    setValue(...data);
    inputModalElement.close();
  }
};

inputModalElement.onclick = (event) => {
  if (event.target.nodeName === 'DIALOG') {
    inputModalElement.close();
  }
};
