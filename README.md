# Dice Throw Simulator

A quick way to get some dices to play with when you can't find any.

![Example how to use the simulator](dice.gif)

Using Daniel Roesler's [dice.css](https://github.com/diafygi/dice-css)

[Go and play](https://codepo8.github.io/dice-throw-simulator/index.html)



## Changing the index.html

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GitHub page as PWA template</title>
  <link rel="canonical" href="https://{username}.github.io/{repository}/" />
  <link rel="manifest" href="/{repository}/manifest.json">
</head>
<body>
  <h1>GitHub page as PWA template</h1>
  <script>
      if (navigator.serviceWorker) {
        navigator.serviceWorker.register (
          '/{repository}/js/sw.js',
          {scope: '/{repository}/'}
        )
      }
  </script>
</body>
</html>
``` 

## Changing the manifest to make your app installable



## Changing the serviceworker to make your site available offline