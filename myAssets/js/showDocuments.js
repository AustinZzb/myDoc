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
        // word预览界面拦截器
        if (name.endsWith('.docx') || name.endsWith(".doc"))
            viewer = "viewer.html?document="
        else
            viewer = ""

        fileLink.setAttribute('href', viewer + folderPath + name);
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

// 递归循环展示||隐藏子元素
function showAndHide(children, flag) {
    if (children.length === 0)
        return 
    
    for (let i = 0; i < children.length; i++) {
        children[i].style.display = flag
        
        // 如果当前元素是ul并且是关闭当前元素才会递归关闭子元素
        // 打开时只会打开当前子元素，并不会递归
        if (children[i].nodeName === 'UL' && flag === 'none')
            showAndHide(children[i].children, flag)
    }    
}

function clickFolder() {
    // 监听事件监听的是区域，而不是某个单个元素，所以你监听每个ul就意味着
    // 点击子元素ul也相当于点击父元素ul，从而触发监听事件
    var parent = document.querySelector('.documentsDIV');
    console.log(parent)
    parent.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName === 'UL') {
            var children = e.target.children

            if (children.length > 0) {
                if (children[0].hasAttribute('style') && children[0].style.display === 'none') 
                    showAndHide(children, "block")
                else
                    showAndHide(children, "none")
            }
        }
    });
}

createDocuments();

clickFolder();

