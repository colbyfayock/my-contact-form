import styles from './label.module.scss';

export interface LabelProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element> | string;
    htmlFor?: string;
}

export const Label = ({ children, className, htmlFor }: LabelProps) => {
    return <div className={`${styles.root} ${className}`}><label htmlFor={htmlFor} className={styles.label}>{ children }</label>
    </div>;
};