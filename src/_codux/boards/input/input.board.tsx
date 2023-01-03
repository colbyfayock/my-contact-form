import { createBoard } from '@wixc3/react-board';
import { Input } from '../../../components/input/input';

export default createBoard({
    name: 'Input',
    Board: () => <Input />
});
