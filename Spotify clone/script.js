
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let track = document.getElementById('track');
let songitems = Array.from(document.getElementsByClassName("songitems"));

let songs = [
    {songName:'Let me Down Slowly', songPath: "songs/1.mp3", coverPath: "covers/cover.jpg"}
    , {songName:'All Around the world', songPath: "songs/2.mp3", coverPath: "covers/1.jpg"}
    , {songName:'Taki Taki - DJ Snake', songPath: "songs/3.mp3", coverPath: "covers/2.jpg"}
    , {songName:'Goyte', songPath: "songs/4.mp3", coverPath: "covers/3.jpg"}
    , {songName:'Alone -Alan Waler', songPath: "songs/5.mp3", coverPath: "covers/4.jpg"}
    , {songName:'Faded - Alan Walker', songPath: "songs/6.mp3", coverPath: "covers/5.jpg"}
    ,{songName:'Alone - Marshmellow', songPath: "songs/7.mp3", coverPath: "covers/6.jpg"}
    , {songName:'Spectre - Alan Walker', songPath: "songs/8.mp3", coverPath: "covers/7.jpg"}
    , {songName:'Watermelon - Harry Styles', songPath: "songs/9.mp3", coverPath: "covers/9.jpg"}
    ,{songName:'Dandelieons - Ruth B.', songPath: "songs/10.mp3", coverPath: "covers/8.jpg"}
]

songitems.forEach((element, i)=>{
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audio.Element.play();


//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        gif.style.opacity = 1;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
        
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;

}
})


// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    
    //update seekBar
    progress = parseInt(audioElement.currentTime/audioElement.duration*100);    
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
audioElement.currentTime= (audioElement.duration*myProgressBar.value/100);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        track.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})