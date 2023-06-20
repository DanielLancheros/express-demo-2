const flowers = [
    { type: 'marigold', color: 'orange' },
    { type: 'daisy', color: 'yellow'},
    { type: 'tulip', color: 'red'},
]

export function getFlowers( req, res) {
    res.send(flowers)
}

export function addNewFlower(req , res ) {
    const newFlower = req.body
    flowers.push(newFlower)
    res.status(201).send({ success: true, message: "Flower added." })
}
