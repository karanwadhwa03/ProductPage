(this["webpackJsonpsquad-assesment"]=this["webpackJsonpsquad-assesment"]||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(8),s=a.n(c),l=a(2),i=a(3),o=a(5),d=a(4),h=a(6),u=[{id:0,PricePoint:"$100K-$200K",Qualified:[{uid:0,leadsPermonths:"20",perQualified:"$69",platFormFee:"$299",Total:"$1,679/mo"},{uid:1,leadsPermonths:"40",perQualified:"$67",platFormFee:"$599",Total:"$3,279/mo"},{uid:2,leadsPermonths:"80",perQualified:"$63",platFormFee:"$699",Total:"$4,599/mo"}]},{id:1,PricePoint:"$200K-$300K",Qualified:[{uid:0,leadsPermonths:"20",perQualified:"$79",platFormFee:"$299",Total:"$1,679/mo"},{uid:1,leadsPermonths:"40",perQualified:"$77",platFormFee:"$599",Total:"$3,279/mo"},{uid:2,leadsPermonths:"80",perQualified:"$72",platFormFee:"$699",Total:"$4,599/mo"}]},{id:2,PricePoint:"$300K-$400K",Qualified:[{uid:0,leadsPermonths:"20",perQualified:"$99",platFormFee:"$299",Total:"$1,679/mo"},{uid:1,leadsPermonths:"40",perQualified:"$96",platFormFee:"$599",Total:"$3,279/mo"},{uid:2,leadsPermonths:"80",perQualified:"$90",platFormFee:"$699",Total:"$4,599/mo"}]},{id:3,PricePoint:"$400K-$500K",Qualified:[{uid:0,leadsPermonths:"20",perQualified:"$109",platFormFee:"$299",Total:"$2,879/mo"},{uid:1,leadsPermonths:"40",perQualified:"$106",platFormFee:"$599",Total:"$5,599/mo"},{uid:2,leadsPermonths:"80",perQualified:"$99",platFormFee:"$699",Total:"$10,159/mo"}]},{id:4,PricePoint:"$500K+",Qualified:[{uid:0,leadsPermonths:"20",perQualified:"$129",platFormFee:"$299",Total:"$1,679/mo"},{uid:1,leadsPermonths:"40",perQualified:"$125",platFormFee:"$599",Total:"$3,279/mo"},{uid:2,leadsPermonths:"60",perQualified:"$117",platFormFee:"$699",Total:"$4,599/mo"}]}],m=[{name:"Zillow",id:0},{name:"Realtor",id:1},{name:"Ylopo",id:2},{name:"Others",id:3}],j=[{name:"Google",id:0},{name:"Facebook",id:1},{name:"Email",id:2},{name:"Friends",id:3},{name:"Real Closers",id:4}],b=a(0),p=function(e){return Object(b.jsx)("div",{className:"row",children:u.map((function(t){return function(e,t){var a;return a=e.ShowCards==t.id?{background:"#b46cba",cursor:"pointer",color:"white",borderLeft:"2px solid #b46cba"}:{background:"#edf5f7",cursor:"pointer",color:"#b46cba",borderLeft:"2px solid #b46cba"},Object(b.jsx)("div",{className:" col  p-3 text-center ",style:a,onClick:function(){return e.ClickHanlder(t.id)},children:Object(b.jsx)("h4",{children:t.PricePoint})},t.id)}(e,t)}))})},x=function(e){var t;return t=1===e.data.uid?{background:"#ff2626",marginTop:"6px",color:"white",border:"1px solid #ff2626"}:{marginTop:"6px",color:"#ff2626",border:"1px solid #ff2626"},Object(b.jsxs)("div",{className:"col-md-3 col-sm-2",children:[1===e.data.uid?Object(b.jsx)("div",{className:"text-white p-2 text-center",style:{background:"#ff2626"},children:Object(b.jsx)("h4",{children:"Most Popular"})}):"",Object(b.jsx)("div",{className:"text-white p-2 text-center",style:{background:"#b46cba"},children:Object(b.jsx)("h4",{children:e.data.leadsPermonths})}),Object(b.jsxs)("div",{className:" p-2 text-center",style:{background:"#edf5f7"},children:[Object(b.jsx)("h1",{children:e.data.perQualified}),Object(b.jsx)("h5",{children:"Per Qualified Lead"}),Object(b.jsx)("p",{children:"--------------------------------"}),Object(b.jsx)("h5",{children:"Qualified Lead Per Month"}),Object(b.jsx)("h4",{children:e.data.leadsPermonths}),Object(b.jsx)("p",{children:"--------------------------------"}),Object(b.jsx)("h5",{children:"Platform Fee"}),Object(b.jsx)("h4",{children:e.data.platFormFee})]}),Object(b.jsx)("div",{className:"text-white p-2 text-center",style:{background:"#b46cba"},children:Object(b.jsx)("h4",{children:e.data.Total})}),Object(b.jsx)("div",{className:" p-2 text-center ",style:Object(h.a)({cursor:"pointer"},t),onClick:function(){return e.clickedOnTrail(e.data.leadsPermonths)},children:Object(b.jsx)("h4",{children:"Start Your Trial"})})]})},f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).createCards=function(){return u[e.props.ShowCards].Qualified.map((function(t){return Object(b.jsx)(x,{data:t,clickedOnTrail:e.props.clickedOnTrail},t.uid)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{style:{marginTop:"70px",padding:"0"},className:"row align-items-end",children:[this.createCards(),Object(b.jsxs)("div",{className:"col-md-3 col-sm-2",children:[Object(b.jsx)("div",{className:"text-white p-2 text-center",style:{background:"#b46cba"},children:Object(b.jsx)("h4",{children:"Enterprise"})}),Object(b.jsx)("div",{className:" p-2 text-center ",style:{background:"#edf5f7",height:"375px",position:"relative"},children:Object(b.jsx)("h3",{style:{position:"absolute",top:"50%",transform:"translate(0%,-50%)"},children:"Want More Than 80 Qualified Lead Per Month"})}),Object(b.jsx)("div",{className:" p-2 text-center",style:{marginTop:"6px",color:"#db1802",border:"1px solid #db1802"},onClick:function(){return e.props.clickedOnTrail("Get IN Touch")},children:Object(b.jsx)("h4",{children:"Get In Touch"})})]})]})}}]),a}(n.Component),O=function(e){return Object(b.jsx)("div",{children:e.data.map((function(t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{type:"checkbox",style:{margin:"0 8px"},name:t.name,onChange:function(t){return e.CheckBoxesChange(t,!0)}}),t.name]})}))})},g=function(e){return console.log(e.Formdetails.email),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",width:"80%",transform:"translate(-50%, -50%)"},children:Object(b.jsx)("div",{class:"modal-dialog",style:{maxWidth:"700px"},role:"document",children:Object(b.jsxs)("div",{class:"modal-content",children:[Object(b.jsxs)("div",{class:"modal-header ",children:[Object(b.jsx)("h5",{class:"modal-title ",children:"Get Started With Squad Voice"}),Object(b.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",onClick:e.closeHandler,children:Object(b.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(b.jsxs)("div",{class:"modal-body",children:[Object(b.jsxs)("h5",{children:[" Plan Selected :",e.selectedQualified]}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"Name"}),Object(b.jsx)("input",{type:"text",className:"form-control",value:e.Formdetails.name,onChange:function(t){return e.changeHandler(t)},name:"name"}),Object(b.jsxs)("div",{className:"row ",style:{marginTop:"10px"},children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("p",{children:"Email Address"}),Object(b.jsx)("input",{type:"text",className:"form-control",name:"email",value:e.Formdetails.email,onChange:function(t){return e.changeHandler(t)}})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("p",{children:"Phone No."}),Object(b.jsx)("input",{type:"text",className:"form-control",value:e.Formdetails.phone,onChange:function(t){return e.changeHandler(t)},name:"phone"})]})]}),Object(b.jsxs)("div",{className:"row ",style:{marginTop:"10px"},children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("p",{children:"Number of leads you generate in a month"}),Object(b.jsx)("input",{type:"number",className:"form-control",value:e.Formdetails.leads,onChange:function(t){return e.changeHandler(t)},name:"leads"})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("p",{children:" Total leads in your CRM"}),Object(b.jsx)("input",{type:"number",className:"form-control",value:e.Formdetails.leadsCRM,onChange:function(t){return e.changeHandler(t)},name:"leadsCRM"})]})]}),Object(b.jsxs)("div",{className:"row ",style:{marginTop:"10px"},children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("p",{children:"Which CRM do you use"}),Object(b.jsx)("input",{type:"number",className:"form-control",value:e.Formdetails.CRM,onChange:function(t){return e.changeHandler(t)},name:"CRM"})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("p",{children:"Number Of Agents"}),Object(b.jsx)("input",{type:"text",className:"form-control",value:e.Formdetails.agents,onChange:function(t){return e.changeHandler(t)},name:"agents"})]}),Object(b.jsx)("p",{style:{marginTop:"10px"},children:"What are your biggest lead resources"}),Object(b.jsx)(O,{CheckBoxesChange:function(t){return e.changeCheckboxHandler(t)},data:m}),Object(b.jsx)("p",{style:{marginTop:"10px"},children:"How did you hear about us"}),Object(b.jsx)(O,{CheckBoxesChange:function(t){return e.changeCheckboxHandler(t)},data:j})]})]}),Object(b.jsx)("div",{class:"modal-footer",style:{justifyContent:"flex-start"},children:Object(b.jsx)("button",{type:"button",class:"btn btn-primary text-right",onClick:function(){return e.submitHandler()},children:"Submit"})})]})})})})},v=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ShowCards:2,details:{name:"",email:"",phone:"",leads:"",leadsCRM:"",CRM:"",agents:""}},e.componentDidMount=function(){localStorage.getItem("ShowCards")&&e.setState({ShowCards:localStorage.getItem("ShowCards")})},e.clickHandler=function(t){e.setState({ShowCards:t}),localStorage.setItem("ShowCards",t)},e.clickedOnTrail=function(t){e.setState({selectedQualified:t,showModal:!0})},e.changeCheckboxHandler=function(t){var a=t.target.name,n=Object(h.a)({},e.state.details);n[a]=!n[a],e.setState({details:n})},e.changeHandler=function(t){var a=t.target.name,n=t.target.value,r=Object(h.a)({},e.state.details);r[a]=n,e.setState({details:r})},e.submitHandler=function(){e.setState({showModal:!1});var t=e.state.details,a=Object.keys(t),n=Object.values(t),r="",c=Object(h.a)({},e.state.details);Object.keys(c).forEach((function(e){c[e]=""})),e.setState({details:c});for(var s=0;s<a.length;s++)r+="".concat(a[s]," : ").concat(n[s],"  && ");alert(r)},e.closeHandler=function(){e.setState({showModal:!1})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{style:{overflow:"hidden"},children:[Object(b.jsx)(p,{ClickHanlder:function(t){return e.clickHandler(t)},ShowCards:this.state.ShowCards}),Object(b.jsx)(f,{ShowCards:this.state.ShowCards,clickedOnTrail:function(t){return e.clickedOnTrail(t)}}),this.state.showModal&&Object(b.jsx)(g,{closeHandler:this.closeHandler,Formdetails:this.state.details,changeHandler:function(t){return e.changeHandler(t)},selectedQualified:this.state.selectedQualified,changeCheckboxHandler:function(t){return e.changeCheckboxHandler(t)},submitHandler:this.submitHandler})]})}}]),a}(n.Component),C=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"container p-4 mt-2",style:{overflow:"hidden"},children:Object(b.jsx)(v,{})})}}]),a}(n.Component),$=a(9);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),$.unregister()},9:function(e,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.a5861584.chunk.js.map