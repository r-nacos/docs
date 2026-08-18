import{d as pt,g as rt,h as yt,o as dt}from"./chunk-67H74DCK-BzSPKGN1-D9cP9OkH.BfaFLiL6.js";import{l as ft}from"./chunk-E2GYISFI-vYodxFCX-CCBY7rt1.Bebz9GPR.js";import{a7 as gt,a6 as mt,a8 as xt,a9 as kt,ap as bt,ao as _t,q as s,A as V,aa as K,ab as wt,au as $t}from"./theme.DDk7qB6F.js";import{d as Q}from"./arc-CegaQWj_-yn6JxQT-.BUWpU-0K.js";import"./framework.DCarWLHJ.js";var W=function(){var t=s(function(c,n,r,p){for(r=r||{},p=c.length;p--;r[c[p]]=n);return r},"o"),e=[6,8,10,11,12,14,16,17,18],o=[1,9],l=[1,10],i=[1,11],h=[1,12],y=[1,13],u=[1,14],g={trace:s(function(){},"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:s(function(c,n,r,p,d,a,k){var x=a.length-1;switch(d){case 1:return a[x-1];case 2:case 6:case 7:this.$=[];break;case 3:a[x-1].push(a[x]),this.$=a[x-1];break;case 4:case 5:this.$=a[x];break;case 8:p.setDiagramTitle(a[x].substr(6)),this.$=a[x].substr(6);break;case 9:this.$=a[x].trim(),p.setAccTitle(this.$);break;case 10:case 11:this.$=a[x].trim(),p.setAccDescription(this.$);break;case 12:p.addSection(a[x].substr(8)),this.$=a[x].substr(8);break;case 13:p.addTask(a[x-1],a[x]),this.$="task"}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:o,12:l,14:i,16:h,17:y,18:u},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:o,12:l,14:i,16:h,17:y,18:u},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:s(function(c,n){if(!n.recoverable){var r=new Error(c);throw r.hash=n,r}this.trace(c)},"parseError"),parse:s(function(c){var n=this,r=[0],p=[],d=[null],a=[],k=this.table,x="",E=0,P=0,ht=a.slice.call(arguments,1),b=Object.create(this.lexer),A={yy:{}};for(var z in this.yy)Object.prototype.hasOwnProperty.call(this.yy,z)&&(A.yy[z]=this.yy[z]);b.setInput(c,A.yy),A.yy.lexer=b,A.yy.parser=this,typeof b.yylloc>"u"&&(b.yylloc={});var Y=b.yylloc;a.push(Y);var ut=b.options&&b.options.ranges;function U(){var $;return typeof($=p.pop()||b.lex()||1)!="number"&&($ instanceof Array&&($=(p=$).pop()),$=n.symbols_[$]||$),$}typeof A.yy.parseError=="function"?this.parseError=A.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,s(function($){r.length=r.length-2*$,d.length=d.length-$,a.length=a.length-$},"popStack"),s(U,"lex");for(var _,I,w,H,O,M,Z,D,j={};;){if(I=r[r.length-1],this.defaultActions[I]?w=this.defaultActions[I]:((_===null||typeof _>"u")&&(_=U()),w=k[I]&&k[I][_]),typeof w>"u"||!w.length||!w[0]){var J="";for(O in D=[],k[I])this.terminals_[O]&&O>2&&D.push("'"+this.terminals_[O]+"'");J=b.showPosition?"Parse error on line "+(E+1)+`:
`+b.showPosition()+`
Expecting `+D.join(", ")+", got '"+(this.terminals_[_]||_)+"'":"Parse error on line "+(E+1)+": Unexpected "+(_==1?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(J,{text:b.match,token:this.terminals_[_]||_,line:b.yylineno,loc:Y,expected:D})}if(w[0]instanceof Array&&w.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+_);switch(w[0]){case 1:r.push(_),d.push(b.yytext),a.push(b.yylloc),r.push(w[1]),_=null,P=b.yyleng,x=b.yytext,E=b.yylineno,Y=b.yylloc;break;case 2:if(M=this.productions_[w[1]][1],j.$=d[d.length-M],j._$={first_line:a[a.length-(M||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(M||1)].first_column,last_column:a[a.length-1].last_column},ut&&(j._$.range=[a[a.length-(M||1)].range[0],a[a.length-1].range[1]]),typeof(H=this.performAction.apply(j,[x,P,E,A.yy,w[1],d,a].concat(ht)))<"u")return H;M&&(r=r.slice(0,-1*M*2),d=d.slice(0,-1*M),a=a.slice(0,-1*M)),r.push(this.productions_[w[1]][0]),d.push(j.$),a.push(j._$),Z=k[r[r.length-2]][r[r.length-1]],r.push(Z);break;case 3:return!0}}return!0},"parse")},m=function(){var c={EOF:1,parseError:s(function(n,r){if(!this.yy.parser)throw new Error(n);this.yy.parser.parseError(n,r)},"parseError"),setInput:s(function(n,r){return this.yy=r||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:s(function(){var n=this._input[0];return this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n,n.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},"input"),unput:s(function(n){var r=n.length,p=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r),this.offset-=r;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),p.length-1&&(this.yylineno-=p.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:p?(p.length===d.length?this.yylloc.first_column:0)+d[d.length-p.length].length-p[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-r]),this.yyleng=this.yytext.length,this},"unput"),more:s(function(){return this._more=!0,this},"more"),reject:s(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:s(function(n){this.unput(this.match.slice(n))},"less"),pastInput:s(function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:s(function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:s(function(){var n=this.pastInput(),r=new Array(n.length+1).join("-");return n+this.upcomingInput()+`
`+r+"^"},"showPosition"),test_match:s(function(n,r){var p,d,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),(d=n[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],p=this.performAction.call(this,this.yy,this,r,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),p)return p;if(this._backtrack){for(var k in a)this[k]=a[k];return!1}return!1},"test_match"),next:s(function(){if(this.done)return this.EOF;var n,r,p,d;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),k=0;k<a.length;k++)if((p=this._input.match(this.rules[a[k]]))&&(!r||p[0].length>r[0].length)){if(r=p,d=k,this.options.backtrack_lexer){if((n=this.test_match(p,a[k]))!==!1)return n;if(this._backtrack){r=!1;continue}return!1}if(!this.options.flex)break}return r?(n=this.test_match(r,a[d]))!==!1&&n:this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:s(function(){return this.next()||this.lex()},"lex"),begin:s(function(n){this.conditionStack.push(n)},"begin"),popState:s(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:s(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:s(function(n){return(n=this.conditionStack.length-1-Math.abs(n||0))>=0?this.conditionStack[n]:"INITIAL"},"topState"),pushState:s(function(n){this.begin(n)},"pushState"),stateStackSize:s(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:s(function(n,r,p,d){switch(p){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};return c}();function f(){this.yy={}}return g.lexer=m,s(f,"Parser"),f.prototype=g,g.Parser=f,new f}();W.parser=W;var vt=W,F="",X=[],B=[],L=[],Tt=s(function(){X.length=0,B.length=0,F="",L.length=0,$t()},"clear"),Mt=s(function(t){F=t,X.push(t)},"addSection"),St=s(function(){return X},"getSections"),Ct=s(function(){let t=tt(),e=0;for(;!t&&e<100;)t=tt(),e++;return B.push(...L),B},"getTasks"),Et=s(function(){const t=[];return B.forEach(e=>{e.people&&t.push(...e.people)}),[...new Set(t)].sort()},"updateActors"),At=s(function(t,e){const o=e.substr(1).split(":");let l=0,i=[];o.length===1?(l=Number(o[0]),i=[]):(l=Number(o[0]),i=o[1].split(","));const h=i.map(u=>u.trim()),y={section:F,type:F,people:h,task:t,score:l};L.push(y)},"addTask"),It=s(function(t){const e={section:F,type:F,description:t,task:t,classes:[]};B.push(e)},"addTaskOrg"),tt=s(function(){const t=s(function(o){return L[o].processed},"compileTask");let e=!0;for(const[o,l]of L.entries())t(o),e=e&&l.processed;return e},"compileTasks"),Pt=s(function(){return Et()},"getActors"),et={getConfig:s(()=>V().journey,"getConfig"),clear:Tt,setDiagramTitle:_t,getDiagramTitle:bt,setAccTitle:kt,getAccTitle:xt,setAccDescription:mt,getAccDescription:gt,addSection:Mt,getSections:St,getTasks:Ct,addTask:At,addTaskOrg:It,getActors:Pt},jt=s(t=>`.label {
    font-family: ${t.fontFamily};
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
    font-family: ${t.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
  ${ft()}
`,"getStyles"),G=s(function(t,e){return dt(t,e)},"drawRect"),Ft=s(function(t,e){const o=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),l=t.append("g");function i(u){const g=Q().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(6.8181818181818175);u.append("path").attr("class","mouth").attr("d",g).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function h(u){const g=Q().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(6.8181818181818175);u.append("path").attr("class","mouth").attr("d",g).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function y(u){u.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return l.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),l.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),s(i,"smile"),s(h,"sad"),s(y,"ambivalent"),e.score>3?i(l):e.score<3?h(l):y(l),o},"drawFace"),at=s(function(t,e){const o=t.append("circle");return o.attr("cx",e.cx),o.attr("cy",e.cy),o.attr("class","actor-"+e.pos),o.attr("fill",e.fill),o.attr("stroke",e.stroke),o.attr("r",e.r),o.class!==void 0&&o.attr("class",o.class),e.title!==void 0&&o.append("title").text(e.title),o},"drawCircle"),ot=s(function(t,e){return yt(t,e)},"drawText"),Vt=s(function(t,e){function o(i,h,y,u,g){return i+","+h+" "+(i+y)+","+h+" "+(i+y)+","+(h+u-g)+" "+(i+y-1.2*g)+","+(h+u)+" "+i+","+(h+u)}s(o,"genPoints");const l=t.append("polygon");l.attr("points",o(e.x,e.y,50,20,7)),l.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,ot(t,e)},"drawLabel"),Bt=s(function(t,e,o){const l=t.append("g"),i=rt();i.x=e.x,i.y=e.y,i.fill=e.fill,i.width=o.width*e.taskCount+o.diagramMarginX*(e.taskCount-1),i.height=o.height,i.class="journey-section section-type-"+e.num,i.rx=3,i.ry=3,G(l,i),lt(o)(e.text,l,i.x,i.y,i.width,i.height,{class:"journey-section section-type-"+e.num},o,e.colour)},"drawSection"),nt=-1,Lt=s(function(t,e,o){const l=e.x+o.width/2,i=t.append("g");nt++,i.append("line").attr("id","task"+nt).attr("x1",l).attr("y1",e.y).attr("x2",l).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),Ft(i,{cx:l,cy:300+30*(5-e.score),score:e.score});const h=rt();h.x=e.x,h.y=e.y,h.fill=e.fill,h.width=o.width,h.height=o.height,h.class="task task-type-"+e.num,h.rx=3,h.ry=3,G(i,h);let y=e.x+14;e.people.forEach(u=>{const g=e.actors[u].color,m={cx:y,cy:e.y,r:7,fill:g,stroke:"#000",title:u,pos:e.actors[u].position};at(i,m),y+=10}),lt(o)(e.task,i,h.x,h.y,h.width,h.height,{class:"task"},o,e.colour)},"drawTask"),Rt=s(function(t,e){pt(t,e)},"drawBackgroundRect"),lt=function(){function t(i,h,y,u,g,m,f,c){l(h.append("text").attr("x",y+g/2).attr("y",u+m/2+5).style("font-color",c).style("text-anchor","middle").text(i),f)}function e(i,h,y,u,g,m,f,c,n){const{taskFontSize:r,taskFontFamily:p}=c,d=i.split(/<br\s*\/?>/gi);for(let a=0;a<d.length;a++){const k=a*r-r*(d.length-1)/2,x=h.append("text").attr("x",y+g/2).attr("y",u).attr("fill",n).style("text-anchor","middle").style("font-size",r).style("font-family",p);x.append("tspan").attr("x",y+g/2).attr("dy",k).text(d[a]),x.attr("y",u+m/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),l(x,f)}}function o(i,h,y,u,g,m,f,c){const n=h.append("switch"),r=n.append("foreignObject").attr("x",y).attr("y",u).attr("width",g).attr("height",m).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");r.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(i),e(i,n,y,u,g,m,f,c),l(r,f)}function l(i,h){for(const y in h)y in h&&i.attr(y,h[y])}return s(t,"byText"),s(e,"byTspan"),s(o,"byFo"),s(l,"_setTextAttrs"),function(i){return i.textPlacement==="fo"?o:i.textPlacement==="old"?t:e}}(),R={drawRect:G,drawCircle:at,drawSection:Bt,drawText:ot,drawLabel:Vt,drawTask:Lt,drawBackgroundRect:Rt,initGraphics:s(function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics")},Ot=s(function(t){Object.keys(t).forEach(function(e){T[e]=t[e]})},"setConf"),S={},N=0;function ct(t){const e=V().journey,o=e.maxLabelWidth;N=0;let l=60;Object.keys(S).forEach(i=>{const h=S[i].color,y={cx:20,cy:l,r:7,fill:h,stroke:"#000",pos:S[i].position};R.drawCircle(t,y);let u=t.append("text").attr("visibility","hidden").text(i);const g=u.node().getBoundingClientRect().width;u.remove();let m=[];if(g<=o)m=[i];else{const f=i.split(" ");let c="";u=t.append("text").attr("visibility","hidden"),f.forEach(n=>{const r=c?`${c} ${n}`:n;if(u.text(r),u.node().getBoundingClientRect().width>o){if(c&&m.push(c),c=n,u.text(n),u.node().getBoundingClientRect().width>o){let p="";for(const d of n)p+=d,u.text(p+"-"),u.node().getBoundingClientRect().width>o&&(m.push(p.slice(0,-1)+"-"),p=d);c=p}}else c=r}),c&&m.push(c),u.remove()}m.forEach((f,c)=>{const n={x:40,y:l+7+20*c,fill:"#666",text:f,textMargin:e.boxTextMargin??5},r=R.drawText(t,n).node().getBoundingClientRect().width;r>N&&r>e.leftMargin-r&&(N=r)}),l+=Math.max(20,20*m.length)})}s(ct,"drawActorLegend");var T=V().journey,C=0,Dt=s(function(t,e,o,l){const i=V(),h=i.journey.titleColor,y=i.journey.titleFontSize,u=i.journey.titleFontFamily,g=i.securityLevel;let m;g==="sandbox"&&(m=K("#i"+e));const f=K(g==="sandbox"?m.nodes()[0].contentDocument.body:"body");v.init();const c=f.select("#"+e);R.initGraphics(c);const n=l.db.getTasks(),r=l.db.getDiagramTitle(),p=l.db.getActors();for(const P in S)delete S[P];let d=0;p.forEach(P=>{S[P]={color:T.actorColours[d%T.actorColours.length],position:d},d++}),ct(c),C=T.leftMargin+N,v.insert(0,0,C,50*Object.keys(S).length),Nt(c,n,0);const a=v.getBounds();r&&c.append("text").text(r).attr("x",C).attr("font-size",y).attr("font-weight","bold").attr("y",25).attr("fill",h).attr("font-family",u);const k=a.stopy-a.starty+2*T.diagramMarginY,x=C+a.stopx+2*T.diagramMarginX;wt(c,k,x,T.useMaxWidth),c.append("line").attr("x1",C).attr("y1",4*T.height).attr("x2",x-C-4).attr("y2",4*T.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const E=r?70:0;c.attr("viewBox",`${a.startx} -25 ${x} ${k+E}`),c.attr("preserveAspectRatio","xMinYMin meet"),c.attr("height",k+E+25)},"draw"),v={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:s(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},"init"),updateVal:s(function(t,e,o,l){t[e]===void 0?t[e]=o:t[e]=l(o,t[e])},"updateVal"),updateBounds:s(function(t,e,o,l){const i=V().journey,h=this;let y=0;function u(g){return s(function(m){y++;const f=h.sequenceItems.length-y+1;h.updateVal(m,"starty",e-f*i.boxMargin,Math.min),h.updateVal(m,"stopy",l+f*i.boxMargin,Math.max),h.updateVal(v.data,"startx",t-f*i.boxMargin,Math.min),h.updateVal(v.data,"stopx",o+f*i.boxMargin,Math.max),g!=="activation"&&(h.updateVal(m,"startx",t-f*i.boxMargin,Math.min),h.updateVal(m,"stopx",o+f*i.boxMargin,Math.max),h.updateVal(v.data,"starty",e-f*i.boxMargin,Math.min),h.updateVal(v.data,"stopy",l+f*i.boxMargin,Math.max))},"updateItemBounds")}s(u,"updateFn"),this.sequenceItems.forEach(u())},"updateBounds"),insert:s(function(t,e,o,l){const i=Math.min(t,o),h=Math.max(t,o),y=Math.min(e,l),u=Math.max(e,l);this.updateVal(v.data,"startx",i,Math.min),this.updateVal(v.data,"starty",y,Math.min),this.updateVal(v.data,"stopx",h,Math.max),this.updateVal(v.data,"stopy",u,Math.max),this.updateBounds(i,y,h,u)},"insert"),bumpVerticalPos:s(function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},"bumpVerticalPos"),getVerticalPos:s(function(){return this.verticalPos},"getVerticalPos"),getBounds:s(function(){return this.data},"getBounds")},q=T.sectionFills,it=T.sectionColours,Nt=s(function(t,e,o){const l=V().journey;let i="";const h=o+(2*l.height+l.diagramMarginY);let y=0,u="#CCC",g="black",m=0;for(const[f,c]of e.entries()){if(i!==c.section){u=q[y%q.length],m=y%q.length,g=it[y%it.length];let r=0;const p=c.section;for(let a=f;a<e.length&&e[a].section==p;a++)r+=1;const d={x:f*l.taskMargin+f*l.width+C,y:50,text:c.section,fill:u,num:m,colour:g,taskCount:r};R.drawSection(t,d,l),i=c.section,y++}const n=c.people.reduce((r,p)=>(S[p]&&(r[p]=S[p]),r),{});c.x=f*l.taskMargin+f*l.width+C,c.y=h,c.width=l.diagramMarginX,c.height=l.diagramMarginY,c.colour=g,c.fill=u,c.num=m,c.actors=n,R.drawTask(t,c,l),v.insert(c.x,c.y,c.x+c.width+l.taskMargin,450)}},"drawTasks"),st={setConf:Ot,draw:Dt},Gt={parser:vt,db:et,renderer:st,styles:jt,init:s(t=>{st.setConf(t.journey),et.clear()},"init")};export{Gt as diagram};
