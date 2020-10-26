import { r as react } from '../_shared/node_modules/react-389b5361.js';
import '../_shared/node_modules/object-assign-c47a16a6.js';

// console.log({React, useRouteData, useQuery})
function meta() {
  return {
    title: 'Kifs Directory',
    description: 'KCD Gifs you can use on the KCD Discord'
  };
}

function Index() {
  const [search, setSearch] = react.useState(''); // const [{data, error}] = useRouteData()
  // useErrorHandler(error)

  return 'hello';
}

export default Index;
export { meta };
