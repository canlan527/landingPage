interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className='', onClick }: ButtonProps)  {
  return (
    <>
      <button className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border dark:bg-violet-600 bg-violet-600 ${className}`} onClick={onClick}>
        {children}
      </button>
    </>
  )
}
