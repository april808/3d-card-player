const stop_ani = () => {
  let element = document.getElementById("card");
  element.classList.toggle("js-stop-ani");
};
// change-icon-----------.
const changeIcon = (elClass,FAicon1,FAicon2) => {
  let icon = document.querySelector(elClass);
  if (icon.classList[1] === FAicon1) {
    icon.classList.remove(FAicon1);
    icon.classList.add(FAicon2);
  }else{
    icon.classList.add(FAicon1);
    icon.classList.remove(FAicon2);
  }
}

// var el = document.querySelector("#capture")/*回傳 document 第一個符合特定選擇器群組的元素（採用深度優先，前序追蹤 document 節點）。*/

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

/*domtoimage - 螢幕@1x*/
const block_capture = () => {
  let node = document.getElementById("capture");
  domtoimage
    .toPng(node)
    .then(function (dataUrl) {
      let img = new Image();
      img.src = dataUrl;
      document.body.appendChild(img);
    })
    .catch(function (error) {
      console.error("失敗!", error);
    });
};

/*研究 a標籤的download*/
const download_capture = () => {
  let node = document.getElementById("capture");
  domtoimage.toPng(node).then(function (dataUrl) {
    let a = document.createElement("a");
    // a.style = 'display: none'; // 建立一個隱藏的a標籤
    a.href = dataUrl;
    // document.body.appendChild(a);
    a.download = "image.png";
    a.click(); // 觸發a標籤的click事件
    // document.body.removeChild(a);
  });
};

/*htmlToImage - 螢幕@2x*/
// const block_capture = () => {
// let node = document.getElementById('capture');
// htmlToImage.toPng(node)
//   .then(function (dataUrl) {
//     let img = new Image();
//     img.src = dataUrl;
//     document.body.appendChild(img);
//   })
//   .catch(function (error) {
//     console.error('失敗!', error);
//   });
// }

/*研究 a標籤的download*/
// const download_capture = () => {
//   let node = document.getElementById("capture");
//   htmlToImage
//     .toPng(node)
//     .then(function (dataUrl) {
//        let a = document.createElement("a");
//         a.href = dataUrl
//         a.download = "image.png";
//         a.click();// 觸發a標籤的click事件
//     });
// };