interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'primary'
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base = 'flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  }

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}
