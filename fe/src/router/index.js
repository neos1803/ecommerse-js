
const routes = [

  {
      path: '/',
      name: 'home',
      redirect: { name: 'dashboard' },
      component: () => import(/* webpackChunkName: 'index view' */'../components/Layout.vue'),
      meta: {
          requiresAuth: true
      },
      children:[
          {
              name: 'dashboard',
              path: '',
              component: () => import(/* webpackChunkName: 'Dashboard view' */'../components/Shop.vue'),
          },
          {
              path: 'carts',
              name: 'carts',
              component: () =>
                  import ( /* webpackChunkName: "cart all view" */ '../components/Cart.vue')
          },
          {
            path: 'product/:id/detail',
            name: 'product-detail',
            component: () =>
                import ( /* webpackChunkName: "product all view" */ '../components/Product.vue')
        }
          
      ],
  },
  // {
  //     path: '/login',
  //     name: 'user-login',
  //     component: () => import(/* webpackChunkName: 'user login view' */'./views/UserLogin.vue'),
  //     meta: {
  //         guest: true
  //     }
  //   },


];



// export default routes;

// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from '@/components/Home'
// import Shop from '@/components/Shop'
// import Product from '@/components/Product'
// import Blog from '@/components/Blog'
// import Post from '@/components/Post'
// import Cart from '@/components/Cart'
// import Layout from '@/components/Layout'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       component: Layout,
//       children:[
//         {
//           path:'/',
//           component:Home,
//           name:'Home'
//         },
//         {
//           path:'/shop',
//           component:Shop,
//           name:'Shop'
//         },
//         {
//           path:'/product',
//           component:Product,
//           name:'Product'
//         },
//         {
//           path:'/blog',
//           component:Blog,
//           name:'Blog'
//         },
//         {
//           path:'/post',
//           component:Post,
//           name:'Post'
//         },
//         {
//           path:'/cart',
//           component:Cart,
//           name:'Cart'
//         }
//       ]

//     }
//   ],
//     mode:'history'
// },

//   )
export default routes;