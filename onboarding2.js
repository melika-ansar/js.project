const nextPage = setTimeout(()=> window.location.href="onboarding3.html",3000);

if (performance.getEntriesByType("navigation")[0].type === "reload"){
    window.location.href="onboarding1.html"
};

  