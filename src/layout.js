const div1 = document.createElement('div');
div1.classList.add('banner');

const h1 = document.createElement('h1');
h1.innerHTML = 'To-Do List';
const listsTitleHead = document.createElement('h2');
listsTitleHead.innerHTML = 'My Lists';
listsTitleHead.id = 'titleHead';
div1.appendChild(h1);
div1.appendChild(listsTitleHead);

const div2 = document.createElement('div');
div2.classList.add('sidebar');

const h3 = document.createElement('h3');
h3.innerHTML = 'My Lists';
h3.id = 'titleSide';
const newListDiv = document.createElement('div');
newListDiv.innerHTML = 'Add new list';
newListDiv.id = 'addItem';
div2.appendChild(h3);
div2.appendChild(newListDiv);

const div3 = document.createElement('div');
div3.classList.add('pitch');

function renderLayout() {
    document.body.appendChild(div1);
    document.body.appendChild(div2);
    document.body.appendChild(div3);
}

export {renderLayout};