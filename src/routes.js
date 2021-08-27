import React from 'react'
import About from './components/about'
import Home from './components/home'
import Contact from './components/contact'
import NotFound from './components/notfound'
import Products from './components/products'
const routeList = [
    {
        path: '/',
        exact: true,
        component: () => <Home />
    },
    {
        path: '/home',
        exact: false,
        component: () => <Home />

    },
    {
        path: '/about',
        exact: false,
        component: () => <About />

    },
    {
        path: '/contact',
        exact: false,
        component: () => <Contact />

    },
    {
        path: '/products',
        exact: false,
        component: ({ match }) => <Products match={match} />

    },
    {
        path: '',
        exact: false,
        component: () => <NotFound />

    }
]
export default routeList;