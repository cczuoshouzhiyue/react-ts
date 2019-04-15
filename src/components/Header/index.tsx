import * as React from 'react';
import { NavLink, withRouter} from 'react-router-dom'
import './index.less';

const menuList = [
    {path: '/home', name: '首页'},
    {path: '/unerad', name: '未读消息'},
    {path: '/getting', name: '新手入门'},
    {path: '/api', name: 'API'},
    {path: '/about', name: '关于'},
    {path: '/setting', name: '设置'},
];

class Header extends React.Component<any> {
    public state = {
      currentRouter: ''
    };
    public componentWillMount(): void {
        const { location } = this.props;
        if (location && location.pathname && location.pathname === '/') {
            this.setState({
                currentRouter: menuList[0].path
            });
        }
    }

    public componentWillReceiveProps(nextProps:any): void {
        const { location} = nextProps;
        this.setState({
            currentRouter: location.pathname
        });
    }

    public render() {
        const { currentRouter } = this.state;
        const menuNode = () => menuList.map(item =>  <li key={ item.path }><NavLink to={item.path} className={currentRouter === item.path ? 'active': ''}>{item.name}</NavLink></li>)
        return (
           <header>
               <div>
                   <div className='brand'>
                       <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt=""/>
                   </div>
                   <div className='search'>
                       <a><input type="text"/> </a>
                   </div>
                   <div className='menu'>
                       <ul>
                         { menuNode() }
                           <li>退出</li>
                       </ul>
                   </div>
               </div>

           </header>
        );
    }
}
export default withRouter(Header)