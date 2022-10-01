let TopRight = document.querySelector(".top-right");
let TopLeft = document.querySelector(".top-left");
let BottomRight = document.querySelector(".bottom-right");
let BottomLeft = document.querySelector(".bottom-left");

let getRandompanel = () =>{
    let panels = [
        TopRight,
        TopLeft,
        BottomRight,
        BottomLeft
    ];
    return panels[parseInt(Math.random() * panels.length)];
};

let sequences = [getRandompanel()];

let sequencesToGuess = [...sequences]

let flash = panel =>{
    return new Promise((resolve) =>{
        panel.className += " active";
        setTimeout(() =>{
            panel.className = panel.className.replace(
                " active", ""
            );
            setTimeout(() => {
                resolve();
            },250)
            
        },1000)
    });
};

let canClick = false;
let panelClicked = (panel) =>{
    if (!canClick) return;
    console.log(panel);
    let expectedpael = sequencesToGuess.shift();
    if (expectedpael === panelClicked){
        if(sequencesToGuess.length === 0){
            sequences.push(getRandompanel());
            sequencesToGuess = [...sequences];
            startflashing();
        }
    } else{
alert("Game Over");
    };
};

let startflashing = async () => {
    canClick = flash;
    for (let panel of sequences){
        await flash(panel);
    }
    canClick = true;
};

startflashing();