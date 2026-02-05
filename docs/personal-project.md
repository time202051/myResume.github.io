# 兴趣

## 智慧鱼池

<img src="/public/smartFish.jpg" alt="智慧鱼池" style="max-width: 350px; width: 100%;">

**技术栈**: Uniapp + MQTT + ESP8266 + 物联网

**项目简介**:

基于 Uniapp 开发的智慧鱼池管理系统，通过 MQTT 协议与 ESP8266 物联网设备通讯，实现鱼池的智能化管理。从玩联网开发板的arduino代码、MQTT服务到 App的实现，全流程独立完成。

**核心功能**:

- **实时监控**: 通过 MQTT 实时获取水温、水位传感器数据（PH 值、溶氧量传感器工业用品太贵暂未采购）
- **远程控制**: 远程控制水泵、增氧机、微滤机、投食机等设备开关
- **自动关闭**: 手动控制设备允许最大运行时间，超过时间自动关闭。云函数、定时器和esp8266代码的定时器三重保险

**技术亮点**:

- **MQTT 通讯**: 使用 MQTT 协议实现设备与 App 的实时双向通讯
- **ESP8266 集成**: 硬件端使用 ESP8266 作为物联网网关，连接各类传感器和执行器

---

## MQTT 匿名聊天室

<img src="/public/liaotian.png" alt="MQTT匿名聊天室" style="max-width: 350px; width: 100%;">

**仓库地址**: [https://github.com/time202051/mqttA](https://github.com/time202051/mqttA)

**技术栈**: Vue3 + MQTT.js

**项目简介**:

基于 Vue3 和 MQTT.js 实现的匿名聊天室 demo，支持多个窗口之间的实时交互。

**核心功能**:

- **实时聊天**: 使用 MQTT 协议实现消息的实时发送和接收
- **多窗口交互**: 支持同时打开多个窗口进行聊天测试
- **MQTT 完整实现**: 实现了 MQTT 协议的连接、订阅、发布、接收消息等完整功能

---

## uniCloud 数据管理系统

<img src="/public/bizhi.png" alt="uniCloud数据管理系统" style="max-width: 350px; width: 100%;">

**技术栈**: Uniapp + uniCloud + 支付宝云服务

[在线演示](https://env-00jxu6nif3pg-static.normal.cloudstatic.cn/myBizhi/index.html#/)

**项目简介**:

基于 Uniapp 和 uniCloud 开发的数据管理系统，数据存储在支付宝云服务中，实现了完整的列表增删改查功能。

**核心功能**:

- **数据管理**: 实现完整的 CRUD 操作（创建、读取、更新、删除）

---
