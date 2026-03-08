interface Props {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

// 4-point spark SVG — replaces the dot on the "i"
function Spark({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 10 10"
      style={{
        position: 'absolute',
        left: '50%',
        top: 0,
        transform: 'translate(-50%, -75%)',
        width: '0.45em',
        height: '0.45em',
        overflow: 'visible',
        pointerEvents: 'none',
      }}
    >
      {/* 4-point star path */}
      <path
        d="M5 0 L5.6 3.8 L10 5 L5.6 6.2 L5 10 L4.4 6.2 L0 5 L4.4 3.8 Z"
        fill={color}
      />
    </svg>
  )
}

export default function DeskioLogo({ size = 'md', className = '' }: Props) {
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-3xl' : 'text-lg'

  return (
    <span className={`font-bold tracking-tight select-none ${textSize} ${className}`}>
      <span className="text-white">Desk</span>
      <span className="text-brand-400">
        <span className="relative inline-block" style={{ lineHeight: 'inherit' }}>
          <span>i</span>
          <Spark color="#a78bfa" />
        </span>
        o
      </span>
    </span>
  )
}
