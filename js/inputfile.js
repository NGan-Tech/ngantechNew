document.querySelectorAll('.input-file input[type=file]').forEach(function (input) {
    input.addEventListener('change', function () {
        let file = this.files[0];
        this.closest('.input-file').querySelector('.input-file-text').innerHTML = file.name;
    });
});