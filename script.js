// Minimal enhancement: mark the nav link for the section currently in view
// with aria-current="true" for sighted and screen-reader users. Degrades
// silently if IntersectionObserver isn't available.
(function () {
  if (!('IntersectionObserver' in window)) return;

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.nav-links a[href^="#"]')
  );
  if (!navLinks.length) return;

  var linkByHash = {};
  navLinks.forEach(function (link) {
    linkByHash[link.getAttribute('href').slice(1)] = link;
  });

  var sections = Object.keys(linkByHash)
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var link = linkByHash[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.removeAttribute('aria-current'); });
          link.setAttribute('aria-current', 'true');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(function (section) { observer.observe(section); });
})();
