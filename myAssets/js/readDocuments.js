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

var reading = new Folder ('reading', 'Documents/Papers/reading/', [], ['0.196mm - 基于3D标定块的机器人与3D相机手眼标定研究_王连庆.pdf', '基于图卷积神经网络的3D点云分割算法研究_张千.pdf', '基于注意力机制的3D点云分类和语义分割算法研究_宋文赞.pdf', '基于深度学习的三维点云处理方法研究进展_吴一全.pdf', '基于点云数据的隧道中轴线自动提取方法研究_李兵.pdf', '手眼标定0.15-基于标准圆柱的线激光轮廓扫描机器人手眼标定方法.pdf', '标定姿态自动生成的手眼标定方法_林敏捷.pdf', '正交约束下的机器人线结构光手眼标定_陈新禹.pdf'])

var 综述 = new Folder ('综述', 'Documents/Papers/综述/', [], ['基于多信息深度学习的3D点云语义分割_刘友群.pdf', '基于深度学习的3D点云补全算法综述_魏青.pdf', '基于深度学习的3维点云处理综述_李娇娇.pdf', '点云综述_英文.pdf'])

var en_reading = new Folder ('en_reading', 'Documents/Papers/英文文献/en_reading/', [], [])

var 英文文献 = new Folder ('英文文献', 'Documents/Papers/英文文献/', [en_reading], ['1612.00593.pdf', 'A_Path_Planning_Algorithm_of_Spray_Robot_based_on_3D_Point_Cloud.pdf', 'Fast_Object_Segmentation_Pipeline_for_Point_Clouds_Using_Robot_Operating_System.pdf', 'PointNet++_Deep_Hierarchical_Feature_Learning_on.pdf', 'PointNet_Deep_Learning_on_Point_Sets_for_3D_Classification_and_Segmentation.pdf', 'PointNet_supplementary.pdf', 'Recognition_and_Pose_Estimation_of_Auto_Parts_for_an_Autonomous_Spray_Painting_Robot.pdf', 'TSAI_A_versatile_camera_calibration_technique_for_high-accuracy_3D_machine_vision_metrology_using_off-the-shelf_TV_cameras_and_lenses.pdf'])

var 高频参考文献 = new Folder ('高频参考文献', 'Documents/Papers/高频参考文献/', [], ['paperName.docx', '中国计算机学会推荐国际学术会议和期刊目录- 2022.pdf', '期刊_文献.docx'])

var Papers = new Folder ('Papers', 'Documents/Papers/', [over, reading, 综述, 英文文献, 高频参考文献], ['3mm - 面向物料抓取机器人的新型手眼标定方法_张庆新.pdf', 's00371-021-02336-7.pdf', '一种改进的机器人视觉点云手眼标定方法_刘明贺.pdf', '一种结合_TCP_标定的深度相机手眼标定方法.pdf', '三维点云配准技术研究_熊风光.pdf', '基于PointNet++的煤场点云分割与识别方法_乐英.pdf', '基于凹凸性与密度引导点云分割的高炉炉料粒度检测_何瑞清.pdf', '基于坡度滤波的无人机测绘点云特征提取与滤波分类研究_刘锋.pdf', '基于差分进化算法的手眼标定方法_金轲.pdf', '基于机器视觉的服务机器人智能抓取研究_杨扬.pdf', '基于视觉引导的工业机器人贴标系统研究_郑启强.pdf', '基于视觉的机器人自动化涂胶质量检测技术研究_张奇.pdf', '大型工件部分点云与整体点云的配准方法_范林林.pdf', '工业机器人涂胶路径规划与仿真研究_温成卓.pdf', '改进粒子群优化算法及应用_吴浩然.pdf', '木板抓取机器人手眼标定方法_徐呈艺.pdf', '线激光三维测量系统标定方法研究_于加慧.pdf', '钛学术_期刊_简便高精度的机器人手眼视觉标定方法.pdf', '面向工业应用的机器人手眼标定与物体定位_程玉立.pdf', '面向手眼标定的改进灰狼优化方法_李晟尧.pdf'])

var tempDocuments = new Folder ('tempDocuments', 'Documents/tempDocuments/', [], ['向量叉乘.txt'])

var Documents = new Folder ('Documents', 'Documents/', [Books, Papers, tempDocuments], ['LMI和海康相机对比.docx', 'readDocuments.py', '文献阅读-实验方法.docx', '方法尝试-附带思考过程.docx', '每日安排总结.docx'])

