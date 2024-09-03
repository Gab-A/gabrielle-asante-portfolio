export default function Input({
  label,
  type,
  htmlFor,
  id,
  name,
  value,
  autoComplete,
  placeholder,
  textarea,
  error,
  ...rest
}) {
  const classes =
    "w-full border-[1px] border-[#828FA366] py-2 rounded-md pl-2 focus:border-violet-300 focus:border-[1px] outline-none placeholder:text-[15.5px]";

  return (
    <div className="flex flex-col space-y-2 mb-6">
      <div>
        <label htmlFor={htmlFor} className="font-medium text-[15.5px]">
          {label}
        </label>
      </div>
      <div>
        {textarea ? (
          <textarea
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            value={value}
            id={id}
            rows="6"
            className={classes}
            {...rest}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            autoComplete={autoComplete}
            placeholder={placeholder}
            className={classes}
            {...rest}
          />
        )}
        {error && <p className="text-red-500 mt-1.5 ml-0.5">{error}</p>}
      </div>
    </div>
  );
}
