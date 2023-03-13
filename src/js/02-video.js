import Player from '@vimeo/player';
import trottle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', trottle(getCurrentTime, 1000)); 
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function getCurrentTime(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds || 0);
}

