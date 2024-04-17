import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../features/formSlice';
import { Link } from 'react-router-dom';

function Income() {
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
          Annual Income:
          <input
            required
            type='text'
            name='annualIncome'
            value={formState.annualIncome}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Job Title:
          <input
            required
            type='text'
            name='jobTitle'
            value={formState.jobTitle}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type='submit'>
          <Link to='/confirmation'>Next</Link>
        </button>
      </form>
    </div>
  );
}

export default Income;
