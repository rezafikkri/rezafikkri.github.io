(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[196],{7484:function(t){var e,n,r,i,s,a,u,o,c,l,h,d,f,m,_,$,p,M,y,g,S;t.exports=(e="millisecond",n="second",r="minute",i="hour",s="week",a="month",u="quarter",o="year",c="date",l="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},(_={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},$=function(t){return t instanceof g},p=function t(e,n,r){var i;if(!e)return m;if("string"==typeof e){var s=e.toLowerCase();_[s]&&(i=s),n&&(_[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;_[u]=e,i=u}return!r&&i&&(m=i),i||!r&&m},M=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new g(n)},(y={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,u=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:a,y:o,w:s,d:"day",D:c,h:i,m:r,s:n,ms:e,Q:u})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=p,y.i=$,y.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},S=(g=function(){function t(t){this.$L=p(t.locale,null,!0),this.parse(t)}var f=t.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return this.$d.toString()!==l},f.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return M(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<M(t)},f.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,e){var u=this,l=!!y.u(e)||e,h=y.p(t),d=function(t,e){var n=y.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return l?n:n.endOf("day")},f=function(t,e){return y.w(u.toDate()[t].apply(u.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},m=this.$W,_=this.$M,$=this.$D,p="set"+(this.$u?"UTC":"");switch(h){case o:return l?d(1,0):d(31,11);case a:return l?d(1,_):d(0,_+1);case s:var M=this.$locale().weekStart||0,g=(m<M?m+7:m)-M;return d(l?$-g:$+(6-g),_);case"day":case c:return f(p+"Hours",0);case i:return f(p+"Minutes",1);case r:return f(p+"Seconds",2);case n:return f(p+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(t,s){var u,l=y.p(t),h="set"+(this.$u?"UTC":""),d=((u={}).day=h+"Date",u[c]=h+"Date",u[a]=h+"Month",u[o]=h+"FullYear",u[i]=h+"Hours",u[r]=h+"Minutes",u[n]=h+"Seconds",u[e]=h+"Milliseconds",u)[l],f="day"===l?this.$D+(s-this.$W):s;if(l===a||l===o){var m=this.clone().set(c,1);m.$d[d](f),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d](f);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[y.p(t)]()},f.add=function(t,e){var u,c=this;t=Number(t);var l=y.p(e),h=function(e){var n=M(c);return y.w(n.date(n.date()+Math.round(e*t)),c)};if(l===a)return this.set(a,this.$M+t);if(l===o)return this.set(o,this.$y+t);if("day"===l)return h(1);if(l===s)return h(7);var d=((u={})[r]=6e4,u[i]=36e5,u[n]=1e3,u)[l]||1,f=this.$d.getTime()+t*d;return y.w(f,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},f=function(t){return y.s(s%12||12,t,"0")},m=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},_={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:y.s(u+1,2,"0"),MMM:h(n.monthsShort,u,c,3),MMMM:h(c,u),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:y.s(s,2,"0"),h:f(1),hh:f(2),a:m(s,a,!0),A:m(s,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:i};return r.replace(d,function(t,e){return e||_[t]||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(t,e,c){var l,h=y.p(e),d=M(t),f=(d.utcOffset()-this.utcOffset())*6e4,m=this-d,_=y.m(this,d);return _=((l={})[o]=_/12,l[a]=_,l[u]=_/3,l[s]=(m-f)/6048e5,l.day=(m-f)/864e5,l[i]=m/36e5,l[r]=m/6e4,l[n]=m/1e3,l)[h]||m,c?_:y.a(_)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return _[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=p(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},t}()).prototype,M.prototype=S,[["$ms",e],["$s",n],["$m",r],["$H",i],["$W","day"],["$M",a],["$y",o],["$D",c]].forEach(function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),M.extend=function(t,e){return t.$i||(t(e,g,M),t.$i=!0),M},M.locale=p,M.isDayjs=$,M.unix=function(t){return M(1e3*t)},M.en=_[m],M.Ls=_,M.p={},M)},3783:function(t,e,n){var r,i;t.exports=(r=n(7484),i={name:"id",weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),weekStart:1,formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},ordinal:function(t){return t+"."}},(r&&"object"==typeof r&&"default"in r?r:{default:r}).default.locale(i,null,!0),i)},6438:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/[slug]",function(){return n(4918)}])},4918:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return h},default:function(){return d}});var r=n(5893),i=n(9008),s=n.n(i),a=n(1664),u=n.n(a);function o(t){let{topics:e,mt:n}=t;return(0,r.jsx)("div",{className:"flex flex-wrap gap-1 ".concat(n),children:e.map((t,e)=>(0,r.jsx)(u(),{href:"/blogs/topics/".concat(t),className:"no-underline text-xs bg-white border border-gray-500 hover:border-ajwa-green px-2 py-1 rounded-lg",children:t},e))})}var c=n(7484),l=n.n(c);n(3783),l().locale("id");var h=!0;function d(t){let{post:e,name:n}=t,i="".concat(e.title," - ").concat(n);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:i}),(0,r.jsx)("meta",{name:"description",content:e.excerpt}),(0,r.jsx)("meta",{property:"og:title",content:i}),(0,r.jsx)("meta",{property:"og:description",content:e.excerpt}),(0,r.jsx)("meta",{property:"og:image",content:e.ogImage})]}),(0,r.jsxs)("article",{className:"mt-24",children:[(0,r.jsx)("time",{className:"text-gray-600 inline-block",children:l()(e.date).format("DD MMMM YYYY")}),(0,r.jsx)("h1",{className:"text-5xl font-bold mt-2 text-gray-800",children:e.title}),(0,r.jsx)(o,{topics:e.topics,mt:"mt-6"}),(0,r.jsx)("div",{className:"mt-9 prose prose-ajwa prose-xl max-w-none prose-h2:text-3xl prose-h3:text-2xl prose-a:font-normal prose-blockquote:not-italic",id:"content",dangerouslySetInnerHTML:{__html:e.contentHTML}}),(0,r.jsx)("small",{className:"mt-16 block text-gray-600",children:"Klik salah satu topik tulisan untuk melihat semua tulisan pada topik tersebut!"}),(0,r.jsx)(o,{topics:e.topics,mt:"mt-3"})]})]})}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=6438)}),_N_E=t.O()}]);