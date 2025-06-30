import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-muted">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🌸</span>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Японский Фестиваль
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('schedule')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Расписание
            </button>
            <button 
              onClick={() => scrollToSection('workshops')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Мастер-классы
            </button>
            <button 
              onClick={() => scrollToSection('performances')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Выступления
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Как добраться
            </button>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
            Билеты
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Фестиваль Японской Культуры
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Погрузитесь в удивительный мир японских традиций и современной культуры. 
              Кулинарные шедевры, древние искусства и яркие аниме-миры ждут вас!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg px-8">
                <Icon name="Calendar" className="mr-2" size={20} />
                25-27 августа 2024
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8">
                <Icon name="MapPin" className="mr-2" size={20} />
                Парк Сокольники
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl mb-2">🍜</div>
                <p className="text-sm font-medium">Кулинария</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎨</div>
                <p className="text-sm font-medium">Искусства</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🦸‍♀️</div>
                <p className="text-sm font-medium">Аниме</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎭</div>
                <p className="text-sm font-medium">Косплей</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Расписание Фестиваля
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary">25 августа</h3>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">День 1</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">10:00 - Открытие фестиваля</p>
                      <p className="text-sm text-muted-foreground">Церемония открытия с барабанами тайко</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">11:00 - Кулинарные мастер-классы</p>
                      <p className="text-sm text-muted-foreground">Суши, рамен, моти</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">15:00 - Чайная церемония</p>
                      <p className="text-sm text-muted-foreground">Традиционное искусство чаепития</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-secondary">26 августа</h3>
                  <span className="text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full">День 2</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">10:00 - Каллиграфия и оригами</p>
                      <p className="text-sm text-muted-foreground">Мастер-классы по японскому письму</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">13:00 - Аниме-викторина</p>
                      <p className="text-sm text-muted-foreground">Проверьте знания японской анимации</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">17:00 - Косплей-конкурс</p>
                      <p className="text-sm text-muted-foreground">Лучшие костюмы аниме-персонажей</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-accent">27 августа</h3>
                  <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">День 3</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">11:00 - Кулинарный конкурс</p>
                      <p className="text-sm text-muted-foreground">Соревнование шеф-поваров</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">14:00 - Японские танцы</p>
                      <p className="text-sm text-muted-foreground">Традиционные и современные танцы</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">18:00 - Закрытие фестиваля</p>
                      <p className="text-sm text-muted-foreground">Фейерверк и награждения</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Мастер-классы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
              <CardContent className="p-6">
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">🍜</div>
                <h3 className="text-xl font-bold mb-3 text-primary">Кулинарные мастер-классы</h3>
                <p className="text-muted-foreground mb-4">
                  Научитесь готовить аутентичные японские блюда под руководством профессиональных поваров.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>Суши-мастер-класс (2 часа)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-secondary" />
                    <span>Рамен от шефа (1.5 часа)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-accent" />
                    <span>Изготовление моти (1 час)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-secondary/20 hover:border-secondary/40">
              <CardContent className="p-6">
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">🎨</div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Традиционные искусства</h3>
                <p className="text-muted-foreground mb-4">
                  Окунитесь в мир японских традиций через каллиграфию, оригами и чайную церемонию.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="PenTool" size={16} className="text-primary" />
                    <span>Каллиграфия сёдо</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Scissors" size={16} className="text-secondary" />
                    <span>Искусство оригами</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Coffee" size={16} className="text-accent" />
                    <span>Чайная церемония</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-accent/20 hover:border-accent/40">
              <CardContent className="p-6">
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">🦸‍♀️</div>
                <h3 className="text-xl font-bold mb-3 text-accent">Современная культура</h3>
                <p className="text-muted-foreground mb-4">
                  Погрузитесь в мир аниме, манги и косплея с профессиональными косплеерами.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Palette" size={16} className="text-primary" />
                    <span>Основы рисования манги</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Shirt" size={16} className="text-secondary" />
                    <span>Создание косплей-костюма</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Camera" size={16} className="text-accent" />
                    <span>Фотосессия в образе</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performances Section */}
      <section id="performances" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Выступления и Шоу
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">🥁</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Барабаны Тайко</h3>
                    <p className="text-sm text-muted-foreground">Традиционные японские барабаны</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Мощные ритмы традиционных японских барабанов в исполнении мастеров из Токио.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">25-27 августа, 16:00</span>
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">👘</div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary">Танцы Кабуки</h3>
                    <p className="text-sm text-muted-foreground">Классический японский театр</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Элегантные движения и яркие костюмы традиционного японского театра кабуки.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-secondary">26-27 августа, 14:00</span>
                  <Button size="sm" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">🎤</div>
                  <div>
                    <h3 className="text-xl font-bold text-accent">J-Pop Концерт</h3>
                    <p className="text-sm text-muted-foreground">Современная японская музыка</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Энергичные выступления в стиле J-Pop с популярными японскими исполнителями.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-accent">27 августа, 19:00</span>
                  <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">🎭</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Косплей-шоу</h3>
                    <p className="text-sm text-muted-foreground">Конкурс лучших костюмов</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Яркое шоу с лучшими косплеерами в образах любимых аниме-персонажей.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">26 августа, 17:00</span>
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Как добраться
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <h3 className="text-2xl font-bold text-primary">Парк Сокольники</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Navigation" className="text-secondary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-muted-foreground">Сокольнический Вал, 1, стр. 1, Москва</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Train" className="text-secondary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Метро</p>
                      <p className="text-muted-foreground">Станция «Сокольники» (Сокольническая линия)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Bus" className="text-secondary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Автобус</p>
                      <p className="text-muted-foreground">№ 140, 264, 716 до остановки «Парк Сокольники»</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Car" className="text-secondary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Парковка</p>
                      <p className="text-muted-foreground">Бесплатная парковка для посетителей фестиваля</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Icon name="Clock" className="text-accent" size={24} />
                  <h3 className="text-2xl font-bold text-accent">Время работы</h3>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <p className="text-lg font-bold text-primary">25 августа</p>
                      <p className="text-sm text-muted-foreground">10:00 - 20:00</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/10 rounded-lg">
                      <p className="text-lg font-bold text-secondary">26 августа</p>
                      <p className="text-sm text-muted-foreground">10:00 - 22:00</p>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <p className="text-lg font-bold text-accent">27 августа</p>
                    <p className="text-sm text-muted-foreground">11:00 - 19:00</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Ticket" className="text-primary" size={20} />
                      <div>
                        <p className="font-medium">Билеты</p>
                        <p className="text-sm text-muted-foreground">От 500₽ за день / 1200₽ за все дни</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Gift" className="text-secondary" size={20} />
                      <div>
                        <p className="font-medium">Льготы</p>
                        <p className="text-sm text-muted-foreground">Скидки для студентов и пенсионеров</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🌸</span>
                <span className="text-xl font-bold">Японский Фестиваль</span>
              </div>
              <p className="text-background/80">
                Откройте для себя удивительный мир японской культуры в самом сердце Москвы.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-background/80">
                <p>📧 info@japanesefest.ru</p>
                <p>📱 +7 (495) 123-45-67</p>
                <p>🌐 @japanesefest</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Партнеры</h4>
              <div className="space-y-2 text-background/80">
                <p>Посольство Японии в России</p>
                <p>Японский культурный центр</p>
                <p>Парк Сокольники</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/80">
            <p>&copy; 2024 Фестиваль Японской Культуры. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );

export default Index;