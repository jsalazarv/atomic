export const ProgressBar = ({ steps = 1, current = 0, hidden }) => {
  const stepRange = Array.from({ length: steps }, (_, i) => i);
  const percentage = ((current + 1) * 100) / stepRange.length;

  if (hidden) {
    return null;
  }

  return (
    <div className="progress-bar-steps">
      <div className="bar-steps">
        {stepRange.map((step, index) => {
          const isPending = index > current;

          return (
            <div
              key={index}
              className={`dot-counter ${isPending ? 'pending' : ''}`}>
              {index + 1}
            </div>
          );
        })}
      </div>
      <div className="bg-white rounded-full">
        <div
          className="h-4 bg-primary rounded-full"
          style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};
