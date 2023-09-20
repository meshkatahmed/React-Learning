import {memo} from 'react';

function Title() {
    console.log('Rendering title...');
    return <h2>useCallback Hook Tutorial</h2>
}

export default memo(Title);