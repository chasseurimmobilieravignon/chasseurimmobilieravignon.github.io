---
title: Didier Sedard - Violès
date: 2022-03-24 00:00:00
description: Description à compléter.
featured_image: /assets/img/testimonials/didier-sedard/01.jpeg
testimonial:
    buyer: Didier Sedard
    project_type: achat
    city: Violès
    comment: Nous avons eu un  bon contact avec Frédérique dès le départ. C'est une personne très à l'écoute et qui a de suite cerné nos souhaits. Frédérique a une bonne connaissance de sa région et est très professionnelle. Elle a aussi beaucoup de patience car nous avons été des clients difficile à satisfaire. Mais le résultat est là, elle nous a trouvé la maison de nos rêves. Encore merci Frédérique pour votre dévouement et votre accompagnement.
    answer: Merci à vous Didier et Martine de votre confiance ! Chaque client a son cahier des charges et dans un marché aussi tendu que celui que nous connaissons, vous avez toujours été réactifs et disponibles avec une bonne humeur sans faille 😊, ce qui a rendu ce travail d'équipe, très agréable. Je suis ravie d'avoir contribué à votre projet de venir vous installer dans notre belle région du Vaucluse, belle et heureuse vie à tous les deux ! Frédérique
    platform: Google My Business
    link: https://g.co/kgs/xnJnHUk
images:
    - url: /assets/img/testimonials/didier-sedard/01.jpeg
    - url: /assets/img/testimonials/didier-sedard/02.jpeg
    - url: /assets/img/testimonials/didier-sedard/03.jpeg
    - url: /assets/img/testimonials/didier-sedard/04.jpeg
    - url: /assets/img/testimonials/didier-sedard/05.jpeg
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