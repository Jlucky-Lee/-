import React, { Component } from 'react'
import {GlobalStyled} from './style'
import { IconGlobalStyled } from './common/static/iconfont/iconfont'
import 'antd/dist/antd.css';
import Header from './common/header'
export default class App extends Component {
  render() {
    return (
         
        <div>
          <Header/>
          <IconGlobalStyled/>
          <GlobalStyled/>
        </div>
      
      
    )
  }
}
