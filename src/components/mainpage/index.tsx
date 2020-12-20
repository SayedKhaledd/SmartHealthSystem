import React, { useState } from "react";
import "./mainpage.css";
import { reduxForm } from "redux-form";

const MainPage: React.FC = (props) => {
  const [inputValue, setInputValue] = useState<String>("");
  return (
    <div className={`container `}>
      <div className='form-group  mt-5 container maininput'>
        <label htmlFor='searchInput'>Enter Syndrome:</label>
        <input
          type='text'
          className='form-control '
          id='searchInput'
          placeholder='Enter a Syndrome'
        />
        <small id='emailHelp' className='form-text text-muted'>
          We'll Your Results Below
        </small>
        <button type='submit' className='btn btn-primary ml-auto d-block'>
          Search
        </button>
      </div>
    </div>
  );
};
export default reduxForm({
  form: "mainForm",
})(MainPage);
