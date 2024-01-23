import AiChat from '@/Entry';

const sdk: any = {};
export const setSdkInstance = (instance: AiChat) => {
    sdk.instance = instance;
};

export const getSdkInstance = (): AiChat => {
    return sdk.instance;
};