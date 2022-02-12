import './style.css'
import './file.scss'
import './test.less'
import './test.styl'
import png from './images/1.png'

const app = document.getElementById('app')
app.innerHTML = `<img src='${png}'></img>`
console.log(png)
console.log('hello world 2')

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = ()=>{
    const promise = import('./lazy')  //圆括号引用，lazy是暴露的函数名
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{})
}

app.appendChild(button)