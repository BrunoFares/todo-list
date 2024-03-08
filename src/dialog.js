const dialog = document.createElement('dialog');
const form = document.createElement('form');
form.action = 'GET';
const fieldset = document.createElement('fieldset');

const label = document.createElement('label');
label.htmlFor = 'listTitle';
label.innerHTML = 'Name of the list'

const input = document.createElement('input');
input.type = 'text';
input.id = 'listTitle';
input.name = 'listTitle';

const submit = document.createElement('button');
submit.type = 'submit';
submit.value = 'default';
submit.id = 'confirmBtn';
submit.innerHTML = 'Confirm';

const close = document.createElement('button');
close.innerHTML = '×';

form.appendChild(label);
form.appendChild(input);
form.appendChild(submit);
fieldset.appendChild(form);
dialog.appendChild(close);
dialog.appendChild(fieldset);

function generateDialog() {
    document.body.appendChild(dialog);
    dialog.showModal();
}

close.addEventListener('click', event => {
    event.preventDefault();
    dialog.close();
});

submit.addEventListener('click', event => {
    event.preventDefault();
    dialog.close();
})

export { generateDialog };