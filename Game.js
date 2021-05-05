score =0;
cross=true;

audiogo = new Audio('gameover.wav');
audio = new Audio('game.wav');
audio.play();

document.onkeydown = function (e) {
    console.log("key code is :", e.keyCode)
    if (e.keyCode == 38) {
        dragon = document.querySelector('.dragon');
        dragon.classList.add('animatedragon')
        setTimeout(() => {
            dragon.classList.remove('animatedragon')
        }, 700);
    }
    if (e.keyCode == 39) {
        dragon = document.querySelector('.dragon');
        dragonX = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
        dragon.style.left = dragonX + 112 + "px";
    }
    if (e.keyCode == 37) {
        dragon = document.querySelector('.dragon');
        dragonX = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
        dragon.style.left = dragonX - 112 + "px";
    }
  

}
setInterval(() => {
    dragon = document.querySelector('.dragon');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    console.log(offsetX , offsetY)
    if (offsetX< 190 && offsetY<120) {
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        audio.pause();
    }
    else if(offsetX<200 && cross ){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 500);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdur = anidur - 0.02;
            obstacle.style.animationDuration = newdur + 's';
        }, 500);
       

    }



}, 10);

function updateScore(score){
    scorecont.innerHTML = "Your Score : " + score;
}