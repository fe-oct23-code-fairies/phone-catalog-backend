# Code Fairies API

## Base URL

All requests should be sent to the following address:

`https://fe-oct23-code-fairies-backend.onrender.com/`

## Endpoints

### Products

GET `/products`

```
[
  {
    "id": 1,
    "category": "phones",
    "itemId": "apple-iphone-7-32gb-black",
    "name": "Apple iPhone 7 32GB Black",
    "fullPrice": 400,
    "price": 375,
    "screen": "4.7' IPS",
    "capacity": "32GB",
    "color": "black",
    "ram": "2GB",
    "year": 2016,
    "image": "img/phones/apple-iphone-7/black/00.webp"
  },
  ...
]
```

Query parameters include: 

`productType`: Category of product

`sortBy`: What field should be sorted by

`sortOrder`: ASC or DESC

`limit`: How many products should be queried

`page`: Offset by page

Example: GET `/products?productType=phones&sortBy=id&sortOrder=DESC&limit=5&page=2`

```
[
  {
    "id": 119,
    "category": "phones",
    "itemId": "apple-iphone-13-pro-max-512gb-graphite",
    "name": "Apple iPhone 13 Pro Max 512GB Graphite",
    "fullPrice": 1600,
    "price": 1530,
    "screen": "6.1' OLED",
    "capacity": "512GB",
    "colour": "graphite",
    "ram": "6GB",
    "year": 2022,
    "image": "img/phones/apple-iphone-11/black/00.jpg"
  },
  ...
]
```

GET `/products/1`

```
{
  "id": 1,
  "category": "",
  "itemId": "apple-iphone-7-32gb-black",
  "name": "Apple iPhone 7 32GB Black",
  "fullPrice": 400,
  "price": 375,
  "screen": "4.7' IPS",
  "capacity": "32GB",
  "color": "black",
  "ram": "2GB",
  "year": 2016,
  "image": "img/phones/apple-iphone-7/black/00.webp"
}
```

GET `/products/new`

```
[
  {
    "id": 78,
    "category": "phones",
    "itemId": "apple-iphone-14-128gb-purple",
    "name": "Apple iPhone 14 128GB Purple",
    "fullPrice": 1056,
    "price": 980,
    "screen": "6.1' IPS",
    "capacity": "128GB",
    "colour": "purple",
    "ram": "6GB",
    "year": 2022,
    "image": "img/phones/apple-iphone-11/purple/00.jpg"
  },
  ...
]
```

GET `/products/discount`

```
[
  {
    "id": 84,
    "category": "phones",
    "itemId": "apple-iphone-14-pro-1tb-spaceblack",
    "name": "Apple iPhone 14 Pro 1TB Space Black",
    "fullPrice": 1740,
    "price": 1520,
    "screen": "6.1' OLED",
    "capacity": "1TB",
    "colour": "spaceblack",
    "ram": "6GB",
    "year": 2022,
    "image": "img/phones/apple-iphone-11-pro/spacegray/00.jpg"
  },
  ...
]
```

### Accessories

GET `/accessories`

```
[
  {
    "id": 121,
    "category": "accessories",
    "itemId": "apple-watch-series-3-38mm-space-gray",
    "name": "Apple Watch Series 3 38mm Space Gray",
    "fullPrice": 199,
    "price": 169,
    "screen": "1.3' OLED",
    "capacity": "38mm",
    "colour": "space gray",
    "ram": "768MB",
    "year": 2017,
    "image": "img/accessories/apple-watch-series-3/space-gray/00.webp"
  },
  ...
]
```

Query parameters include: 

`sortBy`: What field should be sorted by

`sortOrder`: ASC or DESC

`limit`: How many products should be queried

`page`: Offset by page

### Phones

GET `/phones`

```
[
  {
    "id": 1,
    "category": "phones",
    "itemId": "apple-iphone-7-32gb-black",
    "name": "Apple iPhone 7 32GB Black",
    "fullPrice": 400,
    "price": 375,
    "screen": "4.7' IPS",
    "capacity": "32GB",
    "colour": "black",
    "ram": "2GB",
    "year": 2016,
    "image": "img/phones/apple-iphone-7/black/00.jpg"
  },
  ...
]
```

Query parameters include: 

`sortBy`: What field should be sorted by

`sortOrder`: ASC or DESC

`limit`: How many products should be queried

`page`: Offset by page

### Tablets

GET `/tablets`

