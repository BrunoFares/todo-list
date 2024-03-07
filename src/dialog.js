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
dialog.appendChild(close);
dialog.appendChild(form);

function generateDialog() {
    document.body.appendChild(dialog);
    dialog.showModal();
}

close.addEventListener('click', event => {
    event.preventDefault();
    dialog.close();
});

export { generateDialog };