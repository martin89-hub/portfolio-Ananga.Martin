const mainContent = document.getElementById('main-content');

// Vérification si mainContent est null
if (mainContent) {
    // Définissez un type pour le nom de la page
    type PageName = 'accueil' | 'creations' | 'contact' | '404';

    // Fonction pour charger le contenu d'une page
    function loadPageContent(pageName: PageName) {
        fetch(`./pages/${pageName}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erreur de chargement de la page ${pageName}`);
                }
                return response.text();
            })
            .then(html => {
                // Vérification si mainContent est toujours non null avant d'agir
                if (mainContent) {
                    mainContent.innerHTML = html;
                }
            })
            .catch(error => {
                console.error(error);
                // Vérification si mainContent est toujours non null avant d'agir
                if (mainContent) {
                    mainContent.innerHTML = '<h2>404 - Page non trouvée</h2>';
                }
            });
    }

    // Fonction de routage
    function handleNavigation() {
        const path = window.location.pathname;
        const pageName = getPageNameFromPath(path);

        loadPageContent(pageName);
    }

    // Fonction pour extraire le nom de la page à partir du chemin
    function getPageNameFromPath(path: string): PageName {
        if (path === '/' || path === '/accueil') {
            return 'accueil';
        } else if (path === '/creations') {
            return 'creations';
        } else if (path === '/contact') {
            return 'contact';
        } else {
            return '404';
        }
    }

    // Écoute de l'événement de changement d'URL
    window.addEventListener('popstate', handleNavigation);

    // Charge de la bonne page lors du premier chargement
    handleNavigation();
} else {
    console.error("L'élément 'main-content' est null.");
}
