---
layout: none
noSave: true
---

<small>About the Author:</small><br />
name: John Black<br />
interests: front-end, gaming

---

<small>Latest blog posts:</small><br />
<% list('partials/article-sidebar.md', 5) %>

---

<small>Tags:</small><br />
<a href="<% linkto('javascript') %>">JavaScript</a>
<a href="<% linkto('nodejs') %>">Node.js</a>
<a href="<% linkto('css3') %>">CSS3</a>
<a href="<% linkto('html5') %>">HTML5</a>
<a href="<% linkto('design') %>">Design</a>