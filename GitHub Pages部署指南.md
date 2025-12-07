# GitHub Pages 部署指南

本指南将帮助你将儿童识字小报生成器部署到GitHub Pages，让其他人可以通过链接访问。

## 方法一：直接上传（推荐）

1. **创建新的GitHub仓库**
   - 登录GitHub，点击右上角的"+"，选择"New repository"
   - 仓库名建议：`word-newspaper-generator` 或其他你喜欢名称
   - 选择"Public"（公开）
   - **不要**勾选"Add a README file"
   - 点击"Create repository"

2. **上传文件**
   - 在新创建的仓库页面，点击"uploading an existing file"
   - 将 `gh-pages-deploy` 文件夹中的所有文件拖拽上传：
     - index.html
     - style.css
     - app.js
     - README.md
   - 在"Commit changes"部分填写提交信息（可选）
   - 点击"Commit changes"

3. **启用GitHub Pages**
   - 进入仓库的"Settings"选项卡
   - 在左侧菜单找到"Pages"
   - 在"Source"部分，选择"Deploy from a branch"
   - "Branch"选择"main"，文件夹选择"/ (root)"
   - 点击"Save"

4. **获取访问链接**
   - 等待几分钟让GitHub处理
   - 在Pages设置页面会看到绿色的提示
   - 访问链接通常是：`https://你的用户名.github.io/仓库名/`

## 方法二：使用GitHub Desktop（图形界面）

1. **安装GitHub Desktop**
   - 下载并安装 [GitHub Desktop](https://desktop.github.com/)

2. **创建本地仓库**
   - 打开GitHub Desktop
   - File -> New Repository
   - 选择 `gh-pages-deploy` 文件夹
   - Repository name填写（如：word-newspaper-generator）
   - 选择"Publish to GitHub"

3. **发布到GitHub**
   - 填写GitHub账户信息
   - 选择"Public"公开仓库
   - 点击"Publish Repository"

4. **启用GitHub Pages**
   - 在GitHub网站打开你的仓库
   - 按照方法一的步骤3启用Pages

## 方法三：使用Git命令行（适合有经验的用户）

```bash
# 1. 创建GitHub仓库（在网站上）
# 记住你的仓库URL

# 2. 初始化Git并上传
cd gh-pages-deploy
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main

# 3. 在GitHub网站上启用Pages（同上）
```

## 验证部署

部署成功后，你可以：
1. 在浏览器中访问你的GitHub Pages链接
2. 测试所有功能是否正常
3. 将链接分享给其他人

## 更新项目

如果需要更新项目：
1. 修改文件
2. 使用GitHub Desktop提交更改，或：
   ```bash
   git add .
   git commit -m "更新描述"
   git push
   ```
3. GitHub会自动更新Pages

## 自定义域名（可选）

如果你想使用自定义域名：
1. 在仓库根目录创建 `CNAME` 文件，内容为你的域名
2. 提交CNAME文件
3. 在域名提供商处配置DNS记录
4. 在GitHub Pages设置中选择自定义域名

## 注意事项

1. GitHub Pages是免费的，但有一些限制：
   - 每月100GB流量
   - 每小时100次构建
   - 对于这个项目来说完全够用

2. 如果使用私有仓库，需要使用GitHub Pro才能使用GitHub Pages

3. 确保仓库名和URL设置正确，否则可能无法访问

## 故障排除

**问题：页面显示404**
- 检查GitHub Pages是否已正确启用
- 确认仓库名和URL是否匹配
- 等待几分钟后刷新

**问题：功能不正常**
- 打开浏览器开发者工具（F12）查看错误
- 确认所有文件都已正确上传
- 检查控制台是否有错误信息

**问题：图片无法加载**
- 这是CORS限制导致的正常现象
- 使用页面提供的"在新窗口打开"功能
- 这个问题不影响应用的核心功能