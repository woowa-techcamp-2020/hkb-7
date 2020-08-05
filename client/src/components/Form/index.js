import './styles.scss';
import { element } from 'utils/element';
import { html } from 'utils/html';

export default class Form {
  constructor($target) {
    this.$target = $target;

    this.$Form = element('form', {
      className: 'form right-col',
    });

    this.$target.appendChild(this.$Form);
  }

  render(data) {
    this.$Form.innerHTML = html`
      <div class="form-title">새로운 활동 추가하기</div>
      <div class="form-question">유형</div>
      <div class="form-answer form-is-income">
        <input class="form-is-income-input" type="radio" name="form-is-income" id="is-income" required />
        <label class="form-pill left-pill" for="is-income">
          <div class="form-pill-text">수입</div>
        </label>
        <input class="form-is-income-input" type="radio" name="form-is-income" id="is-outcome" required />
        <label class="form-pill right-pill" for="is-outcome">
          <div class="form-pill-text">지출</div>
        </label>
      </div>

      <div class="form-question">날짜</div>
      <div class="form-answer">
        <select class="form-pill left-pill form-select" name="form-year" id="form-year" required>
          <option value="">연도</option>
          <option value="2020">2020년</option>
          <option value="2020">2019년</option>
          <option value="2020">2018년</option>
          <option value="2020">2017년</option>
          <option value="2020">2016년</option>
        </select>
        <select class="form-pill right-pill form-select" name="form-date" id="form-date" required>
          <option value="">월</option>
          <option value="1">1월</option>
          <option value="2">2월</option>
          <option value="3">3월</option>
          <option value="4">4월</option>
          <option value="5">5월</option>
          <option value="6">6월</option>
          <option value="7">7월</option>
          <option value="8">8월</option>
          <option value="9">9월</option>
          <option value="10">10월</option>
          <option value="11">11월</option>
          <option value="12">12월</option>
        </select>
      </div>
      <div class="form-answer">
        <div class="month-grid-container">
          <div class="month-grid-date-item">
            <div class="month-grid-date-label-text">월</div>
          </div>
          <div class="month-grid-date-item">
            <div class="month-grid-date-label-text">화</div>
          </div>
          <div class="month-grid-date-item">
            <div class="month-grid-date-label-text">수</div>
          </div>
          <div class="month-grid-date-item">
            <div class="month-grid-date-label-text">목</div>
          </div>
          <div class="month-grid-date-item">
            <div class="month-grid-date-label-text">금</div>
          </div>
          <div class="month-grid-date-item">
            <div class="month-grid-date-label-text">토</div>
          </div>
          <div class="month-grid-date-item">
            <div class="month-grid-date-label-text">일</div>
          </div>
          <div class="month-grid-date-item">
            <input
              class="month-grid-date-input"
              type="radio"
              name="month-grid-date"
              id="month-grid-date-input-1"
              required
            />
            <label class="month-grid-date-label" for="month-grid-date-input-1">
              <div class="month-grid-date-label-text">1</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-2" />
            <label class="month-grid-date-label" for="month-grid-date-input-2">
              <div class="month-grid-date-label-text">2</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-3" />
            <label class="month-grid-date-label" for="month-grid-date-input-3">
              <div class="month-grid-date-label-text">3</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-4" />
            <label class="month-grid-date-label" for="month-grid-date-input-4">
              <div class="month-grid-date-label-text">4</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-5" />
            <label class="month-grid-date-label" for="month-grid-date-input-5">
              <div class="month-grid-date-label-text">5</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-6" />
            <label class="month-grid-date-label" for="month-grid-date-input-6">
              <div class="month-grid-date-label-text">6</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-7" />
            <label class="month-grid-date-label" for="month-grid-date-input-7">
              <div class="month-grid-date-label-text">7</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-8" />
            <label class="month-grid-date-label" for="month-grid-date-input-8">
              <div class="month-grid-date-label-text">8</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-9" />
            <label class="month-grid-date-label" for="month-grid-date-input-9">
              <div class="month-grid-date-label-text">9</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-10" />
            <label class="month-grid-date-label" for="month-grid-date-input-10">
              <div class="month-grid-date-label-text">10</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-11" />
            <label class="month-grid-date-label" for="month-grid-date-input-11">
              <div class="month-grid-date-label-text">11</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-12" />
            <label class="month-grid-date-label" for="month-grid-date-input-12">
              <div class="month-grid-date-label-text">12</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-13" />
            <label class="month-grid-date-label" for="month-grid-date-input-13">
              <div class="month-grid-date-label-text">13</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-14" />
            <label class="month-grid-date-label" for="month-grid-date-input-14">
              <div class="month-grid-date-label-text">14</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-15" />
            <label class="month-grid-date-label" for="month-grid-date-input-15">
              <div class="month-grid-date-label-text">15</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-16" />
            <label class="month-grid-date-label" for="month-grid-date-input-16">
              <div class="month-grid-date-label-text">16</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-17" />
            <label class="month-grid-date-label" for="month-grid-date-input-17">
              <div class="month-grid-date-label-text">17</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-18" />
            <label class="month-grid-date-label" for="month-grid-date-input-18">
              <div class="month-grid-date-label-text">18</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-19" />
            <label class="month-grid-date-label" for="month-grid-date-input-19">
              <div class="month-grid-date-label-text">19</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-20" />
            <label class="month-grid-date-label" for="month-grid-date-input-20">
              <div class="month-grid-date-label-text">20</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-21" />
            <label class="month-grid-date-label" for="month-grid-date-input-21">
              <div class="month-grid-date-label-text">21</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-22" />
            <label class="month-grid-date-label" for="month-grid-date-input-22">
              <div class="month-grid-date-label-text">22</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-23" />
            <label class="month-grid-date-label" for="month-grid-date-input-23">
              <div class="month-grid-date-label-text">23</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-24" />
            <label class="month-grid-date-label" for="month-grid-date-input-24">
              <div class="month-grid-date-label-text">24</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-25" />
            <label class="month-grid-date-label" for="month-grid-date-input-25">
              <div class="month-grid-date-label-text">25</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-26" />
            <label class="month-grid-date-label" for="month-grid-date-input-26">
              <div class="month-grid-date-label-text">26</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-27" />
            <label class="month-grid-date-label" for="month-grid-date-input-27">
              <div class="month-grid-date-label-text">27</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-28" />
            <label class="month-grid-date-label" for="month-grid-date-input-28">
              <div class="month-grid-date-label-text">28</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-29" />
            <label class="month-grid-date-label" for="month-grid-date-input-29">
              <div class="month-grid-date-label-text">29</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-30" />
            <label class="month-grid-date-label" for="month-grid-date-input-30">
              <div class="month-grid-date-label-text">30</div>
            </label>
          </div>

          <div class="month-grid-date-item">
            <input class="month-grid-date-input" type="radio" name="month-grid-date" id="month-grid-date-input-31" />
            <label class="month-grid-date-label" for="month-grid-date-input-31">
              <div class="month-grid-date-label-text">31</div>
            </label>
          </div>
        </div>
      </div>
      <div class="form-question">결제 수단</div>
      <div class="form-answer">
        <select class="form-pill form-field-long" name="form-date" id="form-date" required>
          <option value="" selected disabled>결제 수단을 선택해주세요.</option>
          <option value="1">현대카드</option>
          <option value="2">카카오뱅크 계좌 이체</option>
        </select>
      </div>
      <div class="form-question">카테고리</div>
      <div class="form-answer">
        <select class="form-pill form-field-long" name="form-category" id="form-category" required>
          <option value="" selected disabled>카테고리를 선택해주세요.</option>
          <option value="1">식비</option>
          <option value="2">생활비</option>
        </select>
      </div>
      <div class="form-question">금액</div>
      <div class="form-answer">
        <input class="form-pill form-field-long" type="number" name="form-price" id="form-price" required />
        <label class="label-suffix">원</label>
      </div>
      <div class="form-question">내용</div>
      <div class="form-answer">
        <textarea
          class="form-pill form-contents"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="내용을 입력해주세요."
          required
        ></textarea>
      </div>

      <div class="form-question"></div>
      <div class="form-answer">
        <button class="form-pill left-pill cancel-button">
          <div class="form-pill-text">취소</div>
        </button>
        <button class="form-pill right-pill submit-button">
          <div class="form-pill-text">추가</div>
        </button>
      </div>
      <div class="form-question"></div>
    `;
  }
}
