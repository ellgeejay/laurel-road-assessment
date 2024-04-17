import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../features/formSlice';

function Income() {
  const formState = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  const handleClick = () => {};

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

export default Income;
