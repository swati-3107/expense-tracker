import{a as R,b as J}from"./chunk-RCNZODZB.js";import{$ as I,$a as q,Ca as a,Da as p,E as f,G as M,J as y,L as F,Ma as g,Na as S,O as C,Oa as d,P as T,Pa as B,T as h,U as b,Va as W,W as A,X as E,Xa as $,Y as w,Z as i,Za as H,_ as n,aa as Y,ba as U,ca as u,da as l,ea as m,f as _,ga as j,ha as L,ia as N,ja as D,ka as k,oa as O,ra as V}from"./chunk-W3RCWQTX.js";var se=()=>[];function re(s,r){if(s&1&&(i(0,"tr")(1,"td"),l(2),n(),i(3,"td"),l(4),n(),i(5,"td"),l(6),n()()),s&2){let c=r.$implicit,e=r.index,t=u();h(2),m((t.currentPage-1)*t.itemsPerPage+e+1),h(2),j("",t.getMonthName(c.month)," ",c.year,""),h(2),m(c.totalAmount)}}function ie(s,r){if(s&1){let c=Y();i(0,"li",11)(1,"div",12)(2,"a",13),U("click",function(){let t=C(c).index,o=u();return T(o.goToPage(t+1))}),l(3),n()()()}if(s&2){let c=r.index,e=u();w("active",e.currentPage===c+1),h(3),m(c+1)}}var he=(()=>{let r=class r{constructor(e,t){this.expService=e,this.store=t,this.userName="",this.yearlyExpenses=[],this.selectedYear=null,this.selectedMonth=null,this.totalAmount=0,this.paginatedExpenses=[],this.currentPage=1,this.itemsPerPage=5,this.totalPages=0,this.monthlyTotals=[]}ngOnInit(){this.store.select(R).subscribe(e=>{this.yearlyExpenses=e,this.totalPages=Math.ceil(this.yearlyExpenses.length/this.itemsPerPage),this.updatePaginatedExpenses()}),this.fetchYearlyExpenses(),this.fetchTotalAmount(),this.fetchMonthlyTotals()}fetchYearlyExpenses(){this.expService.getTotalAmount().subscribe(e=>{this.yearlyExpenses=e.result,this.totalPages=Math.ceil(this.yearlyExpenses.length/this.itemsPerPage),this.updatePaginatedExpenses()},e=>{console.error("Error fetching yearly expenses:",e)})}fetchTotalAmount(){this.expService.getTotalAmount().subscribe(e=>{this.totalAmount=e.totalAmount},e=>{console.error("Error fetching total amount:",e)})}fetchMonthlyTotals(){this.expService.getTotalAmount().subscribe(e=>{this.monthlyTotals=e.result,this.updatePaginatedExpenses()},e=>{console.error("Error fetching monthly totals:",e)})}filterByYearAndMonth(){this.selectedYear?(this.yearlyExpenses=this.yearlyExpenses.filter(e=>e.year===this.selectedYear),this.selectedMonth&&(this.yearlyExpenses=this.yearlyExpenses.filter(e=>e.month===this.selectedMonth))):this.fetchYearlyExpenses(),this.updatePaginatedExpenses()}updatePaginatedExpenses(){let e=(this.currentPage-1)*this.itemsPerPage,t=e+this.itemsPerPage;this.paginatedExpenses=this.yearlyExpenses.slice(e,t)}goToPage(e){this.currentPage=e,this.updatePaginatedExpenses()}getMonthName(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e-1]}};r.\u0275fac=function(t){return new(t||r)(b(J),b(g))},r.\u0275cmp=F({type:r,selectors:[["app-dashboard"]],decls:21,vars:4,consts:[[1,"container-fluid","mt-3"],[1,"d-flex","justify-content-between"],[1,"w-50","d-flex","gap-2"],["type","number","placeholder","Enter Year",1,"form-control",3,"change","ngModelChange","ngModel"],[1,"table","table-light","table-striped","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],[1,"d-flex","gap-3"],["aria-label","Page navigation"],[1,"pagination","justify-content-end","m-4"],["class","page-item",3,"active",4,"ngFor","ngForOf"],[1,"page-item"],[1,"d-flex","gap-2"],[1,"page-link",3,"click"]],template:function(t,o){t&1&&(i(0,"div",0)(1,"div",1)(2,"h3"),l(3,"Yearly Expenses"),n(),i(4,"div",2)(5,"input",3),U("change",function(){return o.filterByYearAndMonth()}),D("ngModelChange",function(x){return N(o.selectedYear,x)||(o.selectedYear=x),x}),n()()(),i(6,"table",4)(7,"thead")(8,"tr")(9,"th",5),l(10,"Id"),n(),i(11,"th",5),l(12,"Year"),n(),i(13,"th",5),l(14,"Expenses"),n()()(),i(15,"tbody"),A(16,re,7,4,"tr",6),I(17,"td",7),n()(),i(18,"nav",8)(19,"ul",9),A(20,ie,4,3,"li",10),n()()()),t&2&&(h(5),L("ngModel",o.selectedYear),h(11),E("ngForOf",o.paginatedExpenses),h(4),E("ngForOf",k(3,se).constructor(o.totalPages)))},dependencies:[O,W,q,$,H]});let s=r;return s})();var z=a("[Auth] Register User",p()),me=a("[Auth] Register User Success",p()),ge=a("[Auth] Register User Failure",p()),G=a("[Auth] Login User",p()),K=a("[Auth] Login User Success",p()),de=a("[Auth] Login User Failure",p()),Q=a("[Auth] Logout User"),X=a("[Auth] Logout User Success"),xe=a("[Auth] Logout User Failure",p());var P=B("auth"),v=d(P,s=>s.user),ye=d(P,s=>s.loading),be=d(P,s=>s.error);var ve=(()=>{let r=class r{constructor(e,t){this.http=e,this.store=t,this.baseUrl="https://expense-tracker-wxkk.onrender.com/api",this.userSubject=new _(this.getUser()),this.user$=this.userSubject.asObservable(),this.store.pipe(S(v)).subscribe(o=>{this.userSubject.next(o)})}registerUser(e){return this.http.post(`${this.baseUrl}/register`,e)}loginUser(e){return this.http.post(`${this.baseUrl}/login`,e,{withCredentials:!0}).pipe(f(t=>{this.store.dispatch(K({user:t.result}))}))}logoutUser(){return this.http.post(`${this.baseUrl}/logout`,{},{withCredentials:!0}).pipe(f(()=>{this.store.dispatch(X())}))}dispatchRegisterUser(e){this.store.dispatch(z({user:e}))}dispatchLoginUser(e){this.store.dispatch(G({credentials:e}))}dispatchLogoutUser(){this.store.dispatch(Q())}getUserFromStore(){return this.store.pipe(S(v))}getUser(){return localStorage.getItem("user")}};r.\u0275fac=function(t){return new(t||r)(y(V),y(g))},r.\u0275prov=M({token:r,factory:r.\u0275fac,providedIn:"root"});let s=r;return s})();export{z as a,me as b,ge as c,G as d,K as e,de as f,Q as g,X as h,xe as i,ye as j,be as k,ve as l,he as m};
