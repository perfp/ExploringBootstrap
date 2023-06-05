import { AccordionPage } from "./components/AccordionPage";
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
            }
        ]
    }
    
]


export default AppRoutes;