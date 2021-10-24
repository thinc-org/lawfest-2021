export const PrevArrow = (props: any) => {
  if (props?.className?.includes('slick-disabled')) return <></>
  return (
    <svg
      width="19"
      height="23"
      viewBox="0 0 19 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 20.5L3.37025 11.8678C2.74143 11.4696 2.75255 10.5485 3.39081 10.1655L17 2"
        stroke="#683F19"
        stroke-width="4"
      />
    </svg>
  )
}
