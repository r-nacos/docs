import{i as j}from"./chunk-353BL4L5-C1ZAb07r-BMNIXPVo.DeUhvYQH.js";import{a7 as L,a6 as N,a8 as P,a9 as q,ap as E,ao as I,q as c,O as B,A as Q,aB as X,aT as Y,aV as G,ab as H,au as J,aC as K,aW as y,aX as U,aY as O}from"./theme.BE8hXVzO.js";import{I as Z}from"./treemap-75Q7IDZK-CjtfQE8u-DBGEKm3F.OE5KxfjZ.js";import{d as R}from"./arc-CegaQWj_-yn6JxQT-.RpYF2YTw.js";import{g as _}from"./ordinal-DfAQgscy-BEJTu10r.B18UU7PG.js";import"./framework.DCarWLHJ.js";import"./baseUniq-BxlSXXQG-mwChZi-I.BCI7MSw9.js";import"./basePickBy-CC-D1y2F-DXbJFnnh.kDxgdjKF.js";import"./clone-78XdctpQ-DP6jZ9da.G8CDbccT.js";import"./init-DjUOC4st-C8Nwz6AJ.DDquQOD2.js";function ee(e,a){return a<e?-1:a>e?1:a>=e?0:NaN}function te(e){return e}var ae=K.pie,F={sections:new Map,showData:!1},M=F.sections,z=F.showData,ne=structuredClone(ae),W={getConfig:c(()=>structuredClone(ne),"getConfig"),clear:c(()=>{M=new Map,z=F.showData,J()},"clear"),setDiagramTitle:I,getDiagramTitle:E,setAccTitle:q,getAccTitle:P,setAccDescription:N,getAccDescription:L,addSection:c(({label:e,value:a})=>{M.has(e)||(M.set(e,a),B.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),getSections:c(()=>M,"getSections"),setShowData:c(e=>{z=e},"setShowData"),getShowData:c(()=>z,"getShowData")},re=c((e,a)=>{j(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ie={parse:c(async e=>{const a=await Z("pie",e);B.debug(a),re(a,W)},"parse")},se=c(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),le=c(e=>{const a=[...e.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,d)=>d.value-l.value);return function(){var l=te,d=ee,u=null,w=y(0),S=y(O),$=y(0);function n(t){var r,o,i,A,f,p=(t=U(t)).length,D=0,T=new Array(p),g=new Array(p),m=+w.apply(this,arguments),v=Math.min(O,Math.max(-O,S.apply(this,arguments)-m)),h=Math.min(Math.abs(v)/p,$.apply(this,arguments)),b=h*(v<0?-1:1);for(r=0;r<p;++r)(f=g[T[r]=r]=+l(t[r],r,t))>0&&(D+=f);for(d!=null?T.sort(function(x,C){return d(g[x],g[C])}):u!=null&&T.sort(function(x,C){return u(t[x],t[C])}),r=0,i=D?(v-p*b)/D:0;r<p;++r,m=A)o=T[r],A=m+((f=g[o])>0?f*i:0)+b,g[o]={data:t[o],index:r,value:f,startAngle:m,endAngle:A,padAngle:h};return g}return n.value=function(t){return arguments.length?(l=typeof t=="function"?t:y(+t),n):l},n.sortValues=function(t){return arguments.length?(d=t,u=null,n):d},n.sort=function(t){return arguments.length?(u=t,d=null,n):u},n.startAngle=function(t){return arguments.length?(w=typeof t=="function"?t:y(+t),n):w},n.endAngle=function(t){return arguments.length?(S=typeof t=="function"?t:y(+t),n):S},n.padAngle=function(t){return arguments.length?($=typeof t=="function"?t:y(+t),n):$},n}().value(l=>l.value)(a)},"createPieArcs"),oe=c((e,a,l,d)=>{B.debug(`rendering pie chart
`+e);const u=d.db,w=Q(),S=X(u.getConfig(),w.pie),$=18,n=450,t=n,r=Y(a),o=r.append("g");o.attr("transform","translate(225,225)");const{themeVariables:i}=w;let[A]=G(i.pieOuterStrokeWidth);A??(A=2);const f=S.textPosition,p=Math.min(t,n)/2-40,D=R().innerRadius(0).outerRadius(p),T=R().innerRadius(p*f).outerRadius(p*f);o.append("circle").attr("cx",0).attr("cy",0).attr("r",p+A/2).attr("class","pieOuterCircle");const g=u.getSections(),m=le(g),v=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],h=_(v);o.selectAll("mySlices").data(m).enter().append("path").attr("d",D).attr("fill",s=>h(s.data.label)).attr("class","pieCircle");let b=0;g.forEach(s=>{b+=s}),o.selectAll("mySlices").data(m).enter().append("text").text(s=>(s.data.value/b*100).toFixed(0)+"%").attr("transform",s=>"translate("+T.centroid(s)+")").style("text-anchor","middle").attr("class","slice"),o.append("text").text(u.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");const x=o.selectAll(".legend").data(h.domain()).enter().append("g").attr("class","legend").attr("transform",(s,k)=>"translate(216,"+(22*k-22*h.domain().length/2)+")");x.append("rect").attr("width",$).attr("height",$).style("fill",h).style("stroke",h),x.data(m).append("text").attr("x",22).attr("y",14).text(s=>{const{label:k,value:V}=s.data;return u.getShowData()?`${k} [${V}]`:k});const C=512+Math.max(...x.selectAll("text").nodes().map(s=>(s==null?void 0:s.getBoundingClientRect().width)??0));r.attr("viewBox",`0 0 ${C} 450`),H(r,n,C,S.useMaxWidth)},"draw"),we={parser:ie,db:W,renderer:{draw:oe},styles:se};export{we as diagram};
