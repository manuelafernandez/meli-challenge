import { Route } from '../../../interfaces/route';
import PATHS from './paths';

import Home from '../../screens/Home';
import Results from '../../screens/Results';
import Error from '../../screens/Error';
import Item from '../../screens/Item';

const ROUTES: Route[] = [
    {
        path: PATHS.default,
        title: 'Home',
        component: Home,
        exact: true,
    },
    {
        path: PATHS.itemsSearch,
        title: 'Search Results',
        component: Results,
        exact: true,
    },
    {
        path: PATHS.itemDetail,
        title: 'Item Detail',
        component: Item,
        exact: true,
    },
    {
        path: PATHS.error,
        title: 'Sin resultados',
        component: Error,
        exact: true,
    },
]

export default ROUTES;