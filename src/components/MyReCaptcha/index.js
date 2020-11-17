import React, { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
// Redux
import { setCaptcha } from '../../store/actions/captchaActions';
import { useDispatch } from 'react-redux';

const SITE_KEY = '6LfjTuAZAAAAAODtU1CfMXETuWYjrWks0atG91fv';

const MyReCaptcha = () => {
  const dispatch = useDispatch();
  const [expired, setExpired] = useState(true);

  useEffect(() => {
    dispatch(setCaptcha({ expired }));
  }, [expired, dispatch]);

  const handleChange = (value) => {
    if (value) {
      setExpired(false);
    }

    if (value === null) {
      setExpired(true);
    }
  };

  return (
    <div>
      <ReCAPTCHA
        style={{ display: 'inline-block' }}
        theme='dark'
        sitekey={SITE_KEY}
        onChange={handleChange}
      />
    </div>
  );
};

export default MyReCaptcha;
