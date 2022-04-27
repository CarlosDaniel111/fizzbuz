class ExplorerService{
    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission)  {
        const explorersInMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInMission.length;
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersUsernames = explorers.filter((explorer) => explorer.mission === mission);
        return explorersUsernames.map((explorer) => explorer.githubUsername);
    }
}
module.exports = ExplorerService;