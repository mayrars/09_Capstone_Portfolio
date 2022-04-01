
toggleBody = () => {
    var element = document.body;
    element.classList.toggle('dark-mode');
    toggleGithub();
    toggleLines();
}

toggleGithub = () => {
    var elementTwo = document.querySelectorAll('.github-icon');
    // console.log(elementTwo);

    elementTwo.forEach(elementNode => {
        elementNode.classList.toggle("dark-mode-carousel");
    });


}

toggleLines = () => {
    var elementThree = document.querySelectorAll('hr');
    console.log(elementThree);

    elementThree.forEach(elementNode => {
        elementNode.classList.toggle("hr-dark-mode");
    });


}



//// accordions

// This code was an attempt but does not seem to do the job - can/will delete

var sections = document.querySelectorAll('section');

// https://developer.mozilla.org/en-US/docs/Web/Events/hashchange
window.addEventListener('hashchange', function(event) {
  removeAllActiveClasses();
  activateSectionFromHash();
});

function removeAllActiveClasses() {
  [].forEach.call(sections, function(element) {
    element.classList.remove('active');
  });
}

function activateSectionFromHash() {
  // hash starts with #, getElementById searches without
  document.getElementById(location.hash.substring(1)).classList.add('active');
}

//
