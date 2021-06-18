const loginButton = document.querySelector('.login-validation');

loginButton.addEventListener('click', () => {
  const login = document.querySelector('#login');
  const password = document.querySelector('#password');
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const evaluationNote = document.querySelector('.evaluation-note');
for (let note = 1; note <= 10; note += 1) {
    let div = document.createElement('div');
    let input = document.createElement('input');
    let label = document.createElement('label');
    input.type = 'radio';
    input.name = 'rate';
    input.className = "form-check-input"
    input.id = note;
    input.value = note;
    label.className = "form-check-label"
    label.htmlFor = note;
    label.innerText = note;
    div.className = "form-check form-check-inline"
    div.appendChild(input);
    div.appendChild(label);
    evaluationNote.appendChild(div);
}

const submitButton = document.querySelector('#submit-btn');
const checkAgreement = document.querySelector('#agreement');

checkAgreement.addEventListener('change', (event) => {
  if (event.target.checked) {
    submitButton.disabled = false;
  }
});

const textAreaInput = document.querySelector('#textarea');

textAreaInput.addEventListener('keyup', () => {
  textAreaInput.parentNode.nextElementSibling.innerHTML = 500 - textAreaInput.value.length;
});

const form = document.querySelector('#evaluation-form');

function replaceNameElement() {
  const fullName = document.querySelector('#full-name');
  const firstName = document.querySelector('#input-name');
  const lastName = document.querySelector('#input-lastname');
  const nameParagraph = document.createElement('p');
  nameParagraph.innerHTML = `<strong>Nome:</strong> ${firstName.value} ${lastName.value}`;
  fullName.remove();
  form.appendChild(nameParagraph);
}

function replaceEmailElement() {
  const email = document.querySelector('#input-email');
  const emailParagraph = document.createElement('p');
  emailParagraph.innerHTML = `<strong>Email:</strong> ${email.value}`;
  email.remove();
  form.appendChild(emailParagraph);
}

function replaceHouseElement() {
  const house = document.querySelector('#house');
  const houseParagraph = document.createElement('p');
  houseParagraph.innerHTML = `<strong>Casa:</strong> ${house.value}`;
  house.remove();
  form.appendChild(houseParagraph);
}

function replaceFamilyElement() {
  const family = document.querySelectorAll('input[name="family"]');
  const familyContainer = document.querySelector('#family-container');
  const familyParagraph = document.createElement('p');
  for (let option = 0; option < family.length; option += 1) {
    if (family[option].checked) {
      familyParagraph.innerHTML = `<strong>Família:</strong> ${family[option].value}`;
    }
  }
  familyContainer.remove();
  form.appendChild(familyParagraph);
}

function replaceContentElement() {
  const content = document.querySelectorAll('.subject');
  const contentContainer = document.querySelector('#content-container');
  const contentParagraph = document.createElement('p');
  const checkedArray = [];
  for (let tech = 0; tech < content.length; tech += 1) {
    if (content[tech].checked) {
      checkedArray.push(content[tech].value);
    }
  }
  contentParagraph.innerHTML = `<strong>Matérias:</strong> ${checkedArray.join(', ')}`;
  contentContainer.remove();
  form.appendChild(contentParagraph);
}

function replaceRateElement() {
  const rate = document.querySelectorAll('input[name="rate"]');
  const evaluationContainer = document.querySelector('.evaluation-note');
  const rateParagraph = document.createElement('p');
  for (let option = 0; option < rate.length; option += 1) {
    if (rate[option].checked) {
      rateParagraph.innerHTML = `<strong>Avaliação:</strong> ${rate[option].value}`;
    }
  }
  evaluationContainer.remove();
  form.appendChild(rateParagraph);
}

function replaceCommentElement() {
  const comment = document.querySelector('#textarea');
  const commentContainer = document.querySelector('#textarea-container');
  const commentParagraph = document.createElement('p');
  commentParagraph.innerHTML = `<strong>Observações:</strong> ${comment.value} `;
  commentContainer.remove();
  form.appendChild(commentParagraph);
  form.removeChild(form.firstElementChild);
  form.removeChild(form.firstElementChild);
  form.removeChild(form.firstElementChild);
  form.removeChild(form.firstElementChild);
}

submitButton.addEventListener('click', () => {
  replaceNameElement();

  replaceEmailElement();

  replaceHouseElement();

  replaceRateElement();

  replaceFamilyElement();

  replaceContentElement();

  replaceCommentElement();
});

