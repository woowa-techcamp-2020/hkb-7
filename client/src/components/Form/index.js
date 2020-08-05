import './styles.scss';
import { element } from 'utils/element';
import { html } from 'utils/html';
import { formYears, formMonths, formDays, formDates, formPaymentMethods, formCategories } from 'utils/template';
import { years, months, days, dates } from 'utils/constant';

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
        <select class="form-pill left-pill form-select" name="year" id="form-year" required>
          <option name="year" value="" selected disabled>연도</option>
          ${years
            .map((year) => {
              return formYears(year);
            })
            .join('')}
        </select>
        <select class="form-pill right-pill form-select" name="month" id="form-date" required>
          <option name="month" value="" selected disabled>월</option>
          ${months
            .map((month) => {
              return formMonths(month);
            })
            .join('')}
        </select>
      </div>
      <div class="form-answer">
        <div class="month-grid-container">
          ${days
            .map((day) => {
              return formDays(day);
            })
            .join('')}
          ${dates
            .map((date) => {
              return formDates(date);
            })
            .join('')}
          </div>
          </div>
      <div class="form-question">결제 수단</div>
      <div class="form-answer">
        <select class="form-pill form-field-long" name="payment-method" id="form-payment-method" required>
          <option value="" selected disabled>결제 수단을 선택해주세요.</option>
          ${data.paymentMethods
            .map((paymentMethod) => {
              return formPaymentMethods(paymentMethod.id, paymentMethod.name);
            })
            .join('')}
        </select>
      </div>
      <div class="form-question">카테고리</div>
      <div class="form-answer">
        <select class="form-pill form-field-long" name="category" id="form-category" required>
          <option value="" selected disabled>카테고리를 선택해주세요.</option>
          ${data.categories
            .map((category) => {
              return formCategories(category.id, category.name, category.is_income);
            })
            .join('')}
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
