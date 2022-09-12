export const ThirdStep = ({ next, prev }) => {
  const nextHandler = () => {
    next && next();
  };

  const prevHandler = () => {
    prev && prev();
  };
  return (
    <div>
      <h1 className="title">STEP THREE</h1>
      <button onClick={prevHandler}>PREV</button>
      <button onClick={nextHandler}>NEXT</button>
    </div>
  );
};
