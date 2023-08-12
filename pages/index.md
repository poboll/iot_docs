# 开源物联网框架EasyIot

🔨 旨在搭建最简洁的IOT框架，不涉及业务场景，个人/公司可在此基础上做二次开发。


## 架构实现
硬件通过串口通信和工控机交互（下发开锁指令及反馈锁状态），工控机通过调用服务端webapi方式进行数据交互，服务端通过socket方式实现下行控制。

## 开发工具
数据库：MySql5.7

开发工具：Visual Studio

## 程序说明
EasyIot.WebApi：通信层（Swagger + TcpServer）

EasyIot.WebApp：管理后台（账号：admin 密码：123456）

EasyIot.WinApp：终端程序（账号：13100110011 密码：5625）

备注：全套框架采用Net5.0，源码在下载后，将easyiot.sql导入mysql数据库，即可。

## 协议说明

1. 串口协议

   Demo: 开0号板的通道1：
   
    上位机发送：57 4B 4C 59 09 00 82 01 83

    设备端回复：57 4B 4C 59 0B 00 82 00 01 00 81


2. WebApi协议 - 接口采用DES加密方式

    1. 数据接口（查询）

       http://127.0.0.1:5101/api/Main/Download

       【发送】
       原始报文 {"content":"select * from device"}

       加密报文 {"content":"UcUX5X7f7+z4mupbrcR6CLSHtsbKA4/rYLHja2tvglc="}

       【返回】
       加密报文 {"result":"OPhTmQE+pp5oEwlE/xODTSWkCkE0vud6f+jlrGWH9WGf4GJzB0djo49rfFu5Oc7APrmbTltaZXupqohSvZWaoPNNh+3lNk4ReUQPiKwsYG4tFe8fHzedOW51ssTR0H8rJnKwor4nFeN1K839nbgaSVsaqb61coRRT1N726dBKAaymeLrTS58hLeJHTMGMFSXqBeiLcVPZDX82O9z4p+E8I5l44sMNy8i4XF9OR3cHp2dpZCP6h54YVB4Zo3hyKVWC2l7NuZGPhrWARxLuytk9mXx0xI9p3fr6iavO4d8C4I=","message":"操作成功","code":200}
       解密报文 {"Code":200,"Message":"操作成功","Result":"[{\"Id\":5,\"SortCode\":1,\"CreateTime\":\"2021-11-06T18:17:17\",\"CreateUserId\":1,\"UpdateTime\":\"2021-11-06T18:17:17\",\"UpdateUserId\":1,\"DeviceCode\":\"1001\",\"DeviceName\":\"虾咚1号快递柜\",\"LastActive\":\"2021-11-07T16:12:54\"}]"}

    2. 数据接口（更新）

       http://127.0.0.1:5101/api/Main/Upload (同查询接口)

    3. 业务处理接口
       http://127.0.0.1:5101/api/Main/Process

    4. 下发控制接口
       http://127.0.0.1:5101/api/Main/Control

3. TCP SERVER
   标识头+数据长度+协议类型+协议内容（uid+任务id+内容）

    1. 心跳包
       IOT=0021&1001&1636305141&01&&

    2. 透传接口 - 调用/api/Main/Control

## 测试用例

Http测试
![输入图片说明](https://images.gitee.com/uploads/images/2021/1107/191651_d6db6c1a_1779965.png "2.png")

串口测试（安装虚拟串口工具，点击 串口测试，用串口工具反馈信息）
![输入图片说明](https://images.gitee.com/uploads/images/2021/1107/191717_bc618c12_1779965.png "3.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/1107/191732_043f438c_1779965.png "4.png")

SOCKET测试
![输入图片说明](https://images.gitee.com/uploads/images/2021/1107/191752_ad3014c1_1779965.png "5.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/1107/191807_f80023ca_1779965.png "6.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/1107/191829_ed48e5e4_1779965.png "7.png")

其他功能
![输入图片说明](https://images.gitee.com/uploads/images/2021/1107/191841_210b11a8_1779965.png "8.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/1107/191851_df4a325a_1779965.png "9.png")

## License
This project is licensed under the MIT License.
