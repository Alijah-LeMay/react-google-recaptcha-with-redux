import React from 'react';
import { useSelector } from 'react-redux';

import MyReCaptcha from '../components/MyReCaptcha';

const HomeScreen = () => {
  const captcha = useSelector((state) => state.captcha);
  const { captcha: currentCaptcha } = captcha;

  return (
    <div>
      {!currentCaptcha ? (
        <p>...loading...</p>
      ) : (
        <h1>{`current value-${
          currentCaptcha.expired ? 'none' : 'present'
        }`}</h1>
      )}

      <MyReCaptcha />
    </div>
  );
};

export default HomeScreen;
