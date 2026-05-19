import "../App.css";

export default function Numpad({ onClick, className, children }) {
  return (
    <>
      <button
        className={`text-xl font-bold text-[#99d6ea] bg-[#1b1d36] aspect-square ${className}`}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        {children}
      </button>
    </>
  );
}
