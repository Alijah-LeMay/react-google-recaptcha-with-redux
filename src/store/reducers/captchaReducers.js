import {
  SET_CAPTCHA_SUCCESS,
  SET_CAPTCHA_FAIL,
} from "../../constants/captchaConstants";

export const captchaReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CAPTCHA_SUCCESS:
      return { captcha: action.payload };
    case SET_CAPTCHA_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
