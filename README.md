# NgxChessboard

```
npm install jquery @types/jquery
```

Copy projects/demo/src/assets content to your project assets folder.

Fix angular.json:

```
"styles": [
    "projects/demo/src/styles.scss",
    "projects/demo/src/assets/css/chessboard.css"
],
"scripts": [
    "./node_modules/jquery/dist/jquery.js"
]
```

In your app module:

```
import { NgxChessboardModule } from 'projects/ngx-chessboard/src/public-api';

...

  imports: [
    ...,
    NgxChessboardModule,
  ],
```

Then you can use `<ngx-chessboard></ngx-chessboard>`.

Doc about paramaters: https://github.com/loicmarie/ng2-chessboard