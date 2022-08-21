
const container = document.querySelector('#container')
//console.log(container.style)




function createGrid(...args) {
    container.setAttribute('style', `grid-template-rows: repeat(${args[0]}, 1fr);grid-template-columns: repeat(${args[1]}, 1fr);`)

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


createGrid(50, 50)