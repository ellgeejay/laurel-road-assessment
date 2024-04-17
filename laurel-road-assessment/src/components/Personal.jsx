import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../features/form/formSlice';
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
      <h2>Personal</h2>
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
        <br />

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
        <br />
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
        <br />
        {/* ran into an issue where because this is a button element and not a form element, the "required" attribute on the input fields is not sticking. I tried adding a handleSubmit function that I passed to the form, but it would not retain the data entered as new state and would not display on the final confirmation page. It does work on occasion, but is not consistent */}
        <button type='submit'>
          <Link to='/education'>Next</Link>
        </button>
      </form>
    </div>
  );
}

export default Personal;
