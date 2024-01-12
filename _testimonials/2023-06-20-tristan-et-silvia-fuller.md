---
title: Tristan et Silvia Fuller - Malemort-du-Comtat
date: 2023-06-20 00:00:00
description: Description à compléter.
featured_image: /assets/img/testimonials/tristan-et-silvia-fuller/01.jpeg
testimonial:
    buyer: Tristan et Silvia Fuller
    project_type: achat
    city: Malemort-du-Comtat
    comment: Frédérique nous a guidé et accompagné dans notre projet avec son expertise, sa gentillesse et son efficacité. Pendant tout le processus, sa voix rassurante, sa perspicacité et ses conseils nous ont énormément soutenus. D’ailleurs, Frédérique a toujours été disponible en cas d’urgence, notamment pendant le weekend, et elle était capable de répondre à toute question que nous avons eue. C’était surtout apprécié avec notre achat à distance et sa volonté de nous aider ’sur place’ était vraiment indispensable. Un grand merci pour tout Fréderique !
    answer:
    platform: Immodvisor
    link: https://www.immodvisor.com/pro/mon-chasseur-immo-frederique-lodola-avignon-84000-48627.html
images:
    - url: /assets/img/testimonials/tristan-et-silvia-fuller/01.jpeg
    - url: /assets/img/testimonials/tristan-et-silvia-fuller/02.jpeg
    - url: /assets/img/testimonials/tristan-et-silvia-fuller/03.jpeg
    - url: /assets/img/testimonials/tristan-et-silvia-fuller/04.jpeg
    - url: /assets/img/testimonials/tristan-et-silvia-fuller/05.jpeg
    - url: /assets/img/testimonials/tristan-et-silvia-fuller/06.jpeg
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