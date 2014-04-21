module.exports = function() {
	var pagesIn = function(path) {
		var pages = this.pages(), res = [];
		for(var i=0; i<pages.length; i++) {
			if(pages[i].get('paths').self.indexOf(path) >= 0) res.push(pages[i])
		}
		return res;
	}.bind(this);
	var strToDate = function(str) {
		var tmp = str.split('-');
		return new Date(
			parseInt(tmp[2]),
			parseInt(tmp[1]),
			parseInt(tmp[0])
		);
	}
	var pages = pagesIn('articles');
	for(var i=0; i<pages.length; i++) {
		for(var j=i; j<pages.length; j++) {
			if(strToDate(pages[i].get('date')) > strToDate(pages[j].get('date'))) {
				var tmp = pages[i];
				pages[i] = pages[j];
				pages[j] = tmp;
			}
		}		
	}
	return pages;
}