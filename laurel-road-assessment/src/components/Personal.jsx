import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../features/formSlice';

function Personal() {
  const formState = useSelector((state) => state.form);
  const dispatch = useDispatch();

  // updating formState
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  // need to make it so that the user both goes to the next page and has their formState from this page stored to be displayed on confirmation page later
  const handleClick = () => {};

  return (
    <div>
      <form>
        <label>
          First Name:
          <input
            required
            type='text'
            name='firstName'
            value={formState.firstName}
            onChange={handleChange}
          />
        </label>

        <label>
          Last Name:
          <input
            required
            type='text'
            name='lastName'
            value={formState.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Age:
          <input
            required
            type='text'
            name='age'
            value={formState.age}
            onChange={handleChange}
          />
        </label>
        <button
          type='submit'
          onClick={handleClick}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default Personal;
