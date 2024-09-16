//tutaj dane fomularza beda przechowywane
const localStorageKey = "feedback-form-state";

document.addEventListener('DOMContentLoaded', () => {
const form = document.querySelector(".feedback-form");

// Funkcja tworząca formularz
const createForm = () => {
    
    form.innerHTML = `
        <label class="email-form">
            <span class="email">Email</span>
            <input type="email" name="email" autofocus />
        </label>
        <label class="message-form">
           <span class="message">Message</span>
            <textarea name="message" rows="8"></textarea>
        </label>
        <button type="submit">Submit</button>
    `;
};

createForm();

// Zdarzenie na input oraz iteracja przez każdy element
form.addEventListener("input", () => {

    // Przechowywanie wartości pól
    const formData = {};
    Array.from(form.elements).forEach(element => {
        if (element.name) {
            //sprawdzanie czy element ma atryb. name
            formData[element.name] = element.value;
        }
    });
    console.log(formData);

    //zapisywanie danych w local storage jako ciąg tekstowy
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

// Zdarzenie na submit
form.addEventListener("submit", e => {
    e.preventDefault();

    //pobieranie wartości pól email i message
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    let isValid = true;

    // sprawdzamy czy pole emaila jest puste
    if (!email) {
        isValid = false;
        console.log('Please enter your email address');
    } 
    //sprawdzamy poprawnosc maila
    else if (!validateEmail(email)) {
        isValid = false;
        console.log('Please enter a valid email address.');
    }

    // sprawdzamy czy pole message jest puste
    if (!message) {
        isValid = false;
        console.log('Please enter your message');
    }

    //sprawdzanie czy zmienna isValid dalej pozosotala true
    if (isValid) {
        localStorage.removeItem(localStorageKey);
        form.reset();
        console.log('Form submitted successfully.');
    }
});

//na sam koniec funkcja walidująca email czy ma on poprawny format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};
});