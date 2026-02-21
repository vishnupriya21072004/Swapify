/* ================================
   SWAPIFY MAIN SCRIPT
   ================================ */

import { supabase } from "./supabase.js";


/* ---------- REGISTER USER ---------- */
async function validateRegister(){

    const inputs = document.querySelectorAll(".auth-container input");

    if(inputs.length < 5){
        alert("Form not loaded properly");
        return;
    }

    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const phone = inputs[2].value.trim();
    const password = inputs[3].value;
    const confirm = inputs[4].value;

    if(name === "" || email === "" || phone === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    if(password !== confirm){
        alert("Passwords do not match");
        return;
    }

    const { error } = await supabase
        .from("users")
        .insert([{ name, email, phone, password }]);

    if(error){
        alert("Error saving user");
        console.log(error);
    }else{
        alert("Registration successful!");
        window.location.href = "login.html";
    }
}


/* ---------- LOGIN USER ---------- */
async function validateLogin(){

    const inputs = document.querySelectorAll(".auth-container input");

    const email = inputs[0].value.trim();
    const password = inputs[1].value.trim();

    if(email === "" || password === ""){
        alert("Enter email and password");
        return;
    }

   const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .single();

console.log("Data:", data);
console.log("Error:", error);

if(data){
    alert("Login successful!");
    localStorage.setItem("user", JSON.stringify(data));
    window.location.href = "index.html";
}else{
    alert("Invalid email or password");
}

    if(data){
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify(data));
        window.location.href = "index.html";
    }else{
        alert("Invalid email or password");
        console.log(error);
    }
}


/* ---------- SEARCH SKILLS ---------- */
function searchSkills(){
    const input = document.getElementById("searchBox")?.value.toLowerCase() || "";
    const cards = document.querySelectorAll(".skill-card");

    cards.forEach(card=>{
        if(card.textContent.toLowerCase().includes(input)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }
    });
}


/* ---------- FILTER SKILLS ---------- */
function filterSkills(){
    const category = document.getElementById("filterBox")?.value || "all";
    const cards = document.querySelectorAll(".skill-card");

    cards.forEach(card=>{
        if(category === "all" || card.dataset.category === category){
            card.style.display="block";
        }else{
            card.style.display="none";
        }
    });
}


/* ---------- SORT SKILLS ---------- */
function sortSkills(){
    const container = document.getElementById("skillsList");
    if(!container) return;

    const cards = Array.from(container.children);
    cards.sort((a,b)=> a.textContent.localeCompare(b.textContent));
    cards.forEach(card=>container.appendChild(card));
}


/* ---------- LOAD SKILLS FROM DATABASE ---------- */
async function loadSkills(){

    const container = document.getElementById("skillsList");
    if(!container) return;

    const { data, error } = await supabase
        .from("skills")
        .select("*");

    if(error){
        console.log(error);
        return;
    }

    container.innerHTML = "";

    data.forEach(skill=>{
        const div = document.createElement("div");
        div.className = "skill-card";
        div.dataset.category = skill.category || "general";

        div.innerHTML = `
            <h3>${skill.skill_name}</h3>
            <p>${skill.description || ""}</p>
        `;

        container.appendChild(div);
    });
}


/* ---------- AUTO LOAD SKILLS IF PAGE HAS LIST ---------- */
window.addEventListener("DOMContentLoaded", loadSkills);


/* ---------- EXPOSE FUNCTIONS TO HTML ---------- */
window.validateRegister = validateRegister;
window.validateLogin = validateLogin;
window.searchSkills = searchSkills;
window.filterSkills = filterSkills;
window.sortSkills = sortSkills;
