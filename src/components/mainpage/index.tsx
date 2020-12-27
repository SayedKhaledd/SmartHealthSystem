import React, { useState } from "react";
import "./mainpage.css";
import { reduxForm } from "redux-form";
import faker from "faker";
import DropDown from "../searchabledropdown";
import Diseases from "../diseases";

const MainPage: React.FC = (props) => {
  const [inputValue, setInputValue] = useState<String>("");
  return (
    <div className={`container `}>
      <div className='form-group  mt-5 container maininput'>
        <label htmlFor='searchInput'>Enter Syndrome:</label>
        <DropDown
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
      <div className='container '>
        <div className='media'>
          <img
            className='mr-3 bordered'
            src={faker.image.avatar()}
            alt='Generic placeholder image'
          />
          <div className='media-body'>
            <h5 className='mt-0'>Doctor's Name</h5>
            Any Thing we Want To Display Here About The Doctor
          </div>
        </div>
      </div>
      <Diseases />
    </div>
  );
};
export default reduxForm({
  form: "mainForm",
})(MainPage);
