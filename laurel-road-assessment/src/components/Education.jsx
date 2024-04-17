import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../features/formSlice';

function Education() {
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
          School Name:
          <input
            type='text'
            name='schoolName'
            value={formState.schoolName}
            onChange={handleChange}
          />
        </label>

        <label>
          Graduation Year
          <input
            type='text'
            name='gradYear'
            value={formState.gradYear}
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

export default Education;
