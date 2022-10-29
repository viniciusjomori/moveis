const IconNenhumResultado = (props) => {
    return (
        <svg 
            className={props.className}
            width={props.width}
            height={props.height}
            onClick={props.onClick}
            color={props.color}
            onMouseOver={props.onMouseOver}
            onMouseOut={props.onMouseOut}

            fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.845 14.255h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23 6.5 6.5 0 0 0-6.5-6.5c-3.42 0-6.22 2.64-6.47 6h2.02c.25-2.25 2.13-4 4.45-4 2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5c-.17 0-.33-.03-.5-.05v2.02c.17.02.33.03.5.03 1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5Z"></path>
            <path d="m7.815 11.075-2.47 2.47-2.47-2.47-.71.71 2.47 2.47-2.47 2.47.71.71 2.47-2.47 2.47 2.47.71-.71-2.47-2.47 2.47-2.47-.71-.71Z"></path>
        </svg>
    )
}

export default IconNenhumResultado