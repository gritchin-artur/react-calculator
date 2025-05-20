import "./Button.css";

export const Button = ({ text, className, handler }) => {
  return (
    <button className={className} onClick={() => handler(text)}>
      {text}
    </button>
  );
};
