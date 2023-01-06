import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player'

// Константа для ключа локального хранилища
const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);


player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
  let dataSrtring = event.seconds;
  localStorage.setItem(CURRENT_TIME, dataSrtring);
}

player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0);

