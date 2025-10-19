// Demonstrates document-level click handler + e.target.closest('button')

const logEl = document.getElementById('log');
const buttonArea = document.getElementById('button-area');

function writeLog(text) {
    const time = new Date().toLocaleTimeString();
    logEl.innerHTML = `<div>[${time}] ${text}</div>` + logEl.innerHTML;
}

// Global click listener (event delegation)
document.addEventListener('click', (e) => {
    // Find closest ancestor button (including the clicked element itself)
    const button = e.target.closest('button');

    // If click wasn't on a button, ignore
    if (!button) return;

    // Optional: ensure button is inside our button area or toolbar
    if (!document.body.contains(button)) return;

    // Read action from data-action attribute
    const action = button.dataset.action || 'unknown';
    const label = button.dataset.label || button.textContent.trim();

    // Handle actions
    if (action === 'alert') {
        alert('Button clicked: ' + label);
        writeLog(`Alert action on "${label}"`);
    } else if (action === 'toggle') {
        button.classList.toggle('highlight');
        writeLog(`Toggled highlight on "${label}"`);
    } else if (action === 'remove') {
        const parent = button.parentElement;
        button.remove();
        writeLog(`Removed button "${label}"`);
        // if container becomes empty, add a notice
        if (parent && parent.children.length === 0) writeLog('No buttons left in area');
    } else if (action === 'add') {
        // Create a new button dynamically to show delegation works for new elements
        const n = buttonArea.querySelectorAll('button').length + 1;
        const newBtn = document.createElement('button');
        newBtn.dataset.action = 'alert';
        newBtn.dataset.label = `New ${n}`;
        newBtn.textContent = `New ${n}`;
        buttonArea.appendChild(newBtn);
        writeLog(`Added "${newBtn.textContent}"`);
    } else if (action === 'clear-log') {
        logEl.innerHTML = '';
    } else {
        writeLog(`Clicked button "${label}" (action="${action}")`);
    }
});



//.contaion