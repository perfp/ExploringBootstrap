
export function AlertsPage() {
    function showNormalAlert() {
        showAlert("This is a normal alert", "normal");
    }
    function showDangerAlert() {
        showAlert("This is a danger alert", "danger");
    }
    function showSuccessAlert() {
        showAlert("This is a success alert", "success");
    }function showWarningAlert() {
        showAlert("This is a warning alert", "warning");
    }

    function showAlert(message, type) {
        const alertPlaceholder = document.querySelector('.alertPlaceholder');
        var alert = document.createElement("div");
        alert.innerHTML = `<div>${message}</div>`;
        alert.classList.add("alert", `alert-${type}`, "alert-dismissible", "fade", "show");
        alertPlaceholder.appendChild(alert);
    }
    return (
        <>
            <h1>Alerts page</h1>

            <div className="alertPlaceholder" />
            <button type="button" className="btn btn-primary" onClick={showNormalAlert}>Show normal alert</button>
            <button type="button" className="btn btn-primary" onClick={showDangerAlert}>Show danger alert</button>
            <button type="button" className="btn btn-primary" onClick={showSuccessAlert}>Show success alert</button>
            <button type="button" className="btn btn-primary" onClick={showWarningAlert}>Show warning alert</button>
        </>
    )
}