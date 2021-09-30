export interface Route {
    path: string;
    title: string;
    exact: boolean;
    component: any;
    props?: any;
}
