(function(ii){typeof define=="function"&&define.amd?define(ii):ii()})(function(){"use strict";/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ii(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const Z={},si=[],Je=()=>{},dc=()=>!1,bs=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),gn=i=>i.startsWith("onUpdate:"),fe=Object.assign,bn=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},uc=Object.prototype.hasOwnProperty,Y=(i,e)=>uc.call(i,e),F=Array.isArray,ni=i=>ms(i)==="[object Map]",qo=i=>ms(i)==="[object Set]",M=i=>typeof i=="function",ce=i=>typeof i=="string",Tt=i=>typeof i=="symbol",ie=i=>i!==null&&typeof i=="object",Xo=i=>(ie(i)||M(i))&&M(i.then)&&M(i.catch),Yo=Object.prototype.toString,ms=i=>Yo.call(i),hc=i=>ms(i).slice(8,-1),Jo=i=>ms(i)==="[object Object]",mn=i=>ce(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Si=ii(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vs=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},fc=/-(\w)/g,ze=vs(i=>i.replace(fc,(e,t)=>t?t.toUpperCase():"")),pc=/\B([A-Z])/g,Ht=vs(i=>i.replace(pc,"-$1").toLowerCase()),ys=vs(i=>i.charAt(0).toUpperCase()+i.slice(1)),vn=vs(i=>i?`on${ys(i)}`:""),$t=(i,e)=>!Object.is(i,e),yn=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Qo=(i,e,t,s=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:s,value:t})},gc=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Zo;const xs=()=>Zo||(Zo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ws(i){if(F(i)){const e={};for(let t=0;t<i.length;t++){const s=i[t],n=ce(s)?yc(s):ws(s);if(n)for(const o in n)e[o]=n[o]}return e}else if(ce(i)||ie(i))return i}const bc=/;(?![^(]*\))/g,mc=/:([^]+)/,vc=/\/\*[^]*?\*\//g;function yc(i){const e={};return i.replace(vc,"").split(bc).forEach(t=>{if(t){const s=t.split(mc);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function xn(i){let e="";if(ce(i))e=i;else if(F(i))for(let t=0;t<i.length;t++){const s=xn(i[t]);s&&(e+=s+" ")}else if(ie(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const xc=ii("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function Ko(i){return!!i||i===""}const er=i=>!!(i&&i.__v_isRef===!0),wn=i=>ce(i)?i:i==null?"":F(i)||ie(i)&&(i.toString===Yo||!M(i.toString))?er(i)?wn(i.value):JSON.stringify(i,tr,2):String(i),tr=(i,e)=>er(e)?tr(i,e.value):ni(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,n],o)=>(t[_n(s,o)+" =>"]=n,t),{})}:qo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>_n(t))}:Tt(e)?_n(e):ie(e)&&!F(e)&&!Jo(e)?String(e):e,_n=(i,e="")=>{var t;return Tt(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};var wc={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_7c7269c9-3375-4abc-ba60-192ada043a84",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/8.19.4 node/v16.20.2 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_7c7269c9-3375-4abc-ba60-192ada043a84",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/16.20.2/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer/client/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"kalimahapps",npm_package_engines_node:">=16.0.0",GRADLE_HOME:"/usr/share/gradle-8.10.2",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.2.12479018",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"124326484",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer/client",SYSTEMD_EXEC_PID:"599",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",NVM_DIR:"/home/runner/.nvm",npm_config_metrics_registry:"https://registry.npmjs.org/",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20241103.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.8/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",GOROOT_1_23_X64:"/opt/hostedtoolcache/go/1.23.2/x64",JOURNAL_STREAM:"8:19731",GITHUB_WORKFLOW:"Deploy Extension",_:"/opt/hostedtoolcache/node/16.20.2/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/16.20.2/x64",RUNNER_DEBUG:"1",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"11722308330",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"a772a215c484ed52e8466c60b7f21bb3a7d3558d",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",STATS_BLT:"true",GITHUB_WORKFLOW_REF:"kalimahapps/vscode-tailwind-config-viewer/.github/workflows/deploy-extension.yml@refs/heads/master",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer/client/node_modules/.bin:/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer/node_modules/.bin:/home/runner/work/vscode-tailwind-config-viewer/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/16.20.2/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_311e45af-96f7-441f-b1b9-cf4dd9a7a4e6",INVOCATION_ID:"8abd699b13204cadab90e4fd5846d7dd",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/16.20.2/x64/bin/node",npm_package_name:"tailwind-config-viewer-webview",GITHUB_ACTION:"__run_4",GITHUB_RUN_NUMBER:"16",GITHUB_TRIGGERING_ACTOR:"abdul-alhasany",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 16",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"master",GITHUB_REPOSITORY:"kalimahapps/vscode-tailwind-config-viewer",STATS_D_D:"true",npm_lifecycle_script:"vue-tsc --noEmit && vite build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.2.12479018",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",GITHUB_REPOSITORY_ID:"614241149",GITHUB_ACTIONS:"true",npm_package_version:"0.0.7",npm_lifecycle_event:"build",GITHUB_REF_PROTECTED:"true",GITHUB_WORKSPACE:"/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"a772a215c484ed52e8466c60b7f21bb3a7d3558d",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/master",GITHUB_ACTOR:"abdul-alhasany",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/16.20.2/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_7c7269c9-3375-4abc-ba60-192ada043a84",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer/client",GITHUB_ACTOR_ID:"1753883",RUNNER_WORKSPACE:"/home/runner/work/vscode-tailwind-config-viewer",npm_execpath:"/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"push",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_7c7269c9-3375-4abc-ba60-192ada043a84",npm_config_global_prefix:"/opt/hostedtoolcache/node/16.20.2/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.2.12479018",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",STATS_EXTP:"https://provjobdprod.z13.web.core.windows.net/settings/provjobdsettings-latest/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.2.12479018",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_7c7269c9-3375-4abc-ba60-192ada043a84",INIT_CWD:"/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer/client",EDITOR:"vi",NODE_ENV:"production"};let He;class _c{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=He,!e&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=He;try{return He=this,e()}finally{He=t}}}on(){He=this}off(){He=this.parent}stop(e){if(this._active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function Cc(){return He}let K;const Cn=new WeakSet;class ir{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,He&&He.active&&He.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Cn.has(this)&&(Cn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cr(this),or(this);const e=K,t=Qe;K=this,Qe=!0;try{return this.fn()}finally{rr(this),K=e,Qe=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kn(e);this.deps=this.depsTail=void 0,cr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Cn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){In(this)&&this.run()}get dirty(){return In(this)}}let sr=0,Ri,Ai;function nr(i,e=!1){if(i.flags|=8,e){i.next=Ai,Ai=i;return}i.next=Ri,Ri=i}function Tn(){sr++}function $n(){if(--sr>0)return;if(Ai){let e=Ai;for(Ai=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;Ri;){let e=Ri;for(Ri=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){i||(i=s)}e=t}}if(i)throw i}function or(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function rr(i){let e,t=i.depsTail,s=t;for(;s;){const n=s.prevDep;s.version===-1?(s===t&&(t=n),kn(s),Tc(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=n}i.deps=e,i.depsTail=t}function In(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lr(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function lr(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Di))return;i.globalVersion=Di;const e=i.dep;if(i.flags|=2,e.version>0&&!i.isSSR&&i.deps&&!In(i)){i.flags&=-3;return}const t=K,s=Qe;K=i,Qe=!0;try{or(i);const n=i.fn(i._value);(e.version===0||$t(n,i._value))&&(i._value=n,e.version++)}catch(n){throw e.version++,n}finally{K=t,Qe=s,rr(i),i.flags&=-3}}function kn(i,e=!1){const{dep:t,prevSub:s,nextSub:n}=i;if(s&&(s.nextSub=n,i.prevSub=void 0),n&&(n.prevSub=s,i.nextSub=void 0),t.subs===i&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)kn(o,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Tc(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let Qe=!0;const ar=[];function ht(){ar.push(Qe),Qe=!1}function ft(){const i=ar.pop();Qe=i===void 0?!0:i}function cr(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=K;K=void 0;try{e()}finally{K=t}}}let Di=0,$c=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}};class En{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!K||!Qe||K===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==K)t=this.activeLink=new $c(K,this),K.deps?(t.prevDep=K.depsTail,K.depsTail.nextDep=t,K.depsTail=t):K.deps=K.depsTail=t,dr(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=K.depsTail,t.nextDep=void 0,K.depsTail.nextDep=t,K.depsTail=t,K.deps===t&&(K.deps=s)}return t}trigger(e){this.version++,Di++,this.notify(e)}notify(e){Tn();try{wc.NODE_ENV;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{$n()}}}function dr(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)dr(s)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const _s=new WeakMap,Lt=Symbol(""),On=Symbol(""),Pi=Symbol("");function me(i,e,t){if(Qe&&K){let s=_s.get(i);s||_s.set(i,s=new Map);let n=s.get(t);n||(s.set(t,n=new En),n.map=s,n.key=t),n.track()}}function pt(i,e,t,s,n,o){const r=_s.get(i);if(!r){Di++;return}const l=a=>{a&&a.trigger()};if(Tn(),e==="clear")r.forEach(l);else{const a=F(i),d=a&&mn(t);if(a&&t==="length"){const c=Number(s);r.forEach((u,p)=>{(p==="length"||p===Pi||!Tt(p)&&p>=c)&&l(u)})}else switch((t!==void 0||r.has(void 0))&&l(r.get(t)),d&&l(r.get(Pi)),e){case"add":a?d&&l(r.get("length")):(l(r.get(Lt)),ni(i)&&l(r.get(On)));break;case"delete":a||(l(r.get(Lt)),ni(i)&&l(r.get(On)));break;case"set":ni(i)&&l(r.get(Lt));break}}$n()}function Ic(i,e){const t=_s.get(i);return t&&t.get(e)}function oi(i){const e=q(i);return e===i?e:(me(e,"iterate",Pi),We(i)?e:e.map(ve))}function Cs(i){return me(i=q(i),"iterate",Pi),i}const kc={__proto__:null,[Symbol.iterator](){return Sn(this,Symbol.iterator,ve)},concat(...i){return oi(this).concat(...i.map(e=>F(e)?oi(e):e))},entries(){return Sn(this,"entries",i=>(i[1]=ve(i[1]),i))},every(i,e){return gt(this,"every",i,e,void 0,arguments)},filter(i,e){return gt(this,"filter",i,e,t=>t.map(ve),arguments)},find(i,e){return gt(this,"find",i,e,ve,arguments)},findIndex(i,e){return gt(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return gt(this,"findLast",i,e,ve,arguments)},findLastIndex(i,e){return gt(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return gt(this,"forEach",i,e,void 0,arguments)},includes(...i){return Rn(this,"includes",i)},indexOf(...i){return Rn(this,"indexOf",i)},join(i){return oi(this).join(i)},lastIndexOf(...i){return Rn(this,"lastIndexOf",i)},map(i,e){return gt(this,"map",i,e,void 0,arguments)},pop(){return Ni(this,"pop")},push(...i){return Ni(this,"push",i)},reduce(i,...e){return ur(this,"reduce",i,e)},reduceRight(i,...e){return ur(this,"reduceRight",i,e)},shift(){return Ni(this,"shift")},some(i,e){return gt(this,"some",i,e,void 0,arguments)},splice(...i){return Ni(this,"splice",i)},toReversed(){return oi(this).toReversed()},toSorted(i){return oi(this).toSorted(i)},toSpliced(...i){return oi(this).toSpliced(...i)},unshift(...i){return Ni(this,"unshift",i)},values(){return Sn(this,"values",ve)}};function Sn(i,e,t){const s=Cs(i),n=s[e]();return s!==i&&!We(i)&&(n._next=n.next,n.next=()=>{const o=n._next();return o.value&&(o.value=t(o.value)),o}),n}const Ec=Array.prototype;function gt(i,e,t,s,n,o){const r=Cs(i),l=r!==i&&!We(i),a=r[e];if(a!==Ec[e]){const u=a.apply(i,o);return l?ve(u):u}let d=t;r!==i&&(l?d=function(u,p){return t.call(this,ve(u),p,i)}:t.length>2&&(d=function(u,p){return t.call(this,u,p,i)}));const c=a.call(r,d,s);return l&&n?n(c):c}function ur(i,e,t,s){const n=Cs(i);let o=t;return n!==i&&(We(i)?t.length>3&&(o=function(r,l,a){return t.call(this,r,l,a,i)}):o=function(r,l,a){return t.call(this,r,ve(l),a,i)}),n[e](o,...s)}function Rn(i,e,t){const s=q(i);me(s,"iterate",Pi);const n=s[e](...t);return(n===-1||n===!1)&&Pn(t[0])?(t[0]=q(t[0]),s[e](...t)):n}function Ni(i,e,t=[]){ht(),Tn();const s=q(i)[e].apply(i,t);return $n(),ft(),s}const Oc=ii("__proto__,__v_isRef,__isVue"),hr=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Tt));function Sc(i){Tt(i)||(i=String(i));const e=q(this);return me(e,"has",i),e.hasOwnProperty(i)}class fr{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){const n=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!n;if(t==="__v_isReadonly")return n;if(t==="__v_isShallow")return o;if(t==="__v_raw")return s===(n?o?yr:vr:o?mr:br).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const r=F(e);if(!n){let a;if(r&&(a=kc[t]))return a;if(t==="hasOwnProperty")return Sc}const l=Reflect.get(e,t,he(e)?e:s);return(Tt(t)?hr.has(t):Oc(t))||(n||me(e,"get",t),o)?l:he(l)?r&&mn(t)?l:l.value:ie(l)?n?xr(l):Dn(l):l}}class pr extends fr{constructor(e=!1){super(!1,e)}set(e,t,s,n){let o=e[t];if(!this._isShallow){const a=Ft(o);if(!We(s)&&!Ft(s)&&(o=q(o),s=q(s)),!F(e)&&he(o)&&!he(s))return a?!1:(o.value=s,!0)}const r=F(e)&&mn(t)?Number(t)<e.length:Y(e,t),l=Reflect.set(e,t,s,he(e)?e:n);return e===q(n)&&(r?$t(s,o)&&pt(e,"set",t,s):pt(e,"add",t,s)),l}deleteProperty(e,t){const s=Y(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&s&&pt(e,"delete",t,void 0),n}has(e,t){const s=Reflect.has(e,t);return(!Tt(t)||!hr.has(t))&&me(e,"has",t),s}ownKeys(e){return me(e,"iterate",F(e)?"length":Lt),Reflect.ownKeys(e)}}class gr extends fr{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Rc=new pr,Ac=new gr,Dc=new pr(!0),Pc=new gr(!0),An=i=>i,Ts=i=>Reflect.getPrototypeOf(i);function Nc(i,e,t){return function(...s){const n=this.__v_raw,o=q(n),r=ni(o),l=i==="entries"||i===Symbol.iterator&&r,a=i==="keys"&&r,d=n[i](...s),c=t?An:e?Nn:ve;return!e&&me(o,"iterate",a?On:Lt),{next(){const{value:u,done:p}=d.next();return p?{value:u,done:p}:{value:l?[c(u[0]),c(u[1])]:c(u),done:p}},[Symbol.iterator](){return this}}}}function $s(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Bc(i,e){const t={get(n){const o=this.__v_raw,r=q(o),l=q(n);i||($t(n,l)&&me(r,"get",n),me(r,"get",l));const{has:a}=Ts(r),d=e?An:i?Nn:ve;if(a.call(r,n))return d(o.get(n));if(a.call(r,l))return d(o.get(l));o!==r&&o.get(n)},get size(){const n=this.__v_raw;return!i&&me(q(n),"iterate",Lt),Reflect.get(n,"size",n)},has(n){const o=this.__v_raw,r=q(o),l=q(n);return i||($t(n,l)&&me(r,"has",n),me(r,"has",l)),n===l?o.has(n):o.has(n)||o.has(l)},forEach(n,o){const r=this,l=r.__v_raw,a=q(l),d=e?An:i?Nn:ve;return!i&&me(a,"iterate",Lt),l.forEach((c,u)=>n.call(o,d(c),d(u),r))}};return fe(t,i?{add:$s("add"),set:$s("set"),delete:$s("delete"),clear:$s("clear")}:{add(n){!e&&!We(n)&&!Ft(n)&&(n=q(n));const o=q(this);return Ts(o).has.call(o,n)||(o.add(n),pt(o,"add",n,n)),this},set(n,o){!e&&!We(o)&&!Ft(o)&&(o=q(o));const r=q(this),{has:l,get:a}=Ts(r);let d=l.call(r,n);d||(n=q(n),d=l.call(r,n));const c=a.call(r,n);return r.set(n,o),d?$t(o,c)&&pt(r,"set",n,o):pt(r,"add",n,o),this},delete(n){const o=q(this),{has:r,get:l}=Ts(o);let a=r.call(o,n);a||(n=q(n),a=r.call(o,n)),l&&l.call(o,n);const d=o.delete(n);return a&&pt(o,"delete",n,void 0),d},clear(){const n=q(this),o=n.size!==0,r=n.clear();return o&&pt(n,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(n=>{t[n]=Nc(n,i,e)}),t}function Is(i,e){const t=Bc(i,e);return(s,n,o)=>n==="__v_isReactive"?!i:n==="__v_isReadonly"?i:n==="__v_raw"?s:Reflect.get(Y(t,n)&&n in s?t:s,n,o)}const Hc={get:Is(!1,!1)},Lc={get:Is(!1,!0)},Fc={get:Is(!0,!1)},Mc={get:Is(!0,!0)},br=new WeakMap,mr=new WeakMap,vr=new WeakMap,yr=new WeakMap;function Vc(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uc(i){return i.__v_skip||!Object.isExtensible(i)?0:Vc(hc(i))}function Dn(i){return Ft(i)?i:Es(i,!1,Rc,Hc,br)}function jc(i){return Es(i,!1,Dc,Lc,mr)}function xr(i){return Es(i,!0,Ac,Fc,vr)}function ks(i){return Es(i,!0,Pc,Mc,yr)}function Es(i,e,t,s,n){if(!ie(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const o=n.get(i);if(o)return o;const r=Uc(i);if(r===0)return i;const l=new Proxy(i,r===2?s:t);return n.set(i,l),l}function ri(i){return Ft(i)?ri(i.__v_raw):!!(i&&i.__v_isReactive)}function Ft(i){return!!(i&&i.__v_isReadonly)}function We(i){return!!(i&&i.__v_isShallow)}function Pn(i){return i?!!i.__v_raw:!1}function q(i){const e=i&&i.__v_raw;return e?q(e):i}function Gc(i){return!Y(i,"__v_skip")&&Object.isExtensible(i)&&Qo(i,"__v_skip",!0),i}const ve=i=>ie(i)?Dn(i):i,Nn=i=>ie(i)?xr(i):i;function he(i){return i?i.__v_isRef===!0:!1}function Bi(i){return zc(i,!1)}function zc(i,e){return he(i)?i:new Wc(i,e)}class Wc{constructor(e,t){this.dep=new En,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:q(e),this._value=t?e:ve(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||We(e)||Ft(e);e=s?e:q(e),$t(e,t)&&(this._rawValue=e,this._value=s?e:ve(e),this.dep.trigger())}}function Os(i){return he(i)?i.value:i}const qc={get:(i,e,t)=>e==="__v_raw"?i:Os(Reflect.get(i,e,t)),set:(i,e,t,s)=>{const n=i[e];return he(n)&&!he(t)?(n.value=t,!0):Reflect.set(i,e,t,s)}};function wr(i){return ri(i)?i:new Proxy(i,qc)}class Xc{constructor(e,t,s){this._object=e,this._key=t,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ic(q(this._object),this._key)}}class Yc{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Jc(i,e,t){return he(i)?i:M(i)?new Yc(i):ie(i)&&arguments.length>1?Qc(i,e,t):Bi(i)}function Qc(i,e,t){const s=i[e];return he(s)?s:new Xc(i,e,t)}class Zc{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new En(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Di-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&K!==this)return nr(this,!0),!0}get value(){const e=this.dep.track();return lr(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Kc(i,e,t=!1){let s,n;return M(i)?s=i:(s=i.get,n=i.set),new Zc(s,n,t)}const Ss={},Rs=new WeakMap;let Mt;function ed(i,e=!1,t=Mt){if(t){let s=Rs.get(t);s||Rs.set(t,s=[]),s.push(i)}}function td(i,e,t=Z){const{immediate:s,deep:n,once:o,scheduler:r,augmentJob:l,call:a}=t,d=C=>n?C:We(C)||n===!1||n===0?It(C,1):It(C);let c,u,p,b,T=!1,S=!1;if(he(i)?(u=()=>i.value,T=We(i)):ri(i)?(u=()=>d(i),T=!0):F(i)?(S=!0,T=i.some(C=>ri(C)||We(C)),u=()=>i.map(C=>{if(he(C))return C.value;if(ri(C))return d(C);if(M(C))return a?a(C,2):C()})):M(i)?e?u=a?()=>a(i,2):i:u=()=>{if(p){ht();try{p()}finally{ft()}}const C=Mt;Mt=c;try{return a?a(i,3,[b]):i(b)}finally{Mt=C}}:u=Je,e&&n){const C=u,U=n===!0?1/0:n;u=()=>It(C(),U)}const N=Cc(),B=()=>{c.stop(),N&&bn(N.effects,c)};if(o&&e){const C=e;e=(...U)=>{C(...U),B()}}let V=S?new Array(i.length).fill(Ss):Ss;const k=C=>{if(!(!(c.flags&1)||!c.dirty&&!C))if(e){const U=c.run();if(n||T||(S?U.some((J,le)=>$t(J,V[le])):$t(U,V))){p&&p();const J=Mt;Mt=c;try{const le=[U,V===Ss?void 0:S&&V[0]===Ss?[]:V,b];a?a(e,3,le):e(...le),V=U}finally{Mt=J}}}else c.run()};return l&&l(k),c=new ir(u),c.scheduler=r?()=>r(k,!1):k,b=C=>ed(C,!1,c),p=c.onStop=()=>{const C=Rs.get(c);if(C){if(a)a(C,4);else for(const U of C)U();Rs.delete(c)}},e?s?k(!0):V=c.run():r?r(k.bind(null,!0),!0):c.run(),B.pause=c.pause.bind(c),B.resume=c.resume.bind(c),B.stop=B,B}function It(i,e=1/0,t){if(e<=0||!ie(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,he(i))It(i.value,e,t);else if(F(i))for(let s=0;s<i.length;s++)It(i[s],e,t);else if(qo(i)||ni(i))i.forEach(s=>{It(s,e,t)});else if(Jo(i)){for(const s in i)It(i[s],e,t);for(const s of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,s)&&It(i[s],e,t)}return i}var kt={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_7c7269c9-3375-4abc-ba60-192ada043a84",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/8.19.4 node/v16.20.2 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_7c7269c9-3375-4abc-ba60-192ada043a84",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/16.20.2/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer/client/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"kalimahapps",npm_package_engines_node:">=16.0.0",GRADLE_HOME:"/usr/share/gradle-8.10.2",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.2.12479018",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"124326484",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer/client",SYSTEMD_EXEC_PID:"599",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",NVM_DIR:"/home/runner/.nvm",npm_config_metrics_registry:"https://registry.npmjs.org/",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20241103.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.8/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",GOROOT_1_23_X64:"/opt/hostedtoolcache/go/1.23.2/x64",JOURNAL_STREAM:"8:19731",GITHUB_WORKFLOW:"Deploy Extension",_:"/opt/hostedtoolcache/node/16.20.2/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/16.20.2/x64",RUNNER_DEBUG:"1",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"11722308330",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"a772a215c484ed52e8466c60b7f21bb3a7d3558d",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",STATS_BLT:"true",GITHUB_WORKFLOW_REF:"kalimahapps/vscode-tailwind-config-viewer/.github/workflows/deploy-extension.yml@refs/heads/master",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer/client/node_modules/.bin:/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer/node_modules/.bin:/home/runner/work/vscode-tailwind-config-viewer/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/16.20.2/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_311e45af-96f7-441f-b1b9-cf4dd9a7a4e6",INVOCATION_ID:"8abd699b13204cadab90e4fd5846d7dd",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/16.20.2/x64/bin/node",npm_package_name:"tailwind-config-viewer-webview",GITHUB_ACTION:"__run_4",GITHUB_RUN_NUMBER:"16",GITHUB_TRIGGERING_ACTOR:"abdul-alhasany",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 16",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"master",GITHUB_REPOSITORY:"kalimahapps/vscode-tailwind-config-viewer",STATS_D_D:"true",npm_lifecycle_script:"vue-tsc --noEmit && vite build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.2.12479018",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",GITHUB_REPOSITORY_ID:"614241149",GITHUB_ACTIONS:"true",npm_package_version:"0.0.7",npm_lifecycle_event:"build",GITHUB_REF_PROTECTED:"true",GITHUB_WORKSPACE:"/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"a772a215c484ed52e8466c60b7f21bb3a7d3558d",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/master",GITHUB_ACTOR:"abdul-alhasany",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/16.20.2/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_7c7269c9-3375-4abc-ba60-192ada043a84",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer/client",GITHUB_ACTOR_ID:"1753883",RUNNER_WORKSPACE:"/home/runner/work/vscode-tailwind-config-viewer",npm_execpath:"/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"push",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_7c7269c9-3375-4abc-ba60-192ada043a84",npm_config_global_prefix:"/opt/hostedtoolcache/node/16.20.2/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.2.12479018",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",STATS_EXTP:"https://provjobdprod.z13.web.core.windows.net/settings/provjobdsettings-latest/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.2.12479018",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_7c7269c9-3375-4abc-ba60-192ada043a84",INIT_CWD:"/home/runner/work/vscode-tailwind-config-viewer/vscode-tailwind-config-viewer/client",EDITOR:"vi",NODE_ENV:"production"};const Hi=[];let Bn=!1;function id(i,...e){if(Bn)return;Bn=!0,ht();const t=Hi.length?Hi[Hi.length-1].component:null,s=t&&t.appContext.config.warnHandler,n=sd();if(s)li(s,t,11,[i+e.map(o=>{var r,l;return(l=(r=o.toString)==null?void 0:r.call(o))!=null?l:JSON.stringify(o)}).join(""),t&&t.proxy,n.map(({vnode:o})=>`at <${ml(t,o.type)}>`).join(`
`),n]);else{const o=[`[Vue warn]: ${i}`,...e];n.length&&o.push(`
`,...nd(n)),console.warn(...o)}ft(),Bn=!1}function sd(){let i=Hi[Hi.length-1];if(!i)return[];const e=[];for(;i;){const t=e[0];t&&t.vnode===i?t.recurseCount++:e.push({vnode:i,recurseCount:0});const s=i.component&&i.component.parent;i=s&&s.vnode}return e}function nd(i){const e=[];return i.forEach((t,s)=>{e.push(...s===0?[]:[`
`],...od(t))}),e}function od({vnode:i,recurseCount:e}){const t=e>0?`... (${e} recursive calls)`:"",s=i.component?i.component.parent==null:!1,n=` at <${ml(i.component,i.type,s)}`,o=">"+t;return i.props?[n,...rd(i.props),o]:[n+o]}function rd(i){const e=[],t=Object.keys(i);return t.slice(0,3).forEach(s=>{e.push(..._r(s,i[s]))}),t.length>3&&e.push(" ..."),e}function _r(i,e,t){return ce(e)?(e=JSON.stringify(e),t?e:[`${i}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?t?e:[`${i}=${e}`]:he(e)?(e=_r(i,q(e.value),!0),t?e:[`${i}=Ref<`,e,">"]):M(e)?[`${i}=fn${e.name?`<${e.name}>`:""}`]:(e=q(e),t?e:[`${i}=`,e])}function li(i,e,t,s){try{return s?i(...s):i()}catch(n){As(n,e,t)}}function rt(i,e,t,s){if(M(i)){const n=li(i,e,t,s);return n&&Xo(n)&&n.catch(o=>{As(o,e,t)}),n}if(F(i)){const n=[];for(let o=0;o<i.length;o++)n.push(rt(i[o],e,t,s));return n}}function As(i,e,t,s=!0){const n=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||Z;if(e){let l=e.parent;const a=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const c=l.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,a,d)===!1)return}l=l.parent}if(o){ht(),li(o,null,10,[i,a,d]),ft();return}}ld(i,t,n,s,r)}function ld(i,e,t,s=!0,n=!1){if(n)throw i;console.error(i)}const $e=[];let lt=-1;const ai=[];let Et=null,ci=0;const Cr=Promise.resolve();let Ds=null;function ad(i){const e=Ds||Cr;return i?e.then(this?i.bind(this):i):e}function cd(i){let e=lt+1,t=$e.length;for(;e<t;){const s=e+t>>>1,n=$e[s],o=Li(n);o<i||o===i&&n.flags&2?e=s+1:t=s}return e}function Hn(i){if(!(i.flags&1)){const e=Li(i),t=$e[$e.length-1];!t||!(i.flags&2)&&e>=Li(t)?$e.push(i):$e.splice(cd(e),0,i),i.flags|=1,Tr()}}function Tr(){Ds||(Ds=Cr.then(kr))}function dd(i){F(i)?ai.push(...i):Et&&i.id===-1?Et.splice(ci+1,0,i):i.flags&1||(ai.push(i),i.flags|=1),Tr()}function $r(i,e,t=lt+1){for(;t<$e.length;t++){const s=$e[t];if(s&&s.flags&2){if(i&&s.id!==i.uid)continue;$e.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ir(i){if(ai.length){const e=[...new Set(ai)].sort((t,s)=>Li(t)-Li(s));if(ai.length=0,Et){Et.push(...e);return}for(Et=e,ci=0;ci<Et.length;ci++){const t=Et[ci];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Et=null,ci=0}}const Li=i=>i.id==null?i.flags&2?-1:1/0:i.id;function kr(i){const e=Je;try{for(lt=0;lt<$e.length;lt++){const t=$e[lt];t&&!(t.flags&8)&&(kt.NODE_ENV!=="production"&&e(t),t.flags&4&&(t.flags&=-2),li(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;lt<$e.length;lt++){const t=$e[lt];t&&(t.flags&=-2)}lt=-1,$e.length=0,Ir(),Ds=null,($e.length||ai.length)&&kr()}}let Ze=null,Er=null;function Ps(i){const e=Ze;return Ze=i,Er=i&&i.type.__scopeId||null,e}function Or(i,e=Ze,t){if(!e||i._n)return i;const s=(...n)=>{s._d&&ll(-1);const o=Ps(e);let r;try{r=i(...n)}finally{Ps(o),s._d&&ll(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Vt(i,e,t,s){const n=i.dirs,o=e&&e.dirs;for(let r=0;r<n.length;r++){const l=n[r];o&&(l.oldValue=o[r].value);let a=l.dir[s];a&&(ht(),rt(a,t,8,[i.el,l,i,e]),ft())}}const ud=Symbol("_vte"),hd=i=>i.__isTeleport;function Ln(i,e){i.shapeFlag&6&&i.component?(i.transition=e,Ln(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Sr(i,e){return M(i)?fe({name:i.name},e,{setup:i}):i}function Rr(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Fn(i,e,t,s,n=!1){if(F(i)){i.forEach((T,S)=>Fn(T,e&&(F(e)?e[S]:e),t,s,n));return}if(Fi(s)&&!n)return;const o=s.shapeFlag&4?Kn(s.component):s.el,r=n?null:o,{i:l,r:a}=i,d=e&&e.r,c=l.refs===Z?l.refs={}:l.refs,u=l.setupState,p=q(u),b=u===Z?()=>!1:T=>Y(p,T);if(d!=null&&d!==a&&(ce(d)?(c[d]=null,b(d)&&(u[d]=null)):he(d)&&(d.value=null)),M(a))li(a,l,12,[r,c]);else{const T=ce(a),S=he(a);if(T||S){const N=()=>{if(i.f){const B=T?b(a)?u[a]:c[a]:a.value;n?F(B)&&bn(B,o):F(B)?B.includes(o)||B.push(o):T?(c[a]=[o],b(a)&&(u[a]=c[a])):(a.value=[o],i.k&&(c[i.k]=a.value))}else T?(c[a]=r,b(a)&&(u[a]=r)):S&&(a.value=r,i.k&&(c[i.k]=r))};r?(N.id=-1,Le(N,t)):N()}}}xs().requestIdleCallback,xs().cancelIdleCallback;const Fi=i=>!!i.type.__asyncLoader,Ar=i=>i.type.__isKeepAlive;function fd(i,e){Dr(i,"a",e)}function pd(i,e){Dr(i,"da",e)}function Dr(i,e,t=pe){const s=i.__wdc||(i.__wdc=()=>{let n=t;for(;n;){if(n.isDeactivated)return;n=n.parent}return i()});if(Ns(e,s,t),t){let n=t.parent;for(;n&&n.parent;)Ar(n.parent.vnode)&&gd(s,e,t,n),n=n.parent}}function gd(i,e,t,s){const n=Ns(e,i,s,!0);Pr(()=>{bn(s[e],n)},t)}function Ns(i,e,t=pe,s=!1){if(t){const n=t[i]||(t[i]=[]),o=e.__weh||(e.__weh=(...r)=>{ht();const l=Wi(t),a=rt(e,t,i,r);return l(),ft(),a});return s?n.unshift(o):n.push(o),o}}const bt=i=>(e,t=pe)=>{(!qi||i==="sp")&&Ns(i,(...s)=>e(...s),t)},bd=bt("bm"),md=bt("m"),vd=bt("bu"),yd=bt("u"),xd=bt("bum"),Pr=bt("um"),wd=bt("sp"),_d=bt("rtg"),Cd=bt("rtc");function Td(i,e=pe){Ns("ec",i,e)}const $d="components";function Id(i,e){return Ed($d,i,!0,e)||i}const kd=Symbol.for("v-ndc");function Ed(i,e,t=!0,s=!1){const n=Ze||pe;if(n){const o=n.type;{const l=bl(o,!1);if(l&&(l===e||l===ze(e)||l===ys(ze(e))))return o}const r=Nr(n[i]||o[i],e)||Nr(n.appContext[i],e);return!r&&s?o:r}}function Nr(i,e){return i&&(i[e]||i[ze(e)]||i[ys(ze(e))])}function Br(i,e,t,s){let n;const o=t,r=F(i);if(r||ce(i)){const l=r&&ri(i);let a=!1;l&&(a=!We(i),i=Cs(i)),n=new Array(i.length);for(let d=0,c=i.length;d<c;d++)n[d]=e(a?ve(i[d]):i[d],d,void 0,o)}else if(typeof i=="number"){n=new Array(i);for(let l=0;l<i;l++)n[l]=e(l+1,l,void 0,o)}else if(ie(i))if(i[Symbol.iterator])n=Array.from(i,(l,a)=>e(l,a,void 0,o));else{const l=Object.keys(i);n=new Array(l.length);for(let a=0,d=l.length;a<d;a++){const c=l[a];n[a]=e(i[c],c,a,o)}}else n=[];return n}const Mn=i=>i?hl(i)?Kn(i):Mn(i.parent):null,Mi=fe(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Mn(i.parent),$root:i=>Mn(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>jn(i),$forceUpdate:i=>i.f||(i.f=()=>{Hn(i.update)}),$nextTick:i=>i.n||(i.n=ad.bind(i.proxy)),$watch:i=>Jd.bind(i)}),Vn=(i,e)=>i!==Z&&!i.__isScriptSetup&&Y(i,e),Od={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:n,props:o,accessCache:r,type:l,appContext:a}=i;let d;if(e[0]!=="$"){const b=r[e];if(b!==void 0)switch(b){case 1:return s[e];case 2:return n[e];case 4:return t[e];case 3:return o[e]}else{if(Vn(s,e))return r[e]=1,s[e];if(n!==Z&&Y(n,e))return r[e]=2,n[e];if((d=i.propsOptions[0])&&Y(d,e))return r[e]=3,o[e];if(t!==Z&&Y(t,e))return r[e]=4,t[e];Un&&(r[e]=0)}}const c=Mi[e];let u,p;if(c)return e==="$attrs"&&me(i.attrs,"get",""),c(i);if((u=l.__cssModules)&&(u=u[e]))return u;if(t!==Z&&Y(t,e))return r[e]=4,t[e];if(p=a.config.globalProperties,Y(p,e))return p[e]},set({_:i},e,t){const{data:s,setupState:n,ctx:o}=i;return Vn(n,e)?(n[e]=t,!0):s!==Z&&Y(s,e)?(s[e]=t,!0):Y(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(o[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:s,appContext:n,propsOptions:o}},r){let l;return!!t[r]||i!==Z&&Y(i,r)||Vn(e,r)||(l=o[0])&&Y(l,r)||Y(s,r)||Y(Mi,r)||Y(n.config.globalProperties,r)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Y(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Hr(i){return F(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Un=!0;function Sd(i){const e=jn(i),t=i.proxy,s=i.ctx;Un=!1,e.beforeCreate&&Lr(e.beforeCreate,i,"bc");const{data:n,computed:o,methods:r,watch:l,provide:a,inject:d,created:c,beforeMount:u,mounted:p,beforeUpdate:b,updated:T,activated:S,deactivated:N,beforeDestroy:B,beforeUnmount:V,destroyed:k,unmounted:C,render:U,renderTracked:J,renderTriggered:le,errorCaptured:Be,serverPrefetch:Zt,expose:Ct,inheritAttrs:Kt,components:Oi,directives:hn,filters:Go}=e;if(d&&Rd(d,s,null),r)for(const ae in r){const ee=r[ae];M(ee)&&(s[ae]=ee.bind(t))}if(n){const ae=n.call(t,t);ie(ae)&&(i.data=Dn(ae))}if(Un=!0,o)for(const ae in o){const ee=o[ae],ei=M(ee)?ee.bind(t,t):M(ee.get)?ee.get.bind(t,t):Je,fn=!M(ee)&&M(ee.set)?ee.set.bind(t):Je,ti=eo({get:ei,set:fn});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>ti.value,set:dt=>ti.value=dt})}if(l)for(const ae in l)Fr(l[ae],s,t,ae);if(a){const ae=M(a)?a.call(t):a;Reflect.ownKeys(ae).forEach(ee=>{Hd(ee,ae[ee])})}c&&Lr(c,i,"c");function Ae(ae,ee){F(ee)?ee.forEach(ei=>ae(ei.bind(t))):ee&&ae(ee.bind(t))}if(Ae(bd,u),Ae(md,p),Ae(vd,b),Ae(yd,T),Ae(fd,S),Ae(pd,N),Ae(Td,Be),Ae(Cd,J),Ae(_d,le),Ae(xd,V),Ae(Pr,C),Ae(wd,Zt),F(Ct))if(Ct.length){const ae=i.exposed||(i.exposed={});Ct.forEach(ee=>{Object.defineProperty(ae,ee,{get:()=>t[ee],set:ei=>t[ee]=ei})})}else i.exposed||(i.exposed={});U&&i.render===Je&&(i.render=U),Kt!=null&&(i.inheritAttrs=Kt),Oi&&(i.components=Oi),hn&&(i.directives=hn),Zt&&Rr(i)}function Rd(i,e,t=Je){F(i)&&(i=Gn(i));for(const s in i){const n=i[s];let o;ie(n)?"default"in n?o=Hs(n.from||s,n.default,!0):o=Hs(n.from||s):o=Hs(n),he(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):e[s]=o}}function Lr(i,e,t){rt(F(i)?i.map(s=>s.bind(e.proxy)):i.bind(e.proxy),e,t)}function Fr(i,e,t,s){let n=s.includes(".")?sl(t,s):()=>t[s];if(ce(i)){const o=e[i];M(o)&&Xn(n,o)}else if(M(i))Xn(n,i.bind(t));else if(ie(i))if(F(i))i.forEach(o=>Fr(o,e,t,s));else{const o=M(i.handler)?i.handler.bind(t):e[i.handler];M(o)&&Xn(n,o,i)}}function jn(i){const e=i.type,{mixins:t,extends:s}=e,{mixins:n,optionsCache:o,config:{optionMergeStrategies:r}}=i.appContext,l=o.get(e);let a;return l?a=l:!n.length&&!t&&!s?a=e:(a={},n.length&&n.forEach(d=>Bs(a,d,r,!0)),Bs(a,e,r)),ie(e)&&o.set(e,a),a}function Bs(i,e,t,s=!1){const{mixins:n,extends:o}=e;o&&Bs(i,o,t,!0),n&&n.forEach(r=>Bs(i,r,t,!0));for(const r in e)if(!(s&&r==="expose")){const l=Ad[r]||t&&t[r];i[r]=l?l(i[r],e[r]):e[r]}return i}const Ad={data:Mr,props:Vr,emits:Vr,methods:Vi,computed:Vi,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Vi,directives:Vi,watch:Pd,provide:Mr,inject:Dd};function Mr(i,e){return e?i?function(){return fe(M(i)?i.call(this,this):i,M(e)?e.call(this,this):e)}:e:i}function Dd(i,e){return Vi(Gn(i),Gn(e))}function Gn(i){if(F(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Ie(i,e){return i?[...new Set([].concat(i,e))]:e}function Vi(i,e){return i?fe(Object.create(null),i,e):e}function Vr(i,e){return i?F(i)&&F(e)?[...new Set([...i,...e])]:fe(Object.create(null),Hr(i),Hr(e??{})):e}function Pd(i,e){if(!i)return e;if(!e)return i;const t=fe(Object.create(null),i);for(const s in e)t[s]=Ie(i[s],e[s]);return t}function Ur(){return{app:null,config:{isNativeTag:dc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nd=0;function Bd(i,e){return function(s,n=null){M(s)||(s=fe({},s)),n!=null&&!ie(n)&&(n=null);const o=Ur(),r=new WeakSet,l=[];let a=!1;const d=o.app={_uid:Nd++,_component:s,_props:n,_container:null,_context:o,_instance:null,version:yu,get config(){return o.config},set config(c){},use(c,...u){return r.has(c)||(c&&M(c.install)?(r.add(c),c.install(d,...u)):M(c)&&(r.add(c),c(d,...u))),d},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),d},component(c,u){return u?(o.components[c]=u,d):o.components[c]},directive(c,u){return u?(o.directives[c]=u,d):o.directives[c]},mount(c,u,p){if(!a){const b=d._ceVNode||be(s,n);return b.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),u&&e?e(b,c):i(b,c,p),a=!0,d._container=c,c.__vue_app__=d,Kn(b.component)}},onUnmount(c){l.push(c)},unmount(){a&&(rt(l,d._instance,16),i(null,d._container),delete d._container.__vue_app__)},provide(c,u){return o.provides[c]=u,d},runWithContext(c){const u=di;di=d;try{return c()}finally{di=u}}};return d}}let di=null;function Hd(i,e){if(pe){let t=pe.provides;const s=pe.parent&&pe.parent.provides;s===t&&(t=pe.provides=Object.create(s)),t[i]=e}}function Hs(i,e,t=!1){const s=pe||Ze;if(s||di){const n=di?di._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(n&&i in n)return n[i];if(arguments.length>1)return t&&M(e)?e.call(s&&s.proxy):e}}const jr={},Gr=()=>Object.create(jr),zr=i=>Object.getPrototypeOf(i)===jr;function Ld(i,e,t,s=!1){const n={},o=Gr();i.propsDefaults=Object.create(null),Wr(i,e,n,o);for(const r in i.propsOptions[0])r in n||(n[r]=void 0);t?i.props=s?n:jc(n):i.type.props?i.props=n:i.props=o,i.attrs=o}function Fd(i,e,t,s){const{props:n,attrs:o,vnode:{patchFlag:r}}=i,l=q(n),[a]=i.propsOptions;let d=!1;if((s||r>0)&&!(r&16)){if(r&8){const c=i.vnode.dynamicProps;for(let u=0;u<c.length;u++){let p=c[u];if(Ls(i.emitsOptions,p))continue;const b=e[p];if(a)if(Y(o,p))b!==o[p]&&(o[p]=b,d=!0);else{const T=ze(p);n[T]=zn(a,l,T,b,i,!1)}else b!==o[p]&&(o[p]=b,d=!0)}}}else{Wr(i,e,n,o)&&(d=!0);let c;for(const u in l)(!e||!Y(e,u)&&((c=Ht(u))===u||!Y(e,c)))&&(a?t&&(t[u]!==void 0||t[c]!==void 0)&&(n[u]=zn(a,l,u,void 0,i,!0)):delete n[u]);if(o!==l)for(const u in o)(!e||!Y(e,u))&&(delete o[u],d=!0)}d&&pt(i.attrs,"set","")}function Wr(i,e,t,s){const[n,o]=i.propsOptions;let r=!1,l;if(e)for(let a in e){if(Si(a))continue;const d=e[a];let c;n&&Y(n,c=ze(a))?!o||!o.includes(c)?t[c]=d:(l||(l={}))[c]=d:Ls(i.emitsOptions,a)||(!(a in s)||d!==s[a])&&(s[a]=d,r=!0)}if(o){const a=q(t),d=l||Z;for(let c=0;c<o.length;c++){const u=o[c];t[u]=zn(n,a,u,d[u],i,!Y(d,u))}}return r}function zn(i,e,t,s,n,o){const r=i[t];if(r!=null){const l=Y(r,"default");if(l&&s===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&M(a)){const{propsDefaults:d}=n;if(t in d)s=d[t];else{const c=Wi(n);s=d[t]=a.call(null,e),c()}}else s=a;n.ce&&n.ce._setProp(t,s)}r[0]&&(o&&!l?s=!1:r[1]&&(s===""||s===Ht(t))&&(s=!0))}return s}const Md=new WeakMap;function qr(i,e,t=!1){const s=t?Md:e.propsCache,n=s.get(i);if(n)return n;const o=i.props,r={},l=[];let a=!1;if(!M(i)){const c=u=>{a=!0;const[p,b]=qr(u,e,!0);fe(r,p),b&&l.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(c),i.extends&&c(i.extends),i.mixins&&i.mixins.forEach(c)}if(!o&&!a)return ie(i)&&s.set(i,si),si;if(F(o))for(let c=0;c<o.length;c++){const u=ze(o[c]);Xr(u)&&(r[u]=Z)}else if(o)for(const c in o){const u=ze(c);if(Xr(u)){const p=o[c],b=r[u]=F(p)||M(p)?{type:p}:fe({},p),T=b.type;let S=!1,N=!0;if(F(T))for(let B=0;B<T.length;++B){const V=T[B],k=M(V)&&V.name;if(k==="Boolean"){S=!0;break}else k==="String"&&(N=!1)}else S=M(T)&&T.name==="Boolean";b[0]=S,b[1]=N,(S||Y(b,"default"))&&l.push(u)}}const d=[r,l];return ie(i)&&s.set(i,d),d}function Xr(i){return i[0]!=="$"&&!Si(i)}const Yr=i=>i[0]==="_"||i==="$stable",Wn=i=>F(i)?i.map(at):[at(i)],Vd=(i,e,t)=>{if(e._n)return e;const s=Or((...n)=>(kt.NODE_ENV!=="production"&&pe&&(!t||(t.root,pe.root)),Wn(e(...n))),t);return s._c=!1,s},Jr=(i,e,t)=>{const s=i._ctx;for(const n in i){if(Yr(n))continue;const o=i[n];if(M(o))e[n]=Vd(n,o,s);else if(o!=null){const r=Wn(o);e[n]=()=>r}}},Qr=(i,e)=>{const t=Wn(e);i.slots.default=()=>t},Zr=(i,e,t)=>{for(const s in e)(t||s!=="_")&&(i[s]=e[s])},Ud=(i,e,t)=>{const s=i.slots=Gr();if(i.vnode.shapeFlag&32){const n=e._;n?(Zr(s,e,t),t&&Qo(s,"_",n,!0)):Jr(e,s)}else e&&Qr(i,e)},jd=(i,e,t)=>{const{vnode:s,slots:n}=i;let o=!0,r=Z;if(s.shapeFlag&32){const l=e._;l?t&&l===1?o=!1:Zr(n,e,t):(o=!e.$stable,Jr(e,n)),r=e}else e&&(Qr(i,e),r={default:1});if(o)for(const l in n)!Yr(l)&&r[l]==null&&delete n[l]},Le=su;function Gd(i){return zd(i)}function zd(i,e){const t=xs();t.__VUE__=!0;const{insert:s,remove:n,patchProp:o,createElement:r,createText:l,createComment:a,setText:d,setElementText:c,parentNode:u,nextSibling:p,setScopeId:b=Je,insertStaticContent:T}=i,S=(h,f,m,w=null,y=null,x=null,E=void 0,I=null,$=!!f.dynamicChildren)=>{if(h===f)return;h&&!Gi(h,f)&&(w=pn(h),dt(h,y,x,!0),h=null),f.patchFlag===-2&&($=!1,f.dynamicChildren=null);const{type:_,ref:P,shapeFlag:O}=f;switch(_){case Fs:N(h,f,m,w);break;case jt:B(h,f,m,w);break;case Jn:h==null&&V(f,m,w,E);break;case Ke:Oi(h,f,m,w,y,x,E,I,$);break;default:O&1?U(h,f,m,w,y,x,E,I,$):O&6?hn(h,f,m,w,y,x,E,I,$):(O&64||O&128)&&_.process(h,f,m,w,y,x,E,I,$,ps)}P!=null&&y&&Fn(P,h&&h.ref,x,f||h,!f)},N=(h,f,m,w)=>{if(h==null)s(f.el=l(f.children),m,w);else{const y=f.el=h.el;f.children!==h.children&&d(y,f.children)}},B=(h,f,m,w)=>{h==null?s(f.el=a(f.children||""),m,w):f.el=h.el},V=(h,f,m,w)=>{[h.el,h.anchor]=T(h.children,f,m,w,h.el,h.anchor)},k=({el:h,anchor:f},m,w)=>{let y;for(;h&&h!==f;)y=p(h),s(h,m,w),h=y;s(f,m,w)},C=({el:h,anchor:f})=>{let m;for(;h&&h!==f;)m=p(h),n(h),h=m;n(f)},U=(h,f,m,w,y,x,E,I,$)=>{f.type==="svg"?E="svg":f.type==="math"&&(E="mathml"),h==null?J(f,m,w,y,x,E,I,$):Zt(h,f,y,x,E,I,$)},J=(h,f,m,w,y,x,E,I)=>{let $,_;const{props:P,shapeFlag:O,transition:D,dirs:L}=h;if($=h.el=r(h.type,x,P&&P.is,P),O&8?c($,h.children):O&16&&Be(h.children,$,null,w,y,qn(h,x),E,I),L&&Vt(h,null,w,"created"),le($,h,h.scopeId,E,w),P){for(const te in P)te!=="value"&&!Si(te)&&o($,te,null,P[te],x,w);"value"in P&&o($,"value",null,P.value,x),(_=P.onVnodeBeforeMount)&&ct(_,w,h)}L&&Vt(h,null,w,"beforeMount");const W=Wd(y,D);W&&D.beforeEnter($),s($,f,m),((_=P&&P.onVnodeMounted)||W||L)&&Le(()=>{_&&ct(_,w,h),W&&D.enter($),L&&Vt(h,null,w,"mounted")},y)},le=(h,f,m,w,y)=>{if(m&&b(h,m),w)for(let x=0;x<w.length;x++)b(h,w[x]);if(y){let x=y.subTree;if(f===x||rl(x.type)&&(x.ssContent===f||x.ssFallback===f)){const E=y.vnode;le(h,E,E.scopeId,E.slotScopeIds,y.parent)}}},Be=(h,f,m,w,y,x,E,I,$=0)=>{for(let _=$;_<h.length;_++){const P=h[_]=I?Ot(h[_]):at(h[_]);S(null,P,f,m,w,y,x,E,I)}},Zt=(h,f,m,w,y,x,E)=>{const I=f.el=h.el;let{patchFlag:$,dynamicChildren:_,dirs:P}=f;$|=h.patchFlag&16;const O=h.props||Z,D=f.props||Z;let L;if(m&&Ut(m,!1),(L=D.onVnodeBeforeUpdate)&&ct(L,m,f,h),P&&Vt(f,h,m,"beforeUpdate"),m&&Ut(m,!0),(O.innerHTML&&D.innerHTML==null||O.textContent&&D.textContent==null)&&c(I,""),_?Ct(h.dynamicChildren,_,I,m,w,qn(f,y),x):E||ee(h,f,I,null,m,w,qn(f,y),x,!1),$>0){if($&16)Kt(I,O,D,m,y);else if($&2&&O.class!==D.class&&o(I,"class",null,D.class,y),$&4&&o(I,"style",O.style,D.style,y),$&8){const W=f.dynamicProps;for(let te=0;te<W.length;te++){const Q=W[te],Ue=O[Q],Te=D[Q];(Te!==Ue||Q==="value")&&o(I,Q,Ue,Te,y,m)}}$&1&&h.children!==f.children&&c(I,f.children)}else!E&&_==null&&Kt(I,O,D,m,y);((L=D.onVnodeUpdated)||P)&&Le(()=>{L&&ct(L,m,f,h),P&&Vt(f,h,m,"updated")},w)},Ct=(h,f,m,w,y,x,E)=>{for(let I=0;I<f.length;I++){const $=h[I],_=f[I],P=$.el&&($.type===Ke||!Gi($,_)||$.shapeFlag&70)?u($.el):m;S($,_,P,null,w,y,x,E,!0)}},Kt=(h,f,m,w,y)=>{if(f!==m){if(f!==Z)for(const x in f)!Si(x)&&!(x in m)&&o(h,x,f[x],null,y,w);for(const x in m){if(Si(x))continue;const E=m[x],I=f[x];E!==I&&x!=="value"&&o(h,x,I,E,y,w)}"value"in m&&o(h,"value",f.value,m.value,y)}},Oi=(h,f,m,w,y,x,E,I,$)=>{const _=f.el=h?h.el:l(""),P=f.anchor=h?h.anchor:l("");let{patchFlag:O,dynamicChildren:D,slotScopeIds:L}=f;L&&(I=I?I.concat(L):L),h==null?(s(_,m,w),s(P,m,w),Be(f.children||[],m,P,y,x,E,I,$)):O>0&&O&64&&D&&h.dynamicChildren?(Ct(h.dynamicChildren,D,m,y,x,E,I),(f.key!=null||y&&f===y.subTree)&&Kr(h,f,!0)):ee(h,f,m,P,y,x,E,I,$)},hn=(h,f,m,w,y,x,E,I,$)=>{f.slotScopeIds=I,h==null?f.shapeFlag&512?y.ctx.activate(f,m,w,E,$):Go(f,m,w,y,x,E,$):sc(h,f,$)},Go=(h,f,m,w,y,x,E)=>{const I=h.component=uu(h,w,y);if(Ar(h)&&(I.ctx.renderer=ps),hu(I,!1,E),I.asyncDep){if(y&&y.registerDep(I,Ae,E),!h.el){const $=I.subTree=be(jt);B(null,$,f,m)}}else Ae(I,h,f,m,y,x,E)},sc=(h,f,m)=>{const w=f.component=h.component;if(tu(h,f,m))if(w.asyncDep&&!w.asyncResolved){ae(w,f,m);return}else w.next=f,w.update();else f.el=h.el,w.vnode=f},Ae=(h,f,m,w,y,x,E)=>{const I=()=>{if(h.isMounted){let{next:O,bu:D,u:L,parent:W,vnode:te}=h;{const je=el(h);if(je){O&&(O.el=te.el,ae(h,O,E)),je.asyncDep.then(()=>{h.isUnmounted||I()});return}}let Q=O,Ue;Ut(h,!1),O?(O.el=te.el,ae(h,O,E)):O=te,D&&yn(D),(Ue=O.props&&O.props.onVnodeBeforeUpdate)&&ct(Ue,W,O,te),Ut(h,!0);const Te=Yn(h),ot=h.subTree;h.subTree=Te,S(ot,Te,u(ot.el),pn(ot),h,y,x),O.el=Te.el,Q===null&&iu(h,Te.el),L&&Le(L,y),(Ue=O.props&&O.props.onVnodeUpdated)&&Le(()=>ct(Ue,W,O,te),y)}else{let O;const{el:D,props:L}=f,{bm:W,m:te,parent:Q,root:Ue,type:Te}=h,ot=Fi(f);if(Ut(h,!1),W&&yn(W),!ot&&(O=L&&L.onVnodeBeforeMount)&&ct(O,Q,f),Ut(h,!0),D&&lc){const je=()=>{h.subTree=Yn(h),lc(D,h.subTree,h,y,null)};ot&&Te.__asyncHydrate?Te.__asyncHydrate(D,h,je):je()}else{Ue.ce&&Ue.ce._injectChildStyle(Te);const je=h.subTree=Yn(h);S(null,je,m,w,h,y,x),f.el=je.el}if(te&&Le(te,y),!ot&&(O=L&&L.onVnodeMounted)){const je=f;Le(()=>ct(O,Q,je),y)}(f.shapeFlag&256||Q&&Fi(Q.vnode)&&Q.vnode.shapeFlag&256)&&h.a&&Le(h.a,y),h.isMounted=!0,f=m=w=null}};h.scope.on();const $=h.effect=new ir(I);h.scope.off();const _=h.update=$.run.bind($),P=h.job=$.runIfDirty.bind($);P.i=h,P.id=h.uid,$.scheduler=()=>Hn(P),Ut(h,!0),_()},ae=(h,f,m)=>{f.component=h;const w=h.vnode.props;h.vnode=f,h.next=null,Fd(h,f.props,w,m),jd(h,f.children,m),ht(),$r(h),ft()},ee=(h,f,m,w,y,x,E,I,$=!1)=>{const _=h&&h.children,P=h?h.shapeFlag:0,O=f.children,{patchFlag:D,shapeFlag:L}=f;if(D>0){if(D&128){fn(_,O,m,w,y,x,E,I,$);return}else if(D&256){ei(_,O,m,w,y,x,E,I,$);return}}L&8?(P&16&&fs(_,y,x),O!==_&&c(m,O)):P&16?L&16?fn(_,O,m,w,y,x,E,I,$):fs(_,y,x,!0):(P&8&&c(m,""),L&16&&Be(O,m,w,y,x,E,I,$))},ei=(h,f,m,w,y,x,E,I,$)=>{h=h||si,f=f||si;const _=h.length,P=f.length,O=Math.min(_,P);let D;for(D=0;D<O;D++){const L=f[D]=$?Ot(f[D]):at(f[D]);S(h[D],L,m,null,y,x,E,I,$)}_>P?fs(h,y,x,!0,!1,O):Be(f,m,w,y,x,E,I,$,O)},fn=(h,f,m,w,y,x,E,I,$)=>{let _=0;const P=f.length;let O=h.length-1,D=P-1;for(;_<=O&&_<=D;){const L=h[_],W=f[_]=$?Ot(f[_]):at(f[_]);if(Gi(L,W))S(L,W,m,null,y,x,E,I,$);else break;_++}for(;_<=O&&_<=D;){const L=h[O],W=f[D]=$?Ot(f[D]):at(f[D]);if(Gi(L,W))S(L,W,m,null,y,x,E,I,$);else break;O--,D--}if(_>O){if(_<=D){const L=D+1,W=L<P?f[L].el:w;for(;_<=D;)S(null,f[_]=$?Ot(f[_]):at(f[_]),m,W,y,x,E,I,$),_++}}else if(_>D)for(;_<=O;)dt(h[_],y,x,!0),_++;else{const L=_,W=_,te=new Map;for(_=W;_<=D;_++){const Ge=f[_]=$?Ot(f[_]):at(f[_]);Ge.key!=null&&te.set(Ge.key,_)}let Q,Ue=0;const Te=D-W+1;let ot=!1,je=0;const gs=new Array(Te);for(_=0;_<Te;_++)gs[_]=0;for(_=L;_<=O;_++){const Ge=h[_];if(Ue>=Te){dt(Ge,y,x,!0);continue}let ut;if(Ge.key!=null)ut=te.get(Ge.key);else for(Q=W;Q<=D;Q++)if(gs[Q-W]===0&&Gi(Ge,f[Q])){ut=Q;break}ut===void 0?dt(Ge,y,x,!0):(gs[ut-W]=_+1,ut>=je?je=ut:ot=!0,S(Ge,f[ut],m,null,y,x,E,I,$),Ue++)}const ac=ot?qd(gs):si;for(Q=ac.length-1,_=Te-1;_>=0;_--){const Ge=W+_,ut=f[Ge],cc=Ge+1<P?f[Ge+1].el:w;gs[_]===0?S(null,ut,m,cc,y,x,E,I,$):ot&&(Q<0||_!==ac[Q]?ti(ut,m,cc,2):Q--)}}},ti=(h,f,m,w,y=null)=>{const{el:x,type:E,transition:I,children:$,shapeFlag:_}=h;if(_&6){ti(h.component.subTree,f,m,w);return}if(_&128){h.suspense.move(f,m,w);return}if(_&64){E.move(h,f,m,ps);return}if(E===Ke){s(x,f,m);for(let O=0;O<$.length;O++)ti($[O],f,m,w);s(h.anchor,f,m);return}if(E===Jn){k(h,f,m);return}if(w!==2&&_&1&&I)if(w===0)I.beforeEnter(x),s(x,f,m),Le(()=>I.enter(x),y);else{const{leave:O,delayLeave:D,afterLeave:L}=I,W=()=>s(x,f,m),te=()=>{O(x,()=>{W(),L&&L()})};D?D(x,W,te):te()}else s(x,f,m)},dt=(h,f,m,w=!1,y=!1)=>{const{type:x,props:E,ref:I,children:$,dynamicChildren:_,shapeFlag:P,patchFlag:O,dirs:D,cacheIndex:L}=h;if(O===-2&&(y=!1),I!=null&&Fn(I,null,m,h,!0),L!=null&&(f.renderCache[L]=void 0),P&256){f.ctx.deactivate(h);return}const W=P&1&&D,te=!Fi(h);let Q;if(te&&(Q=E&&E.onVnodeBeforeUnmount)&&ct(Q,f,h),P&6)Lg(h.component,m,w);else{if(P&128){h.suspense.unmount(m,w);return}W&&Vt(h,null,f,"beforeUnmount"),P&64?h.type.remove(h,f,m,ps,w):_&&!_.hasOnce&&(x!==Ke||O>0&&O&64)?fs(_,f,m,!1,!0):(x===Ke&&O&384||!y&&P&16)&&fs($,f,m),w&&nc(h)}(te&&(Q=E&&E.onVnodeUnmounted)||W)&&Le(()=>{Q&&ct(Q,f,h),W&&Vt(h,null,f,"unmounted")},m)},nc=h=>{const{type:f,el:m,anchor:w,transition:y}=h;if(f===Ke){Hg(m,w);return}if(f===Jn){C(h);return}const x=()=>{n(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:E,delayLeave:I}=y,$=()=>E(m,x);I?I(h.el,x,$):$()}else x()},Hg=(h,f)=>{let m;for(;h!==f;)m=p(h),n(h),h=m;n(f)},Lg=(h,f,m)=>{const{bum:w,scope:y,job:x,subTree:E,um:I,m:$,a:_}=h;tl($),tl(_),w&&yn(w),y.stop(),x&&(x.flags|=8,dt(E,h,f,m)),I&&Le(I,f),Le(()=>{h.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},fs=(h,f,m,w=!1,y=!1,x=0)=>{for(let E=x;E<h.length;E++)dt(h[E],f,m,w,y)},pn=h=>{if(h.shapeFlag&6)return pn(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const f=p(h.anchor||h.el),m=f&&f[ud];return m?p(m):f};let zo=!1;const oc=(h,f,m)=>{h==null?f._vnode&&dt(f._vnode,null,null,!0):S(f._vnode||null,h,f,null,null,null,m),f._vnode=h,zo||(zo=!0,$r(),Ir(),zo=!1)},ps={p:S,um:dt,m:ti,r:nc,mt:Go,mc:Be,pc:ee,pbc:Ct,n:pn,o:i};let rc,lc;return{render:oc,hydrate:rc,createApp:Bd(oc,rc)}}function qn({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ut({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function Wd(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Kr(i,e,t=!1){const s=i.children,n=e.children;if(F(s)&&F(n))for(let o=0;o<s.length;o++){const r=s[o];let l=n[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[o]=Ot(n[o]),l.el=r.el),!t&&l.patchFlag!==-2&&Kr(r,l)),l.type===Fs&&(l.el=r.el)}}function qd(i){const e=i.slice(),t=[0];let s,n,o,r,l;const a=i.length;for(s=0;s<a;s++){const d=i[s];if(d!==0){if(n=t[t.length-1],i[n]<d){e[s]=n,t.push(s);continue}for(o=0,r=t.length-1;o<r;)l=o+r>>1,i[t[l]]<d?o=l+1:r=l;d<i[t[o]]&&(o>0&&(e[s]=t[o-1]),t[o]=s)}}for(o=t.length,r=t[o-1];o-- >0;)t[o]=r,r=e[r];return t}function el(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:el(e)}function tl(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const Xd=Symbol.for("v-scx"),Yd=()=>Hs(Xd);function Xn(i,e,t){return il(i,e,t)}function il(i,e,t=Z){const{immediate:s,deep:n,flush:o,once:r}=t,l=fe({},t),a=e&&s||!e&&o!=="post";let d;if(qi){if(o==="sync"){const b=Yd();d=b.__watcherHandles||(b.__watcherHandles=[])}else if(!a){const b=()=>{};return b.stop=Je,b.resume=Je,b.pause=Je,b}}const c=pe;l.call=(b,T,S)=>rt(b,c,T,S);let u=!1;o==="post"?l.scheduler=b=>{Le(b,c&&c.suspense)}:o!=="sync"&&(u=!0,l.scheduler=(b,T)=>{T?b():Hn(b)}),l.augmentJob=b=>{e&&(b.flags|=4),u&&(b.flags|=2,c&&(b.id=c.uid,b.i=c))};const p=td(i,e,l);return qi&&(d?d.push(p):a&&p()),p}function Jd(i,e,t){const s=this.proxy,n=ce(i)?i.includes(".")?sl(s,i):()=>s[i]:i.bind(s,s);let o;M(e)?o=e:(o=e.handler,t=e);const r=Wi(this),l=il(n,o.bind(s),t);return r(),l}function sl(i,e){const t=e.split(".");return()=>{let s=i;for(let n=0;n<t.length&&s;n++)s=s[t[n]];return s}}const Qd=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${ze(e)}Modifiers`]||i[`${Ht(e)}Modifiers`];function Zd(i,e,...t){if(i.isUnmounted)return;const s=i.vnode.props||Z;let n=t;const o=e.startsWith("update:"),r=o&&Qd(s,e.slice(7));r&&(r.trim&&(n=t.map(c=>ce(c)?c.trim():c)),r.number&&(n=t.map(gc)));let l,a=s[l=vn(e)]||s[l=vn(ze(e))];!a&&o&&(a=s[l=vn(Ht(e))]),a&&rt(a,i,6,n);const d=s[l+"Once"];if(d){if(!i.emitted)i.emitted={};else if(i.emitted[l])return;i.emitted[l]=!0,rt(d,i,6,n)}}function nl(i,e,t=!1){const s=e.emitsCache,n=s.get(i);if(n!==void 0)return n;const o=i.emits;let r={},l=!1;if(!M(i)){const a=d=>{const c=nl(d,e,!0);c&&(l=!0,fe(r,c))};!t&&e.mixins.length&&e.mixins.forEach(a),i.extends&&a(i.extends),i.mixins&&i.mixins.forEach(a)}return!o&&!l?(ie(i)&&s.set(i,null),null):(F(o)?o.forEach(a=>r[a]=null):fe(r,o),ie(i)&&s.set(i,r),r)}function Ls(i,e){return!i||!bs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(i,e[0].toLowerCase()+e.slice(1))||Y(i,Ht(e))||Y(i,e))}function Mg(){}function Yn(i){const{type:e,vnode:t,proxy:s,withProxy:n,propsOptions:[o],slots:r,attrs:l,emit:a,render:d,renderCache:c,props:u,data:p,setupState:b,ctx:T,inheritAttrs:S}=i,N=Ps(i);let B,V;try{if(t.shapeFlag&4){const C=n||s,U=kt.NODE_ENV!=="production"&&b.__isScriptSetup?new Proxy(C,{get(J,le,Be){return id(`Property '${String(le)}' was accessed via 'this'. Avoid using 'this' in templates.`),Reflect.get(J,le,Be)}}):C;B=at(d.call(U,C,c,kt.NODE_ENV!=="production"?ks(u):u,b,p,T)),V=l}else{const C=e;kt.NODE_ENV,B=at(C.length>1?C(kt.NODE_ENV!=="production"?ks(u):u,kt.NODE_ENV!=="production"?{get attrs(){return ks(l)},slots:r,emit:a}:{attrs:l,slots:r,emit:a}):C(kt.NODE_ENV!=="production"?ks(u):u,null)),V=e.props?l:Kd(l)}}catch(C){Ui.length=0,As(C,i,1),B=be(jt)}let k=B;if(V&&S!==!1){const C=Object.keys(V),{shapeFlag:U}=k;C.length&&U&7&&(o&&C.some(gn)&&(V=eu(V,o)),k=ui(k,V,!1,!0))}return t.dirs&&(k=ui(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(t.dirs):t.dirs),t.transition&&Ln(k,t.transition),B=k,Ps(N),B}const Kd=i=>{let e;for(const t in i)(t==="class"||t==="style"||bs(t))&&((e||(e={}))[t]=i[t]);return e},eu=(i,e)=>{const t={};for(const s in i)(!gn(s)||!(s.slice(9)in e))&&(t[s]=i[s]);return t};function tu(i,e,t){const{props:s,children:n,component:o}=i,{props:r,children:l,patchFlag:a}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&a>=0){if(a&1024)return!0;if(a&16)return s?ol(s,r,d):!!r;if(a&8){const c=e.dynamicProps;for(let u=0;u<c.length;u++){const p=c[u];if(r[p]!==s[p]&&!Ls(d,p))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:s===r?!1:s?r?ol(s,r,d):!0:!!r;return!1}function ol(i,e,t){const s=Object.keys(e);if(s.length!==Object.keys(i).length)return!0;for(let n=0;n<s.length;n++){const o=s[n];if(e[o]!==i[o]&&!Ls(t,o))return!0}return!1}function iu({vnode:i,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===i&&(s.el=i.el),s===i)(i=e.vnode).el=t,e=e.parent;else break}}const rl=i=>i.__isSuspense;function su(i,e){e&&e.pendingBranch?F(i)?e.effects.push(...i):e.effects.push(i):dd(i)}const Ke=Symbol.for("v-fgt"),Fs=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),Jn=Symbol.for("v-stc"),Ui=[];let Fe=null;function Me(i=!1){Ui.push(Fe=i?null:[])}function nu(){Ui.pop(),Fe=Ui[Ui.length-1]||null}let ji=1;function ll(i){ji+=i,i<0&&Fe&&(Fe.hasOnce=!0)}function al(i){return i.dynamicChildren=ji>0?Fe||si:null,nu(),ji>0&&Fe&&Fe.push(i),i}function et(i,e,t,s,n,o){return al(mt(i,e,t,s,n,o,!0))}function cl(i,e,t,s,n){return al(be(i,e,t,s,n,!0))}function Ms(i){return i?i.__v_isVNode===!0:!1}function Gi(i,e){return i.type===e.type&&i.key===e.key}const dl=({key:i})=>i??null,Vs=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?ce(i)||he(i)||M(i)?{i:Ze,r:i,k:e,f:!!t}:i:null);function mt(i,e=null,t=null,s=0,n=null,o=i===Ke?0:1,r=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&dl(e),ref:e&&Vs(e),scopeId:Er,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:Ze};return l?(Qn(a,t),o&128&&i.normalize(a)):t&&(a.shapeFlag|=ce(t)?8:16),ji>0&&!r&&Fe&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&Fe.push(a),a}const be=ou;function ou(i,e=null,t=null,s=0,n=null,o=!1){if((!i||i===kd)&&(i=jt),Ms(i)){const l=ui(i,e,!0);return t&&Qn(l,t),ji>0&&!o&&Fe&&(l.shapeFlag&6?Fe[Fe.indexOf(i)]=l:Fe.push(l)),l.patchFlag=-2,l}if(vu(i)&&(i=i.__vccOpts),e){e=ru(e);let{class:l,style:a}=e;l&&!ce(l)&&(e.class=xn(l)),ie(a)&&(Pn(a)&&!F(a)&&(a=fe({},a)),e.style=ws(a))}const r=ce(i)?1:rl(i)?128:hd(i)?64:ie(i)?4:M(i)?2:0;return mt(i,e,t,s,n,r,o,!0)}function ru(i){return i?Pn(i)||zr(i)?fe({},i):i:null}function ui(i,e,t=!1,s=!1){const{props:n,ref:o,patchFlag:r,children:l,transition:a}=i,d=e?au(n||{},e):n,c={__v_isVNode:!0,__v_skip:!0,type:i.type,props:d,key:d&&dl(d),ref:e&&e.ref?t&&o?F(o)?o.concat(Vs(e)):[o,Vs(e)]:Vs(e):o,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:l,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Ke?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:a,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&ui(i.ssContent),ssFallback:i.ssFallback&&ui(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return a&&s&&Ln(c,a.clone(c)),c}function lu(i=" ",e=0){return be(Fs,null,i,e)}function zi(i="",e=!1){return e?(Me(),cl(jt,null,i)):be(jt,null,i)}function at(i){return i==null||typeof i=="boolean"?be(jt):F(i)?be(Ke,null,i.slice()):Ms(i)?Ot(i):be(Fs,null,String(i))}function Ot(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:ui(i)}function Qn(i,e){let t=0;const{shapeFlag:s}=i;if(e==null)e=null;else if(F(e))t=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),Qn(i,n()),n._c&&(n._d=!0));return}else{t=32;const n=e._;!n&&!zr(e)?e._ctx=Ze:n===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:Ze},t=32):(e=String(e),s&64?(t=16,e=[lu(e)]):t=8);i.children=e,i.shapeFlag|=t}function au(...i){const e={};for(let t=0;t<i.length;t++){const s=i[t];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=xn([e.class,s.class]));else if(n==="style")e.style=ws([e.style,s.style]);else if(bs(n)){const o=e[n],r=s[n];r&&o!==r&&!(F(o)&&o.includes(r))&&(e[n]=o?[].concat(o,r):r)}else n!==""&&(e[n]=s[n])}return e}function ct(i,e,t,s=null){rt(i,e,7,[t,s])}const cu=Ur();let du=0;function uu(i,e,t){const s=i.type,n=(e?e.appContext:i.appContext)||cu,o={uid:du++,vnode:i,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _c(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qr(s,n),emitsOptions:nl(s,n),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:s.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Zd.bind(null,o),i.ce&&i.ce(o),o}let pe=null,Us,Zn;{const i=xs(),e=(t,s)=>{let n;return(n=i[t])||(n=i[t]=[]),n.push(s),o=>{n.length>1?n.forEach(r=>r(o)):n[0](o)}};Us=e("__VUE_INSTANCE_SETTERS__",t=>pe=t),Zn=e("__VUE_SSR_SETTERS__",t=>qi=t)}const Wi=i=>{const e=pe;return Us(i),i.scope.on(),()=>{i.scope.off(),Us(e)}},ul=()=>{pe&&pe.scope.off(),Us(null)};function hl(i){return i.vnode.shapeFlag&4}let qi=!1;function hu(i,e=!1,t=!1){e&&Zn(e);const{props:s,children:n}=i.vnode,o=hl(i);Ld(i,s,o,e),Ud(i,n,t);const r=o?fu(i,e):void 0;return e&&Zn(!1),r}function fu(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Od);const{setup:s}=t;if(s){ht();const n=i.setupContext=s.length>1?gu(i):null,o=Wi(i),r=li(s,i,0,[i.props,n]),l=Xo(r);if(ft(),o(),(l||i.sp)&&!Fi(i)&&Rr(i),l){if(r.then(ul,ul),e)return r.then(a=>{fl(i,a,e)}).catch(a=>{As(a,i,0)});i.asyncDep=r}else fl(i,r,e)}else gl(i,e)}function fl(i,e,t){M(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:ie(e)&&(i.setupState=wr(e)),gl(i,t)}let pl;function gl(i,e,t){const s=i.type;if(!i.render){if(!e&&pl&&!s.render){const n=s.template||jn(i).template;if(n){const{isCustomElement:o,compilerOptions:r}=i.appContext.config,{delimiters:l,compilerOptions:a}=s,d=fe(fe({isCustomElement:o,delimiters:l},r),a);s.render=pl(n,d)}}i.render=s.render||Je}{const n=Wi(i);ht();try{Sd(i)}finally{ft(),n()}}}const pu={get(i,e){return me(i,"get",""),i[e]}};function gu(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,pu),slots:i.slots,emit:i.emit,expose:e}}function Kn(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(wr(Gc(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Mi)return Mi[t](i)},has(e,t){return t in e||t in Mi}})):i.proxy}const bu=/(?:^|[-_])(\w)/g,mu=i=>i.replace(bu,e=>e.toUpperCase()).replace(/[-_]/g,"");function bl(i,e=!0){return M(i)?i.displayName||i.name:i.name||e&&i.__name}function ml(i,e,t=!1){let s=bl(e);if(!s&&e.__file){const n=e.__file.match(/([^/\\]+)\.\w+$/);n&&(s=n[1])}if(!s&&i&&i.parent){const n=o=>{for(const r in o)if(o[r]===e)return r};s=n(i.components||i.parent.type.components)||n(i.appContext.components)}return s?mu(s):t?"App":"Anonymous"}function vu(i){return M(i)&&"__vccOpts"in i}const eo=(i,e)=>Kc(i,e,qi);function to(i,e,t){const s=arguments.length;return s===2?ie(e)&&!F(e)?Ms(e)?be(i,null,[e]):be(i,e):be(i,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&Ms(t)&&(t=[t]),be(i,e,t))}const yu="3.5.12";let io;const vl=typeof window<"u"&&window.trustedTypes;if(vl)try{io=vl.createPolicy("vue",{createHTML:i=>i})}catch{}const yl=io?i=>io.createHTML(i):i=>i,xu="http://www.w3.org/2000/svg",wu="http://www.w3.org/1998/Math/MathML",vt=typeof document<"u"?document:null,xl=vt&&vt.createElement("template"),_u={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,s)=>{const n=e==="svg"?vt.createElementNS(xu,i):e==="mathml"?vt.createElementNS(wu,i):t?vt.createElement(i,{is:t}):vt.createElement(i);return i==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:i=>vt.createTextNode(i),createComment:i=>vt.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>vt.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,s,n,o){const r=t?t.previousSibling:e.lastChild;if(n&&(n===o||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),t),!(n===o||!(n=n.nextSibling)););else{xl.innerHTML=yl(s==="svg"?`<svg>${i}</svg>`:s==="mathml"?`<math>${i}</math>`:i);const l=xl.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,t)}return[r?r.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Cu=Symbol("_vtc");function Tu(i,e,t){const s=i[Cu];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const wl=Symbol("_vod"),$u=Symbol("_vsh"),Iu=Symbol(""),ku=/(^|;)\s*display\s*:/;function Eu(i,e,t){const s=i.style,n=ce(t);let o=!1;if(t&&!n){if(e)if(ce(e))for(const r of e.split(";")){const l=r.slice(0,r.indexOf(":")).trim();t[l]==null&&js(s,l,"")}else for(const r in e)t[r]==null&&js(s,r,"");for(const r in t)r==="display"&&(o=!0),js(s,r,t[r])}else if(n){if(e!==t){const r=s[Iu];r&&(t+=";"+r),s.cssText=t,o=ku.test(t)}}else e&&i.removeAttribute("style");wl in i&&(i[wl]=o?s.display:"",i[$u]&&(s.display="none"))}const _l=/\s*!important$/;function js(i,e,t){if(F(t))t.forEach(s=>js(i,e,s));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const s=Ou(i,e);_l.test(t)?i.setProperty(Ht(s),t.replace(_l,""),"important"):i[s]=t}}const Cl=["Webkit","Moz","ms"],so={};function Ou(i,e){const t=so[e];if(t)return t;let s=ze(e);if(s!=="filter"&&s in i)return so[e]=s;s=ys(s);for(let n=0;n<Cl.length;n++){const o=Cl[n]+s;if(o in i)return so[e]=o}return e}const Tl="http://www.w3.org/1999/xlink";function $l(i,e,t,s,n,o=xc(e)){s&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(Tl,e.slice(6,e.length)):i.setAttributeNS(Tl,e,t):t==null||o&&!Ko(t)?i.removeAttribute(e):i.setAttribute(e,o?"":Tt(t)?String(t):t)}function Il(i,e,t,s,n){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?yl(t):t);return}const o=i.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?i.getAttribute("value")||"":i.value,a=t==null?i.type==="checkbox"?"on":"":String(t);(l!==a||!("_value"in i))&&(i.value=a),t==null&&i.removeAttribute(e),i._value=t;return}let r=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Ko(t):t==null&&l==="string"?(t="",r=!0):l==="number"&&(t=0,r=!0)}try{i[e]=t}catch{}r&&i.removeAttribute(n||e)}function Su(i,e,t,s){i.addEventListener(e,t,s)}function Ru(i,e,t,s){i.removeEventListener(e,t,s)}const kl=Symbol("_vei");function Au(i,e,t,s,n=null){const o=i[kl]||(i[kl]={}),r=o[e];if(s&&r)r.value=s;else{const[l,a]=Du(e);if(s){const d=o[e]=Bu(s,n);Su(i,l,d,a)}else r&&(Ru(i,l,r,a),o[e]=void 0)}}const El=/(?:Once|Passive|Capture)$/;function Du(i){let e;if(El.test(i)){e={};let s;for(;s=i.match(El);)i=i.slice(0,i.length-s[0].length),e[s[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Ht(i.slice(2)),e]}let no=0;const Pu=Promise.resolve(),Nu=()=>no||(Pu.then(()=>no=0),no=Date.now());function Bu(i,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;rt(Hu(s,t.value),e,5,[s])};return t.value=i,t.attached=Nu(),t}function Hu(i,e){if(F(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(s=>n=>!n._stopped&&s&&s(n))}else return e}const Ol=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,Lu=(i,e,t,s,n,o)=>{const r=n==="svg";e==="class"?Tu(i,s,r):e==="style"?Eu(i,t,s):bs(e)?gn(e)||Au(i,e,t,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fu(i,e,s,r))?(Il(i,e,s),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$l(i,e,s,r,o,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!ce(s))?Il(i,ze(e),s,o,e):(e==="true-value"?i._trueValue=s:e==="false-value"&&(i._falseValue=s),$l(i,e,s,r))};function Fu(i,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in i&&Ol(e)&&M(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=i.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Ol(e)&&ce(t)?!1:e in i}const Mu=fe({patchProp:Lu},_u);let Sl;function Vu(){return Sl||(Sl=Gd(Mu))}const Uu=(...i)=>{const e=Vu().createApp(...i),{mount:t}=e;return e.mount=s=>{const n=Gu(s);if(!n)return;const o=e._component;!M(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const r=t(n,!1,ju(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},e};function ju(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function Gu(i){return ce(i)?document.querySelector(i):i}const St=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();St.trustedTypes===void 0&&(St.trustedTypes={createPolicy:(i,e)=>e});const Rl={configurable:!1,enumerable:!1,writable:!1};St.FAST===void 0&&Reflect.defineProperty(St,"FAST",Object.assign({value:Object.create(null)},Rl));const Xi=St.FAST;if(Xi.getById===void 0){const i=Object.create(null);Reflect.defineProperty(Xi,"getById",Object.assign({value(e,t){let s=i[e];return s===void 0&&(s=t?i[e]=t():null),s}},Rl))}const Gt=Object.freeze([]);function Al(){const i=new WeakMap;return function(e){let t=i.get(e);if(t===void 0){let s=Reflect.getPrototypeOf(e);for(;t===void 0&&s!==null;)t=i.get(s),s=Reflect.getPrototypeOf(s);t=t===void 0?[]:t.slice(0),i.set(e,t)}return t}}const oo=St.FAST.getById(1,()=>{const i=[],e=[];function t(){if(e.length)throw e.shift()}function s(r){try{r.call()}catch(l){e.push(l),setTimeout(t,0)}}function n(){let l=0;for(;l<i.length;)if(s(i[l]),l++,l>1024){for(let a=0,d=i.length-l;a<d;a++)i[a]=i[a+l];i.length-=l,l=0}i.length=0}function o(r){i.length<1&&St.requestAnimationFrame(n),i.push(r)}return Object.freeze({enqueue:o,process:n})}),Dl=St.trustedTypes.createPolicy("fast-html",{createHTML:i=>i});let ro=Dl;const Yi=`fast-${Math.random().toString(36).substring(2,8)}`,Pl=`${Yi}{`,lo=`}${Yi}`,j=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(i){if(ro!==Dl)throw new Error("The HTML policy can only be set once.");ro=i},createHTML(i){return ro.createHTML(i)},isMarker(i){return i&&i.nodeType===8&&i.data.startsWith(Yi)},extractDirectiveIndexFromMarker(i){return parseInt(i.data.replace(`${Yi}:`,""))},createInterpolationPlaceholder(i){return`${Pl}${i}${lo}`},createCustomAttributePlaceholder(i,e){return`${i}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(i){return`<!--${Yi}:${i}-->`},queueUpdate:oo.enqueue,processUpdates:oo.process,nextUpdate(){return new Promise(oo.enqueue)},setAttribute(i,e,t){t==null?i.removeAttribute(e):i.setAttribute(e,t)},setBooleanAttribute(i,e,t){t?i.setAttribute(e,""):i.removeAttribute(e)},removeChildNodes(i){for(let e=i.firstChild;e!==null;e=i.firstChild)i.removeChild(e)},createTemplateWalker(i){return document.createTreeWalker(i,133,null,!1)}});class Gs{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){const t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const s=t.indexOf(e);s!==-1&&t.splice(s,1)}}notify(e){const t=this.spillover,s=this.source;if(t===void 0){const n=this.sub1,o=this.sub2;n!==void 0&&n.handleChange(s,e),o!==void 0&&o.handleChange(s,e)}else for(let n=0,o=t.length;n<o;++n)t[n].handleChange(s,e)}}class Nl{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const s=this.subscribers[e];s!==void 0&&s.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var s;if(t){let n=this.subscribers[t];n===void 0&&(this.subscribers[t]=n=new Gs(this.source)),n.subscribe(e)}else this.sourceSubscribers=(s=this.sourceSubscribers)!==null&&s!==void 0?s:new Gs(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var s;if(t){const n=this.subscribers[t];n!==void 0&&n.unsubscribe(e)}else(s=this.sourceSubscribers)===null||s===void 0||s.unsubscribe(e)}}const G=Xi.getById(2,()=>{const i=/(:|&&|\|\||if)/,e=new WeakMap,t=j.queueUpdate;let s,n=d=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function o(d){let c=d.$fastController||e.get(d);return c===void 0&&(Array.isArray(d)?c=n(d):e.set(d,c=new Nl(d))),c}const r=Al();class l{constructor(c){this.name=c,this.field=`_${c}`,this.callback=`${c}Changed`}getValue(c){return s!==void 0&&s.watch(c,this.name),c[this.field]}setValue(c,u){const p=this.field,b=c[p];if(b!==u){c[p]=u;const T=c[this.callback];typeof T=="function"&&T.call(c,b,u),o(c).notify(this.name)}}}class a extends Gs{constructor(c,u,p=!1){super(c,u),this.binding=c,this.isVolatileBinding=p,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(c,u){this.needsRefresh&&this.last!==null&&this.disconnect();const p=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const b=this.binding(c,u);return s=p,b}disconnect(){if(this.last!==null){let c=this.first;for(;c!==void 0;)c.notifier.unsubscribe(this,c.propertyName),c=c.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(c,u){const p=this.last,b=o(c),T=p===null?this.first:{};if(T.propertySource=c,T.propertyName=u,T.notifier=b,b.subscribe(this,u),p!==null){if(!this.needsRefresh){let S;s=void 0,S=p.propertySource[p.propertyName],s=this,c===S&&(this.needsRefresh=!0)}p.next=T}this.last=T}handleChange(){this.needsQueue&&(this.needsQueue=!1,t(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let c=this.first;return{next:()=>{const u=c;return u===void 0?{value:void 0,done:!0}:(c=c.next,{value:u,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(d){n=d},getNotifier:o,track(d,c){s!==void 0&&s.watch(d,c)},trackVolatile(){s!==void 0&&(s.needsRefresh=!0)},notify(d,c){o(d).notify(c)},defineProperty(d,c){typeof c=="string"&&(c=new l(c)),r(d).push(c),Reflect.defineProperty(d,c.name,{enumerable:!0,get:function(){return c.getValue(this)},set:function(u){c.setValue(this,u)}})},getAccessors:r,binding(d,c,u=this.isVolatileBinding(d)){return new a(d,c,u)},isVolatileBinding(d){return i.test(d.toString())}})});function A(i,e){G.defineProperty(i,e)}function zu(i,e,t){return Object.assign({},t,{get:function(){return G.trackVolatile(),t.get.apply(this)}})}const Bl=Xi.getById(3,()=>{let i=null;return{get(){return i},set(e){i=e}}});class Ji{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Bl.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){Bl.set(e)}}G.defineProperty(Ji.prototype,"index"),G.defineProperty(Ji.prototype,"length");const Qi=Object.seal(new Ji);class zs{constructor(){this.targetIndex=0}}class Hl extends zs{constructor(){super(...arguments),this.createPlaceholder=j.createInterpolationPlaceholder}}class ao extends zs{constructor(e,t,s){super(),this.name=e,this.behavior=t,this.options=s}createPlaceholder(e){return j.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function Wu(i,e){this.source=i,this.context=e,this.bindingObserver===null&&(this.bindingObserver=G.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(i,e))}function qu(i,e){this.source=i,this.context=e,this.target.addEventListener(this.targetName,this)}function Xu(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Yu(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const i=this.target.$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}function Ju(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Qu(i){j.setAttribute(this.target,this.targetName,i)}function Zu(i){j.setBooleanAttribute(this.target,this.targetName,i)}function Ku(i){if(i==null&&(i=""),i.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=i.create():this.target.$fastTemplate!==i&&(e.isComposed&&(e.remove(),e.unbind()),e=i.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=i)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=i}}function eh(i){this.target[this.targetName]=i}function th(i){const e=this.classVersions||Object.create(null),t=this.target;let s=this.version||0;if(i!=null&&i.length){const n=i.split(/\s+/);for(let o=0,r=n.length;o<r;++o){const l=n[o];l!==""&&(e[l]=s,t.classList.add(l))}}if(this.classVersions=e,this.version=s+1,s!==0){s-=1;for(const n in e)e[n]===s&&t.classList.remove(n)}}class co extends Hl{constructor(e){super(),this.binding=e,this.bind=Wu,this.unbind=Xu,this.updateTarget=Qu,this.isBindingVolatile=G.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=eh,this.cleanedTargetName==="innerHTML"){const t=this.binding;this.binding=(s,n)=>j.createHTML(t(s,n))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Zu;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=qu,this.unbind=Ju;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=th);break}}targetAtContent(){this.updateTarget=Ku,this.unbind=Yu}createBehavior(e){return new ih(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class ih{constructor(e,t,s,n,o,r,l){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=s,this.bind=n,this.unbind=o,this.updateTarget=r,this.targetName=l}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Ji.setEvent(e);const t=this.binding(this.source,this.context);Ji.setEvent(null),t!==!0&&e.preventDefault()}}let uo=null;class ho{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){uo=this}static borrow(e){const t=uo||new ho;return t.directives=e,t.reset(),uo=null,t}}function sh(i){if(i.length===1)return i[0];let e;const t=i.length,s=i.map(r=>typeof r=="string"?()=>r:(e=r.targetName||e,r.binding)),n=(r,l)=>{let a="";for(let d=0;d<t;++d)a+=s[d](r,l);return a},o=new co(n);return o.targetName=e,o}const nh=lo.length;function Ll(i,e){const t=e.split(Pl);if(t.length===1)return null;const s=[];for(let n=0,o=t.length;n<o;++n){const r=t[n],l=r.indexOf(lo);let a;if(l===-1)a=r;else{const d=parseInt(r.substring(0,l));s.push(i.directives[d]),a=r.substring(l+nh)}a!==""&&s.push(a)}return s}function Fl(i,e,t=!1){const s=e.attributes;for(let n=0,o=s.length;n<o;++n){const r=s[n],l=r.value,a=Ll(i,l);let d=null;a===null?t&&(d=new co(()=>l),d.targetName=r.name):d=sh(a),d!==null&&(e.removeAttributeNode(r),n--,o--,i.addFactory(d))}}function oh(i,e,t){const s=Ll(i,e.textContent);if(s!==null){let n=e;for(let o=0,r=s.length;o<r;++o){const l=s[o],a=o===0?e:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);typeof l=="string"?a.textContent=l:(a.textContent=" ",i.captureContentBinding(l)),n=a,i.targetIndex++,a!==e&&t.nextNode()}i.targetIndex--}}function rh(i,e){const t=i.content;document.adoptNode(t);const s=ho.borrow(e);Fl(s,i,!0);const n=s.behaviorFactories;s.reset();const o=j.createTemplateWalker(t);let r;for(;r=o.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:Fl(s,r);break;case 3:oh(s,r,o);break;case 8:j.isMarker(r)&&s.addFactory(e[j.extractDirectiveIndexFromMarker(r)])}let l=0;(j.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),l=-1);const a=s.behaviorFactories;return s.release(),{fragment:t,viewBehaviorFactories:a,hostBehaviorFactories:n,targetOffset:l}}const fo=document.createRange();class Ml{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const s=e.parentNode;let n=this.firstChild,o;for(;n!==t;)o=n.nextSibling,s.insertBefore(n,e),n=o;s.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let s=this.firstChild,n;for(;s!==t;)n=s.nextSibling,e.appendChild(s),s=n;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let s=this.firstChild,n;for(;s!==t;)n=s.nextSibling,e.removeChild(s),s=n;e.removeChild(t);const o=this.behaviors,r=this.source;for(let l=0,a=o.length;l<a;++l)o[l].unbind(r)}bind(e,t){const s=this.behaviors;if(this.source!==e)if(this.source!==null){const n=this.source;this.source=e,this.context=t;for(let o=0,r=s.length;o<r;++o){const l=s[o];l.unbind(n),l.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,o=s.length;n<o;++n)s[n].bind(e,t)}}unbind(){if(this.source===null)return;const e=this.behaviors,t=this.source;for(let s=0,n=e.length;s<n;++s)e[s].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){fo.setStartBefore(e[0].firstChild),fo.setEndAfter(e[e.length-1].lastChild),fo.deleteContents();for(let t=0,s=e.length;t<s;++t){const n=e[t],o=n.behaviors,r=n.source;for(let l=0,a=o.length;l<a;++l)o[l].unbind(r)}}}}class Vl{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let d;const c=this.html;if(typeof c=="string"){d=document.createElement("template"),d.innerHTML=j.createHTML(c);const p=d.content.firstElementChild;p!==null&&p.tagName==="TEMPLATE"&&(d=p)}else d=c;const u=rh(d,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,n=new Array(this.behaviorCount),o=j.createTemplateWalker(t);let r=0,l=this.targetOffset,a=o.nextNode();for(let d=s.length;r<d;++r){const c=s[r],u=c.targetIndex;for(;a!==null;)if(l===u){n[r]=c.createBehavior(a);break}else a=o.nextNode(),l++}if(this.hasHostBehaviors){const d=this.hostBehaviorFactories;for(let c=0,u=d.length;c<u;++c,++r)n[r]=d[c].createBehavior(e)}return new Ml(t,n)}render(e,t,s){typeof t=="string"&&(t=document.getElementById(t)),s===void 0&&(s=t);const n=this.create(s);return n.bind(e,Qi),n.appendTo(t),n}}const lh=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function X(i,...e){const t=[];let s="";for(let n=0,o=i.length-1;n<o;++n){const r=i[n];let l=e[n];if(s+=r,l instanceof Vl){const a=l;l=()=>a}if(typeof l=="function"&&(l=new co(l)),l instanceof Hl){const a=lh.exec(r);a!==null&&(l.targetName=a[2])}l instanceof zs?(s+=l.createPlaceholder(t.length),t.push(l)):s+=l}return s+=i[i.length-1],new Vl(s,t)}class De{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}De.create=(()=>{if(j.supportsAdoptedStyleSheets){const i=new Map;return e=>new ah(e,i)}return i=>new uh(i)})();function po(i){return i.map(e=>e instanceof De?po(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function Ul(i){return i.map(e=>e instanceof De?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}const jl=Symbol("prependToAdoptedStyleSheets");function Gl(i){const e=[],t=[];return i.forEach(s=>(s[jl]?e:t).push(s)),{prepend:e,append:t}}let zl=(i,e)=>{const{prepend:t,append:s}=Gl(e);i.adoptedStyleSheets=[...t,...i.adoptedStyleSheets,...s]},Wl=(i,e)=>{i.adoptedStyleSheets=i.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(j.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),zl=(i,e)=>{const{prepend:t,append:s}=Gl(e);i.adoptedStyleSheets.splice(0,0,...t),i.adoptedStyleSheets.push(...s)},Wl=(i,e)=>{for(const t of e){const s=i.adoptedStyleSheets.indexOf(t);s!==-1&&i.adoptedStyleSheets.splice(s,1)}}}catch{}class ah extends De{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=Ul(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,t=this.styleSheetCache;this._styleSheets=po(e).map(s=>{if(s instanceof CSSStyleSheet)return s;let n=t.get(s);return n===void 0&&(n=new CSSStyleSheet,n.replaceSync(s),t.set(s,n)),n})}return this._styleSheets}addStylesTo(e){zl(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Wl(e,this.styleSheets),super.removeStylesFrom(e)}}let ch=0;function dh(){return`fast-style-class-${++ch}`}class uh extends De{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Ul(e),this.styleSheets=po(e),this.styleClass=dh()}addStylesTo(e){const t=this.styleSheets,s=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const o=document.createElement("style");o.innerHTML=t[n],o.className=s,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const t=e.querySelectorAll(`.${this.styleClass}`);for(let s=0,n=t.length;s<n;++s)e.removeChild(t[s]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const Ws=Object.freeze({locate:Al()}),ql={toView(i){return i?"true":"false"},fromView(i){return!(i==null||i==="false"||i===!1||i===0)}},tt={toView(i){if(i==null)return null;const e=i*1;return isNaN(e)?null:e.toString()},fromView(i){if(i==null)return null;const e=i*1;return isNaN(e)?null:e}};class qs{constructor(e,t,s=t.toLowerCase(),n="reflect",o){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=s,this.mode=n,this.converter=o,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,n==="boolean"&&o===void 0&&(this.converter=ql)}setValue(e,t){const s=e[this.fieldName],n=this.converter;n!==void 0&&(t=n.fromView(t)),s!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](s,t),e.$fastController.notify(this.name))}getValue(e){return G.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,s=this.guards;s.has(e)||t==="fromView"||j.queueUpdate(()=>{s.add(e);const n=e[this.fieldName];switch(t){case"reflect":const o=this.converter;j.setAttribute(e,this.attribute,o!==void 0?o.toView(n):n);break;case"boolean":j.setBooleanAttribute(e,this.attribute,n);break}s.delete(e)})}static collect(e,...t){const s=[];t.push(Ws.locate(e));for(let n=0,o=t.length;n<o;++n){const r=t[n];if(r!==void 0)for(let l=0,a=r.length;l<a;++l){const d=r[l];typeof d=="string"?s.push(new qs(e,d)):s.push(new qs(e,d.property,d.attribute,d.mode,d.converter))}}return s}}function v(i,e){let t;function s(n,o){arguments.length>1&&(t.property=o),Ws.locate(n.constructor).push(t)}if(arguments.length>1){t={},s(i,e);return}return t=i===void 0?{}:i,s}const Xl={mode:"open"},Yl={},go=Xi.getById(4,()=>{const i=new Map;return Object.freeze({register(e){return i.has(e.type)?!1:(i.set(e.type,e),!0)},getByType(e){return i.get(e)}})});class Xs{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const s=qs.collect(e,t.attributes),n=new Array(s.length),o={},r={};for(let l=0,a=s.length;l<a;++l){const d=s[l];n[l]=d.attribute,o[d.name]=d,r[d.attribute]=d}this.attributes=s,this.observedAttributes=n,this.propertyLookup=o,this.attributeLookup=r,this.shadowOptions=t.shadowOptions===void 0?Xl:t.shadowOptions===null?void 0:Object.assign(Object.assign({},Xl),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?Yl:Object.assign(Object.assign({},Yl),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?De.create(t.styles):t.styles instanceof De?t.styles:De.create([t.styles])}get isDefined(){return!!go.getByType(this.type)}define(e=customElements){const t=this.type;if(go.register(this)){const s=this.attributes,n=t.prototype;for(let o=0,r=s.length;o<r;++o)G.defineProperty(n,s[o]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}Xs.forType=go.getByType;const Jl=new WeakMap,hh={bubbles:!0,composed:!0,cancelable:!0};function bo(i){return i.shadowRoot||Jl.get(i)||null}class mo extends Nl{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const s=t.shadowOptions;if(s!==void 0){const o=e.attachShadow(s);s.mode==="closed"&&Jl.set(e,o)}const n=G.getAccessors(e);if(n.length>0){const o=this.boundObservables=Object.create(null);for(let r=0,l=n.length;r<l;++r){const a=n[r].name,d=e[a];d!==void 0&&(delete e[a],o[a]=d)}}}get isConnected(){return G.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,G.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const t=bo(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const s=e.behaviors;e.addStylesTo(t),s!==null&&this.addBehaviors(s)}}removeStyles(e){const t=bo(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const s=e.behaviors;e.removeStylesFrom(t),s!==null&&this.removeBehaviors(s)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),s=e.length,n=[];for(let o=0;o<s;++o){const r=e[o];t.has(r)?t.set(r,t.get(r)+1):(t.set(r,1),n.push(r))}if(this._isConnected){const o=this.element;for(let r=0;r<n.length;++r)n[r].bind(o,Qi)}}removeBehaviors(e,t=!1){const s=this.behaviors;if(s===null)return;const n=e.length,o=[];for(let r=0;r<n;++r){const l=e[r];if(s.has(l)){const a=s.get(l)-1;a===0||t?s.delete(l)&&o.push(l):s.set(l,a)}}if(this._isConnected){const r=this.element;for(let l=0;l<o.length;++l)o[l].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,Qi);const t=this.behaviors;if(t!==null)for(const[s]of t)s.bind(e,Qi);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const t=this.behaviors;if(t!==null){const s=this.element;for(const[n]of t)n.unbind(s)}}onAttributeChangedCallback(e,t,s){const n=this.definition.attributeLookup[e];n!==void 0&&n.onAttributeChangedCallback(this.element,s)}emit(e,t,s){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},hh),s))):!1}finishInitialization(){const e=this.element,t=this.boundObservables;if(t!==null){const n=Object.keys(t);for(let o=0,r=n.length;o<r;++o){const l=n[o];e[l]=t[l]}this.boundObservables=null}const s=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,s=bo(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||j.removeChildNodes(s),e&&(this.view=e.render(t,s,t))}static forCustomElement(e){const t=e.$fastController;if(t!==void 0)return t;const s=Xs.forType(e.constructor);if(s===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new mo(e,s)}}function Ql(i){return class extends i{constructor(){super(),mo.forCustomElement(this)}$emit(e,t,s){return this.$fastController.emit(e,t,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,s){this.$fastController.onAttributeChangedCallback(e,t,s)}}}const Ys=Object.assign(Ql(HTMLElement),{from(i){return Ql(i)},define(i,e){return new Xs(i,e).define().type}});class Zl{createCSS(){return""}createBehavior(){}}function fh(i,e){const t=[];let s="";const n=[];for(let o=0,r=i.length-1;o<r;++o){s+=i[o];let l=e[o];if(l instanceof Zl){const a=l.createBehavior();l=l.createCSS(),a&&n.push(a)}l instanceof De||l instanceof CSSStyleSheet?(s.trim()!==""&&(t.push(s),s=""),t.push(l)):s+=l}return s+=i[i.length-1],s.trim()!==""&&t.push(s),{styles:t,behaviors:n}}function oe(i,...e){const{styles:t,behaviors:s}=fh(i,e),n=De.create(t);return s.length&&n.withBehaviors(...s),n}function it(i,e,t){return{index:i,removed:e,addedCount:t}}const Kl=0,ea=1,vo=2,yo=3;function ph(i,e,t,s,n,o){const r=o-n+1,l=t-e+1,a=new Array(r);let d,c;for(let u=0;u<r;++u)a[u]=new Array(l),a[u][0]=u;for(let u=0;u<l;++u)a[0][u]=u;for(let u=1;u<r;++u)for(let p=1;p<l;++p)i[e+p-1]===s[n+u-1]?a[u][p]=a[u-1][p-1]:(d=a[u-1][p]+1,c=a[u][p-1]+1,a[u][p]=d<c?d:c);return a}function gh(i){let e=i.length-1,t=i[0].length-1,s=i[e][t];const n=[];for(;e>0||t>0;){if(e===0){n.push(vo),t--;continue}if(t===0){n.push(yo),e--;continue}const o=i[e-1][t-1],r=i[e-1][t],l=i[e][t-1];let a;r<l?a=r<o?r:o:a=l<o?l:o,a===o?(o===s?n.push(Kl):(n.push(ea),s=o),e--,t--):a===r?(n.push(yo),e--,s=r):(n.push(vo),t--,s=l)}return n.reverse(),n}function bh(i,e,t){for(let s=0;s<t;++s)if(i[s]!==e[s])return s;return t}function mh(i,e,t){let s=i.length,n=e.length,o=0;for(;o<t&&i[--s]===e[--n];)o++;return o}function vh(i,e,t,s){return e<t||s<i?-1:e===t||s===i?0:i<t?e<s?e-t:s-t:s<e?s-i:e-i}function ta(i,e,t,s,n,o){let r=0,l=0;const a=Math.min(t-e,o-n);if(e===0&&n===0&&(r=bh(i,s,a)),t===i.length&&o===s.length&&(l=mh(i,s,a-r)),e+=r,n+=r,t-=l,o-=l,t-e===0&&o-n===0)return Gt;if(e===t){const T=it(e,[],0);for(;n<o;)T.removed.push(s[n++]);return[T]}else if(n===o)return[it(e,[],t-e)];const d=gh(ph(i,e,t,s,n,o)),c=[];let u,p=e,b=n;for(let T=0;T<d.length;++T)switch(d[T]){case Kl:u!==void 0&&(c.push(u),u=void 0),p++,b++;break;case ea:u===void 0&&(u=it(p,[],0)),u.addedCount++,p++,u.removed.push(s[b]),b++;break;case vo:u===void 0&&(u=it(p,[],0)),u.addedCount++,p++;break;case yo:u===void 0&&(u=it(p,[],0)),u.removed.push(s[b]),b++;break}return u!==void 0&&c.push(u),c}const ia=Array.prototype.push;function yh(i,e,t,s){const n=it(e,t,s);let o=!1,r=0;for(let l=0;l<i.length;l++){const a=i[l];if(a.index+=r,o)continue;const d=vh(n.index,n.index+n.removed.length,a.index,a.index+a.addedCount);if(d>=0){i.splice(l,1),l--,r-=a.addedCount-a.removed.length,n.addedCount+=a.addedCount-d;const c=n.removed.length+a.removed.length-d;if(!n.addedCount&&!c)o=!0;else{let u=a.removed;if(n.index<a.index){const p=n.removed.slice(0,a.index-n.index);ia.apply(p,u),u=p}if(n.index+n.removed.length>a.index+a.addedCount){const p=n.removed.slice(a.index+a.addedCount-n.index);ia.apply(u,p)}n.removed=u,a.index<n.index&&(n.index=a.index)}}else if(n.index<a.index){o=!0,i.splice(l,0,n),l++;const c=n.addedCount-n.removed.length;a.index+=c,r+=c}}o||i.push(n)}function xh(i){const e=[];for(let t=0,s=i.length;t<s;t++){const n=i[t];yh(e,n.index,n.removed,n.addedCount)}return e}function wh(i,e){let t=[];const s=xh(e);for(let n=0,o=s.length;n<o;++n){const r=s[n];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==i[r.index]&&t.push(r);continue}t=t.concat(ta(i,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return t}let sa=!1;function xo(i,e){let t=i.index;const s=e.length;return t>s?t=s-i.addedCount:t<0&&(t=s+i.removed.length+t-i.addedCount),t<0&&(t=0),i.index=t,i}class _h extends Gs{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,j.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,j.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(e===void 0&&t===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=t===void 0?wh(this.source,e):ta(this.source,0,this.source.length,t,0,t.length);this.notify(s)}}function Ch(){if(sa)return;sa=!0,G.setArrayObserverFactory(a=>new _h(a));const i=Array.prototype;if(i.$fastPatch)return;Reflect.defineProperty(i,"$fastPatch",{value:1,enumerable:!1});const e=i.pop,t=i.push,s=i.reverse,n=i.shift,o=i.sort,r=i.splice,l=i.unshift;i.pop=function(){const a=this.length>0,d=e.apply(this,arguments),c=this.$fastController;return c!==void 0&&a&&c.addSplice(it(this.length,[d],0)),d},i.push=function(){const a=t.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(xo(it(this.length-arguments.length,[],arguments.length),this)),a},i.reverse=function(){let a;const d=this.$fastController;d!==void 0&&(d.flush(),a=this.slice());const c=s.apply(this,arguments);return d!==void 0&&d.reset(a),c},i.shift=function(){const a=this.length>0,d=n.apply(this,arguments),c=this.$fastController;return c!==void 0&&a&&c.addSplice(it(0,[d],0)),d},i.sort=function(){let a;const d=this.$fastController;d!==void 0&&(d.flush(),a=this.slice());const c=o.apply(this,arguments);return d!==void 0&&d.reset(a),c},i.splice=function(){const a=r.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(xo(it(+arguments[0],a,arguments.length>2?arguments.length-2:0),this)),a},i.unshift=function(){const a=l.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(xo(it(0,[],arguments.length),this)),a}}class Th{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function ke(i){return new ao("fast-ref",Th,i)}const na=i=>typeof i=="function",$h=()=>null;function oa(i){return i===void 0?$h:na(i)?i:()=>i}function wo(i,e,t){const s=na(i)?i:()=>i,n=oa(e),o=oa(t);return(r,l)=>s(r,l)?n(r,l):o(r,l)}function Ih(i,e,t,s){i.bind(e[t],s)}function kh(i,e,t,s){const n=Object.create(s);n.index=t,n.length=e.length,i.bind(e[t],n)}class Eh{constructor(e,t,s,n,o,r){this.location=e,this.itemsBinding=t,this.templateBinding=n,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Ih,this.itemsBindingObserver=G.binding(t,this,s),this.templateBindingObserver=G.binding(n,this,o),r.positioning&&(this.bindView=kh)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items){this.items=Gt;return}const t=this.itemsObserver,s=this.itemsObserver=G.getNotifier(this.items),n=t!==s;n&&t!==null&&t.unsubscribe(this),(n||e)&&s.subscribe(this)}updateViews(e){const t=this.childContext,s=this.views,n=this.bindView,o=this.items,r=this.template,l=this.options.recycle,a=[];let d=0,c=0;for(let u=0,p=e.length;u<p;++u){const b=e[u],T=b.removed;let S=0,N=b.index;const B=N+b.addedCount,V=s.splice(b.index,T.length),k=c=a.length+V.length;for(;N<B;++N){const C=s[N],U=C?C.firstChild:this.location;let J;l&&c>0?(S<=k&&V.length>0?(J=V[S],S++):(J=a[d],d++),c--):J=r.create(),s.splice(N,0,J),n(J,o,N,t),J.insertBefore(U)}V[S]&&a.push(...V.slice(S))}for(let u=d,p=a.length;u<p;++u)a[u].dispose();if(this.options.positioning)for(let u=0,p=s.length;u<p;++u){const b=s[u].context;b.length=p,b.index=u}}refreshAllViews(e=!1){const t=this.items,s=this.childContext,n=this.template,o=this.location,r=this.bindView;let l=t.length,a=this.views,d=a.length;if((l===0||e||!this.options.recycle)&&(Ml.disposeContiguousBatch(a),d=0),d===0){this.views=a=new Array(l);for(let c=0;c<l;++c){const u=n.create();r(u,t,c,s),a[c]=u,u.insertBefore(o)}}else{let c=0;for(;c<l;++c)if(c<d){const p=a[c];r(p,t,c,s)}else{const p=n.create();r(p,t,c,s),a.push(p),p.insertBefore(o)}const u=a.splice(c,d-c);for(c=0,l=u.length;c<l;++c)u[c].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,s=e.length;t<s;++t)e[t].unbind()}}class ra extends zs{constructor(e,t,s){super(),this.itemsBinding=e,this.templateBinding=t,this.options=s,this.createPlaceholder=j.createBlockPlaceholder,Ch(),this.isItemsBindingVolatile=G.isVolatileBinding(e),this.isTemplateBindingVolatile=G.isVolatileBinding(t)}createBehavior(e){return new Eh(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function _o(i){return i?function(e,t,s){return e.nodeType===1&&e.matches(i)}:function(e,t,s){return e.nodeType===1}}class la{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=G.getAccessors(e).some(s=>s.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Gt),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Oh extends la{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function qe(i){return typeof i=="string"&&(i={property:i}),new ao("fast-slotted",Oh,i)}class Sh extends la{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function aa(i){return typeof i=="string"&&(i={property:i}),new ao("fast-children",Sh,i)}class hi{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const fi=(i,e)=>X`
    <span
        part="end"
        ${ke("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${ke("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,pi=(i,e)=>X`
    <span
        part="start"
        ${ke("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${ke("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;X`
    <span part="end" ${ke("endContainer")}>
        <slot
            name="end"
            ${ke("end")}
            @slotchange="${i=>i.handleEndContentChange()}"
        ></slot>
    </span>
`,X`
    <span part="start" ${ke("startContainer")}>
        <slot
            name="start"
            ${ke("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        ></slot>
    </span>
`;/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */function g(i,e,t,s){var n=arguments.length,o=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,s);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(o=(n<3?r(o):n>3?r(e,t,o):r(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o}const Co=new Map;"metadata"in Reflect||(Reflect.metadata=function(i,e){return function(t){Reflect.defineMetadata(i,e,t)}},Reflect.defineMetadata=function(i,e,t){let s=Co.get(t);s===void 0&&Co.set(t,s=new Map),s.set(i,e)},Reflect.getOwnMetadata=function(i,e){const t=Co.get(e);if(t!==void 0)return t.get(i)});class Rh{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,ga(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:s,key:n}=this;return this.container=this.key=void 0,s.registerResolver(n,new Xe(n,e,t))}}function Zi(i){const e=i.slice(),t=Object.keys(i),s=t.length;let n;for(let o=0;o<s;++o)n=t[o],ya(n)||(e[n]=i[n]);return e}const Ah=Object.freeze({none(i){throw Error(`${i.toString()} not registered, did you forget to add @singleton()?`)},singleton(i){return new Xe(i,1,i)},transient(i){return new Xe(i,2,i)}}),To=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Ah.singleton})}),ca=new Map;function da(i){return e=>Reflect.getOwnMetadata(i,e)}let ua=null;const re=Object.freeze({createContainer(i){return new Ki(null,Object.assign({},To.default,i))},findResponsibleContainer(i){const e=i.$$container$$;return e&&e.responsibleForOwnerRequests?e:re.findParentContainer(i)},findParentContainer(i){const e=new CustomEvent(pa,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return i.dispatchEvent(e),e.detail.container||re.getOrCreateDOMContainer()},getOrCreateDOMContainer(i,e){return i?i.$$container$$||new Ki(i,Object.assign({},To.default,e,{parentLocator:re.findParentContainer})):ua||(ua=new Ki(null,Object.assign({},To.default,e,{parentLocator:()=>null})))},getDesignParamtypes:da("design:paramtypes"),getAnnotationParamtypes:da("di:paramtypes"),getOrCreateAnnotationParamTypes(i){let e=this.getAnnotationParamtypes(i);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],i),e},getDependencies(i){let e=ca.get(i);if(e===void 0){const t=i.inject;if(t===void 0){const s=re.getDesignParamtypes(i),n=re.getAnnotationParamtypes(i);if(s===void 0)if(n===void 0){const o=Object.getPrototypeOf(i);typeof o=="function"&&o!==Function.prototype?e=Zi(re.getDependencies(o)):e=[]}else e=Zi(n);else if(n===void 0)e=Zi(s);else{e=Zi(s);let o=n.length,r;for(let d=0;d<o;++d)r=n[d],r!==void 0&&(e[d]=r);const l=Object.keys(n);o=l.length;let a;for(let d=0;d<o;++d)a=l[d],ya(a)||(e[a]=n[a])}}else e=Zi(t);ca.set(i,e)}return e},defineProperty(i,e,t,s=!1){const n=`$di_${e}`;Reflect.defineProperty(i,e,{get:function(){let o=this[n];if(o===void 0&&(o=(this instanceof HTMLElement?re.findResponsibleContainer(this):re.getOrCreateDOMContainer()).get(t),this[n]=o,s&&this instanceof Ys)){const l=this.$fastController,a=()=>{const c=re.findResponsibleContainer(this).get(t),u=this[n];c!==u&&(this[n]=o,l.notify(e))};l.subscribe({handleChange:a},"isConnected")}return o}})},createInterface(i,e){const t=typeof i=="function"?i:e,s=typeof i=="string"?i:i&&"friendlyName"in i&&i.friendlyName||ma,n=typeof i=="string"?!1:i&&"respectConnection"in i&&i.respectConnection||!1,o=function(r,l,a){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(l)re.defineProperty(r,l,o,n);else{const d=re.getOrCreateAnnotationParamTypes(r);d[a]=o}};return o.$isInterface=!0,o.friendlyName=s??"(anonymous)",t!=null&&(o.register=function(r,l){return t(new Rh(r,l??o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject(...i){return function(e,t,s){if(typeof s=="number"){const n=re.getOrCreateAnnotationParamTypes(e),o=i[0];o!==void 0&&(n[s]=o)}else if(t)re.defineProperty(e,t,i[0]);else{const n=s?re.getOrCreateAnnotationParamTypes(s.value):re.getOrCreateAnnotationParamTypes(e);let o;for(let r=0;r<i.length;++r)o=i[r],o!==void 0&&(n[r]=o)}}},transient(i){return i.register=function(t){return es.transient(i,i).register(t)},i.registerInRequestor=!1,i},singleton(i,e=Ph){return i.register=function(s){return es.singleton(i,i).register(s)},i.registerInRequestor=e.scoped,i}}),Dh=re.createInterface("Container");re.inject;const Ph={scoped:!1};class Xe{constructor(e,t,s){this.key=e,this.strategy=t,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{const s=e.getFactory(this.state);if(s===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,s,n;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(n=(s=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||s===void 0?void 0:s.call(t,e))!==null&&n!==void 0?n:null;default:return null}}}function ha(i){return this.get(i)}function Nh(i,e){return e(i)}class Bh{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let s;return t===void 0?s=new this.Type(...this.dependencies.map(ha,e)):s=new this.Type(...this.dependencies.map(ha,e),...t),this.transformers==null?s:this.transformers.reduce(Nh,s)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const Hh={$isResolver:!0,resolve(i,e){return e}};function Js(i){return typeof i.register=="function"}function Lh(i){return Js(i)&&typeof i.registerInRequestor=="boolean"}function fa(i){return Lh(i)&&i.registerInRequestor}function Fh(i){return i.prototype!==void 0}const Mh=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),pa="__DI_LOCATE_PARENT__",$o=new Map;class Ki{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Dh,Hh),e instanceof Node&&e.addEventListener(pa,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,s,n,o,r;const l=this.context;for(let a=0,d=e.length;a<d;++a)if(t=e[a],!!va(t))if(Js(t))t.register(this,l);else if(Fh(t))es.singleton(t,t).register(this);else for(s=Object.keys(t),o=0,r=s.length;o<r;++o)n=t[s[o]],va(n)&&(Js(n)?n.register(this,l):this.register(n));return--this.registerDepth,this}registerResolver(e,t){Qs(e);const s=this.resolvers,n=s.get(e);return n==null?s.set(e,t):n instanceof Xe&&n.strategy===4?n.state.push(t):s.set(e,new Xe(e,4,[n,t])),t}registerTransformer(e,t){const s=this.getResolver(e);if(s==null)return!1;if(s.getFactory){const n=s.getFactory(this);return n==null?!1:(n.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Qs(e),e.resolve!==void 0)return e;let s=this,n;for(;s!=null;)if(n=s.resolvers.get(e),n==null){if(s.parent==null){const o=fa(e)?this:s;return t?this.jitRegister(e,o):null}s=s.parent}else return n;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(Qs(e),e.$isResolver)return e.resolve(this,this);let t=this,s;for(;t!=null;)if(s=t.resolvers.get(e),s==null){if(t.parent==null){const n=fa(e)?this:t;return s=this.jitRegister(e,n),s.resolve(t,this)}t=t.parent}else return s.resolve(t,this);throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){Qs(e);const s=this;let n=s,o;if(t){let r=Gt;for(;n!=null;)o=n.resolvers.get(e),o!=null&&(r=r.concat(ba(o,n,s))),n=n.parent;return r}else for(;n!=null;)if(o=n.resolvers.get(e),o==null){if(n=n.parent,n==null)return Gt}else return ba(o,n,s);return Gt}getFactory(e){let t=$o.get(e);if(t===void 0){if(Vh(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);$o.set(e,t=new Bh(e,re.getDependencies(e)))}return t}registerFactory(e,t){$o.set(e,t)}createChild(e){return new Ki(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Mh.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Js(e)){const s=e.register(t);if(!(s instanceof Object)||s.resolve==null){const n=t.resolvers.get(e);if(n!=null)return n;throw new Error("A valid resolver was not returned from the static register method")}return s}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const s=this.config.defaultResolver(e,t);return t.resolvers.set(e,s),s}}}}const Io=new WeakMap;function ga(i){return function(e,t,s){if(Io.has(s))return Io.get(s);const n=i(e,t,s);return Io.set(s,n),n}}const es=Object.freeze({instance(i,e){return new Xe(i,0,e)},singleton(i,e){return new Xe(i,1,e)},transient(i,e){return new Xe(i,2,e)},callback(i,e){return new Xe(i,3,e)},cachedCallback(i,e){return new Xe(i,3,ga(e))},aliasTo(i,e){return new Xe(e,5,i)}});function Qs(i){if(i==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function ba(i,e,t){if(i instanceof Xe&&i.strategy===4){const s=i.state;let n=s.length;const o=new Array(n);for(;n--;)o[n]=s[n].resolve(e,t);return o}return[i.resolve(e,t)]}const ma="(anonymous)";function va(i){return typeof i=="object"&&i!==null||typeof i=="function"}const Vh=function(){const i=new WeakMap;let e=!1,t="",s=0;return function(n){return e=i.get(n),e===void 0&&(t=n.toString(),s=t.length,e=s>=29&&s<=100&&t.charCodeAt(s-1)===125&&t.charCodeAt(s-2)<=32&&t.charCodeAt(s-3)===93&&t.charCodeAt(s-4)===101&&t.charCodeAt(s-5)===100&&t.charCodeAt(s-6)===111&&t.charCodeAt(s-7)===99&&t.charCodeAt(s-8)===32&&t.charCodeAt(s-9)===101&&t.charCodeAt(s-10)===118&&t.charCodeAt(s-11)===105&&t.charCodeAt(s-12)===116&&t.charCodeAt(s-13)===97&&t.charCodeAt(s-14)===110&&t.charCodeAt(s-15)===88,i.set(n,e)),e}}(),Zs={};function ya(i){switch(typeof i){case"number":return i>=0&&(i|0)===i;case"string":{const e=Zs[i];if(e!==void 0)return e;const t=i.length;if(t===0)return Zs[i]=!1;let s=0;for(let n=0;n<t;++n)if(s=i.charCodeAt(n),n===0&&s===48&&t>1||s<48||s>57)return Zs[i]=!1;return Zs[i]=!0}default:return!1}}function xa(i){return`${i.toLowerCase()}:presentation`}const Ks=new Map,wa=Object.freeze({define(i,e,t){const s=xa(i);Ks.get(s)===void 0?Ks.set(s,e):Ks.set(s,!1),t.register(es.instance(s,e))},forTag(i,e){const t=xa(i),s=Ks.get(t);return s===!1?re.findResponsibleContainer(e).get(t):s||null}});class Uh{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?De.create(t):t instanceof De?t:De.create([t])}applyTo(e){const t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}}class se extends Ys{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=wa.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new jh(this===se?class extends se{}:this,e,t)}}g([A],se.prototype,"template",void 0),g([A],se.prototype,"styles",void 0);function ts(i,e,t){return typeof i=="function"?i(e,t):i}class jh{constructor(e,t,s){this.type=e,this.elementDefinition=t,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const s=this.definition,n=this.overrideDefinition,r=`${s.prefix||t.elementPrefix}-${s.baseName}`;t.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:l=>{const a=new Uh(ts(s.template,l,s),ts(s.styles,l,s));l.definePresentation(a);let d=ts(s.shadowOptions,l,s);l.shadowRootMode&&(d?n.shadowOptions||(d.mode=l.shadowRootMode):d!==null&&(d={mode:l.shadowRootMode})),l.defineElement({elementOptions:ts(s.elementOptions,l,s),shadowOptions:d,attributes:ts(s.attributes,l,s)})}})}}function Pe(i,...e){const t=Ws.locate(i);e.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(i.prototype,o,Object.getOwnPropertyDescriptor(s.prototype,o))}),Ws.locate(s).forEach(o=>t.push(o))})}const ko={horizontal:"horizontal",vertical:"vertical"};function Gh(i,e){let t=i.length;for(;t--;)if(e(i[t],t,i))return t;return-1}function zh(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Wh(...i){return i.every(e=>e instanceof HTMLElement)}function qh(){const i=document.querySelector('meta[property="csp-nonce"]');return i?i.getAttribute("content"):null}let zt;function Xh(){if(typeof zt=="boolean")return zt;if(!zh())return zt=!1,zt;const i=document.createElement("style"),e=qh();e!==null&&i.setAttribute("nonce",e),document.head.appendChild(i);try{i.sheet.insertRule("foo:focus-visible {color:inherit}",0),zt=!0}catch{zt=!1}finally{document.head.removeChild(i)}return zt}const _a="focus",Ca="focusin",gi="focusout",bi="keydown";var Ta;(function(i){i[i.alt=18]="alt",i[i.arrowDown=40]="arrowDown",i[i.arrowLeft=37]="arrowLeft",i[i.arrowRight=39]="arrowRight",i[i.arrowUp=38]="arrowUp",i[i.back=8]="back",i[i.backSlash=220]="backSlash",i[i.break=19]="break",i[i.capsLock=20]="capsLock",i[i.closeBracket=221]="closeBracket",i[i.colon=186]="colon",i[i.colon2=59]="colon2",i[i.comma=188]="comma",i[i.ctrl=17]="ctrl",i[i.delete=46]="delete",i[i.end=35]="end",i[i.enter=13]="enter",i[i.equals=187]="equals",i[i.equals2=61]="equals2",i[i.equals3=107]="equals3",i[i.escape=27]="escape",i[i.forwardSlash=191]="forwardSlash",i[i.function1=112]="function1",i[i.function10=121]="function10",i[i.function11=122]="function11",i[i.function12=123]="function12",i[i.function2=113]="function2",i[i.function3=114]="function3",i[i.function4=115]="function4",i[i.function5=116]="function5",i[i.function6=117]="function6",i[i.function7=118]="function7",i[i.function8=119]="function8",i[i.function9=120]="function9",i[i.home=36]="home",i[i.insert=45]="insert",i[i.menu=93]="menu",i[i.minus=189]="minus",i[i.minus2=109]="minus2",i[i.numLock=144]="numLock",i[i.numPad0=96]="numPad0",i[i.numPad1=97]="numPad1",i[i.numPad2=98]="numPad2",i[i.numPad3=99]="numPad3",i[i.numPad4=100]="numPad4",i[i.numPad5=101]="numPad5",i[i.numPad6=102]="numPad6",i[i.numPad7=103]="numPad7",i[i.numPad8=104]="numPad8",i[i.numPad9=105]="numPad9",i[i.numPadDivide=111]="numPadDivide",i[i.numPadDot=110]="numPadDot",i[i.numPadMinus=109]="numPadMinus",i[i.numPadMultiply=106]="numPadMultiply",i[i.numPadPlus=107]="numPadPlus",i[i.openBracket=219]="openBracket",i[i.pageDown=34]="pageDown",i[i.pageUp=33]="pageUp",i[i.period=190]="period",i[i.print=44]="print",i[i.quote=222]="quote",i[i.scrollLock=145]="scrollLock",i[i.shift=16]="shift",i[i.space=32]="space",i[i.tab=9]="tab",i[i.tilde=192]="tilde",i[i.windowsLeft=91]="windowsLeft",i[i.windowsOpera=219]="windowsOpera",i[i.windowsRight=92]="windowsRight"})(Ta||(Ta={}));const Wt="ArrowDown",is="ArrowLeft",ss="ArrowRight",qt="ArrowUp",ns="Enter",en="Escape",mi="Home",vi="End",Yh="F2",Jh="PageDown",Qh="PageUp",os=" ",Eo="Tab",Zh={ArrowDown:Wt,ArrowLeft:is,ArrowRight:ss,ArrowUp:qt};var yi;(function(i){i.ltr="ltr",i.rtl="rtl"})(yi||(yi={}));function Kh(i,e,t){return Math.min(Math.max(t,i),e)}function tn(i,e,t=0){return[e,t]=[e,t].sort((s,n)=>s-n),e<=i&&i<t}let ef=0;function sn(i=""){return`${i}${ef++}`}const tf=(i,e)=>X`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${ke("control")}
    >
        ${pi(i,e)}
        <span class="content" part="content">
            <slot ${qe("defaultSlottedContent")}></slot>
        </span>
        ${fi(i,e)}
    </a>
`;class ne{}g([v({attribute:"aria-atomic"})],ne.prototype,"ariaAtomic",void 0),g([v({attribute:"aria-busy"})],ne.prototype,"ariaBusy",void 0),g([v({attribute:"aria-controls"})],ne.prototype,"ariaControls",void 0),g([v({attribute:"aria-current"})],ne.prototype,"ariaCurrent",void 0),g([v({attribute:"aria-describedby"})],ne.prototype,"ariaDescribedby",void 0),g([v({attribute:"aria-details"})],ne.prototype,"ariaDetails",void 0),g([v({attribute:"aria-disabled"})],ne.prototype,"ariaDisabled",void 0),g([v({attribute:"aria-errormessage"})],ne.prototype,"ariaErrormessage",void 0),g([v({attribute:"aria-flowto"})],ne.prototype,"ariaFlowto",void 0),g([v({attribute:"aria-haspopup"})],ne.prototype,"ariaHaspopup",void 0),g([v({attribute:"aria-hidden"})],ne.prototype,"ariaHidden",void 0),g([v({attribute:"aria-invalid"})],ne.prototype,"ariaInvalid",void 0),g([v({attribute:"aria-keyshortcuts"})],ne.prototype,"ariaKeyshortcuts",void 0),g([v({attribute:"aria-label"})],ne.prototype,"ariaLabel",void 0),g([v({attribute:"aria-labelledby"})],ne.prototype,"ariaLabelledby",void 0),g([v({attribute:"aria-live"})],ne.prototype,"ariaLive",void 0),g([v({attribute:"aria-owns"})],ne.prototype,"ariaOwns",void 0),g([v({attribute:"aria-relevant"})],ne.prototype,"ariaRelevant",void 0),g([v({attribute:"aria-roledescription"})],ne.prototype,"ariaRoledescription",void 0);class st extends se{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{var t;(t=this.control)===null||t===void 0||t.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}g([v],st.prototype,"download",void 0),g([v],st.prototype,"href",void 0),g([v],st.prototype,"hreflang",void 0),g([v],st.prototype,"ping",void 0),g([v],st.prototype,"referrerpolicy",void 0),g([v],st.prototype,"rel",void 0),g([v],st.prototype,"target",void 0),g([v],st.prototype,"type",void 0),g([A],st.prototype,"defaultSlottedContent",void 0);class Oo{}g([v({attribute:"aria-expanded"})],Oo.prototype,"ariaExpanded",void 0),Pe(Oo,ne),Pe(st,hi,Oo);const sf=i=>{const e=i.closest("[dir]");return e!==null&&e.dir==="rtl"?yi.rtl:yi.ltr},$a=(i,e)=>X`
    <template class="${t=>t.circular?"circular":""}">
        <div class="control" part="control" style="${t=>t.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let rs=class extends se{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}};g([v({attribute:"fill"})],rs.prototype,"fill",void 0),g([v({attribute:"color"})],rs.prototype,"color",void 0),g([v({mode:"boolean"})],rs.prototype,"circular",void 0);const nf=(i,e)=>X`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${ke("control")}
    >
        ${pi(i,e)}
        <span class="content" part="content">
            <slot ${qe("defaultSlottedContent")}></slot>
        </span>
        ${fi(i,e)}
    </button>
`,Ia="form-associated-proxy",ka="ElementInternals",Ea=ka in window&&"setFormValue"in window[ka].prototype,Oa=new WeakMap;function ls(i){const e=class extends i{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Ea}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=t?s.concat(Array.from(t)):s;return Object.freeze(n)}else return Gt}valueChanged(t,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),j.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),j.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Ea)return null;let t=Oa.get(this);return t||(t=this.attachInternals(),Oa.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,s,n){this.elementInternals?this.elementInternals.setValidity(t,s,n):typeof s=="string"&&this.proxy.setCustomValidity(s)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Ia),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Ia)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,s){this.elementInternals&&this.elementInternals.setFormValue(t,s||t)}_keypressHandler(t){switch(t.key){case ns:if(this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s?.click()}break}}stopPropagation(t){t.stopPropagation()}};return v({mode:"boolean"})(e.prototype,"disabled"),v({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),v({attribute:"current-value"})(e.prototype,"currentValue"),v(e.prototype,"name"),v({mode:"boolean"})(e.prototype,"required"),A(e.prototype,"value"),e}function Sa(i){class e extends ls(i){}class t extends e{constructor(...n){super(n),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(n,o){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),n!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(n,o){this.checked=this.currentChecked}updateForm(){const n=this.checked?this.value:null;this.setFormValue(n,n)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return v({attribute:"checked",mode:"boolean"})(t.prototype,"checkedAttribute"),v({attribute:"current-checked",converter:ql})(t.prototype,"currentChecked"),A(t.prototype,"defaultChecked"),A(t.prototype,"checked"),t}class of extends se{}class rf extends ls(of){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let nt=class extends rf{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&((t=this.defaultSlottedContent)===null||t===void 0?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),t==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),t==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(s=>{s.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(s=>{s.removeEventListener("click",this.handleClick)})}};g([v({mode:"boolean"})],nt.prototype,"autofocus",void 0),g([v({attribute:"form"})],nt.prototype,"formId",void 0),g([v],nt.prototype,"formaction",void 0),g([v],nt.prototype,"formenctype",void 0),g([v],nt.prototype,"formmethod",void 0),g([v({mode:"boolean"})],nt.prototype,"formnovalidate",void 0),g([v],nt.prototype,"formtarget",void 0),g([v],nt.prototype,"type",void 0),g([A],nt.prototype,"defaultSlottedContent",void 0);class nn{}g([v({attribute:"aria-expanded"})],nn.prototype,"ariaExpanded",void 0),g([v({attribute:"aria-pressed"})],nn.prototype,"ariaPressed",void 0),Pe(nn,ne),Pe(nt,hi,nn);const on={none:"none",default:"default",sticky:"sticky"},Rt={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},as={default:"default",header:"header",stickyHeader:"sticky-header"};let ye=class extends se{constructor(){super(...arguments),this.rowType=as.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new ra(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(gi,this.handleFocusout),this.addEventListener(bi,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(gi,this.handleFocusout),this.removeEventListener(bi,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case is:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case ss:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case mi:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case vi:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===as.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===as.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}};g([v({attribute:"grid-template-columns"})],ye.prototype,"gridTemplateColumns",void 0),g([v({attribute:"row-type"})],ye.prototype,"rowType",void 0),g([A],ye.prototype,"rowData",void 0),g([A],ye.prototype,"columnDefinitions",void 0),g([A],ye.prototype,"cellItemTemplate",void 0),g([A],ye.prototype,"headerCellItemTemplate",void 0),g([A],ye.prototype,"rowIndex",void 0),g([A],ye.prototype,"isActiveRow",void 0),g([A],ye.prototype,"activeCellItemTemplate",void 0),g([A],ye.prototype,"defaultCellItemTemplate",void 0),g([A],ye.prototype,"defaultHeaderCellItemTemplate",void 0),g([A],ye.prototype,"cellElements",void 0);function lf(i){const e=i.tagFor(ye);return X`
    <${e}
        :rowData="${t=>t}"
        :cellItemTemplate="${(t,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(t,s)=>s.parent.headerCellItemTemplate}"
    ></${e}>
`}const af=(i,e)=>{const t=lf(i),s=i.tagFor(ye);return X`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${t}"
            ${aa({property:"rowElements",filter:_o("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};let xe=class Wo extends se{constructor(){super(),this.noTabbing=!1,this.generateHeader=on.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,s)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const n=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[n].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),l=Math.max(0,Math.min(r.length-1,t)),a=r[l];s&&this.scrollHeight!==this.clientHeight&&(n<this.focusRowIndex&&this.scrollTop>0||n>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&a.scrollIntoView({block:"center",inline:"center"}),a.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach(s=>{s.addedNodes.forEach(n=>{n.nodeType===1&&n.getAttribute("role")==="row"&&(n.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,j.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(e===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const t=this.rowElements[0];this.generatedGridTemplateColumns=new Array(t.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((t,s)=>{const n=t;n.rowIndex=s,n.gridTemplateColumns=e,this.columnDefinitionsStale&&(n.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach(s=>{t=`${t}${t===""?"":" "}1fr`}),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=Wo.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=Wo.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new ra(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(_a,this.handleFocus),this.addEventListener(bi,this.handleKeydown),this.addEventListener(gi,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),j.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(_a,this.handleFocus),this.removeEventListener(bi,this.handleKeydown),this.removeEventListener(gi,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const s=this.rowElements.length-1,n=this.offsetHeight+this.scrollTop,o=this.rowElements[s];switch(e.key){case qt:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Wt:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Qh:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex-1,t;t>=0;t--){const r=this.rowElements[t];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case Jh:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=s||o.offsetTop+o.offsetHeight<=n){this.focusOnCell(s,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex+1,t;t<=s;t++){const r=this.rowElements[t];if(r.offsetTop+r.offsetHeight>n){let l=0;this.generateHeader===on.sticky&&this.generatedHeader!==null&&(l=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-l;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case mi:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case vi:e.ctrlKey&&this.columnDefinitions!==null&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,j.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==on.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===on.sticky?as.stickyHeader:as.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(e,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}};xe.generateColumns=i=>Object.getOwnPropertyNames(i).map((e,t)=>({columnDataKey:e,gridColumn:`${t}`})),g([v({attribute:"no-tabbing",mode:"boolean"})],xe.prototype,"noTabbing",void 0),g([v({attribute:"generate-header"})],xe.prototype,"generateHeader",void 0),g([v({attribute:"grid-template-columns"})],xe.prototype,"gridTemplateColumns",void 0),g([A],xe.prototype,"rowsData",void 0),g([A],xe.prototype,"columnDefinitions",void 0),g([A],xe.prototype,"rowItemTemplate",void 0),g([A],xe.prototype,"cellItemTemplate",void 0),g([A],xe.prototype,"headerCellItemTemplate",void 0),g([A],xe.prototype,"focusRowIndex",void 0),g([A],xe.prototype,"focusColumnIndex",void 0),g([A],xe.prototype,"defaultRowItemTemplate",void 0),g([A],xe.prototype,"rowElementTag",void 0),g([A],xe.prototype,"rowElements",void 0);const cf=X`
    <template>
        ${i=>i.rowData===null||i.columnDefinition===null||i.columnDefinition.columnDataKey===null?null:i.rowData[i.columnDefinition.columnDataKey]}
    </template>
`,df=X`
    <template>
        ${i=>i.columnDefinition===null?null:i.columnDefinition.title===void 0?i.columnDefinition.columnDataKey:i.columnDefinition.title}
    </template>
`;let At=class extends se{constructor(){super(...arguments),this.cellType=Rt.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(Ca,this.handleFocusin),this.addEventListener(gi,this.handleFocusout),this.addEventListener(bi,this.handleKeydown),this.style.gridColumn=`${((e=this.columnDefinition)===null||e===void 0?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Ca,this.handleFocusin),this.removeEventListener(gi,this.handleFocusout),this.removeEventListener(bi,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case Rt.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(e){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||this.columnDefinition===null||this.cellType===Rt.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===Rt.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(e.key){case ns:case Yh:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case Rt.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break}break;case en:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case Rt.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=df.render(this,this);break;case void 0:case Rt.rowHeader:case Rt.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=cf.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}};g([v({attribute:"cell-type"})],At.prototype,"cellType",void 0),g([v({attribute:"grid-column"})],At.prototype,"gridColumn",void 0),g([A],At.prototype,"rowData",void 0),g([A],At.prototype,"columnDefinition",void 0);function uf(i){const e=i.tagFor(At);return X`
    <${e}
        cell-type="${t=>t.isRowHeader?"rowheader":void 0}"
        grid-column="${(t,s)=>s.index+1}"
        :rowData="${(t,s)=>s.parent.rowData}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}function hf(i){const e=i.tagFor(At);return X`
    <${e}
        cell-type="columnheader"
        grid-column="${(t,s)=>s.index+1}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}const ff=(i,e)=>{const t=uf(i),s=hf(i);return X`
        <template
            role="row"
            class="${n=>n.rowType!=="default"?n.rowType:""}"
            :defaultCellItemTemplate="${t}"
            :defaultHeaderCellItemTemplate="${s}"
            ${aa({property:"cellElements",filter:_o('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${qe("slottedCellElements")}></slot>
        </template>
    `},pf=(i,e)=>X`
        <template
            tabindex="-1"
            role="${t=>!t.cellType||t.cellType==="default"?"gridcell":t.cellType}"
            class="
            ${t=>t.cellType==="columnheader"?"column-header":t.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,gf=(i,e)=>X`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,s)=>t.keypressHandler(s.event)}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        class="${t=>t.readOnly?"readonly":""} ${t=>t.checked?"checked":""} ${t=>t.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${qe("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class bf extends se{}class mf extends Sa(bf){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let rn=class extends mf{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case os:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}};g([v({attribute:"readonly",mode:"boolean"})],rn.prototype,"readOnly",void 0),g([A],rn.prototype,"defaultSlottedNodes",void 0),g([A],rn.prototype,"indeterminate",void 0);function Ra(i){return Wh(i)&&(i.getAttribute("role")==="option"||i instanceof HTMLOptionElement)}class yt extends se{constructor(e,t,s,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),s&&(this.defaultSelected=s),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){const t=`${e??""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),G.notify(this,"value")}get value(){var e;return G.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}}g([A],yt.prototype,"checked",void 0),g([A],yt.prototype,"content",void 0),g([A],yt.prototype,"defaultSelected",void 0),g([v({mode:"boolean"})],yt.prototype,"disabled",void 0),g([v({attribute:"selected",mode:"boolean"})],yt.prototype,"selectedAttribute",void 0),g([A],yt.prototype,"selected",void 0),g([v({attribute:"value",mode:"fromView"})],yt.prototype,"initialValue",void 0);class xi{}g([A],xi.prototype,"ariaChecked",void 0),g([A],xi.prototype,"ariaPosInSet",void 0),g([A],xi.prototype,"ariaSelected",void 0),g([A],xi.prototype,"ariaSetSize",void 0),Pe(xi,ne),Pe(yt,hi,xi);class Ee extends se{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return G.track(this,"options"),this._options}set options(e){this._options=e,G.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(s=>s.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){const s=e>t?-1:e<t?1:0,n=e+s;let o=null;switch(s){case-1:{o=this.options.reduceRight((r,l,a)=>!r&&!l.disabled&&a<n?l:r,o);break}case 1:{o=this.options.reduce((r,l,a)=>!r&&!l.disabled&&a>n?l:r,o);break}}return this.options.indexOf(o)}handleChange(e,t){switch(t){case"selected":{Ee.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Ee.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case mi:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case Wt:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case qt:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case vi:{e.preventDefault(),this.selectLastOption();break}case Eo:return this.focusAndScrollOptionIntoView(),!0;case ns:case en:return!0;case os:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var s;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((s=this.options[this.selectedIndex])===null||s===void 0)&&s.disabled&&typeof e=="number"){const n=this.getSelectableIndex(e,t),o=n>-1?n:e;this.selectedIndex=o,t===o&&this.selectedIndexChanged(t,o);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var s;const n=t.filter(Ee.slottedOptionFilter);(s=this.options)===null||s===void 0||s.forEach(o=>{const r=G.getNotifier(o);r.unsubscribe(this,"selected"),o.selected=n.includes(o),r.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(s=>!s.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Gh(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(s=>s.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,s;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(s=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((n,o)=>(Ra(o)&&n.push(o),n),[]);const s=`${this.options.length}`;this.options.forEach((n,o)=>{n.id||(n.id=sn("option-")),n.ariaPosInSet=`${o+1}`,n.ariaSetSize=s}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const s=this.getTypeaheadMatches();if(s.length){const n=this.options.indexOf(s[0]);n>-1&&(this.selectedIndex=n)}this.typeaheadExpired=!1}}}Ee.slottedOptionFilter=i=>Ra(i)&&!i.hidden,Ee.TYPE_AHEAD_TIMEOUT_MS=1e3,g([v({mode:"boolean"})],Ee.prototype,"disabled",void 0),g([A],Ee.prototype,"selectedIndex",void 0),g([A],Ee.prototype,"selectedOptions",void 0),g([A],Ee.prototype,"slottedOptions",void 0),g([A],Ee.prototype,"typeaheadBuffer",void 0);class Xt{}g([A],Xt.prototype,"ariaActiveDescendant",void 0),g([A],Xt.prototype,"ariaDisabled",void 0),g([A],Xt.prototype,"ariaExpanded",void 0),g([A],Xt.prototype,"ariaMultiSelectable",void 0),Pe(Xt,ne),Pe(Ee,Xt);const So={above:"above",below:"below"};function Ro(i){const e=i.parentElement;if(e)return e;{const t=i.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}function vf(i,e){let t=e;for(;t!==null;){if(t===i)return!0;t=Ro(t)}return!1}const xt=document.createElement("div");function yf(i){return i instanceof Ys}class Ao{setProperty(e,t){j.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){j.queueUpdate(()=>this.target.removeProperty(e))}}class xf extends Ao{constructor(e){super();const t=new CSSStyleSheet;t[jl]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(De.create([t]))}}class wf extends Ao{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class _f extends Ao{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class Aa{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),G.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),j.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),j.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){const{sheet:s}=this.style;if(s){const n=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[n].style}else this.target=null}}g([A],Aa.prototype,"target",void 0);class Cf{constructor(e){this.target=e.style}setProperty(e,t){j.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){j.queueUpdate(()=>this.target.removeProperty(e))}}class ge{setProperty(e,t){ge.properties[e]=t;for(const s of ge.roots.values())wi.getOrCreate(ge.normalizeRoot(s)).setProperty(e,t)}removeProperty(e){delete ge.properties[e];for(const t of ge.roots.values())wi.getOrCreate(ge.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=ge;if(!t.has(e)){t.add(e);const s=wi.getOrCreate(this.normalizeRoot(e));for(const n in ge.properties)s.setProperty(n,ge.properties[n])}}static unregisterRoot(e){const{roots:t}=ge;if(t.has(e)){t.delete(e);const s=wi.getOrCreate(ge.normalizeRoot(e));for(const n in ge.properties)s.removeProperty(n)}}static normalizeRoot(e){return e===xt?document:e}}ge.roots=new Set,ge.properties={};const Do=new WeakMap,Tf=j.supportsAdoptedStyleSheets?xf:Aa,wi=Object.freeze({getOrCreate(i){if(Do.has(i))return Do.get(i);let e;return i===xt?e=new ge:i instanceof Document?e=j.supportsAdoptedStyleSheets?new wf:new _f:yf(i)?e=new Tf(i):e=new Cf(i),Do.set(i,e),e}});class Oe extends Zl{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Oe.uniqueId(),Oe.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new Oe({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return Oe.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=de.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof Oe&&(t=this.alias(t)),de.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),de.existsFor(e)&&de.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(xt,e),this}subscribe(e,t){const s=this.getOrCreateSubscriberSet(t);t&&!de.existsFor(t)&&de.getOrCreate(t),s.has(e)||s.add(e)}unsubscribe(e,t){const s=this.subscribers.get(t||this);s&&s.has(e)&&s.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(s=>s.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(s=>s.handleChange(t))}alias(e){return t=>e.getValueFor(t)}}Oe.uniqueId=(()=>{let i=0;return()=>(i++,i.toString(16))})(),Oe.tokensById=new Map;class $f{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:s}=e;this.add(t,s)}add(e,t){wi.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(de.getOrCreate(t).get(e)))}remove(e,t){wi.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class If{constructor(e,t,s){this.source=e,this.token=t,this.node=s,this.dependencies=new Set,this.observer=G.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){try{this.node.store.set(this.token,this.observer.observe(this.node.target,Qi))}catch(e){console.error(e)}}}class kf{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),G.getNotifier(this).notify(e.id))}get(e){return G.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e),G.getNotifier(this).notify(e.id)}all(){return this.values.entries()}}const cs=new WeakMap,ds=new WeakMap;class de{constructor(e){this.target=e,this.store=new kf,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,s)=>{const n=Oe.getTokenById(s);n&&(n.notify(this.target),this.updateCSSTokenReflection(t,n))}},cs.set(e,this),G.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Ys?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return cs.get(e)||new de(e)}static existsFor(e){return cs.has(e)}static findParent(e){if(xt!==e.target){let t=Ro(e.target);for(;t!==null;){if(cs.has(t))return cs.get(t);t=Ro(t)}return de.getOrCreate(xt)}return null}static findClosestAssignedNode(e,t){let s=t;do{if(s.has(e))return s;s=s.parent?s.parent:s.target!==xt?de.getOrCreate(xt):null}while(s!==null);return null}get parent(){return ds.get(this)||null}updateCSSTokenReflection(e,t){if(Oe.isCSSDesignToken(t)){const s=this.parent,n=this.isReflecting(t);if(s){const o=s.get(t),r=e.get(t);o!==r&&!n?this.reflectToCSS(t):o===r&&n&&this.stopReflectToCSS(t)}else n||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(t!==void 0)return t;const s=this.getRaw(e);if(s!==void 0)return this.hydrate(e,s),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=de.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){Oe.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),Oe.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=de.findParent(this);e&&e.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&ds.get(this).removeChild(this);for(const e of this.bindingObservers.keys())this.tearDownBindingObserver(e)}appendChild(e){e.parent&&ds.get(e).removeChild(e);const t=this.children.filter(s=>e.contains(s));ds.set(e,this),this.children.push(e),t.forEach(s=>e.appendChild(s)),G.getNotifier(this.store).subscribe(e);for(const[s,n]of this.store.all())e.hydrate(s,this.bindingObservers.has(s)?this.getRaw(s):n),e.updateCSSTokenReflection(e.store,s)}removeChild(e){const t=this.children.indexOf(e);if(t!==-1&&this.children.splice(t,1),G.getNotifier(this.store).unsubscribe(e),e.parent!==this)return!1;const s=ds.delete(e);for(const[n]of this.store.all())e.hydrate(n,e.getRaw(n)),e.updateCSSTokenReflection(e.store,n);return s}contains(e){return vf(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),de.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),de.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const s=Oe.getTokenById(t);s&&(this.hydrate(s,this.getRaw(s)),this.updateCSSTokenReflection(this.store,s))}hydrate(e,t){if(!this.has(e)){const s=this.bindingObservers.get(e);Oe.isDerivedDesignTokenValue(t)?s?s.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(s&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const s=new If(t,e,this);return this.bindingObservers.set(e,s),s}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}de.cssCustomPropertyReflector=new $f,g([A],de.prototype,"children",void 0);function Ef(i){return Oe.from(i)}const Da=Object.freeze({create:Ef,notifyConnection(i){return!i.isConnected||!de.existsFor(i)?!1:(de.getOrCreate(i).bind(),!0)},notifyDisconnection(i){return i.isConnected||!de.existsFor(i)?!1:(de.getOrCreate(i).unbind(),!0)},registerRoot(i=xt){ge.registerRoot(i)},unregisterRoot(i=xt){ge.unregisterRoot(i)}}),Po=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),No=new Map,ln=new Map;let _i=null;const us=re.createInterface(i=>i.cachedCallback(e=>(_i===null&&(_i=new Na(null,e)),_i))),Pa=Object.freeze({tagFor(i){return ln.get(i)},responsibleFor(i){const e=i.$$designSystem$$;return e||re.findResponsibleContainer(i).get(us)},getOrCreate(i){if(!i)return _i===null&&(_i=re.getOrCreateDOMContainer().get(us)),_i;const e=i.$$designSystem$$;if(e)return e;const t=re.getOrCreateDOMContainer(i);if(t.has(us,!1))return t.get(us);{const s=new Na(i,t);return t.register(es.instance(us,s)),s}}});function Of(i,e,t){return typeof i=="string"?{name:i,type:e,callback:t}:i}class Na{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Po.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,s=[],n=this.disambiguate,o=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(l,a,d){const c=Of(l,a,d),{name:u,callback:p,baseClass:b}=c;let{type:T}=c,S=u,N=No.get(S),B=!0;for(;N;){const V=n(S,T,N);switch(V){case Po.ignoreDuplicate:return;case Po.definitionCallbackOnly:B=!1,N=void 0;break;default:S=V,N=No.get(S);break}}B&&((ln.has(T)||T===se)&&(T=class extends T{}),No.set(S,T),ln.set(T,S),b&&ln.set(b,S)),s.push(new Sf(t,S,T,o,p,B))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Da.registerRoot(this.designTokenRoot)),t.registerWithContext(r,...e);for(const l of s)l.callback(l),l.willDefine&&l.definition!==null&&l.definition.define();return this}}class Sf{constructor(e,t,s,n,o,r){this.container=e,this.name=t,this.type=s,this.shadowRootMode=n,this.callback=o,this.willDefine=r,this.definition=null}definePresentation(e){wa.define(this.name,e,this.container)}defineElement(e){this.definition=new Xs(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Pa.tagFor(e)}}const Rf=(i,e)=>X`
    <template role="${t=>t.role}" aria-orientation="${t=>t.orientation}"></template>
`,Af={separator:"separator",presentation:"presentation"};let Bo=class extends se{constructor(){super(...arguments),this.role=Af.separator,this.orientation=ko.horizontal}};g([v],Bo.prototype,"role",void 0),g([v],Bo.prototype,"orientation",void 0);const Df=(i,e)=>X`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${pi(i,e)}
        <span class="content" part="content">
            <slot ${qe("content")}></slot>
        </span>
        ${fi(i,e)}
    </template>
`;class an extends Ee{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var s,n;this.ariaActiveDescendant=(n=(s=this.options[t])===null||s===void 0?void 0:s.id)!==null&&n!==void 0?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,s)=>{t.checked=tn(s,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,s)=>{t.checked=tn(s,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,s)=>{t.checked=tn(s,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,s)=>{t.checked=tn(s,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const s=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!s||s.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:s}=e;switch(this.shouldSkipFocus=!1,t){case mi:{this.checkFirstOption(s);return}case Wt:{this.checkNextOption(s);return}case qt:{this.checkPreviousOption(s);return}case vi:{this.checkLastOption(s);return}case Eo:return this.focusAndScrollOptionIntoView(),!0;case en:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case os:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var s;this.ariaMultiSelectable=t?"true":null,(s=this.options)===null||s===void 0||s.forEach(n=>{n.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var s;const n=Math.max(0,parseInt((s=t?.toFixed())!==null&&s!==void 0?s:"",10));n!==t&&j.queueUpdate(()=>{this.size=n})}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter(s=>!s.disabled),t=!e.every(s=>s.selected);e.forEach(s=>s.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){const s=this.getTypeaheadMatches(),n=this.options.indexOf(s[0]);n>-1&&(this.activeIndex=n,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}}g([A],an.prototype,"activeIndex",void 0),g([v({mode:"boolean"})],an.prototype,"multiple",void 0),g([v({converter:tt})],an.prototype,"size",void 0);class Pf extends se{}class Nf extends ls(Pf){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Bf={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let Ve=class extends Nf{constructor(){super(...arguments),this.type=Bf.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&j.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};g([v({attribute:"readonly",mode:"boolean"})],Ve.prototype,"readOnly",void 0),g([v({mode:"boolean"})],Ve.prototype,"autofocus",void 0),g([v],Ve.prototype,"placeholder",void 0),g([v],Ve.prototype,"type",void 0),g([v],Ve.prototype,"list",void 0),g([v({converter:tt})],Ve.prototype,"maxlength",void 0),g([v({converter:tt})],Ve.prototype,"minlength",void 0),g([v],Ve.prototype,"pattern",void 0),g([v({converter:tt})],Ve.prototype,"size",void 0),g([v({mode:"boolean"})],Ve.prototype,"spellcheck",void 0),g([A],Ve.prototype,"defaultSlottedNodes",void 0);class Ho{}Pe(Ho,ne),Pe(Ve,hi,Ho);const Ba=44,Hf=(i,e)=>X`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${wo(t=>typeof t.value=="number",X`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${t=>Ba*t.percentComplete/100}px ${Ba}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,X`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class Ci extends se{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e=typeof this.min=="number"?this.min:0,t=typeof this.max=="number"?this.max:100,s=typeof this.value=="number"?this.value:0,n=t-e;this.percentComplete=n===0?0:Math.fround((s-e)/n*100)}}g([v({converter:tt})],Ci.prototype,"value",void 0),g([v({converter:tt})],Ci.prototype,"min",void 0),g([v({converter:tt})],Ci.prototype,"max",void 0),g([v({mode:"boolean"})],Ci.prototype,"paused",void 0),g([A],Ci.prototype,"percentComplete",void 0);const Lf=(i,e)=>X`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        @keydown="${(t,s)=>t.keydownHandler(s.event)}"
        @focusout="${(t,s)=>t.focusOutHandler(s.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>t.orientation===ko.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${qe({property:"slottedRadioButtons",filter:_o("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;let Dt=class extends se{constructor(){super(...arguments),this.orientation=ko.horizontal,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach(s=>{s!==t&&(s.checked=!1,this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"))}),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const s=e[t];this.isInsideToolbar||(s.setAttribute("tabindex","0"),s.readOnly?this.slottedRadioButtons.forEach(n=>{n!==s&&n.setAttribute("tabindex","-1")}):(s.checked=!0,this.selectedRadio=s)),this.focusedRadio=s,s.focus()},this.moveRightOffGroup=()=>{var e;(e=this.nextElementSibling)===null||e===void 0||e.focus()},this.moveLeftOffGroup=()=>{var e;(e=this.previousElementSibling)===null||e===void 0||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,s=e.target,n=s!==null?t.indexOf(s):0,o=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(o===0&&n===o||o===t.length-1&&o===n)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{const t=e.target;if(t){const s=this.slottedRadioButtons;t.checked||s.indexOf(t)===0?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,s)=>e===t.length&&this.isInsideToolbar&&s===ss,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===is,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(s,t,e.key)){this.moveRightOffGroup();return}else s===t.length&&(s=0);for(;s<t.length&&t.length>1;)if(t[s].disabled){if(this.focusedRadio&&s===t.indexOf(this.focusedRadio))break;if(s+1>=t.length){if(this.isInsideToolbar)break;s=0}else s+=1}else{this.moveToRadioByIndex(t,s);break}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,s=s<0?t.length-1:s,this.shouldMoveOffGroupToTheLeft(t,e.key)){this.moveLeftOffGroup();return}for(;s>=0&&t.length>1;)if(t[s].disabled){if(this.focusedRadio&&s===t.indexOf(this.focusedRadio))break;s-1<0?s=t.length-1:s-=1}else{this.moveToRadioByIndex(t,s);break}},this.keydownHandler=e=>{const t=e.key;if(t in Zh&&this.isInsideFoundationToolbar)return!0;switch(t){case ns:{this.checkFocusedRadio();break}case ss:case Wt:{this.direction===yi.ltr?this.moveRight(e):this.moveLeft(e);break}case is:case qt:{this.direction===yi.ltr?this.moveLeft(e):this.moveRight(e);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return(e=this.parentToolbar)!==null&&e!==void 0?e:!1}get isInsideFoundationToolbar(){var e;return!!(!((e=this.parentToolbar)===null||e===void 0)&&e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=sf(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const e=this.slottedRadioButtons.filter(n=>n.hasAttribute("checked")),t=e?e.length:0;if(t>1){const n=e[t-1];n.checked=!0}let s=!1;if(this.slottedRadioButtons.forEach(n=>{this.name!==void 0&&n.setAttribute("name",this.name),this.disabled&&(n.disabled=!0),this.readOnly&&(n.readOnly=!0),this.value&&this.value===n.value?(this.selectedRadio=n,this.focusedRadio=n,n.checked=!0,n.setAttribute("tabindex","0"),s=!0):(this.isInsideFoundationToolbar||n.setAttribute("tabindex","-1"),n.checked=!1),n.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const n=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),o=n!==null?n.length:0;if(o>0&&!s){const r=n[o-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}};g([v({attribute:"readonly",mode:"boolean"})],Dt.prototype,"readOnly",void 0),g([v({attribute:"disabled",mode:"boolean"})],Dt.prototype,"disabled",void 0),g([v],Dt.prototype,"name",void 0),g([v],Dt.prototype,"value",void 0),g([v],Dt.prototype,"orientation",void 0),g([A],Dt.prototype,"childItems",void 0),g([A],Dt.prototype,"slottedRadioButtons",void 0);const Ff=(i,e)=>X`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,s)=>t.keypressHandler(s.event)}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${qe("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Mf extends se{}class Vf extends Sa(Mf){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let cn=class extends Vf{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case os:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),((e=this.parentElement)===null||e===void 0?void 0:e.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}};g([v({attribute:"readonly",mode:"boolean"})],cn.prototype,"readOnly",void 0),g([A],cn.prototype,"name",void 0),g([A],cn.prototype,"defaultSlottedNodes",void 0);function Uf(i,e,t){return i.nodeType!==Node.TEXT_NODE?!0:typeof i.nodeValue=="string"&&!!i.nodeValue.trim().length}class jf extends an{}class Gf extends ls(jf){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class Pt extends Gf{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=sn("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,j.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return G.track(this,"value"),this._value}set value(e){var t,s,n,o,r,l,a;const d=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){const c=this._options.findIndex(b=>b.value===e),u=(n=(s=this._options[this.selectedIndex])===null||s===void 0?void 0:s.value)!==null&&n!==void 0?n:null,p=(r=(o=this._options[c])===null||o===void 0?void 0:o.value)!==null&&r!==void 0?r:null;(c===-1||u!==p)&&(e="",this.selectedIndex=c),e=(a=(l=this.firstSelectedOption)===null||l===void 0?void 0:l.value)!==null&&a!==void 0?a:e}d!==e&&(this._value=e,super.valueChanged(d,e),G.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,s;this.$fastController.isConnected&&(this.value=(s=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&s!==void 0?s:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),s=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>s?So.above:So.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===So.above?~~e.top:~~s}get displayValue(){var e,t;return G.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const s=e.relatedTarget;if(this.isSameNode(s)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(s)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(s=>{G.getNotifier(s).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(s=>{G.getNotifier(s).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var s;super.selectedOptionsChanged(e,t),(s=this.options)===null||s===void 0||s.forEach((n,o)=>{var r;const l=(r=this.proxy)===null||r===void 0?void 0:r.options.item(o);l&&(l.selected=n.selected)})}setDefaultSelectedOption(){var e;const t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(Ee.slottedOptionFilter),s=t?.findIndex(n=>n.hasAttribute("selected")||n.selected||n.value===this.value);if(s!==-1){this.selectedIndex=s;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case os:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case mi:case vi:{e.preventDefault();break}case ns:{e.preventDefault(),this.open=!this.open;break}case en:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case Eo:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Wt||t===qt)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&G.notify(this,"displayValue")}}g([v({attribute:"open",mode:"boolean"})],Pt.prototype,"open",void 0),g([zu],Pt.prototype,"collapsible",null),g([A],Pt.prototype,"control",void 0),g([v({attribute:"position"})],Pt.prototype,"positionAttribute",void 0),g([A],Pt.prototype,"position",void 0),g([A],Pt.prototype,"maxHeight",void 0);class Lo{}g([A],Lo.prototype,"ariaControls",void 0),Pe(Lo,Xt),Pe(Pt,hi,Lo);const zf=(i,e)=>X`
    <template
        class="${t=>[t.collapsible&&"collapsible",t.collapsible&&t.open&&"open",t.disabled&&"disabled",t.collapsible&&t.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-controls="${t=>t.ariaControls}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-haspopup="${t=>t.collapsible?"listbox":null}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        ?open="${t=>t.open}"
        role="combobox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        @focusin="${(t,s)=>t.focusinHandler(s.event)}"
        @focusout="${(t,s)=>t.focusoutHandler(s.event)}"
        @keydown="${(t,s)=>t.keydownHandler(s.event)}"
        @mousedown="${(t,s)=>t.mousedownHandler(s.event)}"
    >
        ${wo(t=>t.collapsible,X`
                <div
                    class="control"
                    part="control"
                    ?disabled="${t=>t.disabled}"
                    ${ke("control")}
                >
                    ${pi(i,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${t=>t.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${fi(i,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>t.collapsible?!t.open:!1}"
            ${ke("listbox")}
        >
            <slot
                ${qe({filter:Ee.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,Wf=(i,e)=>X`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class qf extends se{}const Xf=(i,e)=>X`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`;class Ha extends se{}g([v({mode:"boolean"})],Ha.prototype,"disabled",void 0);const Yf=(i,e)=>X`
    <template class="${t=>t.orientation}">
        ${pi(i,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${qe("tabs")}></slot>

            ${wo(t=>t.showActiveIndicator,X`
                    <div
                        ${ke("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${fi(i,e)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${qe("tabpanels")}></slot>
        </div>
    </template>
`,Fo={vertical:"vertical",horizontal:"horizontal"};class wt extends se{constructor(){super(...arguments),this.orientation=Fo.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",s=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((n,o)=>{if(n.slot==="tab"){const r=this.activeTabIndex===o&&this.isFocusableElement(n);this.activeindicator&&this.isFocusableElement(n)&&(this.showActiveIndicator=!0);const l=this.tabIds[o],a=this.tabpanelIds[o];n.setAttribute("id",l),n.setAttribute("aria-selected",r?"true":"false"),n.setAttribute("aria-controls",a),n.addEventListener("click",this.handleTabClick),n.addEventListener("keydown",this.handleTabKeyDown),n.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=n,this.activeid=l)}n.style[e]="",n.style[t]="",n.style[s]=`${o+1}`,this.isHorizontal()?n.classList.remove("vertical"):n.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,t)=>{const s=this.tabIds[t],n=this.tabpanelIds[t];e.setAttribute("id",n),e.setAttribute("aria-labelledby",s),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{const t=e.currentTarget;t.nodeType===1&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case is:e.preventDefault(),this.adjustBackward(e);break;case ss:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case qt:e.preventDefault(),this.adjustBackward(e);break;case Wt:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case mi:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case vi:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{const t=this.tabs;let s=0;for(s=this.activetab?t.indexOf(this.activetab)+1:1,s===t.length&&(s=0);s<t.length&&t.length>1;)if(this.isFocusableElement(t[s])){this.moveToTabByIndex(t,s);break}else{if(this.activetab&&s===t.indexOf(this.activetab))break;s+1>=t.length?s=0:s+=1}},this.adjustBackward=e=>{const t=this.tabs;let s=0;for(s=this.activetab?t.indexOf(this.activetab)-1:0,s=s<0?t.length-1:s;s>=0&&t.length>1;)if(this.isFocusableElement(t[s])){this.moveToTabByIndex(t,s);break}else s-1<0?s=t.length-1:s-=1},this.moveToTabByIndex=(e,t)=>{const s=e[t];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,s.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(s=>s.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`tab-${sn()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`panel-${sn()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Fo.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const r=o-n;this.activeIndicatorRef.style.transform=`${t}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){const t=this.tabs.filter(r=>this.isFocusableElement(r)),s=t.indexOf(this.activetab),n=Kh(0,t.length-1,s+e),o=this.tabs.indexOf(t[n]);o>-1&&this.moveToTabByIndex(this.tabs,o)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}g([v],wt.prototype,"orientation",void 0),g([v],wt.prototype,"activeid",void 0),g([A],wt.prototype,"tabs",void 0),g([A],wt.prototype,"tabpanels",void 0),g([v({mode:"boolean"})],wt.prototype,"activeindicator",void 0),g([A],wt.prototype,"activeIndicatorRef",void 0),g([A],wt.prototype,"showActiveIndicator",void 0),Pe(wt,hi);class Jf extends se{}class Qf extends ls(Jf){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const La={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let Se=class extends Qf{constructor(){super(...arguments),this.resize=La.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};g([v({mode:"boolean"})],Se.prototype,"readOnly",void 0),g([v],Se.prototype,"resize",void 0),g([v({mode:"boolean"})],Se.prototype,"autofocus",void 0),g([v({attribute:"form"})],Se.prototype,"formId",void 0),g([v],Se.prototype,"list",void 0),g([v({converter:tt})],Se.prototype,"maxlength",void 0),g([v({converter:tt})],Se.prototype,"minlength",void 0),g([v],Se.prototype,"name",void 0),g([v],Se.prototype,"placeholder",void 0),g([v({converter:tt,mode:"fromView"})],Se.prototype,"cols",void 0),g([v({converter:tt,mode:"fromView"})],Se.prototype,"rows",void 0),g([v({mode:"boolean"})],Se.prototype,"spellcheck",void 0),g([A],Se.prototype,"defaultSlottedNodes",void 0),Pe(Se,Ho);const Zf=(i,e)=>X`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
            ${t=>t.resize!==La.none?`resize-${t.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${qe("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${t=>t.autofocus}"
            cols="${t=>t.cols}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.form}"
            list="${t=>t.list}"
            maxlength="${t=>t.maxlength}"
            minlength="${t=>t.minlength}"
            name="${t=>t.name}"
            placeholder="${t=>t.placeholder}"
            ?readonly="${t=>t.readOnly}"
            ?required="${t=>t.required}"
            rows="${t=>t.rows}"
            ?spellcheck="${t=>t.spellcheck}"
            :value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            @input="${(t,s)=>t.handleTextInput()}"
            @change="${t=>t.handleChange()}"
            ${ke("control")}
        ></textarea>
    </template>
`,Kf=(i,e)=>X`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${qe({property:"defaultSlottedNodes",filter:Uf})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${pi(i,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${ke("control")}
            />
            ${fi(i,e)}
        </div>
    </template>
`,Nt="not-allowed",ep=":host([hidden]){display:none}";function we(i){return`${ep}:host{display:${i}}`}const _e=Xh()?"focus-visible":"focus";function tp(i){return Pa.getOrCreate(i).withPrefix("vscode")}function ip(i){window.addEventListener("load",()=>{new MutationObserver(()=>{Fa(i)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),Fa(i)})}function Fa(i){const e=getComputedStyle(document.body),t=document.querySelector("body");if(t){const s=t.getAttribute("data-vscode-theme-kind");for(const[n,o]of i){let r=e.getPropertyValue(n).toString();if(s==="vscode-high-contrast")r.length===0&&o.name.includes("background")&&(r="transparent"),o.name==="button-icon-hover-background"&&(r="transparent");else if(s==="vscode-high-contrast-light"){if(r.length===0&&o.name.includes("background"))switch(o.name){case"button-primary-hover-background":r="#0F4A85";break;case"button-secondary-hover-background":r="transparent";break;case"button-icon-hover-background":r="transparent";break}}else o.name==="contrast-active-border"&&(r="transparent");o.setValueFor(t,r)}}}const Ma=new Map;let Va=!1;function R(i,e){const t=Da.create(i);if(e){if(e.includes("--fake-vscode-token")){const s="id"+Math.random().toString(16).slice(2);e=`${e}-${s}`}Ma.set(e,t)}return Va||(ip(Ma),Va=!0),t}const sp=R("background","--vscode-editor-background").withDefault("#1e1e1e"),z=R("border-width").withDefault(1),Ua=R("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518");R("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df");const hs=R("corner-radius").withDefault(0),Ti=R("corner-radius-round").withDefault(2),H=R("design-unit").withDefault(4),Yt=R("disabled-opacity").withDefault(.4),ue=R("focus-border","--vscode-focusBorder").withDefault("#007fd4"),Ye=R("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol");R("font-weight","--vscode-font-weight").withDefault("400");const Ce=R("foreground","--vscode-foreground").withDefault("#cccccc"),dn=R("input-height").withDefault("26"),Mo=R("input-min-width").withDefault("100px"),Re=R("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),Ne=R("type-ramp-base-line-height").withDefault("normal"),ja=R("type-ramp-minus1-font-size").withDefault("11px"),Ga=R("type-ramp-minus1-line-height").withDefault("16px");R("type-ramp-minus2-font-size").withDefault("9px"),R("type-ramp-minus2-line-height").withDefault("16px"),R("type-ramp-plus1-font-size").withDefault("16px"),R("type-ramp-plus1-line-height").withDefault("24px");const np=R("scrollbarWidth").withDefault("10px"),op=R("scrollbarHeight").withDefault("10px"),rp=R("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),lp=R("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),ap=R("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),za=R("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Wa=R("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Vo=R("button-border","--vscode-button-border").withDefault("transparent"),qa=R("button-icon-background").withDefault("transparent"),cp=R("button-icon-corner-radius").withDefault("5px"),dp=R("button-icon-outline-offset").withDefault(0),Xa=R("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),up=R("button-icon-padding").withDefault("3px"),$i=R("button-primary-background","--vscode-button-background").withDefault("#0e639c"),Ya=R("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),Ja=R("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),Uo=R("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),hp=R("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),fp=R("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),pp=R("button-padding-horizontal").withDefault("11px"),gp=R("button-padding-vertical").withDefault("4px"),_t=R("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Ii=R("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),bp=R("checkbox-corner-radius").withDefault(3);R("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0");const Jt=R("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),ki=R("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),mp=R("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),vp=R("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),un=R("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),Bt=R("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c");R("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0");const yp=R("dropdown-list-max-height").withDefault("200px"),Qt=R("input-background","--vscode-input-background").withDefault("#3c3c3c"),Qa=R("input-foreground","--vscode-input-foreground").withDefault("#cccccc");R("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc");const Za=R("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),xp=R("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),wp=R("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),_p=R("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Ei=R("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Cp=R("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799");R("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),R("panel-view-border","--vscode-panel-border").withDefault("#80808059");const Tp=R("tag-corner-radius").withDefault("2px"),$p=(i,e)=>oe`
	${we("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Ye};
		font-size: ${ja};
		line-height: ${Ga};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${za};
		border: calc(${z} * 1px) solid ${Vo};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${Wa};
		display: flex;
		height: calc(${H} * 4px);
		justify-content: center;
		min-width: calc(${H} * 4px + 2px);
		min-height: calc(${H} * 4px + 2px);
		padding: 3px 6px;
	}
`;class Ip extends rs{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}Ip.compose({baseName:"badge",template:$a,styles:$p});function kp(i,e,t,s){var n=arguments.length,o=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,s);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(o=(n<3?r(o):n>3?r(e,t,o):r(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o}typeof SuppressedError=="function"&&SuppressedError;const Ep=oe`
	${we("inline-flex")} :host {
		outline: none;
		font-family: ${Ye};
		font-size: ${Re};
		line-height: ${Ne};
		color: ${Ya};
		background: ${$i};
		border-radius: calc(${Ti} * 1px);
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${gp} ${pp};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${z} * 1px) solid ${Vo};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${Ja};
	}
	:host(:active) {
		background: ${$i};
	}
	.control:${_e} {
		outline: calc(${z} * 1px) solid ${ue};
		outline-offset: calc(${z} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${Yt};
		background: ${$i};
		cursor: ${Nt};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${H} * 4px);
		height: calc(${H} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Op=oe`
	:host([appearance='primary']) {
		background: ${$i};
		color: ${Ya};
	}
	:host([appearance='primary']:hover) {
		background: ${Ja};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${$i};
	}
	:host([appearance='primary']) .control:${_e} {
		outline: calc(${z} * 1px) solid ${ue};
		outline-offset: calc(${z} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${$i};
	}
`,Sp=oe`
	:host([appearance='secondary']) {
		background: ${Uo};
		color: ${hp};
	}
	:host([appearance='secondary']:hover) {
		background: ${fp};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${Uo};
	}
	:host([appearance='secondary']) .control:${_e} {
		outline: calc(${z} * 1px) solid ${ue};
		outline-offset: calc(${z} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${Uo};
	}
`,Rp=oe`
	:host([appearance='icon']) {
		background: ${qa};
		border-radius: ${cp};
		color: ${Ce};
	}
	:host([appearance='icon']:hover) {
		background: ${Xa};
		outline: 1px dotted ${Ua};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${up};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${Xa};
	}
	:host([appearance='icon']) .control:${_e} {
		outline: calc(${z} * 1px) solid ${ue};
		outline-offset: ${dp};
	}
	:host([appearance='icon'][disabled]) {
		background: ${qa};
	}
`,Ap=(i,e)=>oe`
	${Ep}
	${Op}
	${Sp}
	${Rp}
`;class Ka extends nt{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,s){e==="appearance"&&s==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),e==="aria-label"&&(this.ariaLabel=s),e==="disabled"&&(this.disabled=s!==null)}}kp([v],Ka.prototype,"appearance",void 0);const Dp=Ka.compose({baseName:"button",template:nf,styles:Ap,shadowOptions:{delegatesFocus:!0}}),Pp=(i,e)=>oe`
	${we("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${H} * 1px) 0;
		user-select: none;
		font-size: ${Re};
		line-height: ${Ne};
	}
	.control {
		position: relative;
		width: calc(${H} * 4px + 2px);
		height: calc(${H} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${bp} * 1px);
		border: calc(${z} * 1px) solid ${Ii};
		background: ${_t};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${Ye};
		color: ${Ce};
		padding-inline-start: calc(${H} * 2px + 2px);
		margin-inline-end: calc(${H} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${Ce};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${Ce};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${_t};
		border-color: ${Ii};
	}
	:host(:enabled) .control:active {
		background: ${_t};
		border-color: ${ue};
	}
	:host(:${_e}) .control {
		border: calc(${z} * 1px) solid ${ue};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${Nt};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${Yt};
	}
`;class Np extends rn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}Np.compose({baseName:"checkbox",template:gf,styles:Pp,checkedIndicator:`
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,indeterminateIndicator:`
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`});const Bp=(i,e)=>oe`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`,Hp=(i,e)=>oe`
	:host {
		display: grid;
		padding: calc((${H} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${sp};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${mp};
		outline: 1px dotted ${Ua};
		outline-offset: -1px;
	}
`,Lp=(i,e)=>oe`
	:host {
		padding: calc(${H} * 1px) calc(${H} * 3px);
		color: ${Ce};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${Ye};
		font-size: ${Re};
		line-height: ${Ne};
		font-weight: 400;
		border: solid calc(${z} * 1px) transparent;
		border-radius: calc(${hs} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${_e}),
	:host(:focus),
	:host(:active) {
		background: ${Jt};
		border: solid calc(${z} * 1px) ${ue};
		color: ${ki};
		outline: none;
	}
	:host(:${_e}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${ki} !important;
	}
`;class Fp extends xe{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}Fp.compose({baseName:"data-grid",baseClass:xe,template:af,styles:Bp});class Mp extends ye{}Mp.compose({baseName:"data-grid-row",baseClass:ye,template:ff,styles:Hp});class Vp extends At{}Vp.compose({baseName:"data-grid-cell",baseClass:At,template:pf,styles:Lp});const Up=(i,e)=>oe`
	${we("block")} :host {
		border: none;
		border-top: calc(${z} * 1px) solid ${vp};
		box-sizing: content-box;
		height: 0;
		margin: calc(${H} * 1px) 0;
		width: 100%;
	}
`;class jp extends Bo{}jp.compose({baseName:"divider",template:Rf,styles:Up});const Gp=(i,e)=>oe`
	${we("inline-flex")} :host {
		background: ${un};
		border-radius: calc(${Ti} * 1px);
		box-sizing: border-box;
		color: ${Ce};
		contain: contents;
		font-family: ${Ye};
		height: calc(${dn} * 1px);
		position: relative;
		user-select: none;
		min-width: ${Mo};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${z} * 1px) solid ${Bt};
		border-radius: calc(${Ti} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${Re};
		line-height: ${Ne};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${un};
		border: calc(${z} * 1px) solid ${ue};
		border-radius: calc(${Ti} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${yp};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${_e}) .control {
		border-color: ${ue};
	}
	:host(:not([disabled]):hover) {
		background: ${un};
		border-color: ${Bt};
	}
	:host(:${_e}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${Jt};
		border: calc(${z} * 1px) solid transparent;
		color: ${ki};
	}
	:host([disabled]) {
		cursor: ${Nt};
		opacity: ${Yt};
	}
	:host([disabled]) .control {
		cursor: ${Nt};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${un};
		color: ${Ce};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${ue};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${ue};
	}
	:host([open][position='above']) .listbox {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${dn} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${dn} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${H} * 4px);
		min-width: calc(${H} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;class zp extends Pt{}zp.compose({baseName:"dropdown",template:zf,styles:Gp,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`});const Wp=(i,e)=>oe`
	${we("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${xp};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${Ye};
		font-size: ${Re};
		line-height: ${Ne};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${z} * 1px) solid transparent;
		border-radius: calc(${hs} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${Za};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${Za};
	}
	:host(:${_e}) .control,
	:host(:focus) .control {
		border: calc(${z} * 1px) solid ${ue};
	}
`;class qp extends st{}qp.compose({baseName:"link",template:tf,styles:Wp,shadowOptions:{delegatesFocus:!0}});const Xp=(i,e)=>oe`
	${we("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${hs};
		border: calc(${z} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${Ce};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${Re};
		line-height: ${Ne};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${H} / 2) * 1px)
			calc((${H} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${_e}) {
		border-color: ${ue};
		background: ${Jt};
		color: ${Ce};
	}
	:host([aria-selected='true']) {
		background: ${Jt};
		border: calc(${z} * 1px) solid transparent;
		color: ${ki};
	}
	:host(:active) {
		background: ${Jt};
		color: ${ki};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${Jt};
		border: calc(${z} * 1px) solid transparent;
		color: ${ki};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${Jt};
		color: ${Ce};
	}
	:host([disabled]) {
		cursor: ${Nt};
		opacity: ${Yt};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;(class extends yt{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}).compose({baseName:"option",template:Df,styles:Xp});const Yp=(i,e)=>oe`
	${we("grid")} :host {
		box-sizing: border-box;
		font-family: ${Ye};
		font-size: ${Re};
		line-height: ${Ne};
		color: ${Ce};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${H} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${H} * 1px) calc(${H} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${H} / 4) * 1px);
		justify-self: center;
		background: ${Ei};
		margin: 0;
		border-radius: calc(${hs} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`,Jp=(i,e)=>oe`
	${we("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${Ye};
		font-size: ${Re};
		line-height: ${Ne};
		height: calc(${H} * 7px);
		padding: calc(${H} * 1px) 0;
		color: ${Cp};
		fill: currentcolor;
		border-radius: calc(${hs} * 1px);
		border: solid calc(${z} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${Ei};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${Ei};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${Ei};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${Ei};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${Ei};
		fill: currentcolor;
	}
	:host(:${_e}) {
		outline: none;
		border: solid calc(${z} * 1px) ${_p};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${H} * 2px);
	}
`,Qp=(i,e)=>oe`
	${we("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${z} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${Re};
		line-height: ${Ne};
		padding: 10px calc((${H} + 2) * 1px);
	}
`;class Zp extends wt{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=Fo.horizontal),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}Zp.compose({baseName:"panels",template:Yf,styles:Yp});class Kp extends Ha{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}Kp.compose({baseName:"panel-tab",template:Xf,styles:Jp});class eg extends qf{}eg.compose({baseName:"panel-view",template:Wf,styles:Qp});const tg=(i,e)=>oe`
	${we("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${H} * 7px);
		width: calc(${H} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${H} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${wp};
		stroke-width: calc(${H} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`;class ig extends Ci{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,s){e==="value"&&this.removeAttribute("value")}}ig.compose({baseName:"progress-ring",template:Hf,styles:tg,indeterminateIndicator:`
		<svg class="progress" part="progress" viewBox="0 0 16 16">
			<circle
				class="background"
				part="background"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
			<circle
				class="indeterminate-indicator-1"
				part="indeterminate-indicator-1"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
		</svg>
	`});const sg=(i,e)=>oe`
	${we("flex")} :host {
		align-items: flex-start;
		margin: calc(${H} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${Ce};
		font-size: ${Re};
		margin: calc(${H} * 1px) 0;
	}
`;class ng extends Dt{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}ng.compose({baseName:"radio-group",template:Lf,styles:sg});const og=(i,e)=>oe`
	${we("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${Re};
		line-height: ${Ne};
		margin: calc(${H} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${_t};
		border-radius: 999px;
		border: calc(${z} * 1px) solid ${Ii};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${H} * 4px);
		position: relative;
		outline: none;
		width: calc(${H} * 4px);
	}
	.label {
		color: ${Ce};
		cursor: pointer;
		font-family: ${Ye};
		margin-inline-end: calc(${H} * 2px + 2px);
		padding-inline-start: calc(${H} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${Ce};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${H} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${_t};
		border-color: ${Ii};
	}
	:host(:not([disabled])) .control:active {
		background: ${_t};
		border-color: ${ue};
	}
	:host(:${_e}) .control {
		border: calc(${z} * 1px) solid ${ue};
	}
	:host([aria-checked='true']) .control {
		background: ${_t};
		border: calc(${z} * 1px) solid ${Ii};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${_t};
		border: calc(${z} * 1px) solid ${Ii};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${_t};
		border: calc(${z} * 1px) solid ${ue};
	}
	:host([aria-checked="true"]:${_e}:not([disabled])) .control {
		border: calc(${z} * 1px) solid ${ue};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Nt};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${Yt};
	}
`;class rg extends cn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}rg.compose({baseName:"radio",template:Ff,styles:og,checkedIndicator:`
		<div part="checked-indicator" class="checked-indicator"></div>
	`});const lg=(i,e)=>oe`
	${we("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Ye};
		font-size: ${ja};
		line-height: ${Ga};
	}
	.control {
		background-color: ${za};
		border: calc(${z} * 1px) solid ${Vo};
		border-radius: ${Tp};
		color: ${Wa};
		padding: calc(${H} * 0.5px) calc(${H} * 1px);
		text-transform: uppercase;
	}
`;class ag extends rs{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}ag.compose({baseName:"tag",template:$a,styles:lg});const cg=(i,e)=>oe`
	${we("inline-block")} :host {
		font-family: ${Ye};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${Qa};
		background: ${Qt};
		border-radius: calc(${Ti} * 1px);
		border: calc(${z} * 1px) solid ${Bt};
		font: inherit;
		font-size: ${Re};
		line-height: ${Ne};
		padding: calc(${H} * 2px + 1px);
		width: 100%;
		min-width: ${Mo};
		resize: none;
	}
	.control:hover:enabled {
		background: ${Qt};
		border-color: ${Bt};
	}
	.control:active:enabled {
		background: ${Qt};
		border-color: ${ue};
	}
	.control:hover,
	.control:${_e},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${np};
		height: ${op};
	}
	.control::-webkit-scrollbar-corner {
		background: ${Qt};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${rp};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${lp};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${ap};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${ue};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${Ce};
		cursor: pointer;
		font-size: ${Re};
		line-height: ${Ne};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Nt};
	}
	:host([disabled]) {
		opacity: ${Yt};
	}
	:host([disabled]) .control {
		border-color: ${Bt};
	}
`;class dg extends Se{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}dg.compose({baseName:"text-area",template:Zf,styles:cg,shadowOptions:{delegatesFocus:!0}});const ug=(i,e)=>oe`
	${we("inline-block")} :host {
		font-family: ${Ye};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${Qa};
		background: ${Qt};
		border-radius: calc(${Ti} * 1px);
		border: calc(${z} * 1px) solid ${Bt};
		height: calc(${dn} * 1px);
		min-width: ${Mo};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${H} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${H} * 2px + 1px);
		font-size: ${Re};
		line-height: ${Ne};
	}
	.control:hover,
	.control:${_e},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${Ce};
		cursor: pointer;
		font-size: ${Re};
		line-height: ${Ne};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${H} * 4px);
		height: calc(${H} * 4px);
	}
	.start {
		margin-inline-start: calc(${H} * 2px);
	}
	.end {
		margin-inline-end: calc(${H} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${Qt};
		border-color: ${Bt};
	}
	:host(:active:not([disabled])) .root {
		background: ${Qt};
		border-color: ${ue};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${ue};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Nt};
	}
	:host([disabled]) {
		opacity: ${Yt};
	}
	:host([disabled]) .control {
		border-color: ${Bt};
	}
`;class hg extends Ve{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}const fg=hg.compose({baseName:"text-field",template:Kf,styles:ug,shadowOptions:{delegatesFocus:!0}});class pg{vsCodeApi;constructor(){typeof acquireVsCodeApi=="function"&&(this.vsCodeApi=acquireVsCodeApi())}postMessage(e){this.vsCodeApi?this.vsCodeApi.postMessage(e):console.log(e)}getState(){if(this.vsCodeApi)return this.vsCodeApi.getState();const e=localStorage.getItem("vscodeState");return e?JSON.parse(e):void 0}setState(e){return this.vsCodeApi?this.vsCodeApi.setState(e):(localStorage.setItem("vscodeState",JSON.stringify(e)),e)}}const gg=new pg;function bg(i,e){e===void 0&&(e={});var t=e.offsetLine||0,s=e.offsetColumn||0,n=i.split(`
`),o=0,r=n.map(function(u,p){var b=o+u.length+1,T={start:o,end:b,line:p};return o=b,T}),l=0;function a(u,p){return u.start<=p&&p<u.end}function d(u,p){return{line:t+u.line,column:s+p-u.start,character:p}}function c(u,p){typeof u=="string"&&(u=i.indexOf(u,p||0));for(var b=r[l],T=u>=b.end?1:-1;b;){if(a(b,u))return d(b,u);l+=T,b=r[l]}}return c}function mg(i,e,t){return bg(i,t)(e,t)}var ec=/[a-zA-Z0-9:_-]/,tc=/[\s\t\r\n]/,vg=/['"]/;function yg(i,e){for(var t="";e--;)t+=i;return t}function xg(i){var e="",t=[],s=l,n=null,o=null;function r(C){var U=mg(i,k),J=U.line,le=U.column,Be=i.slice(0,k),Zt=/(^|\n).*$/.exec(Be)[0].replace(/\t/g,"  "),Ct=i.slice(k),Kt=/.*(\n|$)/.exec(Ct)[0],Oi=""+Zt+Kt+`
`+yg(" ",Zt.length)+"^";throw new Error(C+" ("+J+":"+le+`). If this is valid SVG, it's probably a bug in svg-parser. Please raise an issue at https://github.com/Rich-Harris/svg-parser/issues – thanks!

`+Oi)}function l(){for(;k<i.length&&i[k]!=="<"||!ec.test(i[k+1]);)e+=i[k++];return a()}function a(){for(var C="";k<i.length&&i[k]!=="<";)C+=i[k++];return/\S/.test(C)&&n.children.push({type:"text",value:C}),i[k]==="<"?d:a}function d(){var C=i[k];if(C==="?")return a;if(C==="!"){if(i.slice(k+1,k+3)==="--")return c;if(i.slice(k+1,k+8)==="[CDATA[")return u;if(/doctype/i.test(i.slice(k+1,k+8)))return a}if(C==="/")return p;var U=b(),J={type:"element",tagName:U,properties:{},children:[]};n?n.children.push(J):o=J;for(var le;k<i.length&&(le=T());)J.properties[le.name]=le.value;var Be=!1;return i[k]==="/"&&(k+=1,Be=!0),i[k]!==">"&&r("Expected >"),Be||(n=J,t.push(J)),a}function c(){var C=i.indexOf("-->",k);return~C||r("expected -->"),k=C+2,a}function u(){var C=i.indexOf("]]>",k);return~C||r("expected ]]>"),n.children.push(i.slice(k+7,C)),k=C+2,a}function p(){var C=b();return C||r("Expected tag name"),C!==n.tagName&&r("Expected closing tag </"+C+"> to match opening tag <"+n.tagName+">"),V(),i[k]!==">"&&r("Expected >"),t.pop(),n=t[t.length-1],a}function b(){for(var C="";k<i.length&&ec.test(i[k]);)C+=i[k++];return C}function T(){if(!tc.test(i[k]))return null;V();var C=b();if(!C)return null;var U=!0;return V(),i[k]==="="&&(k+=1,V(),U=S(),!isNaN(U)&&U.trim()!==""&&(U=+U)),{name:C,value:U}}function S(){return vg.test(i[k])?B():N()}function N(){var C="";do{var U=i[k];if(U===" "||U===">"||U==="/")return C;C+=U,k+=1}while(k<i.length);return C}function B(){for(var C=i[k++],U="",J=!1;k<i.length;){var le=i[k++];if(le===C&&!J)return U;le==="\\"&&!J&&(J=!0),U+=J?"\\"+le:le,J=!1}}function V(){for(;k<i.length&&tc.test(i[k]);)k+=1}for(var k=l.length;k<i.length;)s||r("Unexpected character"),s=s(),k+=1;return s!==a&&r("Unexpected end of input"),o.tagName==="svg"&&(o.metadata=e),{type:"root",children:[o]}}const wg=function(i){return i.split(";").reduce((e,t)=>{let[s,n]=t.split(":");return s==="fill"&&n!=="none"&&(n="currentColor"),s==="stroke"&&n!=="none"&&(n="currentColor"),e[s]=n,e},{})};function jo(i,e){const s=xg(e).children[0],{multicolor:n,pathfill:o,twotone:r,width:l,height:a,viewBox:d}=s.properties;if(s.properties.width="1em",s.properties.height="1em",s.properties.xmlns="http://www.w3.org/2000/svg",d===void 0){if(l===void 0||a===void 0)throw new Error("Width and height must be set if viewBox is not set");s.properties.viewBox=`0 0 ${l} ${a}`}const c=function(p){const{fill:b,stroke:T,style:S}=p,N=!r&&b&&["none","white","#fff"].includes(b)===!1;if(r==="true"&&b===void 0?p.fill="currentColor":(N||o!==void 0)&&(p.fill=i.color===void 0?"currentColor":i.color),T!==void 0&&T!=="none"&&(p.stroke=i.color===void 0?"currentColor":i.color),S!==void 0){const B=wg(S);p={...p,...B},p.style=""}return p},u=function(p){const{tagName:b,properties:T,children:S}=p;if(n!=="true"&&(p.properties=c(T)),S.length>0){const{properties:N}=p;return b==="title"?to(b,N):to(b,N,S.map(u))}return to(b,p.properties)};return u(s)}const _g=i=>jo(i,'<svg width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>'),Cg=i=>jo(i,'<svg width="512" height="512" viewBox="0 0 512 512" fill="currentColor"><path d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"/><path d="M338.29 338.29 448 448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/></svg>'),Tg=i=>jo(i,'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>'),$g={class:"tree-view-wrapper"},Ig={class:"search-container"},kg={slot:"start"},Eg={slot:"end"},Og={class:"container"},Sg={key:0,class:"tree-view"},Rg=["data-expanded","onClick"],Ag={key:0,class:"tree-view-body"},Dg=["innerHTML"],Pg={key:1},Ng=Sr({__name:"TreeView",props:{data:{type:Object,required:!0}},emits:["refresh"],setup(i){const t=Jc(i,"data"),s=Bi([]),n=Bi(""),o=eo(()=>{const p=n.value.toLowerCase();if(p.length===0)return t.value;const b={};return Object.keys(t.value).forEach(T=>{const S=t.value[T],N={};if(T.toLowerCase().includes(p)){b[T]=S;return}Object.keys(S).forEach(B=>{B.toLowerCase().includes(p)&&(N[B]=S[B])}),Object.keys(N).length>0&&(b[T]=N)}),b}),r=eo(()=>{const p={};return Object.keys(o.value).sort().forEach(b=>{p[b]=o.value[b]}),p}),l=p=>{const b=p.target;n.value=b.value},a=p=>["bg","text","border","ring","from","to","divide","placeholder","via","decoration","outline","accent","shadow","caret"].some(T=>p.startsWith(`.${T}-`)),d=(p,b)=>{const S={backgroundColor:"color",textColor:"color",borderColor:"color",ringColor:"color",ringOffsetColor:"color",gradientColorStops:"gradient",divideColor:"color",placeholderColor:"color",textDecorationColor:"color",outlineColor:"color",accentColor:"color",boxShadowColor:"color",caretColor:"color"}[p],N=Object.keys(b).find(k=>k.includes(S)),B=Object.keys(b).find(k=>k.includes("opacity"));if(N===void 0)return console.warn("colorProp is undefined",p,b),{};const V={backgroundColor:b[N]};return B!==void 0&&(V[B]=b[B]),V},c=p=>p.replace("\\/","/").replace("\\.",".").replace("> :not([hidden]) ~ :not([hidden])",'<span class="less-opacity">> :not([hidden]) ~ :not([hidden])</span>'),u=p=>{const b=s.value.indexOf(p);b===-1?s.value.push(p):s.value.splice(b,1)};return(p,b)=>{const T=Id("vscode-text-field");return Me(),et("div",$g,[mt("div",Ig,[be(T,{placeholder:"Search ...",class:"search-input",value:n.value,onKeyup:l},{default:Or(()=>[mt("span",kg,[be(Os(Cg))]),mt("span",Eg,[n.value.length>0?(Me(),et("div",{key:0,class:"clear-button",onClick:b[0]||(b[0]=S=>n.value="")},[be(Os(Tg))])):zi("",!0)])]),_:1},8,["value"])]),mt("div",Og,[Object.keys(r.value).length>0?(Me(),et("div",Sg,[(Me(!0),et(Ke,null,Br(r.value,(S,N)=>(Me(),et("div",{key:N},[mt("div",{class:"tree-view-heading","data-expanded":s.value.includes(N),onClick:B=>u(N)},[be(Os(_g),{class:"chevron"}),mt("span",null,wn(N),1)],8,Rg),s.value.includes(N)?(Me(),et("div",Ag,[(Me(!0),et(Ke,null,Br(S,(B,V)=>(Me(),et("div",{key:V,class:"tree-body-item"},[mt("span",{innerHTML:c(V)},null,8,Dg),a(V)?(Me(),et("span",{key:0,class:"color-box",style:ws(d(N,B))},null,4)):zi("",!0)]))),128))])):zi("",!0)]))),128))])):zi("",!0),n.value.length>0&&Object.keys(r.value).length===0?(Me(),et("div",Pg," No results found ")):zi("",!0)])])}}}),Bg={key:1,class:"error"},ic=Uu(Sr({__name:"App",setup(i){const e=Bi({}),t=Bi("");tp().register(fg(),Dp()),window.addEventListener("message",n=>{const o=n.data,{payload:r,command:l}=o;switch(l){case"init":{e.value=r;break}case"error":{t.value=r;break}}});const s=function(){gg.postMessage({command:"refresh"})};return(n,o)=>t.value===""?(Me(),cl(Ng,{key:0,data:e.value,onRefresh:s},null,8,["data"])):(Me(),et("div",Bg,wn(t.value),1))}}));ic.config.errorHandler=(i,e,t)=>{console.log(" --- ERROR ---",i,e,t)},ic.mount("#app")});
