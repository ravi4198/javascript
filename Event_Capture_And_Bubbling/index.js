document.querySelector('#grandparent').addEventListener('click', () => {
    console.log('Grandparent Clicked!');
}, true); //capturing

document.querySelector('#parent').addEventListener('click', () => {
    console.log('Parent Clicked!');
}, false); // bubbling

document.querySelector('#child').addEventListener('click', () => {
    console.log('Child Clicked!');
    // e.stopPropagation()
}, true); //capturing


// Note
// In nested elements(div) Event Propagation has 2 directions i.e Downward(Event Capture or Trakcling) and Upward (Event Bubbling)
// we can stop Event Propagation by using e.stopPropagation() method
// consider the nested elements scenario

// first capturing happens then bubbling happens