
const container = document.querySelector('#container')
//console.log(container.style)
const btnSquares = document.querySelector('.btn')
console.log(btnSquares)

btnSquares.addEventListener('click', btnSquare => {
    // console.log(btnSquare)
    let btnSquareInput = prompt("Please enter the number of squares? (1-100)", 5)

    btnSquareInput < 1 || btnSquareInput > 100
        ? alert("Number out of range. Try again.")
        : createGrid(btnSquareInput, btnSquareInput);
    // reset the user input
    userInput.value = "";

})


function createGrid(...args) {
    container.innerHTML = "";

    
    container.setAttribute('style',
        `
    grid-template-rows: repeat(${args[0]}, 1fr);
    grid-template-columns: repeat(${args[1]}, 1fr);
    height: ${args[0]}px;
    width: ${args[1]}px;
    `)

    for (let i = 0; i < (args[0] * args[1]); i++) {
        const cell = document.createElement('div')
        cell.textContent = `${i + 1}`
        cell.classList.add('grid-item')
        // Add an event listener to each grid item when you’re creating your grid with:
        cell.addEventListener('mouseover',
            e => e.target.classList.add('grid-color')
        )
        container.appendChild(cell)
    }
}


// createGrid(16, 16)