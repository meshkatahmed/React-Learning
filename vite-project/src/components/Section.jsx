import { Component } from 'react';
import Content from './Content';

export default class Section extends Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        console.log('Section rendered');
        return (
            <div>
                <h1>This is a section</h1>
                <Content/>
            </div>
        );
    }
}