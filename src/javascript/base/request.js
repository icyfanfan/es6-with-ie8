import 'whatwg-fetch';
/**
 * @method request 请求
 * @param {string}                  url                 请求路径
 * @param {object}                  options             请求选项
 * @param {boolean=true}            options.data        请求数据
 * @param {string}                  options.method      请求方式
 */
const request = function (url, options = {}) {
    const opt = {
        credentials: 'same-origin', // send cookie
        headers: {
            Accept: 'application/json',
        },
    };

    const isJSON = typeof options.data === 'object';
    isJSON && (opt.headers['Content-Type'] = 'application/json');

    opt.method = (options.method || 'GET').toUpperCase();

    if (options.data && isJSON) {
        switch (opt.method) {
            case 'GET':
                url += '?' + serialize(options.data);
                break;
            case 'POST':
            case 'PUT':
            case 'DELETE':
                opt.body = JSON.stringify(options.data);
                break;
            default:
                throw new Error('No `method` when request!');
        }
    } else
        opt.body = options.data;

    return new Promise((resolve, reject) => {
        fetch(url, opt)
            .then((res) => {
                if (res.ok)
                    return res.json();
                else {
                    console.log("Looks like the response wasn't perfect, got status", res.status);
                    throw new Error(res.status);
                }
            }).then((json) => {
                json.code === 200 ? resolve(json) : reject(json);
            }).catch((err) => {
                console.error('Request failed:', err);
            });
    });
};

const serialize = function (obj) {
    return Object.keys(obj).map((name) =>
        `${name}=${obj[name]}`).join('&');
};

export default {
    /**
     * @method request GET请求
     * @param {string}                  url                 请求路径
     * @param {var}                     data                请求数据
     */
    get(url, data = {}, timestamp = true) {
        if (timestamp) {
            data = data || {};
            data.timestamp = +new Date();
        }
        return request(url, { method: 'GET', data });
    },
    /**
     * @method request POST请求
     * @param {string}                  url                 请求路径
     * @param {var}                     data                请求数据
     */
    post(url, data) {
        return request(url, { method: 'POST', data });
    },
    /**
     * @method request PUT请求
     * @param {string}                  url                 请求路径
     * @param {var}                     data                请求数据
     */
    put(url, data) {
        return request(url, { method: 'PUT', data });
    },
    /**
     * @method request DEL请求
     * @param {string}                  url                 请求路径
     * @param {var}                     data                请求数据
     */
    del(url, data) {
        return request(url, { method: 'DELETE', data });
    },
};
