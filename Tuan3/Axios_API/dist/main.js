var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
const API = 'https://jsonplaceholder.typicode.com/posts';
const getPosts = () => axios.get(API);
const createPost = (p) => axios.post(API, p);
const updatePost = (id, p) => axios.put(`${API}/${id}`, p);
const deletePost = (id) => axios.delete(`${API}/${id}`);
function $(selector) {
    const el = document.querySelector(selector);
    if (!el)
        throw new Error(`Selector ${selector} not found`);
    return el;
}
const form = $('#post-form');
const titleInput = $('#title');
const bodyInput = $('#body');
const cancelBtn = $('#cancel-edit');
const list = $('#post-list');
let posts = [];
let editId = null;
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield getPosts();
        posts = res.data.slice(0, 10);
        render();
    });
}
init();
function render() {
    return __awaiter(this, void 0, void 0, function* () {
        list.innerHTML = '';
        posts.forEach(p => {
            const li = document.createElement('li');
            li.innerHTML = `
            <h3>${p.title}</h3>
            <p>${p.body}</p>
            <button class="edit" data-id="${p.id}">Edit</button>
            <button class="del" data-id="${p.id}">Delete</button>
        `;
            list.appendChild(li);
        });
        list.querySelectorAll('.del').forEach(b => b.addEventListener('click', onDelete));
        list.querySelectorAll('.edit').forEach(b => b.addEventListener('click', onEdit));
    });
}
function onDelete(e) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = +(e.currentTarget.dataset.id);
        yield deletePost(id);
        posts = posts.filter(p => p.id !== id);
        render();
    });
}
function onEdit(e) {
    return __awaiter(this, void 0, void 0, function* () {
        editId = +(e.currentTarget.dataset.id);
        const li = e.currentTarget.closest('li');
        titleInput.value = li.querySelector('h3').textContent || '';
        bodyInput.value = li.querySelector('p').textContent || '';
        cancelBtn.hidden = false;
    });
}
cancelBtn.addEventListener('click', () => {
    editId = null;
    form.reset();
    cancelBtn.hidden = true;
});
form.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const post = {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1
    };
    if (editId !== null) {
        const res = yield updatePost(editId, post);
        posts = posts.map(p => p.id === editId ? res.data : p);
    }
    else {
        const res = yield createPost(post);
        posts.unshift(res.data);
    }
    editId = null;
    form.reset();
    cancelBtn.hidden = true;
    render();
}));
render();
