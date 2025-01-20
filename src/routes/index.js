import {lazy} from 'react';
function patchRoutes(params) {
    
}
const userSubfix = '/user'
import AnalysisContainer from 'app/modules/Container';

const routes = [
    {
        path: '/fc/datacenter', // 属于数据报告的，对应header
        component: AnalysisContainer,
        children: [
            {
                name: 'analysis',
                path: `share/analysis/${userSubfix}`,
                component: lazy(() => import('app/container/main.js'))
            }
        ]
    }
];

export default patchRoutes(routes);
