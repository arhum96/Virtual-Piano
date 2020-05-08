/*Create audio objects which can be played when a keyboard event occurs
Add event labels to enable interaction between keyboard and console*/
document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
        let audioA = new Audio("audio/white_keys/A.mp3");
        audioA.play();
    }
    else if (event.code === "KeyS") {
        let audioS = new Audio("audio/white_keys/S.mp3");
        audioS.play();
    }
    else if (event.code === "KeyD") {
        let audioD = new Audio("audio/white_keys/D.mp3");
        audioD.play();
    }
    else if (event.code === "KeyF") {
        let audioF = new Audio("audio/white_keys/F.mp3");
        audioF.play();
    }
    else if (event.code === "KeyG") {
        let audioG = new Audio("audio/white_keys/G.mp3");
        audioG.play();
    }
    else if (event.code === "KeyH") {
        let audioH = new Audio("audio/white_keys/H.mp3");
        audioH.play();
    }
    else if (event.code === "KeyJ") {
        let audioJ = new Audio("audio/white_keys/J.mp3");
        audioJ.play();
    }
    else if (event.code === "KeyW") {
        let audioS = new Audio("audio/black_keys/W.mp3");
        audioS.play();
    }
    else if (event.code === "KeyE") {
        let audioS = new Audio("audio/black_keys/E.mp3");
        audioS.play();
    }
    else if (event.code === "KeyT") {
        let audioS = new Audio("audio/black_keys/T.mp3");
        audioS.play();
    }
    else if (event.code === "KeyY") {
        let audioS = new Audio("audio/black_keys/Y.mp3");
        audioS.play();
    }
    else if (event.code === "KeyU") {
        let audioS = new Audio("audio/black_keys/U.mp3");
        audioS.play();
    }
    else {
        console.log("Unrecognized key has been pressed");
    }

});
