type Spelling = {
  spelling: string
  phonetic: string
}
type Question = {
  language: string
  plum: Spelling
  paper: Spelling
}
export const questions = [
  {
    language: 'afrikaans',
    plum: { spelling: 'pruim', phonetic: 'proy-m' },
    paper: { spelling: 'papier', phonetic: 'pah-peer' },
  },
  {
    language: 'albanian',
    plum: { spelling: 'kumbull', phonetic: 'koom-booll' },
    paper: { spelling: 'letër', phonetic: 'leh-tur' },
  },
  {
    language: 'amharic',
    plum: { spelling: 'ፕለም', phonetic: 'pilem' },
    paper: { spelling: 'ፓፓር', phonetic: 'papar' },
  },
  {
    language: 'arabic',
    plum: { spelling: 'الخوخ', phonetic: 'al-khaw-kh' },
    paper: { spelling: 'ورقة', phonetic: 'warqah' },
  },
  {
    language: 'armenian',
    plum: { spelling: 'ծիրան', phonetic: 'tseeran' },
    paper: { spelling: 'թուղթ', phonetic: 'tooghd' },
  },
  {
    language: 'azerbaijani',
    plum: { spelling: 'alça', phonetic: 'al-cha' },
    paper: { spelling: 'kağız', phonetic: 'kah-ghuz' },
  },
  {
    language: 'basque',
    plum: { spelling: 'urre', phonetic: 'oor-reh' },
    paper: { spelling: 'paper', phonetic: 'pah-per' },
  },
  {
    language: 'belarusian',
    plum: { spelling: 'слива', phonetic: 'slee-vah' },
    paper: { spelling: 'папера', phonetic: 'pa-peh-ra' },
  },
  {
    language: 'bengali',
    plum: { spelling: 'বরই', phonetic: 'bôroi' },
    paper: { spelling: 'কাগজ', phonetic: 'kaagôj' },
  },
  {
    language: 'bosnian',
    plum: { spelling: 'šljiva', phonetic: 'shlyeevah' },
    paper: { spelling: 'papir', phonetic: 'pah-peer' },
  },
  {
    language: 'bulgarian',
    plum: { spelling: 'слива', phonetic: 'slee-vah' },
    paper: { spelling: 'хартия', phonetic: 'hahr-tee-yah' },
  },
  {
    language: 'burmese',
    plum: { spelling: 'ပန်းသီး', phonetic: 'pan-thi' },
    paper: { spelling: 'စာအုပ်', phonetic: 'sa-up' },
  },
  {
    language: 'catalan',
    plum: { spelling: 'pruna', phonetic: 'proo-nah' },
    paper: { spelling: 'paper', phonetic: 'pah-per' },
  },
  {
    language: 'cebuano',
    plum: { spelling: 'plum', phonetic: 'plum' },
    paper: { spelling: 'papel', phonetic: 'pah-pel' },
  },
  {
    language: 'chichewa',
    plum: { spelling: 'mpulumutsi', phonetic: 'mpoo-loo-moot-see' },
    paper: { spelling: 'papaya', phonetic: 'pah-pie-yah' },
  },
  {
    language: 'chinese',
    plum: { spelling: '李子', phonetic: 'lee-zee' },
    paper: { spelling: '纸', phonetic: 'zhi' },
  },
  {
    language: 'corsican',
    plum: { spelling: 'pruna', phonetic: 'proo-nah' },
    paper: { spelling: 'carta', phonetic: 'kar-tah' },
  },
  {
    language: 'croatian',
    plum: { spelling: 'šljiva', phonetic: 'shlyeevah' },
    paper: { spelling: 'papir', phonetic: 'pah-peer' },
  },
  {
    language: 'czech',
    plum: { spelling: 'švestka', phonetic: 'shvesh-tka' },
    paper: { spelling: 'papír', phonetic: 'pah-peer' },
  },
  {
    language: 'danish',
    plum: { spelling: 'blomme', phonetic: 'blaw-meh' },
    paper: { spelling: 'papir', phonetic: 'pah-peer' },
  },
  {
    language: 'dutch',
    plum: { spelling: 'pruim', phonetic: 'proy-m' },
    paper: { spelling: 'papier', phonetic: 'pah-peer' },
  },
  {
    language: 'esperanto',
    plum: { spelling: 'pruno', phonetic: 'proo-no' },
    paper: { spelling: 'papero', phonetic: 'pah-peh-ro' },
  },
  {
    language: 'estonian',
    plum: { spelling: 'ploom', phonetic: 'plowm' },
    paper: { spelling: 'paber', phonetic: 'pah-ber' },
  },
  {
    language: 'filipino',
    plum: { spelling: 'prutas ng plum', phonetic: 'proo-tahs ng plum' },
    paper: { spelling: 'papel', phonetic: 'pah-pel' },
  },
  {
    language: 'finnish',
    plum: { spelling: 'luumu', phonetic: 'loo-moo' },
    paper: { spelling: 'paperi', phonetic: 'pah-peh-ree' },
  },
  {
    language: 'french',
    plum: { spelling: 'prune', phonetic: 'proon' },
    paper: { spelling: 'papier', phonetic: 'pah-pee-yay' },
  },
  {
    language: 'frisian',
    plum: { spelling: 'prûm', phonetic: 'proom' },
    paper: { spelling: 'papier', phonetic: 'pah-peer' },
  },
  {
    language: 'galician',
    plum: { spelling: 'ameixa', phonetic: 'ah-may-shah' },
    paper: { spelling: 'papel', phonetic: 'pah-pel' },
  },
  {
    language: 'georgian',
    plum: { spelling: 'ჩაჭრა', phonetic: "ch'ach'raa" },
    paper: { spelling: 'ქაღალდი', phonetic: 'ka-ghal-di' },
  },
  {
    language: 'german',
    plum: { spelling: 'pflaume', phonetic: 'pflau-meh' },
    paper: { spelling: 'papier', phonetic: 'pah-pee-yeh' },
  },
  {
    language: 'greek',
    plum: { spelling: 'δαμάσκηνο', phonetic: 'da-ma-skee-no' },
    paper: { spelling: 'χαρτί', phonetic: 'har-tee' },
  },
  {
    language: 'gujarati',
    plum: { spelling: 'બે જાંબુદી', phonetic: 'be jaamboo-dee' },
    paper: { spelling: 'કાગજ', phonetic: 'kaa-guj' },
  },
  {
    language: 'haitian creole',
    plum: { spelling: 'prune', phonetic: 'proon' },
    paper: { spelling: 'papye', phonetic: 'pah-pee-yeh' },
  },
  {
    language: 'hausa',
    plum: { spelling: 'plum', phonetic: 'ploom' },
    paper: { spelling: 'kuturu', phonetic: 'koo-too-roo' },
  },
  {
    language: 'hawaiian',
    plum: { spelling: 'lihilihi', phonetic: 'lee-hee-lee-hee' },
    paper: { spelling: 'pepa', phonetic: 'peh-pah' },
  },
  {
    language: 'hebrew',
    plum: { spelling: 'שזיף', phonetic: 'sheh-zif' },
    paper: { spelling: 'נייר', phonetic: 'nyeer' },
  },
  {
    language: 'hindi',
    plum: { spelling: 'बेर', phonetic: 'ber' },
    paper: { spelling: 'कागज़', phonetic: 'kaa-gaz' },
  },
  {
    language: 'hmong',
    plum: { spelling: 'yawm lub npe', phonetic: 'yah-oo loo npay' },
    paper: { spelling: 'qhuab ntu', phonetic: 'kwa ntoo' },
  },
  {
    language: 'hungarian',
    plum: { spelling: 'szilva', phonetic: 'seel-vah' },
    paper: { spelling: 'papír', phonetic: 'pah-peer' },
  },
  {
    language: 'icelandic',
    plum: { spelling: 'plómari', phonetic: 'plo-ma-ri' },
    paper: { spelling: 'pappír', phonetic: 'pap-peer' },
  },
  {
    language: 'igbo',
    plum: { spelling: 'plọm', phonetic: 'plohm' },
    paper: { spelling: 'pēpē', phonetic: 'peh-peh' },
  },
  {
    language: 'indonesian',
    plum: { spelling: 'plum', phonetic: 'ploom' },
    paper: { spelling: 'kertas', phonetic: 'kur-tas' },
  },
  {
    language: 'irish',
    plum: { spelling: 'plum', phonetic: 'pluhm' },
    paper: { spelling: 'páipéar', phonetic: 'pawp-ayr' },
  },
  {
    language: 'italian',
    plum: { spelling: 'prugna', phonetic: 'proo-nya' },
    paper: { spelling: 'carta', phonetic: 'kar-ta' },
  },
  {
    language: 'japanese',
    plum: { spelling: '梅', phonetic: 'ume' },
    paper: { spelling: '紙', phonetic: 'ka-mi' },
  },
  {
    language: 'javanese',
    plum: { spelling: 'plum', phonetic: 'ploom' },
    paper: { spelling: 'kertas', phonetic: 'kur-tos' },
  },
  {
    language: 'kannada',
    plum: { spelling: 'ಪ್ಲಂ', phonetic: 'plum' },
    paper: { spelling: 'ಕಾಗದ', phonetic: 'kaa-gad' },
  },
  {
    language: 'kazakh',
    plum: { spelling: 'алма', phonetic: 'al-ma' },
    paper: { spelling: 'қарапайыр', phonetic: 'ka-ra-paiyr' },
  },
  {
    language: 'khmer',
    plum: { spelling: 'ផ្លែទឹកឃ្មុំ', phonetic: 'plea tuk kjom' },
    paper: { spelling: 'ព្រឿង', phonetic: 'prueng' },
  },
  {
    language: 'kinyarwanda',
    plum: { spelling: 'ibinyomoro', phonetic: 'ee-bee-nyo-moro' },
    paper: { spelling: 'igurwa', phonetic: 'ee-goor-wa' },
  },
  {
    language: 'korean',
    plum: { spelling: '자두', phonetic: 'ja-doo' },
    paper: { spelling: '종이', phonetic: 'jong-i' },
  },
  {
    language: 'kurdish',
    plum: { spelling: 'şew', phonetic: 'shev' },
    paper: { spelling: 'pêl', phonetic: 'pehl' },
  },
  {
    language: 'kyrgyz',
    plum: { spelling: 'алма', phonetic: 'al-ma' },
    paper: { spelling: 'кагаз', phonetic: 'ka-gaz' },
  },
  {
    language: 'lao',
    plum: { spelling: 'ຫມາກ', phonetic: 'maak' },
    paper: { spelling: 'ເຈົ້າ', phonetic: 'chao' },
  },
  {
    language: 'latin',
    plum: { spelling: 'prunum', phonetic: 'proo-num' },
    paper: { spelling: 'charta', phonetic: 'kar-ta' },
  },
  {
    language: 'latvian',
    plum: { spelling: 'plūme', phonetic: 'ploo-meh' },
    paper: { spelling: 'papīrs', phonetic: 'pah-peers' },
  },
  {
    language: 'lithuanian',
    plum: { spelling: 'slyva', phonetic: 'sloo-va' },
    paper: { spelling: 'popierius', phonetic: 'po-pee-eh-ryus' },
  },
  {
    language: 'luxembourgish',
    plum: { spelling: 'pflaum', phonetic: 'pflawm' },
    paper: { spelling: 'pabeier', phonetic: 'on-geh-pa-bee-er' },
  },
  {
    language: 'macedonian',
    plum: { spelling: 'слива', phonetic: 'slee-va' },
    paper: { spelling: 'хартија', phonetic: 'har-tee-ya' },
  },
  {
    language: 'malagasy',
    plum: { spelling: 'voasary', phonetic: 'voa-sa-ry' },
    paper: { spelling: 'feuille', phonetic: 'foy' },
  },
  {
    language: 'malay',
    plum: { spelling: 'plum', phonetic: 'plum' },
    paper: { spelling: 'kertas', phonetic: 'ker-tas' },
  },
  {
    language: 'malayalam',
    plum: { spelling: 'പ്ലം', phonetic: 'plum' },
    paper: { spelling: 'പേപ്പർ', phonetic: 'peh-per' },
  },
  {
    language: 'maltese',
    plum: { spelling: 'pruna', phonetic: 'proo-na' },
    paper: { spelling: 'karta', phonetic: 'kar-ta' },
  },
  {
    language: 'maori',
    plum: { spelling: 'paramu', phonetic: 'pah-ruh-moo' },
    paper: { spelling: 'pepa', phonetic: 'peh-pa' },
  },
  {
    language: 'marathi',
    plum: { spelling: 'बोर', phonetic: 'bor' },
    paper: { spelling: 'कागद', phonetic: 'kaa-gad' },
  },
  {
    language: 'mongolian',
    plum: { spelling: 'слива', phonetic: 'slee-va' },
    paper: { spelling: 'шуудан', phonetic: 'shoo-dan' },
  },
  {
    language: 'myanmar (burmese)',
    plum: { spelling: 'ပူးပေါ်', phonetic: 'puu-baw' },
    paper: { spelling: 'စာအုပ်', phonetic: 'sa-oo-pa' },
  },
  {
    language: 'nepali',
    plum: { spelling: 'आलुबखडा', phonetic: 'aa-lu-ba-kha-da' },
    paper: { spelling: 'कागजात', phonetic: 'kaa-ga-jat' },
  },
  {
    language: 'norwegian',
    plum: { spelling: 'plomme', phonetic: 'plom-meh' },
    paper: { spelling: 'papir', phonetic: 'pah-peer' },
  },
  {
    language: 'nyanja (chichewa)',
    plum: { spelling: 'zinyalala', phonetic: 'zee-nyaa-la-la' },
    paper: { spelling: 'papaya', phonetic: 'pa-pie-yah' },
  },
  {
    language: 'odia (oriya)',
    plum: { spelling: 'ବେଲ', phonetic: 'bel' },
    paper: { spelling: 'କାଗଜ', phonetic: 'kaa-gaj' },
  },
  {
    language: 'pashto',
    plum: { spelling: 'آلوچه', phonetic: 'aloo-cha' },
    paper: { spelling: 'کاغد', phonetic: 'kaa-gaz' },
  },
  {
    language: 'persian (farsi)',
    plum: { spelling: 'آلو', phonetic: 'a-loo' },
    paper: { spelling: 'کاغذ', phonetic: 'kaa-ghaz' },
  },
  {
    language: 'polish',
    plum: { spelling: 'śliwka', phonetic: 'shleev-ka' },
    paper: { spelling: 'papier', phonetic: 'pah-pyer' },
  },
  {
    language: 'portuguese',
    plum: { spelling: 'ameixa', phonetic: 'a-mei-sha' },
    paper: { spelling: 'papel', phonetic: 'pa-pel' },
  },
  {
    language: 'punjabi',
    plum: { spelling: 'ਆਲੂਬੁਖਾਰਾ', phonetic: 'a-loo-bu-kha-ra' },
    paper: { spelling: 'ਕਾਗਜ਼', phonetic: 'kaa-gaz' },
  },
  {
    language: 'romanian',
    plum: { spelling: 'prună', phonetic: 'proo-na' },
    paper: { spelling: 'hârtie', phonetic: 'hur-tye' },
  },
  {
    language: 'russian',
    plum: { spelling: 'слива', phonetic: 'slee-va' },
    paper: { spelling: 'бумага', phonetic: 'boo-ma-ga' },
  },
  {
    language: 'samoan',
    plum: { spelling: 'paulumu', phonetic: 'pa-oo-loo-mu' },
    paper: { spelling: 'pepa', phonetic: 'pe-pa' },
  },
  {
    language: 'scottish gaelic',
    plum: { spelling: 'plum', phonetic: 'plum' },
    paper: { spelling: 'pàipear', phonetic: 'pa-pair' },
  },
  {
    language: 'serbian',
    plum: { spelling: 'шљива', phonetic: 'shlee-va' },
    paper: { spelling: 'папир', phonetic: 'pa-peer' },
  },
  {
    language: 'sesotho',
    plum: { spelling: 'mohobe', phonetic: 'mo-ho-be' },
    paper: { spelling: 'papara', phonetic: 'pa-pa-ra' },
  },
  {
    language: 'shona',
    plum: { spelling: 'mazhanje', phonetic: 'ma-zhan-je' },
    paper: { spelling: 'papara', phonetic: 'pa-pa-ra' },
  },
  {
    language: 'sindhi',
    plum: { spelling: 'آلوچوڻ', phonetic: 'aloo-cho-n' },
    paper: { spelling: 'ڪاغذ', phonetic: 'kaa-ghaz' },
  },
  {
    language: 'sinhala (sinhalese)',
    plum: { spelling: 'පැල්ම්', phonetic: 'pel-ma' },
    paper: { spelling: 'කඩදාසි', phonetic: 'ka-da-daa-si' },
  },
  {
    language: 'slovak',
    plum: { spelling: 'slivka', phonetic: 'sleev-ka' },
    paper: { spelling: 'papier', phonetic: 'pa-pyer' },
  },
  {
    language: 'slovenian',
    plum: { spelling: 'sliva', phonetic: 'slee-va' },
    paper: { spelling: 'papir', phonetic: 'pa-peer' },
  },
  {
    language: 'somali',
    plum: { spelling: 'boorashada', phonetic: 'boo-ra-sha-da' },
    paper: { spelling: 'qayb', phonetic: 'kaib' },
  },
  {
    language: 'spanish',
    plum: { spelling: 'ciruela', phonetic: 'see-rweh-la' },
    paper: { spelling: 'papel', phonetic: 'pa-pel' },
  },
  {
    language: 'sundanese',
    plum: { spelling: 'balen', phonetic: 'ba-len' },
    paper: { spelling: 'kertas', phonetic: 'ker-tas' },
  },
  {
    language: 'swahili',
    plum: { spelling: 'plamu', phonetic: 'pla-mu' },
    paper: { spelling: 'karatasi', phonetic: 'ka-ra-ta-see' },
  },
  {
    language: 'swedish',
    plum: { spelling: 'plommon', phonetic: 'plom-mon' },
    paper: { spelling: 'papper', phonetic: 'pap-per' },
  },
  {
    language: 'tajik',
    plum: { spelling: 'алу', phonetic: 'a-loo' },
    paper: { spelling: 'кағаз', phonetic: 'kaa-ghaz' },
  },
  {
    language: 'tamil',
    plum: { spelling: 'பிளம்', phonetic: 'pilam' },
    paper: { spelling: 'காகிதம்', phonetic: 'kaa-gitam' },
  },
  {
    language: 'tatar',
    plum: { spelling: 'алыча', phonetic: 'a-ly-cha' },
    paper: { spelling: 'кағаз', phonetic: 'kaa-ghaz' },
  },
  {
    language: 'telugu',
    plum: { spelling: 'ప్లం', phonetic: 'plam' },
    paper: { spelling: 'పేపర్', phonetic: 'pe-par' },
  },
  {
    language: 'thai',
    plum: { spelling: 'มะพร้าวหิมะ', phonetic: 'ma-prao-hi-ma' },
    paper: { spelling: 'กระดาษ', phonetic: 'gra-daa-t' },
  },
  {
    language: 'turkish',
    plum: { spelling: 'erik', phonetic: 'e-rik' },
    paper: { spelling: 'kağıt', phonetic: 'kaa-yit' },
  },
  {
    language: 'turkmen',
    plum: { spelling: 'alyç', phonetic: 'a-lych' },
    paper: { spelling: 'kagyz', phonetic: 'kaa-gyz' },
  },
  {
    language: 'ukrainian',
    plum: { spelling: 'слива', phonetic: 'sly-va' },
    paper: { spelling: 'папір', phonetic: 'pa-peer' },
  },
  {
    language: 'urdu',
    plum: { spelling: 'آلو بخارا', phonetic: 'a-loo-buk-ha-ra' },
    paper: { spelling: 'کاغذ', phonetic: 'kaa-gaz' },
  },
  {
    language: 'uyghur',
    plum: { spelling: 'يېغىر', phonetic: 'ye-ghir' },
    paper: { spelling: 'قەغەز', phonetic: 'qe-ghiz' },
  },
  {
    language: 'uzbek',
    plum: { spelling: 'o‘rik', phonetic: "o'-rik" },
    paper: { spelling: 'qog‘oz', phonetic: 'qo-‘goz' },
  },
  {
    language: 'vietnamese',
    plum: { spelling: 'mận', phonetic: 'mận' },
    paper: { spelling: 'giấy', phonetic: 'gi-ấy' },
  },
  {
    language: 'welsh',
    plum: { spelling: 'plwm', phonetic: 'pl-oom' },
    paper: { spelling: 'papur', phonetic: 'pa-pir' },
  },
  {
    language: 'xhosa',
    plum: { spelling: 'iphlom', phonetic: 'ee-ploh-m' },
    paper: { spelling: 'iphepha', phonetic: 'ee-peh-pah' },
  },
  {
    language: 'yiddish',
    plum: { spelling: 'פּלימע', phonetic: 'plime' },
    paper: { spelling: 'פּאַפּיר', phonetic: 'papir' },
  },
  {
    language: 'yoruba',
    plum: { spelling: 'Ọsan', phonetic: 'o-shan' },
    paper: { spelling: 'pépà', phonetic: 'pe-pa' },
  },
  {
    language: 'zulu',
    plum: { spelling: 'iqanda', phonetic: 'ee-kan-da' },
    paper: { spelling: 'iphepha', phonetic: 'ee-peh-pah' },
  },
] satisfies Question[]
