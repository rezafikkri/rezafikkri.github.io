(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{7484:function(t){var e,n,r,i,s,a,u,o,c,l,d,h,f,m,$,_,g,p,M,y,x;t.exports=(e="millisecond",n="second",r="minute",i="hour",s="week",a="month",u="quarter",o="year",c="date",l="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},($={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},_=function(t){return t instanceof y},g=function t(e,n,r){var i;if(!e)return m;if("string"==typeof e){var s=e.toLowerCase();$[s]&&(i=s),n&&($[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;$[u]=e,i=u}return!r&&i&&(m=i),i||!r&&m},p=function(t,e){if(_(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},(M={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,u=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:a,y:o,w:s,d:"day",D:c,h:i,m:r,s:n,ms:e,Q:u})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=g,M.i=_,M.w=function(t,e){return p(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},x=(y=function(){function t(t){this.$L=g(t.locale,null,!0),this.parse(t)}var f=t.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return M},f.isValid=function(){return this.$d.toString()!==l},f.isSame=function(t,e){var n=p(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return p(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<p(t)},f.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,e){var u=this,l=!!M.u(e)||e,d=M.p(t),h=function(t,e){var n=M.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return l?n:n.endOf("day")},f=function(t,e){return M.w(u.toDate()[t].apply(u.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},m=this.$W,$=this.$M,_=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case o:return l?h(1,0):h(31,11);case a:return l?h(1,$):h(0,$+1);case s:var p=this.$locale().weekStart||0,y=(m<p?m+7:m)-p;return h(l?_-y:_+(6-y),$);case"day":case c:return f(g+"Hours",0);case i:return f(g+"Minutes",1);case r:return f(g+"Seconds",2);case n:return f(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(t,s){var u,l=M.p(t),d="set"+(this.$u?"UTC":""),h=((u={}).day=d+"Date",u[c]=d+"Date",u[a]=d+"Month",u[o]=d+"FullYear",u[i]=d+"Hours",u[r]=d+"Minutes",u[n]=d+"Seconds",u[e]=d+"Milliseconds",u)[l],f="day"===l?this.$D+(s-this.$W):s;if(l===a||l===o){var m=this.clone().set(c,1);m.$d[h](f),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[M.p(t)]()},f.add=function(t,e){var u,c=this;t=Number(t);var l=M.p(e),d=function(e){var n=p(c);return M.w(n.date(n.date()+Math.round(e*t)),c)};if(l===a)return this.set(a,this.$M+t);if(l===o)return this.set(o,this.$y+t);if("day"===l)return d(1);if(l===s)return d(7);var h=((u={})[r]=6e4,u[i]=36e5,u[n]=1e3,u)[l]||1,f=this.$d.getTime()+t*h;return M.w(f,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,d=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},f=function(t){return M.s(s%12||12,t,"0")},m=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:M.s(u+1,2,"0"),MMM:d(n.monthsShort,u,c,3),MMMM:d(c,u),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,o,2),ddd:d(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:M.s(s,2,"0"),h:f(1),hh:f(2),a:m(s,a,!0),A:m(s,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return r.replace(h,function(t,e){return e||$[t]||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(t,e,c){var l,d=M.p(e),h=p(t),f=(h.utcOffset()-this.utcOffset())*6e4,m=this-h,$=M.m(this,h);return $=((l={})[o]=$/12,l[a]=$,l[u]=$/3,l[s]=(m-f)/6048e5,l.day=(m-f)/864e5,l[i]=m/36e5,l[r]=m/6e4,l[n]=m/1e3,l)[d]||m,c?$:M.a($)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return $[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=g(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return M.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},t}()).prototype,p.prototype=x,[["$ms",e],["$s",n],["$m",r],["$H",i],["$W","day"],["$M",a],["$y",o],["$D",c]].forEach(function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),p.extend=function(t,e){return t.$i||(t(e,y,p),t.$i=!0),p},p.locale=g,p.isDayjs=_,p.unix=function(t){return p(1e3*t)},p.en=$[m],p.Ls=$,p.p={},p)},3783:function(t,e,n){var r,i;t.exports=(r=n(7484),i={name:"id",weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),weekStart:1,formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},ordinal:function(t){return t+"."}},(r&&"object"==typeof r&&"default"in r?r:{default:r}).default.locale(i,null,!0),i)},4653:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs",function(){return n(343)}])},4318:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(5893),i=n(1664),s=n.n(i);function a(t){let{topics:e,mt:n}=t;return(0,r.jsx)("div",{className:"flex flex-wrap gap-2 ".concat(n),children:e.map((t,e)=>(0,r.jsx)(s(),{href:"/blogs/topics/".concat(t),className:"no-underline bg-white border-2 border-gray-500 hover:border-ajwa-green px-2 py-1 rounded-lg",children:t},e))})}},2470:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(5893),i=n(7294),s=n(7484),a=n.n(s);n(3783);var u=n(1664),o=n.n(u);function c(t){let{posts:e}=t,n=0;return(0,r.jsx)("ul",{children:e.map((t,e)=>{let s=a()(t.date).year(),u=(0,r.jsxs)(i.Fragment,{children:[n!=s&&(0,r.jsx)("h3",{className:"text-2xl font-bold mb-2 ".concat(0!=n&&"mt-6"),children:s}),(0,r.jsx)("li",{className:"py-2 md:py-1.5 ".concat(n===s&&"border-t"),children:(0,r.jsxs)(o(),{href:"/blogs/".concat(t.slug),className:"flex flex-col md:flex-row md:justify-between no-underline hover:text-ajwa-green",children:[(0,r.jsx)("h3",{className:"text-xl",children:t.title}),(0,r.jsx)("time",{className:"font-light md:basis-24 md:text-right",children:a()(t.date).format("DD MMM")})]})})]},e);return n!=s&&(n=s),u})})}a().locale("id")},343:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return o},default:function(){return c}});var r=n(5893),i=n(9008),s=n.n(i),a=n(2470),u=n(4318),o=!0;function c(t){let{topics:e,posts:n,name:i}=t,o="Blog - ".concat(i);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:o}),(0,r.jsx)("meta",{name:"description",content:"Kumpulan tulisan mengenai programming dan teknologi secara umum."}),(0,r.jsx)("meta",{property:"og:title",content:o}),(0,r.jsx)("meta",{property:"og:description",content:"Kumpulan tulisan mengenai programming dan teknologi secara umum."}),(0,r.jsx)("meta",{property:"og:image",content:"/Reza logo.svg"})]}),(0,r.jsx)("header",{className:"mt-24 text-gray-800",children:(0,r.jsx)("h1",{className:"text-5xl font-bold",children:"Blog"})}),(0,r.jsxs)("section",{className:"mt-12 text-gray-800",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold",children:"Topik"}),(0,r.jsx)("small",{className:"text-gray-600",children:"Klik pada salah satu topik tulisan untuk melihat semua tulisan dengan topik itu!"}),(0,r.jsx)(u.Z,{topics:e,mt:"mt-7"})]}),(0,r.jsxs)("section",{className:"mt-20 text-gray-800",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold mb-7",children:"Tulisan"}),(0,r.jsx)(a.Z,{posts:n})]})]})}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=4653)}),_N_E=t.O()}]);