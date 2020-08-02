import './styles.scss';
import { element } from 'utils/element';

export default class Form {
  constructor($target) {
    this.$target = $target;

    this.$Form = element('form', {
      className: 'activity-form',
    });

    this.$target.appendChild(this.$Form);
  }

  render(data) {
    this.$Form.innerHTML = `
      <div class="form-row">
        <label for="form-is-income">분류</label>
        <button class="income-button" type="button">수입</button>
        <button class="outcome-button" type="button">지출</button>
      </div>
      <div class="form-row">
        <label for="form-date">날짜</label>
        <input type="date" name="form-date"/>
        <label for="form-category">카테고리</label>
        <select>
          <option value="default">선택하세요</option>
          <option value="월급">월급</option>
          <option value="용돈">용돈</option>
          <option value="기타수입">기타수입</option>
        </select>
        <label for="form-payment-method">결제수단</label>
        <select>
          <option value="default">선택하세요</option>
          <option value="현대카드">현대카드</option>
          <option value="카카오체크카드">카카오체크카드</option>
          <option value="국민은행">국민은행</option>
          <option value="현금">현금</option>
        </select>
      </div>
      <div class="form-row">
        <label for="form-price">금액</label>
        <input type="text" name="price"/>
        <label for="form-content">내용</label>
        <input type="text" name="content"/>
      </div>
      <button class="confirm-button" type="button">확인</button>
    `;
  }
}
