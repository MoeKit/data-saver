# data-saver [![spm version](https://moekit.timo.today/badge/data-saver)](https://moekit.timo.today/package/data-saver)

---



## 使用

用于在页面中push数据，无论该模块是否已经加载。

加载后会获取seekr这个数组的数据进行初始化，并且覆盖`seekr`全局变量。

## 方法

+ `push`

## 代码

在任何情景下都可以使用`seekr`来push数据

````javascript
var seekr = seekr || [];
seekr.push({
	ev:'hello',
	data:{
		detail: ''
	}
});
````
