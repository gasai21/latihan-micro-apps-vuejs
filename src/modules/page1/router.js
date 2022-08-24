const MyModule = () => import("./MyModule.vue");
// const Home = () => import("./views/Home.vue");
const TestPage = () => import("./views/Test_Page.vue");

const moduleRoute = {
  path: "/testpage",
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