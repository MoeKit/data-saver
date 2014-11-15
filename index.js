var dataSaver = {
	data: [],
	push: function(data) {
		this.data.push(data);
		this.emit('push',data);
	},
	get: function() {
		return this.data;
	}
};

var eventor = require('eventor');
eventor.mixTo(dataSaver);

var init = function() {
	// has push sth
	if (window.seekr && window.seekr.length) {
		for (var i in window.seekr) {
			dataSaver.push(seekr[i]);
		}
	}
};


init();

window.seekr = module.exports = dataSaver;