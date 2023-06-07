import { Badge, Button } from "reactstrap";


export function BadgePage () {
    return (
        <div>
            <h1>Badge page</h1>
            <div>Boostrap primary 
                <span className="badge bg-primary">Primary</span>
            </div>
            <div>Reactstrap secondary
                <Badge color="secondary">secondary</Badge>
            </div>
            <div>
                <Button color="primary">Button with badge <Badge color="secondary">4</Badge></Button>
            </div>
            <div className="row-1 p-3">
                <button type="button" className="btn btn-primary">
                    button
                </button>            
            </div>

            
        </div>
    )
}