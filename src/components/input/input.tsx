import styles from './input.module.scss';

export interface InputProps {
    className?: string;
    name?: string;
    id?: string;
}

export const Input = ({ className, id, name }: InputProps) => {
    return <div className={`${styles.root} ${className}`}>
        <input id={id} name={name} />
    </div>;
};
