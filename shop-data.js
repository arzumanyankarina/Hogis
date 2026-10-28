/* =====================================================================
   ARI · SHOP DATA  (shop-data.js)
   This is the only file you need to edit to change the shop.
   Change only the words inside "quotes" and the numbers.
   Keep every comma, bracket and quote mark exactly where it is.
   Lines starting with // are notes for you. The website ignores them.
   All prices are in Armenian dram (AMD).

   PHOTOS: you don't write them here. Upload them to a folder called
   "photos" on GitHub and name each file after the flower id and colour:
     photos/rose-red.jpg   photos/tulip-yellow.jpg   photos/peony-white.jpg
   A flower with only one colour uses just its id: photos/sunflower.jpg
   Bouquets and arrangements use their id: photos/b-romance.jpg
   .jpg or .png both work. Anything without a photo keeps its drawing.
   ===================================================================== */

window.ARI = {

/* ---------- 1. GENERAL SETTINGS ---------- */
settings: {
  // Exchange rates: how many AMD is 1 dollar / euro / rouble.
  rates: { USD: 385, EUR: 445, RUB: 4.8 },

  // Delivery fee for each area. z1 = city centre, z2 = other districts,
  // z3 = outside Yerevan, pickup = customer collects from the studio.
  delivery: { z1: 0, z2: 0, z3: 0, pickup: 0 },

  // Extra charge for the evening delivery window (18:00 – 21:00).
  eveningFee: 0,

  // Gift add-ons. Jewellery is shown as "from" this price.
  extras: { candle: 6000, sweets: 5000, jewelry: 25000 },

  // "Create your own": smallest order allowed, and your work fee.
  minCustom: 15000,
  workFee: 2000,
  // "Create your own": price of each container.
  // wrap = hand-tied with a satin ribbon (ribbon is free; 0 shows "free").
  containers: { wrap: 0, vase: 5000, box: 4000, basket: 3500, bowl: 4500, other: 100 },
  // Hand-tied: extra price when the client ticks "Add wrapping paper".
  paper: 500,

  // Your WhatsApp number with country code. Orders are sent here.
  // Example: "+374 99 123456". Leave "" to switch WhatsApp orders off.
  whatsapp: "+37433973736",

  // "Personal bouquet": number of stems and price for each size.
  personal: {
    petite:    { stems: 7,  price: 18000 },
    signature: { stems: 15, price: 35000 },
    grand:     { stems: 31, price: 75000 },
  },
},

/* ---------- 2. SINGLE FLOWERS ----------
   Prices below are estimates from market research (Oct 2026), per stem
   (mimosa per branch). February and March are priced for 14 Feb and 8 March.
   Check them against your wholesale quotes.
   id        short code in small latin letters, no spaces. Never change it
             for a flower that already exists (baskets of customers use it).
   show      true = on the website, false = hidden.
   price     ONE number (same price all year), or TWELVE numbers, one per
             month from January to December. Put 0 in a month when you don't
             sell it: the shop then shows "out of season" that month.
   colours   colours the customer can choose; the first one is shown first.
             You can use: red, pink, white, yellow, peach, burgundy, coral,
             orange, purple, blue, green, striped (white with red edges)
   bestMonths  first and last month of the natural season, e.g. [5, 7] =
             May to July. Write null if it is available all year.
   vaseDays  how long it lasts in a vase.
   shape     which drawing to use: rose, peony, tulip, ray, lily,
             cluster, leaf, gyp, mimosa
   colour / centre  colours of the drawing (only used when there's no photo).
   filler    true for greenery and small fillers.
------------------------------------------------- */
flowers: [
  {
    id: "rose", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 1100,  2200,  2200,  1500,  1100,   800,   800,   800,  1500,  1100,  1100,  1500 ],
    colours: ["red","pink","white","yellow","peach","burgundy"],
    bestMonths: null, vaseDays: "7–9",
    shape: "rose", colour: "#c2264b", centre: "#7e1631", filler: false,
    en: { name: "Garden rose", about: "Classic many-petalled rose with a soft scent.", care: "Trim 2 cm at an angle, change water every 2 days." },
    ru: { name: "Садовая роза", about: "Классическая многолепестковая роза с нежным ароматом.", care: "Подрезайте стебель на 2 см под углом, меняйте воду каждые 2 дня." },
    hy: { name: "Այգու վարդ", about: "Դասական բազմաթերթ վարդ՝ նուրբ բույրով։", care: "Ցողունը թեք կտրեք 2 սմ-ով, ջուրը փոխեք 2 օրը մեկ։" },
  },
  {
    id: "blush", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 1400,  1900,  2500,  1900,  1400,  1100,  1100,  1100,  1400,  1400,  1400,  1900 ],
    colours: ["pink","white","peach"],
    bestMonths: null, vaseDays: "7–9",
    shape: "rose", colour: "#f0a7b4", centre: "#d97088", filler: false,
    en: { name: "Spray rose", about: "Several small roses on one stem.", care: "Trim 2 cm at an angle, change water every 2 days." },
    ru: { name: "Кустовая роза", about: "Несколько маленьких роз на одном стебле.", care: "Подрезайте стебель на 2 см под углом, меняйте воду каждые 2 дня." },
    hy: { name: "Թփային վարդ", about: "Մեկ ցողունի վրա մի քանի փոքր վարդ։", care: "Ցողունը թեք կտրեք 2 սմ-ով, ջուրը փոխեք 2 օրը մեկ։" },
  },
  {
    id: "peony", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 4200,  4200,  5800,  4200,  1800,  1800,  2800,  4200,     0,     0,  4200,  4200 ],
    colours: ["pink","white","coral","burgundy"],
    bestMonths: [5,7], vaseDays: "5–7",
    shape: "peony", colour: "#ee8fb0", centre: "#f6c7d6", filler: false,
    en: { name: "Peony", about: "Big ruffled blooms that open from tight buds.", care: "Keep cool. Warm water helps buds open." },
    ru: { name: "Пион", about: "Пышные цветы, раскрываются из тугих бутонов.", care: "Держите в прохладе. Тёплая вода помогает бутонам раскрыться." },
    hy: { name: "Քաջվարդ", about: "Խոշոր, փարթամ ծաղիկներ, որոնք բացվում են ամուր կոկոններից։", care: "Պահեք զով տեղում։ Տաք ջուրն օգնում է կոկոններին բացվել։" },
  },
  {
    id: "tulip", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [  800,  1100,  1500,  1100,   800,     0,     0,     0,     0,  1100,   800,  1100 ],
    colours: ["red","pink","white","yellow","orange","purple","striped","peach"],
    bestMonths: [1,5], vaseDays: "5–7",
    shape: "tulip", colour: "#f27a3a", centre: "#c4561e", filler: false,
    en: { name: "Tulip", about: "Cup-shaped heads that keep growing in the vase.", care: "Cold water, keep away from fruit." },
    ru: { name: "Тюльпан", about: "Цветы-бокалы, которые продолжают расти в вазе.", care: "Холодная вода, держите подальше от фруктов." },
    hy: { name: "Վարդակակաչ", about: "Գավաթաձև ծաղիկներ, որոնք ծաղկամանում շարունակում են աճել։", care: "Սառը ջուր, հեռու պահեք մրգերից։" },
  },
  {
    id: "ranunculus", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 1500,  2000,  2800,  2000,  1500,  2000,     0,     0,     0,  2000,  1500,  2000 ],
    colours: ["yellow","white","pink","peach","orange","red"],
    bestMonths: [2,5], vaseDays: "7–10",
    shape: "rose", colour: "#f6c64a", centre: "#c88f19", filler: false,
    en: { name: "Ranunculus", about: "Paper-thin layered petals.", care: "Shallow water, trim stems often." },
    ru: { name: "Ранункулюс", about: "Тонкие многослойные лепестки.", care: "Немного воды, чаще подрезайте стебли." },
    hy: { name: "Ռանունկուլյուս", about: "Բարակ, շերտ-շերտ թերթիկներ։", care: "Քիչ ջուր, հաճախ կտրեք ցողունները։" },
  },
  {
    id: "sunflower", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 1700,  1700,  1700,  1100,  1100,   700,   700,   700,   700,  1100,  1100,  1700 ],
    colours: ["yellow"],
    bestMonths: [6,10], vaseDays: "6–10",
    shape: "ray", colour: "#f5b82e", centre: "#5a3418", filler: false,
    en: { name: "Sunflower", about: "Bright and sturdy. One stem fills a vase.", care: "Deep water, remove lower leaves." },
    ru: { name: "Подсолнух", about: "Яркий и крепкий. Один стебель заполняет вазу.", care: "Много воды, удалите нижние листья." },
    hy: { name: "Արևածաղիկ", about: "Վառ ու ամուր։ Մեկ ցողունը լցնում է ամբողջ ծաղկամանը։", care: "Շատ ջուր, հեռացրեք ներքևի տերևները։" },
  },
  {
    id: "lily", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 2200,  2200,  3000,  3000,  2200,  1700,  1700,  2200,  2200,  2200,  2200,  3000 ],
    colours: ["white","pink"],
    bestMonths: null, vaseDays: "10–14",
    shape: "lily", colour: "#fbf3f1", centre: "#e7a2b5", filler: false,
    en: { name: "Oriental lily", about: "Large star-shaped flowers with a strong perfume.", care: "Pinch off pollen to avoid stains." },
    ru: { name: "Восточная лилия", about: "Крупные звёздчатые цветы с сильным ароматом.", care: "Удаляйте пыльцу, чтобы не было пятен." },
    hy: { name: "Շուշան", about: "Խոշոր աստղաձև ծաղիկներ՝ ուժեղ բույրով։", care: "Հեռացրեք ծաղկափոշին, որ բծեր չմնան։" },
  },
  {
    id: "hydrangea", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 4500,  4500,  4500,  3200,  3200,  2500,  2500,  2500,  3200,  3200,  4500,  4500 ],
    colours: ["blue","white","pink","green"],
    bestMonths: [6,9], vaseDays: "5–8",
    shape: "cluster", colour: "#8fa7de", centre: "#6c84c4", filler: false,
    en: { name: "Hydrangea", about: "One stem gives a full cloud of tiny petals.", care: "Thirsty. Submerge the head in water if it wilts." },
    ru: { name: "Гортензия", about: "Один стебель даёт пышное облако мелких лепестков.", care: "Любит воду. Если поникла, опустите соцветие в воду." },
    hy: { name: "Հորտենզիա", about: "Մեկ ցողունը տալիս է մանր թերթիկների փարթամ ամպ։", care: "Շատ ջուր է սիրում։ Թառամելիս ծաղկաբույլը ընկղմեք ջրի մեջ։" },
  },
  {
    id: "carnation", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [  600,   600,  1100,   800,   800,   600,   500,   500,   600,   600,   600,   600 ],
    colours: ["pink","red","white","peach","striped"],
    bestMonths: null, vaseDays: "14–21",
    shape: "peony", colour: "#e45d7c", centre: "#b23453", filler: false,
    en: { name: "Carnation", about: "Frilly edges and a very long vase life.", care: "Change water every 3 days." },
    ru: { name: "Гвоздика", about: "Резные края и очень долгая жизнь в вазе.", care: "Меняйте воду каждые 3 дня." },
    hy: { name: "Մեխակ", about: "Ատամնավոր եզրեր և շատ երկար կյանք ծաղկամանում։", care: "Ջուրը փոխեք 3 օրը մեկ։" },
  },
  {
    id: "lisianthus", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 1800,  1800,  2300,  1800,  1300,   900,   900,   900,  1300,  1300,  1300,  1800 ],
    colours: ["purple","white","pink","burgundy"],
    bestMonths: null, vaseDays: "10–14",
    shape: "tulip", colour: "#a98bd3", centre: "#e9e2f3", filler: false,
    en: { name: "Lisianthus", about: "Soft ruffled petals, like a rose and a poppy at once.", care: "Remove spent buds so new ones open." },
    ru: { name: "Эустома", about: "Нежные волнистые лепестки, похожа и на розу, и на мак.", care: "Удаляйте отцветшие бутоны, чтобы раскрывались новые." },
    hy: { name: "Լիզիանթուս", about: "Նուրբ ալիքաձև թերթիկներ՝ նման և՛ վարդի, և՛ կակաչի։", care: "Հեռացրեք թառամած կոկոնները, որ նորերը բացվեն։" },
  },
  {
    id: "mimosa", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 2200,  2200,  3000,     0,     0,     0,     0,     0,     0,     0,     0,     0 ],
    colours: ["yellow"],
    bestMonths: [2, 3], vaseDays: "5–7",
    shape: "mimosa", colour: "#f6d23a", centre: "#d9a91b", filler: false,
    en: { name: "Mimosa", about: "Fluffy yellow pompoms with a sweet scent. The flower of 8 March.", care: "Little water, a cool room, and a light spray on the pompoms. Dries beautifully." },
    ru: { name: "Мимоза", about: "Пушистые жёлтые шарики с нежным ароматом. Цветок 8 Марта.", care: "Немного воды, прохладная комната, слегка опрыскивайте шарики. Красиво сохнет." },
    hy: { name: "Միմոզա", about: "Փափուկ դեղին գնդիկներ՝ քաղցր բույրով։ Մարտի 8-ի ծաղիկը։", care: "Քիչ ջուր, զով սենյակ, թեթևակի ցողեք գնդիկները։ Գեղեցիկ է չորանում։" },
  },
  {
    id: "calla", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 2500,  2500,  2500,  2500,  2500,  2500,  2500,  2500,  2500,  2500,  2500,  2500 ],
    colours: ["white","burgundy"],
    bestMonths: null, vaseDays: "10–14",
    shape: "lily", colour: "#f7f3ea", centre: "#e8c34a", filler: false,
    en: { name: "Calla lily", about: "Smooth, sculptural cups on long clean stems. Very elegant.", care: "Shallow water, change it every 2 days. Recut the stems." },
    ru: { name: "Калла", about: "Гладкие скульптурные чаши на длинных стеблях. Очень элегантно.", care: "Немного воды, меняйте каждые 2 дня. Подрезайте стебли." },
    hy: { name: "Կալա", about: "Հարթ, քանդակային գավաթներ երկար ցողունների վրա։ Շատ նրբագեղ։", care: "Քիչ ջուր, փոխեք 2 օրը մեկ։ Կտրեք ցողունները։" },
  },
  {
    id: "lilyvalley", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [    0,     0,     0,  3500,  3500,     0,     0,     0,     0,     0,     0,     0 ],
    colours: ["white"],
    bestMonths: [4, 5], vaseDays: "4–6",
    shape: "gyp", colour: "#fbf7f2", centre: "#e6ddd0", filler: false,
    en: { name: "Lily of the valley", about: "Tiny white bells with a famous sweet scent. Only in spring.", care: "Keep cool and away from fruit. Change water daily." },
    ru: { name: "Ландыш", about: "Крошечные белые колокольчики с нежным ароматом. Только весной.", care: "Держите в прохладе, вдали от фруктов. Меняйте воду каждый день." },
    hy: { name: "Հովտաշուշան", about: "Մանրիկ սպիտակ զանգակներ՝ քաղցր բույրով։ Միայն գարնանը։", care: "Պահեք զով տեղում, մրգերից հեռու։ Ջուրը փոխեք ամեն օր։" },
  },
  {
    id: "lilac", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [    0,     0,     0,  1500,  1500,     0,     0,     0,     0,     0,     0,     0 ],
    colours: ["purple"],
    bestMonths: [4, 5], vaseDays: "4–6",
    shape: "cluster", colour: "#a98bd3", centre: "#7d5fb0", filler: false,
    en: { name: "Lilac", about: "Big scented clusters of spring. Pure nostalgia.", care: "Split the woody stem ends and give plenty of water." },
    ru: { name: "Сирень", about: "Пышные душистые гроздья весны. Чистая ностальгия.", care: "Расщепите одревесневшие концы стеблей, давайте много воды." },
    hy: { name: "Յասաման", about: "Գարնան բուրավետ փարթամ ողկույզներ։ Մաքուր նոստալգիա։", care: "Ճեղքեք ցողունի փայտացած ծայրը և շատ ջուր տվեք։" },
  },
  {
    id: "stock", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 1500,  1500,  1800,  1500,  1200,  1200,  1200,  1200,  1200,  1500,  1500,  1500 ],
    colours: ["pink","purple","white"],
    bestMonths: [4, 6], vaseDays: "7–10",
    shape: "cluster", colour: "#f2b8c6", centre: "#e08aa2", filler: false,
    en: { name: "Stock", about: "Soft ruffled spikes with a warm clove scent.", care: "Remove leaves below the water and change it every 2 days." },
    ru: { name: "Маттиола", about: "Мягкие махровые колосья с тёплым пряным ароматом.", care: "Уберите листья ниже воды, меняйте воду каждые 2 дня." },
    hy: { name: "Մատթիոլա", about: "Փափուկ թավշյա հասկեր՝ մեխակի տաք բույրով։", care: "Հեռացրեք ջրի մեջ մնացող տերևները, ջուրը փոխեք 2 օրը մեկ։" },
  },
  {
    id: "anthurium", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 3000,  3000,  3000,  3000,  3000,  3000,  3000,  3000,  3000,  3000,  3000,  3000 ],
    colours: ["white","red","green"],
    bestMonths: null, vaseDays: "14–21",
    shape: "tulip", colour: "#f7f3ea", centre: "#e8c34a", filler: false,
    en: { name: "Anthurium", about: "Glossy heart-shaped flowers that last for weeks. Modern and bold.", care: "Warm room, a little water, no cold draughts." },
    ru: { name: "Антуриум", about: "Глянцевые цветы-сердечки, стоят неделями. Современно и смело.", care: "Тёплая комната, немного воды, без сквозняков." },
    hy: { name: "Անթուրիում", about: "Փայլուն, սրտաձև ծաղիկներ, որոնք մնում են շաբաթներ։ Ժամանակակից և համարձակ։", care: "Տաք սենյակ, քիչ ջուր, առանց սառը քամու։" },
  },
  {
    id: "amaranthus", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 2000,  2000,  2000,  2000,  2000,  2000,  2000,  2000,  2000,  2000,  2000,  2000 ],
    colours: ["green"],
    bestMonths: [7, 9], vaseDays: "7–10",
    shape: "leaf", colour: "#b5c96a", centre: "#8fa64a", filler: true,
    en: { name: "Hanging amaranthus", about: "Long trailing tassels that spill over the vase.", care: "Recut the stems and change water every 2 days." },
    ru: { name: "Амарант", about: "Длинные свисающие кисти, красиво спадают из вазы.", care: "Подрезайте стебли, меняйте воду каждые 2 дня." },
    hy: { name: "Ամարանտ", about: "Երկար կախվող ծոպեր, որոնք գեղեցիկ իջնում են ծաղկամանից։", care: "Կտրեք ցողունները, ջուրը փոխեք 2 օրը մեկ։" },
  },
  {
    id: "freesia", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 1200,  1200,  1500,  1200,  1000,  1000,  1000,  1000,  1000,  1200,  1200,  1200 ],
    colours: ["white"],
    bestMonths: null, vaseDays: "7–10",
    shape: "lily", colour: "#fbf7f2", centre: "#e8d27a", filler: false,
    en: { name: "Freesia", about: "Delicate arching sprays with a fresh, sweet scent.", care: "Pick off faded flowers so new buds open." },
    ru: { name: "Фрезия", about: "Изящные изогнутые веточки со свежим сладким ароматом.", care: "Удаляйте отцветшие цветки, чтобы раскрывались новые бутоны." },
    hy: { name: "Ֆրեզիա", about: "Նուրբ կորացած ճյուղիկներ՝ թարմ, քաղցր բույրով։", care: "Հեռացրեք թառամած ծաղիկները, որ նոր կոկոնները բացվեն։" },
  },
  {
    id: "gladiolus", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 1500,  1500,  1800,  1500,  1200,  1000,  1000,  1000,  1000,  1200,  1500,  1500 ],
    colours: ["white","pink","purple","yellow"],
    bestMonths: [7, 9], vaseDays: "7–10",
    shape: "lily", colour: "#fbf7f2", centre: "#e6ddd0", filler: false,
    en: { name: "Gladiolus", about: "Tall elegant spikes that open from the bottom up.", care: "Tall vase, deep water. Pinch off the top bud for straight stems." },
    ru: { name: "Гладиолус", about: "Высокие элегантные колосья, раскрываются снизу вверх.", care: "Высокая ваза, много воды. Отщипните верхний бутон, чтобы стебель был прямым." },
    hy: { name: "Գլադիոլուս", about: "Բարձր նրբագեղ հասկեր, որոնք բացվում են ներքևից վերև։", care: "Բարձր ծաղկաման, շատ ջուր։ Պոկեք վերևի կոկոնը, որ ցողունը ուղիղ մնա։" },
  },
  {
    id: "celosia", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 1500,  1500,  1800,  1500,  1500,  1200,  1200,  1200,  1200,  1200,  1500,  1500 ],
    colours: ["red","green"],
    bestMonths: [7, 10], vaseDays: "10–14",
    shape: "peony", colour: "#c2264b", centre: "#7e1631", filler: false,
    en: { name: "Celosia", about: "Velvety crests with a texture like coral. Lasts a long time.", care: "Little water and change it often. Dries well too." },
    ru: { name: "Целозия", about: "Бархатные гребешки, похожие на коралл. Долго стоит.", care: "Немного воды, меняйте её почаще. Хорошо сохнет." },
    hy: { name: "Ցելոզիա", about: "Թավշյա կատարներ՝ մարջանի նման։ Երկար է մնում։", care: "Քիչ ջուր, հաճախ փոխեք։ Լավ է չորանում։" },
  },
  {
    id: "chrysanthemum", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 1000,  1000,  1200,  1000,  1000,  1000,  1000,  1000,   900,   900,   900,  1000 ],
    colours: ["white","burgundy"],
    bestMonths: [9, 11], vaseDays: "14–21",
    shape: "ray", colour: "#fbf7f2", centre: "#e8d27a", filler: false,
    en: { name: "Chrysanthemum", about: "Full, round heads that stay fresh for weeks.", care: "Remove lower leaves and change water every 3 days." },
    ru: { name: "Хризантема", about: "Пышные круглые головки, стоят свежими неделями.", care: "Уберите нижние листья, меняйте воду каждые 3 дня." },
    hy: { name: "Քրիզանթեմ", about: "Փարթամ, կլոր գլխիկներ, որոնք շաբաթներով թարմ են մնում։", care: "Հեռացրեք ներքևի տերևները, ջուրը փոխեք 3 օրը մեկ։" },
  },
  {
    id: "poppy", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 2000,  2000,  2500,  2000,     0,     0,     0,     0,     0,     0,     0,  2000 ],
    colours: ["orange"],
    bestMonths: [12, 4], vaseDays: "4–6",
    shape: "ray", colour: "#f27a3a", centre: "#7d8a2a", filler: false,
    en: { name: "Icelandic poppy", about: "Silky crinkled petals in sunset colours: orange, peach, yellow and cream.", care: "Recut and dip the stem ends in hot water for a few seconds." },
    ru: { name: "Исландский мак", about: "Шёлковые мятые лепестки цвета заката: оранжевый, персиковый, жёлтый, кремовый.", care: "Подрежьте стебли и на пару секунд опустите кончики в горячую воду." },
    hy: { name: "Իսլանդական կակաչ", about: "Մետաքսյա ճմրթված թերթեր մայրամուտի գույներով՝ նարնջագույն, դեղձագույն, դեղին, կրեմ։", care: "Կտրեք ցողունները և ծայրերը մի քանի վայրկյան ընկղմեք տաք ջրի մեջ։" },
  },
  {
    id: "anemone", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 1800,  1800,  2200,  1800,     0,     0,     0,     0,     0,     0,  1800,  1800 ],
    colours: ["pink"],
    bestMonths: [11, 4], vaseDays: "5–8",
    shape: "ray", colour: "#f2a2c0", centre: "#2a1a2e", filler: false,
    en: { name: "Anemone", about: "Soft pink petals around a dark velvet centre.", care: "Shallow cool water, top it up daily." },
    ru: { name: "Анемона", about: "Нежно-розовые лепестки вокруг тёмной бархатной серединки.", care: "Немного прохладной воды, доливайте каждый день." },
    hy: { name: "Անեմոն", about: "Նուրբ վարդագույն թերթեր՝ մուգ թավշյա միջուկի շուրջ։", care: "Քիչ զով ջուր, ամեն օր ավելացրեք։" },
  },
  {
    id: "statice", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [  900,   900,  1100,   900,   800,   700,   700,   700,   700,   800,   900,   900 ],
    colours: ["purple","white","pink"],
    bestMonths: [6, 9], vaseDays: "14–21",
    shape: "gyp", colour: "#7d5fd0", centre: "#5d3a8c", filler: true,
    en: { name: "Statice", about: "Papery clusters of tiny flowers that keep their colour, even when dried.", care: "Little water. Lasts for weeks and dries beautifully." },
    ru: { name: "Статица", about: "Бумажные соцветия из крошечных цветков. Сохраняют цвет даже в сухом виде.", care: "Немного воды. Стоит неделями и красиво сохнет." },
    hy: { name: "Ստատիցե", about: "Թղթանման ծաղկաբույլեր՝ մանրիկ ծաղիկներով։ Գույնը պահում են նույնիսկ չորանալիս։", care: "Քիչ ջուր։ Մնում է շաբաթներով և գեղեցիկ է չորանում։" },
  },
  {
    id: "dahlia", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [    0,     0,     0,     0,     0,     0,  1500,  1500,  1500,  1500,     0,     0 ],
    colours: ["pink","red","burgundy","orange"],
    bestMonths: [7, 10], vaseDays: "4–6",
    shape: "peony", colour: "#e8a1ad", centre: "#b45a6e", filler: false,
    en: { name: "Dahlia", about: "Round, many-petalled heads, from soft blush to deep burgundy. A late-summer favourite.", care: "Recut the stems and change the water every day." },
    ru: { name: "Георгин", about: "Круглые многолепестковые головки, от нежно-розового до глубокого бордо. Любимец конца лета.", care: "Подрезайте стебли и меняйте воду каждый день." },
    hy: { name: "Գեորգին", about: "Կլոր, բազմաթերթ գլխիկներ՝ նուրբ վարդագույնից մինչև մուգ բորդո։ Ամառվա վերջի սիրելին։", care: "Ամեն օր կտրեք ցողունները և փոխեք ջուրը։" },
  },
  {
    id: "gerbera", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [  800,   800,  1000,   800,   800,   700,   700,   700,   700,   800,   800,  1000 ],
    colours: ["white","red"],
    bestMonths: null, vaseDays: "7–10",
    shape: "ray", colour: "#fbf7f2", centre: "#3a2a1a", filler: false,
    en: { name: "Gerbera", about: "A cheerful daisy-like flower with a clean, graphic shape.", care: "Shallow water only, so the stems stay firm." },
    ru: { name: "Гербера", about: "Яркий цветок, похожий на ромашку, с чистой графичной формой.", care: "Наливайте немного воды, чтобы стебли оставались крепкими." },
    hy: { name: "Գերբերա", about: "Երիցուկի նման ուրախ ծաղիկ՝ մաքուր, գրաֆիկ ձևով։", care: "Միայն քիչ ջուր, որպեսզի ցողունները ամուր մնան։" },
  },
  {
    id: "narcissus", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [    0,   700,   600,   600,     0,     0,     0,     0,     0,     0,     0,     0 ],
    colours: ["yellow","white"],
    bestMonths: [2, 4], vaseDays: "5–7",
    shape: "lily", colour: "#f6c64a", centre: "#f29a1e", filler: false,
    en: { name: "Narcissus", about: "The first flower of spring, with a light, sweet scent.", care: "Keep in a separate vase for a day before mixing with other flowers." },
    ru: { name: "Нарцисс", about: "Первый цветок весны с лёгким сладким ароматом.", care: "Подержите сутки в отдельной вазе, прежде чем ставить с другими цветами." },
    hy: { name: "Նարգիզ", about: "Գարնան առաջին ծաղիկը՝ թեթև, քաղցր բույրով։", care: "Մեկ օր պահեք առանձին ծաղկամանում, հետո միայն խառնեք այլ ծաղիկների հետ։" },
  },
  {
    id: "protea", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 6000,  6000,  6500,  6000,  6000,  6000,  6000,  6000,  6000,  6000,  6000,  6500 ],
    colours: ["pink"],
    bestMonths: null, vaseDays: "10–14",
    shape: "peony", colour: "#e48aa0", centre: "#f3e6e8", filler: false,
    en: { name: "King protea", about: "A large, sculptural flower from South Africa. One stem makes a statement.", care: "Little water, change it every few days. Dries beautifully." },
    ru: { name: "Протея", about: "Крупный скульптурный цветок из Южной Африки. Одного стебля достаточно.", care: "Немного воды, меняйте раз в несколько дней. Красиво сохнет." },
    hy: { name: "Պրոտեա", about: "Խոշոր, քանդակային ծաղիկ Հարավային Աֆրիկայից։ Մեկ ցողունն էլ բավական է։", care: "Քիչ ջուր, փոխեք մի քանի օրը մեկ։ Գեղեցիկ է չորանում։" },
  },
  {
    id: "strelitzia", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 4500,  4500,  5000,  4500,  4500,  4500,  4500,  4500,  4500,  4500,  4500,  5000 ],
    colours: ["orange"],
    bestMonths: null, vaseDays: "10–14",
    shape: "lily", colour: "#f27a3a", centre: "#3a4fa0", filler: false,
    en: { name: "Bird of paradise", about: "Bright orange and blue flower shaped like a bird in flight.", care: "Warm room, fresh water every few days." },
    ru: { name: "Стрелиция", about: "Яркий оранжево-синий цветок в форме летящей птицы.", care: "Тёплое место, свежая вода раз в несколько дней." },
    hy: { name: "Ստրելիցիա", about: "Վառ նարնջագույն և կապույտ ծաղիկ՝ թռչող թռչունի տեսքով։", care: "Տաք սենյակ, թարմ ջուր մի քանի օրը մեկ։" },
  },
  {
    id: "eucalyptus", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [  900,   900,  1200,   900,   900,   900,   900,   900,   900,   900,   900,  1200 ],
    colours: ["green"],
    bestMonths: null, vaseDays: "14+",
    shape: "leaf", colour: "#8fb3a3", centre: "#8fb3a3", filler: true,
    en: { name: "Eucalyptus", about: "Silver-blue leaves with a fresh scent.", care: "Lasts well and can be dried." },
    ru: { name: "Эвкалипт", about: "Серебристо-голубые листья со свежим ароматом.", care: "Долго стоит, можно засушить." },
    hy: { name: "Էվկալիպտ", about: "Արծաթակապտավուն տերևներ՝ թարմ բույրով։", care: "Երկար է մնում, կարելի է չորացնել։" },
  },
  {
    id: "gyp", show: true,
//          Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov    Dec
    price: [ 1000,  1000,  1400,  1000,  1400,  1000,  1000,  1000,  1000,  1000,  1000,  1400 ],
    colours: ["white"],
    bestMonths: null, vaseDays: "10–14",
    shape: "gyp", colour: "#ffffff", centre: "#e9ecef", filler: true,
    en: { name: "Baby's breath", about: "Clouds of tiny white flowers to fill gaps.", care: "Very low care, dries beautifully." },
    ru: { name: "Гипсофила", about: "Облака мелких белых цветов для объёма.", care: "Почти не требует ухода, красиво сохнет." },
    hy: { name: "Գիպսոֆիլա", about: "Մանր սպիտակ ծաղիկների ամպեր՝ դատարկությունները լրացնելու համար։", care: "Գրեթե խնամք չի պահանջում, գեղեցիկ չորանում է։" },
  },
],

