const HelloController = (app) => {
    app.get('/hello', (req, res) => {
        res.send('Life is good!')
    })
    app.get('/', (req, res) => {
        res.send('Welcome to Full Stack Development!')
    })

    app.get('/add/:a/:b', (req, res) => {
        const A = req.params.a   //method one to assign value
        const B = req.params['b']  //method two to assign value
        const C = A + B
        res.send(`${A} + ${B} = ${C}`)
    })
    app.post('', ()=> {})  //if the server received a post request, need a path adn handler function
    app.delete('', ()=>{}) //if the server received a delete request, need a path and handler function
    app.put('', ()=>{}) //if the server received a put request, need a path and handler function
}
export default HelloController;