import { FunctionalComponent } from 'preact';
import { ButtonProps } from './types';

const Button: FunctionalComponent<ButtonProps> = (props) => {
    const { children, onClick, className } = props;

    return (
        <button
            onClick={onClick}
            type="button"
            className={[
                'inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                className,
            ].join(' ')}
        >
            {children}
        </button>
    );
};

export default Button;
