(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{67:function(e,t,n){e.exports=n(95)},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),o=n.n(i),c=n(14),s=n(33),l=n(15),u=n(12),d=n(25),p=(n(73),n(8));function h(e,t){return function(e,t){if(!e.startsWith("__")&&"x"!==e&&"y"!==e&&"vx"!==e&&"vy"!==e&&"fx"!==e&&"fy"!==e&&"index"!==e&&"source"!==e&&"target"!==e)return t}(e,t)}var f=function e(t){var n=this;Object(l.a)(this,e),this._nodeMap={},this._linkMap={},this._nextNodeId=null,this._nextLinkId=null,this.toString=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return JSON.stringify({_nodeMap:n._nodeMap,_linkMap:n._linkMap,_nextNodeId:n._nextNodeId,_nextLinkId:n._nextLinkId},e,2)},this.addNode=function(e){var t={__id:n._nextNodeId,name:e,__links:{}};return n._nodeMap[n._nextNodeId]=t,n._nextNodeId++,t},this.deleteNode=function(e){if(e=n.findNode(e),Object.keys(e.__links).length>0)throw new Error("Cannot delete node, when node has links");delete n._nodeMap[e.__id]},this.addLink=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"CHILD";if(e===t)throw new Error("Cannot create link with same sourceId and targetId");var r=n._nodeMap[e].__links;for(var i in r){var o=r[i];if(o.sourceId===e&&o.targetId===t)throw new Error("Cannot create duplicate links")}var c={__id:n._nextLinkId,type:a,sourceId:e,targetId:t,source:e,target:t};return n._linkMap[n._nextLinkId]=c,n._nodeMap[e].__links[n._nextLinkId]=c,n._nodeMap[t].__links[n._nextLinkId]=c,n._nextLinkId++,c},this.deleteLink=function(e){e=n.findLink(e),delete n._linkMap[e.__id],delete n._nodeMap[e.sourceId].__links[e.__id],delete n._nodeMap[e.targetId].__links[e.__id]},this.findNode=function(e){var t;if(!(t="number"===typeof e?n._nodeMap[e]:e))throw new Error("Cannot find node ".concat(e));return t},this.findLink=function(e){var t;if(!(t="number"===typeof e?n._linkMap[e]:e))throw new Error("Cannot find link ".concat(e));return t},this.getNodeArray=function(){return n._nodeMap?Object.values(n._nodeMap):[]},this.getLinkArray=function(){return n._linkMap?Object.values(n._linkMap):[]};var a=JSON.parse(t);!function(e){for(var t in e._nodeMap)e._nodeMap[t].__id=Number(t);for(var n in e._linkMap)e._linkMap[n].__id=Number(n)}(a),function(e){for(var t in e._nodeMap)e._nodeMap[t].__links={};for(var n in e._linkMap){var a=e._linkMap[n];e._nodeMap[a.sourceId].__links[n]=a,e._nodeMap[a.targetId].__links[n]=a,a.source=a.sourceId,a.target=a.targetId}}(a),this._nodeMap=a._nodeMap,this._linkMap=a._linkMap,this._nextNodeId=a._nextNodeId,this._nextLinkId=a._nextLinkId},m=n(23),g=n.n(m),k=n(29);function v(e,t,n,a){return new Promise(function(r,i){var o=new XMLHttpRequest;o.onreadystatechange=function(){4===o.readyState&&(200===o.status||201===o.status?r(o.responseText):i(new Error("response failed, status: ".concat(o.status))))},o.open(e,t,!0),n&&Object.keys(n).forEach(function(e){o.setRequestHeader(e,n[e])}),a?o.send(JSON.stringify(a)):o.send()})}var b,_,j,w,y,N,O,E,S,x,C="https://api.github.com/",I="graphState.json",L=function(){function e(t,n){if(Object(l.a)(this,e),!t)throw new Error("Token not passed!");this._auth={Authorization:"token ".concat(t)},this._gistId=n,this._files=null,this._description="",this._public=null}return Object(u.a)(e,[{key:"create",value:function(){var e=Object(k.a)(g.a.mark(function e(t,n,a,r){var i,o,c;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.wrapNewFileData(t,n,a,r),e.next=3,v("POST","".concat(C,"gists"),this._auth,i);case 3:o=e.sent,e.prev=4,c=JSON.parse(o),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(4),console.error("Retrieved json from gist failed to parse: ".concat(e.t0.message)),e.t0;case 12:if(c){e.next=14;break}throw new Error("Data from response not available");case 14:return this._gistId=c.id,e.abrupt("return",c);case 16:case"end":return e.stop()}},e,this,[[4,8]])}));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(k.a)(g.a.mark(function e(t,n,a,r){var i,o,c;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.wrapNewFileData(t,n,a,r),e.next=3,v("PATCH","".concat(C,"gists/").concat(this._gistId),this._auth,i);case 3:o=e.sent,e.prev=4,c=JSON.parse(o),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(4),console.error("Retrieved json from gist failed to parse: ".concat(e.t0.message)),e.t0;case 12:if(c.id===this._gistId){e.next=14;break}throw new Error("Gist id from respons does not match the current Gist id");case 14:return e.abrupt("return",c);case 15:case"end":return e.stop()}},e,this,[[4,8]])}));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"read",value:function(){var e=Object(k.a)(g.a.mark(function e(){var t,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("GET","".concat(C,"gists/").concat(this._gistId),this._auth,null);case 2:t=e.sent,e.prev=3,n=JSON.parse(t),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(3),console.error("Retrieved json from gist failed to parse"),e.t0;case 11:if(n){e.next=13;break}throw new Error("Data from response not available");case 13:return this._description=n.description,this._files=n.files,this._public=n.public,e.abrupt("return",n);case 17:case"end":return e.stop()}},e,this,[[3,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"wrapNewFileData",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._public,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this._description;return this._files||(this._files={}),this._files[e]={filename:e,content:t},{description:a,files:this._files,public:n}}}]),e}(),D=JSON.stringify({_nodeMap:{1:{name:"initial node"},2:{name:"linked node"}},_linkMap:{1:{type:"CHILD",sourceId:1,targetId:2}},_nextNodeId:3,_nextLinkId:2},null,2),M=(b=function(){function e(){var t=this;Object(l.a)(this,e),this.githubToken=null,Object(s.a)(this,"gists",_,this),this.graphData=null,Object(s.a)(this,"isLoaded",j,this),this.projectGist=null,this.initializeGraph=function(e){var n=e.files[I].content;t.graphData=new f(n),t.isLoaded=!0},Object(s.a)(this,"_activeNode",w,this),Object(s.a)(this,"targetLinkChoiceInProgress",y,this),Object(s.a)(this,"changeStamp",N,this),Object(s.a)(this,"savedChangeStamp",O,this)}return Object(u.a)(e,[{key:"loadProject",value:function(e){this.projectGist=new L(this.githubToken,e),this.projectGist.read().then(this.initializeGraph)}},{key:"newProject",value:function(){this.projectGist=new L(this.githubToken),this.projectGist.create("graphState.json",D,!1,"new graph").then(this.initializeGraph)}},{key:"saveProject",value:function(){var e=this,t=this.graphData.toString();this.projectGist.update(I,t).then(function(t){e.savedChangeStamp=e.changeStamp})}},{key:"activeNode",get:function(){return this._activeNode},set:function(e){this._activeNode&&(this.graphData.findNode(this._activeNode).__focused=!1),e&&(this.graphData.findNode(e).__focused=!0),this._activeNode=e}}]),e}(),_=Object(d.a)(b.prototype,"gists",[p.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=Object(d.a)(b.prototype,"isLoaded",[p.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(d.a)(b.prototype,"loadProject",[p.d],Object.getOwnPropertyDescriptor(b.prototype,"loadProject"),b.prototype),Object(d.a)(b.prototype,"newProject",[p.d],Object.getOwnPropertyDescriptor(b.prototype,"newProject"),b.prototype),Object(d.a)(b.prototype,"saveProject",[p.d],Object.getOwnPropertyDescriptor(b.prototype,"saveProject"),b.prototype),w=Object(d.a)(b.prototype,"_activeNode",[p.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=Object(d.a)(b.prototype,"targetLinkChoiceInProgress",[p.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),N=Object(d.a)(b.prototype,"changeStamp",[p.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),O=Object(d.a)(b.prototype,"savedChangeStamp",[p.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),b),P=(n(76),n(21)),A=n(20),T=n(22),G=(n(77),n(18));n(78);x=function(e){var t=window.innerWidth,n=window.innerHeight,a=function(e){e.attr("transform",function(e){return"translate("+e.x+","+e.y+")"}).attr("cx",function(e){return e.x=Math.max(30,Math.min(t-30,e.x))}).attr("cy",function(e){return e.y=Math.max(30,Math.min(n-30,e.y))})},r=function(e){e.attr("x1",function(e){return e.source.x}).attr("y1",function(e){return e.source.y}).attr("x2",function(e){return e.target.x}).attr("y2",function(e){return e.target.y})},i=function(e){e.selectAll(".node").call(a),e.selectAll(".link").call(r)},c=function(t){G.b.active||e.force.alphaTarget(.3).restart(),t.fx=t.x,t.fy=t.y},s=function(e){e.fx=G.b.x,e.fy=G.b.y},l=function(t){G.b.active||e.force.alphaTarget(0),t.fx=null,t.fy=null};return e.width=t,e.height=n,e.enterNode=function(e){e.select("circle").attr("r",25).style("fill","tomato").style("stroke","bisque").style("stroke-width","3px"),e.select("text").style("fill","honeydew").style("font-weight","600").style("text-transform","uppercase").style("text-anchor","middle").style("alignment-baseline","middle").style("font-size","10px").style("font-family","cursive")},e.updateNode=a,e.enterLink=function(e){e.attr("stroke-width",3).attr("stroke","bisque")},e.updateLink=r,e.updateGraph=i,e.initForce=function(t,n){e.force=G.g(t).force("charge",G.f().strength(-300)).force("link",G.e(n).id(function(e){return e.__id}).distance(130)).force("center",G.c().x(e.width/2).y(e.height/2)).force("collide",G.d([5]).iterations([5]))},e.dragStarted=c,e.dragging=s,e.dragEnded=l,e.initDrag=function(){return G.i("g.node").call(G.a().on("start",c).on("drag",s).on("end",l))},e.initTick=function(t){t.d3Graph=G.h(o.a.findDOMNode(t)),e.force.on("tick",function(){t.d3Graph.call(i)})},e}(x||{});var z,F,H,J=Object(c.b)("projectStore")(E=Object(c.c)(E=function(e){function t(){return Object(l.a)(this,t),Object(P.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.projectStore.graphData;x.initForce(e.getNodeArray(),e.getLinkArray()),x.initTick(this),x.initDrag()}},{key:"componentDidUpdate",value:function(e){var t=this.props.projectStore.graphData;e.changeStamp!==this.props.changeStamp&&(x.initForce(t.getNodeArray(),t.getLinkArray()),x.initTick(this),x.initDrag())}},{key:"render",value:function(){var e=this.props.projectStore,t=e.graphData,n=(e.activeNode,t.getNodeArray().map(function(e){return r.a.createElement(B,{key:e.__id,name:e.name,data:e,focused:e.__focused})})),a=t.getLinkArray().map(function(e){return r.a.createElement(W,{key:e.__id,data:e})});return r.a.createElement("div",{className:"graph_container"},r.a.createElement("svg",{className:"graph",width:x.width,height:x.height},r.a.createElement("defs",null,r.a.createElement("marker",{id:"arrow",viewBox:"0 0 10 10",refX:"26",refY:"5",markerWidth:"5",markerHeight:"5",orient:"auto-start-reverse",markerUnits:"strokeWidth"},r.a.createElement("path",{d:"M 0 0 L 10 5 L 0 10 z"}))),r.a.createElement("g",null,a),r.a.createElement("g",null,n)))}}]),t}(a.Component))||E)||E,W=function(e){function t(){return Object(l.a)(this,t),Object(P.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.d3Link=G.h(o.a.findDOMNode(this)).datum(this.props.data).call(x.enterLink)}},{key:"componentDidUpdate",value:function(){this.d3Link.datum(this.props.data).call(x.updateLink)}},{key:"render",value:function(){return r.a.createElement("line",{className:"link",markerEnd:"url('#arrow')"})}}]),t}(a.Component),B=Object(c.b)("projectStore")(S=Object(c.c)(S=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(P.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).processFocus=function(e,t){e.select("circle").classed("focused",t)},n.handleClick=function(e){var t=n.props.projectStore;if(t.targetLinkChoiceInProgress){var a=t.activeNode,r=Number(e.currentTarget.dataset.nodeId);try{t.graphData.addLink(a,r,"CHILD")}catch(e){return void console.warn(e.message)}t.targetLinkChoiceInProgress=!1,t.changeStamp++}else t.activeNode=Number(e.currentTarget.dataset.nodeId)},n}return Object(T.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.d3Node=G.h(o.a.findDOMNode(this)).datum(this.props.data).call(x.enterNode).call(this.processFocus,this.props.focused)}},{key:"componentDidUpdate",value:function(){this.d3Node.datum(this.props.data).call(x.updateNode).call(this.processFocus,this.props.focused)}},{key:"render",value:function(){var e=this.props.data.__id;return r.a.createElement("g",{className:"node",onClick:this.handleClick,"data-node-id":e},r.a.createElement("circle",null),r.a.createElement("text",null,this.props.data.name))}}]),t}(a.Component))||S)||S,R=J,q=(n(79),n(130)),U=n(131),X=n(62),K=n.n(X),Y=n(127),$=n(128),Q=n(133),V=n(129),Z=n(63),ee=n(126),te=n(135),ne=Object(te.a)(ee.a)({margin:"2px"}),ae=function(e){var t=e.size,n=void 0===t?"small":t,a=e.variant,i=void 0===a?"contained":a,o=e.children,c=Object(Z.a)(e,["size","variant","children"]);return r.a.createElement(ne,Object.assign({size:n,variant:i},c),o)},re=Object(c.b)("projectStore")(z=Object(c.c)(z=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(P.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(i)))).state={activeNode:null,linksHided:!1},n.renderActiveNodeInfo=function(e){var t=e.description?e.description:"";return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{label:"Node Name",fullWidth:!0,multiline:!0,variant:"outlined",margin:"normal",value:e.name,onChange:function(t){return n.handleChangeNodeName(t,e)}}),r.a.createElement("br",null),r.a.createElement(U.a,{label:"Description",fullWidth:!0,multiline:!0,variant:"outlined",margin:"normal",value:t,onChange:function(t){return n.handleChangeDescription(t,e)}}),r.a.createElement("br",null),"Node ID: ",e.__id,r.a.createElement("br",null))},n.handleChangeNodeName=function(e,t){t.name=e.target.value,n.props.projectStore.changeStamp++},n.handleChangeDescription=function(e,t){t.description=e.target.value,n.props.projectStore.changeStamp++},n.renderLinks=function(e){var t=n.props.projectStore.graphData;if(n.state.linksHided)return r.a.createElement(ae,{onClick:n.showLinks},"Show links ...");var a=[],i=function(i){var o=e.__links[i],c=t.findNode(o.sourceId),s=t.findNode(o.targetId);a.push(r.a.createElement($.a,{key:"item-".concat(i),button:!0},r.a.createElement(Q.a,null,r.a.createElement("b",null,"source: "),c.__id,": ",c.name,","," ",r.a.createElement("b",null,"target: "),s.__id,": ",s.name),r.a.createElement(V.a,null,r.a.createElement(q.a,{onClick:function(){return n.handleDeleteLink(o)}},r.a.createElement(K.a,{fontSize:"small"})))))};for(var o in e.__links)i(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Links:"),r.a.createElement(Y.a,{className:"links-list",subheader:r.a.createElement("li",null),dense:!0},a))},n.showLinks=function(){n.setState({linksHided:!1})},n.renderDeleteNodeButton=function(e){return Object.keys(e.__links).length>0?null:r.a.createElement(ae,{onClick:function(){return n.handleDeleteNode(e)}},"Delete this node")},n.renderNewLinkComponent=function(){return n.props.projectStore.targetLinkChoiceInProgress?r.a.createElement("div",null,"Click on target node to create new link ... ",r.a.createElement(ae,{onClick:n.handleAbortNewLinkCreation,variant:"outlined",color:"secondary"},"cancel")):r.a.createElement("div",null,r.a.createElement(ae,{onClick:n.handleNewLinkTargetSelection},"add new link..."),r.a.createElement("br",null))},n.handleAbortNewLinkCreation=function(){n.props.projectStore.targetLinkChoiceInProgress=!1},n.renderNewChildButton=function(e){return r.a.createElement("div",{key:"newChild"},r.a.createElement(ae,{onClick:function(){return n.handleNewChildCreation(e.__id)}},"add new child..."),r.a.createElement("br",null))},n.handleDeleteNode=function(e){var t=n.props.projectStore;t.activeNode=null,t.graphData.deleteNode(e),t.changeStamp++},n.handleDeleteLink=function(e){var t=n.props.projectStore;t.graphData.deleteLink(e),t.changeStamp++},n.createNewNode=function(){var e=n.props.projectStore,t=e.graphData.addNode("new node");e.activeNode=t.__id,e.changeStamp++},n.handleNewChildCreation=function(e){var t=n.props.projectStore,a=t.graphData,r=a.addNode("new child node");a.addLink(r.__id,e,"CHILD"),t.activeNode=r.__id,t.changeStamp++},n.handleNewLinkTargetSelection=function(){n.props.projectStore.targetLinkChoiceInProgress=!0},n}return Object(T.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this.props.projectStore,n=t.activeNode;t.changeStamp;if(n){var a=t.graphData.findNode(n);e=r.a.createElement(r.a.Fragment,null,this.renderActiveNodeInfo(a),r.a.createElement("br",null),this.renderLinks(a),this.renderDeleteNodeButton(a),this.renderNewLinkComponent(a),this.renderNewChildButton(a))}else e=r.a.createElement(r.a.Fragment,null,"Click on node to edit",r.a.createElement("br",null),"or",r.a.createElement("br",null),r.a.createElement(ae,{onClick:this.createNewNode},"create new node"));return r.a.createElement("div",{key:"graphEditPanel",className:"graphEditPanel"},e)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.projectStore,a=n.activeNode;if(a===t.activeNode)return t;var r=null,i=!1;return a&&(r=n.graphData.findNode(a),i=Object.keys(r.__links).length>5),{activeNode:a,linksHided:i}}}]),t}(a.Component))||z)||z,ie=(n(93),Object(c.b)("projectStore")(F=Object(c.c)(F=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(P.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).handleSave=function(){n.props.projectStore.saveProject()},n}return Object(T.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this.props.projectStore;return e=t.changeStamp>t.savedChangeStamp?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"redPoint"},"Has unsaved changes"),r.a.createElement(ae,{onClick:this.handleSave},"Save")):r.a.createElement("span",{className:"greenPoint"},"Graph saved"),r.a.createElement("div",{className:"saveInterface"},e)}}]),t}(a.Component))||F)||F),oe=n(51),ce=n.n(oe),se=(n(94),"GITHUB_TOKEN");function le(e){var t=localStorage.getItem(se);if(t)return e(null,t);!function(e,t){ce.a.input({text:"Specify github ".concat(e)},function(e){return t(null,e)},function(){var n="Need Specify github ".concat(e," to continue =(");return ce.a.error({text:n}),t(new Error(n))})}("token with gist access",function(t,n){return t?e(t):(localStorage.setItem(se,n),e(null,n))})}function ue(){return(ue=Object(k.a)(g.a.mark(function e(t){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de(t);case 2:return n=e.sent,e.abrupt("return",n.filter(function(e){return!!e.files[I]}));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function de(e){return pe.apply(this,arguments)}function pe(){return(pe=Object(k.a)(g.a.mark(function e(t){var n,a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("GET","".concat(C,"gists"),{Authorization:"token ".concat(t)},null);case 2:n=e.sent,e.prev=3,a=JSON.parse(n),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(3),console.error("Retrieved json from gist storage failed to parse"),e.t0;case 11:if(a){e.next=13;break}throw new Error("Data from response not available");case 13:return e.abrupt("return",a);case 14:case"end":return e.stop()}},e,null,[[3,7]])}))).apply(this,arguments)}var he,fe=Object(c.b)("projectStore")(H=Object(c.c)(H=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(P.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).handleSelect=function(e){n.props.projectStore.loadProject(e)},n.handleNewGist=function(){n.props.projectStore.newProject()},n}return Object(T.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.projectStore;le(function(t,n){if(t)throw t;e.githubToken=n,function(e){return ue.apply(this,arguments)}(n).then(function(t){e.gists=t})})}},{key:"render",value:function(){var e=this,t=this.props.projectStore.gists;if(!t)return"gists loading...";var n=t.map(function(t){return r.a.createElement("span",{key:t.id,className:"gistDescription yellow",onClick:function(){return e.handleSelect(t.id)}},t.description)});return n.push(r.a.createElement("span",{key:"new",className:"gistDescription blue",onClick:this.handleNewGist},"create new")),r.a.createElement("div",{className:"gistSelection"},r.a.createElement("span",null,"Choose gist with graph:"),n)}}]),t}(a.Component))||H)||H,me=Object(c.b)("projectStore")(he=Object(c.c)(he=function(e){function t(){return Object(l.a)(this,t),Object(P.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this.props.projectStore,n=t.changeStamp,a=t.graphData;t.isLoaded;return e=a?r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{changeStamp:n}),r.a.createElement(re,null),r.a.createElement(ie,null)):r.a.createElement(fe,null),r.a.createElement("div",{className:"App"},e)}}]),t}(a.Component))||he)||he;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge={projectStore:new M};o.a.render(r.a.createElement(c.a,ge,r.a.createElement(me,null)),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[67,1,2]]]);
//# sourceMappingURL=main.32ab796d.chunk.js.map