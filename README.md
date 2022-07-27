# ascii-face-shop

## Initial API setup
You need to setup `vue-test` project which you sent me in email. I used it's endpoint `http://localhost:3000/` to get, sort products and ads image.
You can also download `vue-test` by [click here.](https://github.com/hrssatawara/ascii-face-shop/blob/main/vue-test.zip)

In that repository there is steps to start.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Features I have implemented
----

- products are displayed in a grid. :heavy_check_mark:
- give the user an option to sort the products in ascending order. Can sort by "size", "price" or "id". :heavy_check_mark:
- each product has :
  - We should display the faces in their correct size, to give customers a realistic impression of what they're buying. :heavy_check_mark:
  - Price should be formatted as dollars like `$3.51`. :heavy_check_mark:
  - Dates should be displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date should be displayed. :heavy_check_mark:
- the product grid should automatically load more items as you scroll down. :heavy_check_mark:
- display an animated "loading..." message while the user waits for the data to load. :heavy_check_mark:
- when the user reaches the end and there are no more products to display, show the message "~ end of catalogue ~". :heavy_check_mark:
- after every 20 products we need to insert an advertisement from one of our sponsors. Use the same markup as the advertisement in the header shown in `public/index/html`, but make sure the `?r` query param is randomly generated each time an ad is displayed. (_Some UI issues still there._) :heavy_check_mark:
- Ads should be randomly selected, but a user must never see the same ad twice in a row. :heavy_check_mark: