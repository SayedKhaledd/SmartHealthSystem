import React, { ChangeEvent, useEffect, useState } from "react";
import { JsxElement } from "typescript";
import "./searchabledropdown.css";

interface Props {
  id: string;
  className: string;
  placeholder: string;
}

interface Options {
  value: string;
  id: string;
}

const DropDown: React.FC<Props> = ({ className, placeholder, id }) => {
  // you need a list to search in
  const [availableOptions, setAvailableOptions] = useState<Options[] | null>(
    null
  );
  const [inputValue, setInputValue] = useState<string>("");

  // a list to show in the drop down
  const [selectedOptions, setSelectedOptions] = useState<Options[] | null>(
    null
  );
  // and a list for the selected options
  const [filteredOptions, setFilteredOptions] = useState<Options[] | null>(
    null
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const regExp: RegExp = new RegExp(`^${value}`, "i");
    const availableResults: Options[] = availableOptions!
      .sort()
      .filter((item) => regExp.test(item.value));
    setFilteredOptions(availableResults);
    if (e.target.value.length === 0) setFilteredOptions(null);
  };

  const handleOptionSelect = (selection: string) => {
    // first of all search in the options array and find the id
    const selected = availableOptions?.find((item) => item.value === selection);

    setSelectedOptions((prevOptions) => {
      if (prevOptions) {
        const updatedSelection = [...(prevOptions as Options[]), selected!];
        return updatedSelection;
      }
      return [selected!];
    });
    // then put all the selected option on the input as its value
  };

  const removeSelection = (id: string) => {
    const filteredArray = selectedOptions?.filter((item) => item.id !== id);
    setSelectedOptions(filteredArray!);
  };

  const renderFilteredOPtions = () => {
    if (!filteredOptions) {
      return <div></div>;
    }
    if (filteredOptions.length === 0) {
      return <div>No Matches Found</div>;
    }
    return (
      <ul className='list-unstyled border rounded list-group'>
        {filteredOptions.map((option, index) => (
          <li
            className='list-group-item'
            key={index}
            onClick={() => handleOptionSelect(option.value)}
          >
            {option.value}
          </li>
        ))}
      </ul>
    );
  };
  const renderSelectedOptions = () => {
    return (
      <div>
        {selectedOptions?.map((item, index) => (
          <span key={index}>
            <span>{item.value}</span>
            <i onClick={() => removeSelection(item.id)}>Delete</i>
          </span>
        ))}
      </div>
    );
  };

  useEffect(() => {
    fetch("http://localhost:8080/getAvailableSiptoms ")
      .then((req) => req.json())
      .then((data) => setAvailableOptions([data]));
  }, []);
  const fetchDiseases = (diseases: Options[]) => {
    fetch(
      `http://localhost:8080/getMatchingDiseases?symptoms=${selectedOptions?.join()} `
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form>
      <div>
        {renderSelectedOptions()}
        <input
          onChange={handleInputChange}
          className={` ${className}`}
          id={id}
          placeholder={placeholder}
          type='text'
          autoComplete='off'
          value={inputValue}
        />
        {renderFilteredOPtions()}
      </div>
    </form>
  );
};
export default DropDown;
