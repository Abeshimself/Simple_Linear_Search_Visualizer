# Simple Algorithm Visualizer: Linear Search Simulator

A lightweight, beginner-friendly web application that visualizes the mechanics of a **Linear Search Algorithm** in real-time. Built entirely with vanilla web technologies, this project requires zero installation or runtime setup.

---

## What This Code Does

This project simulates how a computer scans through a collection of unstructured data sequentially from left to right to find a targeted value. 

### Core Simulation Mechanics:
1. **Dynamic Data Generation:** Generates an array of random integers and selects a random hidden value from that pool to set as the target.
2. **Visual Translation:** Uses HTML5 Canvas API to render data arrays as individual, responsive structural block modules.
3. **State Color Coding:** Reflects active internal programming transitions using structural color tags:
   *  **Blue:** Unchecked element block.
   *  **Red:** Active index element currently under comparison match validation.
   *  **Green:** Successful match termination index block.
4. **Controlled Multi-thread Simulation:** Leverages JavaScript `async/await` paired with native promise wrappers to enforce standard microsecond cycle delays, keeping the animation perfectly visible to the human eye.

---

##  Tech Stack

* **HTML5 Canvas:** Native browser graphic rendering engine interface context.
* **Vanilla CSS:** Minimal, dark-themed responsive styles layout container.
* **Vanilla JavaScript (ES6+):** Programmatic structural loop control structures and timing handlers.

---

##  How to Run It Instantly

You do not need to install Node.js, Python, compilers, or local dev servers. 

### Step 1: Clone or Create the Files
Create a local folder on your computer and place the following two files inside it:
* `index.html` *(The structure, layout canvas, and trigger UI buttons)*
* `script.js` *(The algorithmic visualization loops and drawing methods)*

### Step 2: Open in Browser
Double-click the `index.html` file or drag it directly into any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Apple Safari) to launch the simulation sandbox locally.

---

## Codebase Overview & Structure

### `index.html`
Defines the window viewpoint layer. It hooks interactive layout control button properties directly into the script scope execution triggers (`startSimulation()`, `generateNewArray()`) and defines a strict `800x200` layout canvas canvas node.

### `script.js`
The engine driving the simulation framework:
* `generateNewArray()`: Randomizes array indices boundaries using `Math.random` loops.
* `drawArray(currentIndex, foundIndex)`: Wipes the context grid using `clearRect()` and paints data structures back to screen view-ports conditionally utilizing state metrics.
* `sleep(ms)`: Implements a custom structural wrapper around standard `setTimeout` intervals, returning a resolution promise to temporarily stall asynchronous loop cycles cleanly.
* `startSimulation()`: Evaluates condition checkpoints line-by-line using a standard `for` loop, updating the screen array render layout at every calculation sequence interval.
