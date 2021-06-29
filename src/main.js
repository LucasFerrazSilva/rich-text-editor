const output = document.querySelector('#output');
const toolbarButtons = document.querySelectorAll('.toolbar-button');
const colorInputs = document.querySelectorAll('.toolbar-color-input');

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

            if (url)
                document.execCommand(command, false, url);
        } else if (command == 'insertVideo') {
            let iframe = prompt('Enter the YouTube iframe here: ');

            if (iframe)
                document.execCommand('insertHTML', false, iframe);
        } else if (command == 'formatBlock') {
            let tag = this.value;

            if (tag)
                document.execCommand(command, false, tag);
        } else {
            document.execCommand(command, false, null);
        }               
    });
});

colorInputs.forEach(input => {
    input.addEventListener('change', function() {
        const command = input.dataset['command'];
        const color = input.value;

        console.log(command,color);

        document.execCommand(command, false, color);
    });
});