interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export function InputField({
  icon,
  className = "",
  ...props
}: InputFieldProps) {
  return (
    <div className={`relative flex items-center`}>
      <input
        className={`w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50 ${
          icon ? "pr-9" : ""
        } ${className}`}
        {...props}
      />
      {icon && (
        <div className="absolute right-3 text-gray-400 pointer-events-none">
          {icon}
        </div>
      )}
    </div>
  );
}
