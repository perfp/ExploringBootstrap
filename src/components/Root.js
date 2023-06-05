import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";
import { Outlet } from "react-router";


export function Root () {
    return (
        <>
        <NavMenu />
        <Container tag="main">
            <Outlet />
        </Container>
        </>        
    )
}