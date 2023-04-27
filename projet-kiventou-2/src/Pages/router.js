import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Suivi_de_la_Commande from "./Suivi_de_la_Commande";
import Layout from "./Layout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/Suivi_de_la_Commande",
                    element: <Suivi_de_la_Commande />
                }
            ]
        }
    ]
);

export default router;