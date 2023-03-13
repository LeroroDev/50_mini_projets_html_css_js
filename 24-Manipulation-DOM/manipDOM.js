// Récupération des éléments
const header = $('#header');
const title = $('#title');
const excerpt = $('#excerpt');
const profile_img = $('#profile_img');
const name = $('#name');
const date = $('#date');

// Eléments avec animations 
const animated_bgs = $('.animated-bg');
const animated_bg_texts = $('.animated-bg-text');

// Appel de fonction getData après 2,5s
setTimeout(getData, 2500);

// Fonction pour génerer les données de la carte 
function getData() {
  header.html('<img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />');
  title.html('Lorem ipsum dolor sit amet');
  excerpt.html('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis');
  profile_img.html('<img src="https://randomuser.me/api/portraits/men/50.jpg" alt="" />');
  name.html('Djon Djon');
  date.html('13 mar, 2023');

  // Suppression des classes qui font les animations
  animated_bgs.removeClass('animated-bg');
  animated_bg_texts.removeClass('animated-bg-text');
}
