//header on load animation
window.addEventListener('DOMContentLoaded', event => {
    const heroItems = document.querySelectorAll('.hero__item');   
    const servicesCards = document.querySelectorAll('.services__card');   
    const portfolioItems = document.querySelectorAll('.portfolio__item_animation');
    const timelineItems = document.querySelectorAll('.timeline__item');
    
    //animation on scroll
    const handleIntersection = (entries, observer) => {
    entries.forEach((entrie) => {
    if(entrie.isIntersecting){
        entrie.target.classList.add('animate-me');
        console.log(entrie.target)
    } else {
    // entrie.target.classList.remove('animate-me');
    }
    });
    }
    
    const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '500px 0px 100px 0px',
    threshold: .7,
    });
    
    
    //setting animations
    heroItems.forEach(item=>{
    observer.observe(item);
    })
    servicesCards.forEach(item=>{
    observer.observe(item);
    })
    portfolioItems.forEach(item=>{
    observer.observe(item);
    })
    timelineItems.forEach(item=>{
    observer.observe(item);
    })
})
