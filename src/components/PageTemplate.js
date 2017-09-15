import {MainMenu} from './menu.js'
import React from 'react';
import ReactDOM from 'react-dom';

export const PageTemplate = ({children}) =>
<div className="page">
    <MainMenu />
    {children}
</div>