document.querySelector('#category').addEventListener('click', (e) => {
    console.log(e.target.id);

    if (e.target.tagName =='li') { // checking for only cliked element is list(li), make sure not other random elements
    window.location.href = '/' + e.target.id;   // link for redirecting
    }
})