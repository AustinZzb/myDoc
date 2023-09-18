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
    // Documents是对象，DocumentsUl是元素标签
    var DocumentsUl = document.createElement('ul');
    DocumentsUl.id = Documents.folderName;
    DocumentsUl.textContent = Documents.folderName;

    document.querySelector(`.documentsDIV`).appendChild(DocumentsUl);

    createFolderUl(DocumentsUl, Documents.folderArr);
    createFileLi(Documents.folderName, Documents.fileArr, Documents.folderPath);

    console.log(DocumentsUl)
}

function clickFolder() {
    // 监听事件监听的是区域，而不是某个单个元素，所以你监听每个ul就意味着
    // 点击子元素ul也相当于点击父元素ul，从而触发监听事件
    var parent = document.querySelector('.documentsDIV');
    console.log(parent)
    parent.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName === 'UL') {
            var children = e.target.children;
            for (i = 0; i < children.length; i++) {
                if (children[i].hasAttribute('style')) {
                    children[i].removeAttribute('style');
                } else {
                    children[i].setAttribute('style', 'display: none');
                }
            }
        }
    });
}

window.onload = function () {
    createDocuments();

    clickFolder()
};
