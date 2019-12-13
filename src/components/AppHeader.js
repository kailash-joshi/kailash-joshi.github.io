import React from 'react';
import { tsPropertySignature } from '../../node_modules/@babel/types';

const AppHeader = (props) => {
    return(
        <div>
            <header className="main-header relative blue-opaque">
                <div className="menu-container flex between">
                    <a href="https://www.bluestacks.com" title="BlueStacks" className="logo bs-logo">
                        <img src="https://cdn-www.bluestacks.com/bs-images/new-logo-white.png" height="50" width="166" alt=" BlueStacks Android Emulator"/>
                    </a>
                </div>
            </header>
            <select onChange={e=>props.onLangChange(e)}>
                    <option value='en' selected>English</option>
                    <option value='ge'>German</option>
            </select>
        </div>
    )
}
export default AppHeader;