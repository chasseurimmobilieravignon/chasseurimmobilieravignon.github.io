---
title: Alexandra Jorgacevic - Avignon
date: 2023-03-24 00:00:00
description: Description à compléter.
featured_image: /assets/img/testimonials/alexandra-jorgacevic/01.jpeg
testimonial:
    buyer: Alexandra Jorgacevic
    project_type: achat
    city: Avignon
    comment: Je suis totalement satisfaite du travail de Frederique Lodola. Je ne pouvais espérer meilleur accompagnement dans ma recherche. Frederique est extrêmement précise, investie, disponible et a parfaitement compris mon projet. De plus, j'ai énormément apprécié l'aspect humain lors de mes différents échanges  Frédérique. Une expérience positive à 100%.
    answer:
    platform: Google My Business
    link: https://g.co/kgs/WzE9KWh
images:
    - url: /assets/img/testimonials/alexandra-jorgacevic/01.jpeg
    - url: /assets/img/testimonials/alexandra-jorgacevic/02.jpeg
    - url: /assets/img/testimonials/alexandra-jorgacevic/03.jpeg
    - url: /assets/img/testimonials/alexandra-jorgacevic/04.jpeg
---

{{ page.testimonial.comment }}

<a href="{{ page.testimonial.link }}" target="blank">Voir ce témoignage sur {{ page.testimonial.platform }}</a>

<div class="blogGlide fullWidth">
    <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
            {% for image in page.images %}
            <li class="glide__slide">
                <img src="{{ image.url }}">
            </li>
            {% endfor %}
        </ul>
    </div>
    <div class="glide__arrows d-flex justify-content-center mt-2" data-glide-el="controls">
          <button class="glide__arrow text-default position-static" data-glide-dir="<"><i class="ni ni-bold-left"></i></button>
          <button class="glide__arrow text-default position-static" data-glide-dir=">"><i class="ni ni-bold-right"></i></button>
    </div>
</div>