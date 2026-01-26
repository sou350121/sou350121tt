(function () {
  try {
    var savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') document.body.classList.add('dark-theme');

    var savedLang = localStorage.getItem('lang') || 'en';
    var lang = (savedLang === 'zh') ? 'zh' : 'en';

    var en = document.getElementById('content-en');
    var zh = document.getElementById('content-zh');
    if (en && zh) {
      en.classList.toggle('active', lang === 'en');
      zh.classList.toggle('active', lang === 'zh');
    }

    // Optional: allow pages to react (e.g., rerender boards)
    if (typeof window.onLangChanged === 'function') {
      window.onLangChanged(lang);
    }
  } catch (e) {
    // No-op: keep default rendering if storage is unavailable
  }
})();

