rh._.exports({"0":[[" ","Clôture en fin de mois (RAI États-Unis)"]],"1":[[" "," Le Journal Dynad permet de renseigner et télécharger des écritures de journal en masse dans Integra.\n      "," "," Les exemples de journaux téléchargés en masse incluent l’allocation de la paie, les sous-attributions/dépenses, le reclassement des écritures et les saisies d’allocation de coût de programme partagé. "," "," Il est essentiel de sélectionner le nom de journal adéquat dans le Journal Dynad pour s’assurer que les données sont traitées correctement dans Integra.\n          "," "," Chaque nom de journal correspond à un code systématique, c.-à-d., des profiles de diffusions, qui met à jour le système d’Integra de manière adéquate. "," "," Consultez l’annexe à la fin de ce guide pour obtenir une liste complète des noms de journaux et utilisations. "," "," Si vous avez moins de dix (10) lignes, nous vous recommandons de créer des écritures de journal directement dans Integra. "," "," Pour la plupart des tâches commerciales, les transactions sont diffusées à des livres auxiliaires (et non au Grand livre).\n      "," "," Toutefois, certaines transactions sont diffusées directement au Grand livre. "," "," Les statuts de période permettent de contrôler l’accès pour les diffusions au livre et aux livres auxiliaires.\n      "," "," Par exemple, les journaux de factures/paiements des livres auxiliaires des comptes fournisseurs (AP) et clients (AR) doivent tous être diffusés avant le sixième jour ouvré de la clôture de fin de mois. Pour empêcher les utilisateurs de diffuser des livres auxiliaires AR/AP après le sixième jour ouvré, vous pouvez « clore » la diffusion des livres auxiliaires en modifiant le statut de module sur En attente. "],[" "," Fermez/ouvrez les périodes de diffusion fiscale\n      "," "," Ce processus a lieu à des moments précis du mois par les employés désignés du département Finances. "," "," Assurez-vous que toutes les transactions « quotidiennes » ont été diffusées dans la bonne période fiscale. "," "," Transactions intersociétés. "," "," Diffuser des journaux à la fin du mois.\n      "," "," Ce processus désigne les écritures de journal traitées en fin de mois uniquement "," "," Calculer l’ICR et préparer le journal de frais "," "," Exécuter des rapprochements et des analyses\n      "," "," Ce processus implique d’utiliser les transactions/fonctionnalités standards suivantes dans Integra pour identifier et corriger les écarts\n          "," "," Balance générale des comptes "," "," Transactions de pièces "," "," Explorateur de comptabilité source "," "," Suivi des écritures initiales "," "," Générer des rapports\n      "," "," De nombreux rapports sont disponibles pour être analysés dans Integra et Power BI. "],[" ","Consultez la liste de vérification dans l’annexe à ce document. Cette liste de vérification existe également dans RescueNet."],[" ","Pour de nombreuses tâches commerciales de fin de mois, les procédures étapes par étapes sont documentées dans d’autres sections étant donné qu’il s’agit de transactions standards utilisées pour les tâches commerciales quotidiennes. Dans ce cas, une référence à la section/procédure applicable est incluse dans ce document."," ","Cette section inclut des procédures détaillées concernant les tâches ne figurant pas dans un autre guide d’utilisation."],[" ","Utilisez cette procédure pour ouvrir ou clôturer une période fiscale."," ","Une fois la période actuelle fermée, la nouvelle période doit être ouverte immédiatement pour s’assurer que les utilisateurs peuvent effectuer des transactions dès le premier jour de la période suivante."," ","Un groupe de sécurité personnalisé « Clôture de période » (","PrdCls",") a été défini pour permettre aux utilisateurs désignés du département Finances de traiter des transactions périodiques une fois que la période est clôturée et ne peut être modifiée par un utilisateur."," ","Les « statuts » de la période suivante permettent d’ouvrir et de clôturer des périodes fiscales."," ","Ouvert"," : ouvrez tous les utilisateurs admissibles à la diffusion de transactions.  "," ","En attente"," : les transactions ne peuvent pas être diffusées pendant la période. Toutefois, certains utilisateurs du département Finances peuvent diffuser des transactions pour les rapprochements en fin de mois. "," ","Définitivement clôturé"," : ce statut n’est pas utilisé actuellement ; une fois une période définitivement clôturée, vous ne pouvez plus la rouvrir. "],[" "," Dans le tableau de bord d’Integra, accédez à ","Grand livre > Calendriers > Calendriers du livre",".   "," "," Dans le panneau à gauche de l’écran, Cliquez sur la période à modifier. "," "," Dans la colonne ","Entité juridique",", sélectionnez l’entité juridique à mettre à jour.  "],[" "," En haut à gauche de la page, cliquez sur ","Éditer",". "," "," Sélectionnez ","Mettre à jour le statut de la période",".  "," "," Cliquez sur ","Éditer ","en haut à droite pour pouvoir modifier le statut de la période.  "," "," Dans le menu déroulant du champ ","Statut de la période",", sélectionnez ","En attente/Ouvert"," pour la période clôturée ou ouverte.    "," "," Dans la colonne ","Livre",", sélectionnez ","PrdCls",". "," "," La colonne Livre fait référence au Grand livre "," "," PrdCls est un groupe de sécurité personnalisé créé pour des employés spécifiques du département Finances afin qu’ils puissent diffuser une transaction une fois le statut de la période mis à jour sur En attente. "," "," En cas d’ouverture ou de clôture d’un livre auxiliaire, cliquez sur ","Mettre à jour l’accès au module",". "," "," Pour mettre à jour l’accès à un module, accédez au module à mettre à jour.  "," "," Sélectionnez dans le menu déroulant si vous voulez restreindre un module ou un groupe d’utilisateurs. Si vous sélectionnez « Aucun », cela signifie qu’aucune diffusion ne peut être faite à ce livre auxiliaire.  Par ailleurs, si vous sélectionnez des niveaux d’accès, cela supprime le statut de la période.   "," "," Tous les ajustements nécessaires des écritures et des reclassements sont effectués à ce stade.  "," ","‎ "," "," Cliquez sur ","Sauvegarder",". "],[" ","Vous avez ouvert ou clôturé une période de diffusion fiscale."],[" ","Consultez la section ","Comptabilité intersociétés ","pour connaître les procédures étapes par étapes spécifiques de diffusion de journaux intersociétés."," ","L’annexe à cette section inclut des exigences d’écriture comptable spécifiques en fonction du type de transaction intersociétés traitée."],[" ","Les journaux périodiques permettent de diffuser des frais mensuels, tels que le loyer prépayé, l’assurance prépayée, etc."," ","Consultez la section Saisie et téléchargement de journal et connaître les procédures étapes par étapes spécifiques de diffusion de journaux."," ","Il existe différents noms de journaux pour les différents frais périodiques. Consultez le tableau Nom de journal dans le modèle du Journal Dynad pour voir la bonne sélection."],[" ","Consultez la section suivante pour connaître les procédures étape par étape de diffusion de journaux."," ","Téléchargement et écritures du journal"," ","Procédure : ","Utilisation du modèle de Journal Dynad pour télécharger des écritures de journal"," ","Procédure : ","Journaux périodiques de diffusion"],[" ","Consultez la section suivante pour connaître les procédures étape par étape de diffusion de journaux."," ","Téléchargement et écritures du journal"," ","Procédure : ","Utilisation du modèle de Journal Dynad pour télécharger des écritures de journal"],[" ","Consultez la section suivante pour connaître les procédures étape par étape de diffusion de journaux."," ","Téléchargement et écritures du journal"," ","Procédure : ","Utilisation du modèle de Journal Dynad pour télécharger des écritures de journal"],[" ","Utilisez cette procédure pour annuler des écritures erronées dans le GL et les enregistrer dans les écritures adéquates. "],[" "," Après avoir exécuté la balance générale des comptes, double-cliquez sur la transaction dans la colonne Solde de clôture à annuler. "," "," Cliquez sur ","Annuler la transaction",". "," "," Dans l’écran ","Annulation de transaction",", saisissez la ","Date de diffusion d’annulation"," "," Cliquez sur ","OK",". "," "," Cliquez sur ","Suivi annulé",". Les transactions initiales et annulées s’affichent. "," "," Fermez la transaction en sélectionnant ","X"," en haut à droite de l’écran une fois l’examen terminé. "],[" ","La transaction est annulée et examinée. "],[" ","Utilisez cette procédure pour recoder une transaction d’un projet à un autre."," ","Le fait d’ajuster les transactions de projet dans le livre auxiliaire du projet ajuste automatiquement la diffusion du grand livre correspondant."," ","Il existe deux méthodes pour ajuster les transactions de projet dans Integra."," "," En ajustant les transactions par projet. "," "," En ajustant les transactions par lot. "],[" ","Consultez la section suivante pour connaître les procédures étape par étape de diffusion de journaux."," ","Téléchargement et écritures du journal"," ","Procédure"," : Utilisation du modèle Dynad pour télécharger des écritures de journal "," ","Procédure"," : Enregistrement des écritures de journal "],[" ","Utilisez cette procédure pour allouer des valeurs d’ajustement de stocks afin de mettre à jour les comptes pertinents du grand livre."," ","Par exemple, un ajustement des stocks déjà effectué par la chaîne logistique pour des stocks endommagés doit être alloué à un compte de GL d’assurance."," ","Consultez le guide d’utilisation suivant pour connaître les procédures étape par étape de diffusion de journaux."," ","Téléchargement et écritures du journal"," ","Procédure"," : Utilisation du modèle Dynad pour télécharger des écritures de journal "],[" ","Utilisez cette procédure pour afficher les journaux non diffusés à examiner et traiter, selon les besoins. P. ex., diffuser les journaux applicables."],[" "," Dans le tableau de bord d’Integra, accédez à ","Grand livre > Écritures de journal > Journaux généraux",". "," "," Sous l’en-tête ","Afficher",", la valeur par défaut est ","Non diffusé",". Ce sont les valeurs à examiner pour déterminer ce qui aurait été diffusé au cours du mois clôturé. "," "," Cette valeur peut être modifiée sur Diffusé ou Tout en cliquant sur la flèche du menu déroulant. "," "," Pour déterminer la date de saisie d’un journal, personnalisez la grille du tableau en ajoutant la colonne ","Date et heure de création",". "," "," Effectuez un clic droit sur n’importe quel en-tête de colonne et sélectionnez ","Ajouter des colonnes",". "," "," Dans le filtre, saisissez ","Créé",". "," "," Sélectionnez ","Date et heure de création"," dans la liste de sélection et insérez cette valeur dans le tableau. La colonne sera ajoutée à la fin des colonnes actuelles. "," "," Examinez la liste des journaux non diffusés pendant la période en cours et agissez selon les besoins, p. ex., diffuser les journaux applicables. "],[" ","Vous avez identifié les journaux non diffusés pour la période de clôture en fin de mois."],[" ","La comptabilisation de revenu est réalisée par le siège social. Les bureaux de la RAI sont responsables de calculer l’ICR (recouvrement des coûts indirects), de préparer le journal des frais et de soumettre le journal au siège social afin qu’il soit téléchargé et diffusé."," ","L’ICR est calculé et préparé dans un modèle de frais hors d’Integra. Vous pouvez télécharger ce modèle à l’endroit suivant."," ","Deux méthodes sont disponibles pour télécharger les écritures d’ICR :"," "," en téléchargeant des écritures en masse à l’aide du Connecteur de données (recommandé lorsqu’il y a plus de 10 écritures. "," "," en saisissant des écritures d’ICR directement dans Integra (option à utiliser lorsqu’il y a moins de 10 écritures) "],[" ","Utilisez cette procédure pour utiliser le Connecteur de données afin de télécharger en masse des écritures d’ICR dans Integra."," ","Cela est uniquement effectué par le département Finances du siège social."],[" ","Le modèle de frais d’ICR a été complété."],[" "," Accédez aux modules ","Gestion de projet et comptabilité > Journaux > Frais",". "," "," Dans le menu en haut, cliquez sur ","Ouvrir dans Excel"," et cliquez sur ","OK",". "," "," Cliquez sur le fichier Excel pour l’ouvrir.   "],[" "," Activez le nombre de lignes requises pour copier les données depuis le Modèle de frais d’ICR.   "," "," Allez à droite du bord, maintenez enfoncé et faites glisser vers le bas à l’aide du bouton gauche de votre souris. Relâchez la bouton gauche de la souris. Toutes les lignes devraient être activées. Cela signifie que vous pouvez accéder à certaines données directement depuis Integra en cliquant dans une cellule activée.  "," "," Dans les cellules actives, copiez et collez la « valeur spéciale » dans chaque colonne correspondante.  "," "," Cliquez sur ","Publier",".   "," "," ‎"," "," Accédez aux modules ","Gestion de projet et comptabilité > Journaux > Frais",". "," "," ‎"," "," Sélectionnez votre journal et cliquez sur ","Lignes ","en haut pour afficher les détails des lignes.  "," "," Dans le menu en haut, cliquez sur ","Valider"," pour vérifier s’il y a des erreurs. "," "," Dans la fenêtre contextuelle ","Vérifier le journal",", cliquez sur ","OK ","pour continuer.  "," "," S’il n’y a pas d’erreurs, un message s’affiche dans un ruban bleu en haut de la page.  "," "," Dans le menu en haut de la page, cliquez sur ","Diffuser",". "],[" ","Utilisez cette procédure pour saisir des journaux de frais individuels dans Integra."," ","Cela est uniquement effectué par le département Finances du siège social."],[" ","Le modèle de frais d’ICR a été complété."],[" "," Accédez aux modules ","Gestion de projet et comptabilité > Journaux > Frais",". "," "," Dans le menu en haut de la page, cliquez sur ","Nouveau",". "," ","‎\n    ","\n    ‎\n  "," "," Sélectionnez la nouvelle ligne ajoutée et cliquez sur ","Lignes"," dans le menu en haut de la page. "," "," Dans le menu en haut de la page, cliquez sur ","Nouveau ","pour ajouter des lignes au journal. "," "," Renseignez les champs suivants de la ligne de facture fournisseur :  "," ","Champ"," ","Saisie requise"," ","Date du projet"," ","Sélectionnez la date de diffusion."," ","ID de projet"," ","Saisissez le code de projet D1."," ","Catégorie"," ","Saisissez le code D2 (catégorie de projet) correspondant au code D1."," ","Ressource"," ","Ne renseignez pas ce champ."," ","Description"," ","Saisissez une description."," ","Devise des ventes"," ","Ne modifiez pas ce champ."," ","Cette valeur indique automatiquement par défaut la devise contractuelle du projet lorsque vous sélectionnez votre ID de projet."," ","Prix de vente"," ","Saisissez le montant des frais."," ","Propriété de la ligne"," ","La valeur par défaut est Facturable."," ","Objectif"," ","Ne renseignez pas ce champ."," "," Dans le menu en haut de la page, cliquez sur ","Aspects financiers."," "," Renseignez les aspects financiers requis et cliquez sur ","OK",". "],[" "," Dans le menu en haut, cliquez sur ","Valider"," pour vérifier s’il y a des erreurs. "," "," Dans la fenêtre contextuelle ","Vérifier le journal",", cliquez sur ","OK ","pour continuer.  "],[" "," Dans le menu en haut de la page, cliquez sur ","Diffuser",". "],[" ","Le rapprochement inclut trois étapes clés."," "," Exécution de rapports de rapprochement pour identifier les écarts. "," "," Utilisation d’outils d’analyse d’Integra pour trouver la cause de l’écart. "," "," Traiter les écritures de journal pour corriger les écarts. "," ","Ce thème identifie les rapports de rapprochement disponibles dans Integra, PowerBI ou Excel."],[" ","Utilisez cette procédure pour exécuter différents rapports de rapprochement afin d’identifier les écarts."," ","Les écarts sont souvent dus à une transaction diffusée au Grand livre au lieu du livre auxiliaire. Indiquez la date de début et la date de fin et assurez-vous de sélectionner la devise de comptabilité dans le champ Devise. Exécutez le rapport et examinez la colonne des écarts. Elle doit toujours indiquer zéro. Si ce n’est pas le cas, découvrez la raison et diffusez les écritures d’ajustement nécessaires. "," ","Voici une liste des rapports de rapprochement disponibles dans Integra, PowerBI ou Excel et les chemins d’accès au module correspondant."," ","Rapport de rapprochement"," ","Chemin d’accès"," ","Client/livre"," ","Comptes clients ",">"," Questions et rapports ",">"," Clients ",">"," Rapport de rapprochement client/livre"," ","Fournisseur/livre"," ","Comptes fournisseurs ",">"," Questions et rapports ",">"," Rapports fournisseur ",">"," Rapprochements fournisseur/livre"," ","Projet/livre"," ","Grand livre ",">"," Questions et rapports ",">"," Rapports de consolidation ",">"," Rapprochements GL/projet "," ","Banque/livre"," ","Suite d’automatisation de trésorerie ",">"," Questions ",">"," Banque ",">"," Rapprochements de relevés Banque/GL"," ","Banque automatisée/manuelle"," ","Comptes clients ",">"," Questions et rapports ",">"," Clients ",">"," Rapport de rapprochement client/livre"," ","Rapprochements de bilan (pour les comptes de solde n’appartenant à aucun livre auxiliaire)"," ","Consultez la liste des comptes principaux dans la Liste de vérification de clôture en fin de mois"," ","% d’allocations d’avantages sociaux au personnel – Charges salariales"," ","Ce rapport est disponible dans PowerBI."],[" ","Les questions principales suivantes sont utilisées de façon répétitive et itérative dans Integra pour analyser les données et corriger les écarts à des fins de clôture en fin de mois. Les données peuvent être exportées vers Excel à partir de ces questions pour faciliter l’investigation."," "," Balance générale des comptes "," "," Transactions de pièces "," "," Explorateur de comptabilité source (ASE) "," "," Piste d’audit "," "," Retrouver les écritures initiales "],[" ","La balance générale des comptes est une page de listes montrant tous les soldes d’un compte et/ou les aspects financiers sur une période donnée. Lorsque la balance générale des comptes est ouverte pour la première fois, elle est rafraîchie avec les soldes correspondant aux dates et propriétés configurées dans les paramètres. Les propriétés pouvant être modifiées dans les paramètres incluent les dates, la couche de diffusion, le mode d’affichage d’ouverture des soldes, et les types de transaction de clôture à afficher. "," ","Lorsque vous modifiez les paramètres, les soldes sont rafraîchis. Vous pouvez aussi choisir les aspects pour lesquels vous voulez afficher les soldes et d’afficher chacun des aspects dans une colonne distincte. Vous pouvez aussi explorer les soldes pour voir les transactions composant le solde. "],[" "," Accédez à ","Grand livre > Questions et rapports > Balance générale des comptes",".  "," "," Dans le champ ","Date de début",", saisissez la date de début du solde mensuel.  "," "," Dans le champ ","Date de fin",", saisissez la date de fin du solde mensuel.  "," "," Cliquez sur ","Calculer les soldes",".  "," "," Une fois la balance générale des comptes terminée, vous pouvez double-cliquer sur les soldes pour voir les transactions composant le solde.  "," "," Fermez la transaction en sélectionnant ","X"," en haut à droite de l’écran une fois l’examen terminé. "],[" ","La balance générale des comptes a été générée. "],[" "," Dans l’écran ","Balance générale des comptes",", cliquez sur le bouton Microsoft et sélectionnez ","EXPORTER VERS EXCEL > Balance générale des comptes",".  "," "," Cliquez sur ","Ouvrir ","pour ouvrir le fichier Excel sur votre ordinateur ou cliquez sur ","Sauvegarder ","pour le sauvegarder dans votre ordinateur.  "," ","La balance générale des comptes peut être analysée dans Excel. Elle répertorie le nom de chaque compte de grand livre nominal et la valeur de ce solde nominal de grand livre nominal, avec un solde débiteur ou créditeur, ainsi qu’un solde de clôture :  "],[" ","Pour obtenir des détails sur les transactions affichées dans le système, nous utilisons des transactions de pièce dans le Grand livre. Cela extrait toutes les transactions que vous pouvez filtrer par date, journal, numéro de pièce et compte principal. Les transactions de pièce peuvent être extraites, quelle que soit la plage de dates.  "],[" "," Accédez aux modules ","Grand livre > Questions et rapports > Transactions de pièces",". "," "," Si vous voulez extraire toutes les transactions, ne renseignez aucun champ. Sinon, renseignez un détail spécifique dans la colonne des critères que vous connaissez concernant la transaction à télécharger.  "," "," Résultats d’examen. "],[" ","Une autre méthode utilisée pour obtenir les détails d’une transaction à partir du système consiste à utiliser l’explorateur de comptabilité source. Tout comme la balance générale des comptes, cela affiche les transactions uniquement limitées à une année civile.   "],[" "," Accédez aux modules ","Grand livre > Questions et rapports > Explorateur de comptabilité source",". "," "," Dans le menu ","Mettre à jour",", sélectionnez la plage de dates.  "," "," Cliquez sur ","Mettre à jour",". "," ","Les transactions sont affichées automatiquement en fonction du paramètre par défaut dans le champ Aspects financiers.  "," "," Cliquez sur le champ ","Aspects financiers"," pour sélectionner la combination d’aspects concernés. "," ","Vous pouvez exporter vers Excel comme indiqué précédemment dans l’exemple de balance générale des comptes. "],[" ","Utilisez cette procédure pour voir la personne ayant diffusé une transaction spécifique."," ","Integra a la capacité, à tout moment, de savoir que vous avez diffusé la transaction dans le système. Il existe deux méthodes pour qui a diffusé la transaction :  "," "," le rapport de piste d’audit dans le module Grand livre "," "," la méthode de transaction  "],[" "," Accédez à ","Grand livre > Questions et rapports > Piste d’audit",".  "," "," Un liste des enregistrements s’ouvre. La colonne ","Créé par ","montre qui a diffusé la transaction.  "," ","‎"," "," Si vous voulez voir les détails des transactions, sélectionnez une seule transaction.  "," "," Cliquez sur ","Transactions de pièces",".  "," "," Résultats d’examen. "],[" ","Dans Integra, vous pouvez retrouver la documentation initiale et les pièces associées d’une transaction."," ","Vous pouvez visualiser les écritures de journal initiales via les transactions suivantes :"," "," Transactions de pièces "," "," Explorateur de comptabilité source "," "," Balance générale des comptes "," ","\n    ‎La fonction de pièces associées permet de retrouver l’origine de transactions intersociétés. Cela vous permet de voir l’entité juridique d’origine d’une écriture.\n  "],[" "," Connectez-vous à Integra et accédez à ","Transactions de pièces"," dans le module ","Grand livre",".  "," "," Dans l’écran qui s’ouvre, sélectionnez la transaction dont vous voulez retrouver l’origine.  "," "," Examinez la barre d’outils pour trouver les fonctions de suivi.  "," "," Cliquez sur le document initial dans les fonctions susmentionnées.   "," "," Dans la fenêtre qui s’affiche, cliquez sur ","Voir les détails",". "," "," La fenêtre qui s’ouvre affiche une pièce de journal en ligne. Cliquez sur ","Pièce ","pour voir le journal complet des écritures  "," "," Voir l’écriture initiale.  "," "," Pour savoir si la transaction provient d’une autre entité juridique, la fonction Pièces associées doit être active. Après avoir sélectionné une transaction, examinez la barre d’outils pour voir si la fonction ","Pièces associées"," est active. Sinon, cliquez dessus pour ouvrir un tableau.  "," "," Le tableau qui s’ouvre affiche toutes les entités juridiques listées. Si vous voulez voir la pièce de journal, cliquez sur ","Pièce",".  "],[" ","Les rapports suivants doivent être générés une fois la clôture en fin de mois terminée."," ","Rapport"," ","Lieu"," ","Balance générale des comptes finale"," ","Dans Integra, accédez à Grand livre ",">"," Questions et rapports ",">"," Balance générale des comptes."," ","Rapport des revenus et des dépenses"," ","Ce rapport existe dans PowerBI."," ","Projet BvA"," ","Ces rapports existent dans PowerBI."," ","Rapport FM01 équivalent"," ","Ce rapport existe dans PowerBI."],[" ","Des notes supplémentaires ont été ajoutées à certains noms de journal à des fins de clarification."," ","Insérez le tableau une fois finalisé."],[" ","Cette liste de vérification indique les tâches clés et les dates requises de la clôture financière en fin de mois. Pour obtenir des instructions détaillées sur l’exécution des transactions système, consultez le guide de formation suivant sur RescueNet :"," "," Clôture en fin de mois (RAI) "," ","Dates d’échéance mensuelles"," ","Le tableau suivant répertorie les dates d’échéance des tâches de clôture en fin de mois. Des détails supplémentaire à ce sujet sont indiqués après le tableau."," ","Date d’échéance"," ","Tâche"," ","Dernier jour de chaque mois"," ","Diffusions de livres auxiliaires"," ","Le 8e jour de chaque mois"," ","Tâches de clôture intersociétés"," ","Le 12e jour de chaque mois"," ","Diffusions mensuelles de journaux généraux"," ","Note : certains de ces journaux peuvent être diffusés au cours du mois."],[" ","Gestion des dépenses ","- traiter et diffuser l’ensemble des avances sur frais de déplacement et des rapports de dépenses approuvés (y compris les liquidations de carte de crédit et les TER) "," ","Comptes fournisseurs"," - Traiter l’ensemble des factures et paiements fournisseur. "," ","Comptes clientes ","- Comptabiliser l’ensemble des reçus et dépôts de fonds. "," ","Gestion des comptes de caisse et bancaires ","– Diffuser les frais directs, passez en écritures les transactions bancaires non diffusées en fonction des rapprochements bancaires complets mensuels précédents. "," ","Immobilisations ","– Générer une proposition d’amortissement "," ","Gestion des stocks"," – Toutes les transactions de prélèvement, d’emballage et d’expédition (à l’exception des contributions « en nature ») "],[" "," Diffuser des écritures intersociétés à A/c 29400 avant le 8e jour de chaque mois pour les bureaux RAI utilisant toujours SUN "," "," Diffuser des écritures intersociétés au siège social – 9IRC "," "," Déplacer des écritures intersociétés au cours de la période actuelle entre le Grand livre et les projets pertinents "," "," Préparer et diffuser les journaux généraux mensuels Diffuser le loyer prépayé, l’assurance prépayée, les charges reportées, etc. "," "," Diffuser les charges à payer (au besoin) "," "," Diffuser une allocation d’amortissement. "," "," Diffuser une contribution en nature "," "," Diffuser des ajustements de stocks (au besoin) "," "," Diffuser les écritures d’ajustement de projet requises "],[" "," Diffuser des écritures d’allocation de paie "," "," Diffuser des écritures d’allocation de coût de programme partagé "],[" "," Tous les journaux standards sont diffusés "," "," Tous les journaux non requis sont supprimés "," "," Tous les journaux non diffusés en cours sont examinés, modifiés et/ou diffusés. "],[" "," Une fois toutes les tâches précédentes susmentionnées exécutées, calculez les écritures d’ICR et renseignez le journal "," "," Soumettez le journal au département Finances du siège social pour qu’il soit téléchargé "],[" "," Générer un rapport de rapprochement entre le client et le grand livre. "," "," Générer un rapport de rapprochement entre le fournisseur et le grand livre. "," "," Générer un rapport de rapprochement entre le projet et le grand livre. "," "," Générer un rapport de rapprochement entre la banque et le grand livre. "," "," Diffuser toutes les écritures d’ajustement pour s’assurer que les soldes du livre auxiliaire et du grand livre sont égaux "],[" "," Réaliser des rapprochements bancaires automatisés ou manuels entre des comptes bancaires. "," "," Réaliser des rapprochements de bilans et diffuser toutes les écritures d’ajustement à rapprocher. "," "," Calculer et rapprocher le % d’allocations d’avantages sociaux au personnel – Charges salariales "],[" "," Générer une balance générale des comptes finale "," "," Générer un rapport des revenus et des dépenses "," "," Générer tous les rapports de projet BvA "," "," Générer des états financiers finaux à l’aide d’un rapport financier "," "," Rapport FM01 équivalent "," ","rescuenet.rescue.org/i/integra-support"]],"2":[[" ","Informations sur le processus opérationnel"]],"3":[[" ","Messages clés"],[" ","Tâches de clôture en fin de mois (Niveau élevé)"],[" ","Ouverture et clôture de périodes de diffusion de livre"," ","Ouvrir et clôturer une période d’exercice financier"],[" ","Transactions intersociétés"],[" ","Journaux généraux en fin de mois"," ","Journaux périodiques de diffusion"],[" ","Diffuser des saisies d’allocation d’amortissement"],[" ","Diffuser les écrites d’allocation de paie"],[" ","Diffuser les saisies d’allocation de coût de programme partagé"],[" ","Ajustements en fin de mois"," ","Annuler une écriture de GL"],[" ","Diffuser les écritures d’ajustement de projet"],[" ","Diffuser les ajustements de stocks"],[" ","Vérifier les journaux non diffusés pour la période de livre en cours"],[" ","Comptabilisation de revenu (département Finances du siège social uniquement)"],[" ","Télécharger des écritures en masse du modèle de journal d’ICR via le Connecteur de données (département Finances du siège social uniquement)"],[" ","Saisir le Journal de frais d’ICR directement dans Integra (département Finances du siège social uniquement)"],[" ","Rapports de rapprochement"],[" ","Tableau de référence des rapports de rapprochement"],[" ","Questions et rapports d’analyse des écarts"],[" ","Exécuter un rapport de balance générale des comptes"],[" ","Exportez la balance générale des comptes vers Microsoft Excel "],[" ","Afficher des transactions de pièces"],[" ","Exécuter un Explorateur de comptabilité source"],[" ","Voir le rapport de piste d’audit dans le Grand livre"],[" ","Retrouver les documents initiaux et les pièces associées des écritures initiales"],[" ","Tableau de référence des rapports de clôture en fin de mois"],[" ","Annexe"," ","Noms et utilisation du journal Integra"],[" ","Liste de vérification de clôture en fin de mois (Bureaux RAI États-Unis)"]],"4":[[" ","Objectif"],[" ","Étapes"],[" ","Résultat"],[" ","Objectif"],[" ","Étapes"],[" ","Résultat"],[" ","Objectif"],[" ","Objectif"],[" ","Objectif"],[" ","Étapes"],[" ","Résultat"],[" ","Objectif"],[" ","Conditions préalables"],[" ","Étapes"],[" ","Objectif"],[" ","Conditions préalables"],[" ","Étapes"],[" ","Objectif"],[" ","Objectif"],[" ","Étapes"],[" ","Résultat"],[" ","Objectif"],[" ","Étapes"],[" ","Objectif"],[" ","Étapes"],[" ","Objectif"],[" ","Étapes"],[" ","Objectif"],[" ","Étapes"]],"5":[[" ","Note"," : ","après avoir sélectionné l’entité juridique, vous pouvez définir les niveaux d’accès à des modules spécifiques."],[" ","Note"," : ","vous n’avez pas besoin d’attendre la fin du mois pour saisir/diffuser des frais périodiques, c.-à-d., si vous connaissez l’allocation mensuelle, vous pouvez la saisir avant la fin du mois."],[" ","Note"," : ","seules les transactions provenant du GL peuvent être annulées dans le GL ; les transactions diffusées à un livre auxiliaire doivent être annulées dans ce livre auxiliaire."],[" ","Note"," : ","seuls les utilisateurs ayant l’accès de sécurité adéquat peuvent utiliser le formulaire d’ajustement de projet dans Integra. ","Cela est dû au fait que l’ajustement de projet n’a aucun flux de travail."],[" ","Note"," : ","si vous utilisez le Connecteur de données pour la première fois, vous devrez installer l’application dans votre navigateur. ","Vous devrez aussi vous connecter à l’aide de vos identifiants de connexion à l’IRC."],[" ","Notes"," : "," "," lorsque vous diffusez un journal de frais, il n’est pas diffusé au Grand livre, mais à un livre auxiliaire. ","Le journal de frais sera diffusé au Grand livre lors de la comptabilisation du revenu. "," "," Le journal de frais n’utilise pas de flux de travail ; il est basé sur l’accès de sécurité attribué à un individu dans le système. "],[" ","Note"," : ","certains aspects financiers peuvent être indiqués par défaut en fonction des paramètres appliqués dans le formulaire du projet."],[" ","Note"," : ","s’il n’y a pas d’erreurs, un message s’affiche dans un ruban bleu en haut de la page. "],[" ","Note"," : ","lorsque vous diffusez un journal de frais, il n’est pas diffusé au Grand livre, mais à un livre auxiliaire. ","Il sera diffusé au Grand livre lors de la comptabilisation du revenu. ","Le journal de frais n’utilise pas de flux de travail ; il est basé sur l’accès de sécurité attribué à un individu dans le système.. "],[" ","Note"," : ","vous pouvez aussi voir la piste d’audit depuis la balance générale des comptes transaction en cliquant sur le menu Piste d’audit en haut de la page."]],"6":[[" ","Liste de vérification de clôture en fin de mois"],[" ","Note importante concernant ce guide :"],[" ","Diffuser des transactions dans des modules de livres auxiliaires"],[" ","Réaliser une comptabilité intersociétés"],[" ","Diffuser des journaux d’allocation"],[" ","Vérifier l’exécution des tâches"],[" ","Calculer les écritures d’ICR, diffuser un journal et le soumettre au siège social pour qu’il soit téléchargé"],[" ","Effectuer des rapprochement entre le livre auxiliaire et le grand livre"],[" ","Réaliser tous les autres rapprochements de comptes"],[" ","Générer des rapports une fois la clôture en fin de mois terminée"]],"id":"13"})