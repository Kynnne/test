
//此处编写京东商品详情页交互特效JS代码

//1. 实现选择颜色的单选（通过红色边框实现）
var colorList = document.getElementsByClassName("prod-color")[0].getElementsByTagName("span");
for(var i=0; i<colorList.length; i++){
    colorList[i].index = i
    colorList[i].onclick = function(){
        this.style.border = '1px solid red'
        for(var j=0; j<colorList.length; j++) {
            if(this.index !== j) {
                colorList[j].style.border = 'none'
            }
        }
    }
}
//2. 实现选择版本的单选（通过红色边框实现），并且商品单价会变成对应的价格值
var modList = document.getElementsByClassName("ver-mod")[0].getElementsByTagName("span");
var salePrice = document.getElementById('sale-price')
for(var q=0; q<modList.length; q++){
    modList[q].index = q
    modList[q].onclick = function(e){
        this.style.border = '1px solid red'
        salePrice.innerHTML = e.target.dataset.price
        for(var k=0; k<modList.length; k++) {
            if(this.index !== k) {
                modList[k].style.border = 'none'
            }
        }
    }
}
//3. 商品购买数量会根据点击加减号实现数量的变化
// 加
function addNum() {
    var buyNum = document.getElementById('prod-num-text')
    buyNum.value = Number(buyNum.value) + 1
}
// 减
function minNum() {
    var buyNum = document.getElementById('prod-num-text')
    if(Number(buyNum.value) === 1) return
    buyNum.value = Number(buyNum.value) - 1
}
//4. 商品图片的切换效果，鼠标移动到小图上，即大图切换成对应图片
var picList = document.getElementsByClassName("spec-items")[0].getElementsByTagName("img");
var specImg = document.getElementById("spec-img")
var viewImg = document.getElementsByClassName("preview-alert")[0].getElementsByTagName("img")[0]
for(var z=0; z<picList.length; z++){
    picList[z].index = z
    picList[z].onmouseover = function(){
        specImg.src =  this.src;
        viewImg.src = this.src
        this.style.border = '2px solid red'
        for(var x=0; x<picList.length; x++) {
            if(this.index !== x) {
                picList[x].style.border = 'none'
            }
        }
    }
}
//5. 放大镜效果，移动到大图上，则会出现放大镜
var rightPic = document.getElementsByClassName("preview-alert")[0]
specImg.onmouseover = function (ent){
    var event = ent || window.event;
    rightPic.style.top = this.offsetTop + 'px';
    rightPic.style.left = this.offsetLeft + this.offsetWidth + 'px';
    rightPic.style.display = "block";
}
specImg.onmouseout = function (){
    rightPic.style.display = "none"
}
specImg.onmousemove = function (ent){
    var event = ent || window.event;
    var x = event.clientX - this.offsetLeft;
    var y = event.clientY - this.offsetTop;
    rightPic.scrollLeft = x*2-300;
    rightPic.scrollTop = y*2-300;

}
//6. 扩展：点击大图上的播放器图标则会实现视频播放。
var videoDom = document.getElementById('video-wrap')
var videoBtn= document.getElementsByClassName('video-btn')[0]
function handleVideo() {
    videoDom.style.display = 'block'
    videoBtn.style.display = 'none'
}
function hideVideo() {
    var video = document.getElementById('video')
    video.pause()
    video.currentTime = 0
    videoDom.style.display = 'none'
    videoBtn.style.display = 'block'
}