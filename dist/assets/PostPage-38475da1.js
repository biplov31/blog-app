import{r as a,U as k,u as L,a as e,S as x,N as y,j as n,L as S}from"./index-53208603.js";import{f as h}from"./index-2b7347fb.js";function D(){const[s,u]=a.useState(null),{userInfo:o}=a.useContext(k),[c,l]=a.useState(!1),[p,f]=a.useState(!1),[i,w]=a.useState(""),[d,v]=a.useState(null),m=L();if(a.useEffect(()=>{fetch(`/post/${m.id}`).then(t=>{t.json().then(r=>{u(r)})}),fetch(`/post/getComments/${m.id}`).then(t=>{t.json().then(r=>{v(r)})})},[]),!s)return e(x,{hasImage:!0,textCount:5});const g=async()=>{(await fetch(`/post/delete/${s._id}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).ok&&f(!0)};if(p)return e(y,{to:"/"});const C=async()=>{if(!i)return;(await fetch("/post/addComment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({postId:s._id,comment:i,userId:o.id}),credentials:"include"})).ok&&window.location.reload()},N=async t=>{(await fetch("/post/deleteComment",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({commentToDelete:t}),credentials:"include"})).ok&&window.location.reload()};return n("div",{className:"post-container",children:[e("div",{className:"post-image",children:e("img",{src:`/${s.image}`,alt:""})}),(o==null?void 0:o.id)===s.author._id&&n("div",{className:"post-btn",children:[n(S,{to:`/editpost/${s._id}`,className:"edit-btn",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})}),"Edit post"]}),n("button",{className:"delete-btn",onClick:()=>l(!0),children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),"Delete post"]})]}),c&&n("div",{className:"confirm-dialogue",children:[e("span",{children:"Are you sure you want to delete this post?"}),e("button",{className:"confirm-delete-btn",onClick:g,children:"Delete"}),e("button",{className:"cancel-btn",onClick:()=>l(!1),children:"Cancel"})]}),c&&e("div",{className:"overlay"}),n("div",{className:"post-title",children:[e("h1",{children:s.title}),n("a",{className:"author",children:["by ",s.author.username]}),e("time",{children:h(new Date(s.createdAt))})]}),e("div",{className:"post-content",dangerouslySetInnerHTML:{__html:s.content}}),n("section",{className:"comment-section",children:[e("h2",{children:"Comment Section"}),n("form",{action:"",className:"comment-form",children:[e("textarea",{type:"text",onChange:t=>w(t.target.value),value:i,placeholder:"Write a comment..."}),e("button",{onClick:C,disabled:!i,children:"Submit"})]}),d&&e("div",{className:"comment-container",children:d.map(t=>n("div",{className:"comment",children:[n("div",{className:"comment-info",children:[n("div",{children:[e("strong",{children:t.author.username}),e("span",{children:h(new Date(t.createdAt),{representation:"date"})})]}),(o==null?void 0:o.id)===t.author._id&&e("svg",{onClick:()=>N(t._id),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})]}),e("p",{children:t.comment})]},t._id))})]})]})}export{D as default};
