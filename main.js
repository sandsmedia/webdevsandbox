console.log('hello world');
console.log(data.Articles);


var articles = data.Articles;
var articlesVue = new Vue({
        el: "#articlesVue",
        data: {
            articles: articles,
            message: 'Hello Vue.js!'
        }

    });
