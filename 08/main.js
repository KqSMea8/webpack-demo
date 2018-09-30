document.querySelector('div').innerHTML = '<h1 style="color: hotpink; text-align: center"> Hello World !!! </h1>'
if(__DEV__) {
    document.querySelector('div').innerHTML = new Date()
}