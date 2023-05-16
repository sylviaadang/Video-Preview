console.log("page loaded...");



let vid = document.querySelector(".video")

function over(element) {
    // console.log(element)
    vid.play();
}

function out(element) {
    vid.pause();
}
