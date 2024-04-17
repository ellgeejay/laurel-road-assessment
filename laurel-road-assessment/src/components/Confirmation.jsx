import { useSelector } from 'react-redux';

function Confirmation() {
  const formState = useSelector((state) => state.form);

  return (
    <div>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
  );
}

export default Confirmation;
