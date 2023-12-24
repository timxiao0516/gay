var face_colors = "fec5bb-fcd5ce-fae1dd-f8edeb-e8e8e4-d8e2dc-ece4db-ffe5d9-ffd7ba-fec89a".split("-").map(a=>"#"+a)
var eye_colors = "323031-3d3b3c-7f7979-c1bdb3-5f5b6b".split("-").map(a=>"#"+a)
var pos_x=[]
var pos_y=[]
var sizes=[]
var colors=[]
var v_y=[]
var v_x=[]
var txts
var face_move_var =false
var lang = navigator.language
var myRec = new p5.SpeechRec(lang)
var face_Rot_var = false
var sound1
var analyzer
function preload(){
  sound1 = loadSound("alex-productions-christmas-is-coming.mp3") //先把音樂檔載入到sound1程式碼中
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#faf3dd")
  analyzer.setInput(sound1)
}


function setup() {
 createCanvas(windowWidth, windowHeight);
 inputElement = createInput("412730987蕭詠錠") //產生一個文字方塊，""內的文字為預設中的文字
 inputElement.position(10,10) //把文字方塊放到(10,10的位置)
 inputElement.size(140,40) //(寬,高)
 //以下的style，可以google搜尋html
 inputElement.style("font-size","20px") //文字大小
 inputElement.style("color"," #00DB00") //文字顏色
 inputElement.style("background","#B8336A")
 inputElement.style("border","1")








 //按鈕的設定
 btnmoveElement = createButton("移動")
 btnmoveElement.position(170,10) //按鈕位置
 btnmoveElement.size(80,40)
 btnmoveElement.style("font-size","20px") //文字大小
 btnmoveElement.style("color","#000000") //文字顏色
 btnmoveElement.style("background","#E6E6F2")
 btnmoveElement.style("border","1")
 btnmoveElement.mousePressed(face_move)




 btnStopElement = createButton("暫停")
 btnStopElement.position(270,10) //按鈕位置
 btnStopElement.size(80,40)
 btnStopElement.style("font-size","20px") //文字大小
 btnStopElement.style("color","#000000") //文字顏色
 btnStopElement.style("background","#E6E6F2")
 btnStopElement.style("border","1")
 btnStopElement.mousePressed(face_stop)








btnvoiceElement = createButton("語音")
btnvoiceElement.position(470,10) //按鈕位置
btnvoiceElement.size(80,40)
btnvoiceElement.style("font-size","20px") //文字大小
btnvoiceElement.style("color","#000000") //文字顏色
btnvoiceElement.style("background","#E6E6F2")
btnvoiceElement.style("border","1")
btnvoiceElement.mousePressed(voice_go)








 //radio的設定，
 radioElement=createRadio()
 radioElement.option("暫停")
 radioElement.option("旋轉")
 radioElement.option("移動")
 radioElement.position(370,10)
 radioElement.size(100,80)
 radioElement.style("font-size","20px")
 radioElement.style("color","#000")
 radioElement.style("background","#f3d5")
 
  //for(var i=0;i<20;i=i+1){
   // drawface(face_colors[int(random(face_colors.length))] ,eye_colors[int(random(eye_colors.length))],random(0.3,1.2))
// }
}
function draw(){
   background("#C490D1");
   let mode= radioElement.value()
   for(var i=0;i<pos_x.length;i=i+1){
    push()
    txts = inputElement.value();
    translate(pos_x[i],pos_y[i])
    if(mode=="旋轉"){
      rotate(sin(frameCount/10*v_y[i]))




    }
    else
    {
      if(mode=="移動"){
        face_move_var =false
        }
       
     
    }
    drawface(colors[i],0,sizes[i])
    pop()
    if(face_move_var || mode=="移動"){
    pos_y[i] = pos_y[i] +v_y[i]
    }
    if(pos_y[i] > height || pos_y[i]<0)
    {
      pos_x.splice(i,1)
      pos_y.splice(i,1).
      sizes.splice(i,1)
      colors.splice(i,1)
      v_y.splice(i,1)
   }
  }
}
    function drawface(face_clr=255,eye_clr=0,size=1){   //255與0為預設的值
  push()
  scale(size)
  fill("#fff")
  textSize(50)
  text(txts,0,-100)
  fill(face_clr)
 
 
 
  //臉蛋
  fill(255,204,0);
  ellipse(200, 280, 120, 120); // 頭
  ellipse(200, 200, 150, 150); //身體

  // 眼睛
  fill(0); 
  ellipse(180, 190, 20, 20); // 左眼
  ellipse(220, 190, 20, 20); // 右眼

  // 鼻子
  fill(255,87,34); 
  ellipse(200, 210, 20, 20);
  // 嘴巴
  noFill();
  stroke(0);
  arc(200, 215, 40, 20, 0, PI);

  // 耳朵
  fill(255,204,0);
  ellipse(160,130,40,80); // 左耳
  ellipse(240,130,40,80); // 右耳

  noStroke();
  rect(188,255,24,20);
  fill(255,204,0);
  ellipse(130,280,40,80);
  ellipse(270,280,40,80);
  ellipse(180,340,40,80);
  ellipse(230,340,40,80);
  

 
    
  pop()  //把原本設定都消失
}








function mousePressed(){
  if(mouseY>60){
    pos_x.push(mouseX)
    pos_y.push(mouseY)
    sizes.push(random(0.3,1))
    colors.push(face_colors[int(random(face_colors.length))])
    v_y.push(random(-1,1))
    if(sound1.isPlaying()){
      sound1.stop();
    }else{
      sound1.play();
    }
  }
  }

function face_move(){
  face_move_var = true
}
function face_stop(){
   face_move_var = false








}
function voice_go() {
   myRec.onResult = showResult
   myRec.start()
 
}
function showResult() {
if(myRec.resultValue == true)
{
 print(myRec.resultString)
 let lowStr =myRec.resultString.toLowerCase();
 let mostrecentword = lowStr.sp
 if(myRec.resultString.indexOf ("走")!== -1 ){
  face_move_var = true
 }
 if(myRec.resultString.indexOf ("停")!== -1 ){
  face_move_var = false
  face_Rot_var=false
  }

}
}




