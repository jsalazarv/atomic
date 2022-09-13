import './Button.css';
import { useMemo } from 'react';

const classes = {
  primary: 'bg-primary text-white hover:bg-secondary-light',
  default:
    'bg-white text-secondary-light hover:bg-secondary-light hover:text-white',
  link: 'text-white hover:text-primary hover:underline',
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
