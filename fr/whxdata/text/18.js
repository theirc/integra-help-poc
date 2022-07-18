rh._.exports({"0":[[" ","Comptabilité intersociétés"]],"1":[[" ","Integra facilite la diffusion de journaux entre différentes entités comptables. Ce processus est défini en tant que comptabilité intersociétés. Le processus de comptabilité intersociétés permet de s’assurer que, tous les mois, les dépenses payées par un bureau pour le compte d’un autre bureau sont imputées à l’entité comptable/base de données SUN concernées dans Integra."," ","Tant que le déploiement d’Integra dans tous les bureaux n’a pas été achevé, il convient d’appliquer deux processus : 1","Solution finale"," et ","2. ","Solution provisoire"],[" ","La solution Integra de comptabilité intersociétés a été développée pour :"," "," rationnaliser le processus intersociétés "," "," éviter qu’un trop grand nombre d’employés soient impliqués dans le processus "," "," tirer parti de la capacité d’Integra à accorder à un utilisateur l’accès de sécurité adapté pour diffuser directement à une entité juridique différente d’Integra. "," ","Le personne responsable","*"," du bureau d'exécution doit toujours déplacer l’écriture intersociétés entre le grand livre (GL) et le projet adéquat (D1) dans le module Projets (livre auxiliaire). "," ","*"," (bureau local du Directeur financier adjoint de la CRRD ; Directeur financier de la RAI)"," ","Cette écrite de mouvement est nécessaire car la diffusion de ces écritures au grand livre ne signifie pas que les écritures sont automatiquement envoyées au module Projets. Si les écritures restaient dans le grand livre, les soldes budgétaires du projet dans le module Projets seraient erronés. Cela aurait un impact sur la comptabilisation des revenus."," ","Lors du déplacement de ces transactions entre le GL et le projet, il convient de veiller à ce que la catégorie de projet (D2) adéquate et les autres aspects financiers ont été codés dans l’écriture originale, étant donné qu’une entité juridique ne peut pas facturer le module de projet d’une autre entité juridique via le journal intersociétés."],[" ","Tant que l’IRC n’a pas terminé le déploiement d’Integra dans tous les bureaux, certains bureaux utilisent Integra et d’autres bureaux utilisent encore SUN pendant une période provisoire."," ","Pendant cette période de transition, il contient de diffuser les écritures dans plusieurs bases de données dans Integra."," ","Les bases de données impliquées dans la comptabilité intersociétés sont les suivantes :"," ","9IRC ","- l’entité juridique d’Integra pour le siège social ; l’entité juridique dans laquelle tous les budgets du siège social et des unités régionales sont établis et l’entité juridique dans laquelle le siège effectue des transactions chaque jour. "," ","ICCO ","- la base de données Integra pour laquelle le siège social et les bureaux utilisant Integra diffusera toutes les écritures payées pour le compte d’un autre bureau qui devra être reflété dans la base de données SUN. "," ","Les diffusions à ICCO sont convertis en fichier de sortant dont le format est compatible avec SUN Systems. Ce fichier est l’équivalent du fichier ZHQ actuel du siège social. Le personnel du département département Finances continuera à télécharger ce fichier dans ses bases de données SUN chaque mois."," ","ISUN ","- la base de données d’Integra utilisée par le siège social pour diffuser tous les fichiers SAF mensuels finaux SUN locaux. Les fichiers SAF seront convertis dans un format compatible avec Integra et associés aux aspects financiers dans Integra. "," ","Le personnel du département Finances continuera à recoder les écritures intersociétés reçues en ajoutant les codes T1 et T2 et les autres codes T nécessaires lors de la réception des écritures intersociétés via un fichier ZHQ social et recoder avec le code T1 adéquat."],[" "," Les solutions provisoire et finale exige que les diffusions intersociétés soient recodées pour les projets concernés. "," "," Lorsque le bureau d'exécution utilise Integra, mais pas le bureau demandeur, le bureau d'exécution doit diffuser à ICCO, l’entité comptable provisoire. "," ","ICCO est uniquement utilisé lorsque le bureau d'exécution utilise Integra et le bureau destinataire utilise encore SUN."," "," Lorsque le bureau d'exécution utilise encore SUN et le bureau demandeur utilise Integra, le bureau d'exécution code les transactions selon leur bilan dans le compte principal 29300 ou 29400, conformément au process actuel. "," "," Lorsque les deux bureaux utilisent Integra, la diffusion est effectuée directement entre les deux codes d’entité comptable dans Integra ; inutile de diffuser à ICCO ou ISUN "," "," Comme les entités comptables n’ont pas d’accès mutuel à leurs livres auxiliaires, les transactions intersociétés doivent être diffusées au GL du bureau demandeur. "," ","Le bureau demandeur doit alors annuler la charge dans son GL et le diffuser au livre auxiliaire concerné, p. ex., le module Gestion de projet et comptabilité."],[" ","Voici les différents types de transactions intersociétés pouvant être traitées."," ","Bureau de provenance/destination"," ","Détails"," ","État provisoire (utilisé lorsqu’une ou plusieurs sociétés n’utilisent pas encore Integra)"," ","Siège social vers un bureau SUN"," ","Le siège social paye quelque chose pour le compte d’un autre bureau utilisant toujours SUN."," ","Bureau SUN vers le siège social"," ","Un bureau qui utilise toujours SUN paye quelque chose pour le compte du siège social."," ","Bureau Integra vers bureau SUN"," ","Un bureau hors du siège social utilisant Integra paye pour le compte d’un autre bureau qui utilise toujours SUN."," ","Bureau SUN vers bureau Integra"," ","Un bureau qui utilise toujours SUN paye quelque chose pour le compte d’un bureau hors du siège social qui utilise Integra."," ","Bureau SUN vers bureau SUN"," ","Un bureau qui utilise toujours SUN paye quelque chose pour le compte d’un autre bureau qui utilise toujours SUN."," ","État final (utilisé lorsque les deux sociétés utilisent Integra)"," ","Bureau Integra vers bureau Integra"," ","Une entité juridique qui utilise Integra paye quelque chose pour le compte d’une autre entité juridique utilisant Integra."," ","Exemple"," : le siège social achète et paye des biens pour le compte du bureau d’Atlanta. Le siège social utilise le journal intersociétés pour diffuser les dépenses au GL d’Atlanta. (N’oubliez pas, il ne peut pas le facturer à un livre auxiliaire. Le bureau d’Atlanta doit ensuite l’annuler de son GL et le diffuser dans son livre auxiliaire (généralement à des projets). Dans certains cas, Atlanta n’aura pas besoin d’annuler le montant dans un livre auxiliaire, p. ex., les paiements préalables, étant donné qu’il apparaît toujours dans le GL."],[" ","Utilisez cette procédure pour traiter une transaction intersociétés dans Integra. La même procédure peut être utilisée dans tous les cas où le bureau d'exécution utilise Integra. Toutefois, les informations locales spécifiques varieront en fonction de la situation."],[" "," Dans la page d'accueil d'Integra, accédez aux modules ","Grand livre > Écritures du journal > Journaux généraux",".  "," "," Dans le menu en haut de la page, cliquez sur ","Nouveau",". "," "," Une nouvelle ligne de journal est ajoutée en haut du tableau. Dans le champ ","Nom",", cliquez sur la flèche du menu déroulant et sélectionnez ","GL-IC",". "," "," Dans le champ ","Description",", remplacez le texte par défaut par une description significative pour le transfert intersociétés. "," "," Sélectionnez la nouvelle ligne et cliquez sur ","Lignes ","dans le menu en haut de la page. "," "," Renseignez les champs suivants de la 1ère et 2e lignes (compensation) dans le journal. "," "," Entreprise "," "," Type de compte "," "," Compte "," "," Description "," "," Débit/Crédit "," "," Renseignez les aspects financiers requis pour chaque ligne. "," "," Soumettez le journal à l’approbation du flux de travail. "],[" ","Vous avez traité une transaction intersociétés dans Integra."],[" "," Exécuter un processus de paiement dans les comptes fournisseurs (AP) "," "," Le contrôleur du département Finances du bureau demandeur déplace les dépenses du Grand livre au Projet "," ","‎"],[" ","Utilisez cette procédure pour afficher la requête de transactions de pièces et voir le bureau de provenance des transactions intersociétés."],[" "," Dans la page d’accueil d’Integra, accédez aux modules ","Grand livre > Questions et rapports > Transactions de pièces",". "," "," Personnalisez le tableau en fonction de vos besoins de filtrage. "," "," Cliquez sur ","OK ","pour continuer. "," "," Examinez la liste des résultats. Faites défiler vers la droite jusqu’à la colonne Société de provenance. "],[" ","Vous avez affiché la requête de transactions de pièces pour voir la société de provenance pour la transaction intersociétés."],[" ","Le tableau ci-dessous identifie les codes d’entité juridique et le système de fonctionnement des bureaux mentionnés dans le suivi des situations comptables intersociétés."," ","Bureau"," ","Entité juridique"," ","Systè","me"," ","Siège"," ","9IRC"," ","Integra"," ","Ouganda"," ","2UGA"," ","Integra"," ","Sierra Leone"," ","2SLE"," ","Integra"," ","Nigéria"," ","2NGA*"," ","SUN"," ","Thaïlande"," ","3THA*"," ","SUN"," ","Les cinq exemples de situations suivants sont détaillés ci-dessous."," "," Siège social d’Integra (9IRC) vers bureau SUN (2NGA) "," "," Bureau SUN (2NGA) vers le siège social d’Integra (dû par le siège social) "," "," Bureau Integra (2UGA) à bureau SUN (2NGA) "," "," Bureau SUN (2NGA) vers bureau Integra (2UGA) "," "," Bureau SUN (2NGA) vers bureau SUN (3THA) "],[" ","L’écriture des dépenses initiée par le siège social (Integra) implique la diffusion des journaux suivants."," ","Dans le livre 9IRC d’Integra, et dans le champ Société dans l’écran du journal de factures fournisseur, accédez à l’onglet Général et choisissez ICCO dans COMPTE en tant que Société."," ","La première écriture doit être diffusée dans les sociétés ICCO et 9IRC (Integra) pour facturer 2NGA – Nigéria (bureau SUN) via une écriture intersociétés et la deuxième écriture consiste à traiter le paiement fournisseur dans 9IRC (Integra) c.-à-d., fournisseur Settlement. Ces écritures sont actuellement diffusées par le personnel AP du siège social, les contrôleurs régionaux et les agents du département Finances pour la RAI."," ","DR/CR"," ","Entreprise"," ","Compte principal"," ","Type de compte"," ","D1"," ","D3"," ","D4"," ","D5"," ","DR"," ","ICCO"," ","7xxx"," ","Livre"," ","OD104"," ","SAWP"," ","NGABU"," ","2NGA"," ","CR"," ","9IRC"," ","21100"," ","Fournisseur"," ","U1000"," ","ZZGEN"," ","9IRC"," ","Règlement fournisseur"," ","DR"," ","9IRC"," ","21100"," ","Fournisseur"," ","U1000"," ","ZZGEN"," ","9IRC"," ","CR"," ","9IRC"," ","10001HQUSD"," ","Banque"," ","U1000"," ","ZZGEN"," ","9IRC"," ","Cette écriture intersociétés sera envoyée par le siège social à des bureaux locaux tous les mois, tout comme le fichier ZHQ et le bureau 2NGA - Nigéria téléchargera ce fichier dans l’instance locale de SUN et recodera l’écriture initiale pour ajouter le code T2/T3 et les autres codes T, selon les besoins."],[" ","L’écriture intersociétés sera d’abord diffusée dans la base de données SUN de 2NGA Nigéria pour capturer la transaction des dépenses et le paiement de la manière suivante :"," ","DR/CR"," ","BD SUN"," ","Cpte prin"," ","Type cpte"," ","T1"," ","T2"," ","T3"," ","T4"," ","T5"," ","T6"," ","DR"," ","2NGA"," ","29300"," ","Livre"," ","U1000"," ","2NGA"," ","NGABU"," ","CR"," ","2NGA"," ","100xx"," ","Livre"," ","U1000"," ","2NGA"," ","NGABU"," ","Une fois la pièce de journal réceptionnée par le bureau 2NGA – Nigéria (SUN), le Contrôleur régional utilisera les informations dans la pièce du journal SUN (y compris tous les codes D adéquats), les collera dans un Journal Dynad et diffusera le journal suivant aux sociétés 9IRC et ICCO dans Integra:"," ","DR/CR"," ","Entreprise"," ","Cpte prin"," ","Type cpte"," ","D1"," ","D2"," ","D3"," ","D4"," ","D5"," ","D6"," ","DR"," ","9IRC"," ","7xxx"," ","Projet"," ","U2020"," ","E."," ","ZZZZ"," ","AMBDU"," ","9IRC"," ","GRNT"," ","CR"," ","ICCO"," ","29300"," ","Livre"," ","U1000"," ","NGABU"," ","2NGA"],[" ","Le bureau 2UGA – Ouganda diffusera l’écriture intersociétés à la société ICCO pour enregistrer les dépenses intersociétés payées pour le compte de 2NGA – Nigéria et enregistrera le paiement fournisseur dans leur société Integra 2UGA de la manière suivante :"," ","DR/CR"," ","Entreprise"," ","Cpte prin"," ","Type cpte"," ","D1"," ","D3"," ","D4"," ","D5"," ","D6"," ","DR"," ","ICCO"," ","7xxx"," ","Livre"," ","DFxxx"," ","ONPS"," ","NGABU"," ","2NGA"," ","CR"," ","2UGA"," ","21100"," ","Fournisseur"," ","U1000"," ","UAKAM"," ","2UGA"," ","\n    ‎Le bureau 2NGA – Nigéria (SUN) recevra cette écriture dans son fichier ZHQ et le recodera pour ajouter les codes T2/T3 (s’ils ont été fournis) ainsi que les autres codes T nécessaires.\n  "],[" ","La première écriture est créée dans la base de données SUN du bureau 2NGA – Nigéria à l’aide du Compte principal 29400 afin d’identifier facilement cette écriture intersociétés spécifique."," ","Dès que le bureau 2NGA – Nigéria (SUN) envoie un e-mail au bureau 2UGA – Ouganda (Integra) pour l’informer qu’il a payé des dépenses pour le compte de l’Ouganda, le bureau 2UGA - Ouganda doit diffuser la deuxième écriture dans les mêmes délais dans Integra."," ","DR/CR"," ","Entreprise"," ","(SUN DB)"," ","Cpte prin"," ","Type cpte"," ","T1"," ","T2"," ","T3"," ","T4"," ","T5"," ","T6"," ","DR"," ","2NGA"," ","29400"," ","Livre"," ","U1000"," ","2NGA"," ","2NGA"," ","NGABU"," ","CR"," ","Banque"," ","100xx"," ","Livre"," ","U1000"," ","2NGA"," ","2NGA"," ","NGABU"," ","DR/CR"," ","Entreprise"," ","(INTEGRA)"," ","Cpte prin"," ","Type cpte"," ","D1"," ","D2"," ","D3"," ","D4"," ","D5"," ","D6"," ","DR"," ","2UGA"," ","7xxxx"," ","Projet"," ","DFxxx"," ","DFxxx"," ","SARL"," ","UAKAM"," ","2UGA"," ","PRIM"," ","CR"," ","2UGA"," ","29400"," ","Livre"," ","U1000"," ","UAKAM"," ","2UGA"," ","**Le département Finances international du siège social rapprochera le Compte principal 29400 dans chaque base de données SUN tous les mois.\n    ","\n    ‎\n  "],[" ","Dans ce cas, le bureau Nigéria effectue un paiement pour le compte du bureau Thaïlande. La première écriture permet au bureau 2NGA – Nigéria d’enregistrer l’écriture intersociétés et le paiement bancaire pour le compte de 3THA dans sa base de données SUN."," ","Une fois que le bureau 3THA – Thaïlande a été notifié de ce paiement intersociétés effectué pour le compte du bureau 2NGA – Nigéria, le bureau Thaïlande enregistre la deuxième écriture ci-dessous pour facturer le code T1 adéquat ainsi que tous les autres codes T pertinents et comptabilise le crédit sur le Compte principal 29400 dans sa base de données SUN."," ","DR/CR"," ","Entreprise"," ","BD SUN"," ","Cpte prin"," ","Type cpte"," ","T1"," ","T2"," ","T3"," ","T4"," ","T5"," ","T6"," ","DR"," ","2NGA"," ","29400"," ","Livre"," ","U1000"," ","2NGA"," ","2NGA"," ","THBNK"," ","CR"," ","Banque"," ","100xx"," ","Livre"," ","U1000"," ","2NGA"," ","2NGA"," ","NGABU"," ","DR"," ","3THA"," ","7xxx"," ","Livre"," ","GUxxx"," ","AB01"," ","OADM"," ","3THA"," ","3THA"," ","THBNK"," ","CR"," ","3THA"," ","29400"," ","Livre"," ","U1000"," ","3THA"," ","3THA"," ","THBNK"," ","**Le département Finances international du siège social rapprochera le Compte principal 29400 dans chaque base de données SUN tous les mois."],[" ","Dans cette situation, le 2SLE – bureau Sierra Leone (Integra) a effectué un paiement pour le compte de 2UGA – bureau Ouganda (Integra)."," ","Comme les deux bureaux utilisent Integra, le 2SLE – bureau Sierra Leone peut facturer directement l’entité juridique 2UGA – bureau Ouganda utilisant Integra. La première écriture implique la diffusion par le bureau Sierra Leone du journal intersociétés directement au grand livre de l’Ouganda."," ","La deuxième écriture implique que le bureau Sierra Leone effectue le paiement au fournisseur."," ","La troisième écriture implique que le bureau Ouganda annule l’écriture de journal intersociétés dans son grand livre dans Integra et diffuse l’écriture à son projet dans le module Projets d’Integra et ajoute tous les aspects financiers pertinents."," ","DR/CR"," ","Entreprise"," ","Cpte prin"," ","Type cpte"," ","D1"," ","D2"," ","D3"," ","D4"," ","D5"," ","D6"," ","Écriture 2SLE"," ","DR"," ","2UGA"," ","7xxx"," ","Livre"," ","DF208"," ","DF208xxx"," ","HEHS"," ","UAKAM"," ","2UGA"," ","PRIM"," ","CR"," ","2SLE"," ","21100"," ","Fournisseur"," ","U1000"," ","SLFRT"," ","2SLE"," ","Règlement fournisseur par 2SLE"," ","DR"," ","2SLE"," ","21100"," ","Fournisseur"," ","U1000"," ","SLFRT"," ","2SLE"," ","CR"," ","2SLE"," ","10xxx"," ","Banque"," ","U1000"," ","SLFRT"," ","2SLE"," ","Écriture 2UGA"," ","DR"," ","2UGA"," ","7xxx"," ","Projet"," ","DF208"," ","DF208xxx"," ","HEHS"," ","UAKAM"," ","2UGA"," ","PRIM"," ","CR"," ","2UGA"," ","7xxx"," ","Livre"," ","DF208"," ","DF208xxx"," ","HEHS"," ","UAKAM"," ","2UGA"," ","PRIM"," ","rescuenet.rescue.org/i/integra-support"]],"2":[[" ","Aperçu des processus commerciaux"]],"3":[[" ","Solution finale"],[" ","Flux de processus commercial final"," ","Solution provisoire"],[" ","Flux de processus commercial provisoire"," ","Messages clés concernant la comptabilité intersociétés avec Integra"],[" ","Transactions intersociétés de l’IRC"],[" ","Traiter une transaction intersociétés dans Integra"],[" ","Voir la société de provenance dans le rapport de transactions de pièces"],[" ","Annexe"," ","Exemples de situations provisoires"],[" ","Siège social d’Integra (9IRC) vers bureau SUN (2NGA)"],[" ","Bureau SUN (2NGA) vers le siège social d’Integra (dû par le siège social)"],[" ","Bureau Integra (2UGA) à bureau SUN (2NGA)"],[" ","Bureau SUN (2NGA) vers bureau Integra (2UGA)"],[" ","Bureau SUN (2NGA) vers bureau SUN (3THA)"],[" ","Exemple de situation finale"," ","Bureau Integra (2SLE) vers le bureau Integra (2UGA)"]],"4":[[" ","Objectif"],[" ","Étapes"],[" ","Résultat"],[" ","Procédures de suivi"],[" ","Objectif"],[" ","Étapes"],[" ","Résultat"]],"5":[[" ","Note"," : ","consultez les situations dans l’annexe à ce document pour obtenir des instructions détaillées concernant les écritures comptables."]],"id":"18"})