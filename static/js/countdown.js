function updateCountdown() {
    const targetDate = new Date('2026-11-19T00:00:00Z');
    const now = new Date();
    let diff = targetDate - now;

    if (diff < 0) {
        document.getElementById('countdown').textContent = "Countdown finished!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    const seconds = Math.floor(diff / 1000);

    document.getElementById('countdown').textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
