rh._.exports({"0":[[" ","Conception de modèles budgétaires de projet"]],"1":[[" ","Cette section souligne les termes clés et les informations de processus commercial permettant de développer des modèles budgétaires de projet pour Integra."],[" ","- ","Les détenteurs de budget et les personnes désignées sont chargés de soumettre des budgets au département Finances. Ils sont responsables de renseigner le Modèle de développement budgétaire standard avec toutes informations budgétaires requises."," ","- ","Les budgets de projet sont soumis à l’approbation du flux de travail."," "," Pour les projets restreints au siège social, tous les budgets soumis au flux de travail sont approuvés par le groupe d’assistance de la PQU du département Finances. "," "," Concernant tous les projets non restreints et les projets restreints temporairement au siège social gérés par l’unité FP&A, la FP&A soumet tous les budgets au flux de travail au sein de leur groupe. Les flux de travail budgétaires sont approuvés par le Directeur principal de l’unité de Planification et analyse financières (FP&A). "," "," Pour les autres projets restreints temporairement au siège social gérés par le département Finances (groupe d’assistance de la PQU), tous les budgets soumis au flux de travail sont approuvés par ce groupe. "," "," Concernant la CRRD et la RAI, le département Finances soumet des budgets au flux de travail, qui son approuvés par le Contrôleur financier ou la personne désignée. "," ","- ","Les limites de financement ne sont pas applicables aux projets non restreints et restreints temporairement."],[" ","Integra utilise les sous-projets des deux marnières suivantes :"," "," pour identifier des sous-projets de sous-attribution "," "," pour identifier des sous-projets sans sous-attribution "," ","Les deux types de sous-projets sont attribués automatiquement à un code d’extension D1 (une valeur numérique mentionnée à la fin de l’ID de projet). L’exemple ci-dessous montre la convention de dénomination relative à l’ID de projet/D1."," ","Les deux types de sous-projets sont créés dans Integra comme indiqué ci-dessous :"," "," Un code d’extension D1 de sous-projet de sous-attribution est créé au niveau central dans OTIS et est envoyé automatiquement à Integra via l’interface OTIS/Integra.\n      "," "," Une extension D1 est requise pour tous les sous-projets de sous-attributions, quelle que soit la valeur budgétaire de sous-attribution. "," "," Un code d’extension D1 de sous-projet sans sous-attribution est créé manuellement dans l’entité comptable pertinente d’Integra. "],[" ","Toutes les immobilisations imputées à un projet doivent être attribuées à une catégorie de projet associée à un « Groupe d’actifs provenant d'un donateur ». Cela a lieu pendant la configuration de projet, lorsque les catégories de projet sont attribuées (catégories standards) ou créées (catégories uniques). Ce processus permet d’atteindre le même objectif et attribue un Groupe d’actifs provenant d'un donateur à une catégorie de projet spécifique. Toutefois, les étapes d’attribution du Groupe d’actifs provenant d'un donateur sont différentes pour le ","Modèle de développement budgétaire pour projet de catégorie unique"," et le ","Modèle de développement budgétaire pour projet de catégorie standard","."," ","Modèle de développement budgétaire pour projet de catégorie unique :"," ce modèle est principalement utilisé dans la CRRD où les formats de rapport de donateur sont déterminés par le donateur. Le ","Modèle de développement budgétaire pour projet de catégorie unique"," attribue automatiquement le « Groupe d’actifs provenant d'un donateur » dans la feuille de calcul Catégorie de projet lorsque les comptes principaux suivants sont saisis dans l’onglet Source des données."," ","Tableau de groupe d’actifs"," ","Compte principal"," ","Description du compte principal"," ","Groupe d’actifs"," ","74101"," ","Équipement informatique < 5 000 $"," ","DITUNDR5K"," ","74102"," ","Autre équipement < 5 000 $"," ","DOTUNDR5K"," ","74103"," ","Équipement et mobilier >= 5 000 $"," ","DEQFOVER5K"," ","74130"," ","Achat de véhicules"," ","DVEHICLES"," ","85000"," ","Actif CIK (non-amortissable)"," ","CIKASSETNO"," ","Les catégories de projet identifiées par « Groupe d’actifs provenant d'un donateur » (à partir du tableau ci-dessus) seront téléchargées dans Integra. La catégorie de projet concernée est sélectionnée au moment de l’obtention de l’actif et la marque d’actif (à partir du tableau du Groupe d’actifs ci-dessus) de la catégorie de projet sera envoyée au bon de commande."," ","Une fois l’actif reçu et le produit reçu enregistrés dans Integra, le système créera automatiquement la fiche d’actif dans le module Immobilisations et attribuera une très faible valeur à l’actif.\n    ","\n    ‎\n  "],[" ","- ","Le Modèle de développement budgétaire est un modèle standardisé utilisé pour développer et modifier les budgets de projet."," ","- ","Les Modèle de développement budgétaire contient plusieurs macros et formules qui facilitent le remplissage des modèles de projet téléchargés dans Integra."," ","- ","Veillez à lire TOUTES les informations figurant dans la Fiche d’instructions du modèle. (1er onglet du fichier)"," "," D’autres consignes utilisateur sont également intégrées dans chaque colonne des fiches à renseigner. "," ","- ","Deux dossiers de Modèle de développement budgétaire Integra sont disponibles sur Box :"," "," Modèle de catégorie de projet standard "," "," Modèle de catégorie de projet unique "," ","- ","Veillez à utiliser le modèle adapté !"," "," Tous les projets non restreints utilisent des catégories de projet standards "," "," Les projets restreints temporairement peuvent utiliser les catégories de projet standards or uniques ; c’est une décision à prendre en fonction du projet spécifique. "," "," Les projets restreints peuvent utiliser des catégories de projet uniques ou standards. Voici des exemples d’utilisation de chacune d’elles.\n      "," "," Gouv. américain – utilisation de catégories de projet standards "," "," Europe (Financement ECHO) – utilisation de catégories de projet uniques "],[" ","Utilisez cette procédure pour extraire les lignes budgétaires du donateur requises pour le modèle budgétaire d’Integra. Elle permet d’utiliser facilement la fonction copier/coller pour renseigner le modèle efficacement."," ","- ","Pour les projets utilisant des catégories de projet standard, les budgets du donateur sont présentés au donateur au format budgétaire interne de l’IRC. Lorsque vous renseignez le modèle de développement de projet, il est facile de copier/coller pour attribuer les catégories de projet standards car elles ont toutes le même format. "," ","- ","Pour les projets utilisant des catégories uniques, le budget initial est toujours préparé dans le modèle budgétaire interne de l’IRC. Ces lignes budgétaires sont ensuite associées au format budgétaire du donateur qui reflète généralement le format de rapport du donateur.  Dans ces situations, le remplissage du modèle de développement de projet ne doit pas suivre le format de l’IRC car ce format ne correspond pas au format budgétaire/de rapport requis par le donateur."],[" "," Téléchargez le budget approuvé du donateur à partir d’OTIS. "," "," Copiez et collez toutes les lignes du budget du donateur dans une nouvelle feuille Excel vierge. "," "," Dans cette nouvelle feuille Excel, supprimez toutes les colonnes et les lignes dans le budget du donateur qui ne sont pas requises pour le Modèle de développement budgétaire d’Integra. Voici quelques exemples de lignes à supprimer : "," "," lignes avec titres d’en-têtes "," "," lignes avec informations de sous-total "," "," lignes sans montants en dollars "," "," lignes non requises par les exigences de rapport du donateur "," "," Les autres lignes extérieures ne sont pas requises pour le Modèle de développement budgétaire d’Integra. "],[" ","Utilisez cette procédure pour renseigner le fichier du Modèle budgétaire. Ce fichier contient plusieurs formules et macros intégrées permettant de renseigner efficacement et avec précision tous les fichiers téléchargés requis."," ","Exigences Excel et recommandations :"," ","- ","Ne modifiez et ne supprimez PAS d’en-têtes de lignes et de colonnes dans le Modèle de développement budgétaire."," ","- ","Activez toujours les macros dans le modèle lorsqu’on vous le demande."," ","- ","Désactivez l’option de calcul automatique. Dans la barre d’outils Excel, accédez à ","Formules ",">"," Options de calcul ","et sélectionnez ","Manuel","."],[" ","- ","La saisie de données est uniquement requise dans les feuilles de calcul du fichier indiquées en rouge."," ","- ","Seuls les champs indiqués en jaune peuvent être renseignés."," "," Pour obtenir des consignes de remplissage pour chacun de ces champs, faites passer le curseur sur l’en-tête de colonne. "," ","- ","Une fois tous les champs jaunes pertinents remplis dans une feuille, suivez les instructions dans les flèches bleues pour traiter les feuilles du fichier."," ","- ","En cas de copie/collage d’informations à partir d’un fichier différent, utilisez l’option « collage spécial » afin que les données soient copiées sans être formatées."],[" "," Téléchargez le Modèle de développement budgétaire concerné dans Box. "," "," Renseignez le Modèle de développement budgétaire conformément aux instructions figurant dans le fichier de modèle. "],[" ","Utilisez cette procédure pour préparer et nommer les fichiers téléchargés automatiquement remplis à partir du modèle budgétaire."],[" "," Ouvrez les modèles téléchargés à partir du disque local. "," "," Validez les fichiers téléchargés lorsqu’ils sont ouverts et remplissez-les à partir du fichier source du Modèle de développement budgétaire. "," "," Une fois les fichiers ouverts, le fait de cliquer sur le bouton d’action gris dans chacune des feuilles devrait avoir activé le remplissage automatique des données à partir du fichier source. "," "," « Nettoyez » le fichier en supprimant les lignes et colonnes superflues. "," "," Sauvegardez tous les fichiers dans le disque dur cible conformément aux exigences de la convention de dénomination suivante (sans parenthèses).\n      "," ","[ID de projet] [Nom du fichier téléchargé]-[entité juridique].xlsx"," ","Exemple de convention de dénomination requise pour les téléchargements :"," "," EX102 projetCategory-9IRC.xlsx "," "," EX102 BudgetRegister-9IRC.xlsx "," "," EX102 FundingLimit-9IRC.xlsx "],[" ","Utilisez cette procédure pour télécharger les modèles complets dans Box."],[" "," À l’aide de la fonction standard de téléchargement de fichier dans Box, téléchargez le modèle complet dans l’emplacement cible de Box. "," "," Validez le fichier supprimé dans le dossier Box. Cela indique que le téléchargement a eu lieu. "," "," Consultez l’e-mail envoyé indiquant si le téléchargement a réussi. "," "," Visualisez/validez les informations téléchargées dans Integra. "],[" ","rescuenet.rescue.org/i/integra-support"]],"2":[[" ","Informations sur le processus opérationnel"]],"3":[[" ","Flux du processus de configuration de projet"],[" ","Lignes directrices générales de développement budgétaire"],[" ","Sous-projets"],[" ","Développement de lignes budgétaires d’actifs"],[" ","Rôles et responsabilités"," ","Modèle de développement budgétaire"],[" ","Renseigner le modèle de développement budgétaire"," ","Objectif"],[" ","Préparez et renommez les fichiers téléchargés pour Integra (fonction du département Finances uniquement)"],[" ","Téléchargez les modèles de projet complets dans Integra (fonction du département Finances uniquement)"]],"4":[[" ","Objectif"],[" ","Étapes"],[" ","Fin de la procédure\n    ","\n    ‎\n  "],[" ","Étapes"],[" ","Fin de la procédure\n    ","\n    ‎\n  "],[" ","Objectif"],[" ","Étapes"],[" ","Fin de la procédure\n    "],[" ","Objectif"],[" ","Étapes"],[" ","Terminez la procédure"]],"5":[[" ","Note : en fonction du lieu, l’étape n° 2 peut être exécutée par le département Finances, les détenteurs de budget (ou la personne désignée), ou le département Programmes."],[" ","Important : comme Integra autorise une seule convention de dénomination, les équipes du département Finances doivent s’assurer que la description du sous-projet fait la distinction entre le nom d’une organisation et un site local ou secteur de programme."],[" ","Note : cela permet de renseigner le modèle beaucoup plus rapidement. Sinon, le fichier « tourne » pendant une longue période après chaque saisie/mise à jour. Une fois que vous avez terminé de modifier une feuille, la modification revient sur Automatique pour appliquer les mises à jour aux fiches associées."],[" ","Important : Le tiret et l’entité juridique doivent apparaître à la fin du nom, sans espaces entre la description et le tiret (et après) pour que le téléchargement fonctionne."]],"id":"5"})