document.addEventListener("DOMContentLoaded", () => {

    const FORM_SELECTOR = "form";
    const TEAM_SELECTOR = "#team div a img";
    const INFO_ID = "info";


    const form = document.querySelector(FORM_SELECTOR);
    const teamImages = document.querySelectorAll(TEAM_SELECTOR);
    const infoSection = document.getElementById(INFO_ID);

  
    infoSection.style.color = "blue";


    form.addEventListener("submit", (event) => {
        event.preventDefault();
        validateForm(event);
    });

 
    function validateForm(event) {
        const name = event.target.name.value;
        const mobile = event.target.mobile.value;
        const email = event.target.email.value;
        const date = event.target.date.value;
        const time = event.target.time.value;
        const kapper = event.target.kapper.value;

        if (!name || !mobile || !email || !date || !time) {
            alert("Please fill all required fields.");
        } else {
            alert(`Thank you, ${name}! Your appointment is booked.`);
            saveFormData({ name, mobile, email, date, time, kapper });
        }
    }

    function saveFormData(data) {
        localStorage.setItem("appointment", JSON.stringify(data));
    }

    const teamMembers = [...teamImages].map(img => ({
        src: img.src,
        alt: img.alt,
    }));

  
    teamMembers.forEach(member => {
        console.log(`Team member image source: ${member.src}`);
    });

    
    async function fetchData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) throw new Error("Network response was not ok.");
            const data = await response.json();
            displayData(data);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    }

    function displayData(data) {
        const infoSection = document.getElementById("info");
        infoSection.innerHTML += "<h3>Fetched Users:</h3>";
        data.forEach(user => {
            infoSection.innerHTML += `<p>${user.name} - ${user.email}</p>`;
        });
    }


    (function () {
        console.log("IIFE executed!");
    })();

  
    fetchData();
});
