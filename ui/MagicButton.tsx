import React from 'react'

const MagicButton = ({title, icon, position, handleClick, otherClasses} : {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-px focus:outline-none md:w-60 md:mt-10 group active:scale-95 transition-all" onClick={handleClick}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FBBF24_0%,#EA580C_50%,#FBBF24_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-background px-7 py-1 text-sm font-medium text-foreground backdrop-blur-3xl gap-2 transition-colors">
            {position == 'left' && icon}
            {title}
            {position == 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButton