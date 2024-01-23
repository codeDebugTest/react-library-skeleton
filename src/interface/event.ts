import EventEmitter from 'eventemitter3';

export enum SDKEventType {
    MESSAGE = 'message'
};

export interface SDKMessage extends EventEmitter {
    data?: any;
    error?: {
        code: number;
        message: string;
    };
}

export interface SDKEventPayloadType {
    [SDKEventType.MESSAGE]: SDKMessage;
}
