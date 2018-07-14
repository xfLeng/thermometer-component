# thermometer-component
WEB前端温度计组件。
<br>
## 使用方法
### 1.在HTML中添加一个canvas
```html
<div>
    <canvas id="thermometer1" width="228" height="240"></canvas>
</div>
```
### 2.获取该canvas，调用drawThermometer进行绘制，
```js
var canvas1 = document.getElementById('thermometer1');
//参数说明：Canvas，最小温度，最大温度，当前温度
drawThermometer(canvas1, -10, 50, 30);//温度
```
## 效果
![image](https://github.com/The-Emperor1/thermometer-component/blob/master/Thermometer/images/1%20(1).jpg)
![image](https://github.com/The-Emperor1/thermometer-component/blob/master/Thermometer/images/1%20(2).jpg)
![image](https://github.com/The-Emperor1/thermometer-component/blob/master/Thermometer/images/1%20(3).jpg)
