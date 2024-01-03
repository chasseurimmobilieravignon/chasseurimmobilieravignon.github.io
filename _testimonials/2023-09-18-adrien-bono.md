---
title: Adrien Bono - Avignon
date: 2023-09-18 00:00:00
description: Description à compléter
featured_image: /assets/img/testimonials/adrien-bono/01.jpeg
testimonial:
    city: Avignon
    comment: Frédérique m'a aidé à trouver un bien dans Avignon intra-muros. Elle a rapidement identifié et sélectionné les biens à la vente correspondant à mes critères de recherche. Ses conseils et sa connaissance de la ville m'ont permis de faire le bon choix. Disponible et réactive la collaboration s'est bien passée.
    answer:
    platform: Google My Business
    link: https://g.co/kgs/QTNKY4k
images:
    - url: /assets/img/testimonials/adrien-bono/01.jpeg
    - url: /assets/img/testimonials/adrien-bono/02.jpeg
    - url: /assets/img/testimonials/adrien-bono/03.jpeg
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