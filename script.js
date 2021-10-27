let audio;

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "a" :
            audio = new Audio("A.mp3");
            audio.play().then(r => audio.pause);
            break;
        case "s" :
            audio = new Audio("S.mp3");
            audio.play().then(r => audio.pause);
            break;
        case "d" :
            audio = new Audio("D.mp3");
            audio.play().then(r => audio.pause);
            break;
        case "f" :
            audio = new Audio("F.mp3");
            audio.play().then(r => audio.pause);
            break;
        case "g" :
            audio = new Audio("G.mp3");
            audio.play().then(r => audio.pause);
            break;
        case "h" :
            audio = new Audio("H.mp3");
            audio.play().then(r => audio.pause);
            break;
        case "j" :
            audio = new Audio("J.mp3");
            audio.play().then(r => audio.pause);
            break;
        case "w" :
            audio = new Audio("W.mp3");
            audio.play().then(r => audio.pause);
            break;
        case "e" :
            audio = new Audio("E.mp3");
            audio.play().then(r => audio.pause);
            break;
        case "t" :
            audio = new Audio("T.mp3");
            audio.play().then(r => audio.pause);
            break;
        case "y" :
            audio = new Audio("Y.mp3");
            audio.play().then(r => audio.pause);
            break;
        case "u" :
            audio = new Audio("U.mp3");
            audio.play().then(r => audio.pause);
            break;
        default :
            console.log("Warning!");
    }
});