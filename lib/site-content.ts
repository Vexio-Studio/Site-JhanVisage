export type HeroContent = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type PositioningPrinciple = {
  title: string;
  description: string;
};

export type TransformationCase = {
  id: string;
  title: string;
  metric: string;
  narrative: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  badge: string;
};

export type ProcessStep = {
  title: string;
  description: string;
  objection: string;
};

export type ServiceItem = {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  context: string;
};

export type LocationInfo = {
  title: string;
  addressLine: string;
  cityLine: string;
  mapEmbedUrl: string;
  googleMapsUrl: string;
  wazeUrl: string;
  uberUrl: string;
};

export const heroContent: HeroContent = {
  eyebrow: "Studio Visage | Jhan Alves",
  headline: "Sua imagem fala antes de você.",
  subheadline:
    "Visagismo masculino para homens que querem presença, identidade e autoridade. Não é apenas aparência. É posicionamento.",
  primaryCta: {
    label: "Falar sobre consultoria",
    href: "https://api.whatsapp.com/send?phone=5583986934521"
  },
  secondaryCta: {
    label: "Agendar experiência",
    href: "https://sites.appbarber.com.br/agendamento/jhannalves-5rdj"
  }
};

export const positioningPrinciples: PositioningPrinciple[] = [
  {
    title: "Imagem com estratégia",
    description:
      "Um corte comum pode sabotar a autoridade de um homem. Aqui, cada escolha visual é feita com intenção e contexto."
  },
  {
    title: "Autenticidade sem exagero",
    description:
      "A proposta é destacar sua identidade sem artificialidade. Refinamento, coerência e naturalidade caminham juntos."
  },
  {
    title: "Presença como resultado",
    description:
      "Quando saúde, proporção e autenticidade se encontram, sua imagem deixa de ser decorativa e passa a comunicar poder."
  }
];

export const transformationCases: TransformationCase[] = [
  {
    id: "case-01",
    title: "Direção visual alinhada",
    metric: "Mais coerência visual",
    narrative:
      "Leitura estratégica de traços, estilo de vida e objetivo para construir uma assinatura que conversa com maturidade e autoridade.",
    beforeImage: "/images/Antes-1.png",
    afterImage: "/images/Depois-1.png",
    beforeLabel: "Leitura inicial",
    afterLabel: "Imagem alinhada",
    badge: "Presença"
  },
  {
    id: "case-02",
    title: "Evolução de presença",
    metric: "Mais confiança",
    narrative:
      "Ajustes de corte e barba orientados por proporção e identidade para elevar a percepção profissional e social sem perder naturalidade.",
    beforeImage: "/images/Antes-2.png",
    afterImage: "/images/Depois-2.png",
    beforeLabel: "Antes da direção",
    afterLabel: "Depois da estratégia",
    badge: "Autoridade"
  },
  {
    id: "case-03",
    title: "Posicionamento pessoal",
    metric: "Mais autoridade",
    narrative:
      "Visual construindo narrativa: menos ruído, mais clareza sobre quem você é e como deseja ser percebido em cada ambiente.",
    beforeImage: "/images/Antes-3.png",
    afterImage: "/images/Depois-3.png",
    beforeLabel: "Percepção difusa",
    afterLabel: "Percepção refinada",
    badge: "Identidade"
  }
];

export const aboutParagraphs = [
  "Jhan Alves interpreta rosto, proporção, estilo de vida e intenção de imagem para criar direção visual personalizada. O trabalho não para no corte: ele orienta como sua presença deve ser percebida.",
  "No Studio Visage, visagismo masculino é tratado como estratégia de comunicação visual. A experiência combina escuta ativa, critério técnico e refinamento para transformar imagem em posicionamento."
];

