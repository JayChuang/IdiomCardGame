# GitHub Pages 網站

一個簡單且美觀的入口頁面，可以直接部署到 GitHub Pages。

## 功能特色

- 📱 響應式設計，支援各種裝置
- 🎨 現代化的漸層背景與卡片設計
- ⚡ 純 HTML 和 CSS，無需建置工具
- 🚀 可直接部署到 GitHub Pages

## 檔案結構

```
github-pages-site/
├── index.html      # 主要 HTML 檔案
├── styles.css      # 樣式檔案
└── README.md       # 說明文件
```

## 部署到 GitHub Pages

### 步驟 1: 建立 GitHub Repository

1. 前往 [GitHub](https://github.com) 並登入
2. 點擊右上角的 "+" 按鈕，選擇 "New repository"
3. 輸入 repository 名稱（例如：`my-website`）
4. 選擇 "Public"
5. 點擊 "Create repository"

### 步驟 2: 上傳檔案

在專案目錄中執行以下指令：

```bash
cd /Users/jay/CascadeProjects/github-pages-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的使用者名稱/你的repository名稱.git
git push -u origin main
```

### 步驟 3: 啟用 GitHub Pages

1. 前往你的 GitHub repository
2. 點擊 "Settings"
3. 在左側選單中找到 "Pages"
4. 在 "Source" 下拉選單中選擇 "main" 分支
5. 點擊 "Save"
6. 等待幾分鐘後，你的網站就會在 `https://你的使用者名稱.github.io/你的repository名稱/` 上線

## 本地預覽

你可以直接在瀏覽器中開啟 `index.html` 檔案來預覽網站。

或者使用簡單的 HTTP 伺服器：

```bash
# 使用 Python 3
python3 -m http.server 8000

# 使用 Node.js (需要先安裝 http-server)
npx http-server
```

然後在瀏覽器中開啟 `http://localhost:8000`

## 自訂內容

- 編輯 `index.html` 來修改網頁內容
- 編輯 `styles.css` 來調整樣式和顏色
- 可以加入更多頁面或功能

## 授權

MIT License
