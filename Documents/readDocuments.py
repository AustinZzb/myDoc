from genericpath import isdir
import os   

# 根目录路径
path = "Documents"

# 创建js中的Folder对象，包含属性folderName, folderPath, folderArr, fileArr
FolderClass = '''class Folder {
    constructor(folderName, folderPath, folderArr, fileArr) {
        this.folderName = folderName;
        this.folderPath = folderPath;
        this.fileArr = fileArr;
        this.folderArr = folderArr;
    }
}\n\n'''
print(FolderClass)

# 向js文件中写入
def write(context):
    with open('./myAssets/js/'+'readDocuments.js', 'a', encoding='utf-8') as f:
        f.write(context)

# 创建对象并写入js文件
def writeObjectToJs(name, path, folderArr, fileArr):
    # folderArr中的元素为对象，不需要加引号
    folderArr = str(folderArr).replace("'", '')
    fileArr = str(fileArr)

    # 构造函数参数
    objectParams = "'" + name + "', '" + path + "', " + str(folderArr) + ", " + str(fileArr)
    # 创建对象语句
    objectString = 'var ' + name + ' = new Folder (' + objectParams + ')\n\n'

    write(objectString)

# 在js文件中声明Folder类
write(FolderClass)

# 获取该目录下所有文件，如果为目录则创建Folder对象
# 此处应该使用递归的方式，因为大文件夹包含小文件夹，所以小文件夹应该声明在前
def getFilename(path):
    # 首先罗列出文件夹中的内容
    fileList = os.listdir(path)

    fileArr = []
    folderArr = []
    for name in fileList:
        if os.path.isdir(path+"/"+name):
            # 递归查找当前目录下的文件夹和文件
            folder_temp, file_tamp = getFilename(path+"/"+name)
            # 创建对象并写入js文件
            writeObjectToJs(name, path+"/"+name+"/", folder_temp, file_tamp)
            # 将当前对象添加至上层目录的文件夹对象数组中
            folderArr.append(name)
        else:
            # 如果是文件，添加至数组返回即可
            fileArr.append(name)

    return folderArr, fileArr

def getFilename_Document(path):
    folder_temp, file_tamp = getFilename(path)
    # 创建对象并写入js文件
    writeObjectToJs(str(path), path+"/", folder_temp, file_tamp)

getFilename_Document(path)

# def getFileName(path):
#     fileList=os.listdir(path)

#     for name in fileList:
#         if os.path.isdir(path+os.sep+name):
#             print(path+os.sep+name)
#             getFileName(path+os.sep+name)
#         else:
#             print(path+os.sep+name)
            


