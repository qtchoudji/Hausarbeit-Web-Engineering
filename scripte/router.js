const englich = document.getElementById('englich');
const german = document.getElementById('german');
const french = document.getElementById('french');
const content = document.getElementById('content');
 ['englich','german', 'french'].forEach( id => {
 document.getElementById( id ).addEventListener( 'click', (event) => {
     document.querySelector(".selected").removeAttribute("class")
     event.target.setAttribute("class","selected")
 history.pushState( { id }, `Title: ${id}`, `${id}.html` );
 setPage( id );
 });
 });
const contentIndex = {
 'englich': {
     "title": "How to start learning computer programming",
     "content": ` Programming (writing computer algorithms) is a lot of fun and very useful. Learning to program will also develop your analytical skills and critical thinking, helping you to deal with all kinds of complex problems (not only those related to computers). It can also put you on the path to a new career or to a new position in software development. As a programmer, you need to focus more on self-study and practice rather than sitting for hours in a boring lecture. If you have an active Internet connection and a PC or smartphone, you are ready to learn how to program yourself. On this site you will learn some programming languages.`,
     "link": " Read More"
     },

     'german': {
        "title": "COMPUTERPROGRAMMIERUNG LERNEN",
        "content": ` Programmieren (Schreiben von Computeralgorithmen) macht viel Spaß und ist sehr nützlich. Wenn Sie programmieren lernen, entwickeln Sie auch Ihre analytischen Fähigkeiten und Ihr kritisches Denken, was Ihnen hilft, mit allen Arten von komplexen Problemen (nicht nur denen, die mit Computern zu tun haben) umzugehen. Es kann Sie auch auf den Weg zu einer neuen Karriere oder zu einer neuen Position in der Softwareentwicklung bringen. Als Programmierer müssen Sie sich mehr auf das Selbststudium und die Praxis konzentrieren, anstatt stundenlang in einer langweiligen Vorlesung zu sitzen. Wenn Sie über eine aktive Internetverbindung und einen PC oder ein Smartphone verfügen, sind Sie bereit zu lernen, wie man selbst programmiert. Auf dieser Website werden Sie einige Programmiersprachen lernen. `,
        "link": "Mehr dazu"
        },

        'french': {
            "title": "COMMENT COMMENCER À APPRENDRE LA PROGRAMMATION INFORMATIQUE",
            "content": `La programmation (l'écriture d'algorithmes informatiques) est très amusante et très utile. Apprendre à programmer développera également vos capacités d'analyse et votre esprit critique, vous aidant à faire face à toutes sortes de problèmes complexes (pas seulement ceux liés aux ordinateurs). Il peut également vous mettre sur la voie d'une nouvelle carrière ou d'un nouveau poste dans le développement de logiciels. En tant que programmeur, vous devez vous concentrer davantage sur l'auto-apprentissage et la pratique plutôt que de rester assis pendant des heures dans une conférence ennuyeuse. Si vous disposez d'une connexion Internet active et d'un PC ou d'un smartphone, vous êtes prêt à apprendre à programmer vous-même. Sur ce site, vous apprendrez quelques langages de programmation. `,
            "link": "Lire la suite"
            },

  'other':{
      "title": "How to start learning computer programming",
      "content":"Programming (writing computer algorithms) is a lot of fun and very useful. Learning to program will also develop your analytical skills and critical thinking, helping you to deal with all kinds of complex problems (not only those related to computers).It can also put you on the path to a new career or to a new position in software development. As a programmer, you need to focus more on self-study and practice rather than sitting for hours in a boring lecture. If you have an active Internet connection and a PC or smartphone, you are ready to learn how to program yourself. On this site you will learn some programming languages.",
      "link":"Read More"
  } 
};
window.addEventListener('popstate', () => {
 setPage( history.state ? history.state.id : 'other' );
 });
function setPage( index ){
    content.querySelector("h2").innerText = contentIndex[index].title;
    content.querySelector("p").innerText = contentIndex[index].content;
    content.querySelector("a").innerText = contentIndex[index].link;

 }
