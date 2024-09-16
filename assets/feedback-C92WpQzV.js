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
    `})(),e.addEventListener("input",()=>{const a={};Array.from(e.elements).forEach(s=>{s.name&&(a[s.name]=s.value)}),console.log(a),localStorage.setItem(l,JSON.stringify(a))}),e.addEventListener("submit",a=>{a.preventDefault();const s=e.querySelector('input[name="email"]').value,r=e.querySelector('textarea[name="message"]').value;let t=!0;s?o(s)||(t=!1,console.log("Please enter a valid email address.")):(t=!1,console.log("Please enter your email address")),r||(t=!1,console.log("Please enter your message")),t&&(localStorage.removeItem(l),e.reset(),console.log("Form submitted successfully."))});function o(a){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)}});
//# sourceMappingURL=feedback-C92WpQzV.js.map
