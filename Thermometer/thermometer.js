/**
 * @fileName:thermometer.js
 * @author: Leng
 * @date: 2018-03-29
 * @Description:自定义温度计控件，minMark,maxMark：温度计的量程；current：当前温度
 */
function drawThermometer(canvas,minMark,maxMark,current){
    var cxt=canvas.getContext('2d'); //取得上下文
    var canvasW=canvas.width;//画板宽度
    var canvasH=canvas.height;//高度
    var width=36;//温度计宽度
    var height=canvasH;//温度计总高度
    var t=(current-minMark)/(maxMark-minMark)*(height-10);//当前温度高度

    //绘制外部
    cxt.lineWidth=3;
    cxt.beginPath();
    cxt.fillStyle='#134563';//温度计背景颜色
    cxt.strokeStyle='#22d8ff';//温度计边框颜色
    cxt.rect((canvasW-width)/2-10,10,width,height); //
    cxt.fill();
    cxt.stroke();
    cxt.closePath();

    //绘制内部
    cxt.beginPath();
    cxt.fillStyle='#22d8ff';//温度计背景颜色
    cxt.fillRect((canvasW-width)/2-10,height-t,width,t); //
    cxt.closePath();

    //绘制刻度线
    var shortTickMark=12;//短刻度线长度
    var longTickMark=24;//长刻度线长度
    var tickMarkNum=(maxMark-minMark)/2+1;//刻度线总条数
    var originX=(canvasW-width)/2+width;//起始点X //
    var originY=height;//起始点Y
    var space=(canvasH-10)/(tickMarkNum-1);
    for(var i=0;i<tickMarkNum;i++){
        cxt.lineWidth=1;
        cxt.beginPath();
        cxt.moveTo(originX,originY-i*space);
        if(i%5==0){
            cxt.lineTo(originX+longTickMark,height-i*space);
        }else{
            cxt.lineTo(originX+shortTickMark,height-i*space);
        }
        cxt.closePath();
        cxt.stroke();
    }

    //绘制刻度
    var markNum=(maxMark-minMark)/20+1;
    var startX=(canvasW-width)/2+width+longTickMark+10;//第一个刻度位置X //
    var startY=height;//第一个刻度位置Y
    var markSpace=(height-20)/(markNum-1);
    for(var j=0;j<markNum;j++){
        cxt.font = "20px Arial";
        //设置字体填充颜色
        cxt.fillStyle = "#22d8ff";
        //从坐标点(50,50)开始绘制文字
        cxt.fillText(minMark+((maxMark-minMark)/(markNum-1)*j), startX, startY-markSpace*j);
    }
}

