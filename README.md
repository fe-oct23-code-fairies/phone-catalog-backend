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

GET `/accessories/apple-watch-series-3-38mm-space-gray`

```
{
  "id": "apple-watch-series-3-38mm-space-gray",
  "namespaceId": "apple-watch-series-3",
  "name": "Apple Watch Series 3 38mm Space Gray",
  "capacityAvailable": ["38mm", "42mm"],
  "capacity": "38mm",
  "priceRegular": 199,
  "priceDiscount": 169,
  "colorsAvailable": ["space gray", "silver", "gold"],
  "color": "space gray",
  "images": [
    "img/accessories/apple-watch-series-3/space-gray/00.webp",
    "img/accessories/apple-watch-series-3/space-gray/01.webp",
    "img/accessories/apple-watch-series-3/space-gray/02.webp"
  ],
  "description": [
    {
      "title": "Monitor your health",
      "text": [
        "The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
      ]
    },
    {
      "title": "Stay connected on the go",
      "text": [
        "With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
      ]
    },
    {
      "title": "Stream your favorite music",
      "text": [
        "With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
      ]
    }
  ],
  "screen": "1.3' OLED",
  "resolution": "272x340",
  "processor": "Apple S3",
  "ram": "768MB",
  "cell": ["Wi-Fi", "Bluetooth", "LTE"]
}
```

GET `/accessories/apple-watch-series-3-38mm-space-gray/recommended`

```
[
  {
    "id": 126,
    "category": "accessories",
    "itemId": "apple-watch-series-3-42mm-silver",
    "name": "Apple Watch Series 3 42mm Silver",
    "fullPrice": 250,
    "price": 219,
    "screen": "1.3' OLED",
    "capacity": "42mm",
    "colour": "silver",
    "ram": "768MB",
    "year": 2017,
    "image": "img/accessories/apple-watch-series-3/silver/00.webp"
  },
  ...
]
```

GET `/accessories/namespace/apple-watch-series-3`

```
[
  {
    ...,
    "namespaceId": "apple-watch-series-3",
    ...
  },
  {
    ...,
    "namespaceId": "apple-watch-series-3",
    ...
  },
  ...
]
```

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

GET `/phones/apple-iphone-11-128gb-black`

```
{
  "id": "apple-iphone-11-128gb-black",
  "namespaceId": "apple-iphone-11",
  "name": "Apple iPhone 11 128GB Black",
  "capacityAvailable": ["64GB", "128GB", "256GB"],
  "capacity": "128GB",
  "priceRegular": 1100,
  "priceDiscount": 1050,
  "colorsAvailable": ["black", "green", "yellow", "white", "purple", "red"],
  "color": "black",
  "images": [
    "img/phones/apple-iphone-11/black/00.webp",
    "img/phones/apple-iphone-11/black/01.webp",
    "img/phones/apple-iphone-11/black/02.webp",
    "img/phones/apple-iphone-11/black/03.webp",
    "img/phones/apple-iphone-11/black/04.webp"
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
  "cell": ["GPRS", "EDGE", "WCDMA", "UMTS", "HSPA", "LTE"]
}
```

GET `/phones/apple-iphone-7-32gb-black/recommended`

```
[
  {
    "id": 5,
    "category": "phones",
    "itemId": "apple-iphone-11-128gb-yellow",
    "name": "Apple iPhone 11 128GB Yellow",
    "fullPrice": 1100,
    "price": 1050,
    "screen": "6.1' IPS",
    "capacity": "128GB",
    "colour": "yellow",
    "ram": "4GB",
    "year": 2019,
    "image": "img/phones/apple-iphone-11/yellow/00.jpg"
  },
  ...
]
```

GET `/phones/namespace/apple-iphone-11`

```
[
  {
    ...,
    "namespaceId": "apple-iphone-11",
    ...
  },
  {
    ...,
    "namespaceId": "apple-iphone-11",
    ...
  },
  ...
]
```

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

GET `/tablets/apple-ipad-pro-11-2021-128gb-spacegray`

```
{
  "id": "apple-ipad-pro-11-2021-128gb-spacegray",
  "namespaceId": "apple-ipad-pro-11-2021",
  "name": "Apple iPad Pro 11 (2021) 128GB Space Gray",
  "capacityAvailable": ["128GB", "256GB", "512GB", "1TB", "2TB"],
  "capacity": "128GB",
  "priceRegular": 799,
  "priceDiscount": 749,
  "colorsAvailable": ["spacegray", "silver"],
  "color": "spacegray",
  "images": [
    "img/tablets/apple-ipad-pro-11-2021/spacegray/00.webp",
    "img/tablets/apple-ipad-pro-11-2021/spacegray/01.webp",
    "img/tablets/apple-ipad-pro-11-2021/spacegray/02.webp"
  ],
  "description": [
    {
      "title": "Powerful Performance",
      "text": [
        "Experience incredible power and performance with the Apple iPad Pro 11. With the M1 chip, it delivers a new level of performance, making it faster and more efficient than ever before.",
        "Whether you're editing photos, designing artwork, or multitasking with demanding apps, the iPad Pro 11 handles it all with ease."
      ]
    },
    {
      "title": "Stunning Liquid Retina Display",
      "text": [
        "Enjoy a vibrant and immersive visual experience on the iPad Pro 11's Liquid Retina display. With ProMotion technology and True Tone, the display adapts to your environment, providing smooth scrolling, precise color accuracy, and incredible detail.",
        "From watching movies to editing videos, the iPad Pro 11's display brings your content to life with stunning clarity."
      ]
    },
    {
      "title": "Versatile Camera System",
      "text": [
        "Capture stunning photos and videos with the iPad Pro 11's advanced camera system. Featuring a 12MP Ultra Wide front camera and a 12MP Wide rear camera with LiDAR scanner, you can take high-quality shots and enjoy augmented reality experiences.",
        "Whether you're video calling, scanning documents, or recording 4K videos, the iPad Pro 11's camera system delivers exceptional performance."
      ]
    }
  ],
  "screen": "11' Liquid Retina",
  "resolution": "2388x1668",
  "processor": "Apple M1",
  "ram": "8GB",
  "camera": "12MP + 12MP",
  "zoom": "Digital zoom up to 5x",
  "cell": ["Not applicable"]
}
```

GET `/tablets/apple-ipad-pro-11-2021-128gb-spacegray/recommended`

```
[
  {
    "id": 156,
    "category": "tablets",
    "itemId": "apple-ipad-pro-11-2021-128gb-silver",
    "name": "Apple iPad Pro 11 (2021) 128GB Silver",
    "fullPrice": 799,
    "price": 749,
    "screen": "11' Liquid Retina",
    "capacity": "128GB",
    "colour": "spacegray",
    "ram": "8GB",
    "year": 2021,
    "image": "img/tablets/apple-ipad-pro-11-2021/silver/00.webp"
  },
  ...
]
```

GET `/tablets/namespace/apple-ipad-pro-11-2021`

```
[
  {
    ...,
    "namespaceId": "apple-ipad-pro-11-2021",
    ...
  },
  {
    ...,
    "namespaceId": "apple-ipad-pro-11-2021",
    ...
  },
  ...
]
```

## Static files

All static file request should be sent on `/static`, followed by their path in `public` folder

GET `/static/img/banner-accessories.png`

Response: ![image](https://github.com/fe-oct23-code-fairies/phone-catalog-backend/assets/55620816/bd8c5ebc-84a1-48ff-bf1b-d2d26e32e13b)
