# K 線新手練習室（GitHub Pages / PWA 版）

這是一個可直接上傳 GitHub Pages 的靜態網站，也可安裝到手機或電腦桌面。

## 上傳 GitHub 步驟

1. 登入 GitHub，建立一個新的 Repository。
2. Repository 名稱可填：`kline-practice-app`
3. 進入 Repository 後選擇 **Add file → Upload files**。
4. 將本資料夾內的全部檔案與 `icons` 資料夾一起上傳。
5. 按下 **Commit changes**。
6. 進入 **Settings → Pages**。
7. Source 選擇 **Deploy from a branch**。
8. Branch 選擇 **main**，資料夾選擇 **/(root)**，再按 **Save**。
9. 等待約 1～3 分鐘，GitHub 會顯示網站網址。

## 安裝成 App

- Android / Chrome：打開網站後，點畫面上的「安裝到桌面」或瀏覽器選單的「安裝應用程式」。
- iPhone / Safari：打開網站後，點分享按鈕，再選「加入主畫面」。
- 電腦 Chrome / Edge：網址列右側會出現安裝圖示。

## 檔案說明

- `index.html`：主程式
- `manifest.webmanifest`：App 名稱與圖示設定
- `sw.js`：離線快取
- `icons/`：App 圖示
- `.nojekyll`：避免 GitHub Pages 處理靜態檔案時造成問題

練習紀錄會儲存在使用者自己的瀏覽器 localStorage 中。
