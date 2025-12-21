document.addEventListener('DOMContentLoaded', () => {
    // --- 1. THEME TOGGLE LOGIC ---
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');

    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    icon.className = currentTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let nextTheme = theme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
        icon.className = nextTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
    });

    // --- 2. SCROLL REVEAL ANIMATION ---
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animates all sections and cards on scroll
    const scrollElements = document.querySelectorAll('.glass-card, .bento-item, .section-heading');
    scrollElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
});

// --- 3. LEETCODE API INTEGRATION ---
async function fetchLeetCodeStats(username) {
    try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        const data = await response.json();

        if (data.status === 'success') {
            // Update Numbers
            document.getElementById('lc-total').innerText = data.totalSolved;
            document.getElementById('lc-easy').innerText = data.easySolved;
            document.getElementById('lc-med').innerText = data.mediumSolved;
            document.getElementById('lc-hard').innerText = data.hardSolved;

            // Update Progress Bars (assuming standard target of 200/300/100 or adjust as needed)
            document.getElementById('lc-easy-bar').style.width = `${(data.easySolved / data.totalEasy) * 100}%`;
            document.getElementById('lc-med-bar').style.width = `${(data.mediumSolved / data.totalMedium) * 100}%`;
            document.getElementById('lc-hard-bar').style.width = `${(data.hardSolved / data.totalHard) * 100}%`;

            // Update Circular Ring
            const circle = document.getElementById('lc-progress-circle');
            const circumference = 326.7;
            const percent = (data.totalSolved / data.totalQuestions) * 100;
            const offset = circumference - (percent / 100 * circumference);
            circle.style.strokeDashoffset = offset;
        }
    } catch (error) {
        console.error("LeetCode API fail:", error);
    }
}

fetchLeetCodeStats('shammykr');