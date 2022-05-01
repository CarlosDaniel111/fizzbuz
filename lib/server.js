const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    res.json({
        mission: mission,
        quantity: ExplorerController.getExplorersAmountByMission(mission)
    });
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersUsernameInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    res.json(explorersUsernameInMission);
});

app.get("/v1/fizzbuzz/:number", (req, res) => {
    const number = req.params.number;
    res.json({
        score: number,
        trick: ExplorerController.getFizzbuzzByNumber(number)
    });
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});