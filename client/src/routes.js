import Shop from "./pages/Shop";
import CarPage from "./pages/CarPage";
import AdminPage from "./pages/AdminPage";
import DevPage from "./pages/DevPage";
export const Routes=[
    {
        path:'/',
        Component: Shop
    },
    {
        path:'/car/:id',
        Component:CarPage
    },
    {
        path:'/admin',
        Component:AdminPage
    },
    {
        path:'/dev',
        Component:DevPage
    },
]