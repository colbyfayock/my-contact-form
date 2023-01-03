import { createBoard } from '@wixc3/react-board';
import { FormRow } from '../../../components/form-row/form-row';

export default createBoard({
    name: 'FormRow',
    Board: () => <FormRow />
});
