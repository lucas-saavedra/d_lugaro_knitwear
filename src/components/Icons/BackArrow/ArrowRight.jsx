
const BackArrowInversed = (props) => {

    return (
        <div >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={93.575}
                height={35.706}
                viewBox="0 0 93.575 35.706"
                {...props}
            >
                <g id="Back" transform="translate(0.5)">
                    <text
                        style={{ userSelect: 'none' }}
                        id="Back-2"
                        data-name="Back"
                        transform="translate(35 17)"
                        fill="#fff"
                        fontSize={20}
                        fontFamily="CutiveMono-Regular, Cutive Mono"
                        letterSpacing="0.347em"
                    >
                        <tspan x={-34.629} y={0}>
                            {"Back"}
                        </tspan>
                    </text>
                    <g
                        id="Icon_feather-arrow-down"
                        data-name="Icon feather-arrow-down"
                        transform="translate(0 35) rotate(-90)"
                    >
                        <path
                            id="Trazado_4"
                            data-name="Trazado 4"
                            d="M18,7.5v92.575"
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
                            transform="translate(-7.5 62.637)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default BackArrowInversed;
