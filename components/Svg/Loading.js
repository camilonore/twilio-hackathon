const Loading = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      background: 'transparent',
      display: 'block'
    }}
    width={40}
    height={40}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      r={30}
      stroke="rgba(NaN, NaN, NaN, 0)"
      strokeWidth={10}
      fill="none"
    />
    <circle
      cx={50}
      cy={50}
      r={30}
      stroke="#5877dd"
      strokeWidth={8}
      strokeLinecap="round"
      fill="none"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;180 50 50;720 50 50"
        keyTimes="0;0.5;1"
      />
      <animate
        attributeName="stroke-dasharray"
        repeatCount="indefinite"
        dur="1s"
        values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882"
        keyTimes="0;0.5;1"
      />
    </circle>
  </svg>
)

export { Loading }
