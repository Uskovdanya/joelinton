const onload = () => {
  document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
};

export default onload; 