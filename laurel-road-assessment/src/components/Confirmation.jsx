import { useSelector } from 'react-redux';

function Confirmation() {
  const formState = useSelector((state) => state.form);

  return (
    // allows for collected information to be displayed in JSON format, <pre> tags are to preserve the format
    <div>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
  );
}

export default Confirmation;
