function createGrid() {
    const gridSize = parseInt(document.getElementById("gridSize").value);
    const etchASketch = document.getElementById("etchASketch");

    // Clear existing grid
    etchASketch.innerHTML = "";

    // Create the grid
    for (let i = 0; i < gridSize; i++) {
      const row = etchASketch.insertRow(i);
      for (let j = 0; j < gridSize; j++) {
        const cell = row.insertCell(j);

        // Add event listener for drawing on mouseover
        cell.addEventListener("mouseover", function() {
          cell.style.backgroundColor = "green";
        });
      }
    }
  }
// Initial grid creation
createGrid();