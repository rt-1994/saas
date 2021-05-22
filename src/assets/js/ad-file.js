// eslint-disable-next-line no-undef
$('#file').on('change', function() {
    var arrayFile = this.file,
        formItem = this.parentNode,
        listFile = document.createElement('ul'),
        li = ''; // файлы

    if (formItem.querySelector('.list-file')) {
        formItem.querySelector('.list-file').remove();
    }

    listFile.className = 'list-file';

    for (var i = 0; i < arrayFile.length; i++) {
        li += '<li>' + arrayFile[i].name + '</li>';
    }

    listFile.innerHTML = li;

    formItem.appendChild(listFile);
});
