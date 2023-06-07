import { AccordionPage } from "./components/AccordionPage";
import { AlertsPage } from "./components/AlertsPage";
import { BadgePage } from "./components/BadgePage";
import {Home} from "./components/Home";
import { Jumbotron } from "./components/Jumbotron";
import { Root } from "./components/Root";

const AppRoutes = [
    {
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/jumbotron",
                element: <Jumbotron />
            },{
                path: "/accordion",
                element: <AccordionPage />
            },
            {
                path: "/alerts",
                element: <AlertsPage />
            },
            {
                path: "/badges",
                element: <BadgePage />
            }
        ]
    }
    
]


export default AppRoutes;