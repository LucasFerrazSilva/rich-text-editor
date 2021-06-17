const output = document.querySelector('#output');
const toolbarButtons = document.querySelectorAll('.toolbar-button');

toolbarButtons.forEach(button => {
    button.addEventListener('click', function() {
        const command = button.dataset['command'];

        if (command == 'createLink') {
            let url = prompt('Enter the link here: ', 'http:\/\/');
            document.execCommand(command, false, url);
        } else if (command == 'hiliteColor' || command == 'foreColor'){
            let color = prompt('Enter the color here: ');
            document.execCommand(command, false, color);
        } else if (command == 'fontSize') {
            let fontSize = prompt('Enter the font size here (1 to 7): ');
            document.execCommand(command, false, fontSize);
        } else if (command == 'insertImage') {
            let url = prompt('Enter the image url here: ');
            document.execCommand(command, false, url);
        } else {
            document.execCommand(command, false, null);
        }               
    });
});