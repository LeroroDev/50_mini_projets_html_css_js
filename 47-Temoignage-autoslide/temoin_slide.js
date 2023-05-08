const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
    "J'ai travaillé avec littéralement des centaines de développeurs HTML/CSS et je dois dire que la première place revient à ce gars. Ce gars est un développeur incroyable. Il met l'accent sur un code propre et de qualité et accorde une grande attention aux détails. J'aime les développeurs qui respectent chaque aspect d'une conception bien réfléchie et qui font de leur mieux pour le traduire en code. Il va au-delà des attentes et transforme l'ART en PIXELS - sans aucun problème, à chaque fois."  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
    "Ce gars est un développeur frontend incroyable qui a livré la tâche exactement comme nous le voulions, faites-vous une faveur et engagez-le, vous ne serez pas déçu par le travail qu'il fournit. Il fera tout son possible pour s'assurer que vous êtes satisfait de votre projet. Je travaillerai sûrement à nouveau avec lui!"  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
    "Ce gars est un travailleur acharné. La communication était également très bonne avec lui et il était très réactif tout le temps, quelque chose qui n'est pas facile à trouver chez de nombreux freelancers. Nous allons certainement travailler à nouveau avec lui.",
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
    "Ce gars fait tout ce qu'il peut pour que le travail soit bien fait. C'est la deuxième fois que je l'engage et je l'engagerai à nouveau à l'avenir.",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "J'avais des doutes qu'en raison d'un délai serré, ce projet ne pourrait pas être réalisé. Mais ce gars m'a prouvé le contraire non seulement il a livré un travail exceptionnel, mais il a réussi à livrer 1 jour avant la date limite. Et lorsque j'ai demandé quelques révisions, il les a faites en quelques minutes. J'ai hâte de travailler à nouveau avec lui et je le recommande totalement. Merci encore!",
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'Ce gars est un designer et développeur front-end de premier ordre. Il communique bien, travaille rapidement et produit un travail de qualité. Nous avons eu de la chance de travailler avec lui!',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
    "Ce gars est un professionnel de l'informatique jeune et talentueux, proactif et responsable, avec une forte éthique de travail. Il est très fort dans les conversions PSD/HTML et la technologie HTML/CSS. Il est un apprenant rapide, désireux d'apprendre de nouvelles technologies. Il est concentré et a la bonne dynamique pour atteindre les échéances et des résultats exceptionnels.",
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)