/// <reference types="vite/client" />
declare module "*.ts"
declare module "*.tsx"
interface Window{
    __REDUX_DEVTOOLS_EXTENSION__:function;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function;
}