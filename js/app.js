
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
