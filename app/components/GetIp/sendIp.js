export const handleSendIp = async (ip) => {
  const webhookUrl =
    "https://discord.com/api/webhooks/1199054840064643214/voi_hD5DFZP5dXwdEUzEejhkPJPtuD1OKeP4D7Sk3Yl9FTQ9fOYElFJIGWmpa4G4sCrt";

  const embedMessage = {
    content: "@everyone",
    embeds: [
      {
        title: "Novo acesso!",
        description: "Um novo acesso foi registrado.",
        color: parseInt("18bcee", 16),
        fields: [
          { name: "-----------", value: "" },
          { name: "IP de acesso", value: ip },
        ],
        thumbnail: {
          url: "https://media.discordapp.net/attachments/1192110717126582273/1192110746532847768/Captura_de_tela_2024-01-03_101002.png?ex=65a7e2a6&is=65956da6&hm=ee63b56718dcfb776dfd3c319354e592ce5411d1f1e7f5b0f4c9d63193f3a78b&=&format=webp&quality=lossless&width=498&height=469",
        },
        author: {
          name: "ryandrumond.com",
          url: "https://ryandrumond.com",
          icon_url:
            "https://media.discordapp.net/attachments/1192110717126582273/1192110746532847768/Captura_de_tela_2024-01-03_101002.png?ex=65a7e2a6&is=65956da6&hm=ee63b56718dcfb776dfd3c319354e592ce5411d1f1e7f5b0f4c9d63193f3a78b&=&format=webp&quality=lossless&width=498&height=469",
        },
      },
    ],
  };

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(embedMessage),
    });
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
  }
};
