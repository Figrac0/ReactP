import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/cart";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./components/Layout";
import Thanks from "./pages/Thanks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            // { path: "", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "cart", element: <Cart /> },
            { path: "thanks", element: <Thanks /> },
            { path: "category/:categoryId", element: <Category /> },
            { path: "product/:productId", element: <ProductDetails /> },
            { path: "*", element: <NotFound /> },
            // { path: "*", element: <Navigate to="/" /> },
        ],
    },
]);
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: (
//             <>
//                 <Header />
//                 <Home />
//                 <Footer />
//             </>
//         ),
//     },
//     {
//         path: "about",
//         element: (
//             <>
//                 <Header />
//                 <About />
//                 <Footer />
//             </>
//         ),
//     },
//     {
//         path: "cart",
//         element: (
//             <>
//                 <Header />
//                 <Cart />
//                 <Footer />
//             </>
//         ),
//     },
//     {
//         path: "categories",
//         element: (
//             <>
//                 <Header />
//                 <Categories />
//                 <Footer />
//             </>
//         ),
//     },
//     {
//         path: "*",
//         element: (
//             <>
//                 <Header />
//                 <NotFound />
//                 <Footer />
//             </>
//         ),
//     },
//     {
//         path: "product",
//         element: (
//             <>
//                 <Header />
//                 <ProductDetails />
//                 <Footer />
//             </>
//         ),
//     },
// ]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
