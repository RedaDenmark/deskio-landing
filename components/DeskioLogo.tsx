interface Props {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function DeskioLogo({ size = 'md', className = '' }: Props) {
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-3xl' : 'text-lg'

  return (
    <span className={`font-bold tracking-tight select-none ${textSize} ${className}`}>
      <span className="text-white">Desk</span>
      <span className="text-brand-400">
        <span className="relative inline-block" style={{ lineHeight: 'inherit' }}>
          <span>i</span>
          {/* Blurred purple glow layer */}
          <span
            className="absolute animate-pulse"
            style={{
              width: '0.35em',
              height: '0.35em',
              top: '-0.05em',
              left: '50%',
              transform: 'translateX(-50%)',
              borderRadius: '50%',
              background: 'rgba(139,92,246,0.5)',
              filter: 'blur(3px)',
              pointerEvents: 'none',
            }}
          />
          {/* Small solid core dot */}
          <span
            className="absolute"
            style={{
              width: '0.13em',
              height: '0.13em',
              top: '0.04em',
              left: '50%',
              transform: 'translateX(-50%)',
              borderRadius: '50%',
              background: '#a78bfa',
              pointerEvents: 'none',
            }}
          />
        </span>
        o
      </span>
    </span>
  )
}
