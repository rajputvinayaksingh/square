player.onChat("rectangle", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.setItem(ORANGE_WOOL, 1, 1)
            agent.move(FORWARD, 1)
        }
        agent.turn(LEFT_TURN)
    }
    agent.move(UP, 1)
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.turn(RIGHT_TURN)
})
