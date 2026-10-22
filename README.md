# Hokis (Հոգիս) flower studio website

A one-page flower shop for Hokis, a flower studio in Yerevan. Everything is in `index.html`: there is no build step and nothing to install.

## What's in it
- Single flowers, bouquets and arrangements, with Petite / Signature / Grand tiers
- Occasion filter, item descriptions and quantity pickers
- A "Create your own" arrangement builder with a minimum order price
- Gift extras: candle, sweets, jewelry piece
- Checkout that asks for the delivery date, time window, address, card message and how to send payment details
- Armenian, English and Russian, with prices in AMD, USD, EUR or RUB

## What to change before going live
All in `index.html`, inside the `<script>` section:
- **Prices** are in AMD. Change them in `F` (single flowers), `BOUQUETS`, `ARRANGEMENTS`, `VESSELS`, `EXTRAS`, `ZONES` (delivery fees) and `MIN_CUSTOM`.
- **Exchange rates** are in `RATES`, as the number of AMD per 1 USD / EUR / RUB.
- **Text** for every language is in `I18N` (site text), `FT` (flower names) and `PT` (bouquet and arrangement names).

## Orders
This is a front-end prototype. When someone places an order, the site shows a confirmation page, but it does **not** send the order to you yet. Connecting it to email, Telegram or a form service is the next step.
