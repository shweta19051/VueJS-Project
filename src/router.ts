import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      // Lazy Loading
      path: "/login",
      name: "login",
      component: () =>
        import("@/views/Login.vue")
    },
    {
      // Lazy Loading
      path: "/register",
      name: "register",
      component: () =>
        import("@/views/Register.vue")
    },
    {
      // Lazy Loading
      path: "/settings",
      name: "settings",
      component: () =>
        import("@/views/Settings.vue")
    },
    {
      // Lazy Loading
      path: "/editor/:article-slug",
      name: "editor_edit",
      component: () =>
        import("@/views/ArticleEditor.vue")
    },
    {
      // Lazy Loading
      path: "/editor",
      name: "editor_create",
      component: () =>
        import("./views/ArticleCreate.vue")
    },
    {
      // Lazy Loading
      path: "/article/:article-slug",
      name: "article",
      component: () =>
        import("./views/Article.vue")
    },
    {
      // Lazy Loading
      path: "/:username(@,*)",
      name: "profile",
      component: () =>
        import("./views/Profile.vue")
    }
  ],
});
