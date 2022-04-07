import './backArrow.css'

const styles_hover = {
  transform: 'translate(90.424 14) rotate(90)',
  d: "M18,7.5V97.924",
  transform5: "translate(-7.5 60.487)",
  transition: 'all 1s'
}

const BackArrowHover = (props) => {

  return (
    < div className='arrow' >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        width={91.424}
        height={35.706}
        viewBox="0 0 90.924 35.706"
      >
        <g id="Back" transform="translate(0.5)">
          <g
            id="Icon_feather-arrow-down"
            data-name="Icon feather-arrow-down"
            transform={styles_hover.transform}
          >
            <path
              id="Trazado_4"
              data-name="Trazado 4"
              d={styles_hover.d}

              transform="translate(-7.5 -7.5)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
            />
            <path
              id="Trazado_5"
              data-name="Trazado 5"
              d="M28.5,18,18,29.937,7.5,18"
              transform={styles_hover.transform5}
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
            />
          </g>

          <text
            id="Back-2"
            data-name="Back"
            overflow={'visible'}
            transform="translate(55.424 17)"
            fill="#fff"
            fontSize={20}
            fontFamily="CutiveMono-Regular, Cutive Mono"
            letterSpacing="0.347em"
            className='textArrow'
          >
            <tspan style={{ userSelect: 'none' }} x={-34.629} y={0}>
              {"Back"}
            </tspan>
          </text>
        </g>
      </svg>
    </div >
  )


};

export default BackArrowHover