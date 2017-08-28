
/*

发生了什么？
	你的标题通过JavaScript被更改为了“Hello world!”。
	我们首先使用一个函数querySelector() 来获取标题这个对象，
	然后将其储存在一个叫 myHeading 的变量中
	
	在那之后，我们将 myHeading 的属性 innerHTML （代表这个标题的内容）赋予了“Hello world!”这个值。
---------------------------------------------------------
总结: 

	 想对某个元素进行操作，首先你得先选择并获取,它。
	 想它发生改变,把它存储起来.进行后续操作.

*/



/*

添加一个图像转换器
这一部分我们将添加另一个图片到我们的站点，
并且添加简单的 JavaScript 使得单击图片时转换图片。

*/


/*
var myImage = document.querySelector('img');	//找到img标签并存储

myImage.onclick = function(){		//img标签会触发一个事件
	var mySrc = myImage.getAttribute('src');	//获取img图片的对象,并存储
	if(mySrc === 'images/firefox-icon.png'){	//进行对比,T则替换成新图
		myImage.setAttribute('src','images/firefox2.png');
	} else{// F则原则设置为原图对象.
		myImage.setAttribute('src','images/firefox-icon.png');
	}


}*/


/*
//1. 先找到父节点img,获取并存储它
//2. 该父亲节点img能触发一个匿名方法
//3. 获取img对象下的'src'属性,该属性表示是图片资源的路径,看为一个对象
//4. 判断src对象是否和第一张图路径相同
//5. 相同则进行操作
//6. 不同(意味着它已经被更改过了).则src还原至原图
*/



/*

添加个性化的欢迎信息
接下来我们会添加另一段代码，在用户初次进入站点时将网页的标题改成一段个性化的欢迎信息。
欢迎信息会持续到用户离开网页。
还会添加一个选项来在必要的时候改变用户并且改变欢迎信息。

*/





//a.取得Button myHeading 对象
var myButton = document.querySelector('button');	//从DOM文档
var myHeading = document.querySelector('h1');



/*
b. 定义一个方法,作用于能写入用户名
	1.提示用户输入窗口 prompt,并存储
	2.使用localStorage Api 下的setItem函数来创建并存储至浏览器(没有过期时间)
	3.设置用户输入的姓名myName变量,最后将 myHeading对象设置成用户姓名的字符串
*/

function setUserName(){
	var myName = prompt('Please enter you name.');		// Web API Windows(对象表示一个包含DOM文档的窗口)下的 prompt mathod
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool,' + myName;

}


//c. 代码初始化,初次读取会重置应用.
if(!localStorage.getItem('name')){		//取反得True检测name是否已经存在   空字符串返回false,取反运算 True
	setUserName();	//表达式为True .进行不存在场景执行并创建,并获取到用户输入的数据,进行存储.
} else {		//已存在name字符串场景
	var storedName = localStorage.getItem('name');	//通过localStorage.getItem调用获得name字符串
	myHeading.innerHTML = 'Mozilla is cool,' + storedName;	//得到用户字符串插入到标题节点的结构中
}







//e. 选定一个事件来绑定至按钮,这里由于是用户点击鼠标,选用onclick事件
myButton.onclick  = function(){ //这样当我们点击时， setUserName() 函数就会运行。
	setUserName();	//这允许用户在任何想要的时候通过点击按钮来设置新的 name 。
					
} 















/* 
由上得到的几个思考角度: 1,数据在哪(用户行为),如何输入(提供窗口,可便用户输入prompt),如何存储(先临时变量存储,再使用localStorage.setItem API下的函数持续),
如何进行加工(按需求进行,操作html节点属性进行替换字符串),如何进输出(浏览器刷新进行解析DOM)

Windows.localStorage.setItem
*/