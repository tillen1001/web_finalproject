import chenWeb from './chenWeb';
import { Home, MessageBoard, Web, Mobile } from './Pages';
const rootPath = process.env.PUBLIC_URL;

const routes = [
  {
    path: `${rootPath}/`,
    component: Home,
    exact: true,
    breadcrumbName: 'Home'
  },
  {
    path: `${rootPath}/MessageBoard`,
    component: MessageBoard,
    breadcrumbName: 'MessageBoard',
    routes: [
      {
        path: `${rootPath}/MessageBoard`,
        component: MessageBoard,
      }
    ]
  },
  {
    path: `${rootPath}/Web`,
    component: Web,
    breadcrumbName: 'Web',
    routes: [
      {
        path: `${rootPath}/Web/B0829031`,
        component: Mobile,
        breadcrumbName: '繆緹綸的網頁'
      },
      {
        path: `${rootPath}/Web/B0829042`,
        component: chenWeb,
        breadcrumbName: '陳星潔的網頁'
      }
      
    ]
  }
];

export default routes;
export { rootPath };
