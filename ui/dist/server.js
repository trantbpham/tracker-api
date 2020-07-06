!function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=13)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-bootstrap")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router-bootstrap")},function(e,t){e.exports=require("url-search-params")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("webpack")},function(e,t){e.exports=require("dotenv")},function(e,t){e.exports=require("http-proxy-middleware")},function(e,t){e.exports=require("source-map-support")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("serialize-javascript")},function(e,t,n){e.exports=n(19)},function(e,t){e.exports=require("webpack-dev-middleware")},function(e,t){e.exports=require("webpack-hot-middleware")},function(e,t,n){(function(t){const a=n(17),s=n(18),o=n(6),r={mode:"development",entry:{app:["./browser/App.jsx"]},output:{filename:"[name].bundle.js",path:a.resolve(t,"public"),publicPath:"/"},module:{rules:[{test:/\.jsx?$/,exclude:/node_modules/,use:{loader:"babel-loader",options:{presets:[["@babel/preset-env",{targets:{ie:"11",edge:"15",safari:"10",firefox:"50",chrome:"49"}}],"@babel/preset-react"]}}}]},optimization:{splitChunks:{name:"vendor",chunks:"all"}},plugins:[new o.DefinePlugin({__isBrowser__:"true"})],devtool:"source-map"},l={mode:"development",entry:{server:["./server/uiserver.js"]},target:"node",externals:[s()],output:{filename:"server.js",path:a.resolve(t,"dist"),publicPath:"/"},module:{rules:[{test:/\.jsx?$/,use:{loader:"babel-loader",options:{presets:[["@babel/preset-env",{targets:{node:"10"}}],"@babel/preset-react"]}}}]},plugins:[new o.DefinePlugin({__isBrowser__:"false"})],devtool:"source-map"};e.exports=[r,l]}).call(this,"/")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("webpack-node-externals")},function(e,t,n){"use strict";n.r(t);var a=n(7),s=n.n(a),o=n(5),r=n.n(o),l=n(8),i=n.n(l),c=n(9),u=n.n(c),h=n(0),d=n.n(h),m=n(10),p=n.n(m),f=n(2),E=n(1),g=n(3),b=n(4),v=n.n(b);class C extends d.a.Component{constructor({location:{search:e}}){super();const t=new v.a(e);this.state={status:t.get("status")||"",effortMin:t.get("effortMin")||"",effortMax:t.get("effortMax")||"",changed:!1},this.onChangeStatus=this.onChangeStatus.bind(this),this.onChangeEffortMin=this.onChangeEffortMin.bind(this),this.onChangeEffortMax=this.onChangeEffortMax.bind(this),this.applyFilter=this.applyFilter.bind(this),this.showOriginalFilter=this.showOriginalFilter.bind(this)}componentDidUpdate(e){const{location:{search:t}}=e,{location:{search:n}}=this.props;t!==n&&this.showOriginalFilter()}onChangeStatus(e){this.setState({status:e.target.value,changed:!0})}onChangeEffortMin(e){e.target.value.match(/^\d*$/)&&this.setState({effortMin:e.target.value,changed:!0})}onChangeEffortMax(e){e.target.value.match(/^\d*$/)&&this.setState({effortMax:e.target.value,changed:!0})}showOriginalFilter(){const{location:{search:e}}=this.props,t=new v.a(e);this.setState({status:t.get("status")||"",effortMin:t.get("effortMin")||"",effortMax:t.get("effortMax")||"",changed:!1})}applyFilter(){const{status:e,effortMin:t,effortMax:n}=this.state,{history:a,urlBase:s}=this.props,o=new v.a;e&&o.set("status",e),t&&o.set("effortMin",t),n&&o.set("effortMax",n);const r=o.toString()?"?"+o.toString():"";a.push({pathname:s,search:r})}render(){const{status:e,changed:t}=this.state,{effortMin:n,effortMax:a}=this.state;return d.a.createElement(E.Row,null,d.a.createElement(E.Col,{xs:6,sm:4,md:3,lg:2},d.a.createElement(E.FormGroup,null,d.a.createElement(E.ControlLabel,null,"Status:"),d.a.createElement(E.FormControl,{componentClass:"select",value:e,onChange:this.onChangeStatus},d.a.createElement("option",{value:""},"(All)"),d.a.createElement("option",{value:"New"},"New"),d.a.createElement("option",{value:"Assigned"},"Assigned"),d.a.createElement("option",{value:"Fixed"},"Fixed"),d.a.createElement("option",{value:"Closed"},"Closed")))),d.a.createElement(E.Col,{xs:6,sm:4,md:3,lg:2},d.a.createElement(E.FormGroup,null,d.a.createElement(E.ControlLabel,null,"Effort between:"),d.a.createElement(E.InputGroup,null,d.a.createElement(E.FormControl,{value:n,onChange:this.onChangeEffortMin}),d.a.createElement(E.InputGroup.Addon,null,"-"),d.a.createElement(E.FormControl,{value:a,onChange:this.onChangeEffortMax})))),d.a.createElement(E.Col,{xs:6,sm:4,md:3,lg:2},d.a.createElement(E.FormGroup,null,d.a.createElement(E.ControlLabel,null," "),d.a.createElement(E.ButtonToolbar,null,d.a.createElement(E.Button,{bsStyle:"primary",type:"button",onClick:this.applyFilter},"Apply"),d.a.createElement(E.Button,{type:"button",onClick:this.showOriginalFilter,disabled:!t},"Reset")))))}}var y=Object(f.withRouter)(C);const w=Object(f.withRouter)(({issue:e,location:{search:t},closeIssue:n,deleteIssue:a,index:s})=>{const o={pathname:"/issues/"+e.id,search:t},r=d.a.createElement(E.Tooltip,{id:"close-tooltip",placement:"top"},"Edit Issue"),l=d.a.createElement(E.Tooltip,{id:"close-tooltip",placement:"top"},"Close Issue"),i=d.a.createElement(E.Tooltip,{id:"delete-tooltip",placement:"top"},"Delete Issue");const c=d.a.createElement("tr",null,d.a.createElement("td",null,e.id),d.a.createElement("td",null,e.status),d.a.createElement("td",null,e.owner),d.a.createElement("td",null,e.created.toDateString()),d.a.createElement("td",null,e.effort),d.a.createElement("td",null,e.due?e.due.toDateString():""),d.a.createElement("td",null,e.title),d.a.createElement("td",null,d.a.createElement(g.LinkContainer,{to:"/edit/"+e.id},d.a.createElement(E.OverlayTrigger,{delayShow:1e3,overlay:r},d.a.createElement(E.Button,{bsSize:"xsmall"},d.a.createElement(E.Glyphicon,{glyph:"edit"}))))," ",d.a.createElement(E.OverlayTrigger,{delayShow:1e3,overlay:l},d.a.createElement(E.Button,{bsSize:"xsmall",onClick:function(e){e.preventDefault(),n(s)}},d.a.createElement(E.Glyphicon,{glyph:"remove"})))," ",d.a.createElement(E.OverlayTrigger,{delayShow:1e3,overlay:i},d.a.createElement(E.Button,{bsSize:"xsmall",onClick:function(e){e.preventDefault(),a(s)}},d.a.createElement(E.Glyphicon,{glyph:"trash"})))));return d.a.createElement(g.LinkContainer,{to:o},c)});function S({issues:e,closeIssue:t,deleteIssue:n}){const a=e.map((e,a)=>d.a.createElement(w,{key:e.id,issue:e,closeIssue:t,deleteIssue:n,index:a}));return d.a.createElement(E.Table,{bordered:!0,condensed:!0,hover:!0,responsive:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"ID"),d.a.createElement("th",null,"Status"),d.a.createElement("th",null,"Owner"),d.a.createElement("th",null,"Created"),d.a.createElement("th",null,"Effort"),d.a.createElement("th",null,"Due Date"),d.a.createElement("th",null,"Title"),d.a.createElement("th",null,"Action"))),d.a.createElement("tbody",null,a))}function x({issue:e}){return e?d.a.createElement("div",null,d.a.createElement("h3",null,"Description"),d.a.createElement("pre",null,e.description)):null}var D=n(11),I=n.n(D);const M=new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d");function F(e,t){return M.test(t)?new Date(t):t}async function N(e,t={},n=null,a=null){const s=process.env.UI_SERVER_API_ENDPOINT;try{const o={"Content-Type":"application/json"};a&&(o.Cookie=a);const r=await I()(s,{method:"POST",credentials:"include",headers:o,body:JSON.stringify({query:e,variables:t})}),l=await r.text(),i=JSON.parse(l,F);if(i.errors){const e=i.errors[0];if("BAD_USER_INPUT"===e.extensions.code){const t=e.extensions.exception.errors.join("\n ");n&&n(`${e.message}:\n ${t}`)}else n&&n(`${e.extensions.code}: ${e.message}`)}return i.data}catch(e){return n&&n("Error in sending data to server: "+e.message),null}}class T extends d.a.Component{componentDidUpdate(){const{showing:e,onDismiss:t}=this.props;e&&(clearTimeout(this.dismissTimer),this.dismissTimer=setTimeout(t,5e3))}componentWillUnmount(){clearTimeout(this.dismissTimer)}render(){const{showing:e,bsStyle:t,onDismiss:n,children:a}=this.props;return d.a.createElement(E.Collapse,{in:e},d.a.createElement("div",{style:{position:"fixed",bottom:20,left:20}},d.a.createElement(E.Alert,{bsStyle:t,onDismiss:n},a)))}}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function P(e){return class extends d.a.Component{constructor(e){super(e),this.state={toastVisible:!1,toastMessage:"",toastType:"success"},this.showSuccess=this.showSuccess.bind(this),this.showError=this.showError.bind(this),this.dismissToast=this.dismissToast.bind(this)}showSuccess(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"success"})}showError(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"danger"})}dismissToast(){this.setState({toastVisible:!1})}render(){const{toastType:t,toastVisible:n,toastMessage:a}=this.state;return d.a.createElement(d.a.Fragment,null,d.a.createElement(e,O({showError:this.showError,showSuccess:this.showSuccess,dismissToast:this.dismissToast},this.props)),d.a.createElement(T,{bsStyle:t,showing:n,onDismiss:this.dismissToast},a))}}}var k={};class _ extends d.a.Component{static async fetchData(e,t,n){const a=new v.a(t),s={hasSelection:!1,selectedId:0};a.get("status")&&(s.status=a.get("status"));const o=parseInt(a.get("effortMin"),10);Number.isNaN(o)||(s.effortMin=o);const r=parseInt(a.get("effortMax"),10);Number.isNaN(r)||(s.effortMax=r);const{params:{id:l}}=e,i=parseInt(l,10);Number.isNaN(i)||(s.hasSelection=!0,s.selectedId=i);return await N("query issueList(\n      $status: StatusType\n      $effortMin: Int\n      $effortMax: Int\n      $hasSelection: Boolean!\n      $selectedId: Int!\n    ) {\n      issueList(\n        status: $status\n        effortMin: $effortMin\n        effortMax: $effortMax\n      ) {\n        issues {\n          id title status owner\n          created effort due\n        }\n      }\n      issue(id: $selectedId) @include (if : $hasSelection) {\n        id description\n      }\n    }",s,n)}constructor(){super();const e=k.initialData?k.initialData.issueList.issues:null,t=k.initialData?k.initialData.issue:null;delete k.initialData,this.state={issues:e,selectedIssue:t},this.closeIssue=this.closeIssue.bind(this),this.deleteIssue=this.deleteIssue.bind(this)}componentDidMount(){const{issues:e}=this.state;null==e&&this.loadData()}componentDidUpdate(e){const{location:{search:t},match:{params:{id:n}}}=e,{location:{search:a},match:{params:{id:s}}}=this.props;t===a&&n===s||this.loadData()}async loadData(){const{location:{search:e},match:t,showError:n}=this.props,a=await _.fetchData(t,e,n);a&&this.setState({issues:a.issueList.issues,selectedIssue:a.issue})}async closeIssue(e){const{issues:t}=this.state,{showError:n}=this.props,a=await N("mutation issueClose($id: Int!) {\n      issueUpdate(id: $id, changes: { status: Closed }) {\n        id title status owner\n        effort created due description\n      }\n    }",{id:t[e].id},n);a?this.setState(t=>{const n=[...t.issues];return n[e]=a.issueUpdate,{issues:n}}):this.loadData()}async deleteIssue(e){const{issues:t}=this.state,{location:{pathname:n,search:a},history:s}=this.props,{showSuccess:o,showError:r}=this.props,{id:l}=t[e],i=await N("mutation issueDelete($id: Int!) {\n      issueDelete(id: $id)\n    }",{id:l},r);i&&i.issueDelete?(this.setState(t=>{const o=[...t.issues];return n==="/issues/"+l&&s.push({pathname:"/issues",search:a}),o.splice(e,1),{issues:o}}),o(`Deleted issue ${l} successfully.`)):this.loadData()}render(){const{issues:e}=this.state;if(null==e)return null;const{selectedIssue:t}=this.state;return d.a.createElement(d.a.Fragment,null,d.a.createElement(E.Panel,null,d.a.createElement(E.Panel.Heading,null,d.a.createElement(E.Panel.Title,{toggle:!0},"Filter")),d.a.createElement(E.Panel.Body,{collapsible:!0},d.a.createElement(y,{urlBase:"/issues"}))),d.a.createElement(S,{issues:e,closeIssue:this.closeIssue,deleteIssue:this.deleteIssue}),d.a.createElement(x,{issue:t}))}}const B=P(_);B.fetchData=_.fetchData;var $=B;const A=["New","Assigned","Fixed","Closed"];class j extends d.a.Component{static async fetchData(e,t,n){const a=new URLSearchParams(t),s={};a.get("status")&&(s.status=a.get("status"));const o=parseInt(a.get("effortMin"),10);Number.isNaN(o)||(s.effortMin=o);const r=parseInt(a.get("effortMax"),10);Number.isNaN(r)||(s.effortMax=r);return await N("query issueList(\n      $status: StatusType\n      $effortMin: Int\n      $effortMax: Int\n    ) {\n      issueCounts(\n        status: $status\n        effortMin: $effortMin\n        effortMax: $effortMax\n      ) {\n        owner New Assigned Fixed Closed\n      }\n    }",s,n)}constructor(e){super(e);const t=k.initialData?k.initialData.issueCounts:null;delete k.initialData,this.state={stats:t}}componentDidMount(){const{stats:e}=this.state;null==e&&this.loadData()}componentDidUpdate(e){const{location:{search:t}}=e,{location:{search:n}}=this.props;t!==n&&this.loadData()}async loadData(){const{location:{search:e},match:t,showError:n}=this.props,a=await j.fetchData(t,e,n);a&&this.setState({stats:a.issueCounts})}render(){const{stats:e}=this.state;if(null==e)return null;const t=A.map(e=>d.a.createElement("th",{key:e},e)),n=e.map(e=>d.a.createElement("tr",{key:e.owner},d.a.createElement("td",null,e.owner),A.map(t=>d.a.createElement("td",{key:t},e[t]))));return d.a.createElement(d.a.Fragment,null,d.a.createElement(E.Panel,null,d.a.createElement(E.Panel.Heading,null,d.a.createElement(E.Panel.Title,{toggle:!0},"Filter")),d.a.createElement(E.Panel.Body,{collapsible:!0},d.a.createElement(y,{urlBase:"/report"}))),d.a.createElement(E.Table,{bordered:!0,condensed:!0,hover:!0,responsive:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null),t)),d.a.createElement("tbody",null,n)))}}const L=P(j);L.fetchData=j.fetchData;var V=L;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}class U extends d.a.Component{constructor(e){var t;super(e),this.state={value:(t=e.value,null!=t?t.toString():"")},this.onBlur=this.onBlur.bind(this),this.onChange=this.onChange.bind(this)}onChange(e){e.target.value.match(/^\d*$/)&&this.setState({value:e.target.value})}onBlur(e){const{onChange:t}=this.props,{value:n}=this.state;t(e,function(e){const t=parseInt(e,10);return Number.isNaN(t)?null:t}(n))}render(){const{value:e}=this.state;return d.a.createElement("input",R({type:"text"},this.props,{value:e,onBlur:this.onBlur,onChange:this.onChange}))}}function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}class G extends d.a.Component{constructor(e){var t;super(e),this.state={value:(t=e.value,null!=t?t.toISOString().substr(0,10):""),focused:!1,valid:!0},this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),this.onChange=this.onChange.bind(this)}onFocus(){this.setState({focused:!0})}onBlur(e){const{value:t,valid:n}=this.state,{onValidityChange:a,onChange:s}=this.props,o=function(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}(t),r=""===t||null!=o;r!==n&&a&&a(e,r),this.setState({focused:!1,valid:r}),r&&s(e,o)}onChange(e){e.target.value.match(/^[\d-]*$/)&&this.setState({value:e.target.value})}render(){const{valid:e,focused:t,value:n}=this.state,{value:a,onValidityChange:s,...o}=this.props,r=t||!e?n:null!=(l=a)?l.toDateString():"";var l;return d.a.createElement("input",q({},o,{value:r,placeholder:t?"yyyy-mm-dd":null,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.onChange}))}}class H extends d.a.Component{constructor(e){var t;super(e),this.state={value:(t=e.value,null!=t?t:"")},this.onBlur=this.onBlur.bind(this),this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e.target.value})}onBlur(e){const{onChange:t}=this.props,{value:n}=this.state;var a;t(e,0===(a=n).trim().length?null:a)}render(){const{value:e}=this.state,{tag:t="input",...n}=this.props;return d.a.createElement(t,{...n,value:e,onBlur:this.onBlur,onChange:this.onChange})}}class z extends d.a.Component{static async fetchData(e,t,n){const{params:{id:a}}=e;return await N("query issue($id: Int!) {\n      issue(id: $id) {\n        id title status owner\n        effort created due description\n      }\n    }",{id:a},n)}constructor(){super();const e=k.initialData?k.initialData.issue:null;delete k.initialData,this.state={issue:e,invalidFields:{},showingValidation:!1},this.onChange=this.onChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.onValidityChange=this.onValidityChange.bind(this),this.dismissValidation=this.dismissValidation.bind(this),this.showValidation=this.showValidation.bind(this)}componentDidMount(){const{issue:e}=this.state;null==e&&this.loadData()}componentDidUpdate(e){const{match:{params:{id:t}}}=e,{match:{params:{id:n}}}=this.props;n!==t&&this.loadData()}onChange(e,t){const{name:n,value:a}=e.target,s=void 0===t?a:t;this.setState(e=>({issue:{...e.issue,[n]:s}}))}onValidityChange(e,t){const{name:n}=e.target;this.setState(e=>{const a={...e.invalidFields,[n]:!t};return t&&delete a[n],{invalidFields:a}})}async handleSubmit(e){e.preventDefault(),this.showValidation();const{issue:t,invalidFields:n}=this.state;if(0!==Object.keys(n).length)return;const{id:a,created:s,...o}=t,{showSuccess:r,showError:l}=this.props,i=await N("mutation issueUpdate(\n      $id: Int!\n      $changes: IssueUpdateInputs!\n    ) {\n      issueUpdate(\n        id: $id\n        changes: $changes\n      ) {\n        id title status owner\n        effort created due description\n      }\n    }",{changes:o,id:a},l);i&&(this.setState({issue:i.issueUpdate}),r("Updated issue successfully"))}async loadData(){const{match:e,showError:t}=this.props,n=await z.fetchData(e,null,t);this.setState({issue:n?n.issue:{},invalidFields:{}})}showValidation(){this.setState({showingValidation:!0})}dismissValidation(){this.setState({showingValidation:!1})}render(){const{issue:e}=this.state;if(null==e)return null;const{issue:{id:t}}=this.state,{match:{params:{id:n}}}=this.props;if(null==t)return null!=n?d.a.createElement("h3",null,`Issue with ID ${n} not found.`):null;const{invalidFields:a,showingValidation:s}=this.state;let o;0!==Object.keys(a).length&&s&&(o=d.a.createElement(E.Alert,{bsStyle:"danger",onDismiss:this.dismissValidation},"Please correct invalid fields before submitting."));const{issue:{title:r,status:l}}=this.state,{issue:{owner:i,effort:c,description:u}}=this.state,{issue:{created:h,due:m}}=this.state;return d.a.createElement(E.Panel,null,d.a.createElement(E.Panel.Heading,null,d.a.createElement(E.Panel.Title,null,"Editing issue: "+t)),d.a.createElement(E.Panel.Body,null,d.a.createElement(E.Form,{horizontal:!0,onSubmit:this.handleSubmit},d.a.createElement(E.FormGroup,null,d.a.createElement(E.Col,{componentClass:E.ControlLabel,sm:3},"Created"),d.a.createElement(E.Col,{sm:9},d.a.createElement(E.FormControl.Static,null,h.toDateString()))),d.a.createElement(E.FormGroup,null,d.a.createElement(E.Col,{componentClass:E.ControlLabel,sm:3},"Status"),d.a.createElement(E.Col,{sm:9},d.a.createElement(E.FormControl,{componentClass:"select",name:"status",value:l,onChange:this.onChange},d.a.createElement("option",{value:"New"},"New"),d.a.createElement("option",{value:"Assigned"},"Assigned"),d.a.createElement("option",{value:"Fixed"},"Fixed"),d.a.createElement("option",{value:"Closed"},"Closed")))),d.a.createElement(E.FormGroup,null,d.a.createElement(E.Col,{componentClass:E.ControlLabel,sm:3},"Owner"),d.a.createElement(E.Col,{sm:9},d.a.createElement(E.FormControl,{componentClass:H,name:"owner",value:i,onChange:this.onChange,key:t}))),d.a.createElement(E.FormGroup,null,d.a.createElement(E.Col,{componentClass:E.ControlLabel,sm:3},"Effort"),d.a.createElement(E.Col,{sm:9},d.a.createElement(E.FormControl,{componentClass:U,name:"effort",value:c,onChange:this.onChange,key:t}))),d.a.createElement(E.FormGroup,{validationState:a.due?"error":null},d.a.createElement(E.Col,{componentClass:E.ControlLabel,sm:3},"Due"),d.a.createElement(E.Col,{sm:9},d.a.createElement(E.FormControl,{componentClass:G,onValidityChange:this.onValidityChange,name:"due",value:m,onChange:this.onChange,key:t}),d.a.createElement(E.FormControl.Feedback,null))),d.a.createElement(E.FormGroup,null,d.a.createElement(E.Col,{componentClass:E.ControlLabel,sm:3},"Title"),d.a.createElement(E.Col,{sm:9},d.a.createElement(E.FormControl,{componentClass:H,size:50,name:"title",value:r,onChange:this.onChange,key:t}))),d.a.createElement(E.FormGroup,null,d.a.createElement(E.Col,{componentClass:E.ControlLabel,sm:3},"Description"),d.a.createElement(E.Col,{sm:9},d.a.createElement(E.FormControl,{componentClass:H,tag:"textarea",rows:4,cols:50,name:"description",value:u,onChange:this.onChange,key:t}))),d.a.createElement(E.FormGroup,null,d.a.createElement(E.Col,{smOffset:3,sm:6},d.a.createElement(E.ButtonToolbar,null,d.a.createElement(E.Button,{bsStyle:"primary",type:"submit"},"Submit"),d.a.createElement(g.LinkContainer,{to:"/issues"},d.a.createElement(E.Button,{bsStyle:"link"},"Back"))))),d.a.createElement(E.FormGroup,null,d.a.createElement(E.Col,{smOffset:3,sm:9},o)))),d.a.createElement(E.Panel.Footer,null,d.a.createElement(f.Link,{to:"/edit/"+(t-1)},"Prev")," | ",d.a.createElement(f.Link,{to:"/edit/"+(t+1)},"Next")))}}const J=P(z);J.fetchData=z.fetchData;var Y=J;class W extends d.a.Component{static async fetchData(){return await N("query {about}")}constructor(e){super(e);const t=k.initialData?k.initialData.about:null;delete k.initialData,this.state={apiAbout:t}}async componentDidMount(){const{apiAbout:e}=this.state;if(null==e){const e=await W.fetchData();this.setState({apiAbout:e.about})}}render(){const{apiAbout:e}=this.state;return d.a.createElement("div",{className:"text-center"},d.a.createElement("h3",null,"Issue Tracker version 0.9"),d.a.createElement("h4",null,e))}}var X=[{path:"/issues/:id?",component:$},{path:"/edit/:id",component:Y},{path:"/report",component:V},{path:"/about",component:W},{path:"*",component:function(){return d.a.createElement("h1",null,"Page Not Found")}}];function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Q(){return d.a.createElement(f.Switch,null,d.a.createElement(f.Redirect,{exact:!0,from:"/",to:"/issues"}),X.map(e=>d.a.createElement(f.Route,K({},e,{key:e.path}))))}class Z extends d.a.Component{constructor(e){super(e),this.state={showing:!1},this.showModal=this.showModal.bind(this),this.hideModal=this.hideModal.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}showModal(){this.setState({showing:!0})}hideModal(){this.setState({showing:!1})}async handleSubmit(e){e.preventDefault(),this.hideModal();const t=document.forms.issueAdd,n={owner:t.owner.value,title:t.title.value,due:new Date((new Date).getTime()+864e6)},{showError:a}=this.props,s=await N("mutation issueAdd($issue: IssueInputs!) {\n      issueAdd(issue: $issue) {\n        id\n      }\n    }",{issue:n},a);if(s){const{history:e}=this.props;e.push("/edit/"+s.issueAdd.id)}}render(){const{showing:e}=this.state;return d.a.createElement(d.a.Fragment,null,d.a.createElement(E.NavItem,{onClick:this.showModal},d.a.createElement(E.OverlayTrigger,{placement:"left",delayShow:1e3,overlay:d.a.createElement(E.Tooltip,{id:"create-issue"},"Create Issue")},d.a.createElement(E.Glyphicon,{glyph:"plus"}))),d.a.createElement(E.Modal,{keyboard:!0,show:e,onHide:this.hideModal},d.a.createElement(E.Modal.Header,{closeButton:!0},d.a.createElement(E.Modal.Title,null,"Create Issue")),d.a.createElement(E.Modal.Body,null,d.a.createElement(E.Form,{name:"issueAdd"},d.a.createElement(E.FormGroup,null,d.a.createElement(E.ControlLabel,null,"Title"),d.a.createElement(E.FormControl,{name:"title",autoFocus:!0})),d.a.createElement(E.FormGroup,null,d.a.createElement(E.ControlLabel,null,"Owner"),d.a.createElement(E.FormControl,{name:"owner"})))),d.a.createElement(E.Modal.Footer,null,d.a.createElement(E.ButtonToolbar,null,d.a.createElement(E.Button,{type:"button",bsStyle:"primary",onClick:this.handleSubmit},"Submit"),d.a.createElement(E.Button,{bsStyle:"link",onClick:this.hideModal},"Cancel")))))}}var ee=P(Object(f.withRouter)(Z));function te(){return d.a.createElement(E.Navbar,{fluid:!0},d.a.createElement(E.Navbar.Header,null,d.a.createElement(E.Navbar.Brand,null,"Issue Tracker")),d.a.createElement(E.Nav,null,d.a.createElement(g.LinkContainer,{exact:!0,to:"/"},d.a.createElement(E.NavItem,null,"Home")),d.a.createElement(g.LinkContainer,{to:"/issues"},d.a.createElement(E.NavItem,null,"Issue List")),d.a.createElement(g.LinkContainer,{to:"/report"},d.a.createElement(E.NavItem,null,"Report"))),d.a.createElement(E.Nav,{pullRight:!0},d.a.createElement(ee,null),d.a.createElement(E.NavDropdown,{id:"user-dropdown",title:d.a.createElement(E.Glyphicon,{glyph:"option-vertical"}),noCaret:!0},d.a.createElement(g.LinkContainer,{to:"/about"},d.a.createElement(E.MenuItem,null,"About")))))}function ne(){return d.a.createElement("small",null,d.a.createElement("hr",null),d.a.createElement("p",{className:"text-center"},"Full source code available at this"," ",d.a.createElement("a",{href:"https://github.com/vasansr/pro-mern-stack-2"},"GitHub repository")))}function ae(){return d.a.createElement("div",null,d.a.createElement(te,null),d.a.createElement(E.Grid,{fluid:!0},d.a.createElement(Q,null)),d.a.createElement(ne,null))}var se=n(12),oe=n.n(se);var re=async function(e,t){const n=X.find(t=>Object(f.matchPath)(e.path,t));let a;if(n&&n.component.fetchData){const t=Object(f.matchPath)(e.path,n),s=e.url.indexOf("?"),o=-1!==s?e.url.substr(s):null;a=await n.component.fetchData(t,o)}k.initialData=a;const s={},o=d.a.createElement(f.StaticRouter,{location:e.url,context:s},d.a.createElement(ae,null)),r=p.a.renderToString(o);s.url?t.redirect(301,s.url):t.send(function(e,t){return`<!DOCTYPE HTML>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>Pro MERN Stack</title>\n  <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" >\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <style>\n    table.table-hover tr {cursor: pointer;}\n    .panel-title a {display: block; width: 100%; cursor: pointer;}\n  </style>\n</head>\n<body>\n  \x3c!-- Page generated from template. --\x3e\n  <div id="contents">${e}</div>\n  <script>window.__INITIAL_DATA__ = ${oe()(t)}<\/script>\n  <script src="/env.js"><\/script>\n  <script src="/vendor.bundle.js"><\/script>\n  <script src="/app.bundle.js"><\/script>\n</body>\n</html>\n`}(r,a))};const le=r()();u.a.install(),s.a.config();process.env.ENABLE_HMR;le.use(r.a.static("public"));const ie=process.env.API_PROXY_TARGET;ie&&le.use("/graphql",i()({target:ie})),process.env.UI_API_ENDPOINT||(process.env.UI_API_ENDPOINT="http://localhost:3000/graphql"),process.env.UI_SERVER_API_ENDPOINT||(process.env.UI_SERVER_API_ENDPOINT=process.env.UI_API_ENDPOINT),le.get("/env.js",(e,t)=>{const n={UI_API_ENDPOINT:process.env.UI_API_ENDPOINT};t.send("window.ENV = "+JSON.stringify(n))}),le.get("*",(e,t,n)=>{re(e,t,n)});const ce=process.env.UI_SERVER_PORT||8e3;le.listen(ce,()=>{console.log("UI started on port "+ce)})}]);
//# sourceMappingURL=server.js.map