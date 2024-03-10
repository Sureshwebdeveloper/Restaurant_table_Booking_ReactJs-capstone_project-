import React, { useState } from "react";
import Flag from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../stylesheets/phonenumber.css";

const PhonenumberValidation = () => {
  const [phone, setPhone] = useState("");
  const [valid, setValid] = useState(true);
  const [error, setError] = useState("");
  const handleChangeNumber = (e) => {
    setPhone(e);
    setValid(validatePhoneNumber(e));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const pattern = /^\d{11}$/;
    return pattern.test(phoneNumber);
  };

  return (
    <div className="phoneNumberContainer">
      <label htmlFor="phonenumber" className="flagcontainer">
        <br />
        <Flag
          country={"us"}
          value={phone}
          onChange={handleChangeNumber}
          inputProps={{ required: true }}
          countryCodeEditable={false}
          autoFocus={true}
          required={true}
          disableDropdown={true}
        />
      </label>
      {!valid && <div id="error">Please Enter Valid PhoneNumber</div>}
    </div>
  );
};

export default PhonenumberValidation;
