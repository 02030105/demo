# 儿童识字小报生成系统

基于 Nano Banana Pro API 的儿童识字小报生成系统，专为 5-9 岁儿童设计，帮助教育机构快速生成高质量的教学材料。

## 功能特点

- 🎨 **智能生成**：基于 AI 的图像生成技术，自动创建儿童识字小报
- 📚 **丰富场景**：支持超市、医院、公园、学校、动物园等多种场景
- 🔤 **识字标注**：自动生成带拼音的中文词汇标注
- 📱 **响应式设计**：支持桌面和移动设备访问
- ⚡ **实时反馈**：实时显示生成进度，支持 Server-Sent Events

## 技术架构

- **前端**：原生 JavaScript + HTML + CSS
- **后端**：Node.js + Express.js
- **AI服务**：Nano Banana Pro API
- **数据存储**：JSON 文件存储

## 快速开始

### 环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0

### 安装步骤

1. 克隆项目
```bash
git clone <repository-url>
cd ertong
```

2. 安装后端依赖
```bash
cd backend
npm install
```

3. 配置环境变量
```bash
cp .env.example .env
# 编辑 .env 文件，添加您的 API 密钥
NANO_API_KEY=your_api_key_here
```

4. 安装前端依赖
```bash
cd ../frontend
npm install
```

### 运行项目

1. 启动后端服务
```bash
cd backend
npm start
```
后端将在 http://localhost:3001 运行

2. 启动前端服务（新开终端）
```bash
cd frontend
npm start
```
前端将在 http://localhost:3000 运行

3. 访问应用
在浏览器中打开 http://localhost:3000

## API 密钥配置

请访问 [Kie AI API Key 管理页面](https://kie.ai/api-key) 获取您的 API 密钥。

## 项目结构

```
ertong/
├── backend/                     # 后端服务
│   ├── src/
│   │   ├── data/
│   │   │   └── vocabulary.json  # 词汇库数据
│   │   ├── routes/
│   │   │   └── generate.js      # 生成相关路由
│   │   ├── services/
│   │   │   ├── vocabularyManager.js    # 词汇管理
│   │   │   ├── promptGenerator.js      # 提示词生成
│   │   │   └── nanoAPI.js             # API集成
│   │   └── app.js             # 主应用文件
│   └── .env.example           # 环境变量模板
├── frontend/                   # 前端应用
│   ├── public/
│   │   └── index.html         # 主页面
│   ├── src/
│   │   └── app.js             # 前端逻辑
│   └── server.js              # 前端服务器
└── README.md                  # 项目文档
```

## 使用说明

1. 选择一个场景（如：超市、医院、公园等）
2. 输入小报标题（如：快乐超市、有趣的动物园）
3. 点击"开始生成"按钮
4. 等待系统生成识字小报
5. 生成成功后，可以下载或重新生成

## 支持的场景

- **超市**：收银员、货架、苹果、牛奶等
- **医院**：医生、护士、听诊器、病床等
- **公园**：滑梯、秋千、花朵、草地等
- **学校**：老师、黑板、课桌、书本等
- **动物园**：熊猫、大象、长颈鹿、猴子等

## 开发计划

- [ ] 支持自定义词汇添加
- [ ] 批量生成功能
- [ ] PDF 导出功能
- [ ] 多语言支持
- [ ] 用户管理系统

## 故障排除

### 常见问题

1. **API 密钥错误**
   - 确保在 `.env` 文件中正确配置了 `NANO_API_KEY`
   - 检查 API 密钥是否有效且有足够的余额

2. **网络错误**
   - 确保后端服务正在运行在 http://localhost:3001
   - 检查防火墙设置

3. **生成失败**
   - 检查输入的标题是否过长（建议不超过 20 个字符）
   - 确保选择了有效的场景

## 贡献指南

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License