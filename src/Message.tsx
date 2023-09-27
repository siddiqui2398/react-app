//PascalCasing
function Message () {
    //JSX: JavaScrip XML ~ Writing html in the middle of js
    const name = "Abdullah"
    if(name) {
        return <h1>Hello {name}</h1>;
    } else {
        return <h1>Hello World</h1>;
    }
}

export default Message;