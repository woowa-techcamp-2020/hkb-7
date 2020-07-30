import './index.scss';

export default function Child() {
  this.$target = document.querySelector('#App');
  this.$target.innerHTML = "<h1 class='first'>My Webpack Boilerplate</h1>";
}
