from pathlib import Path

# Markdown content with highlights for notes
content = """# 📘 Event Bubbling in JavaScript

Event **bubbling** in JavaScript is a mechanism where an event triggered on a **child element propagates upward** through its ancestors in the DOM.  
It allows **parent elements** to respond to events triggered by their **child elements**.

---

## 🔁 Propagation Direction
➡️ In **event bubbling**, the event starts at the **target element** and propagates **upward** through its parent elements to the **root of the DOM**.

---

## ⚙️ Default Behavior
🟢 **Event bubbling is enabled by default** in JavaScript.

---

## 🎧 Event Listeners
If multiple event listeners are attached in the **bubbling phase**, they are executed **in sequence**, starting from the **innermost target element**.

---

## 🖱️ Event Triggering
The **click event** is triggered on the **child element (button)**, initiating the event propagation.

---

## ⬇️ Event Capturing
In the **capturing phase**, the event propagates **from the root of the DOM down** to the target (child).  
However, no listeners are explicitly set to handle events in this phase in the given code.

---

## ⬆️ Event Bubbling
After reaching the **target element (child)**, the event enters the **bubbling phase**, propagating back **up through the DOM tree** to the parent.

---

## 🧠 Listener Behavior
Event listeners are attached to both **parent** and **child** elements using `addEventListener`.  
By default, these listeners respond during the **bubbling phase** unless the `capture` option is set to **true**.

---

## 📜 Execution Order
When the button is clicked:
1. The **child listener** executes first → `console.log("Child")`
2. Then the **parent listener** executes → `console.log("Parent")`

🧩 **Bubbling Flow:** `"Child Clicked" → "Parent Clicked" → "Grandparent Clicked"`

---

## 🧾 Event Object
Each listener receives the **event object (`e`)**, which includes:
- `e.target`: the element that triggered the event  
- `e.stopPropagation()`: a method to **stop bubbling**

---

## 🎨 CSS Visualization
- **Borders and sizes** visually show the DOM hierarchy and event propagation.
- **Unique IDs** for each element make listener management easier.

---

## 🛑 How to Stop Event Bubbling?

To stop event bubbling, use:

```js
e.stopPropagation();
