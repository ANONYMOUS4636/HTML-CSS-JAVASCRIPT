# 📘 Event Bubbling in JavaScript

Event **bubbling** in JavaScript is a mechanism where an event triggered on a **child element** propagates **upward** through its ancestors in the **DOM**.  
It allows **parent elements** to respond to events triggered by their **child elements**.

---

## 🔁 Propagation Direction
In **event bubbling**, the event starts at the **target element** and propagates **upward** through its parent elements to the **root of the DOM**.

---

## ⚙️ Default Behavior
🟢 **Event bubbling is enabled by default** in JavaScript.

---

## 🎧 Event Listeners
If multiple event listeners are attached in the **bubbling phase**, they are executed **in sequence**, starting from the **innermost target element**.

---

## ⚙️ How Event Bubbling Works?

### Event Triggering
The **click event** is triggered on the **child element (button)**, initiating the event propagation.

### Event Capturing
In the **capturing phase**, the event propagates **from the root of the DOM down to the target (child)**.  
However, no listeners are explicitly set to handle events in this phase in the given code.

### Event Bubbling
After reaching the **target element (child)**, the event enters the **bubbling phase**, propagating **back up** through the DOM tree to the **parent**.

### Listener Behavior
Event listeners are attached to both **parent** and **child** elements using `addEventListener`.  
By default, these listeners respond during the **bubbling phase** unless the `capture` option is set to **true**.

---

## 🧩 Example: Basic Event Bubbling

```html
<html>
<head>
    <style>
        *{
            margin: 25px;
            box-sizing: border-box;
        }
        .grandparent{
            height: 350px;
            width: 350px;
            border: 2px solid red;
        }
        .parent{
            height: 250px;
            width: 250px;
            border: 2px solid blue;
        }
        .child{
            height: 150px;
            width: 150px;
            border: 2px solid green;
        }
    </style>
</head>
<body>
    <div class="grandparent" id="one">
        Grandparent
        <div class="parent" id="two">
            Parent
            <div class="child" id="three">
                Child
            </div>
        </div>
    </div>
    <script>
        let grandparent=document.getElementById('one')
        let parent=document.getElementById('two')
        let child=document.getElementById('three')
        grandparent.addEventListener('click',function(e){
            console.log("Grandparent Clicked")
        })
        parent.addEventListener('click',function(e){
            console.log("Parent Clicked")
        })
        child.addEventListener('click',function(e){
            console.log("Child Clicked")
        })
    </script>
</body>
</html>
```

### 🔍 Explanation:
- Clicking the **child** triggers the event to propagate **upward**, activating listeners on the **parent** and **grandparent**.
- **Console Output:**  
  `"Child Clicked"` → `"Parent Clicked"` → `"Grandparent Clicked"`

---

## 🧾 Event Object
Each listener receives the **event object (`e`)**, which includes:
- `e.target`: The element that triggered the event.  
- `e.stopPropagation()`: A method to **stop bubbling**.

---

## 🛑 How to Stop Event Bubbling?

To stop event bubbling, use `e.stopPropagation()` inside the event handler.  
This prevents the event from propagating to parent elements, so **only the target element’s listener** is triggered.

### Example:
```html
<html>
<head>
    <style>
        *{
            margin: 25px;
            box-sizing: border-box;
        }
        .grandparent{
            height: 350px;
            width: 350px;
            border: 2px solid red;
        }
        .parent{
            height: 250px;
            width: 250px;
            border: 2px solid blue;
        }
        .child{
            height: 150px;
            width: 150px;
            border: 2px solid green;
        }
    </style>
</head>
<body>
    <div class="grandparent" id="one">
        Grandparent
        <div class="parent" id="two">
            Parent
            <div class="child" id="three">
                Child
            </div>
        </div>
    </div>
    <script>
        let grandparent=document.getElementById('one')
        let parent=document.getElementById('two')
        let child=document.getElementById('three')
        grandparent.addEventListener('click',function(e){
            e.stopPropagation()
            console.log("Grandparent Clicked")
        })
        parent.addEventListener('click',function(e){
            e.stopPropagation()
            console.log("Parent Clicked")
        })
        child.addEventListener('click',function(e){
            e.stopPropagation()
            console.log("Child Clicked")
        })
    </script>
</body>
</html>
```

### 📝 Notes:
> 🔹 `e.stopPropagation()` prevents the event from bubbling up.  
> 🔹 Only the clicked element logs its message.  
> 🔹 Useful for dropdowns, modals, or isolated event behaviors.

---

## 💡 Use Cases of Event Bubbling

### ✅ Delegated Event Handling
Instead of adding event listeners to multiple child elements, attach one to their **parent** and handle the events as they bubble up.

```js
document.getElementById('parent').addEventListener('click', (event) => {
    console.log('Clicked:', event.target.id);
});
```

### ✅ Simplified Code
Reduces redundancy and improves performance when handling events for dynamic or large DOM structures.

---

## ⚖️ Event Bubbling vs Event Capturing

| Feature | **Event Bubbling** | **Event Capturing** |
|----------|--------------------|---------------------|
| **Propagation Direction** | Event starts at the **target element** and moves **upward** to the root. | Event starts at the **root** and moves **downward** to the target. |
| **Default Behavior** | Enabled by default. | Must be explicitly enabled with `{ capture: true }`. |
| **Use Case** | When parent should respond after child (e.g., event delegation). | When parent should respond before child. |
| **Execution Order** | Inner → Outer | Outer → Inner |
| **Commonality** | Widely used and supported by all browsers. | Supported but less commonly used. |

---

🧭 **Summary Highlight:**
> 🟢 *Event Bubbling = Event flows UP the DOM*  
> 🔴 *Event Capturing = Event flows DOWN the DOM*  
> 🛑 *Use `e.stopPropagation()` to stop bubbling*
