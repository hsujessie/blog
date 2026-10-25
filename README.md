## 🚀 Project Structure
```bash
/
├── public/
│   ├── pagefind/          # auto-generated on build
│   ├── favicon.svg
│   └── default-og.jpg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   ├── content/
│   │   └── posts/
│   │       └── blog-start.md
│   ├── i18n/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── config.ts
│   └── content.config.ts
├── astro-paper.config.ts  # user-defined configurations
└── astro.config.ts
```

## 💻 建立步驟
```bash
# 以 AstroPaper 為範本建立專案
npm create astro@latest blog -- --template satnaing/astro-paper

# 進入專案資料夾
cd blog

# 安裝依賴
npm install

# 啟動本機伺服器
npm run dev

# 預覽
http://localhost:4321
```