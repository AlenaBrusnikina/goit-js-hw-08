import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
  }, 1000)
);

const pauseTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (pauseTime) {
  player.setCurrentTime(pauseTime);
}
