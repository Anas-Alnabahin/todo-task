const todoPage = document.getElementById('todoPage');
const addPage = document.getElementById('addPage');
const addBtn = document.getElementById('vector');
const xBtn = document.getElementById('xMark');
const tBtn = document.getElementById('tMark');

addBtn.onclick = () => {
    document.documentElement.scrollTop = 0;
    addBtn.style.display = 'none';
    todoPage.style.display = 'none';
    addPage.style.display = 'flex';
    xBtn.style.display = 'block';
    tBtn.style.display = 'block';
};