import { useCallback } from 'react';
import { getSdkInstance } from '@/utils/sdk';
import { SDKEventType } from '@/interface/event';
import logo from './logo.svg';
import style from './App.module.less';

function App() {
    const onClick = useCallback(() => {
        const sdk = getSdkInstance();
        sdk.emit(SDKEventType.MESSAGE, 'hello');
    }, []);

    return (
        <div className={style.app}>
            <header className={style.appHeader}>
                <img src={logo} className={style.appLogo} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className={style.appLink}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <button className={style.button} onClick={onClick}>send message</button>
            </header>
        </div>
    );
}

export default App;
