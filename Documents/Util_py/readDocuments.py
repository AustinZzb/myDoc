'''
Author: Austin 1158680540@qq.com
Date: 2023-09-13 17:16:56
LastEditors: Austin 1158680540@qq.com
LastEditTime: 2023-11-01 14:42:42
FilePath: \Justin-zzb.github.io\Documents\readDocuments.py
Description: 主要使用python根据当前目录路径架构进行js对象的创造和js文件的创建 | 其中有docx转pdf的操作
'''
import datetime
import os
import time 
from docx2pdf import convert

# 根目录路径
path = "Documents"
js_path = "myAssets/js/readDocuments.js"

# 创建js中的Folder对象，包含属性folderName, folderPath, folderArr, fileArr
FolderClass = '''class Folder {
    constructor(folderName, folderPath, folderArr, fileArr) {
        this.folderName = folderName;
        this.folderPath = folderPath;
        this.fileArr = fileArr;
        this.folderArr = folderArr;
    }
}\n\n'''


# 向js文件中写入
def write(context):
    with open(js_path, 'a', encoding='utf-8') as f:
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
    folder_temp, file_temp = getFilename(path)
    # 创建对象并写入js文件
    writeObjectToJs(str(path), path+"/", folder_temp, file_temp)


# 判断是否为docx文件，并转换为pdf
def docxToPDF():
    '''流程如下：
    判断是否是docx
    判断是否存在对应的pdf
        1. 存在的话不能直接转换, 会报错, 先将原先对应的pdf删除
           将pdf的文件名后面加上当前时间
           然后转换完成之后再改名
        2. 不存在的话就直接进行转换就可以了
    关于为什么要暂停1s:
        是因为他可能是多线程转换, 前一个没有转换玩就开始了下一个转换
        所以需要进行1s的暂停给它一个缓冲的时间
    '''
    for dirpath, _, filenames in os.walk(path):
        for file_name in filenames:
            name = os.path.join(dirpath, file_name)

            # 不是docx就continue
            if "docx" not in name:
                continue 
        
            pdf_name = name.replace(".docx",".pdf") 
            flag_rename = False 

            if os.path.exists(pdf_name):
                os.remove(pdf_name)
                now_time = datetime.datetime.now().strftime("%y_%m_%d_%H_%M_%S")
                
                old_pdf_name = pdf_name
                new_pdf_name = name.replace(".docx", "_"+now_time+".pdf")
                pdf_name = new_pdf_name

                flag_rename = True

            print(name, '===>>>', pdf_name)
            convert(name, pdf_name)

            # 必须要判断上一个是否转换完成，同时暂停1s
            while os.path.isfile(pdf_name):
                time.sleep(1)
                break
            
            if flag_rename:
                os.rename(new_pdf_name, old_pdf_name)


# 清空read Documents.js文件
with open(js_path, 'w') as f:
    f.truncate(0)

# 在js文件中声明Folder类
write(FolderClass)
# 将word转换为pdf
docxToPDF()
getFilename_Document(path)
            


