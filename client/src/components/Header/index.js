import './styles.scss';
import { element } from 'utils/element';

export default class Header {
  constructor($target) {
    this.$target = $target;

    this.$Header = element('header', {
      className: 'header',
    });

    this.$target.appendChild(this.$Header);
  }

  init() {
    this.$Header.innerHTML = `
      <div class="header">
        <div class="left-col">
          <div class="title">
            <img class="side-icon" src="./public/icons/target.svg" alt="" srcset="" />
            <div class="title-label">가계부</div>
          </div>
        </div>
        <div class="middle-col">
          <input class="search-field" type="text" placeholder="검색하기" />
        </div>
        <div class="right-col">
          <button class="profile">
            <img class="profile-pic" src="./public/images/webpack.png" alt="" srcset="" />
            <div class="profile-name">사용자</div>
          </button>
        </div>
      </div>
    `;
  }
}
