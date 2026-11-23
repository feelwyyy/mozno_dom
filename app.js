let specTab = 'pcho';
let fin = 'pcho';
let curLot = SITE_DATA.lots.a;

const s = document.createElement('style');
s.textContent = `
  :root{--bg:#F5F2EB;--sf:#FFF;--alt:#EBE6DC;--ink:#191B1C;--mut:#5F6360;--acc:#A64B2A;--pine:#22362C;--bd:#DCD5C9}
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:var(--bg);color:var(--ink);line-height:1.5}
  h1,h2,h3{font-family:Georgia,serif;line-height:1.15}
  a{color:inherit;text-decoration:none}
  .w{max-width:1200px;margin:0 auto;padding:0 24px}
  .sec{padding:72px 0}.sec-w{background:var(--sf);border-top:1px solid var(--bd);border-bottom:1px solid var(--bd)}
  .kick{display:inline-block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--acc);margin-bottom:8px}
  .btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;border:1px solid transparent;cursor:pointer}
  .btn-p{background:var(--acc);color:#fff}.btn-d{background:var(--ink);color:#fff}.btn-o{background:transparent;border-color:var(--ink);color:var(--ink)}
  .btn-l{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.35);color:#fff}.btn-sm{padding:9px 16px;font-size:11px}.btn-f{width:100%}
  header{position:sticky;top:0;z-index:40;background:rgba(245,242,235,.95);border-bottom:1px solid var(--bd)}
  .hd{height:74px;display:flex;align-items:center;justify-content:space-between}.nav{display:flex;gap:14px;font-size:12px;font-weight:600;text-transform:uppercase;color:var(--mut)}
  .hero{background:var(--pine);color:#F5F2EB;padding:64px 0}.hg{display:grid;grid-template-columns:1.2fr .95fr;gap:40px;align-items:center}
  .hero h1{font-size:clamp(34px,4.5vw,52px);margin-bottom:16px;color:#fff}.hero h1 span{color:#E29B7E;font-style:italic}
  .met{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding-top:22px;border-top:1px solid rgba(255,255,255,.15);margin-top:28px}
  .hcard{background:var(--sf);color:var(--ink);padding:14px;border:1px solid var(--bd)}.hcard img{width:100%;height:280px;object-fit:cover;display:block}
  .sh{display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;margin-bottom:32px}.sh h2{font-size:34px}
  .tabs{display:inline-flex;background:var(--alt);padding:4px;border:1px solid var(--bd)}.tab{padding:9px 16px;font-size:12px;font-weight:700;background:transparent;border:none;color:var(--mut);cursor:pointer}.tab.on{background:var(--ink);color:#fff}
  .pg{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.pc{background:var(--sf);border:1px solid var(--bd);display:flex;flex-direction:column;justify-content:space-between}
  .pimg{position:relative;height:165px;background:var(--alt)}.pimg img{width:100%;height:100%;object-fit:cover}
  .bt{position:absolute;top:10px;left:10px;background:var(--acc);color:#fff;font-size:10px;font-weight:700;padding:3px 8px;text-transform:uppercase}
  .ba{position:absolute;bottom:10px;right:10px;background:rgba(25,27,28,.88);color:#fff;font-size:11px;font-weight:700;padding:3px 8px}
  .pb{padding:16px;flex-grow:1;display:flex;flex-direction:column;justify-content:space-between}
  .mm{display:grid;grid-template-columns:1fr 1fr;gap:8px;background:var(--bg);border:1px solid var(--bd);padding:8px 10px;margin:10px 0 12px;font-size:12px}
  .tbl{margin-top:44px;background:var(--sf);border:1px solid var(--bd);overflow-x:auto}table{width:100%;border-collapse:collapse}th{background:var(--ink);color:#fff;font-size:11px;text-transform:uppercase;padding:14px 20px;text-align:left}td{padding:14px 20px;border-bottom:1px solid var(--bd);font-size:14px}
  .gpg{display:grid;grid-template-columns:1.8fr 1fr;gap:24px;align-items:start}.brd{background:var(--bg);border:1px solid var(--bd);padding:20px;overflow-x:auto}.brdin{min-width:700px}
  .ltop{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:400px;margin:0 auto 16px}.lrow{display:grid;grid-template-columns:repeat(15,1fr);gap:4px;margin-bottom:12px}
  .lot{background:var(--sf);border:1px solid #C5BEB2;padding:6px 2px;text-align:center;cursor:pointer}.lot strong{display:block;font-size:10px}.lot span{display:block;font-size:9px;color:var(--mut)}
  .lot.on{background:var(--ink);color:#fff;border-color:var(--ink)}.lot.on span{color:#D4CFC5}.lot.sld{background:#F8E5E5;border-color:#E2B4B4;color:#9B2C2C}.lot.sld span{color:#9B2C2C;font-weight:700}
  .str{background:var(--alt);border-top:1px solid var(--bd);border-bottom:1px solid var(--bd);text-align:center;font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--mut);padding:6px 0;margin:10px 0}
  .side{background:var(--bg);border:1px solid var(--bd);padding:24px}.sp{background:var(--sf);border:1px solid var(--bd);padding:12px;margin:14px 0}.sl{display:flex;justify-content:space-between;font-size:13px;padding:6px 0;border-bottom:1px solid var(--bg)}
  .g3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.lg{display:grid;grid-template-columns:1.1fr .9fr;gap:32px;align-items:center}.ig{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:18px}.inf{background:var(--bg);border:1px solid var(--bd);padding:14px}
  .fb{background:var(--pine);color:#fff;padding:44px}.fc{border:1px solid rgba(255,255,255,.2);padding:20px;background:rgba(255,255,255,.04)}
  footer{background:var(--ink);color:#A6A198;padding:40px 0;font-size:13px}
  .mbg{position:fixed;inset:0;z-index:60;background:rgba(25,27,28,.78);display:none;align-items:center;justify-content:center;padding:16px;overflow-y:auto}.mbg.on{display:flex}
  .mbx{background:var(--sf);border:1px solid var(--bd);max-width:560px;width:100%;max-height:92vh;overflow-y:auto;position:relative;margin:auto}
  @media(max-width:1000px){.nav{display:none}.hg,.gpg,.lg,.g3{grid-template-columns:1fr}.pg{grid-template-columns:1fr 1fr}}
  @media(max-width:600px){.pg,.met,.ig{grid-template-columns:1fr}}
`;
document.head.appendChild(s);

