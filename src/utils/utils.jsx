export function scrollToSection(sectionId, offset) {
  const section = document.getElementById(sectionId);
  const scrollPosition = section.offsetTop - offset;

  window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
  });
}