module.exports = {
    
    getInventory: (req, res) => {
        req.app.get('db').get_inventory()
        .then((inventory) => {
            res.status(200).json(inventory)
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
    }

}