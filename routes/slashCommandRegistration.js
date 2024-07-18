const {
  ApplicationCommandType,
  ContextMenuCommandBuilder,
  SlashCommandBuilder,
  SlashCommandIntegerOption,
} = require("discord.js");
const logger = require("../utils/logger");

exports.run = async (client) => {
  try {
    logger.info("Registering commands...");

    // 슬래시 명령어 등록
    const slashCommands = [
      new SlashCommandBuilder()
        .setName("도움말")
        .setDescription("로아유봇에 대한 도움말을 확인합니다."),
      new SlashCommandBuilder()
        .setName("낚시효율")
        .setDescription("낚시 효율을 계산합니다."),
      new SlashCommandBuilder()
        .setName("경매")
        .setDescription("경매 손익을 계산합니다.")
        .addIntegerOption(
          new SlashCommandIntegerOption()
            .setName("가격")
            .setDescription("경매 가격을 입력해주세요.")
            .setRequired(true)
        ),
      new SlashCommandBuilder()
        .setName("수수료")
        .setDescription("거래 수수료를 계산합니다.")
        .addIntegerOption(
          new SlashCommandIntegerOption()
            .setName("가격")
            .setDescription("상대방이 받을 가격을 입력해주세요.")
            .setRequired(true)
        ),
    ];

    await client.application.commands.set([
      ...slashCommands.map((command) => command.toJSON()),
    ]);

    logger.info("Commands registered successfully!");
  } catch (error) {
    logger.error("Error registering commands:", error);
  }
};
