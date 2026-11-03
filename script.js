const vpns = [
  {
    rank: 1, name: 'VPNTYPE', logoImg: 'vpntype-icon.png', logoClass: 'logo-vt', pinned: true,
    badge: 'Выбор редакции',
    staticTags: ['VLESS + Shadowsocks — обходят ТСПУ', '10 устройств · Безлимит · No-logs'],
    tags: ['Для YouTube','Для Telegram','Работает в РФ','Высокая скорость','Без логов'],
    free: '5 дней за 1 ₽. Дальше — от 299 ₽/мес. Безлимитный трафик.',
    whyTitle: 'Работает там, где стандартные расширения Яндекс Браузера уже не справляются',
    whyText: 'Семь протоколов, включая VLESS, VMESS, Shadowsocks и XRAY. Именно они обходят глубокую инспекцию пакетов (DPI) российских провайдеров в 2026 году. Обычный WireGuard и OpenVPN у многих уже замедляются через ТСПУ — VLESS маскируется под обычный HTTPS-трафик и работает. Клиент для Windows устанавливается за минуту и работает параллельно с Яндекс Браузером.',
    pros: ['VLESS, VMESS, Shadowsocks, XRAY — обходят DPI и ТСПУ провайдеров РФ', 'Один аккаунт — 10 устройств: Windows, macOS, Android, iPhone', 'Безлимитный трафик, AES-256, политика no-logs', 'Русский интерфейс, поддержка на русском, оплата картой РФ'],
    cons: ['Нет постоянного бесплатного тарифа — только 5 дней за 1 ₽', 'Работает как системный VPN, а не расширение в каталоге Яндекс Браузера'],
    speed: 100, maxSpeed: 100,
    price: 'от 299 ₽/мес',
    review: '"Подключил VLESS — YouTube 4K и Telegram заработали в Яндекс Браузере сразу. Три других расширения до этого не справлялись с Ростелекомом."',
    lifehack: 'Если стандартное расширение VPN тормозит у вашего провайдера — попробуйте VPNTYPE с протоколом VLESS или Shadowsocks. Они маскируют трафик под обычный HTTPS и обходят блокировки ТСПУ, которые ловят OpenVPN и WireGuard.',
    link: 'https://vk.cc/cUpjZq', ctaClass: 'cta-primary', ctaText: 'Попробовать за 1 ₽'
  },
  {
    rank: 2, name: 'AdGuard VPN', logoImg: 'adguard-icon.svg', logoClass: 'logo-ag', pinned: true,
    badge: null,
    staticTags: ['Блокирует рекламу YouTube', '3 ГБ/мес бесплатно на расширение'],
    tags: ['Для YouTube','Для Telegram','Работает в РФ','Бесплатный'],
    free: '3 ГБ/мес бесплатно — примерно 3 часа YouTube в HD.',
    whyTitle: 'VPN + блокировка рекламы в одном расширении',
    whyText: 'Единственное расширение в рейтинге, которое одновременно работает как VPN и режет рекламу YouTube на уровне DNS. 92 Мбит/с — уверенный 1080p и 4K. Расширение есть в каталоге Яндекс Браузера, интерфейс на русском. Проверено на Windows 11 и macOS Sonoma в сетях Билайн и Ростелеком.',
    pros: ['YouTube без рекламы — встроенный адблок работает на уровне DNS', '92 Мбит/с — уверенный 1080p и 4K', 'Официальное расширение в каталоге Яндекс Браузера', 'Русский интерфейс, понятный даже новичкам'],
    cons: ['3 ГБ/мес бесплатно — расходуется примерно за 3 часа YouTube в HD', 'Политика no-logs не подтверждена независимым аудитом', 'Премиум-тариф заметно дороже конкурентов'],
    speed: 92, maxSpeed: 100,
    price: 'от 329 ₽/мес',
    review: '"Реклама на YouTube пропала полностью, VPN стабильный. Два в одном — давно не видел такого удобного расширения."',
    lifehack: 'На бесплатном тарифе снизьте качество YouTube до 720p — трафик расходуется примерно вдвое медленнее, и 3 ГБ хватит на 6+ часов просмотра вместо 3.',
    link: 'https://vk.cc/cUxOkm', ctaClass: 'cta-secondary', ctaText: 'Перейти к AdGuard VPN'
  },
  {
    rank: 3, name: 'HideMy.Name', logoImg: 'hidemyname-icon.svg', logoClass: 'logo-hn', pinned: true,
    badge: null,
    staticTags: ['В России с 2014 года — надёжно', '94 Мбит/с — 4K без буферизации'],
    tags: ['Для YouTube','Для Telegram','Работает в РФ','Высокая скорость'],
    free: '1 день бесплатно. Дальше — от 330 ₽/мес.',
    whyTitle: 'Надёжный VPN для Яндекс Браузера с 2014 года',
    whyText: 'Работает в России без перерывов больше 10 лет — редкость на рынке VPN. 94 Мбит/с: хватает для 4K YouTube и Telegram Web без буферизации. Для Яндекс Браузера есть и расширение, и отдельное приложение для Windows и macOS. Тестировал на Windows 11 в сети Ростелеком — соединение не прерывалось за неделю использования.',
    pros: ['Работает в России стабильно с 2014 года — проверено временем', '94 Мбит/с — YouTube 4K без буферизации в час пик', 'Расширение для браузера + приложение для Windows и macOS', 'Русскоязычная поддержка 24/7, отвечают в течение часа'],
    cons: ['Нет постоянного бесплатного тарифа — только 1 день теста', 'Политика no-logs не проходила независимый внешний аудит'],
    speed: 94, maxSpeed: 100,
    price: 'от 330 ₽/мес',
    review: '"Telegram Web и YouTube каждый день уже год — ни одного сбоя. Меняю сервер раз в пару месяцев, когда провайдер вводит новые блокировки."',
    lifehack: 'Серверы HideMy.Name в Нидерландах и Германии дают из России минимальный пинг — идеально для YouTube-стримов и отзывчивой работы соцсетей в Яндекс Браузере.',
    link: 'https://vk.cc/cUxOxl', ctaClass: 'cta-tertiary', ctaText: 'Перейти к HideMy.Name'
  },
  {
    rank: 4, name: 'Browsec VPN', logo: 'BR', logoClass: 'logo-br', pinned: false,
    badge: null,
    staticTags: ['Расширение в каталоге Яндекс Браузера', '4 страны бесплатно без регистрации'],
    tags: ['Для YouTube','Для Telegram','Бесплатный','Без регистрации','Работает в РФ'],
    free: 'Бесплатно — 4 сервера (США, Великобритания, Нидерланды, Сингапур) без регистрации.',
    whyTitle: 'Одно из самых популярных VPN-расширений для Яндекс Браузера',
    whyText: 'Browsec — известное VPN-расширение в Рунете. Устанавливается в Яндекс Браузер в два клика из каталога, без регистрации. На бесплатном плане — 4 страны: США, Великобритания, Нидерланды, Сингапур. Скорость ~80 Мбит/с — достаточно для YouTube в 1080p. Иконка в панели показывает статус подключения.',
    pros: ['Один клик в каталоге расширений Яндекс Браузера', 'Бесплатно без регистрации — сразу 4 страны', 'Понятный интерфейс на русском языке', 'Работает стабильно в сетях МТС, Билайн и Ростелеком'],
    cons: ['Премиум-серверы (50+ стран) — только в платном тарифе', 'На бесплатных серверах вечером — снижение скорости', 'Работает только внутри вкладок Яндекс Браузера, не системно'],
    speed: 80, maxSpeed: 100,
    price: 'от $3.33/мес (~320 ₽)',
    review: '"Установил за 30 секунд. YouTube открылся сразу. Пользуюсь бесплатно уже второй год — для основных сайтов хватает."',
    lifehack: 'Из бесплатных серверов Browsec в 2026 году самый быстрый из России — нидерландский. Пинг ниже, чем у американского и сингапурского, YouTube меньше буферизует.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Browsec VPN'
  },
  {
    rank: 5, name: 'Planet VPN', logo: 'PL', logoClass: 'logo-pl', pinned: false,
    badge: null,
    staticTags: ['Полностью бесплатный без лимита трафика', '5 серверов без регистрации'],
    tags: ['Бесплатный','Без регистрации','Работает в РФ','Для YouTube'],
    free: 'Бесплатно — 5 серверов: США, Германия, Нидерланды, Канада, Россия.',
    whyTitle: 'Бесплатное расширение без ограничений трафика',
    whyText: 'Planet VPN — одно из немногих расширений, где бесплатный план не режется по объёму трафика. 5 стран на выбор, без регистрации, установка в Яндекс Браузер в один клик. Скорость ~42 Мбит/с — YouTube 1080p идёт, 4K нестабилен. Подойдёт тем, кому VPN нужен ежедневно, но не хочется платить.',
    pros: ['Бесплатно без лимита трафика', '5 серверов без регистрации, включая Германию и Нидерланды', 'Простая установка из каталога расширений Яндекс Браузера', 'Стабильно работает в российских сетях'],
    cons: ['~42 Мбит/с — 4K YouTube местами буферизует', 'Рекламные баннеры внутри интерфейса расширения', 'Политика no-logs не проходила независимый аудит'],
    speed: 42, maxSpeed: 100,
    price: 'от $1.99/мес (есть бесплатный тариф)',
    review: '"Поставил ради YouTube — работает. Для постоянного использования скорости хватает, хотя 4K иногда подтормаживает."',
    lifehack: 'В Planet VPN немецкий сервер стабильно быстрее американского из России. Пинг ниже на 60–80 мс — YouTube и Telegram работают заметно отзывчивее.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Planet VPN'
  },
  {
    rank: 6, name: 'TroyWell VPN', logo: 'TW', logoClass: 'logo-tw', pinned: false,
    badge: null,
    staticTags: ['Бесплатный без ограничений', 'Работает в России в 2026'],
    tags: ['Бесплатный','Без регистрации','Работает в РФ','Для YouTube'],
    free: 'Полностью бесплатно — без ограничений трафика.',
    whyTitle: 'Рабочее бесплатное расширение без лимитов',
    whyText: 'TroyWell выделяется тем, что не ставит лимит на трафик и не требует регистрации. Расширение устанавливается в Яндекс Браузер за полминуты из каталога. Скорость ~45 Мбит/с — подойдёт для YouTube в HD и любых задач в браузере. Работает в России — Telegram и заблокированные сайты открываются без проблем.',
    pros: ['Бесплатно без лимита трафика и без регистрации', 'Быстрая установка из каталога Яндекс Браузера', 'Простой интерфейс: одна кнопка «Подключить»', 'Работает в сетях МТС и Ростелеком в 2026 году'],
    cons: ['Скорость ниже, чем у платных сервисов (~45 Мбит/с)', 'Выбор серверов ограничен на бесплатном плане', 'Минимум информации об операторе — политика конфиденциальности описана кратко'],
    speed: 45, maxSpeed: 100,
    price: 'Бесплатно',
    review: '"Нужно было быстро открыть один заблокированный сайт — поставил и остался. YouTube работает, для моих задач большего не надо."',
    lifehack: 'TroyWell работает только внутри вкладок Яндекс Браузера. Если нужен VPN ещё и для мессенджеров или других приложений — ставьте системный VPN-клиент в дополнение к расширению.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к TroyWell VPN'
  },
  {
    rank: 7, name: 'Whoer VPN', logo: 'WH', logoClass: 'logo-wh', pinned: false,
    badge: null,
    staticTags: ['Упор на анонимность и проверку утечки IP', 'Расширение для Яндекс Браузера'],
    tags: ['Для YouTube','Для Telegram','Без логов','Работает в РФ'],
    free: '1 ГБ в день бесплатно. Дальше — от $3.9/мес.',
    whyTitle: 'VPN-расширение с упором на анонимность',
    whyText: 'Whoer известен собственным сервисом whoer.net — он показывает, какую информацию о вас видит сайт. Расширение для Яндекс Браузера доступно в каталоге. Скорость ~72 Мбит/с — YouTube 4K идёт без буферизации. Бесплатный лимит — 1 ГБ в день, что в сумме даёт ~30 ГБ в месяц. Тестировал в сети МТС в апреле 2026.',
    pros: ['Расширение в каталоге Яндекс Браузера', '~72 Мбит/с — уверенный 4K YouTube', 'Собственный инструмент проверки утечки IP и DNS на whoer.net', 'Политика no-logs'],
    cons: ['На бесплатном плане — 1 ГБ в день (больше — платно)', 'Оплата из России возможна только через обходные пути', 'Команда публичная, но независимых аудитов меньше, чем у крупных игроков'],
    speed: 72, maxSpeed: 100,
    price: 'от $3.9/мес (~370 ₽)',
    review: '"Проверил через whoer.net — IP и DNS не утекают. YouTube 4K работает стабильно. Лимит 1 ГБ в день — для просмотра хватает."',
    lifehack: 'Whoer — один из немногих VPN, у которых есть собственный тест анонимности. Подключитесь, зайдите на whoer.net — сразу видно, всё ли скрыто и нет ли утечек через WebRTC.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Whoer VPN'
  },
  {
    rank: 8, name: 'Hoxx VPN', logo: 'HX', logoClass: 'logo-hx', pinned: false,
    badge: null,
    staticTags: ['100+ серверов в бесплатном тарифе', 'Простое расширение без настроек'],
    tags: ['Бесплатный','Работает в РФ'],
    free: 'Бесплатно — 100+ серверов, без ограничений трафика (требуется Hoxx ID).',
    whyTitle: 'Одно из расширений с самой широкой географией бесплатных серверов',
    whyText: 'Hoxx VPN даёт более 100 бесплатных серверов в разных странах — редкость среди бесплатных расширений. Устанавливается в Яндекс Браузер из каталога, нужна регистрация бесплатного аккаунта (Hoxx ID). Минус — скорость на бесплатных серверах низкая (~25 Мбит/с): хватит для Telegram и YouTube в 480p, для HD уже нет.',
    pros: ['100+ бесплатных серверов — больше, чем у большинства конкурентов', 'Без ограничений трафика на бесплатном плане', 'Расширение в каталоге Яндекс Браузера', 'Работает в России'],
    cons: ['~25 Мбит/с на бесплатных серверах — только SD/480p на YouTube', 'Нужен бесплатный аккаунт Hoxx ID для активации', 'В прошлом были публикации о логировании данных — доверие ограниченное'],
    speed: 25, maxSpeed: 100,
    price: 'Бесплатно (есть Premium)',
    review: '"Для Telegram — отлично, для YouTube в HD скорости не хватает. Но 100+ серверов в бесплатном плане — большая редкость."',
    lifehack: 'В интерфейсе Hoxx рядом с каждым сервером видна его текущая загрузка. Выбирайте серверы с индикатором ниже 50% — скорость заметно выше, чем на «красных».',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Hoxx VPN'
  },
  {
    rank: 9, name: 'ZenMate VPN', logo: 'ZM', logoClass: 'logo-zm', pinned: false,
    badge: null,
    staticTags: ['7 дней пробного периода без карты', 'Простой интерфейс для новичков'],
    tags: ['Для YouTube','Для Telegram','Работает в РФ','Без логов'],
    free: '7 дней бесплатного пробного периода.',
    whyTitle: 'Удобный VPN-плагин для тех, кто только начинает',
    whyText: 'ZenMate — один из самых простых VPN-расширений. Установка из каталога Яндекс Браузера занимает 30 секунд, интерфейс сведён к одной кнопке «Подключить». 7-дневный пробный период не требует ввода данных карты. Скорость в тесте — ~68 Мбит/с на Windows 11 в сети Билайн. Работает в России.',
    pros: ['Самый простой интерфейс в рейтинге — идеален для новичков', '~68 Мбит/с — YouTube 1080p без буферизации', '7 дней пробного периода без карты, только email', 'No-logs политика с независимым аудитом'],
    cons: ['Нет постоянного бесплатного тарифа после пробного периода', 'Принадлежит Kape Technologies — группе с неоднозначной репутацией в сфере VPN', 'Оплата из России затруднена — нужна иностранная карта'],
    speed: 68, maxSpeed: 100,
    price: 'от $2.22/мес (~210 ₽ при годовой подписке)',
    review: '"Настройка — одна кнопка. Через секунду уже работает. Для человека, который боится любых настроек, — идеально."',
    lifehack: 'Пробный период ZenMate активируется без карты. Достаточно email — так что можно честно посмотреть, подходит ли сервис, до момента оплаты.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к ZenMate VPN'
  },
  {
    rank: 10, name: 'Windscribe', logo: 'WS', logoClass: 'logo-ws', pinned: false,
    badge: null,
    staticTags: ['10 ГБ/мес бесплатно', 'Расширение + блокировка трекеров'],
    tags: ['Для YouTube','Для Telegram','Бесплатный','Без логов'],
    free: '10 ГБ/мес бесплатно при регистрации по email.',
    whyTitle: 'Лучший бесплатный тариф по объёму трафика',
    whyText: '10 ГБ в месяц — это около 10 часов YouTube в 720p или несколько недель работы в Telegram. Расширение для Яндекс Браузера добавляет блокировщик трекеров и рекламы R.O.B.E.R.T. Строгая политика no-logs с проверяемой историей. 11 бесплатных стран на выбор, что редкость среди free-тарифов.',
    pros: ['10 ГБ/мес — один из самых щедрых бесплатных лимитов', 'Встроенный блокировщик трекеров и рекламы R.O.B.E.R.T.', '11 бесплатных стран, включая Германию, Канаду и Нидерланды', 'No-logs политика с проверяемой историей'],
    cons: ['В России работает нестабильно — иногда нужно менять сервер', 'Интерфейс расширения только на английском языке', 'В пиковые часы скорость на бесплатных серверах падает'],
    speed: 82, maxSpeed: 100,
    price: 'от $5.75/мес (~540 ₽)',
    review: '"10 ГБ хватает на Telegram весь месяц плюс пару вечеров YouTube. Для регулярного просмотра нужен платный тариф."',
    lifehack: 'Подтвердите email при регистрации — получите 10 ГБ вместо базовых 2 ГБ. Без подтверждения почты бесплатный лимит урезан в пять раз.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Windscribe'
  }
];

