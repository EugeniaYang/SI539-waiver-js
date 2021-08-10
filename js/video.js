window.addEventListener("load", function () {
    var player1 = document.getElementById("player1");
    var slider = document.getElementById("slider");
    var volume = document.getElementById("volume");
    var mute = document.getElementById("mute");
    document.querySelector("#play").addEventListener("click", function () {
        console.log("Play Video");
        player1.play();
    });

    document.querySelector("#pause").addEventListener("click", function () {
        console.log("Pause the video");
        player1.pause();
    });

    document.querySelector("#slower").addEventListener("click", function () {
        player1.playbackRate *= 0.95;
        console.log(`New speed is ${player1.playbackRate}`);

    })

    document.querySelector("#faster").addEventListener("click", function () {
        player1.playbackRate /= 0.95;
        console.log(`New speed is ${player1.playbackRate}`);
    });

    document.querySelector("#skip").addEventListener("click", function () {
        console.log(`Original location ${player1.currentTime}`);
        if (player1.currentTime + 15 > player1.duration) {
            player1.currentTime = 0;
            console.log(`Going back to the beginning`);
        } else player1.currentTime += 15;
        console.log(`New location  ${player1.currentTime}`);
    });

    slider.addEventListener("input", function () {
        volume.innerText = `${this.value}%`;
        player1.volume = this.value / 100;
        console.log(`${player1.volume}`);
    })

    document.querySelector("#mute").addEventListener("click", function () {
        if (player1.muted) {
            player1.muted = false;
            mute.innerText = "Mute";
        } else {
            player1.muted = true;
            mute.innerText = "Unmute";
        }
    });

    document.querySelector("#vintage").addEventListener("click", function () {
        if (!player1.classList.contains("oldSchool")) {
            player1.classList.add("oldSchool");
        }
    });

    document.querySelector("#orig").addEventListener("click", function () {
        if (player1.classList.contains("oldSchool")) {
            player1.classList.remove("oldSchool");
        }
    });
});