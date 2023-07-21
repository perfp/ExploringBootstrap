import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";

export function CardPage() {
    return (
        <div>
            <h1>Card page</h1>
            <Row>
                <Col sm="6">
                    <div className="card" style={{ width: '324px' }}>
                        <img src="/images/empire_160.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Empire</h5>
                            <p>Queensryche</p>
                        </div>
                    </div>
                </Col>

                <Col sm="6">
                    <Card className="" style={{ width: '324px' }}>
                        <CardImg top src="/images/operation_mindcrime_320.png" alt="Operation Mindcrime" />
                        <CardBody>
                            <CardTitle tag="h5">Operation Mindcrime</CardTitle>
                            <CardSubtitle>Queensryche</CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}