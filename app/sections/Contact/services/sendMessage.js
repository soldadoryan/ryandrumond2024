import { toast } from "react-toastify";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const handleSendMessage = async (data) => {
  const webhookUrl =
    "https://discord.com/api/webhooks/1192110103319543880/hZGFLogvSaX3BAbV6rPzMwPtfC82OlQB_S-MtFNwN6yuuQVnPh-30n69QFjpnNgKyXok";

  console.log(data);
  const embedMessage = {
    content: "@everyone",
    embeds: [
      {
        title: "Novo contato pelo site!",
        description: "Você recebeu um novo contato pelo site ryandrumond.com.",
        color: parseInt("18bcee", 16),
        fields: [
          { name: "-----------", value: "" },
          { name: "Nome", value: data.name, inline: true },
          { name: "Telefone", value: data.phone, inline: true },
          { name: "-----------", value: "" },
          { name: "E-mail", value: data.mail },
          { name: "-----------", value: "" },
          { name: "Mensagem", value: data.message },
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
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(embedMessage),
    });

    if (response.ok) {
      toast("Mensagem enviada com sucesso!", {
        className: ubuntu.className,
      });
    } else {
      toast("❌ Falha ao enviar mensagem!", {
        className: ubuntu.className,
      });
    }
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
  }
};
