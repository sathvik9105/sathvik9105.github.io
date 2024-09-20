class RotatingTriangle {
    constructor(sectionId) {
      this.section = document.getElementById(sectionId);
      this.vertices = this.section.querySelectorAll('.vertex');
      this.init();
    }
  
    init() {
      this.vertices.forEach((vertex) => {
        vertex.addEventListener('mouseover', () => {
          vertex.style.animationPlayState = 'paused';
        });
  
        vertex.addEventListener('mouseleave', () => {
          vertex.style.animationPlayState = 'running';
        });
      });
    }
  }
  
  // Initialize the rotating triangle on the section
  document.addEventListener("DOMContentLoaded", () => {
    const rotatingTriangle = new RotatingTriangle('rotating-triangle-section');
  });
  