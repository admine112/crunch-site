export type Locale = "uk" | "en" | "nl"

type PastorTranslation = {
  id: number
  name: string
  role: string
  image: string
  bio: string
  email: string
  phone: string
  joinedYear: number
  specialties: string[]
}

type ScheduleEventTranslation = {
  id: number
  title: string
  type: "class" | "sermon" | "event"
  date: string
  time: string
  location: string
  speaker: string
  description: string
  image: string
  capacity?: number
  registered?: number
  tags: string[]
}

export const locales: Locale[] = ["uk", "en", "nl"]

export const defaultLocale: Locale = "uk"

export const localeNames: Record<Locale, string> = {
  uk: "Українська",
  en: "English",
  nl: "Nederlands",
}

export type Translations = {
  nav: {
    about: string
    sermons: string
    events: string
    contact: string
    submitRequest: string
  }
  home: {
    hero: string
    tagline: string
    taglineShort: string
    heroTitle?: string
    welcomeTitle: string
    welcomeText: string
    joinButton: string
    learnButton: string
    aboutTitle: string
    aboutDescription: string
    learnMore: string
    sermonsTitle: string
    eventsTitle: string
    donateButton: string
    supportText: string
    churchGallery: string
    calendarMonth: string
    upcomingEventsTitle: string
    watchSermon: string
    supportMinistry: string
    eventsCalendarTitle: string
    upcomingEvents: Array<{
      id: number
      date: string
      title: string
      time: string
      description: string
      location: string
      speaker: string
    }>
    viewDetails: string
    modalSpeaker: string
    modalAboutSermon: string
    modalJoinButton: string
    modalCloseButton: string
    modalAboutEvent: string
    sermonTitles: {
      lightInDarkness: string
      walkingInFaith: string
      godsGrace: string
    }
    sermonDescriptions: {
      lightInDarkness: string
      walkingInFaith: string
      godsGrace: string
    }
    pastorNames: {
      pastorJohn: string
      pastorSarah: string
      pastorMichael: string
    }
  }
  about: {
    title: string
    missionTitle: string
    mission: string
    missionDescription: string
    pastorsTitle: string
    coreValuesTitle: string
    biblicalTruth: string
    biblicalTruthDesc: string
    authenticCommunity: string
    authenticCommunityDesc: string
    globalImpact: string
    globalImpactDesc: string
    learnMore: string
    about: string
    specialties: string
    joined: string
    pastors: PastorTranslation[]
  }
  schedule: {
    title: string
    subtitle: string
    filterAll: string
    classes: string
    sermons: string
    events: string
    viewDetails: string
    typeLabels: {
      sermon: string
      class: string
      event: string
    }
    dateLabel: string
    timeLabel: string
    locationLabel: string
    speakerLabel: string
    registrationLabel: string
    registrationStatus: string
    aboutEvent: string
    tagsLabel: string
    registerButton: string
    addToCalendar: string
    eventsList: ScheduleEventTranslation[]
  }
  contact: {
    title: string
    subtitle?: string
    nameLabel: string
    emailLabel: string
    messageLabel: string
    submitButton: string
    newsletterTitle: string
    newsletterDescription?: string
    subscribeButton: string
    prayerTitle: string
    prayerDescription: string
    prayerButton: string
    visitUs?: string
    callUs?: string
    emailUs?: string
    workingHours?: string
  }
  events: {
    title: string
    description: string
    upcomingTitle: string
    pastTitle: string
    eventDate: string
    eventTime: string
    eventLocation: string
    eventDescription: string
    registerButton: string
    detailsButton: string
  }
  footer: {
    copyright: string
    churchName: string
    allRightsReserved: string
    contactInfo: string
    phone: string
    email: string
    address: string
    followUs: string
    quickLinks: string
    worship: string
    aboutUs: string
    scheduleServices: string
    contactUs: string
  }
}

