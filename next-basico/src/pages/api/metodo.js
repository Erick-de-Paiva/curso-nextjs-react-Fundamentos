const metodo = (req, res) => {
    if(req.method === "GET") {
        res.status(200).json({ nome: "Nome01" })
    } else {
        res.status(200).json({ nome: "Nome02" })
    }
}

export default metodo
