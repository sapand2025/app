

  function clickSideBar(){
    let nav=document.getElementById("navbar");
    if(nav.style.visibility=="visible"){
    nav.style.visibility="hidden";
 
    }else {
      nav.style.visibility="visible";
      nav.style.display="flex";
    }
  }

    function handleSubmit(event) {
    event.preventDefault();
    event.target.blur();
  }

  // Scroll animation using Intersection Observer
const skills = document.querySelectorAll('.skillsAnimateFast');


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');   // add class when in view
    } else {
      entry.target.classList.remove('show'); // remove class when out of view
    }
  });
}, {
  threshold: 0.9 // trigger when 20% of the section is visible
});

skills.forEach(skill => observer.observe(skill));


const mySkills = document.querySelectorAll('.skillsAnimateSlow');

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');   // add class when in view
    } else {
      entry.target.classList.remove('show'); // remove class when out of view
    }
  });
}, {
  threshold: 0.9 // trigger when 20% of the section is visible
});
mySkills.forEach(skill => observer2.observe(skill));


const services = document.querySelectorAll('.service');

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');   // animate in
    } else {
      entry.target.classList.remove('show'); // reset when out of view
    }
  });
}, {
  threshold: 0.2 // trigger when 20% is visible
});

services.forEach(section => observer3.observe(section));


const projects = document.querySelectorAll('.projectAnimation');

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');   // animate in
    } else {
      entry.target.classList.remove('show'); // reset when out of view
    }
  });
}, {
  threshold: 0.4 // trigger when 20% is visible
});

projects.forEach(project => observer4.observe(project));


  // Scroll animation using Intersection Observer
const formDiv = document.querySelectorAll('.formDiv');


const observer5 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');   // add class when in view
    } else {
      entry.target.classList.remove('show'); // remove class when out of view
    }
  });
});

formDiv.forEach(form => observer5.observe(form));