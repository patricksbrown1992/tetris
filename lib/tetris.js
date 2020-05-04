import Game from '../js/game';

document.addEventListener('DOMContentLoaded', () => {
    // const squirtlePhoto = new Image();
    // squirtlePhoto.src = './assets/squirtle.png';
    // const beedrillPhoto = new Image();
    // beedrillPhoto.src = './assets/beedrill.png';
    const blocks = new Image();
    blocks.src = './assets/tetris_blocks.png';
    // const butterfreePhoto = new Image();
    // butterfreePhoto.src = './assets/butterfree.png';
    // // const dragonitePhoto = new Image();
    // // dragonitePhoto.src = './assets/dragonite.png';
    // const gameOverPhoto = new Image();
    // gameOverPhoto.src = './assets/squirtle-fainted.png';
    // const dealWithItPhoto = new Image();
    // dealWithItPhoto.src = './assets/deal-with-it.jpg';
    // const music = document.createElement("audio");
    // music.src = "./assets/battle-music.MP3";
    // const victory = document.createElement("audio");
    // victory.src = './assets/victory.mp3';
    // const heal = document.createElement("audio");
    // heal.src = './assets/heal-squirtle.mp3';
    // const canvas = document.querySelector('canvas');
    // const ctx = canvas.getContext('2d');
    // const watergun = document.createElement("audio");
    // watergun.src = './assets/WaterGun.mp3';
    // const hit = document.createElement("audio");
    // hit.src = './assets/SelfDestruct.mp3';
    // const musicObject = {
    //     music: music,
    //     victory: victory,
    //     heal: heal,
    //     watergun: watergun,
    //     hit: hit
    // }
    const game = new Game(canvas, ctx, blocks)
    // debugger
    game.begin()

})