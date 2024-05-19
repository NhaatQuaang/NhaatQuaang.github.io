const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [{
        path: 'assets/LanCuoi_Ngot.mp3',
        displayName: 'LẦN CUỐI (đi bên em xót xa người ơi)',
        cover: 'assets/LanCuoi_Ngot.jpg',
        artist: 'Ngọt',
    },
    {
        path: 'assets/Tò Te Tí_WREN EVANS.mp3',
        displayName: 'Tò Te Tí',
        cover: 'assets/Tò Te Tí_WREN EVANS.jpg',
        artist: 'Wren Evans',
    },
    {
        path: 'assets/ThangDien.mp3',
        displayName: 'Thằng Điên',
        cover: 'assets/Thang_dien.jpg',
        artist: 'JustaTee x Phương Ly',
    },
    {
        path: 'assets/NhungLoiHuaBoQuen.mp3',
        displayName: 'Những Lời Hứa Bỏ Quên',
        cover: 'assets/NhungLoiHuaBoQuen.jpg',
        artist: 'Vũ. x Dear Jane',
    },
    {
        path: 'assets/troigiaumangdi.mp3',
        displayName: 'trời giấu mang đi',
        cover: 'assets/giautroimangdi.jpg',
        artist: 'AMEE',
    },
    {
        path: 'assets/id072019.mp3',
        displayName: 'id 072019',
        cover: 'assets/id072019.jpg',
        artist: 'W/N',
    },
    {
        path: 'assets/anhsaovabautroi.mp3',
        displayName: 'Ánh Sao và Bầu Trời',
        cover: 'assets/anhsaovabautroi.jpg',
        artist: 'T.R.I',
    },
    {
        path: 'assets/ngayay.mp3',
        displayName: 'Ngày ấy (Yesterday)',
        cover: 'assets/ngayay.jpg',
        artist: 'Em Ellata',
    },
    {
        path: 'assets/cauvinhtuy.mp3',
        displayName: 'Cầu Vĩnh Tuy',
        cover: 'assets/cauvinhtuy.jpg',
        artist: 'Wren Evans, itsnk',
    },
    {
        path: 'assets/chungtasaunay.mp3',
        displayName: 'Chúng ta sau này',
        cover: 'assets/chungtasaunay.jpg',
        artist: 'T.R.I',
    },
    {
        path: 'assets/emkhonthe.mp3',
        displayName: 'Em Khong The',
        cover: 'assets/emkhongthe.jpg',
        artist: 'Tiên Tiên, Touliver',
    },
    {
        path: 'assets/1phut.mp3',
        displayName: '1 Phút',
        cover: 'assets/1phut.jpg',
        artist: 'Andiez',
    },
    {
        path: 'assets/buonthicukhocdi.mp3',
        displayName: 'Buồn thì cứ khóc đi',
        cover: 'assets/buonthicukhocdi.jpg',
        artist: 'Lynk Lee',
    },
    {
        path: 'assets/driverlicense.mp3',
        displayName: 'drivers license',
        cover: 'assets/driverlicense.jpg',
        artist: 'Olivia Rodrigo',
    },
    {
        path: 'assets/happier.mp3',
        displayName: 'happier',
        cover: 'assets/happier.jpg',
        artist: 'Olivia Rodrigo',
    },
    {
        path: 'assets/daylight.mp3',
        displayName: 'Daylight',
        cover: 'assets/daylight.jpg',
        artist: 'David Kushner',
    },
    {
        path: 'assets/goldenhour.mp3',
        displayName: 'golden hour',
        cover: 'assets/goldenhour.jpg',
        artist: 'JVKE',
    },
    {
        path: 'assets/thisiswhatfallinginlovefeelslike.mp3',
        displayName: 'this is what falling in love fells like',
        cover: 'assets/thisiswhatfallinginlovefeelslike.jpg',
        artist: 'JVKE',
    },
    {
        path: 'assets/dangerously.mp3',
        displayName: 'Dangerously',
        cover: 'assets/dangerously.jpg',
        artist: 'Charlie Puth',
    },
    {
        path: 'assets/stay.mp3',
        displayName: 'Stay',
        cover: 'assets/stay.jpg',
        artist: 'Zedd, Alessia Cara',
    },
    {
        path: 'assets/beforyougo.mp3',
        displayName: 'Before You Go',
        cover: 'assets/beforeyougo.jpg',
        artist: 'Lewis Capaldi',
    },
    {
        path: 'assets/symphony.mp3',
        displayName: 'Symphony',
        cover: 'assets/symphony.png',
        artist: 'Clean Badit, Zara Larsson',
    },
    {
        path: 'assets/coembendoibongvui.mp3',
        displayName: 'Có Em Bên Đời Bỗng Vui',
        cover: 'assets/coembendoibongvui.jpg',
        artist: 'Chillies',
    },
    {
        path: 'assets/mascara.mp3',
        displayName: 'Mascara',
        cover: 'assets/mascara.jpg',
        artist: 'Chillies',
    },

];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);