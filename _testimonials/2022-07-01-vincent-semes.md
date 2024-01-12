---
title: Vincent Semes - Viens
date: 2022-07-01 00:00:00
description: Description à compléter.
featured_image: /assets/img/testimonials/vincent-semes/01.jpeg
testimonial:
    buyer: Vincent Semes
    project_type: achat
    city: Viens
    comment: Un service et un suivi impeccable. Le mot perfection est de circonstance!
    answer: Cher Vincent ! Un grand merci pour cette note 5* ! Je suis sincèrement ravie d'avoir pu aider à concrétiser ce projet important et suis heureuse de notre belle rencontre. Profite bien de cet appartement sous le soleil du Luberon ️! Frédérique
    platform: Immodvisor
    link: https://www.immodvisor.com/pro/mon-chasseur-immo-frederique-lodola-avignon-84000-48627.html
images:
    - url: /assets/img/testimonials/vincent-semes/01.jpeg
    - url: /assets/img/testimonials/vincent-semes/02.jpeg
    - url: /assets/img/testimonials/vincent-semes/03.jpeg
    - url: /assets/img/testimonials/vincent-semes/04.jpeg
    - url: /assets/img/testimonials/vincent-semes/05.jpeg
    - url: /assets/img/testimonials/vincent-semes/06.jpeg
    - url: /assets/img/testimonials/vincent-semes/07.jpeg
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