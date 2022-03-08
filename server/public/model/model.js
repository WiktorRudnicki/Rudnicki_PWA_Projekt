let cats = require('../cats.json');

async function getCats(req, res) {
    const results = cats;
    res.status(200).json(results);
    return results;
}

async function deleteCat(req, res){
    cats = cats.filter((cat)=> cat.id != req.params.id);
    const results = cats;
    res.status(200).json(results);
    console.log(results);
}

async function addCat(req, res){
    let id = 0;
    cats.forEach((el)=> {
        if(el.id>id) id = el.id;
        console.log(id);
    })
    const name=req.body.name;
    const image=req.body.image;
    const description=req.body.description;
    const lat=req.body.lat;
    const long=req.body.long;
    cats.push({
        id: id+1,
        name: name,
        image: image,
        description: description,
        lat: lat,
        long: long,
    })
    
}

module.exports = {getCats, deleteCat, addCat}