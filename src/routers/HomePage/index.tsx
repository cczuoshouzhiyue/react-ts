import * as React from 'react';
import {getTopics} from "../../Api/homePage";

class HomePage extends React.Component {
    public state = {
        cnt: 0
    };
    public componentDidMount(): void {
        const params = {
            limit: 20,
            mdrende: false,
            page: 1,
            tab: 'all',
        };
        getTopics(params)
    }
    public render() {
        return (
            <>
                这是首页
            </>
        );
    }
}

export default HomePage;
