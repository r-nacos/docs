import{a as Qt}from"./chunk-BFAMUDN2--_mLoQcM-8W1Vf50q.BhJJc0h_.js";import{$ as Zt}from"./chunk-SKB7J2MH-Zr_o4qjH-BQsYZan3.AX-isnP_.js";import{q as u,O as _,A as R,am as te,an as ee,a8 as se,a9 as ie,a7 as ne,a6 as re,ao as ae,ap as oe,bk as ce,ah as W,au as le}from"./theme.BE8hXVzO.js";var _t=function(){var t=u(function(O,r,o,g){for(o=o||{},g=O.length;g--;o[O[g]]=r);return o},"o"),e=[1,2],n=[1,3],s=[1,4],h=[2,4],a=[1,9],f=[1,11],m=[1,16],c=[1,17],y=[1,18],E=[1,19],k=[1,33],v=[1,20],x=[1,21],N=[1,22],$=[1,23],w=[1,24],d=[1,26],b=[1,27],I=[1,28],j=[1,29],z=[1,30],P=[1,31],Y=[1,32],tt=[1,35],et=[1,36],st=[1,37],it=[1,38],H=[1,34],p=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],nt=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,39,40,41,45,48,51,52,53,54,57],Et=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],pt={trace:u(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,CLICK:38,STRING:39,HREF:40,classDef:41,CLASSDEF_ID:42,CLASSDEF_STYLEOPTS:43,DEFAULT:44,style:45,STYLE_IDS:46,STYLEDEF_STYLEOPTS:47,class:48,CLASSENTITY_IDS:49,STYLECLASS:50,direction_tb:51,direction_bt:52,direction_rl:53,direction_lr:54,eol:55,";":56,EDGE_STATE:57,STYLE_SEPARATOR:58,left_of:59,right_of:60,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"CLICK",39:"STRING",40:"HREF",41:"classDef",42:"CLASSDEF_ID",43:"CLASSDEF_STYLEOPTS",44:"DEFAULT",45:"style",46:"STYLE_IDS",47:"STYLEDEF_STYLEOPTS",48:"class",49:"CLASSENTITY_IDS",50:"STYLECLASS",51:"direction_tb",52:"direction_bt",53:"direction_rl",54:"direction_lr",56:";",57:"EDGE_STATE",58:"STYLE_SEPARATOR",59:"left_of",60:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[9,5],[9,5],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[55,1],[55,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:u(function(O,r,o,g,S,i,C){var l=i.length-1;switch(S){case 3:return g.setRootDoc(i[l]),i[l];case 4:this.$=[];break;case 5:i[l]!="nl"&&(i[l-1].push(i[l]),this.$=i[l-1]);break;case 6:case 7:case 12:this.$=i[l];break;case 8:this.$="nl";break;case 13:const T=i[l-1];T.description=g.trimColon(i[l]),this.$=T;break;case 14:this.$={stmt:"relation",state1:i[l-2],state2:i[l]};break;case 15:const B=g.trimColon(i[l]);this.$={stmt:"relation",state1:i[l-3],state2:i[l-1],description:B};break;case 19:this.$={stmt:"state",id:i[l-3],type:"default",description:"",doc:i[l-1]};break;case 20:var M=i[l],X=i[l-2].trim();if(i[l].match(":")){var at=i[l].split(":");M=at[0],X=[X,at[1]]}this.$={stmt:"state",id:M,type:"default",description:X};break;case 21:this.$={stmt:"state",id:i[l-3],type:"default",description:i[l-5],doc:i[l-1]};break;case 22:this.$={stmt:"state",id:i[l],type:"fork"};break;case 23:this.$={stmt:"state",id:i[l],type:"join"};break;case 24:this.$={stmt:"state",id:i[l],type:"choice"};break;case 25:this.$={stmt:"state",id:g.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:i[l-1].trim(),note:{position:i[l-2].trim(),text:i[l].trim()}};break;case 29:this.$=i[l].trim(),g.setAccTitle(this.$);break;case 30:case 31:this.$=i[l].trim(),g.setAccDescription(this.$);break;case 32:this.$={stmt:"click",id:i[l-3],url:i[l-2],tooltip:i[l-1]};break;case 33:this.$={stmt:"click",id:i[l-3],url:i[l-1],tooltip:""};break;case 34:case 35:this.$={stmt:"classDef",id:i[l-1].trim(),classes:i[l].trim()};break;case 36:this.$={stmt:"style",id:i[l-1].trim(),styleClass:i[l].trim()};break;case 37:this.$={stmt:"applyClass",id:i[l-1].trim(),styleClass:i[l].trim()};break;case 38:g.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:g.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:g.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:g.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:i[l].trim(),type:"default",description:""};break;case 46:case 47:this.$={stmt:"state",id:i[l-2].trim(),classes:[i[l].trim()],type:"default",description:""}}},"anonymous"),table:[{3:1,4:e,5:n,6:s},{1:[3]},{3:5,4:e,5:n,6:s},{3:6,4:e,5:n,6:s},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],h,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:a,5:f,8:8,9:10,10:12,11:13,12:14,13:15,16:m,17:c,19:y,22:E,24:k,25:v,26:x,27:N,28:$,29:w,32:25,33:d,35:b,37:I,38:j,41:z,45:P,48:Y,51:tt,52:et,53:st,54:it,57:H},t(p,[2,5]),{9:39,10:12,11:13,12:14,13:15,16:m,17:c,19:y,22:E,24:k,25:v,26:x,27:N,28:$,29:w,32:25,33:d,35:b,37:I,38:j,41:z,45:P,48:Y,51:tt,52:et,53:st,54:it,57:H},t(p,[2,7]),t(p,[2,8]),t(p,[2,9]),t(p,[2,10]),t(p,[2,11]),t(p,[2,12],{14:[1,40],15:[1,41]}),t(p,[2,16]),{18:[1,42]},t(p,[2,18],{20:[1,43]}),{23:[1,44]},t(p,[2,22]),t(p,[2,23]),t(p,[2,24]),t(p,[2,25]),{30:45,31:[1,46],59:[1,47],60:[1,48]},t(p,[2,28]),{34:[1,49]},{36:[1,50]},t(p,[2,31]),{13:51,24:k,57:H},{42:[1,52],44:[1,53]},{46:[1,54]},{49:[1,55]},t(nt,[2,44],{58:[1,56]}),t(nt,[2,45],{58:[1,57]}),t(p,[2,38]),t(p,[2,39]),t(p,[2,40]),t(p,[2,41]),t(p,[2,6]),t(p,[2,13]),{13:58,24:k,57:H},t(p,[2,17]),t(Et,h,{7:59}),{24:[1,60]},{24:[1,61]},{23:[1,62]},{24:[2,48]},{24:[2,49]},t(p,[2,29]),t(p,[2,30]),{39:[1,63],40:[1,64]},{43:[1,65]},{43:[1,66]},{47:[1,67]},{50:[1,68]},{24:[1,69]},{24:[1,70]},t(p,[2,14],{14:[1,71]}),{4:a,5:f,8:8,9:10,10:12,11:13,12:14,13:15,16:m,17:c,19:y,21:[1,72],22:E,24:k,25:v,26:x,27:N,28:$,29:w,32:25,33:d,35:b,37:I,38:j,41:z,45:P,48:Y,51:tt,52:et,53:st,54:it,57:H},t(p,[2,20],{20:[1,73]}),{31:[1,74]},{24:[1,75]},{39:[1,76]},{39:[1,77]},t(p,[2,34]),t(p,[2,35]),t(p,[2,36]),t(p,[2,37]),t(nt,[2,46]),t(nt,[2,47]),t(p,[2,15]),t(p,[2,19]),t(Et,h,{7:78}),t(p,[2,26]),t(p,[2,27]),{5:[1,79]},{5:[1,80]},{4:a,5:f,8:8,9:10,10:12,11:13,12:14,13:15,16:m,17:c,19:y,21:[1,81],22:E,24:k,25:v,26:x,27:N,28:$,29:w,32:25,33:d,35:b,37:I,38:j,41:z,45:P,48:Y,51:tt,52:et,53:st,54:it,57:H},t(p,[2,32]),t(p,[2,33]),t(p,[2,21])],defaultActions:{5:[2,1],6:[2,2],47:[2,48],48:[2,49]},parseError:u(function(O,r){if(!r.recoverable){var o=new Error(O);throw o.hash=r,o}this.trace(O)},"parseError"),parse:u(function(O){var r=this,o=[0],g=[],S=[null],i=[],C=this.table,l="",M=0,X=0,at=i.slice.call(arguments,1),T=Object.create(this.lexer),B={yy:{}};for(var yt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,yt)&&(B.yy[yt]=this.yy[yt]);T.setInput(O,B.yy),B.yy.lexer=T,B.yy.parser=this,typeof T.yylloc>"u"&&(T.yylloc={});var gt=T.yylloc;i.push(gt);var qt=T.options&&T.options.ranges;function Ct(){var L;return typeof(L=g.pop()||T.lex()||1)!="number"&&(L instanceof Array&&(L=(g=L).pop()),L=r.symbols_[L]||L),L}typeof B.yy.parseError=="function"?this.parseError=B.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,u(function(L){o.length=o.length-2*L,S.length=S.length-L,i.length=i.length-L},"popStack"),u(Ct,"lex");for(var D,U,A,Dt,ot,F,xt,ct,V={};;){if(U=o[o.length-1],this.defaultActions[U]?A=this.defaultActions[U]:((D===null||typeof D>"u")&&(D=Ct()),A=C[U]&&C[U][D]),typeof A>"u"||!A.length||!A[0]){var $t="";for(ot in ct=[],C[U])this.terminals_[ot]&&ot>2&&ct.push("'"+this.terminals_[ot]+"'");$t=T.showPosition?"Parse error on line "+(M+1)+`:
`+T.showPosition()+`
Expecting `+ct.join(", ")+", got '"+(this.terminals_[D]||D)+"'":"Parse error on line "+(M+1)+": Unexpected "+(D==1?"end of input":"'"+(this.terminals_[D]||D)+"'"),this.parseError($t,{text:T.match,token:this.terminals_[D]||D,line:T.yylineno,loc:gt,expected:ct})}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+U+", token: "+D);switch(A[0]){case 1:o.push(D),S.push(T.yytext),i.push(T.yylloc),o.push(A[1]),D=null,X=T.yyleng,l=T.yytext,M=T.yylineno,gt=T.yylloc;break;case 2:if(F=this.productions_[A[1]][1],V.$=S[S.length-F],V._$={first_line:i[i.length-(F||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(F||1)].first_column,last_column:i[i.length-1].last_column},qt&&(V._$.range=[i[i.length-(F||1)].range[0],i[i.length-1].range[1]]),typeof(Dt=this.performAction.apply(V,[l,X,M,B.yy,A[1],S,i].concat(at)))<"u")return Dt;F&&(o=o.slice(0,-1*F*2),S=S.slice(0,-1*F),i=i.slice(0,-1*F)),o.push(this.productions_[A[1]][0]),S.push(V.$),i.push(V._$),xt=C[o[o.length-2]][o[o.length-1]],o.push(xt);break;case 3:return!0}}return!0},"parse")},Kt=function(){var O={EOF:1,parseError:u(function(r,o){if(!this.yy.parser)throw new Error(r);this.yy.parser.parseError(r,o)},"parseError"),setInput:u(function(r,o){return this.yy=o||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:u(function(){var r=this._input[0];return this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r,r.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},"input"),unput:u(function(r){var o=r.length,g=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var S=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),g.length-1&&(this.yylineno-=g.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:g?(g.length===S.length?this.yylloc.first_column:0)+S[S.length-g.length].length-g[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},"unput"),more:u(function(){return this._more=!0,this},"more"),reject:u(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:u(function(r){this.unput(this.match.slice(r))},"less"),pastInput:u(function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:u(function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:u(function(){var r=this.pastInput(),o=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+o+"^"},"showPosition"),test_match:u(function(r,o){var g,S,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),(S=r[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=S.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:S?S[S.length-1].length-S[S.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],g=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),g)return g;if(this._backtrack){for(var C in i)this[C]=i[C];return!1}return!1},"test_match"),next:u(function(){if(this.done)return this.EOF;var r,o,g,S;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),C=0;C<i.length;C++)if((g=this._input.match(this.rules[i[C]]))&&(!o||g[0].length>o[0].length)){if(o=g,S=C,this.options.backtrack_lexer){if((r=this.test_match(g,i[C]))!==!1)return r;if(this._backtrack){o=!1;continue}return!1}if(!this.options.flex)break}return o?(r=this.test_match(o,i[S]))!==!1&&r:this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:u(function(){return this.next()||this.lex()},"lex"),begin:u(function(r){this.conditionStack.push(r)},"begin"),popState:u(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:u(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:u(function(r){return(r=this.conditionStack.length-1-Math.abs(r||0))>=0?this.conditionStack[r]:"INITIAL"},"topState"),pushState:u(function(r){this.begin(r)},"pushState"),stateStackSize:u(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:u(function(r,o,g,S){switch(g){case 0:return 38;case 1:return 40;case 2:return 39;case 3:return 44;case 4:case 45:return 51;case 5:case 46:return 52;case 6:case 47:return 53;case 7:case 48:return 54;case 8:case 9:case 11:case 12:case 13:case 14:case 57:case 59:case 65:break;case 10:case 80:return 5;case 15:case 35:return this.pushState("SCALE"),17;case 16:case 36:return 18;case 17:case 23:case 37:case 52:case 55:this.popState();break;case 18:return this.begin("acc_title"),33;case 19:return this.popState(),"acc_title_value";case 20:return this.begin("acc_descr"),35;case 21:return this.popState(),"acc_descr_value";case 22:this.begin("acc_descr_multiline");break;case 24:return"acc_descr_multiline_value";case 25:return this.pushState("CLASSDEF"),41;case 26:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 27:return this.popState(),this.pushState("CLASSDEFID"),42;case 28:return this.popState(),43;case 29:return this.pushState("CLASS"),48;case 30:return this.popState(),this.pushState("CLASS_STYLE"),49;case 31:return this.popState(),50;case 32:return this.pushState("STYLE"),45;case 33:return this.popState(),this.pushState("STYLEDEF_STYLES"),46;case 34:return this.popState(),47;case 38:this.pushState("STATE");break;case 39:case 42:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),25;case 40:case 43:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),26;case 41:case 44:return this.popState(),o.yytext=o.yytext.slice(0,-10).trim(),27;case 49:this.pushState("STATE_STRING");break;case 50:return this.pushState("STATE_ID"),"AS";case 51:case 67:return this.popState(),"ID";case 53:return"STATE_DESCR";case 54:return 19;case 56:return this.popState(),this.pushState("struct"),20;case 58:return this.popState(),21;case 60:return this.begin("NOTE"),29;case 61:return this.popState(),this.pushState("NOTE_ID"),59;case 62:return this.popState(),this.pushState("NOTE_ID"),60;case 63:this.popState(),this.pushState("FLOATING_NOTE");break;case 64:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 66:return"NOTE_TEXT";case 68:return this.popState(),this.pushState("NOTE_TEXT"),24;case 69:return this.popState(),o.yytext=o.yytext.substr(2).trim(),31;case 70:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),31;case 71:case 72:return 6;case 73:return 16;case 74:return 57;case 75:return 24;case 76:return o.yytext=o.yytext.trim(),14;case 77:return 15;case 78:return 28;case 79:return 58;case 81:return"INVALID"}},"anonymous"),rules:[/^(?:click\b)/i,/^(?:href\b)/i,/^(?:"[^"]*")/i,/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[12,13],inclusive:!1},struct:{rules:[12,13,25,29,32,38,45,46,47,48,57,58,59,60,74,75,76,77,78],inclusive:!1},FLOATING_NOTE_ID:{rules:[67],inclusive:!1},FLOATING_NOTE:{rules:[64,65,66],inclusive:!1},NOTE_TEXT:{rules:[69,70],inclusive:!1},NOTE_ID:{rules:[68],inclusive:!1},NOTE:{rules:[61,62,63],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[34],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[33],inclusive:!1},CLASS_STYLE:{rules:[31],inclusive:!1},CLASS:{rules:[30],inclusive:!1},CLASSDEFID:{rules:[28],inclusive:!1},CLASSDEF:{rules:[26,27],inclusive:!1},acc_descr_multiline:{rules:[23,24],inclusive:!1},acc_descr:{rules:[21],inclusive:!1},acc_title:{rules:[19],inclusive:!1},SCALE:{rules:[16,17,36,37],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[51],inclusive:!1},STATE_STRING:{rules:[52,53],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[12,13,39,40,41,42,43,44,49,50,54,55,56],inclusive:!1},ID:{rules:[12,13],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,18,20,22,25,29,32,35,38,56,60,71,72,73,74,75,76,77,79,80,81],inclusive:!0}}};return O}();function rt(){this.yy={}}return pt.lexer=Kt,u(rt,"Parser"),rt.prototype=pt,pt.Parser=rt,new rt}();_t.parser=_t;var Ee=_t,K="state",J="root",bt="relation",Q="default",Yt="divider",Gt="fill:none",jt="fill: #333",zt="text",Mt="normal",ft="rect",mt="rectWithTitle",vt="divider",It="roundedWithTitle",Z="statediagram",he=`${Z}-state`,Ut="transition",de=`${Ut} note-edge`,ue=`${Z}-note`,pe=`${Z}-cluster`,ye=`${Z}-cluster-alt`,Wt="parent",Ht="note",kt="----",ge=`${kt}${Ht}`,At=`${kt}${Wt}`,Xt=u((t,e="TB")=>{if(!t.doc)return e;let n=e;for(const s of t.doc)s.stmt==="dir"&&(n=s.value);return n},"getDir"),Ce={getClasses:u(function(t,e){return e.db.getClasses()},"getClasses"),draw:u(async function(t,e,n,s){_.info("REF0:"),_.info("Drawing state diagram (v2)",e);const{securityLevel:h,state:a,layout:f}=R();s.db.extract(s.db.getRootDocV2());const m=s.db.getData(),c=Qt(e,h);m.type=s.type,m.layoutAlgorithm=f,m.nodeSpacing=(a==null?void 0:a.nodeSpacing)||50,m.rankSpacing=(a==null?void 0:a.rankSpacing)||50,m.markers=["barb"],m.diagramId=e,await te(m,c);try{(typeof s.db.getLinks=="function"?s.db.getLinks():new Map).forEach((y,E)=>{var d;const k=typeof E=="string"?E:typeof(E==null?void 0:E.id)=="string"?E.id:"";if(!k)return void _.warn("⚠️ Invalid or missing stateId from key:",JSON.stringify(E));const v=(d=c.node())==null?void 0:d.querySelectorAll("g");let x;if(v==null||v.forEach(b=>{var I;((I=b.textContent)==null?void 0:I.trim())===k&&(x=b)}),!x)return void _.warn("⚠️ Could not find node matching text:",k);const N=x.parentNode;if(!N)return void _.warn("⚠️ Node has no parent, cannot wrap:",k);const $=document.createElementNS("http://www.w3.org/2000/svg","a"),w=y.url.replace(/^"+|"+$/g,"");if($.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",w),$.setAttribute("target","_blank"),y.tooltip){const b=y.tooltip.replace(/^"+|"+$/g,"");$.setAttribute("title",b)}N.replaceChild($,x),$.appendChild(x),_.info("🔗 Wrapped node in <a> tag for:",k,y.url)})}catch(y){_.error("❌ Error injecting clickable links:",y)}ee.insertTitle(c,"statediagramTitleText",(a==null?void 0:a.titleTopMargin)??25,s.db.getDiagramTitle()),Zt(c,8,Z,(a==null?void 0:a.useMaxWidth)??!0)},"draw"),getDir:Xt},ht=new Map,G=0;function dt(t="",e=0,n="",s=kt){return`state-${t}${n!==null&&n.length>0?`${s}${n}`:""}-${e}`}u(dt,"stateDomId");var fe=u((t,e,n,s,h,a,f,m)=>{_.trace("items",e),e.forEach(c=>{switch(c.stmt){case K:case Q:ut(t,c,n,s,h,a,f,m);break;case bt:{ut(t,c.state1,n,s,h,a,f,m),ut(t,c.state2,n,s,h,a,f,m);const y={id:"edge"+G,start:c.state1.id,end:c.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Gt,labelStyle:"",label:W.sanitizeText(c.description??"",R()),arrowheadStyle:jt,labelpos:"c",labelType:zt,thickness:Mt,classes:Ut,look:f};h.push(y),G++}}})},"setupDoc"),Lt=u((t,e="TB")=>{let n=e;if(t.doc)for(const s of t.doc)s.stmt==="dir"&&(n=s.value);return n},"getDir");function q(t,e,n){if(!e.id||e.id==="</join></fork>"||e.id==="</choice>")return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach(h=>{const a=n.get(h);a&&(e.cssCompiledStyles=[...e.cssCompiledStyles??[],...a.styles])}));const s=t.find(h=>h.id===e.id);s?Object.assign(s,e):t.push(e)}function Vt(t){var e;return((e=t==null?void 0:t.classes)==null?void 0:e.join(" "))??""}function Jt(t){return(t==null?void 0:t.styles)??[]}u(q,"insertOrUpdateNode"),u(Vt,"getClassesFromDbInfo"),u(Jt,"getStylesFromDbInfo");var St,ut=u((t,e,n,s,h,a,f,m)=>{var x,N,$;const c=e.id,y=n.get(c),E=Vt(y),k=Jt(y),v=R();if(_.info("dataFetcher parsedItem",e,y,k),c!=="root"){let w=ft;e.start===!0?w="stateStart":e.start===!1&&(w="stateEnd"),e.type!==Q&&(w=e.type),ht.get(c)||ht.set(c,{id:c,shape:w,description:W.sanitizeText(c,v),cssClasses:`${E} ${he}`,cssStyles:k});const d=ht.get(c);e.description&&(Array.isArray(d.description)?(d.shape=mt,d.description.push(e.description)):(x=d.description)!=null&&x.length&&d.description.length>0?(d.shape=mt,d.description===c?d.description=[e.description]:d.description=[d.description,e.description]):(d.shape=ft,d.description=e.description),d.description=W.sanitizeTextOrArray(d.description,v)),((N=d.description)==null?void 0:N.length)===1&&d.shape===mt&&(d.type==="group"?d.shape=It:d.shape=ft),!d.type&&e.doc&&(_.info("Setting cluster for XCX",c,Lt(e)),d.type="group",d.isGroup=!0,d.dir=Lt(e),d.shape=e.type===Yt?vt:It,d.cssClasses=`${d.cssClasses} ${pe} ${a?ye:""}`);const b={labelStyle:"",shape:d.shape,label:d.description,cssClasses:d.cssClasses,cssCompiledStyles:[],cssStyles:d.cssStyles,id:c,dir:d.dir,domId:dt(c,G),type:d.type,isGroup:d.type==="group",padding:8,rx:10,ry:10,look:f};if(b.shape===vt&&(b.label=""),t&&t.id!=="root"&&(_.trace("Setting node ",c," to be child of its parent ",t.id),b.parentId=t.id),b.centerLabel=!0,e.note){const I={labelStyle:"",shape:"note",label:e.note.text,cssClasses:ue,cssStyles:[],cssCompiledStyles:[],id:c+ge+"-"+G,domId:dt(c,G,Ht),type:d.type,isGroup:d.type==="group",padding:($=v.flowchart)==null?void 0:$.padding,look:f,position:e.note.position},j=c+At,z={labelStyle:"",shape:"noteGroup",label:e.note.text,cssClasses:d.cssClasses,cssStyles:[],id:c+At,domId:dt(c,G,Wt),type:"group",isGroup:!0,padding:16,look:f,position:e.note.position};G++,z.id=j,I.parentId=j,q(s,z,m),q(s,I,m),q(s,b,m);let P=c,Y=I.id;e.note.position==="left of"&&(P=I.id,Y=c),h.push({id:P+"-"+Y,start:P,end:Y,arrowhead:"none",arrowTypeEnd:"",style:Gt,labelStyle:"",classes:de,arrowheadStyle:jt,labelpos:"c",labelType:zt,thickness:Mt,look:f})}else q(s,b,m)}e.doc&&(_.trace("Adding nodes children "),fe(e,e.doc,n,s,h,!a,f,m))},"dataFetcher"),me=u(()=>{ht.clear(),G=0},"reset"),Tt="[*]",wt="start",Nt="[*]",Ot="end",Rt="color",Bt="fill",Se="bgFill",Te=",",Ft=u(()=>new Map,"newClassesList"),Pt=u(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),lt=u(t=>JSON.parse(JSON.stringify(t)),"clone"),De=(u(St=class{constructor(t){this.version=t,this.nodes=[],this.edges=[],this.rootDoc=[],this.classes=Ft(),this.documents={root:Pt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.dividerCnt=0,this.links=new Map,this.getAccTitle=se,this.setAccTitle=ie,this.getAccDescription=ne,this.setAccDescription=re,this.setDiagramTitle=ae,this.getDiagramTitle=oe,this.clear(),this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this)}extract(t){this.clear(!0);for(const s of Array.isArray(t)?t:t.doc)switch(s.stmt){case K:this.addState(s.id.trim(),s.type,s.doc,s.description,s.note);break;case bt:this.addRelation(s.state1,s.state2,s.description);break;case"classDef":this.addStyleClass(s.id.trim(),s.classes);break;case"style":this.handleStyleDef(s);break;case"applyClass":this.setCssClass(s.id.trim(),s.styleClass);break;case"click":this.addLink(s.id,s.url,s.tooltip)}const e=this.getStates(),n=R();me(),ut(void 0,this.getRootDocV2(),e,this.nodes,this.edges,!0,n.look,this.classes);for(const s of this.nodes)if(Array.isArray(s.label)){if(s.description=s.label.slice(1),s.isGroup&&s.description.length>0)throw new Error(`Group nodes can only have label. Remove the additional description for node [${s.id}]`);s.label=s.label[0]}}handleStyleDef(t){const e=t.id.trim().split(","),n=t.styleClass.split(",");for(const s of e){let h=this.getState(s);if(!h){const a=s.trim();this.addState(a),h=this.getState(a)}h&&(h.styles=n.map(a=>{var f;return(f=a.replace(/;/g,""))==null?void 0:f.trim()}))}}setRootDoc(t){_.info("Setting root doc",t),this.rootDoc=t,this.version===1?this.extract(t):this.extract(this.getRootDocV2())}docTranslator(t,e,n){if(e.stmt===bt)return this.docTranslator(t,e.state1,!0),void this.docTranslator(t,e.state2,!1);if(e.stmt===K&&(e.id===Tt?(e.id=t.id+(n?"_start":"_end"),e.start=n):e.id=e.id.trim()),e.stmt!==J&&e.stmt!==K||!e.doc)return;const s=[];let h=[];for(const a of e.doc)if(a.type===Yt){const f=lt(a);f.doc=lt(h),s.push(f),h=[]}else h.push(a);if(s.length>0&&h.length>0){const a={stmt:K,id:ce(),type:"divider",doc:lt(h)};s.push(lt(a)),e.doc=s}e.doc.forEach(a=>this.docTranslator(e,a,!0))}getRootDocV2(){return this.docTranslator({id:J,stmt:J},{id:J,stmt:J,doc:this.rootDoc},!0),{id:J,doc:this.rootDoc}}addState(t,e=Q,n=void 0,s=void 0,h=void 0,a=void 0,f=void 0,m=void 0){const c=t==null?void 0:t.trim();if(this.currentDocument.states.has(c)){const y=this.currentDocument.states.get(c);if(!y)throw new Error(`State not found: ${c}`);y.doc||(y.doc=n),y.type||(y.type=e)}else _.info("Adding state ",c,s),this.currentDocument.states.set(c,{stmt:K,id:c,descriptions:[],type:e,doc:n,note:h,classes:[],styles:[],textStyles:[]});if(s&&(_.info("Setting state description",c,s),(Array.isArray(s)?s:[s]).forEach(y=>this.addDescription(c,y.trim()))),h){const y=this.currentDocument.states.get(c);if(!y)throw new Error(`State not found: ${c}`);y.note=h,y.note.text=W.sanitizeText(y.note.text,R())}a&&(_.info("Setting state classes",c,a),(Array.isArray(a)?a:[a]).forEach(y=>this.setCssClass(c,y.trim()))),f&&(_.info("Setting state styles",c,f),(Array.isArray(f)?f:[f]).forEach(y=>this.setStyle(c,y.trim()))),m&&(_.info("Setting state styles",c,f),(Array.isArray(m)?m:[m]).forEach(y=>this.setTextStyle(c,y.trim())))}clear(t){this.nodes=[],this.edges=[],this.documents={root:Pt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=Ft(),t||(this.links=new Map,le())}getState(t){return this.currentDocument.states.get(t)}getStates(){return this.currentDocument.states}logDocuments(){_.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}addLink(t,e,n){this.links.set(t,{url:e,tooltip:n}),_.warn("Adding link",t,e,n)}getLinks(){return this.links}startIdIfNeeded(t=""){return t===Tt?(this.startEndCount++,`${wt}${this.startEndCount}`):t}startTypeIfNeeded(t="",e=Q){return t===Tt?wt:e}endIdIfNeeded(t=""){return t===Nt?(this.startEndCount++,`${Ot}${this.startEndCount}`):t}endTypeIfNeeded(t="",e=Q){return t===Nt?Ot:e}addRelationObjs(t,e,n=""){const s=this.startIdIfNeeded(t.id.trim()),h=this.startTypeIfNeeded(t.id.trim(),t.type),a=this.startIdIfNeeded(e.id.trim()),f=this.startTypeIfNeeded(e.id.trim(),e.type);this.addState(s,h,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),this.addState(a,f,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),this.currentDocument.relations.push({id1:s,id2:a,relationTitle:W.sanitizeText(n,R())})}addRelation(t,e,n){if(typeof t=="object"&&typeof e=="object")this.addRelationObjs(t,e,n);else if(typeof t=="string"&&typeof e=="string"){const s=this.startIdIfNeeded(t.trim()),h=this.startTypeIfNeeded(t),a=this.endIdIfNeeded(e.trim()),f=this.endTypeIfNeeded(e);this.addState(s,h),this.addState(a,f),this.currentDocument.relations.push({id1:s,id2:a,relationTitle:n?W.sanitizeText(n,R()):void 0})}}addDescription(t,e){var h;const n=this.currentDocument.states.get(t),s=e.startsWith(":")?e.replace(":","").trim():e;(h=n==null?void 0:n.descriptions)==null||h.push(W.sanitizeText(s,R()))}cleanupLabel(t){return t.startsWith(":")?t.slice(2).trim():t.trim()}getDividerId(){return this.dividerCnt++,`divider-id-${this.dividerCnt}`}addStyleClass(t,e=""){this.classes.has(t)||this.classes.set(t,{id:t,styles:[],textStyles:[]});const n=this.classes.get(t);e&&n&&e.split(Te).forEach(s=>{const h=s.replace(/([^;]*);/,"$1").trim();if(RegExp(Rt).exec(s)){const a=h.replace(Bt,Se).replace(Rt,Bt);n.textStyles.push(a)}n.styles.push(h)})}getClasses(){return this.classes}setCssClass(t,e){t.split(",").forEach(n=>{var h;let s=this.getState(n);if(!s){const a=n.trim();this.addState(a),s=this.getState(a)}(h=s==null?void 0:s.classes)==null||h.push(e)})}setStyle(t,e){var n,s;(s=(n=this.getState(t))==null?void 0:n.styles)==null||s.push(e)}setTextStyle(t,e){var n,s;(s=(n=this.getState(t))==null?void 0:n.textStyles)==null||s.push(e)}getDirectionStatement(){return this.rootDoc.find(t=>t.stmt==="dir")}getDirection(){var t;return((t=this.getDirectionStatement())==null?void 0:t.value)??"TB"}setDirection(t){const e=this.getDirectionStatement();e?e.value=t:this.rootDoc.unshift({stmt:"dir",value:t})}trimColon(t){return t.startsWith(":")?t.slice(1).trim():t.trim()}getData(){const t=R();return{nodes:this.nodes,edges:this.edges,other:{},config:t,direction:Xt(this.getRootDocV2())}}getConfig(){return R().state}},"StateDB"),St.relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},St),xe=u(t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`,"getStyles");export{Ee as F,Ce as G,xe as U,De as j};
