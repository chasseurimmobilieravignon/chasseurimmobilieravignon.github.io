---
title: Véronique Veillet - Uzès
date: 2023-12-23 00:00:00
description: Description à compléter.
featured_image: /assets/img/testimonials/veronique-veillet/01.jpeg
testimonial:
    buyer: Véronique Veillet
    project_type: achat
    city: Uzès
    comment: Très satisfaits de la prestation de Mme LODOLA. Une vraie pro,  très à l'écoute, qui a bien cerné notre demande et qui a su y répondre dans 1 délai très court. Un grand merci à elle !
    answer:
    platform: Google My Business
    link: https://g.co/kgs/AaQcgVm
images:
    - url: /assets/img/testimonials/veronique-veillet/01.jpeg
    - url: /assets/img/testimonials/veronique-veillet/02.jpeg
    - url: /assets/img/testimonials/veronique-veillet/03.jpeg
    - url: /assets/img/testimonials/veronique-veillet/04.jpeg
    - url: /assets/img/testimonials/veronique-veillet/05.jpeg
    - url: /assets/img/testimonials/veronique-veillet/06.jpeg
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