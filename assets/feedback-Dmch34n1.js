const l="feedback-form-state";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".feedback-form");(()=>{e.innerHTML=`
        <label class="email-form">
            <span class="email">Email</span>
            <input type="email" name="email" autofocus />
        </label>
        <label class="message-form">
           <span class="message">Message</span>
            <textarea name="message" rows="8"></textarea>
        </label>
        <button type="submit">Submit</button>
    `})(),e.addEventListener("input",()=>{const s={};Array.from(e.elements).forEach(a=>{a.name&&(s[a.name]=a.value)}),localStorage.setItem(l,JSON.stringify(s))}),e.addEventListener("submit",s=>{s.preventDefault();const a=e.querySelector('input[name="email"]').value,r=e.querySelector('textarea[name="message"]').value;let t=!0;a?o(a)||(t=!1,console.log("Please enter a valid email address.")):(t=!1,console.log("Please enter your email address")),r||(t=!1,console.log("Please enter your message")),t&&(localStorage.removeItem(l),e.reset(),console.log("Form submitted successfully."))});function o(s){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)}});
//# sourceMappingURL=feedback-Dmch34n1.js.map
