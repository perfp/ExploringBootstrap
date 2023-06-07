
export function AlertsPage() {
    function showNormalAlert() {
        showAlert("This is a normal alert", "normal");
    }
    function showDangerAlert() {
        showAlert("This is a danger alert", "danger");
    }
    function showSuccessAlert() {
        showAlert("This is a success alert", "success");
    }

    function showWarningAlert() {
        showAlert("This is a warning alert", "warning");
    }

    function showAlert(message, type) {
        const alertPlaceholder = document.querySelector('.alertPlaceholder');
        var alert = document.createElement("div");
        alert.innerHTML = `<div>${message}</div>`;
        alert.classList.add("alert", `alert-${type}`, "alert-dismissible", "fade", "show");
        if (alertPlaceholder.hasChildNodes()) alertPlaceholder.removeChild(alertPlaceholder.firstChild);
        alertPlaceholder.appendChild(alert);
    }
    return (
        <>
            <h1>Alerts page</h1>
            <div className="row gy-1">
                <div className="col-8">
                    <div className="alertPlaceholder" />
                </div>
                <div className="row">
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" onClick={() => showAlert("This is a normal alert", "normal")} >Show normal alert</button>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" onClick={showDangerAlert}>Show danger alert</button>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" onClick={showSuccessAlert}>Show success alert</button>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" onClick={showWarningAlert}>Show warning alert</button>
                    </div>
                </div>
            </div>

        </>
    )
}