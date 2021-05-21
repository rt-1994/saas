// eslint-disable-next-line no-undef
$('#file').on('change', function() {
    var arrayFile = this.file, // массив с выбранными фалами
        formItem = this.parentNode, // родительский элемент, для того чтобы вставить список с файлами
        listFile = document.createElement('ul'), // список с файлами
        li = ''; // файлы

    // Если список с файлами уже вставлен в ДОМ, то удаляем его
    if (formItem.querySelector('.list-file')) {
        formItem.querySelector('.list-file').remove();
    }

    listFile.className = 'list-file'; // добавим класс, чтобы было удобнее стилять

    for (var i = 0; i < arrayFile.length; i++) {
        li += '<li>' + arrayFile[i].name + '</li>'; // <li>Имя файла</li>
    }

    listFile.innerHTML = li;

    formItem.appendChild(listFile);
});
