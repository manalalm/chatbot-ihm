const responseObj = {
    hello : "Hey ! How are you doing",
   مرحبا : "أهلا أتمنى أن تكون بخير كيف يمكنني مساعدتك",
   اللقاء: " الى اللقاء اتمنى ان تزورنا مرة اخرى",
   معلومات:"  حسنا, وفي أي مدينة تحب أن تتابع دراستك المرجو كتابة المدينة بالفرنسية" ,
   مراكش:"   يمكنك الالتحاق بالماجستير إما في :"+"\r"+
   "          =>FSTG : -science des données et aide a la decesion"+"\r"+
    "          =>FSSM : -master specialisé ingenierie des systemes d'informations"+"\r"+
    "                   -master specialider science de données "+"\n" +
    "       : أو يمكنك الالتحاق بسلك المهندسين "+"\n"+
    "          =>FSTG : -soit premier ou deuxieme année IRSI "+"\n"+
    "          =>ENSAM: -génie informatique",
    revoir: "au revoir",
    البيضاء:"يمكنك الالتحاق بالماجستير إما في"+"\n"+
    "          =>FSAC : - master specialiser big data cloud computing"+"\n"+
    "                   - master specialiser ingenierie informatique et internet"+"\n" +
    "        : أو يمكنك الالتحاق بسلك المهندسين:"+"\n"+
    "          =>ENSAM: - intellegence artificielle et genie informatique"+"\n"+
    "          =>ENITE: -oudit en systemes d'informations "+"\n"+
    "                   -managment en systemes d'informations        "+"\n"+
    "                   -securité en  systemes d'informations"+"\n"+
    "          =>ESTEM: -science de donnée & developpement informatique"+"\n"+
    "                   -systemes reseaux , securité & cloud infrastrecture"+"\n"+
    "                   -methodes informatiques appliquées à la gestion d'entreprises ",
    hey: "Hey! What's Up",
    today: new Date().toDateString(),
    time : new Date().toLocaleTimeString(),
    bonjour:"   bonjour esperons que vous etes bien comment je peux vous aider !",
    bonsoir:" bonsoir esperons que vous etes bien comment je peux vous aider !",
    marrakech:" vous pauvez integrer un master soit en :"+"\r"+
    "          =>FSTG : -science des données et aide a la decesion"+"\r"+
    "          =>FSSM : -master specialisé ingenierie des systemes d'informations"+"\r"+
    "                   -master specialider science de données "+"\n" +
    "        ou bien postuler à un cycle d'ingénieur:"+"\n"+
    "          =>FSTG : -soit premier ou deuxieme année IRSI "+"\n"+
    "          =>ENSAM: -génie informatique",
    informations : " quelle ville desirez-vous continuer vos études",
    licence :"   quelle ville desirez-vous continuer vos etude ",
    rabat:
    "   vous pauvez integrer un master soit en :"+"\n"+
    "          =>UIR : -master de recherche informatique et telecommunication"+"\n"+
    "                  -master specialisé traitement intelegent des systemes "+ "\n"+
   "                   -master specialider informatique appliquer off shoring "+"\n" +
   "           =>ENSIAS : -master internet des objets :logiciel et analytique       "+"\n"+
   "                      -master de recherche en science de données et big data "+"\n"+
   "                      -master de recherche en securité systemes et services "+"\n"+
   "                      -master de recherche cloud and high performance computer "+"\n" +
   "         ou bien postuler à un cycle d'ingénieur :"+"\n"+
   "          =>ENSIAS : -ingénierie intelligence artificielle "+"\n"+
   "                     -securité des systemes d'informations"+"\n"+
   "                     -genie de la data "+"\n" +
   "          => IMPT: - advenced software engineering for degital services      "+"\n"+
   "                   -data engineer   " +"\n"+
   "                   -ingenieur cybersecurite et confiance numérique   "  ,
   casablanca:"   vous pauvez integrer un master soit en :"+"\n"+
    "          =>FSAC : - master specialiser big data cloud computing"+"\n"+
    "                   - master specialiser ingenierie informatique et internet"+"\n" +
    "        ou bien postuler à un cycle d'ingénieur :"+"\n"+
    "          =>ENSAM: - intellegence artificielle et genie informatique"+"\n"+
    "          =>ENITE: -oudit en systemes d'informations "+"\n"+
    "                   -managment en systemes d'informations        "+"\n"+
    "                   -securité en  systemes d'informations"+"\n"+
    "          =>ESTEM: -science de donnée & developpement informatique"+"\n"+
    "                   -systemes reseaux , securité & cloud infrastrecture"+"\n"+
    "                   -methodes informatiques appliquées à la gestion d'entreprises ",
    casa:"   vous pauvez integrer un master soit en :"+"\n"+
    "          =>FSAC : - master specialiser big data cloud computing"+"\n"+
    "                   - master specialiser ingenierie informatique et internet"+"\n" +
    "        ou bien postuler à un cycle d'ingénieur :"+"\n"+
    "          =>ENSAM: - intellegence artificielle et genie informatique"+"\n"+
    "          =>ENITE: -oudit en systemes d'informations "+"\n"+
    "                   -managment en systemes d'informations        "+"\n"+
    "                   -securité en  systemes d'informations"+"\n"+
    "          =>ESTEM: -science de donnée & developpement informatique"+"\n"+
    "                   -systemes reseaux , securité & cloud infrastrecture"+"\n"+
    "                   -methodes informatiques appliquées à la gestion d'entreprises ",
    fes:"   vous pauvez integrer un master soit en :"+"\n"+
    "          =>FSTF :  - master systemes intellegents et reseaux  "+"\n"+
    "                    - master en sciences des données et systemes d'intellegents "+"\n" +
    "          =>ENSAF : - master en sys.intellij.et communicants "+"\n"+
    "                    - master en internet des objets et systemes mobiles "+"\n" +
    "                    - master architectures et app.des sys d'informations "+"\n" +
    "        ou bien postuler à un cycle d'ingénieur :"+"\n"+
    "          =>ENSAF : - genie informatique"+"\n"+
    "                    - genie telecommunicatios & reseaux       "+"\n"+
    "          =>EIDIA : -intellegence artificielle  "+"\n"+
    "                    -big data analytics        "+"\n"+
    "                    -ingenierie d'applications web & mobiles"+"\n"+
    "          =>FSTF :  -systeme intellegents.communiquants et mobiles",
    fès:"   vous pauvez integrer un master soit en :"+"\n"+
    "          =>FSTF :  - master systemes intellegents et reseaux  "+"\n"+
    "                    - master en sciences des données et systemes d'intellegents "+"\n" +
    "          =>ENSAF : - master en sys.intellij.et communicants "+"\n"+
    "                    - master en internet des objets et systemes mobiles "+"\n" +
    "                    - master architectures et app.des sys d'informations "+"\n" +
    "        ou bien postuler à un cycle d'ingénieur :"+"\n"+
    "          =>ENSAF : - genie informatique"+"\n"+
    "                    - genie telecommunicatios & reseaux       "+"\n"+
    "          =>EIDIA : -intellegence artificielle  "+"\n"+
    "                    -big data analytics        "+"\n"+
    "                    -ingenierie d'applications web & mobiles"+"\n"+
    "          =>FSTF :  -systeme intellegents.communiquants et mobiles",
    tanger:"   vous pauvez integrer un master soit en :"+"\n"+
    "          =>FSTT :  - master systemes informatiques et mobiles "+"\n"+
    "        ou bien postuler à un cycle d'ingénieur :"+"\n"+
    "          =>FSTT :  - logiciels et systemes informatiques"+"\n"+
    "          =>ENSAT:  - genie des systemes des telecommunication & reseaux "+"\n"+
    "                    - genie informatiques        ",
    settat:" vous pauvez integrer un master soit en :"+"\n"+
    "          =>FSTS :  - informatiques et modelisations des systemes complexes "+"\n"+
    "        ou bien postuler à un cycle d'ingénieur :"+"\n"+
    "          =>FSTS :  - genie informatique"+"\n",
    tetouan:"   vous pauvez integrer un master soit en :"+"\n"+
    "          => FS-T : - master specialiser ingenierie informatiques"+"\n"+
    "                    - master specialser qualité du logiciels "+"\n" +
    "        ou bien postuler à un cycle d'ingénieur :"+"\n"+
    "          =>ENSA :  - genie informatique"+"\n"+
    "                    - genie de systemes des telecommunicatios & reseaux       ",
    mohammedia:"   vous pauvez integrer un master soit en :"+"\n"+
    "          =>ENSET : - systemes distribués et intellegences artificielles  "+"\n"+
    "                    - master en sciences des données et systemes d'intellegents "+"\n" +
    "          =>FSTM :  - ingenierie des systemes embarqués reseaux et telecommunications"+"\n"+
    "        ou bien postuler à un cycle d'ingénieur :"+"\n"+
    "          =>ENSET : - genie des logiciels et systemes informatiques"+"\n"+
    "                    - ingenierie informatiques :big data et cloud computing "+"\n"+
    "          =>FSTM  : -ingenieries logiciels et integrations des systemes informatiques ",
    benimellal:"  vous pauvez integrer un master soit en :"+"\n"+
    "          =>FSTB :  - informatiques decesionelles"+"\n"+
    "        ou bien postuler à un cycle d'ingénieur :"+"\n"+
    "          =>ENSA :  - transformations degitals indestruelles"+"\n"+
    "          =>FSTB :  - genie electrique option systeme embarqué-informatique indestruelle ",
    meknes:"vous pauvez postuler à un cycle d'ingénieur  :"+"\n"+
    "          =>ENSAM : - Mathematiques appliqués et informatiques"+"\n"+
    "                    - genie industrielle , intellegence artificielle et data science ",
    by:" by !"
  };
  const table = ['hello', 'marrakech', 'bonjour','informations','rabat','casablanca','fes','fès',
    'tanger','settat','tetouan','mohammedia','benimellal','meknes','by','casa','مرحبا','مراكش',
    'البيضاء','معلومات','الاجازة','الرباط','فاس',
    'المحمدية','طنجة ','مكناس','ملال','اللقاء','سطات','تطوان','today','time','revoir'];
 
  