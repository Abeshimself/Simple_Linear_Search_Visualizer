const canvas = document.getElementById("simCanvas");
const ctx = canvas.getContext("2d");
const statusText = document.getElementById("status");

let array = [];
const arraySize = 10;
let targetValue = 0;

// Helper function to create a delay/pause inside the algorithm
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 1. Generate random numbers and pick a target to find
function generateNewArray() {
    array = [];
    statusText.innerText = "Click 'Start Search' to begin!";
    
    for (let i = 0; i < arraySize; i++) {
        // Random number between 10 and 99
        array.push(Math.floor(Math.random() * 90) + 10);
    }
    
    // Randomly select one value from our array to be the target we want to find
    targetValue = array[Math.floor(Math.random() * array.length)];
    
    // Draw the fresh, untouched array state
    drawArray(-1, -1); 
}

// 2. The Drawing Logic: Renders the blocks onto the canvas screen
function drawArray(currentIndex, foundIndex) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Wipe screen clean
    
    const blockWidth = 60;
    const blockHeight = 60;
    const spacing = 15;
    // Center the whole row horizontally on the canvas
    const startX = (canvas.width - (arraySize * (blockWidth + spacing) - spacing)) / 2;
    const startY = (canvas.height - blockHeight) / 2;

    for (let i = 0; i < array.length; i++) {
        let x = startX + i * (blockWidth + spacing);
        
        // Decide color based on what the algorithm is doing right now
        if (i === foundIndex) {
            ctx.fillStyle = "#4CAF50"; // Green: Target Found!
        } else if (i === currentIndex) {
            ctx.fillStyle = "#F44336"; // Red: Checking this index right now
        } else {
            ctx.fillStyle = "#007acc"; // Blue: Unchecked element
        }

        // Draw the block square
        ctx.fillRect(x, startY, blockWidth, blockHeight);
        
        // Draw the number text inside the block square
        ctx.fillStyle = "white";
        ctx.font = "bold 20px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(array[i], x + blockWidth / 2, startY + blockHeight / 2);
    }
}

// 3. The Algorithm Simulation Loop
async function startSimulation() {
    statusText.innerText = `Searching for target value: ${targetValue}...`;
    
    // Linear Search: Look through the array element by element from left to right
    for (let i = 0; i < array.length; i++) {
        // Highlight current element in RED
        drawArray(i, -1);
        
        // PAUSE execution for 600ms so the user can see the highlighted state
        await sleep(600); 

        if (array[i] === targetValue) {
            statusText.innerText = `Success! Found target ${targetValue} at index ${i}.`;
            // Highlight found element in GREEN
            drawArray(-1, i); 
            return; // Exit algorithm early
        }
    }
    
    statusText.innerText = `Value ${targetValue} not found in the array.`;
}

// Initialize the screen right away when page loads
generateNewArray();

