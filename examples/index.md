# Demo

---

## Normal usage

````javascript
var seekr = seekr || [];
seekr.push({
	ev:'test1',
	data:{
		a:'b'
	}
})
seajs.use('index', function(dataSaver) {
	dataSaver.on('all',function(a,b){
	console.log(a,b);
	});

	seekr.push({
		ev:'test2'
		})

	setTimeout(function(){
		seekr.push({
		ev:'test3'
		})
		},2000)
});
````
