
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { Button } from './components/button/button';

function App() {
    return (
        <div className={styles.App}>
            <form>
                <Label htmlFor={'name'}>Name</Label><Input name={'name'} id={'name'} />
                <Label htmlFor={'email'}>Email</Label>
                <Input name="email" id="email" />
                <Label htmlFor="message">Message</Label>
                <Input id="message" name="message" />
                <Button>Submit</Button>
            </form>
        </div>
    );
}

export default App;
