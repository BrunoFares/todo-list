const dialog = document.createElement('dialog');
const form = document.createElement('form');
form.action = 'GET';

const label = document.createElement('label');
label.htmlFor = 'listTitle';
label.innerHTML = 'Name of the list'

const input = document.createElement('input');
input.type = 'text';
input.id = 'listTitle';
input.name = 'listTitle';

const btn = document.createElement('button');
btn.type = 'submit';
btn.value = 'default';
btn.id = 'confirmBtn';
btn.innerHTML = 'Confirm';

form.appendChild(label);
form.appendChild(input);
form.appendChild(btn);
dialog.appendChild(form);

function generateDialog() {
    document.body.appendChild(dialog);
}

export { generateDialog };