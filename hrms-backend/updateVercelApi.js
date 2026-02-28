const https = require('https');

const data = JSON.stringify({
    rootDirectory: 'hrms-backend'
});

const options = {
    hostname: 'api.vercel.com',
    port: 443,
    path: '/v9/projects/hrms-backend?teamId=team_D7jfzMIqp5iip5Vri8kVrhIv',
    method: 'PATCH',
    headers: {
        'Authorization': `Bearer vca_4UsibGEoth7RFkclBmBpk6kEzWg1sjMfI0wgFqdz4Jli3WiOBt1O0r73`,
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', d => {
        process.stdout.write(d);
    });
});

req.on('error', error => {
    console.error(error);
});

req.write(data);
req.end();
