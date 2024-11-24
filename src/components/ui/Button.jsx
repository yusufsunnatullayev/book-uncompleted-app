function Button({ type, buttonStyles, children, handleClick }) {
  return (
    <button
      type={type || "submit"}
      onClick={handleClick}
      className={`${buttonStyles} py-1 px-3 text-base font-semibold rounded-md hover:opacity-80 duration-100`}
    >
      {children}
    </button>
  );
}

export default Button;