const PROJECT_SPECS = {
  'Букретов': {
    img: 'bukretov.jpg',
    plan: 'bukretov_plan.jpg',
    specs: [
      'Общая площадь: 114,51 м² (жилая 41,28 м²)',
      'Габариты дома: 12,73 × 11,04 м',
      'Этажей: 1',
      'Спален: 3 + кабинет и гардеробная',
      'Санузлов: 1 (5,95 м²) + бойлерная (5,58 м²)',
      'Высота потолков: 2,97 м',
      'Кухня-гостиная: 38,86 м²'
    ],
    construct: [
      'Стены: газоблок 200 мм, утеплитель «Эковата» 50 мм, керамический полнотелый кирпич',
      'Фундамент: свайно-ростверковый с монолитной ж/б плитой цоколя',
      'Крыша: скатная чердачная, металлочерепица RAL 7024 (утепление 150 мм)',
      'Окна: МПО с ламинацией RAL 7024'
    ],
    extras: [
      'Просторная кухня-гостиная 38,86 м²',
      'Отдельный кабинет 5,58 м² и гардеробная 6,07 м²',
      'Отдельная котельная-бойлерная',
      'Крыльцо 1,43 м²'
    ]
  },
  'Бурсак': {
    img: 'bursak.jpg',
    plan: 'bursak_plan.jpg',
    specs: [
      'Общая площадь: 66,89 м² (жилая 22,92 м²)',
      'Габариты дома: 8,05 × 8,83 м',
      'Этажей: 1',
      'Спален: 2 (11,48 м² и 11,44 м²)',
      'Санузлов: 1 (3,42 м²)',
      'Высота потолков: 2,75 м',
      'Кухня-гостиная: 25,55 м²'
    ],
    construct: [
      'Стены: газоблок 200 мм, утеплитель 50 мм, керамический полнотелый кирпич',
      'Фундамент: свайно-ростверковый с монолитной ж/б плитой',
      'Крыша: скатная чердачная, металлочерепица RAL 7024',
      'Окна: МПО с ламинацией RAL 7024'
    ],
    extras: [
      'Открытая терраса 10,00 м² с выходом из кухни-гостиной',
      'Крыльцо 1,80 м²',
      'Цоколь с отделкой декоративным камнем'
    ]
  },
  'Громов': {
    img: 'gromov.jpg',
    plan: 'gromov_plan.jpg',
    specs: [
      'Общая площадь: 96,49 м² (жилая 43,62 м²)',
      'Габариты дома: 8,05 × 16,36 м',
      'Этажей: 1',
      'Спален: 3 (11,72 м², 14,19 м² и 17,22 м²)',
      'Санузлов: 1 (4,86 м²)',
      'Высота потолков: 2,97 м',
      'Кухня-гостиная: 20,88 м²'
    ],
    construct: [
      'Стены: газоблок 200 мм, утеплитель «Эковата» 50 мм, керамический полнотелый кирпич',
      'Фундамент: свайно-ростверковый с монолитной ж/б плитой',
      'Крыша: скатная чердачная, металлочерепица RAL 7024',
      'Окна: МПО с ламинацией RAL 7024'
    ],
    extras: [
      'Большая спальня 17,22 м² с панорамным эркером',
      'Терраса 14,10 м² с выходом из кухни-гостиной',
      'Чердачная лестница в холле 11,96 м²'
    ]
  },
  'Малама': {
    img: 'malama.jpg',
    plan: 'malama_plan.jpg',
    specs: [
      'Общая площадь: 100,78 м² (по проекту с террасой)',
      'Габариты дома: 12,60 × 9,20 м',
      'Этажей: 1',
      'Спален: 3 (включая мастер-спальню)',
      'Санузлов: 2 (2,60 м² и 3,33 м²) + котельная 5,17 м²',
      'Высота потолков: 2,95 м (в гостиной до 4,37 м)',
      'Кухня + гостиная: 28,30 м² (13,02 + 15,28 м²)'
    ],
    construct: [
      'Стены: газоблок 200/300 мм, утеплитель 50 мм, комбинированный фасад (кирпич, планкен, штукатурка)',
      'Фундамент: свайно-ростверковый с монолитной ж/б плитой',
      'Крыша: скатная, металлочерепица RAL 7024',
      'Окна: панорамное остекление МПО RAL 7024'
    ],
    extras: [
      'Мастер-спальня со своим санузлом (2,60 м²) и гардеробной (2,65 м²)',
      'Высокие потолки в гостиной 3,40–4,37 м',
      'Терраса 14,87 м² и крыльцо 6,13 м²'
    ]
  },
  'Рашпиль': {
    img: 'rashpil.jpg',
    plan: 'rashpil_plan.jpg',
    plan2: 'rashpil2_plan.jpg',
    specs: [
      'Общая площадь: 124,63 м² (жилая 54,28 м²)',
      'Габариты дома: 11,82 × 7,53 м',
      'Этажей: 1 + мансардный этаж',
      'Спален: 4 (две на 1-м этаже, две на мансарде)',
      'Санузлов: 1 (4,19 м²)',
      'Высота потолков: 2,77 м (1 этаж) / 2,60 м (мансарда)',
      'Кухня-гостиная: 27,92 м²'
    ],
    construct: [
      'Стены: газоблок 200 мм, утеплитель 50 мм, керамический лицевой кирпич',
      'Фундамент: свайно-ростверковый с монолитной ж/б плитой',
      'Крыша: скатная мансардная, металлочерепица RAL 7024 (утепление 200 мм)',
      'Окна: МПО с ламинацией RAL 7024'
    ],
    extras: [
      '4 изолированные спальни (от 12,19 до 15,14 м²)',
      'Открытая терраса 14,10 м² с выходом из кухни-гостиной',
      'Крыльцо 1,50 м²'
    ]
  },
  'Шереметьев': {
    img: 'sheremetev.jpg',
    plan: 'sheremetev_plan.jpg',
    plan2: 'sheremetev_plan2.jpg',
    specs: [
      'Общая площадь: 173,98 м² (жилая 42,96 м²)',
      'Габариты дома: 8,18 × 15,08 м',
      'Этажей: 1 + мансардный этаж',
      'Комнат: 3 спальни + зона отдыха 9,45 м² на 2-м этаже',
      'Санузлов: 1 (5,11 м²) + бойлерная и 2 кладовые',
      'Высота потолков: 2,97 м (1 этаж) / 2,55 м (мансарда)',
      'Кухня-гостиная: 30,63 м² со вторым светом 31,27 м²'
    ],
    construct: [
      'Стены: газоблок 200 мм, утеплитель «Эковата» 50 мм, керамический полнотелый кирпич',
      'Фундамент: свайно-ростверковый с монолитной ж/б плитой',
      'Крыша: скатная мансардная, металлочерепица RAL 7024',
      'Окна: панорамные окна в два света МПО RAL 7024'
    ],
    extras: [
      'Архитектурное решение «второй свет» 31,27 м² с панорамным фасадом',
      'Открытая терраса 15,02 м²',
      'Две вместительные кладовые на мансарде (12,00 м² и 10,18 м²)'
    ]
  },
  'Чепега': {
    img: 'chepega.jpg',
    plan: 'chepega_plan.jpg',
    specs: [
      'Планировка коллекции «Гордость»',
      'Этажей: 1',
      'Кухня-гостиная и изолированные спальни',
      'Санузел и прихожая'
    ],
    construct: [
      'Стены: газоблок 200 мм, утеплитель 50 мм, облицовочный керамический кирпич',
      'Фундамент: свайно-ростверковый с монолитной ж/б плитой',
      'Крыша: скатная, металлочерепица RAL 7024',
      'Окна: МПО с ламинацией RAL 7024'
    ],
    extras: [
      'Участок ИЖС ~4,5 сотки в КП «Южный-3»',
      'Септик и скважина включены в ЧО'
    ]
  },
  'Котляровский': {
    img: 'kotlyarovskiy.jpg',
    plan: 'kotlyarovskiy_plan.jpg',
    specs: [
      'Планировка коллекции «Гордость»',
      'Этажей: 1',
      'Просторная кухня-гостиная и изолированные спальни',
      'Удобное функциональное зонирование'
    ],
    construct: [
      'Стены: газоблок 200 мм, утеплитель 50 мм, облицовочный керамический кирпич',
      'Фундамент: свайно-ростверковый с монолитной ж/б плитой',
      'Крыша: скатная, металлочерепица RAL 7024',
      'Окна: МПО с ламинацией RAL 7024'
    ],
    extras: [
      'Участок ИЖС ~4,5 сотки в КП «Южный-3»',
      'Септик и скважина включены в ЧО'
    ]
  }
};

const fName = { cho: 'ЧО (черновая)', pcho: 'ПЧО (предчистовая)', remont: 'С ремонтом' };
const lotBtn = l => '<div class="lot ' + (l.sold ? 'sld' : (curLot.id === l.id ? 'on' : '')) + '" onclick="pick(\'' + l.id + '\')"><strong>' + l.label + '</strong><span>' + (l.sold ? 'Продан' : l.area) + '</span></div>';

