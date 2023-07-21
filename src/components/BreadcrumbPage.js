import { Breadcrumb, BreadcrumbItem } from "reactstrap";


export function BreadcrumbPage() {
    return (
        <>
            <div className="mt-4 p-5 bg-primary text-white rounded">
                <h1>Breadcrumb example</h1>
            </div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item">Users</li>
                </ol>
            </nav>

            <nav  aria-label="breadcrumb">
                <ol className="breadcrumb" style={{ '--bs-breadcrumb-divider': '"=>"' }}>
                    <li className="breadcrumb-item">Never</li>
                    <li className="breadcrumb-item">Gonna</li>
                    <li className="breadcrumb-item">Give</li>
                    <li className="breadcrumb-item">You</li>
                </ol>
            </nav>
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a" href="#">ReactStrap</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="#">BreadcrumbItem</BreadcrumbItem>
            </Breadcrumb>
        </>
    )
}