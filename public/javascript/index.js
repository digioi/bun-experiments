var V=function(m,p,_,U){var $=arguments.length,g=$<3?p:U===null?U=Object.getOwnPropertyDescriptor(p,_):U,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")g=Reflect.decorate(m,p,_,U);else for(var a=m.length-1;a>=0;a--)if(d=m[a])g=($<3?d(g):$>3?d(p,_,g):d(p,_))||g;return $>3&&g&&Object.defineProperty(p,_,g),g};var R=window,S=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&("adoptedStyleSheets"in Document.prototype)&&("replace"in CSSStyleSheet.prototype),N=Symbol(),i=new WeakMap;class j{constructor(m,p,_){if(this._$cssResult$=!0,_!==N)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=m,this.t=p}get styleSheet(){let m=this.o;const p=this.t;if(S&&m===void 0){const _=p!==void 0&&p.length===1;_&&(m=i.get(p)),m===void 0&&((this.o=m=new CSSStyleSheet).replaceSync(this.cssText),_&&i.set(p,m))}return m}toString(){return this.cssText}}var t=(m)=>new j(typeof m=="string"?m:m+"",void 0,N),k=(m,...p)=>{const _=m.length===1?m[0]:p.reduce((U,$,g)=>U+((d)=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})($)+m[g+1],m[0]);return new j(_,m,N)},w=(m,p)=>{S?m.adoptedStyleSheets=p.map((_)=>_ instanceof CSSStyleSheet?_:_.styleSheet):p.forEach((_)=>{const U=document.createElement("style"),$=R.litNonce;$!==void 0&&U.setAttribute("nonce",$),U.textContent=_.cssText,m.appendChild(U)})},Z=S?(m)=>m:(m)=>m instanceof CSSStyleSheet?((p)=>{let _="";for(let U of p.cssRules)_+=U.cssText;return t(_)})(m):m;var v,b=window,mm=b.trustedTypes,Im=mm?mm.emptyScript:"",pm=b.reactiveElementPolyfillSupport,A={toAttribute(m,p){switch(p){case Boolean:m=m?Im:null;break;case Object:case Array:m=m==null?m:JSON.stringify(m)}return m},fromAttribute(m,p){let _=m;switch(p){case Boolean:_=m!==null;break;case Number:_=m===null?null:Number(m);break;case Object:case Array:try{_=JSON.parse(m)}catch(U){_=null}}return _}},_m=(m,p)=>p!==m&&(p==p||m==m),h={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:_m},l="finalized";class G extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(m){var p;this.finalize(),((p=this.h)!==null&&p!==void 0?p:this.h=[]).push(m)}static get observedAttributes(){this.finalize();const m=[];return this.elementProperties.forEach((p,_)=>{const U=this._$Ep(_,p);U!==void 0&&(this._$Ev.set(U,_),m.push(U))}),m}static createProperty(m,p=h){if(p.state&&(p.attribute=!1),this.finalize(),this.elementProperties.set(m,p),!p.noAccessor&&!this.prototype.hasOwnProperty(m)){const _=typeof m=="symbol"?Symbol():"__"+m,U=this.getPropertyDescriptor(m,_,p);U!==void 0&&Object.defineProperty(this.prototype,m,U)}}static getPropertyDescriptor(m,p,_){return{get(){return this[p]},set(U){const $=this[m];this[p]=U,this.requestUpdate(m,$,_)},configurable:!0,enumerable:!0}}static getPropertyOptions(m){return this.elementProperties.get(m)||h}static finalize(){if(this.hasOwnProperty(l))return!1;this[l]=!0;const m=Object.getPrototypeOf(this);if(m.finalize(),m.h!==void 0&&(this.h=[...m.h]),this.elementProperties=new Map(m.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const p=this.properties,_=[...Object.getOwnPropertyNames(p),...Object.getOwnPropertySymbols(p)];for(let U of _)this.createProperty(U,p[U])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(m){const p=[];if(Array.isArray(m)){const _=new Set(m.flat(Infinity).reverse());for(let U of _)p.unshift(Z(U))}else m!==void 0&&p.push(Z(m));return p}static _$Ep(m,p){const _=p.attribute;return _===!1?void 0:typeof _=="string"?_:typeof m=="string"?m.toLowerCase():void 0}_$Eu(){var m;this._$E_=new Promise((p)=>this.enableUpdating=p),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(m=this.constructor.h)===null||m===void 0||m.forEach((p)=>p(this))}addController(m){var p,_;((p=this._$ES)!==null&&p!==void 0?p:this._$ES=[]).push(m),this.renderRoot!==void 0&&this.isConnected&&((_=m.hostConnected)===null||_===void 0||_.call(m))}removeController(m){var p;(p=this._$ES)===null||p===void 0||p.splice(this._$ES.indexOf(m)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((m,p)=>{this.hasOwnProperty(p)&&(this._$Ei.set(p,this[p]),delete this[p])})}createRenderRoot(){var m;const p=(m=this.shadowRoot)!==null&&m!==void 0?m:this.attachShadow(this.constructor.shadowRootOptions);return w(p,this.constructor.elementStyles),p}connectedCallback(){var m;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(m=this._$ES)===null||m===void 0||m.forEach((p)=>{var _;return(_=p.hostConnected)===null||_===void 0?void 0:_.call(p)})}enableUpdating(m){}disconnectedCallback(){var m;(m=this._$ES)===null||m===void 0||m.forEach((p)=>{var _;return(_=p.hostDisconnected)===null||_===void 0?void 0:_.call(p)})}attributeChangedCallback(m,p,_){this._$AK(m,_)}_$EO(m,p,_=h){var U;const $=this.constructor._$Ep(m,_);if($!==void 0&&_.reflect===!0){const g=(((U=_.converter)===null||U===void 0?void 0:U.toAttribute)!==void 0?_.converter:A).toAttribute(p,_.type);this._$El=m,g==null?this.removeAttribute($):this.setAttribute($,g),this._$El=null}}_$AK(m,p){var _;const U=this.constructor,$=U._$Ev.get(m);if($!==void 0&&this._$El!==$){const g=U.getPropertyOptions($),d=typeof g.converter=="function"?{fromAttribute:g.converter}:((_=g.converter)===null||_===void 0?void 0:_.fromAttribute)!==void 0?g.converter:A;this._$El=$,this[$]=d.fromAttribute(p,g.type),this._$El=null}}requestUpdate(m,p,_){let U=!0;m!==void 0&&(((_=_||this.constructor.getPropertyOptions(m)).hasChanged||_m)(this[m],p)?(this._$AL.has(m)||this._$AL.set(m,p),_.reflect===!0&&this._$El!==m&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(m,_))):U=!1),!this.isUpdatePending&&U&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(p){Promise.reject(p)}const m=this.scheduleUpdate();return m!=null&&await m,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var m;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((U,$)=>this[$]=U),this._$Ei=void 0);let p=!1;const _=this._$AL;try{p=this.shouldUpdate(_),p?(this.willUpdate(_),(m=this._$ES)===null||m===void 0||m.forEach((U)=>{var $;return($=U.hostUpdate)===null||$===void 0?void 0:$.call(U)}),this.update(_)):this._$Ek()}catch(U){throw p=!1,this._$Ek(),U}p&&this._$AE(_)}willUpdate(m){}_$AE(m){var p;(p=this._$ES)===null||p===void 0||p.forEach((_)=>{var U;return(U=_.hostUpdated)===null||U===void 0?void 0:U.call(_)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(m)),this.updated(m)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(m){return!0}update(m){this._$EC!==void 0&&(this._$EC.forEach((p,_)=>this._$EO(_,this[_],p)),this._$EC=void 0),this._$Ek()}updated(m){}firstUpdated(m){}}G[l]=!0,G.elementProperties=new Map,G.elementStyles=[],G.shadowRootOptions={mode:"open"},pm==null||pm({ReactiveElement:G}),((v=b.reactiveElementVersions)!==null&&v!==void 0?v:b.reactiveElementVersions=[]).push("1.6.3");var Jm=function(m,p){if(!Array.isArray(m)||!m.hasOwnProperty("raw"))throw Error("invalid template strings array");return Um!==void 0?Um.createHTML(p):p},B=function(m,p,_=m,U){var $,g,d,a;if(p===W)return p;let D=U!==void 0?($=_._$Co)===null||$===void 0?void 0:$[U]:_._$Cl;const f=M(p)?void 0:p._$litDirective$;return(D==null?void 0:D.constructor)!==f&&((g=D==null?void 0:D._$AO)===null||g===void 0||g.call(D,!1),f===void 0?D=void 0:(D=new f(m),D._$AT(m,_,U)),U!==void 0?((d=(a=_)._$Co)!==null&&d!==void 0?d:a._$Co=[])[U]=D:_._$Cl=D),D!==void 0&&(p=B(m,D._$AS(m,p.values),D,U)),p},u,T=window,Y=T.trustedTypes,Um=Y?Y.createPolicy("lit-html",{createHTML:(m)=>m}):void 0;var J=`lit\$${(Math.random()+"").slice(9)}\$`,xm="?"+J,Mm=`<${xm}>`,Q=document,I=()=>Q.createComment(""),M=(m)=>m===null||typeof m!="object"&&typeof m!="function",Lm=Array.isArray,Pm=(m)=>Lm(m)||typeof(m==null?void 0:m[Symbol.iterator])=="function";var E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$m=/-->/g,dm=/>/g,K=RegExp(`>|[ \t\n\f\r](?:([^\\s"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|\$)`,"g"),gm=/'/g,Dm=/"/g,fm=/^(?:script|style|textarea|title)$/i,Fm=(m)=>(p,..._)=>({_$litType$:m,strings:p,values:_}),Gm=Fm(1),bm=Fm(2),W=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),am=new WeakMap,O=Q.createTreeWalker(Q,129,null,!1),cm=(m,p)=>{const _=m.length-1,U=[];let $,g=p===2?"<svg>":"",d=E;for(let a=0;a<_;a++){const D=m[a];let f,y,x=-1,F=0;for(;F<D.length&&(d.lastIndex=F,y=d.exec(D),y!==null);)F=d.lastIndex,d===E?y[1]==="!--"?d=$m:y[1]!==void 0?d=dm:y[2]!==void 0?(fm.test(y[2])&&($=RegExp("</"+y[2],"g")),d=K):y[3]!==void 0&&(d=K):d===K?y[0]===">"?(d=$!=null?$:E,x=-1):y[1]===void 0?x=-2:(x=d.lastIndex-y[2].length,f=y[1],d=y[3]===void 0?K:y[3]==='"'?Dm:gm):d===Dm||d===gm?d=K:d===$m||d===dm?d=E:(d=K,$=void 0);const H=d===K&&m[a+1].startsWith("/>")?" ":"";g+=d===E?D+Mm:x>=0?(U.push(f),D.slice(0,x)+"$lit$"+D.slice(x)+J+H):D+J+(x===-2?(U.push(void 0),a):H)}return[Jm(m,g+(m[_]||"<?>")+(p===2?"</svg>":"")),U]};class P{constructor({strings:m,_$litType$:p},_){let U;this.parts=[];let $=0,g=0;const d=m.length-1,a=this.parts,[D,f]=cm(m,p);if(this.el=P.createElement(D,_),O.currentNode=this.el.content,p===2){const y=this.el.content,x=y.firstChild;x.remove(),y.append(...x.childNodes)}for(;(U=O.nextNode())!==null&&a.length<d;){if(U.nodeType===1){if(U.hasAttributes()){const y=[];for(let x of U.getAttributeNames())if(x.endsWith("$lit$")||x.startsWith(J)){const F=f[g++];if(y.push(x),F!==void 0){const H=U.getAttribute(F.toLowerCase()+"$lit$").split(J),z=/([.?@])?(.*)/.exec(F);a.push({type:1,index:$,name:z[2],strings:H,ctor:z[1]==="."?Om:z[1]==="?"?Qm:z[1]==="@"?Wm:q})}else a.push({type:6,index:$})}for(let x of y)U.removeAttribute(x)}if(fm.test(U.tagName)){const y=U.textContent.split(J),x=y.length-1;if(x>0){U.textContent=Y?Y.emptyScript:"";for(let F=0;F<x;F++)U.append(y[F],I()),O.nextNode(),a.push({type:2,index:++$});U.append(y[x],I())}}}else if(U.nodeType===8)if(U.data===xm)a.push({type:2,index:$});else{let y=-1;for(;(y=U.data.indexOf(J,y+1))!==-1;)a.push({type:7,index:$}),y+=J.length-1}$++}}static createElement(m,p){const _=Q.createElement("template");return _.innerHTML=m,_}}class Km{constructor(m,p){this._$AV=[],this._$AN=void 0,this._$AD=m,this._$AM=p}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(m){var p;const{el:{content:_},parts:U}=this._$AD,$=((p=m==null?void 0:m.creationScope)!==null&&p!==void 0?p:Q).importNode(_,!0);O.currentNode=$;let g=O.nextNode(),d=0,a=0,D=U[0];for(;D!==void 0;){if(d===D.index){let f;D.type===2?f=new c(g,g.nextSibling,this,m):D.type===1?f=new D.ctor(g,D.name,D.strings,this,m):D.type===6&&(f=new Xm(g,this,m)),this._$AV.push(f),D=U[++a]}d!==(D==null?void 0:D.index)&&(g=O.nextNode(),d++)}return O.currentNode=Q,$}v(m){let p=0;for(let _ of this._$AV)_!==void 0&&(_.strings!==void 0?(_._$AI(m,_,p),p+=_.strings.length-2):_._$AI(m[p])),p++}}class c{constructor(m,p,_,U){var $;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=m,this._$AB=p,this._$AM=_,this.options=U,this._$Cp=($=U==null?void 0:U.isConnected)===null||$===void 0||$}get _$AU(){var m,p;return(p=(m=this._$AM)===null||m===void 0?void 0:m._$AU)!==null&&p!==void 0?p:this._$Cp}get parentNode(){let m=this._$AA.parentNode;const p=this._$AM;return p!==void 0&&(m==null?void 0:m.nodeType)===11&&(m=p.parentNode),m}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(m,p=this){m=B(this,m,p),M(m)?m===L||m==null||m===""?(this._$AH!==L&&this._$AR(),this._$AH=L):m!==this._$AH&&m!==W&&this._(m):m._$litType$!==void 0?this.g(m):m.nodeType!==void 0?this.$(m):Pm(m)?this.T(m):this._(m)}k(m){return this._$AA.parentNode.insertBefore(m,this._$AB)}$(m){this._$AH!==m&&(this._$AR(),this._$AH=this.k(m))}_(m){this._$AH!==L&&M(this._$AH)?this._$AA.nextSibling.data=m:this.$(Q.createTextNode(m)),this._$AH=m}g(m){var p;const{values:_,_$litType$:U}=m,$=typeof U=="number"?this._$AC(m):(U.el===void 0&&(U.el=P.createElement(Jm(U.h,U.h[0]),this.options)),U);if(((p=this._$AH)===null||p===void 0?void 0:p._$AD)===$)this._$AH.v(_);else{const g=new Km($,this),d=g.u(this.options);g.v(_),this.$(d),this._$AH=g}}_$AC(m){let p=am.get(m.strings);return p===void 0&&am.set(m.strings,p=new P(m)),p}T(m){Lm(this._$AH)||(this._$AH=[],this._$AR());const p=this._$AH;let _,U=0;for(let $ of m)U===p.length?p.push(_=new c(this.k(I()),this.k(I()),this,this.options)):_=p[U],_._$AI($),U++;U<p.length&&(this._$AR(_&&_._$AB.nextSibling,U),p.length=U)}_$AR(m=this._$AA.nextSibling,p){var _;for((_=this._$AP)===null||_===void 0||_.call(this,!1,!0,p);m&&m!==this._$AB;){const U=m.nextSibling;m.remove(),m=U}}setConnected(m){var p;this._$AM===void 0&&(this._$Cp=m,(p=this._$AP)===null||p===void 0||p.call(this,m))}}class q{constructor(m,p,_,U,$){this.type=1,this._$AH=L,this._$AN=void 0,this.element=m,this.name=p,this._$AM=U,this.options=$,_.length>2||_[0]!==""||_[1]!==""?(this._$AH=Array(_.length-1).fill(new String),this.strings=_):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(m,p=this,_,U){const $=this.strings;let g=!1;if($===void 0)m=B(this,m,p,0),g=!M(m)||m!==this._$AH&&m!==W,g&&(this._$AH=m);else{const d=m;let a,D;for(m=$[0],a=0;a<$.length-1;a++)D=B(this,d[_+a],p,a),D===W&&(D=this._$AH[a]),g||(g=!M(D)||D!==this._$AH[a]),D===L?m=L:m!==L&&(m+=(D!=null?D:"")+$[a+1]),this._$AH[a]=D}g&&!U&&this.j(m)}j(m){m===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,m!=null?m:"")}}class Om extends q{constructor(){super(...arguments),this.type=3}j(m){this.element[this.name]=m===L?void 0:m}}var qm=Y?Y.emptyScript:"";class Qm extends q{constructor(){super(...arguments),this.type=4}j(m){m&&m!==L?this.element.setAttribute(this.name,qm):this.element.removeAttribute(this.name)}}class Wm extends q{constructor(m,p,_,U,$){super(m,p,_,U,$),this.type=5}_$AI(m,p=this){var _;if((m=(_=B(this,m,p,0))!==null&&_!==void 0?_:L)===W)return;const U=this._$AH,$=m===L&&U!==L||m.capture!==U.capture||m.once!==U.once||m.passive!==U.passive,g=m!==L&&(U===L||$);$&&this.element.removeEventListener(this.name,this,U),g&&this.element.addEventListener(this.name,this,m),this._$AH=m}handleEvent(m){var p,_;typeof this._$AH=="function"?this._$AH.call((_=(p=this.options)===null||p===void 0?void 0:p.host)!==null&&_!==void 0?_:this.element,m):this._$AH.handleEvent(m)}}class Xm{constructor(m,p,_){this.element=m,this.type=6,this._$AN=void 0,this._$AM=p,this.options=_}get _$AU(){return this._$AM._$AU}_$AI(m){B(this,m)}}var ym=T.litHtmlPolyfillSupport;ym==null||ym(P,c),((u=T.litHtmlVersions)!==null&&u!==void 0?u:T.litHtmlVersions=[]).push("2.8.0");var Ym=(m,p,_)=>{var U,$;const g=(U=_==null?void 0:_.renderBefore)!==null&&U!==void 0?U:p;let d=g._$litPart$;if(d===void 0){const a=($=_==null?void 0:_.renderBefore)!==null&&$!==void 0?$:null;g._$litPart$=d=new c(p.insertBefore(I(),a),a,void 0,_!=null?_:{})}return d._$AI(m),d};var r,o;class X extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var m,p;const _=super.createRenderRoot();return(m=(p=this.renderOptions).renderBefore)!==null&&m!==void 0||(p.renderBefore=_.firstChild),_}update(m){const p=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(m),this._$Do=Ym(p,this.renderRoot,this.renderOptions)}connectedCallback(){var m;super.connectedCallback(),(m=this._$Do)===null||m===void 0||m.setConnected(!0)}disconnectedCallback(){var m;super.disconnectedCallback(),(m=this._$Do)===null||m===void 0||m.setConnected(!1)}render(){return W}}X.finalized=!0,X._$litElement$=!0,(r=globalThis.litElementHydrateSupport)===null||r===void 0||r.call(globalThis,{LitElement:X});var Bm=globalThis.litElementPolyfillSupport;Bm==null||Bm({LitElement:X});((o=globalThis.litElementVersions)!==null&&o!==void 0?o:globalThis.litElementVersions=[]).push("3.3.3");var Em=(m)=>(p)=>typeof p=="function"?((_,U)=>(customElements.define(_,U),U))(m,p):((_,U)=>{const{kind:$,elements:g}=U;return{kind:$,elements:g,finisher(d){customElements.define(_,d)}}})(m,p);var n=function(m){return(p,_)=>_!==void 0?Hm(m,p,_):Cm(m,p)},Cm=(m,p)=>p.kind==="method"&&p.descriptor&&!("value"in p.descriptor)?{...p,finisher(_){_.createProperty(p.key,m)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:p.key,initializer(){typeof p.initializer=="function"&&(this[p.key]=p.initializer.call(this))},finisher(_){_.createProperty(p.key,m)}},Hm=(m,p,_)=>{p.constructor.createProperty(_,m)};var e,yp=((e=window.HTMLSlotElement)===null||e===void 0?void 0:e.prototype.assignedElements)!=null?(m,p)=>m.assignedElements(p):(m,p)=>m.assignedNodes(p).filter((_)=>_.nodeType===Node.ELEMENT_NODE);class s extends X{constructor(){super(...arguments);this.name="World"}static styles=k`
    :host {
      color: blue;
    }
    :host p {
      margin: 0;
      min-height: 50vh;
      background: lime;
      display: grid;
      place-items: center;
    }
  `;render(){return Gm`<p>Hello, ${this.name}!</p>`}}V([n()],s.prototype,"name",void 0),s=V([Em("app-viewport")],s);export{s as AppViewport};