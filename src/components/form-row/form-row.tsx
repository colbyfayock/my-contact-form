import styles from './form-row.module.scss';

export interface FormRowProps {
    className?: string;
    children?: Array<JSX.Element> | JSX.Element | string;
}

export const FormRow = ({ className, children }: FormRowProps) => {
    return <div className={`${styles.root} ${className}`}>{ children }</div>;
};
