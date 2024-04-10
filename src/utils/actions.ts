"use server";

interface State {
  success?: boolean;
  message?: string;
}

export async function submitInquiry(prevState: State, formData: FormData) {
  const headers = new Headers([
    ["Content-Type", "application/json"],
    ["Authorization", "Bearer " + process.env.SENDGRID_API_KEY],
  ]);

  const msgToManager = {
    personalizations: [
      {
        to: [
          {
            email: "contact@sandojuku.com",
          },
        ],
      },
    ],
    subject: "フォームからの問い合わせがありました",
    from: {
      email: "contact@sandojuku.com",
    },
    content: [
      {
        type: "text/plain",
        value:
          "以下の内容で問い合わせがありました。\r\n" +
          "\r\n" +
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\r\n" +
          "\r\n" +
          "【お名前】\r\n" +
          String(formData.get("name")) +
          "\r\n" +
          "\r\n" +
          "【メールアドレス】\r\n" +
          String(formData.get("email")) +
          "\r\n" +
          "\r\n" +
          "【問い合わせ内容】\r\n" +
          String(formData.get("content")) +
          "\r\n" +
          "\r\n" +
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\r\n",
      },
    ],
  };

  const msgToUser = {
    personalizations: [
      {
        to: [
          {
            email: formData.get("email"),
          },
        ],
      },
    ],
    subject: "お問い合わせを受け付けました。",
    from: {
      email: "contact@sandojuku.com",
    },
    content: [
      {
        type: "text/plain",
        value:
          "※このメールはシステムからの自動返信です。\r\n" +
          "\r\n" +
          "以下の内容のお問い合わせを受け付けました。\r\n" +
          "尚、ご返事までにお時間をいただく場合もございます。\r\n" +
          "あらかじめご了承ください。\r\n" +
          "\r\n" +
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\r\n" +
          "\r\n" +
          String(formData.get("content")) +
          "\r\n" +
          "\r\n" +
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\r\n" +
          "\r\n" +
          "このメールはHPからお問い合わせいただいた方へ自動送信しております。\r\n" +
          "お心当たりのない方は、お手数ですがこのメールを破棄してください。\r\n" +
          "\r\n" +
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\r\n" +
          "■ 山藤塾 ■  https://www.sandojuku.com/ \r\n" +
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\r\n",
      },
    ],
  };

  try {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(msgToManager),
    });
    await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(msgToUser),
    });

    if (response.ok) {
      return {
        success: true,
        message: "お問い合わせを受け付けました。",
      };
    } else {
      return {
        success: false,
        message: "お問い合わせの送信に失敗しました。",
      };
    }
  } catch (e) {
    return {
      success: false,
      message: "お問い合わせの送信に失敗しました。",
    };
  }
}
