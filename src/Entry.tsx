import React, { createRef } from 'react';
import EventEmitter from 'eventemitter3';
import { setConfig, getConfig } from '@/zustand/useConfigStore';
import { SDKEventType } from '@/interface/event';
import { setSdkInstance } from '@/utils/sdk';
import { render, unmount } from '@/utils/render';
import App from './App';


export default class ReactLibSDK extends EventEmitter<SDKEventType> {
    sdkRef: React.RefObject<any>;
    container: HTMLElement;

    constructor(config: SdkConfig) {
        super();
        setConfig(config);
        setSdkInstance(this);

        this.sdkRef = createRef();
        this.container = document.createElement('div');
    }
    getConfig(key?: keyof SdkConfig) {
        return getConfig(key);
    }
    setConfig(config: SdkConfig) {
        setConfig(config);
    }
    render(target: HTMLElement) {
        this.container = target;
        render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            target
        );
    }
    unmount() {
        unmount(this.container);
    }

}
