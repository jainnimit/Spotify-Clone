console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "0 To Hundred", filePath: "Songs/1.mp3", coverPath: "Images/1.png"},
    {songName: "295", filePath: "Songs/2.mp3", coverPath: "Images/.png"},
    {songName: "Bitch I'M Back", filePath: "Songs/3.mp3", coverPath: "Images/3.png"},
    {songName: "Brown Shortie", filePath: "Songs/4.mp3", coverPath: "Images/4.png"},
    {songName: "Calaboose", filePath: "Songs/5.mp3", coverPath: "Images/5.png"},
    {songName: "Dollar", filePath: "Songs/6.mp3", coverPath: "Images/6.png"},
    {songName: "Fuck Em All", filePath: "Songs/7.mp3", coverPath: "Images/7.png"},
    {songName: "G.O.A.T", filePath: "Songs/8.mp3", coverPath: "Images/8.png"},
    {songName: "Jatt Da Muqabala", filePath: "Songs/9.mp3", coverPath: "Images/9.png"},
    {songName: "Last Ride", filePath: "Songs/10.mp3", coverPath: "Images/10.png"},
    {songName: "Levels", filePath: "Songs/11.mp3", coverPath: "Images/11.png"},
    {songName: "Love Sick", filePath: "Songs/12.mp3", coverPath: "Images/12.png"},
    {songName: "Never Fold", filePath: "Songs/13.mp3", coverPath: "Images/13.png"},
    {songName: "Same Beef", filePath: "Songs/14.mp3", coverPath: "Images/14.png"},
    {songName: "Sanju", filePath: "Songs/15.mp3", coverPath: "Images/15.png"},
    {songName: "Selfmade", filePath: "Songs/16.mp3", coverPath: "Images/16.png"},
    {songName: "So High", filePath: "Songs/17.mp3", coverPath: "Images/17.png"},
    {songName: "These Days", filePath: "Songs/18.mp3", coverPath: "Images/18.png"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=17){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})