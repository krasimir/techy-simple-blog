---
date: 11-01-2014
title: An article with code
preface: Curabitur consequat <img src="{siteURL}themes/default/public/img/favicon.png" /> ligula iaculis elit aliquet tincidunt. Proin aliquet massa venenatis, porta lorem a, hendrerit metus. Sed dapibus augue nibh. Proin imperdiet porttitor mauris vitae rutrum. Morbi rutrum risus mi, eget laoreet magna placerat in. Nullam fringilla pellentesque massa, sed imperdiet nunc interdum ac.
tags:
  - javascript
  - nodejs
---
## An article with code

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem temporibus eveniet sapiente aspernatur qui veniam ut molestiae mollitia! Voluptatum, unde molestias distinctio est sit omnis qui aperiam. Veniam, eum, assumenda.

	module.exports = function(template, max) {
		template = template || 'partials/article-home.md';
		var articles = this.pages('articles', 'date');
		var html = '', to = max || articles.length;
		for(var i=0; i&lt;to; i++) {
			var article = articles[i];
			html += this.template(template, {
				title: article.get('title'),
				preface: article.get('preface'),
				link: this.linkto(article),
				date: article.get('date'),
				tags: article.get('tags').join(', ')
			});
		}
		return html;
	}

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem temporibus eveniet sapiente aspernatur qui veniam ut molestiae mollitia! Voluptatum, unde molestias distinctio est sit omnis qui aperiam. Veniam, eum, assumenda.

	module.exports = function(tag) {
		var template = 'partials/article-home.md';
		var articles = this.pages('articles', 'date');
		var html = '', to = articles.length;
		for(var i=0; i&lt;to; i++) {
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

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem temporibus eveniet sapiente aspernatur qui veniam ut molestiae mollitia! Voluptatum, unde molestias distinctio est sit omnis qui aperiam. Veniam, eum, assumenda.