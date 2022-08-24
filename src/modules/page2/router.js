const MyModule = () => import("./MyModule.vue");
// const Home = () => import("./views/Home.vue");
const TestPage = () => import("./views/Index_Page2.vue");

const moduleRoute = {
  path: "/page2",
  component: MyModule,
  children: [
    {
      path: "/",
      component: TestPage
    }
  ]
};

export default router => {
  router.addRoutes([moduleRoute]);
};