function buildHeaderAndHero() {
  return [
    '<header><div class="w hd">',
    '<a href="#" style="display:flex;align-items:center;gap:12px">',
    '<div style="width:36px;height:36px;border:1.5px solid var(--ink);display:flex;align-items:center;justify-content:center;font-family:Georgia,serif;font-weight:700">МД</div>',
    '<div><strong style="display:block;font-size:14px;letter-spacing:.14em">МОЖНО ДОМ</strong><span style="font-size:11px;color:var(--mut)">КП «Южный-3» • 17 км от Краснодара</span></div>',
    '</a>',
    '<nav class="nav" style="align-items:center">',
    '</nav>',
    '<div style="display:flex;align-items:center;gap:16px">',
    '<a href="tel:+79111798775" style="font-size:14px;font-weight:700;white-space:nowrap">+7 (911) 179-87-75</a>',

    '<div style="position:relative;display:inline-block">',
    '<button type="button" onclick="var m=this.nextElementSibling;m.style.display=m.style.display===\'flex\'?\'none\':\'flex\';event.stopPropagation()" class="btn btn-d btn-sm">наши соц сети &#9662;</button>',
    '<div onclick="event.stopPropagation()" style="display:none;position:absolute;top:calc(100% + 8px);right:0;min-width:200px;background:var(--sf);border:1px solid var(--bd);box-shadow:0 12px 30px rgba(0,0,0,.15);padding:6px;z-index:50;flex-direction:column;gap:2px">',
    '<a href="https://max.ru/channel_mognodom" target="_blank" rel="noopener" style="padding:9px 12px;font-size:13px;font-weight:700;color:var(--acc);display:block">Канал в MAX</a>',
    '<a href="https://t.me/legkayaipoteka" target="_blank" rel="noopener" style="padding:9px 12px;font-size:13px;font-weight:600;color:var(--ink);display:block">Telegram</a>',
    '<a href="https://vk.ru/mdkrasnodar" target="_blank" rel="noopener" style="padding:9px 12px;font-size:13px;font-weight:600;color:var(--ink);display:block">ВКонтакте</a>',
    '<a href="https://www.instagram.com/mariyam230488?gwpx=NnlkM2Rqb3JvZHZl&utm_source=qr" target="_blank" rel="noopener" style="padding:9px 12px;font-size:13px;font-weight:600;color:var(--ink);display:block">Instagram</a>',
    '</div>',
    '</div>',

    

    '</div></header>',

    '<section class="hero"><div class="w hg">',
    '<div>',
    '<span style="display:inline-block;border:1px solid rgba(255,255,255,.25);padding:5px 12px;font-size:11px;text-transform:uppercase;margin-bottom:16px">КП «Южный-3» • Участки ИЖС ~4,5 сотки</span>',
    '<h1>Коллекция проектов <span>«Гордость»</span></h1>',
    '<p style="color:#D5D9D4;margin-bottom:24px">Надёжные, комфортные и стильные дома в 25–30 минутах от центра Краснодара. 8 планировок от <strong>6 700 000 ₽</strong>, первый взнос от <strong>290 000 ₽</strong>. Уведомления на строительство получены — приступаем к работам сразу.</p>',
    '<div style="display:flex;gap:12px;flex-wrap:wrap"><a href="#projects" class="btn btn-p">Смотреть 8 проектов</a><a href="#genplan" class="btn btn-l">Выбрать участок на схеме</a></div>',
    '<div class="met">',
    '<div><strong style="display:block;font-family:Georgia,serif;font-size:20px;color:#fff">25–30 мин</strong><span style="font-size:12px;color:#B9C2BC">до Краснодара</span></div>',
    '<div><strong style="display:block;font-family:Georgia,serif;font-size:20px;color:#fff">62 из 64</strong><span style="font-size:12px;color:#B9C2BC">свободных участков</span></div>',
    '<div><strong style="display:block;font-family:Georgia,serif;font-size:20px;color:#fff">от 290 тыс.</strong><span style="font-size:12px;color:#B9C2BC">первый взнос</span></div>',
    '<div><strong style="display:block;font-family:Georgia,serif;font-size:20px;color:#fff">Эскроу</strong><span style="font-size:12px;color:#B9C2BC">защита сделки</span></div>',
    '</div></div>',
    '<div class="hcard">',
    '<img src="hero.jpg" alt="Дом коллекции Гордость">',
    '<div style="padding:14px 4px 4px">',    
    '<p style="font-weight:700;font-size:15px;margin-bottom:12px">ЧО (черновая) • ПЧО (предчистовая) • С ремонтом</p>',
    '</div></div></div></section>'
  ].join('');
}

function buildProjectsAndGenplan() {
  const P = SITE_DATA.projects;
  const L = SITE_DATA.lots;

  const cards = P.map(function(p) {
    const info = PROJECT_SPECS[p.name] || {};
    const photo = info.img || 'hero.jpg';
    const badge = p.badge ? '<span class="bt">' + p.badge + '</span>' : '';
    const area = p.area ? '<span class="ba">' + p.area + '</span>' : '';
    const mort = p.pv
      ? '<div class="mm"><div><span style="display:block;font-size:10px;color:var(--mut)">Первый взнос</span><strong>' + p.pv + '</strong></div><div><span style="display:block;font-size:10px;color:var(--mut)">Платёж/мес</span><strong>' + p.monthly + '</strong></div></div>'
      : '<div style="background:var(--bg);border:1px solid var(--bd);padding:10px;font-size:12px;color:var(--mut);margin:10px 0 12px">Семейная ипотека • Мат. капитал в ПВ</div>';

    return [
      '<article class="pc"><div>',
      '<div class="pimg" style="cursor:pointer" onclick="openProject(\'' + p.name + '\')"><img src="' + photo + '" alt="' + p.name + '">' + badge + area + '</div>',
      '<div class="pb"><div>',
      '<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px"><h3 style="font-size:20px">«' + p.name + '»</h3><span style="font-size:11px;font-weight:700;color:var(--acc)">' + fName[fin] + '</span></div>',
      '<p style="font-size:13px;color:var(--mut);min-height:38px">' + p.feature + '</p>' + mort + '</div>',
      '<div style="border-top:1px solid var(--bd);padding-top:10px"><div style="font-family:Georgia,serif;font-size:22px;font-weight:700;margin-bottom:10px">' + p[fin] + '</div>',
      '<button class="btn btn-o btn-f btn-sm" onclick="openProject(\'' + p.name + '\')">Планировка и фото</button></div>',
      '</div></div></article>'
    ].join('');
  }).join('');

  const rows = P.map(function(p) {
    const ar = p.area ? ' <span style="background:var(--alt);padding:2px 6px;font-size:11px;font-weight:700;margin-left:6px">' + p.area + '</span>' : '';
    return '<tr><td><strong>' + p.name + '</strong>' + ar + '</td><td>' + p.cho + '</td><td>' + p.pcho + '</td><td><strong>' + p.remont + '</strong></td><td style="text-align:right"><button class="btn btn-d btn-sm" onclick="openProject(\'' + p.name + '\')">Подробнее</button></td></tr>';
  }).join('');

  return [
    '<section id="projects" class="sec"><div class="w">',
    '<div class="sh"><div><span class="kick">Коллекция «Гордость»</span><h2>8 проектов домов с расчётом ипотеки</h2></div>',
    '<div class="tabs">',
    '<button class="tab ' + (fin === 'pcho' ? 'on' : '') + '" onclick="setF(\'pcho\')">ПЧО (предчистовая)</button>',
    '<button class="tab ' + (fin === 'cho' ? 'on' : '') + '" onclick="setF(\'cho\')">ЧО (черновая)</button>',
    '<button class="tab ' + (fin === 'remont' ? 'on' : '') + '" onclick="setF(\'remont\')">Ремонт (под ключ)</button>',
    '</div></div>',
    '<div class="pg">' + cards + '</div>',
    '<div class="tbl"><div style="padding:20px 22px;border-bottom:1px solid var(--bd);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">',
    '<div><h3 style="font-size:21px">Сводный прайс-лист коллекции</h3><p style="font-size:13px;color:var(--mut)">Цены указаны с учётом участка ИЖС в КП «Южный-3»</p></div>',
    '<a href="files/gordost-planirovki.pdf" download class="btn btn-o btn-sm">Скачать все 8 планировок</a></div>',
    '<table><thead><tr><th>Проект</th><th>ЧО (черновая)</th><th>ПЧО (предчистовая)</th><th>Ремонт (под ключ)</th><th style="text-align:right">Карточка</th></tr></thead><tbody>' + rows + '</tbody></table></div>',
    '</div></section>',

    '<section id="genplan" class="sec sec-w"><div class="w">',
    '<div class="sh"><div><span class="kick">Кадастровый квартал 23:07:0301032</span><h2>Интерактивный генплан КП «Южный-3»</h2></div>',
    '<div style="display:flex;gap:10px;flex-wrap:wrap">',
    '<div style="background:var(--bg);border:1px solid var(--bd);padding:8px 14px"><span style="display:block;font-size:11px;color:var(--mut)">Всего</span><strong>64 уч.</strong></div>',
    '<div style="background:var(--bg);border:1px solid var(--bd);padding:8px 14px"><span style="display:block;font-size:11px;color:var(--mut)">Свободно</span><strong style="color:#1E563B">62 уч.</strong></div>',
    '<div style="background:var(--bg);border:1px solid var(--bd);padding:8px 14px"><span style="display:block;font-size:11px;color:var(--mut)">Продано</span><strong style="color:#9B2C2C">2 (ЗУ 4, 6)</strong></div>',
    '<div style="background:var(--bg);border:1px solid var(--bd);padding:8px 14px"><span style="display:block;font-size:11px;color:var(--mut)">Площадь</span><strong>28 851 м²</strong></div>',
    '</div></div>',
    '<div class="gpg"><div class="brd"><div class="brdin">',
    '<div style="font-size:11px;font-weight:700;color:var(--mut);margin-bottom:6px;text-align:center">ВЕРХНИЙ БЛОК • № 1106–1109 (400–401 м²)</div>',
    '<div class="ltop">' + L.top.map(lotBtn).join('') + '</div>',
    '<div style="display:flex;justify-content:space-between;font-size:11px;font-weight:700;color:var(--mut);margin-bottom:4px"><span>РЯД A • Нечётные ЗУ 1–29 (ул. Белогорская)</span><span>15 уч. • 6 776 м²</span></div>',
    '<div class="lrow">' + L.a.map(lotBtn).join('') + '</div>',
    '<div class="str">ул. Белогорская</div>',
    '<div style="display:flex;justify-content:space-between;font-size:11px;font-weight:700;color:var(--mut);margin-bottom:4px"><span>РЯД B • Чётные ЗУ 2–30 (ул. Белогорская)</span><span>15 уч. • 6 810 м²</span></div>',
    '<div class="lrow">' + L.b.map(lotBtn).join('') + '</div>',
    '<div style="display:flex;justify-content:space-between;font-size:11px;font-weight:700;color:var(--mut);margin-bottom:4px"><span>РЯД C • Нечётные ЗУ 1–29 (ул. Луганская)</span><span>15 уч. • 6 821 м²</span></div>',
    '<div class="lrow">' + L.c.map(lotBtn).join('') + '</div>',
    '<div class="str">ул. Луганская</div>',
    '<div style="display:flex;justify-content:space-between;font-size:11px;font-weight:700;color:var(--mut);margin-bottom:4px"><span>РЯД D • Чётные ЗУ 2–30 (ул. Луганская)</span><span>15 уч. • 6 841 м² • Продано: 2</span></div>',
    '<div class="lrow">' + L.d.map(lotBtn).join('') + '</div>',
    '</div></div>',
    '<aside class="side"><span class="kick">Карточка участка</span><h3 style="font-size:24px">' + curLot.row + ' • ' + curLot.label + '</h3>',
    '<p style="font-size:13px;color:var(--mut);margin-top:4px">Выход на ' + curLot.street + '</p>',
    '<div class="sp">',
    '<div class="sl"><span>Кадастровый номер</span><strong>23:07:0301032' + curLot.cad + '</strong></div>',
    '<div class="sl"><span>Площадь</span><strong>' + curLot.area + ' кв. м (~' + (curLot.area / 100).toFixed(2) + ' сот.)</strong></div>',
    '<div class="sl"><span>Назначение</span><strong>ИЖС (уведомление есть)</strong></div>',
    '<div class="sl" style="border:none"><span>Статус</span><strong style="color:' + (curLot.sold ? '#9B2C2C' : '#1E563B') + '">' + (curLot.sold ? 'Продан' : 'Свободен') + '</strong></div>',
    '</div>',
    '<button class="btn btn-p btn-f" ' + (curLot.sold ? 'disabled style="opacity:.45;cursor:not-allowed"' : '') + ' onclick="book()">' + (curLot.sold ? 'Участок уже продан' : 'Забронировать этот участок') + '</button>',
    '</aside></div></div></section>'
  ].join('');
}

