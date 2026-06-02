
// AB Consulting — Translation system
// Applies FR→EN after React mounts, re-applies on route changes
(function() {
  var EN = {
    // Navigation
    "Accueil": "Home",
    "Mes Expertises": "My Expertise",
    "Études de Cas": "Case Studies",
    "À Propos": "About",
    "Contact": "Contact",
    "Demander un audit": "Request an audit",
    "Demander un audit gratuit": "Request a free audit",

    // Home — Hero
    "Supply Chain & Automatisation": "Supply Chain & Automation",
    "Expert Supply Chain & Automatisation": "Supply Chain & Automation Expert",
    "et l'Automatisation": "& Automation",
    "Excellence en Supply Chain & Automatisation": "Excellence in Supply Chain & Automation",
    "Cabinet de Conseil — Supply Chain & Automatisation": "Consulting Firm — Supply Chain & Automation",
    "Cabinet de conseil expert en Supply Chain, logistique et robotisation d'entrepôt. Basé en France, j'interviens partout dans le monde.": "Expert consulting firm in Supply Chain, logistics and warehouse robotics. Based in France, operating worldwide.",
    "Je transforme vos défis logistiques en avantages compétitifs durables. De l'audit stratégique à l'implémentation terrain, je mobilise une expertise de haut niveau pour maximiser la performance de votre chaîne de valeur.": "I transform your logistics challenges into lasting competitive advantages. From strategic audit to field implementation, I deploy high-level expertise to maximise your supply chain performance.",
    "Bénéficiez d'un premier échange stratégique gratuit pour évaluer les leviers d'optimisation de votre Supply Chain. Sans engagement, avec une valeur immédiate.": "Get a free strategic consultation to identify the key levers for optimising your Supply Chain. No commitment, immediate value.",
    "Explorer mes expertises": "Explore my expertise",
    "Découvrir": "Discover",

    // Home — Approach
    "Mon approche": "My approach",
    "Une Méthode Éprouvée,": "A Proven Method,",
    "des Résultats Mesurables": "Measurable Results",
    "Une Approche Résolument ROIste": "A Firmly ROI-Driven Approach",
    "Chaque mission est structurée autour d'un objectif de retour sur investissement clair et quantifié. Je ne livre pas des rapports : je livre des transformations mesurables. Mes recommandations sont systématiquement accompagnées d'un business case détaillé, d'indicateurs de performance précis et d'un plan de déploiement actionnable. Votre rentabilité est ma boussole.": "Every assignment is structured around a clear, quantified return on investment objective. I don't deliver reports — I deliver measurable transformations. My recommendations are systematically backed by a detailed business case, precise KPIs and an actionable deployment plan. Your profitability is my compass.",
    "Une Expertise Terrain Reconnue": "Recognised Field Expertise",
    "Fort de 8+ années d'expérience et de 30+ projets livrés avec succès, j'ai bâti ma réputation sur la transformation mesurable des opérations logistiques. Mes clients — des leaders mondiaux comme RAJA, DHL, Legallais et Haddad Brands — me font confiance pour convertir leurs défis en avantages compétitifs durables. Chaque intervention est le fruit d'une expertise terrain profonde et d'une compréhension stratégique de vos enjeux business.": "With 8+ years of experience and 30+ successfully delivered projects, I have built my reputation on the measurable transformation of logistics operations. My clients — global leaders such as RAJA, DHL, Legallais and Haddad Brands — trust me to convert their challenges into lasting competitive advantages.",
    "Pragmatisme Terrain & Haute Technologie": "Field Pragmatism & Advanced Technology",
    "Ma singularité réside dans l'alliance entre une expérience opérationnelle profonde — acquise au sein de leaders mondiaux comme DHL et Raja — et une maîtrise des technologies d'automatisation les plus avancées. Je ne théorise pas : j'ai piloté des chantiers réels, géré des équipes terrain et déployé des solutions robotiques dans des environnements exigeants. Cette dualité est votre garantie d'une transformation réussie.": "My uniqueness lies in the alliance between deep operational experience — gained within global leaders such as DHL and Raja — and mastery of the most advanced automation technologies. I don't theorise: I have led real projects, managed field teams and deployed robotic solutions in demanding environments.",

    // Home — Pillars
    "Mes piliers d'intervention": "My areas of intervention",
    "Trois Expertises,": "Three Areas of Expertise,",
    "Une Vision Intégrée": "One Integrated Vision",
    "Je structure mon offre autour de trois domaines d'excellence complémentaires, couvrant l'intégralité du spectre de la performance logistique : de l'optimisation des flux existants à la transformation digitale et robotique de vos opérations.": "I structure my offer around three complementary areas of excellence, covering the full spectrum of logistics performance: from optimising existing flows to digital and robotic transformation of your operations.",

    // Home — References
    "Références & Partenaires": "References & Partners",
    "Ils m'ont fait confiance": "They trusted me",
    "Amaury a transformé notre entrepôt principal en 6 mois. La rigueur méthodologique et la vision stratégique d'Amaury ont permis de réduire nos coûts logistiques de 18% tout en améliorant notre taux de service client.": "Amaury transformed our main warehouse in 6 months. His methodological rigour and strategic vision reduced our logistics costs by 18% while improving our customer service rate.",
    "Directeur Supply Chain — Groupe Distribution International": "Supply Chain Director — International Distribution Group",

    // Home — CTA
    "Passez à l'action": "Take action",
    "Votre Transformation Commence": "Your Transformation Starts",
    " Ici": " Here",

    // Expertise page
    "Domaines d'intervention": "Areas of intervention",
    "Mes Expertises": "My Expertise",
    "Je propose une expertise complète sur l'ensemble du spectre de la performance logistique et industrielle. Mon approche intégrée couvre trois piliers complémentaires, conçus pour s'articuler en fonction de la maturité de votre organisation et de vos ambitions de transformation. Chaque mission débute par un diagnostic approfondi et se conclut par des livrables concrets, actionnables et mesurables.": "I offer comprehensive expertise across the full spectrum of logistics and industrial performance. My integrated approach covers three complementary pillars, designed to align with the maturity of your organisation and your transformation ambitions. Each assignment begins with an in-depth diagnostic and concludes with concrete, actionable and measurable deliverables.",
    "Optimisation & Lean Management": "Optimisation & Lean Management",
    "Premier pilier": "First pillar",
    "Livrables & Prestations": "Deliverables & Services",
    "Deuxième pilier": "Second pillar",
    "Automatisation & Robotisation d'Entrepôt": "Warehouse Automation & Robotics",
    "Automatisation & Robotisation": "Automation & Robotics",
    "Troisième pilier": "Third pillar",
    "Pilotage de Projets Stratégiques": "Strategic Project Management",
    "Pilotage de projet stratégique": "Strategic project management",
    "Schéma directeur logistique": "Logistics master plan",
    "Formation & Coaching d'équipes": "Team training & coaching",

    // Expertise descriptions
    "Le Lean Management est bien plus qu'une méthode : c'est une philosophie de l'excellence opérationnelle qui place la valeur client au cœur de chaque processus. Chez AB Consulting, je déploie les outils du Lean avec une approche pragmatique et terrain, adaptée aux réalités de votre organisation. Mon objectif est d'éliminer systématiquement les gaspillages (Muda) pour libérer de la capacité, réduire les délais et améliorer la qualité de service sans investissement lourd.": "Lean Management is far more than a method — it is a philosophy of operational excellence that places customer value at the heart of every process. At AB Consulting, I deploy Lean tools with a pragmatic, field-based approach adapted to your organisation's realities. My goal is to systematically eliminate waste (Muda) to free up capacity, reduce lead times and improve service quality without heavy investment.",

    // Case Studies
    "Références Terrain": "Field References",
    "Des projets réels, des résultats mesurables. Tous les chiffres présentés sont issus de missions que j'ai conduites personnellement.": "Real projects, measurable results. All figures presented come from assignments I personally conducted.",
    "Mécanisation d'un entrepôt de distribution industrielle B2B": "Mechanisation of a B2B industrial distribution warehouse",
    "Grand distributeur de quincaillerie et fournitures industrielles — France": "Major hardware and industrial supplies distributor — France",
    "Création d'un centre logistique international de 75 000 m²": "Creation of a 75,000 m² international logistics centre",
    "Groupe international de distribution textile — 3 marques majeures": "International textile distribution group — 3 major brands",
    "Ma mission": "My assignment",
    "Horizon 2026 vs 2020": "2026 vs 2020 target",
    "Grâce à l'optimisation des flux": "Through flow optimisation",
    "Vs racks classiques": "Vs standard racking",
    "Garanti sans extension": "Guaranteed without extension",
    "Vs ~100 l/h en manuel": "Vs ~100 l/h manually",
    "Grâce à l'automatisation": "Through automation",
    "Estimées après déploiement": "Estimated post-deployment",
    "Pour un CAPEX de ~9 M€": "For a CAPEX of ~€9M",

    // About page
    "Fondateur & Directeur": "Founder & Director",
    "Mon histoire": "My story",
    "Qui suis-je": "Who I am",
    "Mon identité": "My identity",
    "Mon processus": "My process",
    "Ce qui me guide": "What drives me",
    "Ma vision": "My vision",
    "Mes Valeurs Fondamentales": "My Core Values",
    "Le fondateur": "The founder",
    "Amaury Baudonnière": "Amaury Baudonnière",
    "Excellence · Rigueur · Innovation": "Excellence · Rigour · Innovation",
    "Diplômé de NEOMA Business School (Programme Grande École) avec un double diplôme en Innovation aux Arts et Métiers Paris, je maîtrise aussi bien les méthodologies Lean que les technologies d'automatisation les plus avancées (AMR, AGV, WMS, navettes robotiques).": "A graduate of NEOMA Business School (Grande École Programme) with a dual degree in Innovation from Arts et Métiers Paris, I master both Lean methodologies and the most advanced automation technologies (AMR, AGV, WMS, robotic shuttles).",
    "double diplôme en Innovation aux Arts et Métiers Paris": "dual degree in Innovation from Arts et Métiers Paris",
    "Programme Grande École de NEOMA Business School": "Grande École Programme at NEOMA Business School",
    "Mon engagement : vous accompagner de l'audit stratégique à la mise en œuvre opérationnelle, en garantissant des résultats mesurables et durables. Je suis disponible à distance ou en déplacement sur demande.": "My commitment: to support you from strategic audit to operational implementation, guaranteeing measurable and lasting results. I am available remotely or on-site upon request.",
    "Une Méthodologie en 4 Phases": "A 4-Phase Methodology",
    "Diagnostic": "Diagnostic",
    "Conception": "Design",
    "Déploiement": "Deployment",
    "Pérennisation": "Sustainability",
    "Excellence sans Compromis": "Excellence without Compromise",
    "Impact Mesurable": "Measurable Impact",
    "Impact Concret & Durable": "Concrete & Lasting Impact",
    "Une Vision à Long Terme": "A Long-Term Vision",
    "Indépendance & Objectivité": "Independence & Objectivity",
    "Intégrité & Transparence": "Integrity & Transparency",
    "Transfert de Compétences": "Skills Transfer",
    " Levier de Rentabilité": " Profitability Driver",
    "Movu Robotics": "Movu Robotics",
    "Raja": "Raja",

    // Contact page
    "Prenons contact": "Let's connect",
    "Discutons de votre projet": "Let's discuss your project",
    "Chaque transformation est unique. Contactez-moi pour un premier échange confidentiel sur vos enjeux logistiques.": "Every transformation is unique. Contact me for a confidential first conversation about your logistics challenges.",
    "Formulaire de contact": "Contact form",
    "Nom *": "Last name *",
    "Prénom *": "First name *",
    "Entreprise *": "Company *",
    "Poste": "Job title",
    "Email professionnel *": "Business email *",
    "Téléphone": "Phone",
    "Type de besoin *": "Type of need *",
    "Sélectionnez votre besoin principal": "Select your main need",
    "Audit & Diagnostic Supply Chain": "Supply Chain Audit & Diagnostic",
    "Conseil en WMS / Systèmes d'information": "WMS / Information Systems Consulting",
    "Autre besoin": "Other need",
    "Budget envisagé": "Estimated budget",
    "Moins de 10 000 €": "Less than €10,000",
    "Plus de 200 000 €": "More than €200,000",
    "Horizon du projet": "Project timeline",
    "Urgent (moins d'1 mois)": "Urgent (less than 1 month)",
    "Court terme (1 – 3 mois)": "Short term (1 – 3 months)",
    "Moyen terme (3 – 6 mois)": "Medium term (3 – 6 months)",
    "Long terme (6 mois – 1 an)": "Long term (6 months – 1 year)",
    "Stratégique (1 an et plus)": "Strategic (1 year and above)",
    "Description de votre projet *": "Project description *",
    "Décrivez votre Projet": "Describe your Project",
    "Décrivez votre projet ou vos enjeux Supply Chain. Je vous réponds sous 48 heures ouvrées avec une proposition d'échange personnalisée.": "Describe your project or Supply Chain challenges. I will respond within 48 business hours with a tailored proposal.",
    "Décrivez votre contexte, vos enjeux principaux, les défis que vous souhaitez adresser et les résultats attendus...": "Describe your context, main challenges, the issues you wish to address and the expected outcomes...",
    "Envoyer la demande": "Send request",
    "Mes coordonnées": "My contact details",
    "Restons en Contact": "Stay in Touch",
    "Vous souhaitez en savoir plus sur mon approche ou discuter de vos enjeux Supply Chain ? Je suis à votre disposition.": "Would you like to learn more about my approach or discuss your Supply Chain challenges? I am at your disposal.",
    "France": "France",
    "Localisation": "Location",
    "France — Interventions mondiales": "France — Worldwide operations",
    "Hub stratégique mondial": "Global strategic hub",
    "Distanciel partout dans le monde": "Remote worldwide",
    "Sous 48h ouvrées": "Within 48 business hours",
    "Délai de réponse": "Response time",
    "LinkedIn": "LinkedIn",
    "LinkedIn — Amaury Baudonnière": "LinkedIn — Amaury Baudonnière",
    "Email": "Email",
    "Navigation": "Navigation",
    "Merci pour votre message. Amaury Baudonnière vous répondra personnellement sous 48 heures ouvrées avec une proposition d'échange adaptée à vos enjeux.": "Thank you for your message. Amaury Baudonnière will personally respond within 48 business hours with a tailored proposal for your needs.",
    "Message envoyé": "Message sent",
    "Vos informations sont traitées de manière strictement confidentielle.": "Your information is handled with strict confidentiality.",

    // Footer
    "Travaillons ensemble": "Let's work together",
    "AB Consulting": "AB Consulting",
    "Amaury Baudonnière": "Amaury Baudonnière",
    "Fondateur & Directeur": "Founder & Director",

    // Expertise items (from homepage pillars)
    "Audit des flux, Value Stream Mapping, chantiers 5S et élimination des gaspillages pour maximiser votre efficience opérationnelle.": "Flow audit, Value Stream Mapping, 5S workshops and waste elimination to maximise your operational efficiency.",
    "Études de faisabilité, sélection de technologies AMR/AGV/WMS, rédaction de cahiers des charges et pilotage du déploiement.": "Feasibility studies, AMR/AGV/WMS technology selection, specification writing and deployment management.",
    "Gestion de projet de bout en bout, schéma directeur logistique et accompagnement au changement organisationnel.": "End-to-end project management, logistics master plan and organisational change management.",

    // Page not found
    "Page Not Found": "Page Not Found",
    "Go Home": "Go Home",

    // Error
    "An unexpected error occurred.": "An unexpected error occurred.",
    "Reload Page": "Reload Page",
  };

  function applyTranslations() {
    if ((localStorage.getItem('ab_lang') || 'fr') !== 'en') return;
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    var node;
    while ((node = walker.nextNode())) {
      var txt = node.nodeValue;
      if (txt && txt.trim().length > 2) {
        var translated = EN[txt.trim()];
        if (translated !== undefined) {
          node.nodeValue = txt.replace(txt.trim(), translated);
        }
      }
    }
    // Also translate placeholder attributes
    document.querySelectorAll('[placeholder]').forEach(function(el) {
      var p = el.getAttribute('placeholder');
      if (EN[p]) el.setAttribute('placeholder', EN[p]);
    });
  }

  // Apply after React mounts
  window.addEventListener('load', function() {
    setTimeout(applyTranslations, 100);
  });

  // Re-apply on React Router navigation (SPA)
  var _pushState = history.pushState.bind(history);
  history.pushState = function() {
    _pushState.apply(history, arguments);
    setTimeout(applyTranslations, 150);
  };
  window.addEventListener('popstate', function() {
    setTimeout(applyTranslations, 150);
  });

  // Expose for manual trigger from toggle
  window.abApplyTranslations = applyTranslations;
})();
