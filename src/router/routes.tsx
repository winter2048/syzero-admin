import Test1 from '../pages/test1';
import Test2 from '../pages/test2';
import React, { Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { matchPath, Router,RouteComponentProps, SwitchProps, match } from "react-router"

export interface RouteConfigComponentProps<Params extends { [K in keyof Params]?: string } = {}>
    extends RouteComponentProps<Params> {
    route?: RouteConfig | undefined;
}

export interface RouteConfig {
    key?: React.Key | undefined;
    location?: Location | undefined;
    component?: React.ComponentType<RouteConfigComponentProps<any>> | React.ComponentType | undefined;
    path?: string | string[] | undefined;
    exact?: boolean | undefined;
    strict?: boolean | undefined;
    routes?: RouteConfig[] | undefined;
    render?: ((props: RouteConfigComponentProps<any>) => React.ReactNode) | undefined;
    [propName: string]: any;
}

export interface MatchedRoute<
    Params extends { [K in keyof Params]?: string },
    TRouteConfig extends RouteConfig = RouteConfig
> {
    route: TRouteConfig;
    match: match<Params>;
}

const routes : RouteConfig[] = [
    {
        path: '/test1',
        component: Test1
    },
    {
        path: '/test2',
        component: Test2
    }
];

// 实现react-router-config里的renderRoutes方法
function renderRoutes (routes: RouteConfig[], extraProps:any = {}, switchProps:any = {}) {
    return routes ? (
        <Suspense fallback={<div>页面加载中...</div>}>
            <Switch {...switchProps}>
                {routes.map((route, i) => (
                    <Route
                        key={route.key || i}
                        path={route.path}
                        exact={route.exact}
                        strict={route.strict}
                        component={route.component}
                    />
                ))}
            </Switch>
        </Suspense>
    ) : null;
}

// // 实现react-router-config里的matchRoutes方法
// function matchRoutes (routes: RouteConfig[], pathname:string, /*not public API*/ branch:string[] = []) {
//     routes.some(route => {
//         const match = route.path
//             ? matchPath(pathname, route)
//             : branch.length
//                 ? branch[branch.length - 1].match // use parent match
//                 : Router.computeRootMatch(pathname); // use default "root" match
        
//                 if (match) {
//             branch.push({ route, match });

//             if (route.routes) {
//                 matchRoutes(route.routes, pathname, branch);
//             }
//         }
//         return match;
//     });
//     return branch;
// }

export { routes, renderRoutes }