import Counter from './renderProps/Counter';
import HoverCounter from './countersForRenderProps/HoverCounter';
import themeContext from '../contexts/themeContext';
import { Component, useContext } from 'react';

// Get context by contextType in class component
export default class Content extends Component {
    componentDidMount() {
        console.log(this.context);
    }
    render() {
        console.log('Content rendered');
        const {theme,switchTheme} = this.context;
        return (
            <div>
                <h1>This is a content</h1>
                <Counter>
                    {(count,incrementCount) => 
                        // <themeContext.Consumer>
                            // {({theme,switchTheme}) => 
                                <HoverCounter count={count} 
                                    theme={theme}
                                    switchTheme={switchTheme}
                                    incrementCount={incrementCount}
                                />
                            // }
                        // </themeContext.Consumer>
                    }
                </Counter>
            </div>
        );
    }
}

Content.contextType = themeContext;



// Get context by useContext hook in function component
// export default function Content() {
//     const context = useContext(themeContext);
//     const {theme,switchTheme} = context;
//     return (
//         <div>
//             <h1>This is a content</h1>
//             <Counter>
//                 {(count,incrementCount) => 
//                     // <themeContext.Consumer>
//                         // {({theme,switchTheme}) => 
//                             <HoverCounter count={count} 
//                                 theme={theme}
//                                 switchTheme={switchTheme}
//                                 incrementCount={incrementCount}
//                             />
//                         // }
//                     // </themeContext.Consumer>
//                 }
//             </Counter>
//         </div>
//     );
// }