import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../features/formSlice';
import { Link } from 'react-router-dom';

function Personal() {
  // creating variable to grab state
  const formState = useSelector((state) => state.form);
  const dispatch = useDispatch();

  // updating formState
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
        <button type='submit'>
          {/* creating a link to our next page/component */}
          <Link to='/education'>Next</Link>
        </button>
      </form>
    </div>
  );
}

export default Personal;
