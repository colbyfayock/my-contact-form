import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element> | string;
}

export const Button = ({ children, className }: ButtonProps) => {
    return <div className={`${styles.root} ${className}`}>
        <button className={styles.button}>{children}</button></div>;
};
