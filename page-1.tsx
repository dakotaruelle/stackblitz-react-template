import { Nav } from './nav';

export function Page1() {
  return (
    <div>
      <Nav />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ color: 'white' }}>Page 1</h1>
      </div>
    </div>
  );
}
