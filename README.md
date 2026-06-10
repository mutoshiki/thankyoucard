# eBay Thank You Card Sheet

This folder contains an A4 portrait HTML print sheet with six thank-you cards for eBay orders.

## Files

- `index.html` - open this file in a browser.
- `style.css` - A4 layout, PNG-based card styling, print CSS, and cut guides.
- `script.js` - defines one card and generates six copies.
- `assets/` - verified QR PNG plus the PNG paper/motif artwork used by the cards.

## How to Use

1. Open `index.html` in Chrome, Edge, or another modern browser.
2. Confirm that six cards appear on one A4 page.
3. Print from the browser.

## Recommended Print Settings

- Paper size: A4
- Orientation: Portrait
- Scale: 100% or Actual size
- Margins: None when available
- Headers and footers: Off
- Background graphics: On

If your printer cannot print to the edge of the paper, use the light trim marks and dashed cut guides after printing. The card layout keeps important text and QR codes away from the page edge.

## QR Link

The QR code points to:

https://www.ebay.com/myb/PurchaseHistory

To change the destination:

1. Update `QR_URL` in `script.js`.
2. Replace `assets/qr_purchase_history.png` with an accurately generated QR file for the new URL.
3. Keep the same filename, or update `QR_PNG` in `script.js`.

Do not use AI-generated QR artwork. Use a normal QR generator and verify the scan before printing.

## Replacing Decorative Artwork

The decorative artwork is referenced from `index.html` and `style.css`:

- `assets/paper_texture.png`
- `assets/motif_asanoha_corner.png`
- `assets/motif_plum_branch.png`
- `assets/motif_seigaiha_corner.png`
- `assets/motif_red_seal_kansha.png`

You can replace these PNG files with new artwork using the same filenames. The QR code is separate and should remain a verified QR image.

## Policy-Safe Copy

The printed card uses neutral wording: it thanks the buyer, asks them to open eBay Purchase History, and asks them to contact you through eBay Messages if there is an issue. It does not offer an incentive or request a specific rating.
