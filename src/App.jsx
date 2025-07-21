import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Plane, Monitor, FileText, Globe, Phone, Mail, MapPin, Star, Sparkles, ArrowRight } from 'lucide-react'
import './App.css'

// Import service icons
import flightIcon from './assets/flight-icon.png'
import digitalServicesIcon from './assets/digital-services-icon.png'
import governmentServicesIcon from './assets/government-services-icon.png'
import visaIcon from './assets/visa-icon.png'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      id: 1,
      title: "حجز تذاكر الطيران",
      description: "حجز تذاكر الطيران الداخلي والخارجي بأفضل الأسعار وأسرع الخدمات",
      icon: <Plane className="w-12 h-12 text-accent" />,
      image: flightIcon,
      features: ["رحلات داخلية وخارجية", "أفضل الأسعار", "حجز فوري", "دعم 24/7"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "خدمات إنجاز وتسهيل",
      description: "خدمات متكاملة لإنجاز جميع المعاملات الحكومية والإدارية بسرعة وكفاءة",
      icon: <FileText className="w-12 h-12 text-accent" />,
      image: governmentServicesIcon,
      features: ["معاملات حكومية", "سرعة في الإنجاز", "دقة عالية", "متابعة مستمرة"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "استخراج تصاريح السفر",
      description: "استخراج تصاريح السفر لجميع الفئات بما يشمل من كانوا يخدمون في الداخلية أو القوات المسلحة",
      icon: <Globe className="w-12 h-12 text-accent" />,
      image: visaIcon,
      features: ["جميع أنواع التصاريح", "للعسكريين والمدنيين", "إجراءات مبسطة", "استشارة مجانية"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "الخدمات الإلكترونية والحكومية",
      description: "جميع أنواع الخدمات الإلكترونية والحكومية من خلال منصة واحدة متطورة",
      icon: <Monitor className="w-12 h-12 text-accent" />,
      image: digitalServicesIcon,
      features: ["خدمات رقمية", "منصة موحدة", "أمان عالي", "سهولة الاستخدام"],
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding relative overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full floating-animation"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-white/10 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/15 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-white/10 rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center items-center mb-6">
              <Sparkles className="w-8 h-8 mr-4 text-accent animate-pulse" />
              <h1 className="hero-title text-5xl md:text-8xl font-bold">
                Pluto
              </h1>
              <Sparkles className="w-8 h-8 ml-4 text-accent animate-pulse" />
            </div>
            
            <div className="relative">
              <p className="text-xl md:text-3xl mb-8 arabic-text opacity-90 font-semibold">
                مكتب خدمات إلكترونية وحجز تذاكر الطيران
              </p>
              <div className="absolute -top-2 -right-2">
                <Star className="w-6 h-6 text-yellow-300 animate-spin" style={{animationDuration: '3s'}} />
              </div>
            </div>
            
            <p className="text-lg md:text-xl mb-12 arabic-text opacity-80 max-w-3xl mx-auto leading-relaxed">
              نقدم لكم أفضل الخدمات الإلكترونية وحجز تذاكر الطيران بأعلى معايير الجودة والكفاءة
            </p>
            
            <div className="flex justify-center space-x-4 rtl:space-x-reverse">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold rounded-full pulse-glow">
                <ArrowRight className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
                ابدأ الآن
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="fade-in-up">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 arabic-text text-primary">
                خدماتنا المتميزة
              </h2>
              <div className="flex justify-center items-center mb-6">
                <div className="h-1 w-20 bg-accent rounded-full"></div>
                <Sparkles className="w-6 h-6 mx-4 text-accent" />
                <div className="h-1 w-20 bg-accent rounded-full"></div>
              </div>
              <p className="text-lg text-muted-foreground arabic-text max-w-2xl mx-auto">
                نوفر مجموعة شاملة من الخدمات المتخصصة لتلبية جميع احتياجاتكم
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className={`service-card bg-card hover:bg-card/80 p-6 cursor-pointer transition-all duration-500 fade-in-up stagger-${index + 1} group`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <CardHeader className="text-center relative">
                  <div className="flex justify-center mb-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="relative z-10 p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl arabic-text text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center arabic-text text-base leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features list with animation */}
                  <div className={`transition-all duration-500 overflow-hidden ${activeService === service.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="border-t border-accent/20 pt-4">
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center arabic-text text-sm">
                            <Star className="w-3 h-3 text-accent ml-2 rtl:ml-0 rtl:mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="fade-in-up">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 arabic-text text-primary">
                من نحن
              </h2>
              <div className="flex justify-center items-center mb-8">
                <div className="h-1 w-16 bg-accent rounded-full"></div>
                <Globe className="w-6 h-6 mx-4 text-accent animate-pulse" />
                <div className="h-1 w-16 bg-accent rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-card border-accent/20 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardContent className="text-center relative z-10">
                <div className="fade-in-up stagger-1">
                  <p className="text-lg leading-relaxed arabic-text text-foreground mb-6">
                    مكتب Pluto هو وجهتكم الموثوقة للحصول على أفضل الخدمات الإلكترونية وحجز تذاكر الطيران. 
                    نحن نفخر بتقديم خدمات متميزة تتسم بالسرعة والدقة والاحترافية العالية.
                  </p>
                </div>
                <div className="fade-in-up stagger-2">
                  <p className="text-lg leading-relaxed arabic-text text-foreground mb-6">
                    فريقنا المتخصص يعمل على مدار الساعة لضمان حصولكم على أفضل تجربة خدمة ممكنة، 
                    مع الالتزام بأعلى معايير الجودة والأمان في جميع معاملاتنا.
                  </p>
                </div>
                <div className="fade-in-up stagger-3">
                  <p className="text-lg leading-relaxed arabic-text text-foreground mb-8">
                    نسعى دائماً لتطوير خدماتنا ومواكبة أحدث التقنيات لنكون الخيار الأول لعملائنا الكرام.
                  </p>
                </div>
                
                {/* Stats or highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center fade-in-up stagger-4">
                    <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                    <div className="arabic-text text-muted-foreground">دعم مستمر</div>
                  </div>
                  <div className="text-center fade-in-up stagger-4">
                    <div className="text-3xl font-bold text-accent mb-2">100%</div>
                    <div className="arabic-text text-muted-foreground">رضا العملاء</div>
                  </div>
                  <div className="text-center fade-in-up stagger-4">
                    <div className="text-3xl font-bold text-accent mb-2">5+</div>
                    <div className="arabic-text text-muted-foreground">سنوات خبرة</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl floating-animation"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/10 rounded-full blur-2xl floating-animation" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="fade-in-up">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 arabic-text text-primary">
                تواصل معنا
              </h2>
              <div className="flex justify-center items-center mb-6">
                <div className="h-1 w-20 bg-accent rounded-full"></div>
                <Phone className="w-6 h-6 mx-4 text-accent animate-bounce" />
                <div className="h-1 w-20 bg-accent rounded-full"></div>
              </div>
              <p className="text-lg text-muted-foreground arabic-text">
                نحن هنا لخدمتكم في أي وقت
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="contact-card p-6 text-center bg-card hover:bg-card/80 transition-all duration-500 group fade-in-up stagger-1">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <MapPin className="w-12 h-12 contact-icon" />
                  </div>
                </div>
                <CardTitle className="arabic-text text-primary group-hover:text-accent transition-colors duration-300">العنوان</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="arabic-text text-foreground leading-relaxed">
                  المحلة الكبرى – دمرو – الشارع الرئيسي
                </p>
              </CardContent>
            </Card>

            <Card className="contact-card p-6 text-center bg-card hover:bg-card/80 transition-all duration-500 group fade-in-up stagger-2">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <Phone className="w-12 h-12 contact-icon" />
                  </div>
                </div>
                <CardTitle className="arabic-text text-primary group-hover:text-accent transition-colors duration-300">أرقام الهاتف</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-2 font-mono text-lg">01557265432</p>
                <p className="text-foreground font-mono text-lg">01011971478</p>
              </CardContent>
            </Card>

            <Card className="contact-card p-6 text-center bg-card hover:bg-card/80 transition-all duration-500 group fade-in-up stagger-3">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <Mail className="w-12 h-12 contact-icon" />
                  </div>
                </div>
                <CardTitle className="arabic-text text-primary group-hover:text-accent transition-colors duration-300">البريد الإلكتروني</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-mono text-lg">plutodamro@gmail.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-accent/20"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent"></div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="mb-8">
            <div className="fade-in-up">
              <div className="flex justify-center items-center mb-6">
                <Sparkles className="w-8 h-8 mr-4 text-accent animate-pulse" />
                <h3 className="text-3xl md:text-4xl font-bold">Pluto</h3>
                <Sparkles className="w-8 h-8 ml-4 text-accent animate-pulse" />
              </div>
              <p className="arabic-text opacity-90 text-lg mb-6">
                مكتب خدمات إلكترونية وحجز تذاكر الطيران
              </p>
              
              {/* Quick contact info */}
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 rtl:space-x-reverse mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 text-accent" />
                  <span className="font-mono">01557265432</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 text-accent" />
                  <span className="font-mono">plutodamro@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="fade-in-up stagger-1">
              <p className="arabic-text opacity-75 mb-4">
                © 2025 Pluto. جميع الحقوق محفوظة
              </p>
              <p className="text-sm opacity-60">
                تم التطوير بأحدث التقنيات لضمان أفضل تجربة مستخدم
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