export const processSteps: ProcessStep[] = [
  {
    title: "Análise",
    description:
      "Mapeamento de traços, proporção, estilo pessoal e objetivo de imagem para eliminar achismos.",
    objection: "E se não combinar comigo?"
  },
  {
    title: "Direcionamento",
    description:
      "Definição de caminho visual coerente com sua fase de vida, rotina e linguagem de presença.",
    objection: "Não sei explicar o que quero."
  },
  {
    title: "Execução",
    description:
      "Corte, barba e acabamento realizados com intenção estratégica, sempre preservando naturalidade.",
    objection: "Não quero parecer forçado."
  },
  {
    title: "Resultado",
    description:
      "Uma imagem que comunica com clareza, sofisticação e autenticidade em qualquer contexto.",
    objection: "Quero me destacar sem exagero."
  }
];

export const services: ServiceItem[] = [
  {
    title: "Consultoria Visagista",
    subtitle: "Serviço âncora",
    description:
      "Leitura completa de identidade visual masculina para construir uma assinatura alinhada a objetivos pessoais e profissionais.",
    ctaLabel: "Falar no WhatsApp",
    ctaHref: "https://api.whatsapp.com/send?phone=5583986934521",
    featured: true
  },
  {
    title: "Corte Estratégico",
    subtitle: "Precisão com direção",
    description:
      "Corte orientado por proporção e linguagem de imagem para comunicar maturidade, confiança e coerência.",
    ctaLabel: "Agendar atendimento",
    ctaHref: "https://sites.appbarber.com.br/agendamento/jhannalves-5rdj"
  },
  {
    title: "Barba com Identidade",
    subtitle: "Rosto, estilo e equilíbrio",
    description:
      "Desenho e acabamento de barba alinhados ao formato facial e ao posicionamento que você quer transmitir.",
    ctaLabel: "Agendar atendimento",
    ctaHref: "https://sites.appbarber.com.br/agendamento/jhannalves-5rdj"
  },
  {
    title: "Transformação Completa",
    subtitle: "Imagem em outra camada",
    description:
      "Experiência integrada de consultoria, corte e barba para uma evolução visual de alto impacto e alta coerência.",
    ctaLabel: "Agendar experiência",
    ctaHref: "https://sites.appbarber.com.br/agendamento/jhannalves-5rdj"
  }
];

export const testimonials: TestimonialItem[] = [];

export const socialLinks = {
  personalInstagram: "https://www.instagram.com/jhanalves_visagista/",
  studioInstagram: "https://www.instagram.com/jhanalves_studio_visage/",
  whatsapp: "https://api.whatsapp.com/send?phone=5583986934521",
  appointment: "https://sites.appbarber.com.br/agendamento/jhannalves-5rdj"
};

export const locationInfo: LocationInfo = {
  title: "Studio Visage | Jhan Alves",
  addressLine: "Campina Grande, PB",
  cityLine: "Atendimento com foco em visagismo masculino estratégico.",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Studio%20Visage%20Jhan%20Alves%20Campina%20Grande%20PB&output=embed",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Studio%20Visage%20Jhan%20Alves%20Campina%20Grande%20PB",
  wazeUrl:
    "https://www.waze.com/ul?q=Studio%20Visage%20Jhan%20Alves%20Campina%20Grande%20PB&navigate=yes",
  uberUrl:
    "https://m.uber.com/go/pickup?drop%5B0%5D=%7B%22addressLine1%22%3A%22Jhan%20Alves%20Studio%20Visage%20-%20Visagismo%20Masculino%22%2C%22addressLine2%22%3A%22Complexo%20Citymix%20-%20Av.%20Pres.%20Get%C3%BAlio%20Vargas%2C%20575%20-%20Centro%2C%20Campina%20Grande%20-%20PB%22%2C%22id%22%3A%22ChIJpa-rBpkfrAcR6pQh83mT7wU%22%2C%22source%22%3A%22SEARCH%22%2C%22latitude%22%3A-7.2182235%2C%22longitude%22%3A-35.890245799999995%2C%22provider%22%3A%22google_places%22%7D",
};
