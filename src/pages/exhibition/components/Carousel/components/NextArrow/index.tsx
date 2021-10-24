export const NextArrow = (props: any) => {
  if (props?.className?.includes('slick-disabled')) return <></>
  return (
    <svg
      width="18"
      height="23"
      viewBox="0 0 18 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.75 2.25L15.3797 10.8822C16.0086 11.2804 15.9974 12.2015 15.3592 12.5845L1.75 20.75"
        stroke="#683F19"
        stroke-width="4"
      />
    </svg>
  )
}
