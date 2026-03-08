interface Props {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function DeskioLogo({ size = 'md', className = '' }: Props) {
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-3xl' : 'text-lg'

  return (
    <span className={`font-bold tracking-tight select-none ${textSize} ${className}`}>
      <span className="text-white">Desk</span>
      <span className="text-brand-400 relative">
        <span className="relative inline-block">
          <span className="relative">i</span>
          {/* Glowing dot — tightly above the i's natural dot position */}
          <span
            className="absolute left-1/2 -translate-x-1/2 -top-[0.05em] w-[0.15em] h-[0.15em] rounded-full bg-brand-400 shadow-[0_0_5px_2px_rgba(139,92,246,0.8)] animate-pulse"
          />
        </span>
        o
      </span>
    </span>
  )
}
