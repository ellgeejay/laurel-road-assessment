import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../features/form/formSlice';
import { Link } from 'react-router-dom';

function Education() {
  const formState = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
    console.log(value);
  };

  return (
    <div>
      <h2>Education</h2>
      <form>
        <label>
          School Name:
          <input
            required
            type='text'
            name='schoolName'
            value={formState.schoolName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Graduation Year
          <input
            required
            type='text'
            name='gradYear'
            value={formState.gradYear}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type='submit'>
          <Link to='/income'>Next</Link>
        </button>
      </form>
    </div>
  );
}

export default Education;
