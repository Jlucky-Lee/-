import styled from 'styled-components';
import logoUrl from '../static/images/logo.png';
import diamond from '../static/images/diamond.png'
 /* 创建了一个Wrapper样式组件，该组件渲染之后是一个div标签 */
 export  const Wrapper = styled.div`
 height:56px;
 line-height:56px;
 border-bottom:1px solid #ccc;
 position:relative;
 top:0;
 left:0;
 width:100%
`;
 export  const Logo = styled.a.attrs({
    href:'/'
 })`
 display:block;
 height:56px;
 position:absolute;
 top:0;
 left:0;
 width:100px;
 background: url(${logoUrl});
 background-size:contain;
`;
 export  const Contain = styled.div`
 height:56px;
 width:60%;
 margin:0 auto;
`;
 export  const ContainItem = styled.div`
 height:56px;
 padding:0 10px;
 &.right{
    float:right;
    color:#969696;
    font-size:15px;
    >i{
       font-size:25px;
    }
 }
 
 &.left{
    float:left;
    font-size:17px;
    color:#333;
 }
 &.active{
     color:#EA6F5A;
 }
 &.diamond{
    background:url(${diamond}) no-repeat;
    width:57px;
    margin-top:15px;
    line-height:56px;
    background-size:contain;
    transform:scale(0.9);
 }

`;
export const NavSearch =styled.input.attrs({
    placeholder:'搜索'
})`
width:160px;
height:38px;
margin:9px 0 0 10px;
font-size:14px;
border:none;
outline:none;
border-radius:19px;
background:red;
padding:0 40px 0 20px;
box-sizing:border-box;
background:#eee;
&::placeholder{
    color:#999;
}`

export const Addition = styled.div`
position : absolute;
right:10px;
top:0;
height:56px;

`
export const Button =styled.button`
   padding:5px;
   height:38px;
   border-radius:20px;
   line-height:24px;
   font-size:15px;
   width:100px;
   padding:6px 12px;
   outline:none;
   border:0;
   background:transparent;
   &.rigster{
      color:#ea6f5a
      border: 1px solid rgba(236,97,73,.7);
      margin-right:17px;
   }
   &.write{
     color:white;
      background:#ea6f5a
   }
`
