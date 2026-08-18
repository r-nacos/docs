import{i as k}from"./chunk-353BL4L5-C1ZAb07r-BMNIXPVo.DeUhvYQH.js";import{a6 as O,a7 as S,ap as I,ao as E,a8 as F,a9 as z,q as l,aT as D,au as P,aB as v,aC as R,aD as w,O as B,ba as G}from"./theme.BE8hXVzO.js";import{I as j}from"./treemap-75Q7IDZK-CjtfQE8u-DBGEKm3F.OE5KxfjZ.js";import"./framework.DCarWLHJ.js";import"./baseUniq-BxlSXXQG-mwChZi-I.BCI7MSw9.js";import"./basePickBy-CC-D1y2F-DXbJFnnh.kDxgdjKF.js";import"./clone-78XdctpQ-DP6jZ9da.G8CDbccT.js";var x={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},b={axes:[],curves:[],options:x},h=structuredClone(b),V=R.radar,W=l(()=>v({...V,...w().radar}),"getConfig"),C=l(()=>h.axes,"getAxes"),_=l(()=>h.curves,"getCurves"),q=l(()=>h.options,"getOptions"),H=l(e=>{h.axes=e.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),X=l(e=>{h.curves=e.map(t=>({name:t.name,label:t.label??t.name,entries:Z(t.entries)}))},"setCurves"),Z=l(e=>{if(e[0].axis==null)return e.map(a=>a.value);const t=C();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(a=>{const r=e.find(n=>{var s;return((s=n.axis)==null?void 0:s.$refText)===a.name});if(r===void 0)throw new Error("Missing entry for axis "+a.label);return r.value})},"computeCurveEntries"),$={getAxes:C,getCurves:_,getOptions:q,setAxes:H,setCurves:X,setOptions:l(e=>{var a,r,n,s,o;const t=e.reduce((i,c)=>(i[c.name]=c,i),{});h.options={showLegend:((a=t.showLegend)==null?void 0:a.value)??x.showLegend,ticks:((r=t.ticks)==null?void 0:r.value)??x.ticks,max:((n=t.max)==null?void 0:n.value)??x.max,min:((s=t.min)==null?void 0:s.value)??x.min,graticule:((o=t.graticule)==null?void 0:o.value)??x.graticule}},"setOptions"),getConfig:W,clear:l(()=>{P(),h=structuredClone(b)},"clear"),setAccTitle:z,getAccTitle:F,setDiagramTitle:E,getDiagramTitle:I,getAccDescription:S,setAccDescription:O},J=l(e=>{k(e,$);const{axes:t,curves:a,options:r}=e;$.setAxes(t),$.setCurves(a),$.setOptions(r)},"populate"),K={parse:l(async e=>{const t=await j("radar",e);B.debug(t),J(t)},"parse")},N=l((e,t,a,r)=>{const n=r.db,s=n.getAxes(),o=n.getCurves(),i=n.getOptions(),c=n.getConfig(),p=n.getDiagramTitle(),g=D(t),d=Q(g,c),u=i.max??Math.max(...o.map(f=>Math.max(...f.entries))),y=i.min,m=Math.min(c.width,c.height)/2;U(d,s,m,i.ticks,i.graticule),Y(d,s,m,c),M(d,s,o,y,u,i.graticule,c),A(d,o,i.showLegend,c),d.append("text").attr("class","radarTitle").text(p).attr("x",0).attr("y",-c.height/2-c.marginTop)},"draw"),Q=l((e,t)=>{const a=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,n=t.marginLeft+t.width/2,s=t.marginTop+t.height/2;return e.attr("viewbox",`0 0 ${a} ${r}`).attr("width",a).attr("height",r),e.append("g").attr("transform",`translate(${n}, ${s})`)},"drawFrame"),U=l((e,t,a,r,n)=>{if(n==="circle")for(let s=0;s<r;s++){const o=a*(s+1)/r;e.append("circle").attr("r",o).attr("class","radarGraticule")}else if(n==="polygon"){const s=t.length;for(let o=0;o<r;o++){const i=a*(o+1)/r,c=t.map((p,g)=>{const d=2*g*Math.PI/s-Math.PI/2;return`${i*Math.cos(d)},${i*Math.sin(d)}`}).join(" ");e.append("polygon").attr("points",c).attr("class","radarGraticule")}}},"drawGraticule"),Y=l((e,t,a,r)=>{const n=t.length;for(let s=0;s<n;s++){const o=t[s].label,i=2*s*Math.PI/n-Math.PI/2;e.append("line").attr("x1",0).attr("y1",0).attr("x2",a*r.axisScaleFactor*Math.cos(i)).attr("y2",a*r.axisScaleFactor*Math.sin(i)).attr("class","radarAxisLine"),e.append("text").text(o).attr("x",a*r.axisLabelFactor*Math.cos(i)).attr("y",a*r.axisLabelFactor*Math.sin(i)).attr("class","radarAxisLabel")}},"drawAxes");function M(e,t,a,r,n,s,o){const i=t.length,c=Math.min(o.width,o.height)/2;a.forEach((p,g)=>{if(p.entries.length!==i)return;const d=p.entries.map((u,y)=>{const m=2*Math.PI*y/i-Math.PI/2,f=L(u,r,n,c);return{x:f*Math.cos(m),y:f*Math.sin(m)}});s==="circle"?e.append("path").attr("d",T(d,o.curveTension)).attr("class",`radarCurve-${g}`):s==="polygon"&&e.append("polygon").attr("points",d.map(u=>`${u.x},${u.y}`).join(" ")).attr("class",`radarCurve-${g}`)})}function L(e,t,a,r){return r*(Math.min(Math.max(e,t),a)-t)/(a-t)}function T(e,t){const a=e.length;let r=`M${e[0].x},${e[0].y}`;for(let n=0;n<a;n++){const s=e[(n-1+a)%a],o=e[n],i=e[(n+1)%a],c=e[(n+2)%a],p={x:o.x+(i.x-s.x)*t,y:o.y+(i.y-s.y)*t},g={x:i.x-(c.x-o.x)*t,y:i.y-(c.y-o.y)*t};r+=` C${p.x},${p.y} ${g.x},${g.y} ${i.x},${i.y}`}return`${r} Z`}function A(e,t,a,r){if(!a)return;const n=3*(r.width/2+r.marginRight)/4,s=3*-(r.height/2+r.marginTop)/4;t.forEach((o,i)=>{const c=e.append("g").attr("transform",`translate(${n}, ${s+20*i})`);c.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${i}`),c.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(o.label)})}l(M,"drawCurves"),l(L,"relativeRadius"),l(T,"closedRoundCurve"),l(A,"drawLegend");var tt={draw:N},at=l((e,t)=>{let a="";for(let r=0;r<e.THEME_COLOR_LIMIT;r++){const n=e[`cScale${r}`];a+=`
		.radarCurve-${r} {
			color: ${n};
			fill: ${n};
			fill-opacity: ${t.curveOpacity};
			stroke: ${n};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${n};
			fill-opacity: ${t.curveOpacity};
			stroke: ${n};
		}
		`}return a},"genIndexStyles"),et=l(e=>{const t=G(),a=w(),r=v(t,a.themeVariables);return{themeVariables:r,radarOptions:v(r.radar,e)}},"buildRadarStyleOptions"),dt={parser:K,db:$,renderer:tt,styles:l(({radar:e}={})=>{const{themeVariables:t,radarOptions:a}=et(e);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${a.axisColor};
		stroke-width: ${a.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${a.axisLabelFontSize}px;
		color: ${a.axisColor};
	}
	.radarGraticule {
		fill: ${a.graticuleColor};
		fill-opacity: ${a.graticuleOpacity};
		stroke: ${a.graticuleColor};
		stroke-width: ${a.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${a.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${at(t,a)}
	`},"styles")};export{dt as diagram};
