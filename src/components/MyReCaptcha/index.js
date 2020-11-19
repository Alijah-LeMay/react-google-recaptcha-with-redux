import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// Redux
import { useDispatch } from "react-redux";
import { setCaptcha } from "../../store/actions/captchaActions";

const SITE_KEY = "6LfjTuAZAAAAAODtU1CfMXETuWYjrWks0atG91fv";

const MyReCaptcha = () => {
  const dispatch = useDispatch();
  const [expired, setExpired] = useState(true);

  useEffect(() => {
    dispatch(setCaptcha({ expired }));
  }, [expired, dispatch]);

  const handleChange = (value) => {
    if (value) {
      setExpired(false);
    } else {
      setExpired(true);
    }
  };

  return (
    <div>
      <ReCAPTCHA
        style={{ display: "inline-block" }}
        theme="dark"
        sitekey={SITE_KEY}
        onChange={handleChange}
      />
    </div>
  );
};

export default MyReCaptcha;
