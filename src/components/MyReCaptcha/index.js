import React, { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
// Redux
import { setCaptcha } from '../../store/actions/captchaActions';
import { useDispatch } from 'react-redux';

const TEST_SITE_KEY = '6LfjTuAZAAAAAODtU1CfMXETuWYjrWks0atG91fv';
const DELAY = 1500;

const MyReCaptcha = ({ ...props }) => {
  const dispatch = useDispatch();
  const recaptchaRef = useRef(null);
  const [value, setValue] = useState('[empty]');
  const [load, setLoad] = useState(false);
  const [expired, setExpired] = useState('false');

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, DELAY);
    console.log('didMount - reCaptcha Ref-', recaptchaRef);
  }, []);

  const handleChange = (value) => {
    console.log('Captcha value:', value);
    setExpired('false');
    // this.props.setCaptcha(this.state);

    // if value is null recaptcha expired
    if (value === null) setExpired('true');
    // if (value === null) this.setState({ expired: 'true' });
    // this.props.setCaptcha(this.state);
  };

  return (
    <div>
      {load && (
        <ReCAPTCHA
          style={{ display: 'inline-block' }}
          theme='dark'
          sitekey={TEST_SITE_KEY}
          onChange={handleChange}
          // asyncScriptOnLoad={this.asyncScriptOnLoad}
        />
      )}
    </div>
  );
};

// export default connect(null, { setCaptcha })(MyReCaptcha);
export default MyReCaptcha;