/* ---------- 3. BOUQUETS ----------
   price     one number, or twelve numbers (Jan … Dec) like the flowers.
   size      petite, signature or grand
   badge     "", bestseller, seasonal, value or vase
   flowers   which flowers and how many (use the flower ids from section 2).
             This is used for the drawing and the "what's inside" list.
   occasions any of: love, proposal, birthday, mother, thanks, home
   height    in cm.  wrapping: kraft, tissue or white
------------------------------------------------- */
bouquets: [
  {
    id: "b-romance", show: true, price: 32000,
    size: "signature", badge: "bestseller",
    flowers: { rose: 9, gyp: 3, eucalyptus: 3 },
    occasions: ["love","birthday","proposal"],
    height: 45, wrapping: "kraft", vaseDays: "7–9",
    en: { name: "First Date", about: "Nine red garden roses with baby's breath and eucalyptus, hand-tied in kraft paper. Simple and confident." },
    ru: { name: "Первое свидание", about: "Девять красных садовых роз с гипсофилой и эвкалиптом в крафтовой бумаге. Просто и уверенно." },
    hy: { name: "Առաջին ժամադրություն", about: "Ինը կարմիր այգու վարդ՝ գիպսոֆիլայով և էվկալիպտով, փաթաթված կրաֆտ թղթով։ Պարզ և վստահ։" },
  },
  {
    id: "b-peony", show: true, price: 42000,
    size: "signature", badge: "seasonal",
    flowers: { peony: 7, blush: 4, eucalyptus: 3 },
    occasions: ["love","mother","birthday"],
    height: 50, wrapping: "tissue", vaseDays: "5–7",
    en: { name: "Peony Cloud", about: "Seven peonies picked in bud so you can watch them open, with blush roses and eucalyptus." },
    ru: { name: "Пионовое облако", about: "Семь пионов в бутонах, чтобы вы увидели, как они раскрываются, с нежно-розовыми розами и эвкалиптом." },
    hy: { name: "Քաջվարդի ամպ", about: "Յոթ քաջվարդ կոկոնների մեջ, որ տեսնեք՝ ինչպես են բացվում, բաց վարդագույն վարդերով և էվկալիպտով։" },
  },
  {
    id: "b-forever", show: true, price: 120000,
    size: "grand", badge: "",
    flowers: { rose: 51 },
    occasions: ["proposal","love"],
    height: 60, wrapping: "white", vaseDays: "7–9",
    en: { name: "Forever", about: "Fifty-one red garden roses, hand-tied in a dome. Made for proposals and big anniversaries." },
    ru: { name: "Навсегда", about: "Пятьдесят одна красная садовая роза, собранная куполом. Для предложения руки и сердца и больших годовщин." },
    hy: { name: "Ընդմիշտ", about: "Հիսունմեկ կարմիր այգու վարդ՝ գմբեթաձև հավաքված։ Ամուսնության առաջարկի և մեծ տարեդարձերի համար։" },
  },
  {
    id: "b-sunny", show: true, price: 19000,
    size: "petite", badge: "",
    flowers: { sunflower: 3, ranunculus: 5, eucalyptus: 2 },
    occasions: ["birthday","thanks"],
    height: 45, wrapping: "kraft", vaseDays: "6–10",
    en: { name: "Sunday Morning", about: "Three big sunflowers with buttery ranunculus. Good for birthdays or just because." },
    ru: { name: "Воскресное утро", about: "Три больших подсолнуха и жёлтые ранункулюсы. Для дня рождения или просто так." },
    hy: { name: "Կիրակի առավոտ", about: "Երեք մեծ արևածաղիկ և դեղին ռանունկուլյուսներ։ Ծննդյան օրվա համար կամ պարզապես առանց առիթի։" },
  },
  {
    id: "b-tulip", show: true, price: 16000,
    size: "petite", badge: "value",
    flowers: { "tulip:orange": 15 },
    occasions: ["mother","thanks","home"],
    height: 40, wrapping: "white", vaseDays: "5–7",
    en: { name: "Tulip Market", about: "Fifteen orange tulips, tied loosely like at a flower market. Give them room to grow." },
    ru: { name: "Тюльпановая ярмарка", about: "Пятнадцать оранжевых тюльпанов, свободно связанных, как на цветочном рынке." },
    hy: { name: "Վարդակակաչների տոնավաճառ", about: "Տասնհինգ նարնջագույն վարդակակաչ՝ ազատ կապված, ինչպես ծաղկի շուկայում։" },
  },
  {
    id: "b-lilac", show: true, price: 36000,
    size: "signature", badge: "",
    flowers: { lisianthus: 6, hydrangea: 1, blush: 3, gyp: 2 },
    occasions: ["mother","thanks","birthday"],
    height: 45, wrapping: "white", vaseDays: "7–10",
    en: { name: "Lavender Hour", about: "A cool-toned bouquet of lilac lisianthus, blue hydrangea and blush roses." },
    ru: { name: "Лавандовый час", about: "Букет в холодных тонах: сиреневая эустома, голубая гортензия и нежно-розовые розы." },
    hy: { name: "Լավանդայի ժամ", about: "Սառը երանգների ծաղկեփունջ՝ յասամանագույն լիզիանթուս, կապույտ հորտենզիա և բաց վարդագույն վարդեր։" },
  },
  {
    id: "b-white", show: true, price: 38000,
    size: "signature", badge: "",
    flowers: { lily: 3, gyp: 4, eucalyptus: 4 },
    occasions: ["home","thanks"],
    height: 55, wrapping: "white", vaseDays: "10–14",
    en: { name: "Quiet White", about: "White oriental lilies with baby's breath and eucalyptus. Calm and elegant, with pollen removed." },
    ru: { name: "Белая тишина", about: "Белые восточные лилии с гипсофилой и эвкалиптом. Спокойно и элегантно, пыльца удалена." },
    hy: { name: "Սպիտակ լռություն", about: "Սպիտակ շուշաններ՝ գիպսոֆիլայով և էվկալիպտով։ Հանգիստ և նրբագեղ, ծաղկափոշին հեռացված է։" },
  },
],