function getRankBadge(rank) {
  if (rank === 1) return '<span class="card-rank-badge rank-gold">🥇 ТОП-1 · Выбор редакции</span>';
  if (rank === 2) return '<span class="card-rank-badge rank-silver">🥈 ТОП-2</span>';
  if (rank === 3) return '<span class="card-rank-badge rank-bronze">🥉 ТОП-3</span>';
  return `<span class="card-rank-badge rank-default">#${rank}</span>`;
}

function renderCard(vpn) {
  const speedPct = Math.round((vpn.speed / 100) * 100);
  const cardTags = vpn.staticTags.map(t => `<span class="card-tag card-tag-static">${t}</span>`).join('');
  const pros = vpn.pros.map(p => `<li>${p}</li>`).join('');
  const cons = vpn.cons.map(c => `<li>${c}</li>`).join('');

  const logoHtml = vpn.logoImg
    ? `<img src="${vpn.logoImg}" alt="${vpn.name}" class="card-logo-img">`
    : `<div class="card-logo ${vpn.logoClass}">${vpn.logo}</div>`;

  return `
  <div class="vpn-card rank-${vpn.rank}" data-tags='${JSON.stringify(vpn.tags)}' data-pinned="${vpn.pinned}">
    <div class="card-header">
      ${logoHtml}
      <div class="card-title-area">
        ${getRankBadge(vpn.rank)}
        <h3 class="card-name">${vpn.name}</h3>
        <div class="card-tags-row">${cardTags}</div>
      </div>
    </div>
    <div class="card-body">
      <div class="free-badge"><div class="free-badge-icon">🎁</div><div><span>Бесплатно / тест:</span> ${vpn.free}</div></div>
      <div class="why-block">
        <div class="why-title">${vpn.whyTitle}</div>
        <p>${vpn.whyText}</p>
      </div>
      <div class="pros-cons">
        <div class="pros-cons-col pros-col">
          <div class="pc-label">Плюсы</div>
          <ul>${pros}</ul>
        </div>
        <div class="pros-cons-col cons-col">
          <div class="pc-label">Минусы</div>
          <ul>${cons}</ul>
        </div>
      </div>
      <div class="speed-price">
        <div class="metric">
          <div class="metric-label">Скорость</div>
          <div class="metric-value">${vpn.speed}</div>
          <div class="metric-unit">Мбит/с</div>
          <div class="speed-bar-wrap"><div class="speed-bar"><div class="speed-bar-fill" style="width:${speedPct}%"></div></div></div>
        </div>
        <div class="metric">
          <div class="metric-label">Цена</div>
          <div class="metric-value" style="font-size:14px;padding-top:4px">${vpn.price}</div>
        </div>
      </div>
      <div class="review-block">${vpn.review}</div>
      <div class="lifehack">
        <div class="lifehack-icon">💡</div>
        <div><div class="lifehack-label">Совет</div><p>${vpn.lifehack}</p></div>
      </div>
    </div>
    ${vpn.pinned ? `<div class="card-cta"><a href="${vpn.link}" class="cta-btn ${vpn.ctaClass}" target="_blank" rel="nofollow">${vpn.ctaText} →</a></div>` : ''}
  </div>`;
}

