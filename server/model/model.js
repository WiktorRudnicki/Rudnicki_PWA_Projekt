let cats = require('../cats.json');

async function getCats(req, res) {
    const results = cats;
    res.status(200).json(results);
    return results;
}

async function deleteCat(req, res){
    cats = cats.filter((cat)=> cat.id===req.params.id);
    const results = cats;
    res.status(200).json(results);
}

async function addCat(req, res){
    let id = 0;
    cats.foreach((el)=> {
        if(el.id>id) id = el.id;
    })
    const name=req.body.name;
    const image=req.body.image;
    const description=req.body.description;
    const gps=req.body.gps;
    cats.push({
        id: id+1,
        name: name,
        image: image,
        description: description,
        gps: gps,
    })
    
}

module.exports = {getCats, deleteCat, addCat}