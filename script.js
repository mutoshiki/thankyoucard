const CARD_COUNT = 6;
const QR_URL = "https://www.ebay.com/myb/PurchaseHistory";
const QR_PNG = "assets/qr_purchase_history.png";
const QR_CAPTION = "Scan to open your eBay Purchase History";

const cardData = {
  title: "Thank you for your purchase!",
  paragraphs: [
    ["I carefully packed your item and hope it arrives safely."],
    [
      "Your feedback on eBay would be greatly appreciated.",
      "Please scan the QR code below and open your Purchase History."
    ],
    [
      "If there is any issue with your order, please contact me through eBay Messages.",
      "I will be happy to help."
    ],
    [
      "If you are looking for something specific, please feel free to contact me through eBay Messages."
    ],
    ["Best regards,", "Toshiki"]
  ]
};

function appendLines(paragraph, lines) {
  lines.forEach((line, index) => {
    if (index > 0) {
      paragraph.appendChild(document.createElement("br"));
    }
    paragraph.appendChild(document.createTextNode(line));
  });
}

function buildCard(template, index) {
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector(".card");
  const title = fragment.querySelector(".card-title");
  const message = fragment.querySelector(".card-message");
  const qrLink = fragment.querySelector(".qr-link");
  const qrImage = fragment.querySelector(".qr-image");
  const qrCaption = fragment.querySelector(".qr-caption");

  card.setAttribute("aria-label", `Thank-you card ${index + 1}`);
  title.textContent = cardData.title;

  cardData.paragraphs.forEach((lines) => {
    const paragraph = document.createElement("p");
    appendLines(paragraph, lines);
    message.appendChild(paragraph);
  });

  qrLink.href = QR_URL;
  qrImage.src = QR_PNG;
  qrImage.decoding = "sync";
  qrCaption.textContent = QR_CAPTION;

  return fragment;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#cardGrid");
  const template = document.querySelector("#cardTemplate");

  if (!grid || !template) {
    return;
  }

  const cards = document.createDocumentFragment();

  for (let index = 0; index < CARD_COUNT; index += 1) {
    cards.appendChild(buildCard(template, index));
  }

  grid.replaceChildren(cards);
});
