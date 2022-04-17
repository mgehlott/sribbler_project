
const signUpModal = document.getElementById('signUpModal');
const signUpBtn = document.getElementById('signUpBtn');
const closeSpan = document.getElementsByClassName('close')[0];

const signInModal = document.getElementById('signInModal');
const signInBtn = document.getElementById('signInBtn');

const singInclose = document.getElementById('singInclose');
const singUpclose = document.getElementById('singUpclose');



// open sign up modal

signUpBtn.onclick = () => {
    signUpModal.style.display = 'block';
    signInModal.style.display = 'none';
}

// open sign in modal

signInBtn.onclick = () => {
    signUpModal.style.display = 'none';
    signInModal.style.display = 'block';
}

// close by clicking on x

singUpclose.addEventListener('click', () => {
    signUpModal.style.display = 'none';
});

singInclose.addEventListener('click', () => {
    signInModal.style.display = 'none';
});



// close modal by clickng backdrop

window.onclick = (event) => {
    if (event.target == signInModal || event.target == signUpModal) {
        signInModal.style.display = "none";
        signUpModal.style.display = "none";
        //createPostModal.style.display = 'none';
        //  console.log('window');
    }
}

// open modal by sign up link

const signUpPTag = document.getElementById('signup');
signUpPTag.addEventListener('click', () => {

    signInModal.style.display = "none";
    signUpModal.style.display = "block";

});

