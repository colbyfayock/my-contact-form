
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { Button } from './components/button/button';
import { FormRow } from './components/form-row/form-row';
import { RiSendPlaneFill } from 'react-icons/ri';

function App() {
    return (
        <div className={styles.App}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>Have a question? Fill out the form below and we&apos;ll get back to you as soon as we can.</p>
            <p className={styles.note}>All fields are required</p>
            <form className={styles.form}>
                <FormRow>
                    <Label htmlFor={'name'}>Name</Label>
                    <Input name={'name'} id={'name'} /></FormRow>
                <FormRow>
                    <Label htmlFor={'email'}>Email</Label>
                    <Input id={'email'} name={'email'} />
                </FormRow>
                <FormRow>
                    <Label htmlFor="message">Message</Label>
                    <Input id="message" name={'message'} />
                </FormRow>
                <FormRow>
                    <Button>
                        <RiSendPlaneFill className={styles['submit-icon']} />Submit</Button>
                </FormRow>
            </form>
        </div>
    );
}

export default App;
