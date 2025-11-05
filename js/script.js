// Basic interactivity: mobile menu, newsletter, volunteer form, donations
document.getElementById('year')?.textContent = new Date().getFullYear();
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navList');
if(toggle){
  toggle.addEventListener('click', ()=> {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    if(nav) nav.style.display = open ? 'none' : 'flex';
  });
}

// Newsletter form
const nl = document.getElementById('newsletterForm');
if(nl){
  nl.addEventListener('submit', e=>{
    e.preventDefault();
    const msg = document.getElementById('newsletterMessage');
    msg.textContent = 'Obrigado! E-mail registrado com sucesso.';
    nl.reset();
  });
}

// Volunteer form
const vol = document.getElementById('volForm');
if(vol){
  vol.addEventListener('submit', e=>{
    e.preventDefault();
    const msg = document.getElementById('volMessage');
    msg.textContent = 'Inscrição recebida — entraremos em contato por e-mail.';
    vol.reset();
  });
}

// Donations simulation
let progress = 0;
const progressBar = document.getElementById('progressBar');
const goal = 10000; // simulated goal
const donbtn = document.getElementById('donBtn');
if(donbtn){
  donbtn.addEventListener('click', ()=>{
    const val = Number(document.getElementById('donValue').value) || 0;
    progress = Math.min(goal, progress + val);
    const pct = Math.round((progress/goal)*100);
    progressBar.style.width = pct + '%';
    progressBar.textContent = pct + '%';
    document.getElementById('donMessage').textContent = 'Obrigado pela doação de R$ '+val.toFixed(2);
  });
}

