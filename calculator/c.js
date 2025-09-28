document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.btn');
    const historyList = document.getElementById('history-list');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const aiSuggestion = document.getElementById('ai-suggestion');

    let currentInput = '';
    let history = [];

    // --- Theme Management ---
    const setInitialTheme = () => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        themeToggle.checked = isDarkMode;
        body.classList.toggle('dark-mode', isDarkMode);
        body.classList.toggle('light-mode', !isDarkMode);
    };

    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        localStorage.setItem('darkMode', themeToggle.checked);
    });

    // --- Calculator Logic ---
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;
            handleInput(value);
        });
    });

    const handleInput = (value) => {
        if (value === 'AC') {
            currentInput = '';
        } else if (value === 'DEL') {
            currentInput = currentInput.slice(0, -1);
        } else if (value === '=') {
            calculate();
        } else if (value === '%') {
            // Convert percentage to a decimal
            if (currentInput) {
                try {
                    currentInput = (eval(currentInput) / 100).toString();
                } catch (e) {
                    currentInput = 'Error';
                }
            }
        } else {
            // AI Feature: Prevent invalid operator sequences
            const lastChar = currentInput[currentInput.length - 1];
            const operators = ['+', '-', '*', '/'];
            if (operators.includes(lastChar) && operators.includes(value)) {
                // Replace the last operator with the new one
                currentInput = currentInput.slice(0, -1) + value;
            } else {
                currentInput += value;
            }
        }
        
        // AI Feature: Auto-complete for constants
        currentInput = currentInput.replace(/pi/gi, Math.PI.toFixed(4));
        currentInput = currentInput.replace(/e/gi, Math.E.toFixed(4));

        updateScreen();
        updateAISuggestion();
    };

    const calculate = () => {
        if (!currentInput) return;
        try {
            // Replace visual operators with evaluable ones
            let expression = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
            const result = eval(expression);

            if (isNaN(result) || !isFinite(result)) {
                throw new Error("Invalid Calculation");
            }

            addToHistory(expression, result);
            currentInput = result.toString();
        } catch (error) {
            currentInput = 'Error';
        }
    };
    
    const updateScreen = () => {
        screen.value = currentInput || '0';
    };

    // --- History Management ---
    const addToHistory = (expression, result) => {
        history.unshift({ expression, result });
        if (history.length > 5) {
            history.pop();
        }
        updateHistoryUI();
    };

    const updateHistoryUI = () => {
        historyList.innerHTML = '';
        history.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.expression} = <strong>${item.result}</strong>`;
            historyList.appendChild(li);
        });
    };

    // --- AI Suggestion Feature ---
    const updateAISuggestion = () => {
        if (!currentInput) {
            aiSuggestion.innerText = 'Start typing a number...';
            return;
        }

        const lastChar = currentInput[currentInput.length - 1];
        if (!isNaN(lastChar) || lastChar === '.') {
            aiSuggestion.innerText = 'Next: operator or equals?';
        } else if (['+', '-', '*', '/'].includes(lastChar)) {
            aiSuggestion.innerText = 'Next: number?';
        } else {
            aiSuggestion.innerText = '';
        }
    };
    
    // Initialize
    setInitialTheme();
    updateScreen();
    updateAISuggestion();
});