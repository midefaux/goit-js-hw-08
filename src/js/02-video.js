import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo('vimeo-player');

// Definir una función para guardar el tiempo de reproducción
const saveCurrentTime = (currentTime) => {
  localStorage.setItem('videoplayer-current-time', currentTime);
};

// Limitar la frecuencia de actualización a una vez por segundo
const throttledSaveCurrentTime = throttle(saveCurrentTime, 1000);

// Añadir un evento para seguir el tiempo de reproducción
player.on('timeupdate', (data) => {
  const currentTime = data.seconds;
  throttledSaveCurrentTime(currentTime);
});

// Al recargar la página, reanudar la reproducción desde la posición guardada
document.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
  }
});
