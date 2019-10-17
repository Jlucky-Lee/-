import React, { Component } from 'react'
import {Wrapper,Logo,Contain,ContainItem,NavSearch,Addition,Button} from './style'
import './style.less'
  
export default class Header extends Component {
    render() {
        return (
            <Wrapper>
               <Logo/>
               <Contain>
                    <ContainItem className="left active">首页</ContainItem>
                    <ContainItem className="left">下载APP</ContainItem>
                    <NavSearch/> 
                    <ContainItem className="right">登录</ContainItem>
                    <ContainItem className="right diamond"></ContainItem>
                    <ContainItem className="right">
                    <i className="iconfont fonts">&#xe666;</i>
                    </ContainItem>
                    <Addition>
                        <Button className="rigster">注册</Button>
                        <Button className="write">
                            <i className="iconfont">&#xe66f;</i>
                            写文章
                        </Button>

                    </Addition>
                    
                    
               </Contain>
            </Wrapper>
        )
    }
}