export const translations: Record<Locale, Translations> = {
  uk: {
    nav: {
      about: "Про нас",
      sermons: "Богослужіння",
      events: "Події",
      contact: "Контакти",
      submitRequest: "Залишити заявку",
    },
    home: {
      tagline: "Де віра зустрічає майбутнє",
      taglineShort: "Де віра зустрічає майбутнє",
      heroTitle: "СВІТЛО НАДІЇ",
      hero: "Світло Надії",
      welcomeTitle: "Ласкаво просимо",
      welcomeText: "Приєднуйтеся до нашої спільноти",
      joinButton: "Приєднатися",
      learnButton: "Дізнатися більше",
      aboutTitle: "Про нас",
      aboutDescription: "Наша церква - це місце, де віруючі збираються разом, щоб поділитися вірою, молитвою та любов'ю Христа. Ми запрошуємо вас приєднатися до нашої громади.",
      learnMore: "Дізнатися більше",
      sermonsTitle: "Проповіді",
      eventsTitle: "Події",
      donateButton: "Пожертвувати",
      supportText: "Ваші щедрі пожертви допомагають нам продовжувати нашу місію служіння нашій спільноті",
      churchGallery: "Галерея церкви",
      calendarMonth: "Листопад 2025",
      upcomingEventsTitle: "Найближчі події",
      watchSermon: "Переглянути проповідь →",
      supportMinistry: "Підтримати служіння",
      eventsCalendarTitle: "Події",
      upcomingEvents: [
        {
          id: 1,
          date: "Лис 3",
          title: "Недільне богослужіння",
          time: "10:00",
          description: "Приєднуйтесь до нас на недільне богослужіння з проповіддю та спільним поклонінням.",
          location: "Головний зал церкви",
          speaker: "Пастор Іван"
        },
        {
          id: 2,
          date: "Лис 5",
          title: "Вивчення Біблії",
          time: "19:00",
          description: "Глибоке вивчення Святого Письма та обговорення в малих групах.",
          location: "Кімната для занять",
          speaker: "Пастор Марія"
        },
        {
          id: 3,
          date: "Лис 10",
          title: "Молодіжна зустріч",
          time: "18:00",
          description: "Час спілкування, ігор та духовного зростання для молоді.",
          location: "Молодіжний зал",
          speaker: "Пастор Олексій"
        },
        {
          id: 4,
          date: "Лис 17",
          title: "Ніч молитви",
          time: "19:30",
          description: "Особливий час молитви та поклоніння для всієї громади.",
          location: "Головний зал церкви",
          speaker: "Пастор Іван"
        }
      ],
      viewDetails: "Детальніше →",
      modalSpeaker: "Спікер:",
      modalAboutSermon: "Про що буде проповідь:",
      modalJoinButton: "Приєднатися",
      modalCloseButton: "Закрити",
      modalAboutEvent: "Опис події:",
      sermonTitles: {
        lightInDarkness: "Світло у темряві",
        walkingInFaith: "Ходіння у вірі",
        godsGrace: "Божа благодать"
      },
      sermonDescriptions: {
        lightInDarkness: "Проповідь про знаходження світла надії навіть у найтемніші моменти життя. Дізнайтеся, як віра може освітлити ваш шлях.",
        walkingInFaith: "Дослідження того, що означає жити вірою щодня. Практичні поради для зміцнення духовного життя.",
        godsGrace: "Глибоке розуміння Божої благодаті та її трансформуючої сили в нашому житті. Відкрийте для себе безумовну любов Бога."
      },
      pastorNames: {
        pastorJohn: "Пастор Іван",
        pastorSarah: "Пастор Сара",
        pastorMichael: "Пастор Михайло"
      }
    },
    about: {
      title: "Про церкву",
      missionTitle: "Наша місія",
      mission: "Наша місія - нести світло надії та любові Христа в наше суспільство",
      missionDescription: "Ми віримо в створення гостинної спільноти, де кожен може відчути трансформуючу любов Божу. Через поклоніння, навчання, спілкування та служіння ми прагнемо створювати учнів, які змінюватимуть наш світ для Христа.",
      pastorsTitle: "Наші пастори та вчителі",
      coreValuesTitle: "Наші основні цінності",
      biblicalTruth: "Біблійна істина",
      biblicalTruthDesc: "Ми прихильні навчанню та життю відповідно до Слова Божого",
      authenticCommunity: "Справжня спільнота",
      authenticCommunityDesc: "Ми розвиваємо справжні відносини, де люди можуть належати та зростати разом",
      globalImpact: "Глобальний вплив",
      globalImpactDesc: "Ми палко прагнемо досягти нашої спільноти та світу Євангелієм",
      learnMore: "Дізнатися більше →",
      about: "Про",
      specialties: "Спеціалізація",
      joined: "Приєднався",
      pastors: [
        {
          id: 1,
          name: "Пастор Джон Сміт",
          role: "Старший пастор",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Пастор Джон служить нашій спільноті понад 15 років. Його пристрасть до навчання Божого Слова та турбота про людей змінили сотні життів. Він здобув ступінь магістра богослов'я та відданий побудові церкви, що відображає любов Христа.",
          email: "john@lightofhope.church",
          phone: "+1 (555) 123-4567",
          joinedYear: 2010,
          specialties: ["Біблійне навчання", "Лідерство", "Консультування"],
        },
        {
          id: 2,
          name: "Пастор Сара Джонсон",
          role: "Пастор поклоніння",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Пастор Сара з радістю та майстерністю очолює наше служіння поклоніння. Її серце для поклоніння створює атмосферу, де люди переживають присутність Бога. Вона в нашій церковній сім'ї вже 8 років і продовжує надихати через музику та навчання.",
          email: "sarah@lightofhope.church",
          phone: "+1 (555) 123-4568",
          joinedYear: 2017,
          specialties: ["Проведення поклоніння", "Музичне служіння", "Творчі мистецтва"],
        },
        {
          id: 3,
          name: "Пастор Майкл Браун",
          role: "Молодіжний пастор",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Пастор Майкл прагне досягти наступне покоління для Христа. Його динамічний стиль навчання та щира турбота про молодь побудували успішне молодіжне служіння. Він приєднався до нашої команди 5 років тому і залишив тривалий слід.",
          email: "michael@lightofhope.church",
          phone: "+1 (555) 123-4569",
          joinedYear: 2020,
          specialties: ["Молодіжне служіння", "Учнівство", "Євангелізація"],
        },
        {
          id: 4,
          name: "Вчителька Емілі Девіс",
          role: "Керівниця дитячого служіння",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Емілі має особливий дар навчати дітей про Ісуса креативно та захопливо. Її відданість створила безпечне і веселе середовище, де діти можуть зростати у вірі. Вона служить у нашій команді вже 6 років.",
          email: "emily@lightofhope.church",
          phone: "+1 (555) 123-4570",
          joinedYear: 2019,
          specialties: ["Дитяче служіння", "Біблійне навчання", "Розробка програм"],
        },
      ],
    },
    schedule: {
      title: "Розклад",
      subtitle: "Приєднуйтесь до поклоніння, навчання та спілкування",
      filterAll: "Усі",
      classes: "Класи",
      sermons: "Проповіді",
      events: "Події",
      viewDetails: "Детальніше →",
      typeLabels: {
        sermon: "Проповідь",
        class: "Клас",
        event: "Подія",
      },
      dateLabel: "Дата",
      timeLabel: "Час",
      locationLabel: "Локація",
      speakerLabel: "Спікер / Лідер",
      registrationLabel: "Реєстрація",
      registrationStatus: "{registered} / {capacity} зареєстровано",
      aboutEvent: "Про подію",
      tagsLabel: "Теги",
      registerButton: "Деталі",
      addToCalendar: "Додати до календаря",
      eventsList: [
        {
          id: 1,
          title: "Недільне ранкове богослужіння",
          type: "sermon",
          date: "2025-11-02",
          time: "10:00 - 11:30",
          location: "Головна зала",
          speaker: "Пастор Джон Сміт",
          description:
            "Приєднуйтесь до нашого щотижневого недільного богослужіння. Відчуйте потужне поклоніння, біблійне навчання та спільність з церковною родиною. Цього тижня ми говоримо про те, як знаходити надію у складні часи та довіряти Божому плану для нашого життя.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 300,
          registered: 245,
          tags: ["Поклоніння", "Навчання", "Спільність"],
        },
        {
          id: 2,
          title: "Біблійне вивчення: Послання до римлян",
          type: "class",
          date: "2025-11-05",
          time: "19:00 - 20:30",
          location: "Зала спілкування",
          speaker: "Пастор Майкл Браун",
          description:
            "Поглиблене дослідження листа апостола Павла до Римлян. Разом вивчаємо богословські основи віри та їх застосування у щоденному житті. Запрошуємо всіх незалежно від досвіду вивчення Біблії.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 50,
          registered: 38,
          tags: ["Біблійне вивчення", "Навчання", "Обговорення"],
        },
        {
          id: 3,
          title: "Молодіжна зустріч: Ігровий вечір",
          type: "event",
          date: "2025-11-08",
          time: "18:00 - 21:00",
          location: "Молодіжний центр",
          speaker: "Пастор Майкл Браун",
          description:
            "Динамічний вечір веселощів та спілкування для підлітків 13-18 років. Настільні ігри, відеоігри, піца та коротке натхненне слово про віру. Запросіть друзів і проведіть чудовий час разом!",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 60,
          registered: 42,
          tags: ["Молодь", "Спілкування", "Розваги"],
        },
        {
          id: 4,
          title: "Вечір поклоніння",
          type: "event",
          date: "2025-11-10",
          time: "19:00 - 21:00",
          location: "Головна зала",
          speaker: "Пастор Сара Джонсон",
          description:
            "Особливий вечір, присвячений поклонінню та молитві. Музика, молитва і час тиші допоможуть наблизитися до Бога та оновити серце. Приходьте такими, якими ви є, щоб пережити Божу присутність.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 200,
          registered: 156,
          tags: ["Поклоніння", "Молитва", "Музика"],
        },
        {
          id: 5,
          title: "Курс зміцнення шлюбу",
          type: "class",
          date: "2025-11-12",
          time: "18:30 - 20:00",
          location: "Кімната 201",
          speaker: "Пастори Джон та Ліза Сміт",
          description:
            "Шеститижневий курс, створений для зміцнення подружніх пар через біблійні принципи. Теми включають спілкування, вирішення конфліктів, близькість та побудову Христоцентричного шлюбу. Вітаємо пари з будь-яким досвідом.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 30,
          registered: 24,
          tags: ["Шлюб", "Стосунки", "Зростання"],
        },
        {
          id: 6,
          title: "День служіння громаді",
          type: "event",
          date: "2025-11-15",
          time: "09:00 - 15:00",
          location: "Різні локації",
          speaker: "Команда служіння громаді",
          description:
            "Приєднуйтесь, щоб служити місцевій громаді! Разом з партнерськими організаціями ми забезпечимо їжею, одягом і підтримкою тих, хто потребує. Чудова нагода проявити Божу любов на практиці.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 100,
          registered: 67,
          tags: ["Служіння", "Допомога", "Громада"],
        },
        {
          id: 7,
          title: "Клас для новонавернених",
          type: "class",
          date: "2025-11-17",
          time: "11:45 - 13:00",
          location: "Кімната 105",
          speaker: "Пастор Майкл Браун",
          description:
            "Базовий курс для нових віруючих про основи християнської віри, хрещення, членство в церкві та духовне зростання. Ідеально підходить для тих, хто нещодавно прийняв Христа або прагне зміцнити фундамент віри.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 25,
          registered: 18,
          tags: ["Учнівство", "Основи", "Зростання"],
        },
        {
          id: 8,
          title: "Святкове богослужіння подяки",
          type: "sermon",
          date: "2025-11-24",
          time: "10:00 - 11:30",
          location: "Головна зала",
          speaker: "Пастор Джон Сміт",
          description:
            "Особливе богослужіння подяки, де ми святкуємо Божу вірність та забезпечення. Зберемося як церковна родина, щоб дякувати, поклонятися та ділитися свідченнями Божої доброти. Після служіння запрошуємо на спільну трапезу.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 350,
          registered: 298,
          tags: ["Подяка", "Поклоніння", "Спільність"],
        },
      ],
    },
    contact: {
      title: "Контакти",
      subtitle: "Ми б хотіли почути від вас",
      nameLabel: "Ім'я",
      emailLabel: "Email",
      messageLabel: "Повідомлення",
      submitButton: "Надіслати",
      newsletterTitle: "Підписка на новини",
      newsletterDescription: "Отримуйте останні новини та оновлення від нашої церкви",
      subscribeButton: "Підписатися",
      prayerTitle: "Прохання про молитву",
      prayerDescription: "Ми віримо в силу молитви. Поділіться своїми потребами з нами",
      prayerButton: "Надіслати прохання",
      visitUs: "Відвідайте нас",
      callUs: "Подзвоніть нам",
      emailUs: "Напишіть нам",
      workingHours: "Пн-Пт: 9:00-17:00",
    },
    events: {
      title: "Події",
      description: "Дізнайтеся більше про майбутні події та заходи в нашій церкві",
      upcomingTitle: "Майбутні події",
      pastTitle: "Минулі події",
      eventDate: "Дата",
      eventTime: "Час",
      eventLocation: "Місце",
      eventDescription: "Опис",
      registerButton: "Зареєструватися",
      detailsButton: "Деталі",
    },
    footer: {
      copyright: "2025",
      churchName: "Церква Світло Надії",
      allRightsReserved: "Усі права захищені",
      contactInfo: "Контактна інформація",
      phone: "+31 123 456 789",
      email: "info@lightofhope.church",
      address: "Церковна вул., 15, Мюнхен, Німеччина",
      followUs: "Слідкуйте за нами",
      quickLinks: "Швидкі посилання",
      worship: "Богослужіння",
      aboutUs: "Про нас",
      scheduleServices: "Розклад служб",
      contactUs: "Зв'язатися з нами",
    },
  },
  en: {
    nav: {
      about: "About",
      sermons: "Sermons",
      events: "Events",
      contact: "Contact",
      submitRequest: "Submit Request",
    },
    home: {
      tagline: "Where faith meets future",
      taglineShort: "Where faith meets future",
      heroTitle: "LIGHT OF HOPE",
      hero: "Light of Hope",
      welcomeTitle: "Welcome",
      welcomeText: "Join our community",
      joinButton: "Join Us",
      learnButton: "Learn More",
      aboutTitle: "About",
      aboutDescription: "Our church is a place where believers gather together to share faith, prayer, and the love of Christ. We invite you to join our community and experience the warmth of Christian fellowship.",
      learnMore: "Learn More",
      sermonsTitle: "Sermons",
      eventsTitle: "Events",
      donateButton: "Donate",
      supportText: "Your generous donations help us continue our mission of bringing hope and love to our community",
      churchGallery: "Church Gallery",
      calendarMonth: "November 2025",
      upcomingEventsTitle: "Upcoming Events",
      watchSermon: "Watch Sermon →",
      supportMinistry: "Support Our Ministry",
      eventsCalendarTitle: "Events",
      upcomingEvents: [
        {
          id: 1,
          date: "Nov 3",
          title: "Sunday Service",
          time: "10:00",
          description: "Join us for Sunday service with sermon and worship.",
          location: "Main Church Hall",
          speaker: "Pastor John"
        },
        {
          id: 2,
          date: "Nov 5",
          title: "Bible Study",
          time: "19:00",
          description: "Deep study of Scripture and discussion in small groups.",
          location: "Study Room",
          speaker: "Pastor Mary"
        },
        {
          id: 3,
          date: "Nov 10",
          title: "Youth Meeting",
          time: "18:00",
          description: "Time of fellowship, games and spiritual growth for youth.",
          location: "Youth Hall",
          speaker: "Pastor Alex"
        },
        {
          id: 4,
          date: "Nov 17",
          title: "Prayer Night",
          time: "19:30",
          description: "Special time of prayer and worship for the whole community.",
          location: "Main Church Hall",
          speaker: "Pastor John"
        }
      ],
      viewDetails: "View Details →",
      modalSpeaker: "Speaker:",
      modalAboutSermon: "About the sermon:",
      modalJoinButton: "Join",
      modalCloseButton: "Close",
      modalAboutEvent: "Event description:",
      sermonTitles: {
        lightInDarkness: "Light in the Darkness",
        walkingInFaith: "Walking in Faith",
        godsGrace: "God's Grace"
      },
      sermonDescriptions: {
        lightInDarkness: "A sermon about finding light and hope even in life's darkest moments. Discover how faith can illuminate your path forward.",
        walkingInFaith: "Exploring what it means to live by faith daily. Practical advice for strengthening your spiritual life and relationship with God.",
        godsGrace: "Deep understanding of God's grace and its transformative power in our lives. Discover God's unconditional love for you."
      },
      pastorNames: {
        pastorJohn: "Pastor John",
        pastorSarah: "Pastor Sarah",
        pastorMichael: "Pastor Michael"
      }
    },
    about: {
      title: "About Church",
      missionTitle: "Our Mission",
      mission: "Our mission is to bring the light of hope and Christ's love to our community",
      missionDescription: "We believe in creating a welcoming community where everyone can experience God's transforming love. Through worship, teaching, fellowship, and service, we strive to make disciples who will impact our world for Christ.",
      pastorsTitle: "Our Pastors and Teachers",
      coreValuesTitle: "Our Core Values",
      biblicalTruth: "Biblical Truth",
      biblicalTruthDesc: "We are committed to teaching and living according to God's Word",
      authenticCommunity: "Authentic Community",
      authenticCommunityDesc: "We foster genuine relationships where people can belong and grow together",
      globalImpact: "Global Impact",
      globalImpactDesc: "We are passionate about reaching our community and the world with the Gospel",
      learnMore: "Learn More →",
      about: "About",
      specialties: "Specialties",
      joined: "Joined",
      pastors: [
        {
          id: 1,
          name: "Pastor John Smith",
          role: "Senior Pastor",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Pastor John has been serving our community for over 15 years. His passion for teaching God's word and caring for people has transformed countless lives. He holds a Master of Divinity from Seminary and is dedicated to building a church that reflects Christ's love.",
          email: "john@lightofhope.church",
          phone: "+1 (555) 123-4567",
          joinedYear: 2010,
          specialties: ["Biblical Teaching", "Leadership", "Counseling"],
        },
        {
          id: 2,
          name: "Pastor Sarah Johnson",
          role: "Worship Pastor",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Pastor Sarah leads our worship ministry with joy and excellence. Her heart for worship has created an atmosphere where people encounter God's presence. She has been part of our church family for 8 years and continues to inspire through music and teaching.",
          email: "sarah@lightofhope.church",
          phone: "+1 (555) 123-4568",
          joinedYear: 2017,
          specialties: ["Worship Leading", "Music Ministry", "Creative Arts"],
        },
        {
          id: 3,
          name: "Pastor Michael Brown",
          role: "Youth Pastor",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Pastor Michael is passionate about reaching the next generation for Christ. His dynamic teaching style and genuine care for young people has built a thriving youth ministry. He joined our team 5 years ago and has made a lasting impact.",
          email: "michael@lightofhope.church",
          phone: "+1 (555) 123-4569",
          joinedYear: 2020,
          specialties: ["Youth Ministry", "Discipleship", "Outreach"],
        },
        {
          id: 4,
          name: "Teacher Emily Davis",
          role: "Children's Ministry Director",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Emily has a special gift for teaching children about Jesus in creative and engaging ways. Her dedication to children's ministry has created a safe and fun environment where kids can grow in their faith. She has been serving for 6 years.",
          email: "emily@lightofhope.church",
          phone: "+1 (555) 123-4570",
          joinedYear: 2019,
          specialties: ["Children's Ministry", "Bible Teaching", "Curriculum Development"],
        },
      ],
    },
    schedule: {
      title: "Schedule",
      subtitle: "Join us for worship, learning, and fellowship",
      filterAll: "All",
      classes: "Classes",
      sermons: "Sermons",
      events: "Events",
      viewDetails: "View Details →",
      typeLabels: {
        sermon: "Sermon",
        class: "Class",
        event: "Event",
      },
      dateLabel: "Date",
      timeLabel: "Time",
      locationLabel: "Location",
      speakerLabel: "Speaker / Leader",
      registrationLabel: "Registration",
      registrationStatus: "{registered} / {capacity} registered",
      aboutEvent: "About This Event",
      tagsLabel: "Tags",
      registerButton: "Register Now",
      addToCalendar: "Add to Calendar",
      eventsList: [
        {
          id: 1,
          title: "Sunday Morning Service",
          type: "sermon",
          date: "2025-11-02",
          time: "10:00 AM - 11:30 AM",
          location: "Main Sanctuary",
          speaker: "Pastor John Smith",
          description:
            "Join us for our weekly Sunday morning worship service. Experience powerful worship, biblical teaching, and fellowship with our church family. This week's message focuses on finding hope in difficult times and trusting God's plan for our lives.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 300,
          registered: 245,
          tags: ["Worship", "Teaching", "Fellowship"],
        },
        {
          id: 2,
          title: "Bible Study: Book of Romans",
          type: "class",
          date: "2025-11-05",
          time: "7:00 PM - 8:30 PM",
          location: "Fellowship Hall",
          speaker: "Pastor Michael Brown",
          description:
            "Deep dive into Paul's letter to the Romans. We'll explore the theological foundations of our faith and discuss practical applications for daily living. All are welcome, whether you're new to Bible study or have been studying for years.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 50,
          registered: 38,
          tags: ["Bible Study", "Teaching", "Discussion"],
        },
        {
          id: 3,
          title: "Youth Night: Game Night",
          type: "event",
          date: "2025-11-08",
          time: "6:00 PM - 9:00 PM",
          location: "Youth Center",
          speaker: "Pastor Michael Brown",
          description:
            "An evening of fun, games, and fellowship for teens ages 13-18. We'll have board games, video games, pizza, and a short devotional. Bring your friends and join us for an awesome night!",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 60,
          registered: 42,
          tags: ["Youth", "Fellowship", "Fun"],
        },
        {
          id: 4,
          title: "Worship Night",
          type: "event",
          date: "2025-11-10",
          time: "7:00 PM - 9:00 PM",
          location: "Main Sanctuary",
          speaker: "Pastor Sarah Johnson",
          description:
            "A special evening dedicated to worship and prayer. Come as you are and experience God's presence through music, prayer, and reflection. This is a time to draw near to God and be refreshed in His presence.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 200,
          registered: 156,
          tags: ["Worship", "Prayer", "Music"],
        },
        {
          id: 5,
          title: "Marriage Enrichment Class",
          type: "class",
          date: "2025-11-12",
          time: "6:30 PM - 8:00 PM",
          location: "Room 201",
          speaker: "Pastor John & Lisa Smith",
          description:
            "A 6-week course designed to strengthen marriages through biblical principles. Topics include communication, conflict resolution, intimacy, and building a Christ-centered marriage. Open to all married couples.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 30,
          registered: 24,
          tags: ["Marriage", "Relationships", "Growth"],
        },
        {
          id: 6,
          title: "Community Outreach Day",
          type: "event",
          date: "2025-11-15",
          time: "9:00 AM - 3:00 PM",
          location: "Various Locations",
          speaker: "Outreach Team",
          description:
            "Join us as we serve our community! We'll be partnering with local organizations to provide meals, clothing, and support to those in need. This is a great opportunity to put our faith into action and make a difference.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 100,
          registered: 67,
          tags: ["Outreach", "Service", "Community"],
        },
        {
          id: 7,
          title: "New Believers Class",
          type: "class",
          date: "2025-11-17",
          time: "11:45 AM - 1:00 PM",
          location: "Room 105",
          speaker: "Pastor Michael Brown",
          description:
            "A foundational class for new believers covering the basics of Christian faith, baptism, church membership, and spiritual growth. Perfect for those who recently accepted Christ or want to strengthen their foundation.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 25,
          registered: 18,
          tags: ["Discipleship", "Foundations", "Growth"],
        },
        {
          id: 8,
          title: "Thanksgiving Service",
          type: "sermon",
          date: "2025-11-24",
          time: "10:00 AM - 11:30 AM",
          location: "Main Sanctuary",
          speaker: "Pastor John Smith",
          description:
            "A special Thanksgiving service celebrating God's faithfulness and provision. We'll gather as a church family to give thanks, worship together, and share testimonies of God's goodness. Stay after for a fellowship meal!",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 350,
          registered: 298,
          tags: ["Thanksgiving", "Worship", "Fellowship"],
        },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle: "We'd love to hear from you",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submitButton: "Send",
      newsletterTitle: "Subscribe to Newsletter",
      newsletterDescription: "Stay updated with our latest news, events, and messages. Join our community!",
      subscribeButton: "Subscribe",
      prayerTitle: "Need Prayer?",
      prayerDescription: "Our prayer team is here for you. Submit your prayer request and we'll lift you up in prayer.",
      prayerButton: "Submit Prayer Request",
      visitUs: "Visit Us",
      callUs: "Call Us",
      emailUs: "Email Us",
      workingHours: "Mon-Fri: 9AM - 5PM",
    },
    events: {
      title: "Church Events",
      description: "Learn about upcoming events and activities at our church",
      upcomingTitle: "Upcoming Events",
      pastTitle: "Past Events",
      eventDate: "Date",
      eventTime: "Time",
      eventLocation: "Location",
      eventDescription: "Description",
      registerButton: "Register",
      detailsButton: "Details",
    },
    footer: {
      copyright: "© 2025",
      churchName: "Light of Hope Church",
      allRightsReserved: "All rights reserved",
      contactInfo: "Contact Information",
      phone: "+31 123 456 789",
      email: "info@lightofhope.church",
      address: "Church Street 15, Munich, Germany",
      followUs: "Follow Us",
      quickLinks: "Quick Links",
      worship: "Worship",
      aboutUs: "About Us",
      scheduleServices: "Schedule Services",
      contactUs: "Contact Us",
    },
  },
  nl: {
    nav: {
      about: "Over ons",
      sermons: "Eredienst",
      events: "Evenementen",
      contact: "Contact",
      submitRequest: "Aanvraag indienen",
    },
    home: {
      tagline: "Waar geloof de toekomst ontmoet",
      taglineShort: "Waar geloof de toekomst ontmoet",
      heroTitle: "LICHT VAN HOOP",
      hero: "Licht van Hoop",
      welcomeTitle: "Welkom",
      welcomeText: "Sluit je aan bij onze gemeenschap",
      joinButton: "Doe mee",
      learnButton: "Meer informatie",
      aboutTitle: "Over ons",
      aboutDescription: "Onze kerk is een plaats waar gelovigen samenkomen om geloof, gebed en de liefde van Christus te delen. We nodigen je uit om deel te nemen aan onze gemeenschap.",
      learnMore: "Meer informatie",
      sermonsTitle: "Preken",
      eventsTitle: "Evenementen",
      donateButton: "Doneren",
      supportText: "Uw genereuze donaties helpen ons onze missie voort te zetten",
      churchGallery: "Kerkgalerij",
      calendarMonth: "November 2025",
      upcomingEventsTitle: "Aankomende evenementen",
      watchSermon: "Bekijk preek →",
      supportMinistry: "Ondersteun ons ministerie",
      eventsCalendarTitle: "Evenementen",
      upcomingEvents: [
        {
          id: 1,
          date: "Nov 3",
          title: "Zondagdienst",
          time: "10:00",
          description: "Doe mee met onze zondagdienst met preek en aanbidding.",
          location: "Hoofdzaal",
          speaker: "Dominee Jan"
        },
        {
          id: 2,
          date: "Nov 5",
          title: "Bijbelstudie",
          time: "19:00",
          description: "Diepgaande studie van de Schrift en discussie in kleine groepen.",
          location: "Studiezaal",
          speaker: "Dominee Maria"
        },
        {
          id: 3,
          date: "Nov 10",
          title: "Jeugdbijeenkomst",
          time: "18:00",
          description: "Tijd van gemeenschap, spellen en spirituele groei voor jongeren.",
          location: "Jeugdzaal",
          speaker: "Dominee Alex"
        },
        {
          id: 4,
          date: "Nov 17",
          title: "Gebedsnacht",
          time: "19:30",
          description: "Speciale tijd van gebed en aanbidding voor de hele gemeenschap.",
          location: "Hoofdzaal",
          speaker: "Dominee Jan"
        }
      ],
      viewDetails: "Details bekijken →",
      modalSpeaker: "Spreker:",
      modalAboutSermon: "Over de preek:",
      modalJoinButton: "Deelnemen",
      modalCloseButton: "Sluiten",
      modalAboutEvent: "Gebeurtenisbeschrijving:",
      sermonTitles: {
        lightInDarkness: "Licht in de duisternis",
        walkingInFaith: "Wandelen in geloof",
        godsGrace: "Gods genade"
      },
      sermonDescriptions: {
        lightInDarkness: "Een preek over het vinden van licht en hoop, zelfs in de donkerste momenten van het leven. Ontdek hoe geloof je pad kan verlichten.",
        walkingInFaith: "Onderzoeken wat het betekent om dagelijks in geloof te leven. Praktische adviezen voor het versterken van je spirituele leven.",
        godsGrace: "Diep begrip van Gods genade en haar transformerende kracht in ons leven. Ontdek Gods onvoorwaardelijke liefde voor jou."
      },
      pastorNames: {
        pastorJohn: "Dominee Jan",
        pastorSarah: "Dominee Sara",
        pastorMichael: "Dominee Michiel"
      }
    },
    about: {
      title: "Over de Kerk",
      missionTitle: "Onze Missie",
      mission: "Onze missie is om het licht van hoop en Christus' liefde naar onze gemeenschap te brengen",
      missionDescription: "We geloven in het creëren van een gastvrije gemeenschap waar iedereen Gods transformatieve liefde kan ervaren. Door aanbidding, onderwijs, gemeenschap en dienst streven we ernaar discipelen te maken die onze wereld voor Christus zullen veranderen.",
      pastorsTitle: "Onze Pastors en Leraren",
      coreValuesTitle: "Onze Kernwaarden",
      biblicalTruth: "Bijbelse Waarheid",
      biblicalTruthDesc: "We zijn toegewijd aan onderwijs en leven volgens Gods Woord",
      authenticCommunity: "Authentieke Gemeenschap",
      authenticCommunityDesc: "We bevorderen echte relaties waar mensen kunnen behoren en samen groeien",
      globalImpact: "Globale Impact",
      globalImpactDesc: "We zijn gepassioneerd over het bereiken van onze gemeenschap en de wereld met het Evangelie",
      learnMore: "Meer informatie →",
      about: "Over",
      specialties: "Specialisaties",
      joined: "Lid sinds",
      pastors: [
        {
          id: 1,
          name: "Pastor John Smith",
          role: "Senior Pastor",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Pastor John dient onze gemeenschap al meer dan 15 jaar. Zijn passie voor het onderwijzen van Gods Woord en zorg voor mensen heeft talloze levens veranderd. Hij heeft een master in theologie en is toegewijd aan het bouwen van een kerk die de liefde van Christus weerspiegelt.",
          email: "john@lightofhope.church",
          phone: "+1 (555) 123-4567",
          joinedYear: 2010,
          specialties: ["Bijbels onderwijs", "Leiderschap", "Begeleiding"],
        },
        {
          id: 2,
          name: "Pastor Sarah Johnson",
          role: "Worship Pastor",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Pastor Sarah leidt onze aanbiddingsdienst met vreugde en uitmuntendheid. Haar hart voor aanbidding creëert een sfeer waarin mensen Gods aanwezigheid ervaren. Ze maakt al 8 jaar deel uit van onze kerkgemeenschap en blijft inspireren door muziek en onderwijs.",
          email: "sarah@lightofhope.church",
          phone: "+1 (555) 123-4568",
          joinedYear: 2017,
          specialties: ["Aanbiddingsleiding", "Muziekdienst", "Creatieve kunsten"],
        },
        {
          id: 3,
          name: "Pastor Michael Brown",
          role: "Youth Pastor",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Pastor Michael is gepassioneerd om de volgende generatie voor Christus te bereiken. Zijn dynamische onderwijstijl en oprechte zorg voor jongeren hebben een bloeiend jeugdwerk opgebouwd. Hij sloot zich 5 jaar geleden bij ons team aan en heeft een blijvende impact gemaakt.",
          email: "michael@lightofhope.church",
          phone: "+1 (555) 123-4569",
          joinedYear: 2020,
          specialties: ["Jeugdwerk", "Discipelschap", "Outreach"],
        },
        {
          id: 4,
          name: "Docente Emily Davis",
          role: "Directeur Kinderwerk",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Emily heeft een bijzonder talent om kinderen over Jezus te leren op creatieve en boeiende manieren. Haar toewijding aan kinderwerk heeft een veilige en leuke omgeving gecreëerd waar kinderen in hun geloof kunnen groeien. Ze dient al 6 jaar in ons team.",
          email: "emily@lightofhope.church",
          phone: "+1 (555) 123-4570",
          joinedYear: 2019,
          specialties: ["Kinderwerk", "Bijbelonderwijs", "Programmaontwikkeling"],
        },
      ],
    },
    schedule: {
      title: "Schema",
      subtitle: "Doe met ons mee voor aanbidding, onderwijs en gemeenschap",
      filterAll: "Alle",
      classes: "Lessen",
      sermons: "Preken",
      events: "Evenementen",
      viewDetails: "Details bekijken →",
      typeLabels: {
        sermon: "Preek",
        class: "Cursus",
        event: "Evenement",
      },
      dateLabel: "Datum",
      timeLabel: "Tijd",
      locationLabel: "Locatie",
      speakerLabel: "Spreker / Leider",
      registrationLabel: "Inschrijving",
      registrationStatus: "{registered} / {capacity} ingeschreven",
      aboutEvent: "Over dit evenement",
      tagsLabel: "Tags",
      registerButton: "Nu inschrijven",
      addToCalendar: "Toevoegen aan agenda",
      eventsList: [
        {
          id: 1,
          title: "Zondagochtenddienst",
          type: "sermon",
          date: "2025-11-02",
          time: "10:00 - 11:30",
          location: "Hoofdzaal",
          speaker: "Pastor John Smith",
          description:
            "Doe mee met onze wekelijkse zondagochtenddienst. Ervaar krachtige aanbidding, bijbelse onderwijs en gemeenschap met onze kerkgemeenschap. Deze week staat in het teken van het vinden van hoop in moeilijke tijden en het vertrouwen op Gods plan voor ons leven.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 300,
          registered: 245,
          tags: ["Aanbidding", "Onderwijs", "Gemeenschap"],
        },
        {
          id: 2,
          title: "Bijbelstudie: Romeinen",
          type: "class",
          date: "2025-11-05",
          time: "19:00 - 20:30",
          location: "Gemeenschapszaal",
          speaker: "Pastor Michael Brown",
          description:
            "Diepgaande duik in de brief van Paulus aan de Romeinen. We verkennen de theologische fundamenten van ons geloof en bespreken praktische toepassingen voor het dagelijks leven. Iedereen is welkom, of u nu nieuw bent bij bijbelstudie of al jaren studeert.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 50,
          registered: 38,
          tags: ["Bijbelstudie", "Onderwijs", "Discussie"],
        },
        {
          id: 3,
          title: "Jeugdavond: Spelavond",
          type: "event",
          date: "2025-11-08",
          time: "18:00 - 21:00",
          location: "Jeugdcentrum",
          speaker: "Pastor Michael Brown",
          description:
            "Een avond vol plezier, spellen en gemeenschap voor tieners van 13-18 jaar. We hebben bordspellen, videogames, pizza en een korte overdenking. Neem je vrienden mee en kom voor een geweldige avond!",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 60,
          registered: 42,
          tags: ["Jeugd", "Gemeenschap", "Plezier"],
        },
        {
          id: 4,
          title: "Aanbiddingsavond",
          type: "event",
          date: "2025-11-10",
          time: "19:00 - 21:00",
          location: "Hoofdzaal",
          speaker: "Pastor Sarah Johnson",
          description:
            "Een speciale avond gewijd aan aanbidding en gebed. Kom zoals u bent en ervaar Gods aanwezigheid door muziek, gebed en bezinning. Dit is een tijd om dicht bij God te komen en verfrist te worden in Zijn aanwezigheid.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 200,
          registered: 156,
          tags: ["Aanbidding", "Gebed", "Muziek"],
        },
        {
          id: 5,
          title: "Huwelijkscursus",
          type: "class",
          date: "2025-11-12",
          time: "18:30 - 20:00",
          location: "Zaal 201",
          speaker: "Pastors John & Lisa Smith",
          description:
            "Een cursus van 6 weken ontworpen om huwelijken te versterken door bijbelse principes. Onderwerpen omvatten communicatie, conflictoplossing, intimiteit en het bouwen van een Christocentrisch huwelijk. Open voor alle gehuwde stellen.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 30,
          registered: 24,
          tags: ["Huwelijk", "Relaties", "Groei"],
        },
        {
          id: 6,
          title: "Gemeenschapsdienstdag",
          type: "event",
          date: "2025-11-15",
          time: "09:00 - 15:00",
          location: "Verschillende locaties",
          speaker: "Outreach Team",
          description:
            "Doe mee met het dienen van onze gemeenschap! We werken samen met lokale organisaties om maaltijden, kleding en ondersteuning te bieden aan hen die het nodig hebben. Dit is een geweldige kans om ons geloof in praktijk te brengen en een verschil te maken.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 100,
          registered: 67,
          tags: ["Outreach", "Dienst", "Gemeenschap"],
        },
        {
          id: 7,
          title: "Cursus voor nieuwe gelovigen",
          type: "class",
          date: "2025-11-17",
          time: "11:45 - 13:00",
          location: "Zaal 105",
          speaker: "Pastor Michael Brown",
          description:
            "Een fundamentale cursus voor nieuwe gelovigen over de basis van christelijk geloof, doop, kerkelijk lidmaatschap en spirituele groei. Perfect voor hen die recent Christus hebben aangenomen of hun fundament willen versterken.",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 25,
          registered: 18,
          tags: ["Discipelschap", "Fundamenten", "Groei"],
        },
        {
          id: 8,
          title: "Thanksgiving Dienst",
          type: "sermon",
          date: "2025-11-24",
          time: "10:00 - 11:30",
          location: "Hoofdzaal",
          speaker: "Pastor John Smith",
          description:
            "Een speciale Thanksgivingdienst die Gods trouw en voorziening viert. We komen samen als kerkgemeenschap om dank te zeggen, samen te aanbidden en getuigenissen van Gods goedheid te delen. Blijf na de dienst voor een maaltijd!",
          image: "/placeholder.svg?height=400&width=600",
          capacity: 350,
          registered: 298,
          tags: ["Thanksgiving", "Aanbidding", "Gemeenschap"],
        },
      ],
    },
    contact: {
      title: "Neem contact op",
      subtitle: "We horen graag van u",
      nameLabel: "Naam",
      emailLabel: "E-mail",
      messageLabel: "Bericht",
      submitButton: "Verzenden",
      newsletterTitle: "Abonneer op Nieuwsbrief",
      newsletterDescription: "Blijf op de hoogte van ons laatste nieuws, evenementen en berichten. Word lid van onze gemeenschap!",
      subscribeButton: "Abonneren",
      prayerTitle: "Gebed nodig?",
      prayerDescription: "Ons gebedsTeam is er voor u. Dien uw gebedsverzoek in en wij zullen u in gebed ondersteunen.",
      prayerButton: "Dien gebedsverzoek in",
      visitUs: "Bezoek ons",
      callUs: "Bel ons",
      emailUs: "E-mail ons",
      workingHours: "Ma-Vr: 9:00 - 17:00",
    },
    events: {
      title: "Kerkgebeurtenissen",
      description: "Meer informatie over aankomende evenementen en activiteiten in onze kerk",
      upcomingTitle: "Aankomende evenementen",
      pastTitle: "Voorbije evenementen",
      eventDate: "Datum",
      eventTime: "Tijd",
      eventLocation: "Locatie",
      eventDescription: "Beschrijving",
      registerButton: "Registreren",
      detailsButton: "Details",
    },
    footer: {
      copyright: "© 2025",
      churchName: "Licht van Hoop Kerk",
      allRightsReserved: "Alle rechten voorbehouden",
      contactInfo: "Contactinformatie",
      phone: "+31 123 456 789",
      email: "info@lightofhope.church",
      address: "Kerkstraat 15, München, Duitsland",
      followUs: "Volg Ons",
      quickLinks: "Snelle Links",
      worship: "Eredienst",
      aboutUs: "Over Ons",
      scheduleServices: "Dienstrooster",
      contactUs: "Contact Opnemen",
    },
  },
}
