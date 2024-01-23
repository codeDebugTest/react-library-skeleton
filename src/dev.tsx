import SDK from './Entry';
import { SDKEventType } from '@/interface/event';

const sdk = new SDK({});
sdk.render(document.getElementById('root') as HTMLElement);

sdk.on(SDKEventType.MESSAGE, data => {
    window.alert(`accept message: ${data}`);
});