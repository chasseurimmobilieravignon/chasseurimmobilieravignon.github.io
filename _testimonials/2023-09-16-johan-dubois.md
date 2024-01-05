---
title: Johan Dubois - Avignon
date: 2023-09-16 00:00:00
description: Description à compléter
featured_image: /assets/img/testimonials/johan-dubois/01.jpeg
testimonial:
    buyer: Johan Dubois
    project_type: achat
    city: Avignon
    comment: L'accompagnement par Frédérique a été parfait, du premier jour jusqu'à la signature de l'acte. Une personne à l'écoute de ce que vous recherchez, qui vous apportera des réponses non seulement sur le secteur de l'immobilier mais aussi administratif, fiscal, etc. Je recommande sans hésiter. A bientot peut etre.
    answer:
    platform: Google My Business
    link: https://g.co/kgs/qQtc7uc
images:
    - url: /assets/img/testimonials/johan-dubois/01.jpeg
    - url: /assets/img/testimonials/johan-dubois/02.jpeg
    - url: /assets/img/testimonials/johan-dubois/03.jpeg
    - url: /assets/img/testimonials/johan-dubois/04.jpeg
    - url: /assets/img/testimonials/johan-dubois/05.jpeg
    - url: /assets/img/testimonials/johan-dubois/06.jpeg
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