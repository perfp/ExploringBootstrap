import React from "react";
import { Alert, Button } from "reactstrap";




export function ButtonPage() {

    var [alert, setAlert] = React.useState("none");

    function buttonClick() {
        setAlert("block");
    }
    return (
        <>
            <h1>Buttons</h1>
            <div className="vstack gap-3 ">
                <div className="row">
                    <div className="hstack gap-3">
                        <Button color="primary" onClick={() => setAlert("Primary")}>Primary</Button>
                        <Button color="secondary" onClick={() => setAlert("Secondary")}>Secondary</Button>
                        <Button color="success" onClick={() => setAlert("Success")}>Success</Button>
                        <button type="button" className="btn btn-danger" onClick={() => setAlert("Danger")}>Danger</button>
                        <button type="button" className="btn btn-warning" onClick={() => setAlert("Warning")}>Warning</button>
                        <button type="button" className="btn btn-info" onClick={() => setAlert("Info")}>Info</button>
                    </div>
                </div>

                <div className="row">
                    <Alert color="primary">
                        {alert}
                    </Alert>
                </div>
            </div>
        </>
    )
}