function buildBottomSections() {
  return [
    '<section id="location" class="sec sec-w"><div class="w lg">',
    '<div>',
    '<span class="kick">Локация и окружение</span>',
    '<h2 style="font-size:32px;margin-bottom:12px">КП «Южный-3»: 17 км от центра Краснодара</h2>',
    '<p style="font-size:15px;color:var(--mut)">Заезд с <strong>ул. Мира через ул. Новую</strong> вдоль каскада водоёмов прямо на <strong>ул. Белогорскую</strong> и <strong>ул. Луганскую</strong>.</p>',
    '<div class="ig">',
    '<div class="inf"><strong>≈ 500 м (1 мин)</strong><span style="font-size:12px;color:var(--mut);display:block">Остановка транспорта</span></div>',
    '<div class="inf"><strong>≈ 1–2 км (2–5 мин)</strong><span style="font-size:12px;color:var(--mut);display:block">Магазины рядом</span></div>',
    '<div class="inf"><strong>≈ 2 км (4 мин)</strong><span style="font-size:12px;color:var(--mut);display:block">Детский сад</span></div>',
    '<div class="inf"><strong>≈ 2,5 км (5 мин)</strong><span style="font-size:12px;color:var(--mut);display:block">Общеобразовательная школа</span></div>',
    '<div class="inf"><strong>≈ 2,5 км (5 мин)</strong><span style="font-size:12px;color:var(--mut);display:block">Станция электрички «Южный»</span></div>',
    '<div class="inf" style="background:var(--alt)"><strong>≈ 17 км (25–30 мин)</strong><span style="font-size:12px;color:var(--mut);display:block">До центра Краснодара</span></div>',
    '</div>',
    '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:20px">',
    '<a href="https://yandex.ru/navi?text=45.141106,39.015892&si=y4ph8nr526rqc7gbyehz7txdu4" target="_blank" rel="noopener" class="btn btn-p btn-sm">Получить геоточку</a>',
    '<button class="btn btn-o btn-sm" onclick="openM(\'Запись на просмотр в КП Южный-3\')">Записаться на просмотр</button>',
    '</div></div>',

    '<div style="background:var(--bg);border:1px solid var(--bd);padding:12px">',
    '<a href="location_map.png" target="_blank" title="Открыть схему во весь экран" style="display:block;border:1px solid var(--bd)">',
    '<img src="location_map.png" alt="Схема локации КП Южный-3" style="width:100%;height:auto;display:block">',
    '</a>',
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;font-size:11px;color:var(--mut)">',
    '<span>Нажмите на схему, чтобы увеличить</span>',
    '<a href="location_map.png" target="_blank" style="font-weight:700;color:var(--acc);text-transform:uppercase">Полный размер &rarr;</a>',
    '</div></div>',
    '</div></section>',

    '<section id="remont" class="sec"><div class="w lg" style="align-items:start">',
    '<div>',
    '<span class="kick">Степень готовности на выбор</span>',
    '<h2 style="font-size:32px;margin-bottom:12px">Что входит в ЧО, ПЧО и чистовой Ремонт</h2>',
    '<p style="font-size:15px;color:var(--mut)">Выберите комплектацию справа, чтобы изучить полный технический состав работ. <strong>В комплектации «Ремонт» сантехника уже входит в цену.</strong></p>',
    '<div class="ig">',
    '<div class="inf"><strong>ЧО: Этап № 1</strong><span style="font-size:12px;color:var(--mut);display:block">Свайно-ростверковый фундамент М250, септик и скважина</span></div>',
    '<div class="inf"><strong>ЧО: Этап № 2</strong><span style="font-size:12px;color:var(--mut);display:block">Кирпич, газоблок, армопояс, кровля, окна и двери</span></div>',
    '<div class="inf"><strong>ПЧО: Стены и потолок</strong><span style="font-size:12px;color:var(--mut);display:block">Утепление потолка 150 мм, штукатурка и полусухая стяжка</span></div>',
    '<div class="inf"><strong>ПЧО: Инженерия</strong><span style="font-size:12px;color:var(--mut);display:block">10 розеток, 8 выключателей, щит 18 гр., котёл и тёплый пол</span></div>',
    '<div class="inf"><strong>Ремонт: Отделка</strong><span style="font-size:12px;color:var(--mut);display:block">Покраска в 2 слоя, керамогранит, ламинат и потолки</span></div>',
    '<div class="inf" style="background:var(--alt)"><strong>Ремонт: Сантехника</strong><span style="font-size:12px;color:var(--mut);display:block">Ванна, унитаз, раковина, бойлер, смесители и приёмка</span></div>',
    '</div>',
    '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:20px">',
    '<button class="btn btn-p btn-sm" onclick="openM(\'Расчёт стоимости по комплектациям\')">Рассчитать стоимость</button>',
    '<a href="#projects" class="btn btn-o btn-sm">Сравнить цены в проектах</a>',
    '</div></div>',

    '<div style="background:var(--sf);border:1px solid var(--bd);padding:24px">',
    '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:18px;padding-bottom:14px;border-bottom:1px solid var(--bd)">',
    '<span class="kick" style="margin:0">Подробный состав работ</span>',
    '<div class="tabs">',
    '<button class="tab ' + (specTab === 'cho' ? 'on' : '') + '" onclick="setSpec(\'cho\')">ЧО (черновая)</button>',
    '<button class="tab ' + (specTab === 'pcho' ? 'on' : '') + '" onclick="setSpec(\'pcho\')">ПЧО (предчистовая)</button>',
    '<button class="tab ' + (specTab === 'remont' ? 'on' : '') + '" onclick="setSpec(\'remont\')">Ремонт (под ключ)</button>',
    '</div></div>',

    specTab === 'cho' ? [
      '<p style="font-size:13px;font-weight:700;color:var(--ink);margin-bottom:12px">В черновую отделку входит:</p>',
      '<div style="margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--bd)">',
      '<strong style="display:block;font-size:14px;color:var(--acc);margin-bottom:6px">Этап № 1 включает в себя следующие работы:</strong>',
      '<ul style="font-size:13px;color:var(--mut);padding-left:18px;line-height:1.6">',
      '<li>Вынос строительных осей, разметка границ дома на участке</li>',
      '<li>Разметка свайно-ростверкового фундамента</li>',
      '<li>Подготовка ростверка и бурение свай</li>',
      '<li>Установка опалубки для устройства фундамента и ее монтаж</li>',
      '<li>Армирование фундамента и цоколя (6 жил арматуры ф10/ф12)</li>',
      '<li>Работа по заливке фундамента и цоколя (марка бетона М250)</li>',
      '<li>Демонтаж внутренней опалубки фундамента</li>',
      '<li>Работы по выполнению обратной засыпки цоколя</li>',
      '<li>Монтаж канализации сантехнические работы (закладные под канализацию до 3х точек)</li>',
      '<li>Армирование плиты цоколя (арматура ф10/ф12, ячейка 250х250мм)</li>',
      '<li>Заливка плиты цоколя (марка бетона М250)</li>',
      '<li>Демонтаж внешней опалубки</li>',
      '<li>Копка и монтаж септика (2 бетонных кольца наружным диаметром 2,20м)</li>',
      '<li>Устройство скважины (до 40 м.)</li>',
      '</ul>',
      '<p style="margin-top:8px;padding:8px 10px;background:var(--bg);border-left:2px solid var(--acc);font-size:12px;color:var(--ink)"><strong>Примечание:</strong> Земляные работы, устройство основания под фундамент рассчитаны для ровного участка без уклона.</p>',
      '</div>',
      '<div>',
      '<strong style="display:block;font-size:14px;color:var(--acc);margin-bottom:6px">Этап № 2 включает в себя следующие работы:</strong>',
      '<ul style="font-size:13px;color:var(--mut);padding-left:18px;line-height:1.6">',
      '<li>Гидроизоляция основания под несущие стены дома (рулонный рубероид)</li>',
      '<li>Доставка и разгрузка кирпича, газоблока</li>',
      '<li>Кладка облицовочного кирпича</li>',
      '<li>Монтаж металлического уголка 75х75мм над оконными и дверным проемами наружных стен</li>',
      '<li>Возведение стен и перегородок из блока (внутренние стены газоблок 200х250мм, внутренние перегородки газоблок 150х250мм)</li>',
      '<li>Устройство ж/б монолитных перемычек над дверными и оконными проемами</li>',
      '<li>Монтаж опалубки армопояса</li>',
      '<li>Армирование армопояса (3 жилы арматуры ф10 все несущие стены)</li>',
      '<li>Заливка армопояса и перемычек над дверными и оконными проемами (марка бетона М250)</li>',
      '<li>Гидроизоляция рубероидом, установка мауэрлата на анкера 12х150мм</li>',
      '<li>Возведение стропильной системы доска 45х145 мм с шагом 750мм</li>',
      '<li>Монтаж гидропароизоляции через контррейку 25х45мм</li>',
      '<li>Монтаж обрешетки под металлочерепицу</li>',
      '<li>Монтаж чернового потолка с помощью гидропароизоляции и доски 25х100мм шагом 600 мм</li>',
      '<li>Металлочерепица с доборными элементами кровли</li>',
      '<li>Работа по монтажу металлочерепицы (толщина 0,45мм)</li>',
      '<li>Монтаж металлопластиковых окон упрощенным способом (не по ГОСТу)</li>',
      '<li>Монтаж дверей</li>',
      '</ul>',
      '<p style="margin-top:8px;padding:8px 10px;background:var(--bg);border-left:2px solid var(--acc);font-size:12px;color:var(--ink)"><strong>Примечание:</strong> Лес и доски огнебиозащитой и пропиткой не обрабатываются.</p>',
      '</div>'
    ].join('') : (specTab === 'pcho' ? [
      '<p style="font-size:13px;font-weight:700;color:var(--ink);margin-bottom:12px">В предчистовую отделку добавляются следующие работы:</p>',
      '<div style="margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--bd)">',
      '<strong style="display:block;font-size:14px;color:var(--acc);margin-bottom:6px">1. Утепление, стены и полы</strong>',
      '<ul style="font-size:13px;color:var(--mut);padding-left:18px;line-height:1.6">',
      '<li>Утепление потолка (3 слоя по 50 мм рулонного минераловатного утеплителя)</li>',
      '<li>Простое оштукатуривание внутренней поверхности стен без маяков ручным способом</li>',
      '<li>Стяжка пола механизированная полусухая</li>',
      '</ul></div>',
      '<div style="margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--bd)">',
      '<strong style="display:block;font-size:14px;color:var(--acc);margin-bottom:6px">2. Электромонтажные работы в количестве:</strong>',
      '<ul style="font-size:13px;color:var(--mut);padding-left:18px;line-height:1.6">',
      '<li>10 точек розетки, 8 точек выключатели, 8 групп света</li>',
      '<li>Щит внутренний 18 групп</li>',
      '<li>3х фазный автомат — 1 шт.</li>',
      '<li>Диф. автомат — 1 шт.</li>',
      '<li>1но фазный автомат — 7 шт.</li>',
      '</ul></div>',
      '<div>',
      '<strong style="display:block;font-size:14px;color:var(--acc);margin-bottom:6px">3. Отопление и водоснабжение</strong>',
      '<ul style="font-size:13px;color:var(--mut);padding-left:18px;line-height:1.6">',
      '<li>Монтаж металлических радиаторов отопления (в спальнях)</li>',
      '<li>Монтаж электрического котла и насосов отопления</li>',
      '<li>Монтаж системы теплого пола (кухня-гостиная, коридор, санузел)</li>',
      '<li>Разводка холодного и горячего водоснабжения (кухня, санузел)</li>',
      '</ul></div>'
    ].join('') : [

      '<div style="margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--bd)">',
      '<strong style="display:block;font-size:14px;color:var(--acc);margin-bottom:6px">1. Стены</strong>',
      '<ul style="font-size:13px;color:var(--mut);padding-left:18px;line-height:1.6">',
      '<li>Грунтовка стен</li><li>Черновая шпаклёвка</li><li>Чистовая шпаклёвка</li><li>Шлифовка/зашкуривание поверхности</li><li>Обеспыливание стен</li><li>Финишная грунтовка</li><li>Оклейка малярной лентой углов и примыканий (при необходимости)</li><li>Покраска в 2 слоя</li><li>Монтаж декоративных молдингов / декора (опционально)</li><li>Укладка керамической плитки в санузлах</li><li>Затирка швов плитки</li><li>Нанесение герметика по примыканиям плитки</li><li>Монтаж декоративных уголков для плитки (при необходимости)</li>',
      '</ul></div>',
      '<div style="margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--bd)">',
      '<strong style="display:block;font-size:14px;color:var(--acc);margin-bottom:4px">2. Полы</strong>',
      '<p style="font-size:12px;font-weight:700;color:var(--ink);margin:4px 0">Керамическая плитка / керамогранит</p>',
      '<ul style="font-size:13px;color:var(--mut);padding-left:18px;line-height:1.6">',
      '<li>Укладка керамогранита в санузлах</li><li>Укладка керамогранита в кухне-гостиной</li><li>Укладка керамогранита в коридорах</li><li>Затирка швов</li><li>Герметизация примыканий</li>',
      '</ul>',
      '<p style="font-size:12px;font-weight:700;color:var(--ink);margin:6px 0 4px">Ламинат и напольные покрытия</p>',
      '<ul style="font-size:13px;color:var(--mut);padding-left:18px;line-height:1.6">',
      '<li>Укладка подложки под ламинат</li><li>Укладка ламината в жилых комнатах</li><li>Монтаж ПВХ-плинтуса по периметру помещений (кроме санузлов)</li><li>Установка порожков/компенсаторов между покрытиями</li>',
      '</ul>',
      '<p style="font-size:12px;font-weight:700;color:var(--ink);margin:6px 0 4px">Входные группы</p>',
      '<ul style="font-size:13px;color:var(--mut);padding-left:18px;line-height:1.6">',
      '<li>Укладка плитки на входных группах</li><li>Устройство грязезащитной зоны (по желанию)</li>',
      '</ul></div>',
      '<div style="margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--bd)">',
      '<strong style="display:block;font-size:14px;color:var(--acc);margin-bottom:2px">3. Сантехника (чистовая установка)</strong>',
      '<span style="display:block;font-size:12px;font-weight:700;color:#1E563B;margin-bottom:6px">(сантехника входит в стоимость)</span>',
      '<ul style="font-size:13px;color:var(--mut);padding-left:18px;line-height:1.6">',
      '<li>Установка ванны</li><li>Установка раковины</li><li>Установка водонагревателя</li><li>Установка унитаза</li><li>Монтаж смесителей (раковина / ванна / душ)</li><li>Установка душевой стойки или гигиенического душа (если предусмотрено)</li><li>Подключение сифонов</li><li>Тестирование сантехнических узлов</li><li>Установка электрической вытяжки в санузлах</li>',
      '</ul></div>',
      '<div style="margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--bd)">',
      '<strong style="display:block;font-size:14px;color:var(--acc);margin-bottom:6px">4. Электрика</strong>',
      '<ul style="font-size:13px;color:var(--mut);padding-left:18px;line-height:1.6">',
      '<li>Установка розеток</li><li>Установка выключателей</li><li>Монтаж осветительных приборов</li><li>Монтаж точечных светильников в натяжные потолки</li><li>Подключение вытяжки, водонагревателя, зеркал с подсветкой</li><li>Установка ТВ-розеток и интернет-розеток (при необходимости)</li><li>Проверка электрической сети и всех линий</li>',
      '</ul></div>',
      '<div style="margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--bd)">',
      '<strong style="display:block;font-size:14px;color:var(--acc);margin-bottom:6px">5. Потолки</strong>',
      '<ul style="font-size:13px;color:var(--mut);padding-left:18px;line-height:1.6">',
      '<li>Монтаж натяжных потолков</li><li>Установка встроенных светильников</li><li>Установка декоративных вставок и маскировочных лент</li>',
      '</ul></div>',
      '<div>',
      '<strong style="display:block;font-size:14px;color:var(--acc);margin-bottom:6px">6. Проверка и сдача работ</strong>',
      '<ul style="font-size:13px;color:var(--mut);padding-left:18px;line-height:1.6">',
      '<li>Проверка качества покраски</li><li>Проверка работы сантехники</li><li>Проверка освещения</li><li>Проверка ровности пола и качества покрытия</li>',
      '</ul></div>'
    ].join('')),
    '</div></div></section>',

    

    '<footer><div class="w" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px">',
    '<div><strong style="color:#fff;letter-spacing:.12em">МОЖНО ДОМ</strong><p style="margin-top:4px">Коллекция проектов «Гордость» • КП «Южный-3» (17 км от Краснодара)</p></div>',
    '<div style="display:flex;gap:10px"><a href="files/gordost-planirovki.pdf" download class="btn btn-l btn-sm">Скачать планировки</a><a href="https://max.ru/channel_mognodom" target="_blank" rel="noopener" class="btn btn-p btn-sm">Канал в MAX</a></div>',
    '</div></footer>',

    '<div class="mbg" id="modal" onclick="if(event.target===this)closeM()"><div class="mbx" id="mbox"></div></div>'
  ].join('');
}

