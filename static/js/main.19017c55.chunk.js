(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,t,a){e.exports=a(371)},184:function(e,t,a){},186:function(e,t,a){},201:function(e,t,a){},276:function(e,t,a){},288:function(e,t,a){},290:function(e,t,a){},371:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),r=a.n(c),s=a(21),i=a(22),m=a(24),o=a(23),u=a(25),p=a(376),h=a(378),E=a(375),d=(a(71),a(26)),f=(a(72),a(12)),g=(a(184),a(186),a(134),a(82)),b=(a(60),a(39)),y=(a(61),a(10)),v=(a(73),a(34)),w=(a(198),a(171)),j=(a(201),a(203),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={dataSource:["\u7f51\u7edc\u7ef4\u62a4","\u7f51\u7edc\u62a5\u4fee","\u52a0\u5165\u6211\u4eec","\u610f\u89c1\u53cd\u9988","\u7f51\u901f\u6d4b\u8bd5","\u57f9\u8bad"],inputValue:""},a.changeAnimate=function(){var e=["bounce","pulse","tada","jello"],t=0;a.timerID=setInterval(function(){a.setState({animate:e[t]}),++t>3&&(t=0)},1e3)},a.handleSearch=function(e){a.setState({inputValue:e})},a.handleGetSearch=function(){w.a.info("\u4f60\u641c\u7d22\u7684\u5185\u5bb9:"+a.state.inputValue)},a.handleSelect=function(e){a.setState({inputValue:e})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.changeAnimate()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state.dataSource;return l.a.createElement("div",{className:"nav"},l.a.createElement(d.a,null,l.a.createElement(f.a,{lg:{span:2,offset:1},xs:{span:7,offset:1}},l.a.createElement("div",{className:"imgDiv"},l.a.createElement("img",{src:"https://nixinyudada.github.io/netunion_web/img/nuer.png",alt:"nuer",className:"animated infinite ".concat(this.state.animate)}),l.a.createElement("p",{className:"UnionTitle"},"UESTC ",l.a.createElement("br",null)," \u7f51\u7ba1\u4f1a"))),l.a.createElement(f.a,{xs:{span:2,offset:12},lg:{span:0}},l.a.createElement(v.a,{className:"xsMoreBtn"},"\u4e09")),l.a.createElement(f.a,{lg:{span:6,offset:2},sm:{span:0},xs:{span:0}},l.a.createElement("a",{href:"http://www.is.uestc.edu.cn/",target:"view_window"},l.a.createElement("img",{style:{width:"100%",height:"30px",margin:"15px 0px"},src:"http://www.is.uestc.edu.cn/assets/img/logo3-default.png",alt:"\u7535\u5b50\u79d1\u6280\u5927\u5b66\u4fe1\u606f\u4e0e\u8f6f\u4ef6\u5b66\u9662"}))),l.a.createElement(f.a,{lg:{span:5,offset:2},sm:{span:0},xs:{span:0}},l.a.createElement("div",{className:"search"},l.a.createElement(g.a,{dataSource:e,placeholder:"\u641c\u7d22",onSelect:this.handleSelect,onSearch:this.handleSearch,children:l.a.createElement(b.a,{suffix:l.a.createElement(y.a,{type:"search",onClick:this.handleGetSearch})}),filterOption:function(e,t){return-1!==t.props.children.toUpperCase().indexOf(e.toUpperCase())}}))),l.a.createElement(f.a,{lg:{span:2,offset:2},xs:{span:0},sm:{span:0},style:{lineHeight:"60px"}},l.a.createElement("a",{href:"http://www.baidu.com",style:{color:"#00a4dd"}},"\u7f51\u7edc\u62a5\u4fee ",l.a.createElement(y.a,{type:"tool"})))))}}]),t}(l.a.Component)),x=(a(374),a(70)),O=(a(273),a(133)),S=(a(276),a(377)),I=O.a.Sider,k=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(O.a,{className:"leftNav"},l.a.createElement(I,{theme:"light",breakpoint:"lg",collapsedWidth:"0",defaultCollapsed:!0,width:"150",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)}},l.a.createElement("div",{className:"logo"}),l.a.createElement(x.a,{theme:"light",mode:"inline",defaultSelectedKeys:["1"]},l.a.createElement(x.a.Item,{key:"1"},l.a.createElement(S.a,{to:"/welcome"},l.a.createElement(y.a,{type:"user"}),l.a.createElement("span",null,"\u6b22\u8fce\uff01"))),l.a.createElement(x.a.Item,{key:"2"},l.a.createElement(S.a,{to:"/dormFix"},l.a.createElement(y.a,{type:"tool"}),l.a.createElement("span",null,"\u5bdd\u5ba4\u62a5\u4fee"))),l.a.createElement(x.a.Item,{key:"3"},l.a.createElement(S.a,{to:"/joinUs"},l.a.createElement(y.a,{type:"usergroup-add"}),l.a.createElement("span",null,"\u52a0\u5165\u6211\u4eec"))),l.a.createElement(x.a.Item,{key:"4"},l.a.createElement(S.a,{to:"/feedback"},l.a.createElement(y.a,{type:"solution"}),l.a.createElement("span",null,"\u610f\u89c1\u53cd\u9988")))))))}}]),t}(l.a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{color:"#000"}},this.props.children)}}]),t}(l.a.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"index"},l.a.createElement(j,null),l.a.createElement(d.a,null,l.a.createElement(f.a,{span:4},l.a.createElement(k,null)),l.a.createElement(f.a,{span:20},l.a.createElement(C,null,this.props.children))),l.a.createElement(d.a,null,l.a.createElement(f.a,null)))}}]),t}(l.a.Component),N=(a(279),a(172)),U=(a(373),a(58)),M=(a(90),a(42)),_=(a(288),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={changeAnState:!0},a.handleAnimateMenu=function(e){for(var t=a.refs.menuUL,n=a.refs.menuUL.getElementsByTagName("li"),l=n.length,c=t.offsetWidth/2,r=[0,90,270,60,180,90,0,180,60,270,60,90,270,90,180,0,90,270,60,0][e],s=(360-r)/l,i=0;i<l;i++){var m=(r+s*i)*(Math.PI/180),o=c+c*Math.cos(m),u=c+c*Math.sin(m);n[i].style.left=o-25+"px",n[i].style.top=u-25+"px"}},a.handleStartAnimateMenu=function(){a.timeV&&clearInterval(a.timeV);var e=a.props.speed,t=0;a.timeV=setInterval(function(){a.handleAnimateMenu(t),++t>19&&(t=0)},e)},a.handleStopAnimateMenu=function(){clearInterval(a.timeV)},a.changeAnimateMenuState=function(){},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeV)}},{key:"render",value:function(){return this.handleStartAnimateMenu(),l.a.createElement("div",null,l.a.createElement("div",{className:"menu",onClick:this.handleStopAnimateMenu},l.a.createElement("ul",{ref:"menuUL"},l.a.createElement("li",{style:{background:"orange"}},l.a.createElement("a",{style:{lineHeight:"50px",color:"white"},href:"http://www.baidu.com"},"\u8fd0\u7ef4\u90e8")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://www.baidu.com",style:{lineHeight:"25px",color:"white"}},"\u7f51\u7edc\u7ba1\u7406\u5458")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://www.baidu.com",style:{lineHeight:"25px",color:"white"}},"\u7cfb\u7edf\u7ba1\u7406\u5458")),l.a.createElement("li",{style:{lineHeight:"25px",background:"orange"}},l.a.createElement("a",{style:{lineHeight:"50px",color:"white"},href:"http://www.baidu.com"},"\u7814\u53d1\u90e8")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://www.baidu.com",style:{lineHeight:"50px",color:"white"}},"JAVA")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://www.baidu.com",style:{lineHeight:"50px",color:"white"}},"PHP")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://www.baidu.com",style:{lineHeight:"25px",color:"white"}},"Web\u524d\u7aef")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://www.baidu.com",style:{lineHeight:"25px",color:"white"}},"UI/\u89c6\u89c9\u8bbe\u8ba1")))))}}]),t}(l.a.Component)),H=(a(290),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N.a,{loading:this.state.loading,active:!0},l.a.createElement(M.a,null,l.a.createElement(M.a.Item,null,l.a.createElement(y.a,{type:"user"}),l.a.createElement("span",null,"\u4e3b\u9875"))),l.a.createElement("hr",{style:{borderColor:"#00a4dd",margin:"10px 0px"}}),l.a.createElement("h4",{style:{marginBottom:"10px"}},"\u89c6\u9891\u6807\u9898"),l.a.createElement(d.a,null,l.a.createElement(f.a,{lg:{span:12},xs:{span:22}},l.a.createElement("iframe",{title:"welcomeVideo",allowFullScreen:!1,framespacing:"0",frameBorder:"no",border:"0",scrolling:"no",src:"//player.bilibili.com/player.html?aid=10445700&cid=17249672&page=1",style:{height:"300px",width:"100%",boxShadow:"0px 0px 20px #ccc"}}," ")),l.a.createElement(f.a,{lg:{span:8,offset:2},xs:{span:20}},l.a.createElement(f.a,{xs:{span:24},lg:{span:0}},l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null)),l.a.createElement("h2",null,"\u7f51\u7edc\u7ba1\u7406\u59d4\u5458\u4f1a"),l.a.createElement("p",null,"\u7535\u5b50\u79d1\u6280\u5927\u5b66\u5b66\u751f\u5bbf\u820d\u7f51\u7edc\u7ba1\u7406\u59d4\u5458\u4f1a\uff08\u5373\u7f51\u7ba1\u4f1a,\u82f1\u6587\u5168\u79f0NetUnion,\u7b80\u79f0NU\uff09,\u539f\u540d\u7f51\u76df\u3002\u81f4\u529b\u4e8e\u7ef4\u62a4\u7535\u5b50\u79d1\u6280\u5927\u5b66\u6c99\u6cb3\u6821\u533a\u5b66\u751f\u5bbf\u820d\u7f51\u7edc\u7684\u6b63\u5e38\u4f7f\u7528."),l.a.createElement("p",null,"\u6211\u4eec\u53ef\u4ee5\u63d0\u4f9b:"),l.a.createElement("p",null,"1.\u4e3a\u60a8\u63d0\u4f9b\u5168\u9762\u7684\u7f51\u7edc\u77e5\u8bc6\u7684\u5b66\u4e60\u65b9\u6cd5\u548c\u8d44\u6599"),l.a.createElement("p",null,"2.\u4e3a\u60a8\u8425\u9020\u9002\u5b9c\u7684\u5de5\u4f5c\u73af\u5883\u548c\u6d53\u539a\u7684\u5b66\u4e60\u6c1b\u56f4"),l.a.createElement("p",null,"3.\u4e3a\u60a8\u5171\u540c\u63a2\u8ba8\u6700\u524d\u6cbf\u7684\u7f51\u7edc\u6280\u672f\u548c\u5b66\u4e60\u5fc3\u5f97"),l.a.createElement("p",null,"4.\u4e3a\u60a8\u63d0\u4f9b\u5168\u771f\u7f51\u7edc\u73af\u5883\u4e0b\u5404\u79cd\u8bbe\u5907\u5b9e\u8df5\u673a\u4f1a"))),l.a.createElement("br",null),l.a.createElement("h2",null,"\u7ec4\u7ec7\u67b6\u6784"),l.a.createElement("hr",null),l.a.createElement(d.a,null,l.a.createElement(f.a,{lg:{span:11,offset:1},xs:{span:20}},l.a.createElement(_,{speed:"1000"})),l.a.createElement(f.a,{lg:{offset:4,span:6},xs:{span:0}},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,l.a.createElement(y.a,{type:"user-add"}),"\xa0",l.a.createElement("a",{className:"joinUsATag",href:"https://nixinyudada.github.io/netunion_web/#/joinUs"},"\u52a0\u5165\u6211\u4eec>>>")))),l.a.createElement("br",null),l.a.createElement("h2",null,"\u725b\u4eba\u4ecb\u7ecd"),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement(d.a,null,l.a.createElement(f.a,{className:"personInfo",lg:{span:6,offset:1},xs:{span:22}},l.a.createElement(U.a,{hoverable:!0,style:{width:"100%"},cover:l.a.createElement("img",{alt:"example",style:{height:320,margin:0},src:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1543946277&di=2b5e8b19acf1eaf7c0d4a8ec5c6e12d2&src=http://img4.duitang.com/uploads/item/201509/21/20150921194423_Nzv2k.thumb.700_0.jpeg"})},l.a.createElement(U.a.Meta,{title:"\u738b\u6811\u6839 2013 \u4fe1\u8f6f",description:"\u53c2\u4e0e\u4f17\u591a\u6821\u5185\u6821\u5916\u9879\u76ee\uff0c\u4e2d\u56fd\u79d1\u5b66\u9662\u8ba1\u7b97\u6240\u7814\u7a76\u751f\u5728\u8bfb\u3002"}))),l.a.createElement(f.a,{className:"personInfo",lg:{span:6,offset:2},xs:{span:22}},l.a.createElement(U.a,{hoverable:!0,style:{width:"100%"},cover:l.a.createElement("img",{alt:"example",style:{height:320,margin:0},src:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1543946277&di=2b5e8b19acf1eaf7c0d4a8ec5c6e12d2&src=http://img4.duitang.com/uploads/item/201509/21/20150921194423_Nzv2k.thumb.700_0.jpeg"})},l.a.createElement(U.a.Meta,{title:"\u90a2\u535a\u5cf0 2014 \u4fe1\u8f6f",description:"\u66fe\u4e8e\u7f51\u6613\u6709\u9053\u5b9e\u4e60\uff0c\u73b0\u5728\u6df1\u5733\u817e\u8baf\u5de5\u4f5c\u3002"}))),l.a.createElement(f.a,{className:"personInfo",lg:{span:6,offset:2},xs:{span:22}},l.a.createElement(U.a,{hoverable:!0,style:{width:"100%"},cover:l.a.createElement("img",{alt:"example",style:{height:320,margin:0},src:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1543946277&di=2b5e8b19acf1eaf7c0d4a8ec5c6e12d2&src=http://img4.duitang.com/uploads/item/201509/21/20150921194423_Nzv2k.thumb.700_0.jpeg"})},l.a.createElement(U.a.Meta,{title:"You 2018-2019",description:"\u8fd8\u6709\u5f88\u591a\u5927\u795e\uff0c\u4f46\u6211\u4eec\u76f8\u4fe1\u4e0b\u4e00\u4e2a\u5927\u795e\u5c31\u662f\u4f60\u3002"}))))))}}]),t}(l.a.Component)),T=(a(297),a(59)),V=(a(300),a(166)),F=(a(372),a(169)),B=(a(156),a(69)),J=a(167),D=a.n(J),W=(a(311),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=B.a.Item,t=b.a.TextArea,a={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:15}}};return l.a.createElement("div",null,l.a.createElement(M.a,null,l.a.createElement(M.a.Item,null,l.a.createElement(y.a,{type:"tool"}),l.a.createElement("span",null,"\u5bdd\u5ba4\u62a5\u4fee"))),l.a.createElement("hr",{style:{borderColor:"#00a4dd",margin:"10px 0px"}}),l.a.createElement("h4",{style:{marginBottom:"10px"}},"\u6b22\u8fce\u4f7f\u7528\u7ebf\u4e0a\u5bdd\u5ba4\u62a5\u4fee\u7cfb\u7edf"),l.a.createElement(d.a,null,l.a.createElement(f.a,{lg:{span:10,offset:1},xs:{span:22}},l.a.createElement(B.a,null,l.a.createElement(e,Object.assign({},a,{label:"\u5bdd\u5ba4\u53f7",validateStatus:"error",help:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bdd\u5ba4\u53f7\uff0c\u4ee5\u4fbf\u5de5\u4f5c\u4eba\u5458\u67e5\u627e"}),l.a.createElement(b.a,{placeholder:"\u5bdd\u5ba4\u53f7",id:"error"})),l.a.createElement(e,Object.assign({},a,{label:"\u8054\u7cfb\u7535\u8bdd",hasFeedback:!0,validateStatus:"warning"}),l.a.createElement(b.a,{placeholder:"\u8054\u7cfb\u7535\u8bdd",id:"warning"})),l.a.createElement(e,Object.assign({},a,{label:"\u72b6\u6001\u63cf\u8ff0",hasFeedback:!0,validateStatus:"validating",help:"\u8bf7\u7a0d\u7b49\uff0c\u6b63\u5728\u68c0\u7d22\u8fd9\u4e2a\u95ee\u9898\u7684\u666e\u904d\u53d1\u751f\u539f\u56e0..."}),l.a.createElement(t,{rows:"4",placeholder:"\u5982\u679c\u4f60\u80fd\u63cf\u8ff0\u6545\u969c\uff0c\u5c06\u5bf9\u6211\u4eec\u6709\u5f88\u5927\u7684\u5e2e\u52a9",id:"validating"})),l.a.createElement(e,Object.assign({},a,{label:"\u6545\u969c\u53d1\u73b0\u65f6\u95f4",hasFeedback:!0}),l.a.createElement(V.a,{locale:D.a},l.a.createElement(F.a,{showTime:!0,format:"YYYY-MM-DD HH:mm:ss",placeholder:"\u4f60\u662f\u591a\u4e45\u53d1\u73b0\u8fd9\u4e2a\u6545\u969c\u7684\uff1f",style:{width:"100%"}}))),l.a.createElement(e,{style:{textAlign:"center"}},l.a.createElement(v.a,{type:"primary"},"\u63d0\u4ea4")))),l.a.createElement(f.a,{lg:{span:7,offset:4},xs:{span:0},style:{opacity:.8}},l.a.createElement(T.a,null,l.a.createElement(T.a.Item,{color:"green"},"\u63d0\u4ea4\u8868\u5355\uff0c\u63cf\u8ff0\u95ee\u9898 2015-09-01"),l.a.createElement(T.a.Item,{color:"green"},"\u4e8b\u4ef6\u5f00\u59cb\u53d7\u7406 2015-09-01"),l.a.createElement(T.a.Item,{color:"red"},l.a.createElement("p",null,"\u8fd0\u7ef4\u4eba\u5458\u5206\u6790\u95ee\u9898 1 2015-09-01"),l.a.createElement("p",null,"\u6392\u9664\u95ee\u9898 2 2015-09-01"),l.a.createElement("p",null,"\u6307\u5236\u5b9a\u89e3\u51b3\u65b9\u6848 3 2015-09-01")),l.a.createElement(T.a.Item,null,l.a.createElement("p",null,"\u7535\u8bdd\u8054\u7cfb\u6545\u969c\u6240\u5728\u7684\u7528\u6237 1 2015-09-01"),l.a.createElement("p",null,"\u6c9f\u901a/\u534f\u5546\u89e3\u51b3\u65b9\u6848 2 2015-09-01"),l.a.createElement("p",null,"\u4e0a\u95e8\u6392\u9664\u6545\u969c 3 2015-09-01")),l.a.createElement(T.a.Item,{color:"green"},"\u8bb0\u5f55\u65e5\u5fd7 2015-09-01")))))}}]),t}(l.a.Component)),P=(a(135),a(80)),z=(a(368),a(170)),q=g.a.Option,G=b.a.TextArea,Y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={result:[],job:[],name:"",college:"",specialty:"",email:"",selfInfo:""},a.handleSearch=function(e){var t;t=!e||e.indexOf("@")>=0?[]:["qq.com","163.com","gmail.com"].map(function(t){return"".concat(e,"@").concat(t)}),a.setState({result:t})},a.handleNameInput=function(e){console.log(e.target.value),a.setState({name:e.target.value})},a.handleCollegeInput=function(e){console.log(e.target.value),a.setState({college:e.target.value})},a.handleSpecialtyInput=function(e){console.log(e.target.value),a.setState({specialty:e.target.value})},a.handleEmailInput=function(e){a.setState({email:e})},a.handleJobInput=function(e,t){var n=[];t.map(function(e){var t=e.props;return n.push(t.value),""}),a.setState({job:n})},a.handleSelfInfoInput=function(e){console.log(e.target.value),a.setState({selfInfo:e.target.value})},a.handleCommit=function(){z.a.info({title:"\u8868\u5355\u63d0\u4ea4\u4fe1\u606f",content:l.a.createElement("div",null,l.a.createElement("p",null,"\u59d3\u540d\uff1a",a.state.name),l.a.createElement("p",null,"\u5b66\u9662\uff1a",a.state.college),l.a.createElement("p",null,"\u4e13\u4e1a\uff1a",a.state.specialty),l.a.createElement("p",null,"\u90ae\u7bb1\uff1a",a.state.email),l.a.createElement("p",null,"\u5e94\u8058\u804c\u4f4d\uff1a",a.state.job),l.a.createElement("p",null,"\u81ea\u6211\u4ecb\u7ecd\uff1a",a.state.selfInfo)),onOk:function(){}})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.result.map(function(e){return l.a.createElement(q,{key:e},e)}),t=B.a.Item,a={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:15}}};return l.a.createElement("div",null,l.a.createElement(M.a,null,l.a.createElement(M.a.Item,null,l.a.createElement(y.a,{type:"usergroup-add"}),l.a.createElement("span",null,"\u52a0\u5165\u6211\u4eec"))),l.a.createElement("hr",{style:{borderColor:"#00a4dd",margin:"10px 0px"}}),l.a.createElement("h4",{style:{marginBottom:"10px"}},"\u6b22\u8fce\u52a0\u5165\u7535\u5b50\u79d1\u6280\u5927\u5b66 \u6c99\u6cb3\u7f51\u7edc\u7ba1\u7406\u59d4\u5458\u4f1a"),l.a.createElement(d.a,null,l.a.createElement(f.a,{lg:{span:10,offset:1},xs:{span:22}},l.a.createElement(B.a,null,l.a.createElement(t,Object.assign({},a,{label:"\u59d3\u540d",validateStatus:"error",hasFeedback:!0,help:"\u8be5\u9879\u4e0d\u80fd\u4e3a\u7a7a\uff01"}),l.a.createElement(b.a,{id:"error",onChange:this.handleNameInput,placeholder:"\u59d3\u540d"})),l.a.createElement(t,Object.assign({},a,{label:"\u5b66\u9662",hasFeedback:!0,validateStatus:"warning",help:"\u8bf7\u52ff\u8f93\u5165\u975e\u6cd5\u5b57\u7b26\uff01"}),l.a.createElement(b.a,{onChange:this.handleCollegeInput,placeholder:"\u5b66\u9662",id:"warning"})),l.a.createElement(t,Object.assign({},a,{label:"\u4e13\u4e1a",hasFeedback:!0,validateStatus:"success"}),l.a.createElement(b.a,{onChange:this.handleSpecialtyInput,placeholder:"\u4e13\u4e1a",id:"success"})),l.a.createElement(t,Object.assign({},a,{label:"\u90ae\u7bb1",hasFeedback:!0,validateStatus:"success"}),l.a.createElement(g.a,{onSearch:this.handleSearch,placeholder:"\u8bf7\u8f93\u5165\u4f60\u7684\u90ae\u7bb1",onChange:this.handleEmailInput},e)),l.a.createElement(t,Object.assign({},a,{label:"\u5e94\u8058\u804c\u4f4d",hasFeedback:!0,validateStatus:"success"}),l.a.createElement(P.a,{mode:"multiple",showArrow:!0,allowClear:!0,onChange:this.handleJobInput,placeholder:"\u8bf7\u9009\u62e9\u4f60\u8981\u7684\u804c\u4f4d"},l.a.createElement(q,{value:"\u7cfb\u7edf\u7ba1\u7406\u5458"},"\u7cfb\u7edf\u7ba1\u7406\u5458"),l.a.createElement(q,{value:"\u7f51\u7edc\u7ba1\u7406\u5458"},"\u7f51\u7edc\u7ba1\u7406\u5458"),l.a.createElement(q,{value:"UI/\u89c6\u89c9\u8bbe\u8ba1"},"UI/\u89c6\u89c9\u8bbe\u8ba1"),l.a.createElement(q,{value:"WEB\u524d\u7aef"},"WEB\u524d\u7aef"),l.a.createElement(q,{value:"JAVA"},"JAVA"),l.a.createElement(q,{value:"PHP"},"PHP"))),l.a.createElement(t,Object.assign({},a,{label:"\u81ea\u6211\u4ecb\u7ecd",hasFeedback:!0,validateStatus:"success"}),l.a.createElement(G,{rows:"4",onChange:this.handleSelfInfoInput,placeholder:"\u81ea\u6211\u4ecb\u7ecd"})),l.a.createElement(t,{style:{textAlign:"center"}},l.a.createElement(v.a,{type:"primary",onClick:this.handleCommit},"\u63d0\u4ea4")))),l.a.createElement(f.a,{lg:{span:7,offset:4},xs:{span:0},style:{opacity:.8}},l.a.createElement(_,{speed:"2000"}))))}}]),t}(l.a.Component),K=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(M.a,null,l.a.createElement(M.a.Item,null,l.a.createElement(y.a,{type:"solution"}),l.a.createElement("span",null,"\u610f\u89c1\u53cd\u9988"))))}}]),t}(l.a.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(A,null,l.a.createElement(h.a,null,l.a.createElement(E.a,{path:"/welcome",component:H}),l.a.createElement(E.a,{path:"/dormFix",component:W}),l.a.createElement(E.a,{path:"/joinUs",component:Y}),l.a.createElement(E.a,{path:"/feedback",component:K})))))}}]),t}(l.a.Component);r.a.render(l.a.createElement(L,null),document.getElementById("root"))}},[[176,2,1]]]);
//# sourceMappingURL=main.19017c55.chunk.js.map