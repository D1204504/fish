const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// 解析请求体中的 JSON 数据
app.use(bodyParser.json());

// 记录登录信息
app.post('/record', (req, res) => {
    const userData = req.body;
    console.log('Received login information:', userData);
    res.json({ message: 'Login information received and recorded successfully!' });
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
