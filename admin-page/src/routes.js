// import ProductEdit from "@/views/ProductEdit"
// import ProductCreate from "@/views/ProductCreate"


// import Home from "@/components/Home";
// // import Posts from './views/Page.vue'
// import Photos from './views/Photo.vue'
// import Home from './views/Home.vue'
// import Album from './views/Album.vue'
// import Paginate from './components/Paginate'



const routes = [
    // {
    //     path: '/',
    //     redirect: { name: 'home' }
    // },
    {
        path: '/',
        name: 'home',
        redirect: { name: 'dashboard' },
        component: () => import(/* webpackChunkName: 'index view' */'./views/Index.vue'),
        meta: {
            requiresAuth: true
        },
        children:[
            {
                name: 'dashboard',
                path: '',
                component: () => import(/* webpackChunkName: 'Dashboard view' */'./views/Dashboard.vue'),
            },
            {
                path: 'products',
                name: 'products',
                component: () =>
                    import ( /* webpackChunkName: "product all view" */ './views/Products.vue')
            },
            {
                path: 'discounts',
                name: 'discounts',
                component: () =>
                    import ( /* webpackChunkName: "discount all view" */ './views/Discounts.vue')
            },
            {
                path: "discounts/:id/edit",
                name: "discount-edit",
                component: () =>
                    import ( /* webpackChunkName: "discount edit view" */ './views/DiscountEdit.vue'),
                // component: ProductEdit,
                params: true,
            },
            {
                path: "discount/new",
                name: "discount-create",
                component: () =>
                    import ( /* webpackChunkName: "discount new view" */ './views/DiscountCreate.vue')
                // component: ProductCreate
              },
            {
                path: 'orders',
                name: 'orders',
                component: () =>
                    import ( /* webpackChunkName: "product all view" */ './views/Orders.vue')
            },
            {
                path: "orders/:id/edit",
                name: "order-edit",
                component: () =>
                    import ( /* webpackChunkName: "Order all view" */ './views/OrderEdit.vue'),
                // component: OrderEdit,
                params: true,
            },
            {
                path: "products/:id/edit",
                name: "product-edit",
                component: () =>
                    import ( /* webpackChunkName: "product all view" */ './views/ProductEdit.vue'),
                // component: ProductEdit,
                params: true,
            },
            {
                path: "product/new",
                name: "product-create",
                component: () =>
                    import ( /* webpackChunkName: "product all view" */ './views/ProductCreate.vue')
                // component: ProductCreate
              },
            
        ],
    },
    {
        path: '/login',
        name: 'user-login',
        component: () => import(/* webpackChunkName: 'user login view' */'./views/UserLogin.vue'),
        meta: {
            guest: true
        }
      },


];

  

export default routes;