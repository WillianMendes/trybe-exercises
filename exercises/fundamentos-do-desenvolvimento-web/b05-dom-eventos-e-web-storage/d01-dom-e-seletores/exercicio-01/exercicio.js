console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 5 | Dia 1 .....');
console.log('......................................');
console.log('......................................');

/**
  * Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
  * Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
  * Por fim, recupere o subtítulo e altere-o também.
 */

let title = document.getElementById('page-title');
title.innerText = 'Avengers: Endgame';

let paragraph = document.getElementById('paragraph');
paragraph.style.color = 'red';

let subtitle = document.getElementById('subtitle');
subtitle.innerText = 'Sinopse';

let secondParagraph = document.getElementById('second-paragraph');
secondParagraph.innerText = 'Adrift in space with no food or water, Tony Stark ' +
    'sends a message to Pepper Potts as his oxygen supply starts to dwindle. ' +
    'Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America ' +
    'and Bruce Banner -- must figure out a way to bring back their vanquished ' +
    'allies for an epic showdown with Thanos -- the evil demigod who decimated ' +
    'the planet and the universe.';
