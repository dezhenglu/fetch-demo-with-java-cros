import { get } from './get.js'
import { post } from './post.js'

// 下面这个接口使用spring boot 实现的cros
export function getHelloWolrd(){
    var result = get('http://localhost:8888/greeting?name=' + 'ludzh')
    result.then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    })
}

export function getData() {
    // '/api/1' 获取字符串
    var result = get('/api/1')

    result.then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    })

    // '/api/2' 获取json
    var result1 = get('/api/2')

    result1.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}

export function postData() {
    // '/api/post' 提交数据
    var result = post('/api/post', {
        a: 100,
        b: 200
    })

    result.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}