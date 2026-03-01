import { useState } from 'react';

import checkIcon from '../assets/icons/check.svg';
import closeIcon from '../assets/icons/close.svg';

const FilterPopup = ({ onSubmit, onClose }) => {
  const [value, setValue] = useState('');

  return (
    <div
      className={`absolute inset-x-0 bottom-full flex items-center justify-center rounded-t border-4 border-green-700 border-b-green-800 bg-emerald-950 transition duration-100`}
    >
      <input
        className="min-w-0 px-2 py-1 text-base font-normal outline-none"
        value={value}
        autoFocus
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && onSubmit(value)}
      ></input>
      <div className="flex flex-none items-center">
        <button
          className="hover:opacity-80 active:opacity-70"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <img src={closeIcon} alt="" />
        </button>
        <button
          className="hover:opacity-80 active:opacity-70"
          onClick={() => onSubmit(value)}
          aria-label="Подтвердить"
        >
          <img src={checkIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default FilterPopup;