/* ---------- 4. ARRANGEMENTS ----------
   Same as bouquets, plus:
   container box, bowl, basket, vase or jar
   wrapping  box, bowl, basket, vase or jar
------------------------------------------------- */
arrangements: [
  {
    id: "a-box", show: true, price: 45000,
    size: "signature", badge: "bestseller", container: "box",
    flowers: { rose: 12, blush: 8 },
    occasions: ["love","mother","proposal"],
    height: 25, wrapping: "box", vaseDays: "7–9",
    en: { name: "Hat Box Roses", about: "Twenty red and blush roses in a round hat box. Ready to display, no vase needed." },
    ru: { name: "Розы в шляпной коробке", about: "Двадцать красных и нежно-розовых роз в круглой шляпной коробке. Ваза не нужна." },
    hy: { name: "Վարդեր գլխարկի տուփում", about: "Քսան կարմիր և բաց վարդագույն վարդ՝ կլոր գլխարկի տուփում։ Ծաղկաման պետք չէ։" },
  },
  {
    id: "a-table", show: true, price: 40000,
    size: "signature", badge: "", container: "bowl",
    flowers: { peony: 4, hydrangea: 1, ranunculus: 4, eucalyptus: 3 },
    occasions: ["home","thanks"],
    height: 20, wrapping: "bowl", vaseDays: "6–8",
    en: { name: "Table Centrepiece", about: "A low arrangement for a dinner table, so guests can still see each other. The ceramic bowl is yours to keep." },
    ru: { name: "Композиция для стола", about: "Низкая композиция для обеденного стола, чтобы гости видели друг друга. Керамическая чаша остаётся у вас." },
    hy: { name: "Սեղանի կոմպոզիցիա", about: "Ցածր կոմպոզիցիա ճաշի սեղանի համար, որ հյուրերը միմյանց տեսնեն։ Կերամիկական ամանը մնում է ձեզ։" },
  },
  {
    id: "a-basket", show: true, price: 34000,
    size: "signature", badge: "", container: "basket",
    flowers: { sunflower: 3, tulip: 5, carnation: 4, eucalyptus: 2 },
    occasions: ["birthday","thanks"],
    height: 35, wrapping: "basket", vaseDays: "6–8",
    en: { name: "Country Basket", about: "A lined willow basket full of sunflowers, tulips and carnations." },
    ru: { name: "Деревенская корзинка", about: "Плетёная корзинка с подсолнухами, тюльпанами и гвоздиками." },
    hy: { name: "Գյուղական զամբյուղ", about: "Հյուսած զամբյուղ՝ լի արևածաղիկներով, վարդակակաչներով և մեխակներով։" },
  },
  {
    id: "a-vase", show: true, price: 85000,
    size: "grand", badge: "vase", container: "vase",
    flowers: { lily: 3, hydrangea: 2, lisianthus: 5, eucalyptus: 4 },
    occasions: ["home","thanks"],
    height: 65, wrapping: "vase", vaseDays: "8–12",
    en: { name: "Tall Vase", about: "Our largest piece: lilies, hydrangea and lisianthus in a heavy glass vase you keep." },
    ru: { name: "Высокая ваза", about: "Наша самая большая композиция: лилии, гортензия и эустома в тяжёлой стеклянной вазе." },
    hy: { name: "Բարձր ծաղկաման", about: "Մեր ամենամեծ կոմպոզիցիան՝ շուշաններ, հորտենզիա և լիզիանթուս ծանր ապակե ծաղկամանում։" },
  },
  {
    id: "a-mini", show: false, price: 15000,
    size: "petite", badge: "value", container: "jar",
    flowers: { ranunculus: 3, carnation: 2, gyp: 1 },
    occasions: ["thanks","birthday","home"],
    height: 18, wrapping: "jar", vaseDays: "5–7",
    en: { name: "Little Jar", about: "A small jar of seasonal stems for a desk or bedside table." },
    ru: { name: "Маленькая баночка", about: "Маленькая баночка сезонных цветов для рабочего стола или тумбочки." },
    hy: { name: "Փոքրիկ բանկա", about: "Փոքրիկ բանկա սեզոնային ծաղիկներով՝ աշխատասեղանի կամ մահճակալի մոտ դնելու համար։" },
  },
],

};
