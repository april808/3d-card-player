// change-icon-----------
// const changeIcon = (elClass,FAicon1,FAicon2) => {
//   let icon = document.querySelector(elClass);
//   if (icon.classList[1] === FAicon1) {
//     icon.classList.remove(FAicon1);
//     icon.classList.add(FAicon2);
//   }else{
//     icon.classList.add(FAicon1);
//     icon.classList.remove(FAicon2);
//   }
// }
var aniBtn = document.getElementById("aniBtn");
// var icon = aniBtn.querySelector("i")
aniBtn.addEventListener('click', function(){
  
  // stop_ani
  let element = document.getElementById("card");
  element.classList.toggle("js-stop-ani");
  
  // change-icon-----------
  const toggleClass  = document.querySelectorAll('[data-toggle-class]');
  if (toggleClass) {
    for (let i = 0; i < toggleClass.length; i ++) {
      const el = toggleClass[i];
      el.classList.toggle("hidden");
    }
  }
})

// 引用函數-----------
callfunc = (func,r) => {
  // console.log(func)
  return func(r)
}
// 截圖函數-----------
  /*domtoimage - 螢幕@1x*/
  /*htmlToImage - 螢幕@2x(有繪製時間)*/
block_capture = (js_plugin) => {
  let node = document.getElementById("capture");
  js_plugin
    .toPng(node)
    .then(function (dataUrl) {
      let img = new Image();
      img.src = dataUrl;
      var el_block = document.querySelector("#block-img");
      el_block.appendChild(img);
      // document.body.appendChild(img);
      // console.log(img);
      // console.log(el_block.innerHTML);
    })
    .catch(function (error) {
      console.error("失敗!", error);
    });
};
// 下載函數-----------
/*研究 a標籤的download*/
download_capture = (js_plugin) => {
  let node = document.getElementById("capture");
  js_plugin.toPng(node).then(function (dataUrl) {
    let a = document.createElement("a");
    a.href = dataUrl;
    a.download = "image.png";
    a.click();
  });
};

/*html2canvas - 下載圖片 - 嚴重跑版 */
// const download_capture = () => {
//   let node = document.getElementById("capture");
//   html2canvas(node).then(function (canvas) {
//     a = document.createElement("a");
//     a.href = canvas
//       .toDataURL("image/jpeg", 0.92)
//       .replace("image/jpeg", "image/octet-stream");
//     a.download = "image.jpg";
//     a.click();// 觸發a標籤的click事件
//   });
// }