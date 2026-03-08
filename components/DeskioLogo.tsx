interface Props {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function DeskioLogo({ size = 'md', className = '' }: Props) {
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-3xl' : 'text-lg'
  const dotSize = size === 'sm' ? 'w-1 h-1' : size === 'lg' ? 'w-2 h-2' : 'w-1.5 h-1.5'
  const dotOffset = size === 'sm' ? '-top-1' : size === 'lg' ? '-top-2' : '-top-1.5'

  return (
    <span className={`font-bold tracking-tight select-none ${textSize} ${className}`}>
      <span className="text-white">Desk</span>
      <span className="text-brand-400 relative">
        {/* "i" with custom glowing dot replacing the normal dot */}
        <span className="relative inline-block">
          {/* Dotless i — using font-variant or a simple workaround */}
          <span style={{ letterSpacing: 0 }}>ı</span>
          {/* Glowing purple dot */}
          <span
            className={`absolute left-1/2 -translate-x-1/2 ${dotOffset} ${dotSize} rounded-full bg-brand-400 shadow-[0_0_6px_2px_rgba(139,92,246,0.8)] animate-pulse`}
          />
        </span>
        o
      </span>
    </span>
  )
}
