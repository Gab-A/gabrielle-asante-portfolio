export default function Input({
  label,
  type,
  name,
  value,
  placeholder,
  textarea,
  error,
  ...rest
}) {
  return (
    <div className="flex flex-col space-y-2 mb-6">
      <div>
        <label className="font-medium">{label}</label>
      </div>
      <div>
        {textarea ? (
          <textarea
            name={name}
            value={value}
            rows="6"
            className="w-full border-[1px] border-[#828FA366] py-2 rounded-md pl-2 focus:border-violet-300 focus:border-[1px] outline-none"
            {...rest}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            className=" w-full border-[1px] border-[#828FA366] py-2 rounded-md pl-2 focus:border-violet-300 focus:border-[1px] outline-none"
            {...rest}
          />
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}
