const IconSetaBaixoSolido = (props) => {
    return (
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"

            className={props.className}
            width={props.width}
            height={props.height}
            onClick={props.onClick}
            color={props.color}
            onMouseOver={props.onMouseOver}
            onMouseOut={props.onMouseOut}
        >
            <path d="M4.5 2A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2h-15Zm8.125 5.625v7.241l2.682-2.684a.627.627 0 0 1 .885.886l-3.75 3.75a.625.625 0 0 1-.885 0l-3.75-3.75a.626.626 0 1 1 .886-.886l2.682 2.684V7.625a.625.625 0 1 1 1.25 0Z"></path>
        </svg>
    )
}

export default IconSetaBaixoSolido