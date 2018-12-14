module.exports = {
    
    getInventory: (req, res) => {
        req.app.get('db').get_inventory()
        .then((inventory) => {
            res.status(200).json(inventory)
        })
        .catch(err => console.log(err))
    },

    getProduct: (req, res) => {
        req.app.get('db').get_product(req.params)
        .then((product) => {
            res.status(200).json(product)
        })
        .catch(err => console.log(err))
    },

    addProduct: (req, res) => {
        req.app.get('db').add_product(req.body)
        .then(() => {
            res.status(200)
        })
        .catch(err => console.log(err))
    },

    deleteProduct: (req, res) => {
        req.app.get('db').delete_product(req.params.id)
        .then(() => {
            res.status(200)
        })
        .catch(err => console.log(err))
    },

    editProduct: (req, res) => {
        req.app.get('db').edit_product([req.params.id, req.body.name, req.body.price, req.body.image_url])
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
    }

}