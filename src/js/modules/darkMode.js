const dark = () => {
  const switcher = document.querySelector('.navbar__switcher');
  const span = document.querySelector('.span-switcher');

  function change() {
    if (span.innerHTML.match(/\bdark\b/))  {
      span.innerHTML = "Switch light";
    } else {
      span.innerHTML = "Switch dark";
    }

  }
  function darkMode() {
    const body = document.body;
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    
    localStorage.setItem('darkmode', !wasDarkmode);
    body.classList.toggle('dark-mode', !wasDarkmode); 
    change();
  }

  switcher.addEventListener('click', darkMode);

  

  //document.addEventListener('DOMContentLoaded', onload);
};

export default dark; 