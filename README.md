# 3D卡片播放器

預覽：

1. CodePen URL: [3D卡片播放器](https://codepen.io/april808/pen/mdKeqRB)
1. GitHub: [3D卡片播放器](./demo1/dist/index.html)

說明：

1. `<button>` CSS相關設定。
1. ES6 寫法、JS套件函數模組化。
1. iPad截圖功能無法印出透視變形(CSS/preserve-3d)和多層次的陰影。phone和PC可以完整印出。
---
心得：
原先想做一個簡單，可以換圖片的展示盒，主要使用CSS preserve-3d屬性，最後可以下載呈現，但後來製作過程中，對input上傳功能不熟悉，繞了很多遠路。

待處理：
- 印出font awesome。
- 針對物件不印出設定。
- 上傳顯示的圖進行CSS控制。

---
參考：
  1. [簡單的網頁截圖功能 – DOM to Image](https://www.letswrite.tw/dom-to-image/)
  1. [[JavaScript] 上傳圖片不難，那上傳同時預覽呢？](https://progressbar.tw/posts/47")
  1. [Javascript ：將 HTML 網頁上的區塊轉換成 JPG圖檔 ](https://mnya.tw/cc/word/1573.html)
  2. [javascript實現網頁截圖匯出方案](https://iter01.com/633589.html)
  3. [用dom-to-image將html生成圖片](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/2170/)
  4. [Render HTML to an image](https://stackoverflow.com/questions/10721884/render-html-to-an-image)
  5. [Preview an image before it is uploaded](https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded)
  6. [JS-上傳圖片前預覽圖片](https://ithelp.ithome.com.tw/articles/10212859?sc=rss.qu)
  7. [mdn web docs[input type=“button”]](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button)