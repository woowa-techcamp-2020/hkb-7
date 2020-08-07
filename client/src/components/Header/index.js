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
              enable-background="new 0 0 512 512"
              height="512"
              viewBox="0 0 512 512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m319 372v96c0 8.28-6.72 15-15 15h-96c-8.28 0-15-6.72-15-15v-96c0-8.28 6.72-15 15-15h96c8.28 0 15 6.72 15 15z"
                  fill="#453d81"
                />
                <path d="m319 372v96c0 8.28-6.72 15-15 15h-48v-126h48c8.28 0 15 6.72 15 15z" fill="#2e2654" />
                <path
                  d="m467 29h-422c-24.81 0-45 20.19-45 45v268c0 24.81 20.19 45 45 45h422c24.81 0 45-20.19 45-45v-268c0-24.81-20.19-45-45-45z"
                  fill="#6b66d0"
                />
                <path d="m512 74v268c0 24.81-20.19 45-45 45h-211v-358h211c24.81 0 45 20.19 45 45z" fill="#453d81" />
                <path
                  d="m482 74v268c0 8.27-6.73 15-15 15h-422c-8.27 0-15-6.73-15-15v-268c0-8.27 6.73-15 15-15h422c8.27 0 15 6.73 15 15z"
                  fill="#f9f9f9"
                />
                <path d="m482 74v268c0 8.27-6.73 15-15 15h-211v-298h211c8.27 0 15 6.73 15 15z" fill="#e2dff4" />
                <path
                  d="m431 468c0 8.28-6.72 15-15 15h-320c-8.28 0-15-6.72-15-15s6.72-15 15-15h320c8.28 0 15 6.72 15 15z"
                  fill="#6b66d0"
                />
                <path d="m431 468c0 8.28-6.72 15-15 15h-160v-30h160c8.28 0 15 6.72 15 15z" fill="#453d81" />
                <path
                  d="m322.61 166.61-56 56c-5.812 5.811-15.325 5.894-21.22 0l-13.39-13.4-37.39 37.4c-5.86 5.85-15.36 5.85-21.22 0l-5.39-5.4-67.39 67.4c-5.812 5.811-15.325 5.894-21.22 0-5.85-5.86-5.85-15.36 0-21.221l78-78c5.86-5.85 15.36-5.85 21.22 0l5.39 5.4 37.39-37.4c5.86-5.85 15.36-5.85 21.22 0l13.39 13.4 45.39-45.4c5.86-5.85 15.36-5.85 21.22 0 5.85 5.861 5.85 15.361 0 21.221z"
                  fill="#afea93"
                />
                <path
                  d="m322.61 166.61-56 56c-2.93 2.93-6.77 4.39-10.61 4.39v-36.21l45.39-45.4c5.86-5.85 15.36-5.85 21.22 0 5.85 5.86 5.85 15.36 0 21.22z"
                  fill="#00cb75"
                />
                <path
                  d="m327 308c0 8.28-6.72 15-15 15h-232c-8.28 0-15-6.72-15-15v-184c0-8.28 6.72-15 15-15s15 6.72 15 15v169h217c8.28 0 15 6.72 15 15z"
                  fill="#e2dff4"
                />
                <path d="m327 308c0 8.28-6.72 15-15 15h-56v-30h56c8.28 0 15 6.72 15 15z" fill="#bebcdd" />
                <path
                  d="m414.682 272.86v3.14c0 8.28-6.72 15-15 15-8.277 0-15-6.72-15-15v-1.44c-6.92-1.21-13.23-3.8-21.21-9.02-6.93-4.54-8.87-13.83-4.33-20.76 4.54-6.94 13.83-8.88 20.76-4.34 7.715 5.052 10.084 5.08 19.76 5.08 9.59-.1 13.41-7.64 14.16-12.1.68-4.01-.08-9.34-7.51-11.97-11.309-3.979-24.898-9.185-34.28-16.55-20.65-16.19-14.31-53.07 12.65-62.88v-2.17c0-8.277 6.72-15 15-15s15 6.72 15 15v1.23c9.94 2.93 16.89 9.12 16.89 9.12 6.05 5.6 6.45 15.05.87 21.14-5.59 6.1-15.05 6.52-21.16.96-3.974-2.95-9.922-4.075-15.98-2.22-4.02 1.21-5.1 5.35-5.33 6.6-.49 2.58.2 4.32.57 4.62 6.109 4.783 18.455 9.278 25.77 11.87 39.53 13.98 34.71 66.56-1.63 79.69z"
                  fill="#ffb454"
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
      localStorage.clear();
      location.href = '/';
    });
  }
}
