import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

playVideoCurrentTime();

player.on('timeupdate', throttle(onPlayerTime, 1000));

function onPlayerTime(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

function playVideoCurrentTime() {
  const time = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  if (time) {
    player.setCurrentTime(time);
  }
}