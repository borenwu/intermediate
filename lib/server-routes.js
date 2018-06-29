

Router.route('/hello', { where: 'server' })
    .get(function () {
        console.log(this.request)
        var response = {
            code: 0,
            msg: 'hello'
        }
        this.response.setHeader('Content-Type', 'application/json');
        this.response.end(JSON.stringify(response));
    })