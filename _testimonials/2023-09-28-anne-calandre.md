---
title: Anne Calandre - Avignon
date: 2023-09-28 00:00:00
description: This is a demo post that shows what you can do inside portfolio and blog posts. We’ve included everything you need to create engaging posts and case studies to show off your work in a beautiful way.
featured_image: /assets/img/testimonials/anne-calandre/01.jpeg
testimonial:
    city: Avignon
    comment: Je suis tres heureuse de ma collaboration avec Frédérique. Son professionnalisme et sa capacité à comprendre mes besoins rapidement on rendu possible ce qui n'aurait jamais pu l'etre autrement a distance. Elle a rapidement compris mes besoins. Pas de perte de temps a explorer des bien qui ne remplissaient pas tout mes criteres. Sa communication a été impeccable et surtout honnete tout au long du processus. Ponctuelle, a l'écoute, du premier contact jusqu'a la signature. Par ailleurs elle a beaucoup d'humour ce qui ne gate rien. Merci encore, Frédérique.
    answer:
    platform: Google My Business
    link: https://g.co/kgs/m3qWrDK
images:
    - url: /assets/img/testimonials/anne-calandre/01.jpeg
    - url: /assets/img/testimonials/anne-calandre/02.jpeg
    - url: /assets/img/testimonials/anne-calandre/03.jpeg
    - url: /assets/img/testimonials/anne-calandre/04.jpeg
    - url: /assets/img/testimonials/anne-calandre/05.jpeg
    - url: /assets/img/testimonials/anne-calandre/06.jpeg
    - url: /assets/img/testimonials/anne-calandre/07.jpeg
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