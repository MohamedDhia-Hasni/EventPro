document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonial = 0;
  
    // Show initial testimonial
    showTestimonial(currentTestimonial);
  
    // Next testimonial
    nextBtn.addEventListener('click', function() {
      currentTestimonial++;
      if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
      }
      showTestimonial(currentTestimonial);
    });
  
    // Previous testimonial
    prevBtn.addEventListener('click', function() {
      currentTestimonial--;
      if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
      }
      showTestimonial(currentTestimonial);
    });
  
    // Auto-rotate testimonials every 5 seconds
    setInterval(function() {
      currentTestimonial++;
      if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
      }
      showTestimonial(currentTestimonial);
    }, 5000);
  
    function showTestimonial(index) {
      testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
      });
      testimonials[index].classList.add('active');
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });


  //modal js
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModal');
  const closeModalBtn = document.getElementById('closeModal');
  const form = document.getElementById('quoteForm');
  const thankYou = document.getElementById('thankYouMessage');

  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    thankYou.style.display = 'none';
    form.style.display = 'block';
    form.reset();
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      thankYou.style.display = 'none';
      form.style.display = 'block';
      form.reset();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    thankYou.style.display = 'block';
    setTimeout(() => {
      modal.style.display = 'none';
      thankYou.style.display = 'none';
      form.style.display = 'block';
      form.reset();
    }, 3000);
  });
