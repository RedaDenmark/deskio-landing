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
          {/* Glow layer */}
          <span style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            transform: 'translate(-50%, -40%)',
            width: '0.32em',
            height: '0.32em',
            borderRadius: '50%',
            background: 'rgba(167,139,250,0.8)',
            filter: 'blur(4px)',
            opacity: 0.6,
            pointerEvents: 'none',
          }} />
          {/* Core dot */}
          <span style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            transform: 'translate(-50%, -40%)',
            width: '0.12em',
            height: '0.12em',
            borderRadius: '50%',
            background: '#c4b5fd',
            pointerEvents: 'none',
          }} />
        </span>
        o
      </span>
    </span>
  )
}
