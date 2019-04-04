import * as React from 'react';
import { NavLink } from 'react-router-dom'
import './index.less';
class Header extends React.Component {
    public render() {
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
                           <li><NavLink to='/home'>首页</NavLink></li>
                           <li><NavLink to='/unerad'>未读消息</NavLink></li>
                           <li><NavLink to='/getting'>新手入门</NavLink></li>
                           <li><NavLink to='/api'>API</NavLink></li>
                           <li><NavLink to='/about'>关于</NavLink></li>
                           <li><NavLink to='/setting'>设置</NavLink></li>
                           <li>退出</li>
                       </ul>
                   </div>
               </div>

           </header>
        );
    }
}

export default Header;
