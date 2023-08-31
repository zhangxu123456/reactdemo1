import {inject,observer} from 'mobx-react';
import {IReactComponent} from 'mobx-react/dist/types/IReactComponent';

import {LoginStateManager} from '@App/stateManager/store/Login';

export class RootStateManager{
    public loginStateManager:LoginStateManager;
    constructor (){
        this.loginStateManager = new LoginStateManager()
    }
}

export const connect = (component:IReactComponent,providerCallback?:(rootState:RootStateManager) => {[key:string]: unknown}) => {
    const injectProvider = providerCallback ? inject<{}>
}


export const rootState = new RootStateManager()