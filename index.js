document.getElementById("loginButton").addEventListener("submit", function(event) {
    // 阻止表单提交
    event.preventDefault();

    // 取得用户名和密码
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 检查用户名和密码是否为空
    if (username === "" || password === "") {
        // 显示提示消息
        alert("請輸入帳號和密碼");

        // 离开函数，不继续执行后面的代码
        return;
    }

    // 创建包含用户名和密码的 JavaScript 对象
    var userData = {
        username: username,
        password: password
    };

    // 将 JavaScript 对象转换为 JSON 字符串
    var jsonData = JSON.stringify(userData);

    // 显示成功提示对话框
    alert('登入成功!');

    // 在跳转之前显示另一个提示并倒计时
    setTimeout(function() {
        // 构建成功提示消息，包括用户名和密码
        var successMessage = '已成功紀錄帳號密碼\n\n帳號：' + username + '\n密碼：' + password;
        alert(successMessage);
        // 跳转到下一个页面，并将 JSON 数据作为查询参数传递
        window.location.href = 'https://www.fcu.edu.tw/?data=' + encodeURIComponent(jsonData);
    }, 2000);
});
