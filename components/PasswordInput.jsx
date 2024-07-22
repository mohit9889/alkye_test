import { useState } from 'react';
import Input from './Input';
import EyeSvg from '~/public/assets/icons/eye.svg';
import EyeOffSvg from '~/public/assets/icons/eye-off.svg';

const PasswordInput = ({ inputClassName = '', ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative">
      <Input type={showPassword ? 'text' : 'password'} className={inputClassName} {...props} />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 right-0 flex items-center px-3"
      >
        {showPassword ? (
          <span className="icon icon-eye">
            <EyeSvg />
          </span>
        ) : (
          <span className="icon">
            <EyeOffSvg />
          </span>
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