function buildOfferSection() {
  return [
    '<section class="sec sec-w"><div class="w">',
    '<div class="sh" style="margin-bottom:28px">',
    '<div style="max-width:760px">',
    '<span class="kick">КП «Южный-3» • Готовое решение</span>',
    '<h2 style="font-size:clamp(26px,3.2vw,36px);margin-bottom:12px">Новый дом за честную цену — всё включено, без сюрпризов</h2>',
    '<p style="font-size:15px;color:var(--mut)">КП «Южный-3» — готовое решение, а не «голая коробка». Одна цена — и она финальная. Никаких «а это отдельно»: вы платите один раз — и въезжаете в готовый дом на готовом участке.</p>',
    '</div>',
    '<button class="btn btn-p btn-sm" onclick="openM(\'Подобрать и рассчитать стоимость дома\')">Рассчитать дом под ваш запрос</button>',
    '</div>',

    '<div class="g3" style="margin-bottom:24px">',
    '<div style="background:var(--bg);border:1px solid var(--bd);padding:24px">',
    '<span class="kick">01 / Всё в одной цене</span>',
    '<h3 style="font-size:20px;margin-bottom:10px">Финальная стоимость без доплат</h3>',
    '<ul style="font-size:13px;color:var(--mut);padding-left:18px;line-height:1.7">',
    '<li>Участок 4,5 сотки ИЖС с уведомлениями на строительство</li>',
    '<li>Сам дом выбранного проекта</li>',
    '<li>Забор и придомовая территория</li>',
    '<li>Все коммуникации: свет, септик, скважина</li>',
    '</ul></div>',

    '<div style="background:var(--bg);border:1px solid var(--bd);padding:24px">',
    '<span class="kick">02 / Юридическая защита</span>',
    '<h3 style="font-size:20px;margin-bottom:10px">Счёт эскроу и оформление под ключ</h3>',
    '<p style="font-size:13px;color:var(--mut);line-height:1.65;margin-bottom:8px">Мы готовим все договоры, открываем ипотеку, получаем разрешение на строительство и ставим дом на учёт. Вам не нужно разбираться в бумагах — этим занимаемся мы.</p>',
    '<p style="font-size:13px;color:var(--ink);line-height:1.6">Ваши деньги всё время строительства лежат на счёте <strong>эскроу</strong>: застройщик получает их только после того, как дом построен и подписан акт.</p>',
    '</div>',

    '<div style="background:var(--bg);border:1px solid var(--bd);padding:24px">',
    '<span class="kick">03 / Посадка и досуг</span>',
    '<h3 style="font-size:20px;margin-bottom:10px">Свобода размещения и отдых рядом</h3>',
    '<p style="font-size:13px;color:var(--mut);line-height:1.65;margin-bottom:8px"><strong>Дом встанет там, где удобно вам.</strong> В рамках пятна застройки вы сами решаете: правее, левее, ближе к фасаду или глубже на участок.</p>',
    '<p style="font-size:13px;color:var(--mut);line-height:1.6">А для выходных — <strong>база отдыха и конный клуб</strong> прямо в посёлке Южном. Проживание за городом без ощущения «отрезанности от жизни».</p>',
    '</div>',
    '</div>',

    '<div style="background:var(--pine);color:#F5F2EB;padding:24px 28px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px">',
    '<div style="max-width:780px">',
    '<span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#E29B7E;display:block;margin-bottom:6px">Локация, которая работает на вас — всё рядом, без «часа на дорогу»</span>',
    '<p style="font-size:13px;color:#D5D9D4;line-height:1.65">Остановка транспорта — <strong>500 м (1 мин)</strong> • Магазины — <strong>1–2 км</strong> • Детский сад — <strong>2 км</strong> • Школа — <strong>2,5 км</strong> (рядом остановка школьного автобуса) • Станция электрички «Южный» — <strong>2,5 км</strong> • До центра Краснодара — <strong>17 км (25–30 мин)</strong>.</p>',
    '</div>',
    '<div style="display:flex;gap:10px;flex-wrap:wrap">',
    '<a href="tel:+79111798775" class="btn btn-p btn-sm">Позвонить</a>',
    '<a href="https://max.ru/channel_mognodom" target="_blank" rel="noopener" class="btn btn-l btn-sm">Написать в MAX</a>',
    '</div></div>',
    '</div></section>'
  ].join('');
}

