
const data = [

    {
        id: 'p1',
        author: 'Srishti Gupta',
        title: '‘let’ me be a ‘const’(ant), not a ‘var’(iable)!',
        text: "Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different."
    },
    {
        id: 'p2',
        author: 'Colby Fayock',
        title: 'What is linting and how can it save you time?',
        text: "One of the biggest challenges in software development is time.It’s something we can’t easily get more of, but linting can help us  make the most out of the time we have."
    },
    {
        id: 'p3',
        author: 'Yazeed Bzadough',
        title: 'How to Get More Views on Your Tech Blog',
        text: "If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry."
    },
    {
        id: 'p4',
        author: 'Cedd Burge',
        title: 'How to write easily describable code',
        text: "When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code."
    },
    {
        id: 'p5',
        author: 'Srishti Gupta',
        title: 'Everything you should know about ‘module’ & ‘require’ in Node.js',
        text: "Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz."
    }
];


// like button

const likeBtnn = document.getElementById('likebtn');
const likeText = document.getElementById('likedText');
let isFirstClicked = true;
let counter = 0;
likeBtnn.addEventListener('click', () => {
    counter++;
    if (isFirstClicked) {
        isFirstClicked = false;
        likeText.innerHTML = counter + ' person likes this post!';
    }
    else {
        likeText.innerHTML = counter + ' people liked this post!';
    }

    likeBtnn.innerHTML = 'Liked!'

});

//comment button

const allComment = document.querySelector('.comments');
const commentBtn = document.querySelector('.commentBtn');

commentBtn.addEventListener('click', () => {
    const text = document.getElementById('textareaComment').value;
    //alert(text);
    const ptag = document.createElement('p');
    ptag.innerHTML = text;
    allComment.appendChild(ptag);
    document.getElementById('textareaComment').value = '';

});

const username = document.getElementById('username');
const title = document.getElementById('title');
const body = document.getElementById('body');
const editAndSaveBtn = document.getElementById('editAndSaveBtn');

const id = localStorage.getItem('item-clicked');
const dataOb = data[id - 1];
username.innerHTML = dataOb.author;
title.innerHTML = dataOb.title;
body.innerHTML = dataOb.text;

// edit click

const editBtnn = document.getElementById('editAndSaveBtn');
let isEdit = true;
editBtnn.addEventListener('click', () => {

    if (isEdit) {
        title.contentEditable = true;
        body.contentEditable = true;
        editBtnn.innerHTML = 'Save';
    }
    else {
        title.contentEditable = false;
        body.contentEditable = false;
        editBtnn.innerHTML = 'Edit <i class="fa-solid fa-pen-to-square"></i>';
    }
    isEdit = !isEdit;

});








