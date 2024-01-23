import { create } from 'zustand';
import { get, merge, noop } from 'lodash';

export interface ConfigState {
    config: SdkConfig;
    setConfig: (config: SdkConfig) => void;
};


const useConfigStore = create<ConfigState>((set, get) => ({
    config: {
        onMessage: noop,
        logger: noop
    },
    setConfig: config => {
        const newConfig = merge({}, get().config, config);
        set({
            config: newConfig
        });
    },
    onMessage: noop
}));

export function getConfig(): SdkConfig;
export function getConfig<K extends keyof SdkConfig>(key: K): SdkConfig[K];
export function getConfig<K extends keyof SdkConfig>(key?: K): SdkConfig | SdkConfig[K];
export function getConfig<K extends keyof SdkConfig>(key?: K): SdkConfig | SdkConfig[K] {
    const config = useConfigStore.getState().config;
    if (key) {
        return get(config, key);
    }
    return config;
};

export const setConfig = (config: SdkConfig) => {
    return useConfigStore.getState().setConfig(config);
};

export default useConfigStore;