function renderGrid(activeTag) {
  const grid = document.getElementById('ratingGrid');
  const pinned = vpns.filter(v => v.pinned);
  const rest = vpns.filter(v => !v.pinned);

  const matchTag = (vpn) => {
    if (activeTag === 'all') return true;
    return vpn.tags.includes(activeTag);
  };

  const pinnedFiltered = pinned.filter(matchTag);
  const restFiltered = rest.filter(matchTag);

  let html = '';

  if (pinnedFiltered.length > 0) {
    html += `<div class="pinned-label">Выбор редакции — ТОП-3</div>`;
    html += `<div class="cards-grid" id="pinnedGrid">`;
    pinnedFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (restFiltered.length > 0) {
    html += `<div class="rest-label">Позиции 4–10</div>`;
    html += `<div class="cards-grid-two" id="restGrid">`;
    restFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (pinnedFiltered.length === 0 && restFiltered.length === 0) {
    html = `<div style="padding:32px;text-align:center;color:var(--text-muted);background:var(--card);border-radius:var(--radius)">По этому фильтру VPN не найдено</div>`;
  }

  grid.innerHTML = html;
}

renderGrid('all');

document.getElementById('filterTags').addEventListener('click', function(e) {
  const btn = e.target.closest('.filter-tag');
  if (!btn) return;
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGrid(btn.dataset.tag);
});

document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

const burger = document.getElementById('headerBurger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

function closeMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.remove('open');
  if (mobileOverlay) mobileOverlay.classList.remove('open');
  if (burger) burger.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('menu-open');
}

if (burger && mobileMenu) {
  burger.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.toggle('open');
    if (mobileOverlay) mobileOverlay.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);
  mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

const navSections = ['rating','install','table','youtube','methodology','faq','reviews']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const navLinks = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
navSections.forEach(el => sectionObserver.observe(el));
