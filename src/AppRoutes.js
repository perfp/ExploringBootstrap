import { AccordionPage } from "./components/AccordionPage";
import { AlertsPage } from "./components/AlertsPage";
import { BadgePage } from "./components/BadgePage";
import { BreadcrumbPage } from "./components/BreadcrumbPage";
import { ButtonPage } from "./components/ButtonPage";
import { ButtonGroupPage } from "./components/ButttonGroupPage";
import { CardPage } from "./components/CardPage";
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
            },
            {
                path: "/breadcrumbs",
                element: <BreadcrumbPage />
            },
            {
                path: "/buttons",
                element: <ButtonPage />
            },
            {
                path: "/buttongroups",
                element: <ButtonGroupPage />
            },
            {
                path: "/cards",
                element: <CardPage />
            }
        ]
    }
    
]


export default AppRoutes;