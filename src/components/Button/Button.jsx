import './Button.css';
import { useMemo } from 'react';

const classes = {
  primary: 'bg-primary text-white hover:bg-secondary',
  default:
    'bg-white text-secondary-light hover:bg-secondary-light hover:text-white',
  link: 'text-secondary-light hover:text-white hover:underline',
};

export const Button = ({
  style = 'default',
  className,
  children,
  ...props
}) => {
  const buttonClass = useMemo(() => classes[style], [style]);

  return (
    <button className={`button ${buttonClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
