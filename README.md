# pocket-scanner 

https://z88487561.github.io/pocket-scanner/

> **Scan anywhere, anytime.**
>
> 隨時隨地，打開即掃。一個基於 OpenCV.js 與 WebAssembly 打造的純前端、可離線 PWA 文件掃描與透視拉正工具。

## 🌟 為什麼選擇 pocket-scanner？

你是否遇過要掃描文件時，不想下載肥大的原生 App、不想忍受廣告，或者擔心文件照片被上傳到第三方雲端伺服器的隱私問題？

**pocket-scanner** 專為「即時、隱私、跨平台」而設計：

* 🚀 **隨時待命 (Scan Anywhere, Anytime)**：基於 PWA 技術，可「加到主畫面」獨立運行。支援 Service Worker 快取，即使在沒有網路的飛機上或地下室也能**100% 離線使用**。

* 🔒 **極致隱私保護 (100% Client-Side)**：所有圖像處理（透視變換、自動尋角、裁切）都在您的裝置本地瀏覽器（WebAssembly / Canvas API）內完成，**數據絕不上傳伺服器**。

* 📱 **跨平台零負擔**：不管是 iOS, Android 手機，還是 Windows, macOS 桌面電腦，打開瀏覽器就能直接使用。

## ✨ 核心功能 (Key Features)

* **🎯 自動邊緣偵測 (Auto Contour Detection)**：利用 OpenCV.js 圖像處理算法，自動尋找文件的四個頂點。

* **📐 靈活手動控制點 (Touch/Mouse Corner Dragging)**：針對難以辨識的背景，提供直覺的四角控制點，支援手機觸控與電腦滑鼠拖曳。

* **⚡ 透視變換拉正 (Perspective Correction)**：精準將拍攝傾斜、歪斜的文件「拉正」為標準平整影像。

* **📴 PWA & 離線支援 (Offline-First)**：安裝後如同原生 App，無網速瓶頸，打開即掃。

* **💾 一鍵導出**：支援將處理好的圖像高畫質導出下載。

## 🛠️ 技術棧 (Tech Stack)

* **前端介面**：HTML5, CSS3, ES6+ JavaScript

* **核心影像引擎**：[OpenCV.js](https://docs.opencv.org/4.8.0/opencv.js) (WebAssembly)

* **圖像繪製與渲染**：HTML5 Canvas API

* **PWA 支援**：Service Worker, Web App Manifest

## 🚀 快速開始 (Quick Start)

### 

## 📱 安裝為 PWA (Install as App)

* **iOS (Safari)**：點擊分享按鈕 ➔ 選擇「加入主畫面」。

* **Android (Chrome)**：點擊選單 ➔ 選擇「安裝應用程式」或「加到主畫面」。

* **Desktop (Chrome/Edge)**：點擊網址列右側的「安裝 pocket-scanner」圖標。

  ## 
