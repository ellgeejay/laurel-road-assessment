import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function ActiveLastBreadcrumb() {
  const location = useLocation();

  // using current location in application to highlight current component by name
  return (
    <div
      role='presentation'
      onClick={handleClick}
    >
      <Breadcrumbs aria-label='breadcrumb'>
        <span
          style={{
            fontWeight: location.pathname === '/' ? 'bold' : 'normal',
          }}
        >
          <Link
            underline='hover'
            color='inherit'
            href='/'
          >
            Personal
          </Link>
        </span>
        <span
          style={{
            fontWeight: location.pathname === '/education' ? 'bold' : 'normal',
          }}
        >
          <Link
            underline='hover'
            color='inherit'
            href='/education'
          >
            Education
          </Link>
        </span>
        <span
          style={{
            fontWeight: location.pathname === '/income' ? 'bold' : 'normal',
          }}
        >
          <Link
            underline='hover'
            color='inherit'
            href='/income'
          >
            Income
          </Link>
        </span>
        <span
          style={{
            fontWeight:
              location.pathname === '/confirmation' ? 'bold' : 'normal',
          }}
        >
          <Link
            underline='hover'
            color={'inherit'}
            href='/confirmation'
          >
            Confirmation
          </Link>
        </span>
      </Breadcrumbs>
    </div>
  );
}

export default ActiveLastBreadcrumb;
