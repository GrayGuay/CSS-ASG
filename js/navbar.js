//Pages Navbar
document.addEventListener("DOMContentLoaded", () => {
    const pages = [
        { name: "Home", url: "Homepage.html" },
        { name: "Colosseum", url: "colosseum.html" },
        { name: "Chichén Itzá", url: "chichen.html" },
        { name: "Christ the Redeemer", url: "christ.html" },
        { name: "Great Wall of China", url: "greatwallofchina.html" },
        { name: "Machu Picchu", url: "machu-picchu.html" },
        { name: "Petra", url: "petra.html" },
        { name: "Taj Mahal", url: "tahj.html" }
    ];

    const navbarPagesContainer = document.getElementById("navbar-pages-placeholder");
    if (!navbarPagesContainer) return;

    let navbarHTML = `<nav class="navbar"><div class="nav-container"><ul class="nav-links">`;

    const currentPage = window.location.pathname.split("/").pop();

    pages.forEach(page => {
        const activeClass = (page.url === currentPage) ? "active" : "";
        navbarHTML += `<li><a href="${page.url}" class="${activeClass}">${page.name}</a></li>`;
    });

    navbarHTML += `</ul></div></nav>`;
    navbarPagesContainer.innerHTML = navbarHTML;
});