import React, { FormEvent, useState } from "react";
import Styles from "./doctorregisterpage.module.css";
import { Field, FormSubmitHandler, reduxForm } from "redux-form";
import { compose } from "redux";

interface FiedlArguments {
  input: InputType;
  meta: MetaType;
  type: string;
  label: string;
}
interface MetaType {
  error: String;
  touched: boolean;
}
interface InputType {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const renderField: React.FC<FiedlArguments> = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => {
  console.log(input.value);
  return (
    <div className='form-group  registerInputWrapper'>
      <label>{label}</label>

      <input
        {...input}
        placeholder={label}
        type={type}
        className='form-control '
      />
      {touched && error && <span>{error}</span>}
    </div>
  );
};

interface Props {}

const DoctorRegisterPage: React.FC = (props: Props) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(files, "from files");
    if (files) {
      console.log(files[0]);
    }
  };
  return (
    <form className={`container w-50 border p-5 my-5`} onSubmit={handleSubmit}>
      <Field
        name='password'
        component={renderField}
        label='Password'
        type='password'
      />
      <Field name='email' component={renderField} type='email' label='Email' />
      <Field name='name' component={renderField} type='text' label='Name' />
      <Field
        name='facebookProfileLink'
        component={renderField}
        type='text'
        label='Facbebook Profile Link'
      />
      <Field
        name='phoneNumber'
        component={renderField}
        type='tel'
        label='Phone Number'
      />
      <Field
        name='clinicName'
        component={renderField}
        type='text'
        label='Clinic Name'
      />
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name='sex' component='input' type='radio' value='male' />{" "}
            Male
          </label>
          <br />
          <label>
            <Field name='sex' component='input' type='radio' value='female' />{" "}
            Female
          </label>
        </div>
      </div>

      <Field
        name='clinicAddress'
        component={renderField}
        type='text'
        label='Clinic Address'
      />
      <Field
        name='nationalID'
        component={renderField}
        type='number'
        label='NationalID'
      />
      <input type='file' onChange={handleFileChange} />
      <button type='submit' className='btn btn-primary ml-auto d-block'>
        Submit
      </button>
    </form>
  );
};
export default reduxForm({ form: "register" })(DoctorRegisterPage);
