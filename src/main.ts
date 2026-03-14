import { world } from "@minecraft/server";
import { chalk } from "mc-chalk";

world.afterEvents.chatSend.subscribe((ev) => {
    const { message, sender } = ev;

    world.sendMessage(`${sender.name}: ${chalk.italic.red(message)}`);
});