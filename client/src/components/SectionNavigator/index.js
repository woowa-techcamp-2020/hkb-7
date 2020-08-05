import './styles.scss';
import { element } from 'utils/element';
import { bindEvent } from 'utils/bindEvent';
import { store } from 'models/store';
import { html } from 'utils/html';

export default class SectionNavigator {
  constructor($target) {
    this.$target = $target;
    this.store = store;
    this.store.subscribe((data) => this.render(data), 'moveSection');

    this.pathList = ['/activity', '/calendar', '/statistic'];
    this.$SectionNavigator = element('ul', {
      className: 'section-navigator left-col',
    });

    this.$target.appendChild(this.$SectionNavigator);
  }

  render(data) {
    this.$SectionNavigator.innerHTML = html`
      <li class="section-navigator-item">
        <input
          class="section-navigator-item-input activity"
          type="radio"
          name="section-navigator-item-input"
          id="section-navigator-item-input-activities"
          value="activities"
          ${data.path === '/activity' ? 'checked' : ''}
        />
        <label class="section-navigator-item-label" for="section-navigator-item-input-activities">
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
                d="m105 272h60c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15h-60c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15zm15-60h30v30h-30z"
              />
              <path
                d="m316 242h-90c-8.284 0-15 6.716-15 15s6.716 15 15 15h90c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
              />
              <path
                d="m316 302h-210c-8.284 0-15 6.716-15 15s6.716 15 15 15h210c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
              />
              <path
                d="m316 362h-210c-8.284 0-15 6.716-15 15s6.716 15 15 15h210c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
              />
              <path
                d="m226 422h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
              />
              <path
                d="m476.604 94.391c-95.526-95.489-89.99-90.082-91.086-90.983-2.581-2.117-5.929-3.408-9.518-3.408h-240c-8.284 0-15 6.716-15 15v77h-75c-8.284 0-15 6.716-15 15v390c0 8.284 6.716 15 15 15h330c8.284 0 15-6.716 15-15v-77h75c8.284 0 15-6.716 15-15v-300c0-4.18-1.748-7.963-4.396-10.609zm-85.604-43.178 38.787 38.787h-38.787zm-30 430.787h-300v-360h210v75c0 8.284 6.716 15 15 15h75zm-21.213-300h-38.787v-38.787zm51.213 208c-.028-205.813.068-193.065-.076-194.497-.353-3.563-1.994-6.787-4.32-9.112-96.752-95.91-91.265-94.391-100.604-94.391h-135v-62h210v75c0 8.284 6.716 15 15 15h75v270z"
              />
            </g>
          </svg>
          <div class="section-navigator-item-label-text">
            활동 내역
          </div>
        </label>
      </li>
      <li class="section-navigator-item">
        <input
          class="section-navigator-item-input calendar"
          type="radio"
          name="section-navigator-item-input"
          id="section-navigator-item-input-calendar"
          value="calendar"
          ${data.path === '/calendar' ? 'checked' : ''}
        />
        <label class="section-navigator-item-label" for="section-navigator-item-input-calendar">
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
                d="m482 31h-45v-16c0-8.284-6.716-15-15-15s-15 6.716-15 15v16h-30v-16c0-8.284-6.716-15-15-15s-15 6.716-15 15v16h-181v-16c0-8.284-6.716-15-15-15s-15 6.716-15 15v16h-30v-16c0-8.284-6.716-15-15-15s-15 6.716-15 15v16h-46c-8.284 0-15 6.716-15 15v451c0 8.284 6.716 15 15 15h452c8.284 0 15-6.716 15-15 0-15.566 0-434.004 0-451 0-8.284-6.716-15-15-15zm-286 211v60h-60v-60zm90 0v60h-60v-60zm90 0v60h-60v-60zm91 0v60h-61v-60zm-181 90v60h-60v-60zm-180-30h-61v-60h61zm-61 30h61v60h-61zm91 0h60v60h-60zm60 90v60h-60v-60zm30 0h60v60h-60zm90 0h60v60h-60zm0-30v-60h60v60zm90-60h61v60h-61zm-361-271h31v15c0 8.284 6.716 15 15 15s15-6.716 15-15v-15h30v15c0 8.284 6.716 15 15 15s15-6.716 15-15v-15h181v15c0 8.284 6.716 15 15 15s15-6.716 15-15v-15h30v15c0 8.284 6.716 15 15 15s15-6.716 15-15v-15h30v151h-422zm0 361h61v60h-61zm361 60v-60h61v60z"
              />
              <path
                d="m166.5 152h179c8.284 0 15-6.716 15-15s-6.716-15-15-15h-179c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
              />
            </g>
          </svg>
          <div class="section-navigator-item-label-text">
            달력
          </div>
        </label>
      </li>
      <li class="section-navigator-item">
        <input
          class="section-navigator-item-input statistic"
          type="radio"
          name="section-navigator-item-input"
          id="section-navigator-item-input-stats"
          value="stats"
          ${data.path === '/statistic' ? 'checked' : ''}
        />
        <label class="section-navigator-item-label" for="section-navigator-item-input-stats">
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
                d="m466 31h-195v-16c0-8.284-6.716-15-15-15s-15 6.716-15 15v16h-195c-8.284 0-15 6.716-15 15s6.716 15 15 15h15v255c0 24.813 20.187 45 45 45h11.469l-15.633 97.605c-4.489 28.028 17.182 53.395 45.523 53.395 22.776 0 41.922-16.323 45.523-38.812l17.969-112.188h90.175l17.969 112.188c3.602 22.489 22.747 38.812 45.524 38.812 28.384 0 50.006-25.409 45.523-53.395l-15.633-97.605h11.591c24.813 0 45-20.187 45-45v-255h15c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-302.74 437.443c-1.258 7.855-7.945 13.557-15.9 13.557-9.854 0-17.483-8.778-15.9-18.65l16.392-102.35h32.617zm217.159-5.093c1.571 9.797-5.962 18.65-15.9 18.65-7.955 0-14.643-5.701-15.9-13.557l-17.21-107.443h32.617zm40.581-147.35c0 8.271-6.729 15-15 15h-300c-8.271 0-15-6.729-15-15v-255h330z"
              />
              <path
                d="m256 300.951c62.01 0 110.017-53.261 104.747-114.023-7.645-88.048-115.767-128.4-178.993-65.174-65.536 65.535-19.605 179.197 74.246 179.197zm62.573-63.592-29.194-29.195 41.075-3.558c-1.318 11.5-5.266 22.752-11.881 32.753zm9.33-62.643-56.903 4.929v-57.092c27.433 5.559 49.161 25.848 56.903 52.163zm-86.903-52.164c.025 79.912-.267 74.717.629 77.734 1.535 5.169.039 2.577 55.73 58.287-29.105 19.249-68.783 16.071-94.393-9.539-42.449-42.452-19.871-114.752 38.034-126.482z"
              />
            </g>
          </svg>
          <div class="section-navigator-item-label-text">
            통계
          </div>
        </label>
      </li>
      <li class="section-navigator-item">
        <input
          class="section-navigator-item-input"
          type="radio"
          name="section-navigator-item-input"
          id="section-navigator-item-input-cards"
          value="cards"
        />
        <label class="section-navigator-item-label" for="section-navigator-item-input-cards">
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
                d="m467 76h-422c-24.813 0-45 20.187-45 45v270c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-270c0-24.813-20.187-45-45-45zm15 315c0 8.271-6.729 15-15 15h-422c-8.271 0-15-6.729-15-15v-270c0-8.271 6.729-15 15-15h422c8.271 0 15 6.729 15 15z"
              />
              <path
                d="m436 136h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
              />
              <path
                d="m436 196h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
              />
              <path
                d="m436 286h-20c-8.284 0-15 6.716-15 15s6.716 15 15 15h20c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
              />
              <path
                d="m286 316h70c8.284 0 15-6.716 15-15s-6.716-15-15-15h-70c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
              />
              <path
                d="m436 346h-150c-8.284 0-15 6.716-15 15s6.716 15 15 15h150c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
              />
              <path
                d="m196 196h-45v-45c0-8.284-6.716-15-15-15h-60c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h45v45c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15zm-105-30h30v30h-30zm90 90h-30v-30h30z"
              />
              <path
                d="m196 346h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
              />
            </g>
          </svg>
          <div class="section-navigator-item-label-text">
            결제 수단 관리
          </div>
        </label>
      </li>
      <li class="section-navigator-item">
        <input
          class="section-navigator-item-input"
          type="radio"
          name="section-navigator-item-input"
          id="section-navigator-item-input-settings"
          value="settings"
        />
        <label class="section-navigator-item-label" for="section-navigator-item-input-settings">
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
                d="m392.314 275.918-76.314-16.952v-12.658c24.483-12.804 41.239-38.439 41.239-67.93v-92.932c16.948-17.472 25.525-41.119 25.525-70.446 0-8.284-6.716-15-15-15h-146.505c-40.814 0-74.02 33.205-74.02 74.02-.001 9.828 0 92.698 0 104.358 0 32.403 20.228 60.152 48.711 71.336v9.254l-76.27 16.948c-34.113 7.579-58.73 37.899-58.73 73.214v147.87c0 8.284 6.716 15 15 15s15-6.716 15-15v-147.87c0-21.254 14.49-39.317 35.238-43.929l57.296-12.732-14.945 29.972c-12.046 24.162 9.39 51.331 35.582 45.49l31.671-7.059-24.326 101.131c-1.19 4.946.208 10.159 3.715 13.846l29.95 31.489c5.776 6.072 15.404 6.226 21.372.371l32.107-31.489c3.827-3.753 5.36-9.264 4.021-14.454l-25.991-100.797c30.983 6.672 32.272 7.749 38.329 7.749 23.151 0 39.283-24.63 28.491-46.276l-14.94-29.962 57.287 12.725c20.75 4.61 35.242 22.675 35.242 43.93v147.865c0 8.284 6.716 15 15 15s15-6.716 15-15v-147.866c.001-34.944-24.252-65.553-58.735-73.216zm-106.314-9.251-30 46.615-30.05-46.693v-11.589c56.87-.084 54.439.181 60.05-.21zm-108.761-192.647c0-24.272 19.747-44.02 44.02-44.02h130.468c-2.463 16.669-9.33 29.495-20.793 38.956-35.902 29.629-109.071 19.438-138.862 13.682-4.921-.952-9.957-.922-14.832.089v-8.707zm0 104.358c0-6.006 0-52.427 0-58.414.043-.133-.384-3.594 2.736-6.214 1.048-.878 3.271-2.258 6.405-1.657 44.058 8.514 99.921 12.372 140.859-6.015v72.3c0 25.707-20.915 46.622-46.622 46.622h-56.756c-25.707 0-46.622-20.915-46.622-46.622zm18.361 159.559c-1.108-1.417-1.801 1.077 17.007-36.645l19.143 29.745c-37.256 8.304-35.049 8.307-36.15 6.9zm60.772 137.688-13.83-14.539 13.964-58.051 14.913 57.832zm60.028-137.688c-1.102 1.409 1.106 1.405-36.15-6.899l19.143-29.745c18.764 37.631 18.115 35.226 17.007 36.644z"
              />
              <path
                d="m151 382.308c-8.284 0-15 6.716-15 15v99.692c0 8.284 6.716 15 15 15s15-6.716 15-15v-99.692c0-8.285-6.716-15-15-15z"
              />
              <path
                d="m361 382.308c-8.284 0-15 6.716-15 15v99.692c0 8.284 6.716 15 15 15s15-6.716 15-15v-99.692c0-8.285-6.716-15-15-15z"
              />
            </g>
          </svg>
          <div class="section-navigator-item-label-text">
            사용자 설정
          </div>
        </label>
      </li>
    `;

    this.pathList.forEach((path) => {
      if (path !== data.path) {
        bindEvent(`.section-navigator-item-input.${path.slice(1)}`, 'click', () => {
          this.store.moveSection(path);
        });
      }
    });
  }
}
