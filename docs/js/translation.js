moduleApp.config(['$translateProvider', function ($translateProvider) {
  
    $translateProvider.translations('en', {
      'MENU_TICKETS': 'Buy Tickets',
      'HOME_TITTLE': 'Synchronizing psytrance in Florida',

      'ABOUT_TITTLE': 'About us',
      'CALENDAR_TITTLE': 'Calendar',
      
      'ABOUT_SUBTITTLE': 'Syncrodelic Festival is a non-profit event aimed at expanding the psychedelic culture in Florida, our event is held on an island adopted by our crew called Spoil Island. We believe that nature and music go hand in hand and that`s why we take care and ask people who attend this event to enjoy it responsibly, keeping the island always clean and respecting the environment, people and local culture as much as possible.',
      'HOME_SUBTITTLE': 'Art, Culture, Ecology and Music is everything we believe in! We are a crew of Brazilian origin and we create multicultural events with artistic, craft, musical activities, and we take our audience to explore the concepts of an alternative community, which seeks peace, love, unity, respect and psycodelia through music.'
    });
   
    $translateProvider.translations('br', {
      'MENU_TICKETS': 'Ingressos',
      'HOME_TITTLE': 'Synchronizando psytrance na Florida',

      'ABOUT_TITTLE': 'Sobre nós',
      'CALENDAR_TITTLE': 'Calendario',
      
      'HOME_SUBTITTLE': 'Syncrodelic Festival e um evento não lucrativo com fins de expandir a cultura psicodélica na Florida, nosso  evento e feito em uma ilha adotada pela nossa crew denominada Spoil Island. Acreditamos que a natureza e música andam lado a lado  e por isso que cuidamos e pedimos para as pessoas que comparecerem nesse evento curtam com responsabilidade mantendo a ilha sempre limpa e respeitando ao máximo o ambiente, as pessoas e a cultura local.',
      'ABOUT_SUBTITTLE': 'Arte, Cultura, Ecologia e Música é tudo que acreditmos! Somos uma crew de origem brasileira e criamos eventos multiculturais com atividades artísticas, artesanais, músicais, e levamos nosso público a explorar os conceitos de uma comunidade alternativa, que busca paz, amor, união, respeito e psycodelia através da música.'    
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sceParameters');  
  
  }]);
  