function draw() {
  document.getElementById('app').innerHTML = buildHeaderAndHero() + buildOfferSection() + buildProjectsAndGenplan() + buildBottomSections();
}

window.setF = function(f) { fin = f; draw(); };
window.setSpec = function(t) { specTab = t; draw(); };
window.pick = function(id) {
  const all = [].concat(SITE_DATA.lots.top, SITE_DATA.lots.a, SITE_DATA.lots.b, SITE_DATA.lots.c, SITE_DATA.lots.d);
  curLot = all.find(function(x) { return x.id === id; }) || curLot;
  draw();
};
window.book = function() {
  if (!curLot.sold) openM('Бронь участка: ' + curLot.label, '', curLot.row + ', ' + curLot.label + ' (23:07:0301032' + curLot.cad + ', ' + curLot.area + ' м²)');
};
window.openM = function(t, p, l) {
  const details = [p ? 'Проект: «' + p + '»' : '', l ? 'Участок: ' + l : ''].filter(Boolean).join(' • ');
  document.getElementById('mbox').innerHTML = [
    '<div style="padding:28px;position:relative">',
    '<button onclick="closeM()" style="position:absolute;top:12px;right:16px;background:none;border:none;font-size:26px;cursor:pointer">&times;</button>',
    '<span class="kick">МОЖНО ДОМ • КП «Южный-3»</span>',
    '<h3 style="font-size:23px;margin-bottom:8px">' + t + '</h3>',
    '<p style="font-size:14px;color:var(--mut);margin-bottom:16px">Выберите удобный способ связи — ответим на вопросы, отправим геоточку и согласуем просмотр.</p>',
    details ? '<div style="background:var(--bg);border:1px solid var(--bd);padding:12px;font-size:13px;font-weight:700;color:var(--acc);margin-bottom:16px">' + details + '</div>' : '',
    '<div style="display:flex;flex-direction:column;gap:10px">',
    '<a href="https://max.ru/channel_mognodom" target="_blank" rel="noopener" class="btn btn-p btn-f">Написать в MAX</a>',
    '<a href="https://www.instagram.com/mariyam230488?gwpx=NnlkM2Rqb3JvZHZl&utm_source=qr" target="_blank" rel="noopener" class="btn btn-d btn-f">Перейти в Instagram</a>',
    '<a href="tel:+79111798775" class="btn btn-o btn-f">Позвонить: +7 (911) 179-87-75</a>',
    '</div></div>'
  ].join('');
  document.getElementById('modal').classList.add('on');
};
window.openProject = function(name) {
  const p = SITE_DATA.projects.find(function(x) { return x.name === name; });
  const d = PROJECT_SPECS[name];
  if (!p || !d) return;
  const ul = function(arr) {
    return '<ul style="font-size:13px;color:var(--mut);padding-left:18px;line-height:1.65;margin-top:4px">' + arr.map(function(i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
  };
  document.getElementById('mbox').innerHTML = [
    '<button onclick="closeM()" style="position:absolute;top:12px;right:14px;z-index:2;width:34px;height:34px;background:rgba(255,255,255,.92);border:1px solid var(--bd);font-size:22px;cursor:pointer;line-height:1">&times;</button>',
    '<img src="' + d.img + '" alt="Проект ' + p.name + '" style="width:100%;max-height:290px;object-fit:cover;display:block;border-bottom:1px solid var(--bd)">',
    '<div style="padding:24px 28px">',
    '<p style="font-size:13px;font-weight:700;color:var(--ink);margin-bottom:4px">Цена с черновой отделкой — от <strong> ' + p.cho + '</strong></p>(участок входит в стоимость)',
    '<h3 style="font-size:26px;margin-bottom:16px">Проект «' + p.name + '»</h3>',
    '<div style="margin-bottom:14px"><strong style="font-size:13px;color:var(--ink)">Характеристики дома</strong>' + ul(d.specs) + '</div>',
    '<div style="margin-bottom:14px"><strong style="font-size:13px;color:var(--ink)">Конструкция и материалы</strong>' + ul(d.construct) + '</div>',
    '<div style="margin-bottom:14px"><strong style="font-size:13px;color:var(--ink)">Особенности и планировочные решения</strong>' + ul(d.extras) + '</div>',
    '<div style="background:var(--bg);border:1px solid var(--bd);padding:12px 14px;font-size:13px;line-height:1.7;margin-bottom:18px">',
    '<div>Цена с черновой отделкой — <strong>' + p.cho + '</strong></div>',
    '<div>Цена с предчистовой отделкой — <strong>' + p.pcho + '</strong></div>',
    '<div>Цена с ремонтом под ключ — <strong>' + p.remont + '</strong></div>',
    '</div>',
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">',
    '<button class="btn btn-d btn-f" onclick="openPlanView(\'' + p.name + '\')">Планировка проекта</button>',
    '<a href="tel:+79111798775" class="btn btn-o btn-f">+7 (911) 179-87-75</a>',
    '</div></div>'
  ].join('');
  document.getElementById('modal').classList.add('on');
};

window.openPlanView = function(name, floor) {
  const d = PROJECT_SPECS[name];
  if (!d) return;
  const f = floor || 1;
  const src = (f === 2 && d.plan2) ? d.plan2 : d.plan;
  const floorTabs = d.plan2 ? [
    '<div class="tabs" style="margin-bottom:12px">',
    '<button class="tab ' + (f === 1 ? 'on' : '') + '" onclick="openPlanView(\'' + name + '\', 1)">1 этаж</button>',
    '<button class="tab ' + (f === 2 ? 'on' : '') + '" onclick="openPlanView(\'' + name + '\', 2)">2 этаж (мансарда)</button>',
    '</div>'
  ].join('') : '';

  document.getElementById('mbox').innerHTML = [
    '<div style="padding:24px;position:relative">',
    '<button onclick="closeM()" style="position:absolute;top:12px;right:16px;background:none;border:none;font-size:26px;cursor:pointer">&times;</button>',
    '<span class="kick">Маркировочный план этажей</span>',
    '<h3 style="font-size:22px;margin-bottom:10px">Планировка проекта «' + name + '»' + (d.plan2 ? ' — ' + f + ' этаж' : '') + '</h3>',
    floorTabs,
    '<div style="background:var(--bg);border:1px solid var(--bd);padding:8px;margin-bottom:14px;text-align:center">',
    '<img src="' + src + '" alt="Планировка ' + name + '" style="max-height:440px;width:auto;max-width:100%;margin:0 auto;display:block">',
    '</div>',
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">',
    '<button class="btn btn-o btn-f" onclick="openProject(\'' + name + '\')">&larr; Назад к описанию</button>',
    '<a href="' + src + '" download class="btn btn-p btn-f">Скачать ' + (d.plan2 ? f + ' этаж' : 'план') + '</a>',
    '</div></div>'
  ].join('');
};


window.closeM = function() { document.getElementById('modal').classList.remove('on'); };

draw();



(function initMortgageWidget() {
  const st = document.createElement('style');
  st.textContent = `
    .calc-fab{position:fixed;right:20px;bottom:20px;z-index:55;background:var(--acc);color:#fff;border:1px solid rgba(255,255,255,.25);padding:13px 18px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.22)}
    .calc-fab:hover{background:#87391D}
    .calc-win{position:fixed;right:20px;bottom:74px;z-index:56;width:390px;max-width:calc(100vw - 32px);max-height:calc(100vh - 96px);overflow-y:auto;background:var(--sf);border:1px solid var(--bd);box-shadow:0 16px 40px rgba(0,0,0,.28);display:none;flex-direction:column}
    .calc-win.on{display:flex}
    .calc-top{background:var(--pine);color:#fff;padding:12px 16px;display:flex;justify-content:space-between;align-items:center}
    .calc-body{padding:16px}
    .c-row{margin-bottom:11px}
    .c-row label{display:flex;justify-content:space-between;font-size:11px;font-weight:700;text-transform:uppercase;color:var(--mut);margin-bottom:4px}
    .c-row input,.c-row select{width:100%;padding:9px 10px;border:1px solid var(--bd);background:var(--bg);font-size:14px;font-weight:600;color:var(--ink)}
    .c-res{background:var(--bg);border:1px solid var(--bd);padding:12px;margin:12px 0}
  `;
  document.head.appendChild(st);

  const opts = SITE_DATA.projects.map(function(p) {
    const num = parseInt(p.pcho.replace(/\D/g, ''), 10) || 8800000;
    return '<option value="' + num + '">«' + p.name + '» — ПЧО (' + p.pcho + ')</option>';
  }).join('');

  const box = document.createElement('div');
  box.innerHTML = [
    '<button class="calc-fab" onclick="toggleCalc()">Ипотечный калькулятор</button>',
    '<div class="calc-win" id="calc-win">',
    '<div class="calc-top"><span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em">Калькулятор ипотеки • МОЖНО ДОМ</span>',
    '<button onclick="toggleCalc()" style="background:none;border:none;color:#fff;font-size:22px;line-height:1;cursor:pointer">&times;</button></div>',
    '<div class="calc-body">',
    '<div class="c-row"><label><span>Выбрать проект (подставит цену)</span></label>',
    '<select id="c-proj" onchange="pickCalcProj(this.value)"><option value="">Своя стоимость дома</option>' + opts + '</select></div>',
    '<div class="c-row"><label><span>Стоимость дома с участком, ₽</span></label><input type="number" id="c-price" value="8800000" step="50000" oninput="calcMortgage()"></div>',
    '<div class="c-row"><label><span>Первый взнос (личные + мат. капитал), ₽</span><span id="c-pv-pct" style="color:var(--acc)">20%</span></label><input type="number" id="c-pv" value="1760000" step="10000" oninput="calcMortgage()"></div>',
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">',
    '<div class="c-row"><label><span>Ставка, %</span></label><input type="number" id="c-rate" value="6" step="0.1" min="0.1" max="40" oninput="calcMortgage()"></div>',
    '<div class="c-row"><label><span>Срок, лет</span></label><input type="number" id="c-years" value="30" min="1" max="30" oninput="calcMortgage()"></div>',
    '</div>',
    '<div style="display:flex;gap:6px;margin-bottom:10px">',
    '<button type="button" class="btn btn-o btn-sm" style="flex:1;padding:6px;font-size:10px" onclick="setRate(6)">Семейная 6%</button>',
    '<button type="button" class="btn btn-o btn-sm" style="flex:1;padding:6px;font-size:10px" onclick="setRate(6)">IT 6%</button>',
    '<button type="button" class="btn btn-o btn-sm" style="flex:1;padding:6px;font-size:10px" onclick="setRate(22)">Базовая 22%</button>',
    '</div>',
    '<div class="c-res">',
    '<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px"><span style="font-size:12px;color:var(--mut)">Ежемесячный платёж:</span><strong id="c-pay" style="font-family:Georgia,serif;font-size:22px;color:var(--acc)">0 ₽/мес.</strong></div>',
    '<div style="display:flex;justify-content:space-between;font-size:12px;color:var(--mut)"><span>Сумма кредита:</span><strong id="c-loan" style="color:var(--ink)">0 ₽</strong></div>',
    '</div>',
    '<button class="btn btn-p btn-f btn-sm" onclick="openM(\'Одобрение ипотеки по расчёту\', \'\', document.getElementById(\'c-pay\').innerText + \' (кредит \' + document.getElementById(\'c-loan\').innerText + \')\')">Получить одобрение</button>',
    '</div></div>'
  ].join('');
  document.body.appendChild(box);

  const fmt = function(n) { return Math.round(n).toLocaleString('ru-RU') + ' ₽'; };

  window.toggleCalc = function() {
    document.getElementById('calc-win').classList.toggle('on');
    calcMortgage();
  };
  window.pickCalcProj = function(val) {
    if (!val) return;
    const price = Number(val);
    document.getElementById('c-price').value = price;
    document.getElementById('c-pv').value = Math.round(price * 0.2);
    calcMortgage();
  };
  window.setRate = function(r) {
    document.getElementById('c-rate').value = r;
    calcMortgage();
  };
  window.calcMortgage = function() {
    const price = Math.max(0, Number(document.getElementById('c-price').value) || 0);
    const pv = Math.max(0, Number(document.getElementById('c-pv').value) || 0);
    const rate = Math.max(0.1, Number(document.getElementById('c-rate').value) || 6);
    const years = Math.min(30, Math.max(1, Number(document.getElementById('c-years').value) || 30));

    const loan = Math.max(0, price - pv);
    const pct = price > 0 ? Math.round((pv / price) * 100) : 0;
    document.getElementById('c-pv-pct').innerText = pct + '%';

    const mRate = rate / 100 / 12;
    const months = years * 12;
    const pay = loan > 0 ? (loan * mRate) / (1 - Math.pow(1 + mRate, -months)) : 0;

    document.getElementById('c-loan').innerText = fmt(loan);
    document.getElementById('c-pay').innerText = fmt(pay) + '/мес.';
  };
})();

(function initMobileAdaptation() {
  const mobStyle = document.createElement('style');
  mobStyle.textContent = `
    html, body { overflow-x: hidden; max-width: 100%; }
    @media (max-width: 768px) {
      .w { padding: 0 16px; }
      .sec { padding: 48px 0; }
      .hd { height: auto; padding: 12px 0; gap: 10px; flex-wrap: wrap; }
      .hd .nav { display: flex !important; width: 100%; order: 3; justify-content: center; gap: 8px; padding-top: 8px; border-top: 1px solid var(--bd); }
      .hd .nav a { flex: 1; text-align: center; justify-content: center; padding: 6px 10px !important; font-size: 11px; }
      .hd > div:last-child { gap: 8px !important; }
      .hd > div:last-child a:first-child { font-size: 12px !important; }
      .hd .btn-sm { padding: 7px 11px; font-size: 10px; }

      .hero { padding: 40px 0 48px; }
      .hero h1 { font-size: 32px; }
      .hero p { font-size: 14px; }
      .hero a.btn { width: 100%; }
      .met { grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 22px; padding-top: 18px; }
      .hcard img { height: 210px; }

      .sh { margin-bottom: 22px; }
      .sh h2 { font-size: 26px; }
      .tabs { display: flex; flex-wrap: wrap; width: 100%; }
      .tab { flex: 1 1 auto; padding: 8px 10px; font-size: 11px; text-align: center; }

      .pg { grid-template-columns: 1fr; gap: 16px; }
      .brd { padding: 12px; -webkit-overflow-scrolling: touch; }
      .side { padding: 18px; }

      .fb { padding: 28px 18px; }
      .fb h2 { font-size: 25px !important; }

      .mbx { max-height: 94vh; }
      .mbx > div { padding: 18px 16px !important; }
      .mbx h3 { font-size: 21px !important; }

      .calc-fab { right: 12px; bottom: 12px; padding: 11px 14px; font-size: 10px; }
      .calc-win { right: 12px; left: 12px; bottom: 60px; width: auto; max-width: none; }
    }
  `;
  document.head.appendChild(mobStyle);
})();

