import { Button, ButtonGroup } from "reactstrap";

export function ButtonGroupPage(){
    return(
        <div>
            <h1>Button group page</h1>
            <div className="btn-group-vertical" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary">Left</button>
                <button type="button" className="btn btn-secondary">Middle</button>
                <button type="button" className="btn btn-info">Right</button>
            </div>
            <br/>
            <ButtonGroup className="mt-3" aria-label="Basic example" vertical={true}>
                <Button color="primary">Left</Button>
                <Button color="secondary">Middle</Button>
                <Button color="info">Right</Button>
            </ButtonGroup>
        </div>
    )
}