// feature of converting from lowercase to Uppecase
document.querySelector('#form').addEventListener('keyup', (e) => {
    // console.log(e.target.attributes);
    console.log(e);
    if (e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
    console.log(e.target.value);
})

// Behavioral Pattern is maim fact here

// we can reuse data-uppercase for other child elements(input elemets) of form(Parent Element)

// We can create behaviour and attach it other elements and we can get the functionalies we want