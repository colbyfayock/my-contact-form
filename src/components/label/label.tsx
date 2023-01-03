import styles from './label.module.scss';

export interface LabelProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element> | string;
    htmlFor?: string;
}

export const Label = ({ children, className }: LabelProps) => {
    return <div className={`${styles.root} ${className}`}><label>{ children }</label>
    </div>;
};