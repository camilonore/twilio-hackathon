const Cam = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={48} width={48} fill='white'stroke='white' {...props}>
    <path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h26q1.2 0 2.1.9.9.9.9 2.1v10.75l8-8v20.5l-8-8V37q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h26V11H7v26Zm0 0V11v26Z" />
  </svg>
)

const CamOff = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={48} width={48} fill='white' stroke='white'{...props}>
    <path d="m44 34.25-8-8v5.55l-3-3V11H15.2l-3-3H33q1.2 0 2.1.9.9.9.9 2.1v10.75l8-8Zm-1.6 12.4-7.4-7.4q-.4.35-.925.55-.525.2-1.075.2H7q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-.6.225-1.1.225-.5.525-.9l-2.8-2.8 2.1-2.1L44.5 44.55ZM7 37h25.75L7 11.25V37Zm17.2-17Zm-4.35 4.1Z" />
  </svg>
)

export { Cam, CamOff }
