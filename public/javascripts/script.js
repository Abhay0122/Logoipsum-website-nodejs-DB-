// textarea::

const openTextbox_btn = document.querySelector('#openTextbox_btn>i');
const openTextbox = document.querySelector('.openTextbox');
const abouttextarea_wrapper = document.querySelector('.abouttextarea_wrapper');

openTextbox_btn.addEventListener('click', () => {
    openTextbox.style.display = 'none';
    abouttextarea_wrapper.style.display = 'flex';
})











