(()=>{var e={};e.id=17,e.ids=[17],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},27790:e=>{"use strict";e.exports=require("assert")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},19801:e=>{"use strict";e.exports=require("os")},55315:e=>{"use strict";e.exports=require("path")},76162:e=>{"use strict";e.exports=require("stream")},74175:e=>{"use strict";e.exports=require("tty")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},46965:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>l.a,__next_app__:()=>d,originalPathname:()=>m,pages:()=>x,routeModule:()=>f,tree:()=>n}),t(61005),t(32029),t(12523);var s=t(23191),a=t(88716),c=t(37922),l=t.n(c),i=t(95231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);t.d(r,o);let n=["",{children:["(site)",{children:["pricing",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,61005)),"D:\\GITHUB-WASIS\\new\\compro-codecrew\\src\\app\\(site)\\pricing\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,32029)),"D:\\GITHUB-WASIS\\new\\compro-codecrew\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,12523)),"D:\\GITHUB-WASIS\\new\\compro-codecrew\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],x=["D:\\GITHUB-WASIS\\new\\compro-codecrew\\src\\app\\(site)\\pricing\\page.tsx"],m="/(site)/pricing/page",d={require:t,loadChunk:()=>Promise.resolve()},f=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(site)/pricing/page",pathname:"/pricing",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},68256:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,79404,23)),Promise.resolve().then(t.bind(t,95436))},95436:(e,r,t)=>{"use strict";t.d(r,{default:()=>n});var s=t(10326);let a=({subtitle:e,title:r,paragraph:t,width:a="635px",center:c})=>s.jsx("div",{className:"-mx-4 flex flex-wrap",children:(0,s.jsxs)("div",{className:`wow fadeInUp w-full px-4 ${c?"mx-auto text-center":""}`,"data-wow-delay":".1s",style:{maxWidth:a},children:[e&&s.jsx("span",{className:"mb-2 block text-lg font-semibold text-primary",children:e}),s.jsx("h2",{className:"mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]",children:r}),s.jsx("p",{className:"text-base leading-relaxed text-body-color dark:text-dark-6 sm:leading-relaxed",children:t})]})});var c=t(44099);t(17577);let l=({text:e})=>s.jsx("p",{className:"mb-1 text-base text-body-color dark:text-dark-6",children:e}),i=({product:e})=>{let r=async r=>{r.preventDefault();let{data:t}=await c.Z.post("/api/payment",{priceId:e.id},{headers:{"Content-Type":"application/json"}});window.location.assign(t)};return s.jsx("div",{className:"w-full px-4 md:w-1/2 lg:w-1/3",children:(0,s.jsxs)("div",{className:"relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14","data-wow-delay":".1s",children:["Premium"===e.nickname&&s.jsx("p",{className:"absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white",children:"Recommended"}),s.jsx("span",{className:"mb-5 block text-xl font-medium text-dark dark:text-white",children:e.nickname}),(0,s.jsxs)("h2",{className:"mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]",children:[s.jsx("span",{className:"text-xl font-medium",children:"$ "}),s.jsx("span",{className:"-ml-1 -tracking-[2px]",children:(e.unit_amount/100).toLocaleString("en-US",{currency:"USD"})}),(0,s.jsxs)("span",{className:"text-base font-normal text-body-color dark:text-dark-6",children:[" ","Per Month"]})]}),(0,s.jsxs)("div",{className:"mb-[50px]",children:[s.jsx("h3",{className:"mb-5 text-lg font-medium text-dark dark:text-white",children:"Features"}),s.jsx("div",{className:"mb-10",children:e?.offers.map((e,r)=>s.jsx(l,{text:e},r))})]}),s.jsx("div",{className:"w-full",children:s.jsx("button",{onClick:r,className:"inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90",children:"Purchase Now"})})]})})},o=[{id:"price_1NQk5TLtGdPVhGLecVfQ7mn0",unit_amount:1e4,nickname:"Basic",offers:["1 User","All UI components","Lifetime access","Free updates","Use on 1 (one) project","3 Months support"]},{id:"price_1NQk55LtGdPVhGLefU8AHqHr",unit_amount:2e4,nickname:"Premium",offers:["5 Users","All UI components","Lifetime access","Free updates","Use on 1 (one) project","3 Months support"]},{id:"price_1NQk4eLtGdPVhGLeZsZDsCNz",unit_amount:3e4,nickname:"Business",offers:["10 Users","All UI components","Lifetime access","Free updates","Use on 1 (one) project","3 Months support"]}],n=()=>s.jsx("section",{id:"pricing",className:"relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]",children:(0,s.jsxs)("div",{className:"container",children:[s.jsx("div",{className:"mb-[60px]",children:s.jsx(a,{subtitle:"Pricing Table",title:"Our Pricing Plan",paragraph:"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",center:!0})}),s.jsx("div",{className:"-mx-4 flex flex-wrap justify-center",children:o.map((e,r)=>s.jsx(i,{product:e},r))})]})})},61005:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>x,metadata:()=>n});var s=t(19510),a=t(44866),c=t(24027);let l=e=>{let{question:r,answer:t}=e;return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:"mb-12 flex lg:mb-[70px]",children:[s.jsx("div",{className:"bg-primary mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]",children:(0,s.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 34 34",className:"fill-current",children:[s.jsx("path",{d:"M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z"}),s.jsx("path",{d:"M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z"}),s.jsx("path",{d:"M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z"})]})}),(0,s.jsxs)("div",{className:"w-full",children:[s.jsx("h3",{className:"mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl",children:r}),s.jsx("p",{className:"text-base text-body-color dark:text-dark-6",children:t})]})]})})},i=()=>(0,s.jsxs)("section",{className:"relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]",children:[(0,s.jsxs)("div",{className:"container",children:[s.jsx(c.Z,{subtitle:"FAQ",title:"Any Questions? Answered",paragraph:"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",width:"640px",center:!0}),(0,s.jsxs)("div",{className:"-mx-4 mt-[60px] flex flex-wrap lg:mt-20",children:[(0,s.jsxs)("div",{className:"w-full px-4 lg:w-1/2",children:[s.jsx(l,{question:"How to use TailGrids?",answer:"It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."}),s.jsx(l,{question:"How to download icons from LineIcons?",answer:"It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."}),s.jsx(l,{question:"Is GrayGrids part of UIdeck?",answer:"It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."})]}),(0,s.jsxs)("div",{className:"w-full px-4 lg:w-1/2",children:[s.jsx(l,{question:"Can I use this template for commercial project?",answer:"It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."}),s.jsx(l,{question:"Do you have plan to releasing Play Pro?",answer:"It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."}),s.jsx(l,{question:"Where and how to host this template?",answer:"It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."})]})]})]}),(0,s.jsxs)("div",{children:[s.jsx("span",{className:"absolute left-4 top-4 -z-[1]",children:(0,s.jsxs)("svg",{width:"48",height:"134",viewBox:"0 0 48 134",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("circle",{cx:"45.6673",cy:"132",r:"1.66667",transform:"rotate(180 45.6673 132)",fill:"#13C296"}),s.jsx("circle",{cx:"45.6673",cy:"117.333",r:"1.66667",transform:"rotate(180 45.6673 117.333)",fill:"#13C296"}),s.jsx("circle",{cx:"45.6673",cy:"102.667",r:"1.66667",transform:"rotate(180 45.6673 102.667)",fill:"#13C296"}),s.jsx("circle",{cx:"45.6673",cy:"88.0001",r:"1.66667",transform:"rotate(180 45.6673 88.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"45.6673",cy:"73.3335",r:"1.66667",transform:"rotate(180 45.6673 73.3335)",fill:"#13C296"}),s.jsx("circle",{cx:"45.6673",cy:"45.0001",r:"1.66667",transform:"rotate(180 45.6673 45.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"45.6673",cy:"16.0001",r:"1.66667",transform:"rotate(180 45.6673 16.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"45.6673",cy:"59.0001",r:"1.66667",transform:"rotate(180 45.6673 59.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"45.6673",cy:"30.6668",r:"1.66667",transform:"rotate(180 45.6673 30.6668)",fill:"#13C296"}),s.jsx("circle",{cx:"45.6673",cy:"1.66683",r:"1.66667",transform:"rotate(180 45.6673 1.66683)",fill:"#13C296"}),s.jsx("circle",{cx:"31.0013",cy:"132",r:"1.66667",transform:"rotate(180 31.0013 132)",fill:"#13C296"}),s.jsx("circle",{cx:"31.0013",cy:"117.333",r:"1.66667",transform:"rotate(180 31.0013 117.333)",fill:"#13C296"}),s.jsx("circle",{cx:"31.0013",cy:"102.667",r:"1.66667",transform:"rotate(180 31.0013 102.667)",fill:"#13C296"}),s.jsx("circle",{cx:"31.0013",cy:"88.0001",r:"1.66667",transform:"rotate(180 31.0013 88.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"31.0013",cy:"73.3335",r:"1.66667",transform:"rotate(180 31.0013 73.3335)",fill:"#13C296"}),s.jsx("circle",{cx:"31.0013",cy:"45.0001",r:"1.66667",transform:"rotate(180 31.0013 45.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"31.0013",cy:"16.0001",r:"1.66667",transform:"rotate(180 31.0013 16.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"31.0013",cy:"59.0001",r:"1.66667",transform:"rotate(180 31.0013 59.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"31.0013",cy:"30.6668",r:"1.66667",transform:"rotate(180 31.0013 30.6668)",fill:"#13C296"}),s.jsx("circle",{cx:"31.0013",cy:"1.66683",r:"1.66667",transform:"rotate(180 31.0013 1.66683)",fill:"#13C296"}),s.jsx("circle",{cx:"16.3333",cy:"132",r:"1.66667",transform:"rotate(180 16.3333 132)",fill:"#13C296"}),s.jsx("circle",{cx:"16.3333",cy:"117.333",r:"1.66667",transform:"rotate(180 16.3333 117.333)",fill:"#13C296"}),s.jsx("circle",{cx:"16.3333",cy:"102.667",r:"1.66667",transform:"rotate(180 16.3333 102.667)",fill:"#13C296"}),s.jsx("circle",{cx:"16.3333",cy:"88.0001",r:"1.66667",transform:"rotate(180 16.3333 88.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"16.3333",cy:"73.3335",r:"1.66667",transform:"rotate(180 16.3333 73.3335)",fill:"#13C296"}),s.jsx("circle",{cx:"16.3333",cy:"45.0001",r:"1.66667",transform:"rotate(180 16.3333 45.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"16.3333",cy:"16.0001",r:"1.66667",transform:"rotate(180 16.3333 16.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"16.3333",cy:"59.0001",r:"1.66667",transform:"rotate(180 16.3333 59.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"16.3333",cy:"30.6668",r:"1.66667",transform:"rotate(180 16.3333 30.6668)",fill:"#13C296"}),s.jsx("circle",{cx:"16.3333",cy:"1.66683",r:"1.66667",transform:"rotate(180 16.3333 1.66683)",fill:"#13C296"}),s.jsx("circle",{cx:"1.66732",cy:"132",r:"1.66667",transform:"rotate(180 1.66732 132)",fill:"#13C296"}),s.jsx("circle",{cx:"1.66732",cy:"117.333",r:"1.66667",transform:"rotate(180 1.66732 117.333)",fill:"#13C296"}),s.jsx("circle",{cx:"1.66732",cy:"102.667",r:"1.66667",transform:"rotate(180 1.66732 102.667)",fill:"#13C296"}),s.jsx("circle",{cx:"1.66732",cy:"88.0001",r:"1.66667",transform:"rotate(180 1.66732 88.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"1.66732",cy:"73.3335",r:"1.66667",transform:"rotate(180 1.66732 73.3335)",fill:"#13C296"}),s.jsx("circle",{cx:"1.66732",cy:"45.0001",r:"1.66667",transform:"rotate(180 1.66732 45.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"1.66732",cy:"16.0001",r:"1.66667",transform:"rotate(180 1.66732 16.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"1.66732",cy:"59.0001",r:"1.66667",transform:"rotate(180 1.66732 59.0001)",fill:"#13C296"}),s.jsx("circle",{cx:"1.66732",cy:"30.6668",r:"1.66667",transform:"rotate(180 1.66732 30.6668)",fill:"#13C296"}),s.jsx("circle",{cx:"1.66732",cy:"1.66683",r:"1.66667",transform:"rotate(180 1.66732 1.66683)",fill:"#13C296"})]})}),s.jsx("span",{className:"absolute bottom-4 right-4 -z-[1]",children:(0,s.jsxs)("svg",{width:"48",height:"134",viewBox:"0 0 48 134",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("circle",{cx:"45.6673",cy:"132",r:"1.66667",transform:"rotate(180 45.6673 132)",fill:"#3758F9"}),s.jsx("circle",{cx:"45.6673",cy:"117.333",r:"1.66667",transform:"rotate(180 45.6673 117.333)",fill:"#3758F9"}),s.jsx("circle",{cx:"45.6673",cy:"102.667",r:"1.66667",transform:"rotate(180 45.6673 102.667)",fill:"#3758F9"}),s.jsx("circle",{cx:"45.6673",cy:"88.0001",r:"1.66667",transform:"rotate(180 45.6673 88.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"45.6673",cy:"73.3333",r:"1.66667",transform:"rotate(180 45.6673 73.3333)",fill:"#3758F9"}),s.jsx("circle",{cx:"45.6673",cy:"45.0001",r:"1.66667",transform:"rotate(180 45.6673 45.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"45.6673",cy:"16.0001",r:"1.66667",transform:"rotate(180 45.6673 16.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"45.6673",cy:"59.0001",r:"1.66667",transform:"rotate(180 45.6673 59.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"45.6673",cy:"30.6668",r:"1.66667",transform:"rotate(180 45.6673 30.6668)",fill:"#3758F9"}),s.jsx("circle",{cx:"45.6673",cy:"1.66683",r:"1.66667",transform:"rotate(180 45.6673 1.66683)",fill:"#3758F9"}),s.jsx("circle",{cx:"31.0006",cy:"132",r:"1.66667",transform:"rotate(180 31.0006 132)",fill:"#3758F9"}),s.jsx("circle",{cx:"31.0006",cy:"117.333",r:"1.66667",transform:"rotate(180 31.0006 117.333)",fill:"#3758F9"}),s.jsx("circle",{cx:"31.0006",cy:"102.667",r:"1.66667",transform:"rotate(180 31.0006 102.667)",fill:"#3758F9"}),s.jsx("circle",{cx:"31.0006",cy:"88.0001",r:"1.66667",transform:"rotate(180 31.0006 88.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"31.0008",cy:"73.3333",r:"1.66667",transform:"rotate(180 31.0008 73.3333)",fill:"#3758F9"}),s.jsx("circle",{cx:"31.0008",cy:"45.0001",r:"1.66667",transform:"rotate(180 31.0008 45.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"31.0008",cy:"16.0001",r:"1.66667",transform:"rotate(180 31.0008 16.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"31.0008",cy:"59.0001",r:"1.66667",transform:"rotate(180 31.0008 59.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"31.0008",cy:"30.6668",r:"1.66667",transform:"rotate(180 31.0008 30.6668)",fill:"#3758F9"}),s.jsx("circle",{cx:"31.0008",cy:"1.66683",r:"1.66667",transform:"rotate(180 31.0008 1.66683)",fill:"#3758F9"}),s.jsx("circle",{cx:"16.3341",cy:"132",r:"1.66667",transform:"rotate(180 16.3341 132)",fill:"#3758F9"}),s.jsx("circle",{cx:"16.3341",cy:"117.333",r:"1.66667",transform:"rotate(180 16.3341 117.333)",fill:"#3758F9"}),s.jsx("circle",{cx:"16.3341",cy:"102.667",r:"1.66667",transform:"rotate(180 16.3341 102.667)",fill:"#3758F9"}),s.jsx("circle",{cx:"16.3341",cy:"88.0001",r:"1.66667",transform:"rotate(180 16.3341 88.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"16.3338",cy:"73.3333",r:"1.66667",transform:"rotate(180 16.3338 73.3333)",fill:"#3758F9"}),s.jsx("circle",{cx:"16.3338",cy:"45.0001",r:"1.66667",transform:"rotate(180 16.3338 45.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"16.3338",cy:"16.0001",r:"1.66667",transform:"rotate(180 16.3338 16.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"16.3338",cy:"59.0001",r:"1.66667",transform:"rotate(180 16.3338 59.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"16.3338",cy:"30.6668",r:"1.66667",transform:"rotate(180 16.3338 30.6668)",fill:"#3758F9"}),s.jsx("circle",{cx:"16.3338",cy:"1.66683",r:"1.66667",transform:"rotate(180 16.3338 1.66683)",fill:"#3758F9"}),s.jsx("circle",{cx:"1.66732",cy:"132",r:"1.66667",transform:"rotate(180 1.66732 132)",fill:"#3758F9"}),s.jsx("circle",{cx:"1.66732",cy:"117.333",r:"1.66667",transform:"rotate(180 1.66732 117.333)",fill:"#3758F9"}),s.jsx("circle",{cx:"1.66732",cy:"102.667",r:"1.66667",transform:"rotate(180 1.66732 102.667)",fill:"#3758F9"}),s.jsx("circle",{cx:"1.66732",cy:"88.0001",r:"1.66667",transform:"rotate(180 1.66732 88.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"1.66732",cy:"73.3333",r:"1.66667",transform:"rotate(180 1.66732 73.3333)",fill:"#3758F9"}),s.jsx("circle",{cx:"1.66732",cy:"45.0001",r:"1.66667",transform:"rotate(180 1.66732 45.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"1.66732",cy:"16.0001",r:"1.66667",transform:"rotate(180 1.66732 16.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"1.66732",cy:"59.0001",r:"1.66667",transform:"rotate(180 1.66732 59.0001)",fill:"#3758F9"}),s.jsx("circle",{cx:"1.66732",cy:"30.6668",r:"1.66667",transform:"rotate(180 1.66732 30.6668)",fill:"#3758F9"}),s.jsx("circle",{cx:"1.66732",cy:"1.66683",r:"1.66667",transform:"rotate(180 1.66732 1.66683)",fill:"#3758F9"})]})})]})]}),o=(0,t(68570).createProxy)(String.raw`D:\GITHUB-WASIS\new\compro-codecrew\src\components\Pricing\index.tsx#default`),n={title:"Pricing Page | Play SaaS Starter Kit and Boilerplate for Next.js",description:"This is pricing page description"},x=()=>(0,s.jsxs)(s.Fragment,{children:[s.jsx(a.Z,{pageName:"Pricing Page"}),s.jsx(o,{}),s.jsx(i,{})]})},24027:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var s=t(19510);let a=({subtitle:e,title:r,paragraph:t,width:a="635px",center:c})=>s.jsx("div",{className:"-mx-4 flex flex-wrap",children:(0,s.jsxs)("div",{className:`wow fadeInUp w-full px-4 ${c?"mx-auto text-center":""}`,"data-wow-delay":".1s",style:{maxWidth:a},children:[e&&s.jsx("span",{className:"mb-2 block text-lg font-semibold text-primary",children:e}),s.jsx("h2",{className:"mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]",children:r}),s.jsx("p",{className:"text-base leading-relaxed text-body-color dark:text-dark-6 sm:leading-relaxed",children:t})]})})}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,46,99,490],()=>t(46965));module.exports=s})();