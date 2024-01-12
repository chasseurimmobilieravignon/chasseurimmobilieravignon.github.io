---
title: Elsa Aubert - Morières-les-Avignon
date: 2022-04-03 00:00:00
description: Description à compléter.
featured_image: /assets/img/testimonials/elsa-aubert/01.jpeg
testimonial:
    buyer: Elsa Aubert
    project_type: achat
    city: Morières-les-Avignon
    comment: Nous avons mandaté Frédérique pour la recherche de notre maison pour résidence principale en région avignonnaise et nous sommes très satisfaits de ses services. Professionnelle tout en restant très humaine, ses conseils avisés, sa disponibilité et son expérience nous ont parfaitement accompagnés dans notre projet. Nous la recommandons sans aucune hésitation !
    answer: Merci à vous et Yannick pour votre recommandation de m'avoir accordé votre confiance dès le début. Votre réactivité et la maturité de votre projet ont été clés dans cette réussite. Je pense que vous comme moi, nous nous rappellerons de cette recherche riche en émotions. Nous nous sommes armés de patience pour que cette maison soit celle dans laquelle votre famille s'épanouira ! Belle installation et plein de bonheur à venir :) Frédérique
    platform: Google My Business
    link: https://g.co/kgs/CPz3VJu
images:
    - url: /assets/img/testimonials/elsa-aubert/01.jpeg
    - url: /assets/img/testimonials/elsa-aubert/02.jpeg
    - url: /assets/img/testimonials/elsa-aubert/03.jpeg
    - url: /assets/img/testimonials/elsa-aubert/04.jpeg
    - url: /assets/img/testimonials/elsa-aubert/05.jpeg
    - url: /assets/img/testimonials/elsa-aubert/06.jpeg
    - url: /assets/img/testimonials/elsa-aubert/07.jpeg
    - url: /assets/img/testimonials/elsa-aubert/08.jpeg
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