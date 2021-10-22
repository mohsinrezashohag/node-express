const express = require("express")
var cors = require('cors')



const app = express();
app.use(cors())
app.use(express.json())




port = 5000; //process.env.PORT || 5000;



const users = [
    { id: 0, name: "John Snow", phone: 0189273284683, job: "software engineer" },
    { id: 1, name: "Tomas Shelbi", phone: 4444525546467469, job: "software engineer" },
    { id: 2, name: "Lincon", phone: 0189273284683, job: "Network engineer" },
    { id: 3, name: "Scofield", phone: 5456546464, job: "AWS engineer" },
    { id: 4, name: "Sucree", phone: 0189273284683, job: "Senior engineer" },


]



app.get('/users', (req, res) => {

    // query will return a object
    const searchText = req.query.search;

    if (searchText) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(searchText))
        res.send(searchResult)
    }

    res.send(users)

})




// getting from the front part
// app Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})



// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})


app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("Arreh fazli amm")

})

app.get("/fruitrs", (req, res) => {
    res.send(['Aaam', 'jam', 'lichu'])
})

app.get('/', (req, res) => {
    res.send("Hello !! wow i'm learning node !! Exited yeahhhhs")
})


app.listen(port, () => {
    console.log("listening port", port);
})