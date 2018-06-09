let someArray = [
    {id: 1, val: 'This'},
    {id: 2, val: 'is'},
    {id: 3, val: 'a'},
    {id: 4, val: 'thing'},
    {id: 5, val: 'I'},
    {id: 6, val: 'think.'},
];

module.exports = {
    create: (req, res) => {
        let arrLength = someArray.length
        someArray.push({id: arrLength, val: req.body.val});
        res.status(200).send(someArray);
    },

    read: (req, res) => {
        res.status(200).send(someArray);
    },

    update: (req, res) => {
        const updateVal = req.params.oldVal;
        const updateIndex = someArray.findIndex( x => x.val == updateVal );
        const keepId = someArray[updateIndex].id;

        someArray[ updateIndex ] = {
            id: keepId,
            val: req.params.newVal
        };

        res.status(200).send(someArray);
    },

    delete: (req,res) => {
        const deleteVal = req.params.val;
        const deleteIndex = someArray.findIndex(x => x.val == deleteVal);
        someArray.splice(deleteIndex, 1);
        res.status(200).send(someArray);
    }
};