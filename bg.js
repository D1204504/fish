function extractInputData(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // 获取用户名和密码输入框的值
    const username = doc.getElementById('username').value;
    const password = doc.getElementById('password').value;

    // 将用户名和密码作为数组返回
    return [username, password];
}
