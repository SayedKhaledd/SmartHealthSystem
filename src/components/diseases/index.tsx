import React from "react";
import "./diseases.css";

interface Props {}

const Diseases: React.FC<Props> = (props) => {
  return (
    <ul className='list-group '>
      <li className='list-group-item center'>Potential Disease 1</li>
      <li className='list-group-item'>Potential Disease 2</li>
      <li className='list-group-item'>Potential Disease 3</li>
      <li className='list-group-item'>Potential Disease 4</li>
    </ul>
  );
};
export default Diseases;
