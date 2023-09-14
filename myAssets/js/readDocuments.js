class Folder {
    constructor(folderName, folderPath, folderArr, fileArr) {
        this.folderName = folderName;
        this.folderPath = folderPath;
        this.fileArr = fileArr;
        this.folderArr = folderArr;
    }
}

var Books = new Folder ('Books', 'Documents/Books/', [], [])

var over = new Folder ('over', 'Documents/Papers/over/', [], ['⭐基于标准球的机器人手眼标定方法改进研究_林玉莹.pdf', '⭐机器人激光检测手眼标定误差分析及优化_刘建春.pdf', '基于3D机器视觉的工业机器人跟踪涂胶系统_陈琳.pdf', '基于线激光的水轮机机器人测...标定与焊点加工区域特征提取_吉鹏晖.pdf', '线激光器的手眼标定方法.pdf'])

var reading = new Folder ('reading', 'Documents/Papers/reading/', [], ['0.196mm - 基于3D标定块的机器人与3D相机手眼标定研究_王连庆.pdf', '基于点云数据的隧道中轴线自动提取方法研究_李兵.pdf', '手眼标定0.15-基于标准圆柱的线激光轮廓扫描机器人手眼标定方法.pdf', '正交约束下的机器人线结构光手眼标定_陈新禹.pdf'])

var Papers = new Folder ('Papers', 'Documents/Papers/', [over, reading], ['3mm - 面向物料抓取机器人的新型手眼标定方法_张庆新.pdf', 's00371-021-02336-7.pdf', '一种改进的机器人视觉点云手眼标定方法_刘明贺.pdf', '一种结合_TCP_标定的深度相机手眼标定方法.pdf', '三维点云配准技术研究_熊风光.pdf', '基于PointNet++的煤场点云分割与识别方法_乐英.pdf', '基于凹凸性与密度引导点云分割的高炉炉料粒度检测_何瑞清.pdf', '基于图卷积神经网络的3D点云分割算法研究_张千.pdf', '基于坡度滤波的无人机测绘点云特征提取与滤波分类研究_刘锋.pdf', '基于差分进化算法的手眼标定方法_金轲.pdf', '基于机器视觉的服务机器人智能抓取研究_杨扬.pdf', '基于注意力机制的3D点云分类和语义分割算法研究_宋文赞.pdf', '基于深度学习的三维点云处理方法研究进展_吴一全.pdf', '基于视觉引导的工业机器人贴标系统研究_郑启强.pdf', '基于视觉的机器人自动化涂胶质量检测技术研究_张奇.pdf', '大型工件部分点云与整体点云的配准方法_范林林.pdf', '工业机器人涂胶路径规划与仿真研究_温成卓.pdf', '木板抓取机器人手眼标定方法_徐呈艺.pdf', '标定姿态自动生成的手眼标定方法_林敏捷.pdf', '点云综述_英文.pdf', '线激光三维测量系统标定方法研究_于加慧.pdf', '钛学术_期刊_简便高精度的机器人手眼视觉标定方法.pdf', '面向手眼标定的改进灰狼优化方法_李晟尧.pdf'])

var Documents = new Folder ('Documents', 'Documents/', [Books, Papers], ['readDocuments.py', '文献阅读.docx', '每日安排总结(1).docx'])




