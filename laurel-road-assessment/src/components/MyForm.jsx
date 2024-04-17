import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../features/formSlice';

function MyForm() {
  const formState = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  return (
    <div>
      <form>
        <label>
          First Name:
          <input
            type='text'
            name='firstName'
            value={formState.firstName}
            onChange={handleChange}
          />
        </label>

        <label>
          Last Name:
          <input
            type='text'
            name='lastName'
            value={formState.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Age:
          <input
            type='text'
            name='age'
            value={formState.age}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Next</button>
      </form>
    </div>
  );
}

export default MyForm;
