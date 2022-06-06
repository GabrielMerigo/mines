import renderer from 'react-test-renderer';
import Field from './index'



it('should have background: #777 and border-color: #555 when be opened', () => {
  expect(renderer.create(<Field />))
});

