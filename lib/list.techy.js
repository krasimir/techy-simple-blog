module.exports = function(template, max) {
	template = template || 'partials/article-home.md';
	var articles = this.pages('articles', 'date');
	var html = '', to = max || articles.length;
	for(var i=0; i<to; i++) {
		var article = articles[i];
		html += this.template(template, {
			title: article.get('title'),
			preface: article.get('preface').replace('{siteURL}', this.get('paths').root),
			link: this.linkto(article),
			date: article.get('date'),
			tags: article.get('tags').join(', ')
		});
	}
	return html;
}