document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var errorDiv = document.getElementById('error');
    if (!username || !password) {
        errorDiv.textContent = 'لطفا نام کاربری و رمز عبور را وارد کنید.';
        errorDiv.style.color = '#d8000c';
        return;
    }
    // Simple demo: username=admin, password=1234
    if (username === 'admin' && password === '1234') {
        errorDiv.style.color = 'green';
        errorDiv.textContent = 'ورود موفقیت آمیز بود!';
    } else {
        errorDiv.style.color = '#d8000c';
        errorDiv.textContent = 'نام کاربری یا رمز عبور اشتباه است.';
    }
});
