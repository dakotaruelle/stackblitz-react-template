import { Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

export function Nav() {
  return (
    <Fragment>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link
          to="/page-1"
          style={{ marginRight: '20px', marginBottom: '10px' }}
        >
          <Button>Page 1</Button>
        </Link>
        <Link to="/page-2">
          <Button>Page 2</Button>
        </Link>
      </div>

      <Divider />
    </Fragment>
  );
}
