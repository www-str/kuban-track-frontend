import { StyleHTMLAttributes } from 'react'

interface IInput {
    classname?: string;
    style?: StyleHTMLAttributes<string>;
    placeholder?: string;
    value: string;
    setValue: (e: string) => void;
    type: 'password' | 'text';
}

const Input = ({ placeholder, classname, style, value, setValue, type }: IInput) => {

    return (
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={style}
            type={type}
            placeholder={placeholder}
            className={`w-full max-w-80 px-6 py-4
                  border-2 border-blue rounded-3xl
                  text-dark outline-none ${classname}`}
        />
    )
}

export default Input