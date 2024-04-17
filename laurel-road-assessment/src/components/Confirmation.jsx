import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../features/formSlice';

function Confirmation() {
  const formState = useSelector((state) => state.form);

  return console.log(formState);
}
