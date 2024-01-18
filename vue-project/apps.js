// Fonction pour remonter en haut de la page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Fonction pour ouvrir la modal avec les données de la création
  function openModal(title, date, technologies, link, repository) {
    // Sélectionnez les éléments de la modal
    var modal = document.getElementById('modal');
    var modalTitle = document.getElementById('modalTitle');
    var modalDate = document.getElementById('modalDate');
    var modalTechnologies = document.getElementById('modalTechnologies');
    var modalLink = document.getElementById('modalLink');
    var modalRepository = document.getElementById('modalRepository');
  
  
  // Logique pour ouvrir la modal et remplir son contenu avec les paramètres fournis
  
  
  function openModal(title, date, technologies, pdfLink, githubLink) {
    // Logique pour ouvrir la modal et remplir son contenu avec les paramètres fournis
    console.log('Titre:', title);
    console.log('Date:', date);
    console.log('Technologies:', technologies);
    console.log('PDF Link:', pdfLink);
    console.log('GitHub Link:', githubLink);
  
    // Vous pouvez également ajouter le code pour afficher ces informations dans votre modal
  }
  
  
  
    // Remplissez la modal avec les données
    modalTitle.textContent = title;
    modalDate.textContent = date;
    modalTechnologies.textContent = technologies;
  
    // Affichez le lien vers le site s'il est défini
    if (link) {
        modalLink.textContent = "Visiter le site";
        modalLink.href = link;
        modalLink.style.display = "block";
    } else {
        modalLink.style.display = "none";
    }
  
    // Affichez le lien vers le repository GitHub s'il est défini
    if (repository) {
        modalRepository.textContent = "GitHub Repository";
        modalRepository.href = repository;
        modalRepository.style.display = "block";
    } else {
        modalRepository.style.display = "none";
    }
  
    // Affichez la modal
    modal.style.display = 'block';
  
    // Ajoutez un gestionnaire d'événements pour fermer la modal en dehors de son contenu
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
  }
  
  // Fonction pour fermer la modal
  function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
    
    // Supprimez le gestionnaire d'événements pour éviter de fermer la modal lors de futurs clics
    window.onclick = null;
  }
  
  
  // page 404
  
  document.addEventListener('DOMContentLoaded', function () {
    var mainContent = document.getElementById('main-content');
    
    // Définir les routes
    page('/', accueil);
    page('/presentation', presentation);
    page('/creations', creations);
    page('/contact', contact);
    page('*', notFound);
    
    // Fonction pour charger le contenu de la section en fonction de la route
    function loadContent(contentFunction) {
        // Charger le contenu de la section
        contentFunction();
    }
  
    // Gérer les changements d'URL
    page('*', function (context) {
        loadContent(context.state);
    });
  
    // Démarrer le routage
    page.start();
  
    // Fonctions pour chaque section
    function accueil() {
        mainContent.innerHTML = '<h2>Accueil</h2><p>Bienvenue sur la page d\'accueil.</p>';
    }
  
    function presentation() {
        mainContent.innerHTML = '<h2>Présentation</h2><p>Informations sur la présentation.</p>';
    }
  
    function creations() {
        mainContent.innerHTML = '<h2>Créations</h2><p>Liste de créations.</p>';
    }
  
    function contact() {
        mainContent.innerHTML = '<h2>Contact</h2><p>Formulaire de contact.</p>';
    }
  
    function notFound() {
        mainContent.innerHTML = '<h2>404 - Page non trouvée</h2><p>La page demandée n\'existe pas.</p>';
    }
  });
  
    
  
  
  
  
  
  
  
  
  
  
  // Simulation de l'envoi du formulaire (remplacez cette logique par un appel à votre backend)
  function submitForm() {
    var contactForm = document.getElementById('contactForm');
    
    // Obtenez les valeurs des champs du formulaire
    var firstName = contactForm.elements['firstName'].value;
    var lastName = contactForm.elements['lastName'].value;
    var subject = contactForm.elements['subject'].value;
    var message = contactForm.elements['message'].value;
  
    // Exemple de log dans la console (remplacez par l'envoi réel des données)
    console.log('Nom: ' + firstName + ' ' + lastName);
    console.log('Objet: ' + subject);
    console.log('Message: ' + message);
  
    // Remplacez le code ci-dessous par une logique d'envoi réelle vers votre backend (par exemple, utilisez Fetch API)
    // fetch('/votre-endpoint-backend', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         firstName: firstName,
    //         lastName: lastName,
    //         subject: subject,
    //         message: message,
    //     }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     // Traitez la réponse du backend ici
    // })
    // .catch(error => {
    //     console.error('Erreur lors de l\'envoi du formulaire:', error);
    // });
  
    // Affichez un message de confirmation (simulé ici)
    alert('Formulaire soumis avec succès!');
  }
  
  /*nombre de mots maxi pour le message*/
  
  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    var messageTextarea = document.getElementById('message');
  
    form.addEventListener('submit', function (event) {
        var messageWords = messageTextarea.value.split(/\s+/).length;
        
        if (messageWords > 350) {
            alert('Votre message dépasse la limite de 350 mots.');
            event.preventDefault(); // Empêche la soumission du formulaire
        }
    });
  });
  
  
  
  
  
  
  
  
  
    // Mettez à jour la date de dernière mise à jour dans le footer
    var lastUpdateDate = document.getElementById('lastUpdateDate');
    lastUpdateDate.textContent = getFormattedDate(); // Utilisez la fonction getFormattedDate pour obtenir la date formatée
  
  
  // Fonction pour obtenir la date formatée (par exemple, au format "DD/MM/YYYY HH:MM:SS")
  function getFormattedDate() {
    var currentDate = new Date();
    var options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return currentDate.toLocaleDateString('fr-FR', options);
  }
  
  
  
  // réseaux sociaux*/
  
  document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez tous les liens dans #social-media
    var socialLinks = document.querySelectorAll('#social-media a');
  
    // Ajoutez un gestionnaire d'événements à chaque lien
    socialLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Supprimez la classe active de tous les liens
            socialLinks.forEach(function (link) {
                link.classList.remove('active');
            });
  
            // Ajoutez la classe active au lien cliqué
            this.classList.add('active');
        });
    });
  });
  
  
  //ancrage vers les pages
  document.addEventListener('DOMContentLoaded', function () {
    // Charger le contenu de la section par défaut (par exemple, la présentation)
    loadContent('présentation.html');
  
    // Fonction pour charger le contenu d'une section
    function loadContent(section) {
        fetch(section)
            .then(response => response.text())
            .then(data => {
                document.getElementById('contenu').innerHTML = data;
            });
    }
  });
  
  
  
  // Fonction pour basculer entre le mode sombre et le mode clair
  function toggleDarkMode() {
    // Obtenez l'élément body
    var body = document.body;
  
    // Basculez la classe dark-mode sur l'élément body
    body.classList.toggle('dark-mode');
  
    // Enregistrez l'état actuel du mode dans le stockage local (localStorage)
    var isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  }
  
  // Fonction pour charger le mode sombre ou clair en fonction de l'état enregistré
  function loadDarkMode() {
    // Obtenez l'état actuel du mode à partir du stockage local
    var isDarkMode = localStorage.getItem('darkMode') === 'true';
  
    // Obtenez l'élément body
    var body = document.body;
  
    // Appliquez la classe dark-mode si le mode sombre est activé
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }
  }
  
  // Chargez le mode sombre ou clair lors du chargement de la page
  loadDarkMode();
  


  