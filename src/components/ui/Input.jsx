function Input({ label, type, inputStyle, placeholder, name, defaultValue }) {
  return (
    <div className="w-full flex flex-col  items-start gap-1">
      <label className="font-medium text-xs" htmlFor={name}>
        {label}
      </label>
      <input
        defaultValue={defaultValue || ""}
        autoComplete={type === "password" ? "off" : ""}
        name={name}
        className={`border border-slate-400 dark:text-black outline-none py-1 px-3 text-base rounded-md w-full ${inputStyle}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
