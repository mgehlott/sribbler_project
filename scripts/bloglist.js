
const trashBtn = document.getElementsByClassName('trash');
const trashModal = document.getElementById('signInModal');

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


for (const ele = 0; ele < eclipse.length; ele++)
{
    
    
}