```
[
  {
    "id": 155,
    "category": "tablets",
    "itemId": "apple-ipad-pro-11-2021-128gb-spacegray",
    "name": "Apple iPad Pro 11 (2021) 128GB Space Gray",
    "fullPrice": 799,
    "price": 749,
    "screen": "11' Liquid Retina",
    "capacity": "128GB",
    "colour": "spacegray",
    "ram": "8GB",
    "year": 2021,
    "image": "img/tablets/apple-ipad-pro-11-2021/spacegray/00.webp"
  },
  ...
]
```

Query parameters include: 

`sortBy`: What field should be sorted by

`sortOrder`: ASC or DESC

`limit`: How many products should be queried

`page`: Offset by page

### Detailed info

GET `/products-detailed`

```
[
  {
    "id": "apple-iphone-11-128gb-black",
    "namespaceId": "apple-iphone-11",
    "name": "Apple iPhone 11 128GB Black",
    "capacityAvailable": [
      "64GB",
      "128GB",
      "256GB"
    ],
    "capacity": "128GB",
    "priceRegular": 1100,
    "priceDiscount": 1050,
    "coloursAvailable": [
      "black",
      "green",
      "yellow",
      "white",
      "purple",
      "red"
    ],
    "colour": "black",
    "images": [
      "img/phones/apple-iphone-11/black/00.jpg",
      "img/phones/apple-iphone-11/black/01.jpg",
      "img/phones/apple-iphone-11/black/02.jpg",
      "img/phones/apple-iphone-11/black/03.jpg",
      "img/phones/apple-iphone-11/black/04.jpg"
    ],
    "description": [
      {
        "title": "And then there was Pro",
        "text": [
          "A transformative triple-camera system that adds tons of capability without complexity.",
          "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
        ]
      },
      {
        "title": "Camera",
        "text": [
          "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
        ]
      },
      {
        "title": "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
        "text": [
          "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
        ]
      }
    ],
    "screen": "6.1' IPS",
    "resolution": "1792x828",
    "processor": "Apple A13 Bionic",
    "ram": "4GB",
    "camera": "12 Mp + 12 Mp + 12MP",
    "zoom": "Digital, 5x",
    "cell": "{GPRS,EDGE,WCDMA,UMTS,HSPA,LTE}"
  },
  ...
]
```

GET `/products-detailed/apple-iphone-11-128gb-black`

```
{
  "id": "apple-iphone-11-128gb-black",
  "namespaceId": "apple-iphone-11",
  "name": "Apple iPhone 11 128GB Black",
  "capacityAvailable": [
    "64GB",
    "128GB",
    "256GB"
  ],
  "capacity": "128GB",
  "priceRegular": 1100,
  "priceDiscount": 1050,
  "coloursAvailable": [
    "black",
    "green",
    "yellow",
    "white",
    "purple",
    "red"
  ],
  "colour": "black",
  "images": [
    "img/phones/apple-iphone-11/black/00.jpg",
    "img/phones/apple-iphone-11/black/01.jpg",
    "img/phones/apple-iphone-11/black/02.jpg",
    "img/phones/apple-iphone-11/black/03.jpg",
    "img/phones/apple-iphone-11/black/04.jpg"
  ],
  "description": [
    {
      "title": "And then there was Pro",
      "text": [
        "A transformative triple-camera system that adds tons of capability without complexity.",
        "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
      ]
    },
    {
      "title": "Camera",
      "text": [
        "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
      ]
    },
    {
      "title": "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
      "text": [
        "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
      ]
    }
  ],
  "screen": "6.1' IPS",
  "resolution": "1792x828",
  "processor": "Apple A13 Bionic",
  "ram": "4GB",
  "camera": "12 Mp + 12 Mp + 12MP",
  "zoom": "Digital, 5x",
  "cell": "{GPRS,EDGE,WCDMA,UMTS,HSPA,LTE}"
}
```

GET `/products-detailed/apple-iphone-11-128gb-black/recommended`

```
[
  {
    "id": 149,
    "category": "accessories",
    "itemId": "apple-watch-se-40mm-silver",
    "name": "Apple Watch SE 40mm Silver",
    "fullPrice": 279,
    "price": 249,
    "screen": "1.57' OLED",
    "capacity": "40mm",
    "colour": "silver",
    "ram": "1GB",
    "year": 2020,
    "image": "img/accessories/apple-watch-se/silver/00.webp"
  },
  ...
]
```

## Static files

All static file request should be sent on `/static`, followed by their path in `public` folder

GET `/static/img/banner-accessories.png`

Response: ![image](https://github.com/fe-oct23-code-fairies/phone-catalog-backend/assets/55620816/bd8c5ebc-84a1-48ff-bf1b-d2d26e32e13b)
