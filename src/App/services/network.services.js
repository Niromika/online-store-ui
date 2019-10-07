import cookie from 'react-cookies';

class Network {

    getHeaders(customHeaders) {
        let headers = {};
        if(this.getToken()) {
            headers.Authorization = this.getToken();
        }
        for(let prop in customHeaders) {
            headers[prop] =customHeaders[prop];
        }
        return headers;
    }

    getToken() {
        return cookie.load('user');
    }

    send(method, url, data, headers) {
        return fetch('http://localhost:4000/api' + url, {
           method: method,
           body: JSON.stringify(data),
           headers: this.getHeaders(headers)
        });
    }

    sendMultipart(method, url, data) {
        return fetch('http://localhost:4000/api' + url, {
           method: method,
           body: data,
           headers: this.getHeaders()
        });   
    }
}

export default Network;