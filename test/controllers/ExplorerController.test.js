const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Unit Test for ExplorerController", () => {
    test("1. Get explorers by mission", () => {
        const explorers = ExplorerController.getExplorersByMission("java");
        expect(explorers[0].name).toBe("Woopa6");
    });
    test("2. Get explorers usernames by mission", () => {
        const usernames = ExplorerController.getExplorersUsernamesByMission("java");
        expect(usernames[0]).toBe("ajolonauta6");
    });
    test("3. Get explorers amount by mission", () => {
        const amountExplorersByMission = ExplorerController.getExplorersAmountByMission("java");
        expect(amountExplorersByMission).toBe(5);
    });
});