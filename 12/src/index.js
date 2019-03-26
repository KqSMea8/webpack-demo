
const createH1Dom = (name) => {
    const dom = document.createElement('h1');
    dom.innerText = 'h1:' + `${name}`
    return dom
}
export default createH1Dom
