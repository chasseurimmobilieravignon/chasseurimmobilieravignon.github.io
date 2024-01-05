---
title: Matthieu Debeaux - Cabrières-d'Avignon
date: 2022-07-14 00:00:00
description: Description à compléter.
featured_image: /assets/img/testimonials/matthieu-debeaux/01.jpeg
testimonial:
    city: Cabrières-d'Avignon
    comment: Frédérique a été géniale tout au long de la recherche. Dès l'étape de l'établissement des critères de recherche, Frédérique a su comprendre nos envies et le type de biens et lieux que nous voulions. Sa réactivité et sa disponinilité lorsqu'une offre qui convenait était mise sur le marché, nous a permis de visiter en premier les biens et de pouvoir acheter celui que nous voulions malgrè un marché très tendu :). Même après cette période de chasse, Frédérique est restée à nos côtés pour s'assurer que la vente, les visites, la réception des clés et le démarrage des travaux puissent se faire facilement bien que nous ne soyons pas toujours sur place ! Encore un très grand merci Frédérique !
    answer:
    platform: Google My Business
    link: https://g.co/kgs/WtBvGLe
images:
    - url: /assets/img/testimonials/matthieu-debeaux/01.jpeg
    - url: /assets/img/testimonials/matthieu-debeaux/02.jpeg
    - url: /assets/img/testimonials/matthieu-debeaux/03.jpeg
    - url: /assets/img/testimonials/matthieu-debeaux/04.jpeg
    - url: /assets/img/testimonials/matthieu-debeaux/05.jpeg
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