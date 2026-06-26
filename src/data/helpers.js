// Creates a single product
export function createProduct(category, subCategory, product) {
  return {
    category,
    subCategory,
    discount: 0,
    isNew: false,
    ...product,
  };
}

// Creates multiple products of the same category & subcategory
function createGroup(category, subCategory) {
  return (products) =>
    products.map((product) =>
      createProduct(category, subCategory, product)
    );
}

// ==========================
// Partywear
// ==========================

export const PW = {
  lehenga: createGroup("Partywear", "Lehenga"),
  sharara: createGroup("Partywear", "Sharara Suit"),
  garara: createGroup("Partywear", "Garara Suit"),
  indoWestern: createGroup("Partywear", "Indo Western"),
  plazoCropTop: createGroup("Partywear", "Plazo Crop Top"),
  pwstraightPlazo: createGroup("Partywear", "Straight Plazo Suit"),
};

// ==========================
// Stitched Suit
// ==========================

export const SS = {
  pantPlazo: createGroup("Stitched Suit", "Pant Plazo Suit"),
  sharara: createGroup("Stitched Suit", "Sharara Suit"),
  garara: createGroup("Stitched Suit", "Garara Suit"),
  flairPlazo: createGroup("Stitched Suit", "Flair Plazo Suit"),
  ssstraightPlazo: createGroup("Stitched Suit", "Straight Plazo Suit"),
  afghaniBottom: createGroup("Stitched Suit", "Afghani Bottom"),
  coordSet: createGroup("Stitched Suit", "Co-ord Set"),
};

// ==========================
// Topwear
// ==========================

export const TW = {
  aLineKurti: createGroup("Topwear", "A Line Kurti"),
  flairKurti: createGroup("Topwear", "Flair Kurti"),
  straightKurti: createGroup("Topwear", "Straight Kurti"),
  longTshirt: createGroup("Topwear", "Long T-Shirts"),
  shortTshirt: createGroup("Topwear", "Short T-Shirts"),
};

// ==========================
// Night Suit
// ==========================

export const NS = {
  halfSleeves: createGroup("Night Suit", "Half Sleeves"),
  fullSleeves: createGroup("Night Suit", "Full Sleeves"),
  shortLength: createGroup("Night Suit", "Short Length"),
  longLength: createGroup("Night Suit", "Long Length"),
  suitLength: createGroup("Night Suit", "Suit Length"),
  frontOpen: createGroup("Night Suit", "Front Open"),
  shirtPattern: createGroup("Night Suit", "Shirt Pattern"),
  kaftanPattern: createGroup("Night Suit", "Kaftan Pattern"),
};

// ==========================
// Unstitched Suits
// ==========================

export const US = {
  cotton: createGroup("Unstitched Suits", "Cotton"),
  mulCotton: createGroup("Unstitched Suits", "Mul Cotton"),
  chanderi: createGroup("Unstitched Suits", "Chanderi"),
  muslin: createGroup("Unstitched Suits", "Muslin"),
  modal: createGroup("Unstitched Suits", "Modal"),
  organza: createGroup("Unstitched Suits", "Organza"),
  rayon: createGroup("Unstitched Suits", "Rayon"),
  doriya: createGroup("Unstitched Suits", "Doriya"),
  georgette: createGroup("Unstitched Suits", "Georgette"),
  silk: createGroup("Unstitched Suits", "Silk"),
  chinon: createGroup("Unstitched Suits", "Chinon"),
  chiffon: createGroup("Unstitched Suits", "Chiffon"),
  jamdani: createGroup("Unstitched Suits", "Jamdani"),
  jamdaniSilk: createGroup("Unstitched Suits", "Jamdani Silk"),
  brocade: createGroup("Unstitched Suits", "Brocade"),
};