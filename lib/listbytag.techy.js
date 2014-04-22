module.exports = function(tag) {
	var template = 'partials/article-home.md';
	var articles = this.pages('articles', 'date');
	var html = '', to = articles.length;
	for(var i=0; i<to; i++) {
		var article = articles[i];
		var tags = article.get('tags');
		if(tags && tags.indexOf(tag) >= 0) {
			html += this.template(template, {
				title: article.get('title'),
				preface: article.get('preface'),
				link: this.linkto(article),
				date: article.get('date'),
				tags: article.get('tags').join(', ')
			});
		}
	}
	return html;
}