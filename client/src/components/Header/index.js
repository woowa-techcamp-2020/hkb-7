import './styles.scss';
import { element } from 'utils/element';
import { bindEvent } from 'utils/bindEvent';
import { html } from 'utils/html';
import webpack from 'imgs/webpack.png';

export default class Header {
  constructor($target) {
    this.$target = $target;

    this.$Header = element('header', {
      className: 'header',
    });

    this.$target.appendChild(this.$Header);
  }

  render(data) {
    this.$Header.innerHTML = html`
      <div class="header">
        <div class="left-col">
          <div class="title">
            <svg
              class="side-icon"
              id="Capa_1"
              enable-background="new 0 0 512.009 512.009"
              height="512"
              viewBox="0 0 512.009 512.009"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m286.949 0c-153.047 0-260.555 149.137-214.431 293.566l-68.107 68.116c-9.421 9.423-2.736 25.606 10.607 25.606h59.066c-4.026 29.327 20.849 54.721 50.63 50.659v59.053c0 13.438 16.238 19.974 25.607 10.606l68.077-68.086c144.697 46.27 293.607-61.582 293.607-214.437 0-124.387-100.647-225.083-225.056-225.083zm-193.902 315.463c.901-.133 2.449-.025 40.029-.071l-41.89 41.896h-39.958zm193.902-195.69c58.059 0 105.294 47.241 105.294 105.31 0 72.404-72.021 123.828-140.914 99.109l66.387-66.396c17.512-17.516 17.512-46.015 0-63.53-17.555-17.559-45.971-17.562-63.529-.001l-66.359 66.368c-24.612-68.783 26.665-140.86 99.121-140.86zm-178.944 263.123 167.396-167.419c5.833-5.833 15.268-5.832 21.1 0 5.818 5.819 5.818 15.289 0 21.107-22.634 22.639-141.696 141.717-167.391 167.416-.169.113-3.911 4.374-10.554 4.374-13.263-.001-19.887-16.141-10.551-25.478zm46.708 77.888v-39.963l41.887-41.892v39.962zm71.886-50.131v-61.728l1.836-1.837c89.498 42.937 193.807-22.478 193.807-122.006 0-74.61-60.692-135.31-135.293-135.31-99.48 0-164.896 104.245-122.023 193.765l-1.854 1.854h-61.673c-40.997-126.156 53.655-255.391 185.55-255.391 107.554 0 195.056 87.514 195.056 195.083 0 132.391-129.714 226.453-255.406 185.57z"
                />
              </g>
            </svg>
            <div class="title-label">가계부</div>
          </div>
        </div>
        <div class="middle-col">
          <input class="search-field" type="text" placeholder="검색하기" />
        </div>
        <div class="right-col">
          <button class="profile">
            <img class="profile-pic" src="${webpack}" alt="" srcset="" />
            <div class="profile-name">로그아웃</div>
          </button>
        </div>
      </div>
    `;
    bindEvent('button.profile', 'click', () => {
      console.log('BEFORE CLEARING localStorage:', localStorage);
      localStorage.clear();
      console.log('AFTER  CLEARING localStorage:', localStorage);
      location.reload();
    });
  }
}
