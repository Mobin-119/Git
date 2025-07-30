function showMessage(message, color) {
    var errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
    errorDiv.style.color = color;
    errorDiv.style.opacity = '0';
    errorDiv.style.transition = 'opacity 0.5s';
    setTimeout(function() {
        errorDiv.style.opacity = '1';
    }, 50);
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    if (!username || !password) {
        showMessage('لطفا نام کاربری و رمز عبور را وارد کنید.', '#d8000c');
        return;
    }
    // Simple demo: username=admin, password=1234
    if (username === 'admin' && password === '1234') {
        showMessage('ورود موفقیت آمیز بود!', 'green');
    } else {
        showMessage('نام کاربری یا رمز عبور اشتباه است.', '#d8000c');
    }
});

