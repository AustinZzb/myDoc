// 递归创建文件夹ul
function createFolderUl(FatherFolderUl, FolderArr) {
    FolderArr.forEach(folder => {
        var folderUl = document.createElement('ul');
        folderUl.id = folder.folderName;
        folderUl.textContent = folder.folderName;
        FatherFolderUl.appendChild(folderUl);
        createFolderUl(folderUl, folder.folderArr);
        createFileLi(folder.folderName, folder.fileArr, folder.folderPath)
    });
}

//在对应文件夹下创建li
function createFileLi(folderName, FileArr, folderPath) {
    var folderUl = document.querySelector(`#${folderName}`)

    FileArr.forEach(name => {
        var fileLink = document.createElement('a');
        fileLink.setAttribute('href', folderPath + name);
        fileLink.setAttribute('target', '_blank');
        fileLink.textContent = name;

        var fileLi = document.createElement('li');
        fileLi.appendChild(fileLink);
        folderUl.appendChild(fileLi);
    });
}

function createDocuments() {
    var DocumentsUl = document.createElement('ul');
    DocumentsUl.id = Documents.folderName;
    DocumentsUl.textContent = Documents.folderName;
    document.body.appendChild(DocumentsUl);
    createFolderUl(DocumentsUl, Documents.folderArr);
    createFileLi(Documents.folderName, Documents.fileArr, Documents.folderPath);

    console.log(DocumentsUl)
}

window.onload = function () {
    createDocuments();
};
