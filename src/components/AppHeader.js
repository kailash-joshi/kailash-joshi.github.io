import React from 'react';

const AppHeader = () => {
    return(
        <div>
            <header className="main-header relative blue-opaque">
                <div className="menu-container flex between">
                    <a href="https://www.bluestacks.com" title="BlueStacks" className="logo bs-logo">
                        <img src="https://cdn-www.bluestacks.com/bs-images/new-logo-white.png" height="50" width="166" alt=" BlueStacks Android Emulator"/>
                    </a>
                </div>
            </header>
        </div>
    )
}
export default AppHeader;