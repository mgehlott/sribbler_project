const data = [

    {
        id: 'p2',
        author: 'Colby Fayock',
        title: 'What is linting and how can it save you time?',
        text: "One of the biggest challenges in software development is time.It’s something we can’t easily get more of, but linting can help us  make the most out of the time we have."
    },
    {
        id: 'p2',
        author: 'Colby Fayock',
        title: 'What is linting and how can it save you time?',
        text: "One of the biggest challenges in software development is time.It’s something we can’t easily get more of, but linting can help us  make the most out of the time we have."
    },
    {
        id: 'p3',
        author: 'Colby Fayock',
        title: 'What is linting and how can it save you time?',
        text: "One of the biggest challenges in software development is time.It’s something we can’t easily get more of, but linting can help us  make the most out of the time we have."
    },
    {
        id: 'p4',
        author: 'Colby Fayock',
        title: 'What is linting and how can it save you time?',
        text: "One of the biggest challenges in software development is time.It’s something we can’t easily get more of, but linting can help us  make the most out of the time we have."
    },
    {
        id: 'p5',
        author: 'Colby Fayock',
        title: 'What is linting and how can it save you time?',
        text: "One of the biggest challenges in software development is time.It’s something we can’t easily get more of, but linting can help us  make the most out of the time we have."
    }
];

const createBtn = document.getElementById('createBtn');
const createPostModal = document.getElementById('createPostModal');
const createPostModalClose = document.getElementById('createPostModalclose');

createBtn.addEventListener('click', () => {
    createPostModal.style.display = 'block'
});

createPostModalClose.addEventListener('click', () => {
    createPostModal.style.display = 'none';
    console.log('create modla closed');
});


window.onclick = (event) => {
    if (event.target == createPostModal) {
        createPostModal.style.display = 'none';
        //  console.log('window');
    }
}
