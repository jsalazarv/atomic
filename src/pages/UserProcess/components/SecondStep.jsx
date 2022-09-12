export const SecondStep = ({ next, prev }) => {
  const nextHandler = () => {
    next && next();
  };

  const prevHandler = () => {
    prev && prev();
  };
  return (
    <div>
      <h1 className="title">STEP TWO</h1>
      <button onClick={prevHandler}>PREV</button>
      <button onClick={nextHandler}>NEXT</button>
    </div>
  );
};
