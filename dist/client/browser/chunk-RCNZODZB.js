import{G as p,J as a,Oa as i,ra as o}from"./chunk-W3RCWQTX.js";var n=t=>t.expense,h=i(n,t=>t.expenses),c=i(n,t=>t.loading),d=i(n,t=>t.error);var m=(()=>{let r=class r{constructor(e){this.http=e,this.apiUrl="https://expense-tracker-wxkk.onrender.com/expense"}getExpenses(e,s){return this.http.get(`${this.apiUrl}/get`,{withCredentials:!0})}getExpenseById(e){return this.http.get(`${this.apiUrl}/get/${e}`,{withCredentials:!0})}addExpense(e){return this.http.post(`${this.apiUrl}/add`,e,{withCredentials:!0})}updateExpense(e,s){return this.http.put(`${this.apiUrl}/update/${e}`,s,{withCredentials:!0})}deleteExpense(e){return this.http.delete(`${this.apiUrl}/delete/${e}`,{withCredentials:!0})}getAllMasters(){return this.http.get(`${this.apiUrl}/get-master`,{withCredentials:!0})}getTotalAmount(){return this.http.get(`${this.apiUrl}/total`,{withCredentials:!0})}};r.\u0275fac=function(s){return new(s||r)(a(o))},r.\u0275prov=p({token:r,factory:r.\u0275fac,providedIn:"root"});let t=r;return t})();export{h as a,m as b};