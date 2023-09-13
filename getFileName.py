import os   

path = "Documents"
#获取该目录下所有文件，存入列表中

def getFileName(path):
    fileList=os.listdir(path)

    for name in fileList:
        if os.path.isdir(path+os.sep+name):
            print(path+os.sep+name)
            getFileName(path+os.sep+name)
        else:
            print(path+os.sep+name)
            

getFileName(path)