import './index.scss';
import webpack from 'imgs/webpack.png';
import { sum } from 'utils/math';

export default function SecondChild() {
  this.$target = document.querySelector('#App');

  const $h2 = document.createElement('h2');
  $h2.className = 'second';
  $h2.innerHTML = 'webpack is awesome';
  this.$target.appendChild($h2);

  const $img = document.createElement('img');
  $img.alt = 'webpack';
  $img.src = webpack;
  this.$target.appendChild($img);

  const $calc = document.createElement('div');
  $calc.innerHTML = `1 + 2 = ${sum(1, 2)}`;
  this.$target.appendChild($calc);
}
