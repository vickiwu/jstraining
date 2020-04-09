(function() {

  window.App = {
    Models: {}, // 模型 -> 用于绑定键值数据和自定义事件，包括数据交互及与其相关的大量逻辑
    Collections: {}, // 集合 
    Views: {}, // 视图，数据展现 -> 声明事件处理函数
    Router: {} // 路由
  };
  
  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'show/:id': 'show',
      'download/*random': 'download',
      'search/:query': 'search',
      '*other': 'default'
    },
  
    index: function() {
      $(document.body).append("调用了 Index 路由<br>");
    },
  
    show: function(id) {
      $(document.body).append("调用了 Show 路由，id 等于 " + id + "<br>");
    },
  
    download: function(random) {
      $(document.body).append("调用了 Download 路由，参数等于 " + random + "<br>");
    },
  
    search: function(query) {
      $(document.body).append("调用了 Search 路由，参数等于 " + query + "<br>");
    },
  
    default: function(other) {
      // 可以重定向到404
      $(document.body).append("你访问的 " + other + " 路由未定义<br>");
      
    }
  
  });
  
  new App.Router();
  Backbone.history.start();
  
  })();
  