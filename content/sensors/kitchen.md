---
title: Kitchen
date: 2019-11-19
published: true
canonical_url: false
tags: 
  - 'Temperature' 
  - 'Humidity'
cover_image: ./images/esp32.jpeg
description: "Sensor values of my kitchen"
data:
    - key: Temperature
      value: '22.1'
      unit: '°C'
    - key: Humidity
      value: '34'
      unit: '%'
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Lorem ipsum</title>
  </head>
  <body>
    <h1>Lorem ipsum</h1>
    <p>{{ page.title }}</p>

    <ul>
      {% for item in page.data %}
        <li>{{ item.name }}, cost: {{ item.cost }}, color: {{ item.color }}</li>
      {% endfor %}
    </ul>
  </body>
</html>Ì∏