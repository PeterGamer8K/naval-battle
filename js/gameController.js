const gameMatrix = [];
const gameWidth = 10;
const gameHeight = 10;
const gameColorPallete = [{"r":7,"g":7,"b":7}, {"r":36,"g":36,"b":212}, {"r":83,"g":83,"b":83}];

function start() {
    createGamePositionsDatas();
    renderGame();
    gameListener();
}


function createGamePositionsDatas() {
    const numberOfPositions = gameWidth * gameHeight;

    for (let i = 0; i < numberOfPositions; i++) {
        gameMatrix[i] = 0;
    }
}

function gameListener() {
    const pixels = document.querySelectorAll("td");
    pixels.forEach((pixel)=> {
        pixel.addEventListener("click", () =>{
            
            pixel.style.backgroundColor = "blue"
        })
    })  
}

function updateGameState() {

}


function renderGame() {
    const debug = true;

    let html = "<table cellpadding=0 cellspacing=0>";

    for (let row = 0; row < gameHeight; row++) {
        html += "<tr>"

        for (let column = 0; column < gameWidth; column++) {
            const pixelIndex = column + (gameHeight * row);
            //const pixelState = returnPixelState();
            

            if (debug){
                html += "<td>"
                html += `<div class="pixel-index">${pixelIndex}</div>`;
                //html += pixelState;
                html += "</td>"
            } else {
                const color = gameColorPallete[target];
                const colorString = `${color.r},${color.g},${color.b}`;
                html += `<td class="pixel"style="background-color: rgb(${colorString})">`;
                html += `</td>`;
            } 

            
        }

        html += "</tr>"
    }

    html += "</table>";

    document.querySelector("#gameCanvas").innerHTML = html;
}

start();


