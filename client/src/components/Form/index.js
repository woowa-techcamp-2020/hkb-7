import './styles.scss';
import { element } from 'utils/element';
import { store } from 'models/store';
import { bindEvent } from 'utils/bindEvent';
import { $, $A, getYearMonthDate } from 'utils/helper';
import { formYears, formMonths, formDays, formDates, formPaymentMethods, formCategories } from 'utils/template';
import { years, months, days, dates } from 'utils/constant';

export default class Form {
  constructor($target) {
    this.$target = $target;
    this.store = store;
    this.store.subscribe((data) => this.render(data), 'stateChange');
    this.store.subscribe((data) => this.render(data), 'selectItem');

    this.$Form = element('form', {
      className: 'form right-col',
    });

    this.$target.appendChild(this.$Form);
  }

  render(data) {
    const isCreate = data.mode === 'create' ? true : false;
    this.$Form.innerHTML = `
      <div class="form-title">${isCreate ? '새로운 활동 추가하기' : '활동 수정하기'}</div>
      <div class="form-question">유형</div>
      <div class="form-answer is-income">
        <input class="form-is-income-input" type="radio" value="1" name="is-income" id="is-income" required />
        <label class="form-pill left-pill" for="is-income">
          <div class="form-pill-text">수입</div>
        </label>
        <input class="form-is-income-input" type="radio" value="0" name="is-income" id="is-outcome" required />
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
          <option class="category-default" value="" selected>카테고리를 선택해주세요.</option>
          ${data.categories
            .map((category) => {
              return formCategories(category.id, category.name, category.is_income);
            })
            .join('')}
        </select>
      </div>
      <div class="form-question">금액</div>
      <div class="form-answer">
        <input class="form-pill form-field-long" type="number" name="price" id="form-price" required />
        <label class="label-suffix">원</label>
      </div>
      <div class="form-question">내용</div>
      <div class="form-answer">
        <textarea
          class="form-pill form-contents"
          name="content"
          cols="30"
          rows="10"
          placeholder="내용을 입력해주세요."
          required
        ></textarea>
      </div>

      <div class="form-question"></div>
      <div class="form-answer">
        <button class="form-pill left-pill cancel-button" type="button">
          <div class="form-pill-text ${isCreate ? 'cancel' : 'delete'}">${isCreate ? '취소' : '삭제'}</div>
        </button>
        <button class="form-pill right-pill submit-button" type="button">
          <div class="form-pill-text ${isCreate ? 'confirm' : 'modify'}">${isCreate ? '추가' : '수정'}</div>
        </button>
      </div>
      <div class="form-question"></div>
    `;

    bindEvent('#is-income', 'click', () => {
      this.isIncomeClickHandler();
    });
    bindEvent('#is-outcome', 'click', () => {
      this.isIncomeClickHandler();
    });
    bindEvent('.form-pill.right-pill.submit-button', 'click', () => {
      this.submitHandler(data);
    });
    if (isCreate) {
      bindEvent('.form-pill.left-pill.cancel-button', 'click', () => {
        this.render(data);
      });
    } else {
      bindEvent('.form-pill.left-pill.cancel-button', 'click', () => {
        this.store.removeActivity(data.selectItem);
      });
      this.modifyMode(data.selectItem);
    }
  }

  isIncomeClickHandler() {
    if ($('input[name=is-income]:checked').value == 1) {
      $A('.income-category').forEach((el) => {
        el.classList.remove('disabled');
      });
      $A('.outcome-category').forEach((el) => {
        el.selected = false;
        el.classList.add('disabled');
      });
      this.releaseCategorySelect(true);
    } else {
      $A('.income-category').forEach((el) => {
        el.selected = false;
        el.classList.add('disabled');
      });
      $A('.outcome-category').forEach((el) => {
        el.classList.remove('disabled');
      });
      this.releaseCategorySelect(false);
    }
  }

  releaseCategorySelect(isIncome) {
    if (!$('option[name=category]:checked')) {
      return;
    }
    if (isIncome && $('option[name=category]:checked').className === 'outcome-category') {
      $('.category-default').disabled = false;
      $('.category-default').selected = 'selected';
      $('.category-default').disabled = true;
      return;
    }
    if (!isIncome && $('option[name=category]:checked').className === 'income-category') {
      $('.category-default').disabled = false;
      $('.category-default').selected = 'selected';
      $('.category-default').disabled = true;
      return;
    }
  }

  modifyMode(data) {
    const date = getYearMonthDate(data.date);
    data.is_income ? ($('#is-income').checked = 'checked') : ($('#is-outcome').checked = 'checked');
    this.isIncomeClickHandler();
    $(`.year-${date.year}`).selected = 'selected';
    $(`.month-${date.month}`).selected = 'selected';
    $(`#month-grid-date-input-${date.date}`).checked = 'checked';
    $(`.payment-method-${data.payment_method_id}`).selected = 'selected';
    $(`#category-${data.category_id}`).selected = 'selected';
    $('#form-price').value = data.price;
    $('.form-pill.form-contents').value = data.content;
  }

  submitHandler(data) {
    const isCreate = data.mode === 'create' ? true : false;
    if (!this.validateInput()) {
      alert('입력 값을 확인하세요');
      return;
    }
    const info = {
      is_income: $('input[name=is-income]:checked').value,
      date: `${$('option[name=year]:checked').value}-${$('option[name=month]:checked').value}-${
        $('input[name=date]:checked').value
      }`,
      payment_method_id: $('option[name=payment-method]:checked').value,
      category_id: $('option[name=category]:checked').value,
      price: $('input[name=price]').value,
      content: $('textarea[name=content]').value,
    };
    isCreate ? (info.user_id = data.userId) : (info.id = data.selectItem.id);
    isCreate ? this.store.addActivity(info) : this.store.modifyActivity(info);
  }

  validateInput() {
    if (!$('input[name=is-income]:checked')) return false;
    if (!$('option[name=year]:checked')) return false;
    if (!$('option[name=month]:checked')) return false;
    if (!$('input[name=date]:checked')) return false;
    if (!$('option[name=payment-method]:checked')) return false;
    if (!$('option[name=category]:checked')) return false;
    if (!$('input[name=price]')) return false;
    if (!$('textarea[name=content]')) return false;
    return true;
  }
}
