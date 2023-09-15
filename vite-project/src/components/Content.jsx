import Counter from './renderProps/Counter';
import HoverCounter from './countersForRenderProps/HoverCounter';
import themeContext from '../contexts/themeContext';

export default function Content() {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(count,incrementCount) => {
                    return <themeContext.Consumer>
                                {({theme,switchTheme}) => 
                                    <HoverCounter count={count} 
                                        theme={theme}
                                        switchTheme={switchTheme}
                                        incrementCount={incrementCount}
                                    />
                                }
                            </themeContext.Consumer>
                }}
            </Counter>
        </div>
    );
}
