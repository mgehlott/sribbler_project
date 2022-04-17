
const trashBtn = document.getElementsByClassName('trash');
const trashModal = document.getElementById('trashInModal');

const noBtn = document.getElementById('noBtn');

const eclipse = document.getElementsByClassName('eclipse');

for (const ele of trashBtn) {
    ele.addEventListener('click', () => {

        trashModal.style.display = 'block';
    });
}

noBtn.addEventListener('click', () => {
    trashModal.style.display = 'none';
});

// function elclipseClicked(e) {
//     localStorage.setItem('item-clicked', this.id);
//     console.log('itemsss');
// }


for (const ele of eclipse) {
    ele.addEventListener('click', function () {

        window.addEventListener('click', (e) => {
            localStorage.setItem('item-clicked', this.id);
        });
        console.log('itemsss');
        location.href = '../html/post.html';
    });
}






window.addEventListener('click', (e) => console.log(e.target));




