import { FC, StyleHTMLAttributes } from 'react'

interface IButton {
    children: string;
    onclick?: () => void;
    classname?: string;
    style?: StyleHTMLAttributes<string>;
}

const Button: FC<IButton> = ({ children, onclick, classname, style }) => {
    return (
        <button
            onClick={onclick}
            className={`py-2 lg:py-4 px-8 lg:px-11 bg-blue rounded-2xl lg:rounded-3xl text-lg font-semibold text-light cursor-pointer transition hover:opacity-85 ${classname}`}
            style={style}
        >
            {children}
        </button>
    )
}

export default Button