export type ThinkingSection = {
  heading: string
  paragraphs: string[]
}

export type ThinkingArticle = {
  slug: string
  number: string
  eyebrow: string
  title: string
  dek: string
  readTime: string
  sections: ThinkingSection[]
  closing: string
}

export const thinkingEn: ThinkingArticle[] = [
  {
    slug: "marketing-operating-system",
    number: "01",
    eyebrow: "Growth / Operations",
    title: "Marketing is not a department. It is an operating system.",
    dek: "Growth gets harder when positioning, acquisition, sales, service and delivery are treated as separate problems.",
    readTime: "6 min read",
    sections: [
      {
        heading: "Most marketing problems do not stay inside marketing.",
        paragraphs: [
          "A company can increase traffic and still struggle to grow. It can improve creative and still lose opportunities in sales. It can generate leads and still create a poor customer experience after the first conversation.",
          "That happens because demand is only one part of a larger system. The proposition creates an expectation. Marketing attracts attention. Sales translates interest into a decision. Service and delivery determine whether the promise survives contact with reality. Data closes the loop and tells the company what to change next.",
          "When these parts are managed independently, each team can optimise its own metric while the business remains stuck."
        ],
      },
      {
        heading: "The useful question is not “which channel do we need?”",
        paragraphs: [
          "The useful question is: where is the system losing momentum?",
          "Sometimes the problem is awareness. Sometimes the market does not understand the proposition. Sometimes the website creates friction. Sometimes the lead reaches WhatsApp and disappears into an unstructured conversation. Sometimes sales cannot see the context created by marketing. Sometimes the operation cannot deliver the experience that was sold.",
          "Adding another campaign to a broken handoff usually creates more waste, not more growth."
        ],
      },
      {
        heading: "A growth system connects signals, decisions and actions.",
        paragraphs: [
          "A healthy operating system makes the path from market signal to business action visible. It defines what the company wants to be known for, how demand is created, how opportunities are captured, how context moves between people and tools, and how outcomes return as learning.",
          "This does not mean every company needs a complex stack. In many cases the best system is simpler than the one already in place. Fewer disconnected tools. Clearer ownership. Better information at the moment a decision has to be made.",
          "Technology matters when it removes friction between stages. It matters less when it simply adds another dashboard."
        ],
      },
      {
        heading: "What changes when marketing is treated as infrastructure.",
        paragraphs: [
          "Strategy stops being a presentation and becomes a decision criterion. Brand stops being a layer applied after the fact and becomes the language that keeps the proposition coherent. Acquisition stops being judged only by volume and starts being judged by the quality of the opportunities it creates.",
          "Customer experience becomes part of growth because every interaction can strengthen or weaken the reason someone chose the company. CRM becomes useful when it preserves context, not when it merely stores contacts. Automation becomes useful when it moves work forward without hiding responsibility.",
          "The result is not a bigger marketing department. It is a business that learns faster."
        ],
      },
      {
        heading: "Channels still matter. They just come later in the reasoning.",
        paragraphs: [
          "Paid media, content, SEO, social, email and outbound can all be important. But channels are implementation choices. They should follow the business problem, the audience, the proposition and the operating capacity behind them.",
          "A company that sees marketing as an operating system is less likely to chase isolated tactics because it can see how one decision affects the rest of the journey.",
          "That is usually where durable growth begins: not with more activity, but with a clearer system."
        ],
      },
    ],
    closing: "Growth is rarely one campaign away. More often, it is one connected system away.",
  },
  {
    slug: "ai-customer-experience",
    number: "02",
    eyebrow: "AI / Customer Experience",
    title: "What AI changes — and what it doesn’t — in customer experience.",
    dek: "AI can compress the distance between a customer’s intent and the next useful action. It does not remove the need for judgement, context or responsibility.",
    readTime: "7 min read",
    sections: [
      {
        heading: "AI changes the front door of the business.",
        paragraphs: [
          "For many companies, the first meaningful interaction no longer has to wait for a person to become available. A customer can ask a question, describe a problem, request a quote or check a next step and receive a useful response immediately.",
          "That changes expectations. Speed becomes easier to provide. Routine questions can be resolved without creating a queue. Information can be captured while the intent is still fresh.",
          "But faster interaction is not automatically better interaction."
        ],
      },
      {
        heading: "The hardest part is not generating a reply.",
        paragraphs: [
          "Language models are very good at producing plausible language. Customer experience requires something harder: knowing what the company is allowed to say, what it actually knows, what action is authorised and when a human should take over.",
          "A useful assistant needs access to the right context without having unlimited access to the business. It needs policies. It needs boundaries. It needs a clear distinction between explaining, recommending, recording and executing.",
          "Without those controls, automation can create confidence without accountability."
        ],
      },
      {
        heading: "Context matters more than personality.",
        paragraphs: [
          "A warm tone can improve an interaction, but tone cannot compensate for missing context. Customers become frustrated when they have to repeat information, when one channel does not know what happened in another, or when an assistant promises something the operation cannot deliver.",
          "The stronger design problem is therefore not “how human should the AI sound?” It is “what context should survive from one step to the next?”",
          "When a conversation can become a structured customer record, a quote request, a scheduled visit or a human handoff without losing its history, AI begins to improve the system instead of merely decorating it."
        ],
      },
      {
        heading: "Human handoff is a feature, not a failure.",
        paragraphs: [
          "Good automation knows where its competence ends. Some questions require judgement. Some customers want reassurance from a person. Some commercial decisions carry exceptions that should not be hidden behind a conversational interface.",
          "The best systems make that transition explicit. They preserve the context already collected, tell the human what happened and avoid forcing the customer to restart the conversation.",
          "The goal is not to prevent humans from entering the process. It is to make sure they enter at the point where human attention has the most value."
        ],
      },
      {
        heading: "The operating model matters more than the model name.",
        paragraphs: [
          "Companies often begin an AI project by asking which model to use. That choice matters, but it is rarely the most important decision.",
          "The durable questions are operational: which data can be accessed, which actions can be triggered, what requires confirmation, what gets audited, how permissions work, what happens when confidence is low and how the organisation learns from failures.",
          "A better model can improve capability. A better operating design improves trust."
        ],
      },
      {
        heading: "What AI does not change.",
        paragraphs: [
          "Customers still want clarity. They still want promises to be kept. They still notice when a company has not thought through its own process.",
          "AI does not repair a weak proposition, a confusing policy or an operation that cannot deliver. In some cases it exposes those problems faster because it increases the speed and volume of interaction.",
          "The companies that benefit most from AI will not be the ones that automate the most. They will be the ones that decide carefully what should become easier, what should remain human and how responsibility moves through the system."
        ],
      },
    ],
    closing: "The useful question is not how much of the customer experience AI can replace. It is how much friction it can remove without removing responsibility.",
  },
  {
    slug: "brand-and-performance",
    number: "03",
    eyebrow: "Brand / Performance",
    title: "Brand and performance should not live in separate rooms.",
    dek: "Brand creates the reason to choose. Performance captures and amplifies demand. Treating them as opposing disciplines weakens both.",
    readTime: "6 min read",
    sections: [
      {
        heading: "The split is organisational, not real.",
        paragraphs: [
          "Customers do not experience a brand campaign and a performance campaign as separate departments. They see one company.",
          "The ad, the landing page, the sales conversation, the product interface and the service experience all contribute to the same judgement: is this relevant, credible and worth choosing?",
          "When brand and performance operate with different assumptions, the customer is left to reconcile the contradiction."
        ],
      },
      {
        heading: "Brand creates efficiency before a click happens.",
        paragraphs: [
          "A strong brand makes future communication easier to understand. It gives meaning to visual and verbal cues, creates familiarity and reduces the amount of explanation required every time the company enters the market.",
          "That matters to performance because media does not operate in a vacuum. Two companies can buy the same audience and receive different outcomes because one arrives with stronger recognition, a clearer proposition or more accumulated trust.",
          "Performance data can measure part of that effect, but it did not create the whole effect."
        ],
      },
      {
        heading: "Performance gives brand a contact surface with reality.",
        paragraphs: [
          "The opposite is also true. Brand work becomes weaker when it is protected from commercial evidence.",
          "Search behaviour, landing-page patterns, conversion objections, sales conversations and retention signals can reveal where the market understands the proposition and where it does not. They are not merely media metrics. They are evidence about how the brand is functioning.",
          "A brand team that ignores those signals risks protecting an idea that customers are not experiencing."
        ],
      },
      {
        heading: "One proposition should travel through the entire journey.",
        paragraphs: [
          "Integration begins before creative production. The company needs a shared answer to a basic question: why should this audience choose us now?",
          "That proposition should survive the path from campaign to page, from page to conversation and from conversation to delivery. The expression can change by channel. The underlying reason should not.",
          "This is why messaging architecture is operational. It gives different teams a common source instead of forcing each channel to invent its own version of the company."
        ],
      },
      {
        heading: "Shared learning is more important than shared meetings.",
        paragraphs: [
          "Putting brand and performance teams in the same meeting does not guarantee integration. What matters is whether learning moves between them.",
          "Creative testing should inform brand expression. Sales objections should influence messaging. Brand strategy should define which signals are worth amplifying. Customer experience should reveal whether the promise is being delivered.",
          "The value is in the feedback loop, not in the organisational chart."
        ],
      },
      {
        heading: "The best distinction is temporal, not ideological.",
        paragraphs: [
          "Some work creates demand over time. Some work captures demand that exists now. Healthy growth needs both.",
          "The mistake is turning that difference into a competition. Brand without distribution can remain invisible. Performance without brand can become increasingly expensive and interchangeable.",
          "A company becomes harder to replace when both systems reinforce the same reason to choose."
        ],
      },
    ],
    closing: "Brand builds preference. Performance turns preference into action. The business gets stronger when both learn from the same market.",
  },
]

export const thinkingPt: ThinkingArticle[] = [
  {
    slug: "marketing-como-sistema-operacional",
    number: "01",
    eyebrow: "Crescimento / Operação",
    title: "Marketing não é um departamento. É um sistema operacional.",
    dek: "O crescimento fica mais difícil quando posicionamento, aquisição, vendas, atendimento e entrega são tratados como problemas separados.",
    readTime: "6 min de leitura",
    sections: [
      {
        heading: "A maioria dos problemas de marketing não fica dentro do marketing.",
        paragraphs: [
          "Uma empresa pode aumentar o tráfego e continuar com dificuldade para crescer. Pode melhorar a criação e ainda perder oportunidades em vendas. Pode gerar leads e mesmo assim entregar uma experiência ruim depois da primeira conversa.",
          "Isso acontece porque demanda é apenas uma parte de um sistema maior. A proposta cria uma expectativa. O marketing atrai atenção. Vendas transforma interesse em decisão. Atendimento e entrega determinam se a promessa sobrevive ao contato com a realidade. Os dados fecham o ciclo e mostram o que a empresa precisa mudar depois.",
          "Quando essas partes são administradas isoladamente, cada área pode otimizar a própria métrica enquanto o negócio continua travado."
        ],
      },
      {
        heading: "A pergunta útil não é “qual canal está faltando?”",
        paragraphs: [
          "A pergunta útil é: em que ponto o sistema está perdendo força?",
          "Às vezes o problema é conhecimento de marca. Às vezes o mercado não entende a proposta. Às vezes o site cria atrito. Às vezes o lead chega ao WhatsApp e desaparece em uma conversa sem estrutura. Às vezes vendas não enxerga o contexto criado pelo marketing. Às vezes a operação não consegue entregar a experiência que foi vendida.",
          "Adicionar mais uma campanha a um handoff quebrado normalmente cria mais desperdício, não mais crescimento."
        ],
      },
      {
        heading: "Um sistema de crescimento conecta sinais, decisões e ações.",
        paragraphs: [
          "Um sistema saudável torna visível o caminho entre um sinal do mercado e uma ação do negócio. Define pelo que a empresa quer ser reconhecida, como a demanda é criada, como as oportunidades são capturadas, como o contexto passa entre pessoas e ferramentas e como os resultados voltam na forma de aprendizado.",
          "Isso não significa que toda empresa precise de um stack complexo. Em muitos casos, o melhor sistema é mais simples do que o existente. Menos ferramentas desconectadas. Responsabilidades mais claras. Informação melhor no momento em que uma decisão precisa ser tomada.",
          "Tecnologia importa quando remove atrito entre etapas. Importa menos quando apenas acrescenta outro painel."
        ],
      },
      {
        heading: "O que muda quando marketing é tratado como infraestrutura.",
        paragraphs: [
          "Estratégia deixa de ser uma apresentação e vira critério de decisão. Marca deixa de ser uma camada aplicada no final e passa a ser a linguagem que mantém a proposta coerente. Aquisição deixa de ser julgada apenas por volume e passa a ser julgada pela qualidade das oportunidades que cria.",
          "Experiência do cliente passa a fazer parte do crescimento porque cada interação pode fortalecer ou enfraquecer a razão pela qual alguém escolheu a empresa. CRM se torna útil quando preserva contexto, não quando apenas armazena contatos. Automação se torna útil quando movimenta o trabalho sem esconder a responsabilidade.",
          "O resultado não é um departamento de marketing maior. É um negócio que aprende mais rápido."
        ],
      },
      {
        heading: "Os canais continuam importantes. Só entram mais tarde no raciocínio.",
        paragraphs: [
          "Mídia paga, conteúdo, SEO, social, e-mail e outbound podem ser importantes. Mas canais são escolhas de implementação. Eles deveriam vir depois do problema de negócio, do público, da proposta e da capacidade operacional que existe por trás.",
          "Uma empresa que enxerga marketing como sistema operacional tende a perseguir menos táticas isoladas porque consegue ver como uma decisão afeta o restante da jornada.",
          "É normalmente aí que começa o crescimento mais durável: não com mais atividade, mas com um sistema mais claro."
        ],
      },
    ],
    closing: "Crescimento raramente está a uma campanha de distância. Com mais frequência, está a um sistema conectado de distância.",
  },
  {
    slug: "ia-e-experiencia-do-cliente",
    number: "02",
    eyebrow: "IA / Experiência do cliente",
    title: "O que a IA muda — e o que não muda — na experiência do cliente.",
    dek: "A IA pode reduzir a distância entre a intenção do cliente e a próxima ação útil. Ela não elimina a necessidade de critério, contexto ou responsabilidade.",
    readTime: "7 min de leitura",
    sections: [
      {
        heading: "A IA muda a porta de entrada da empresa.",
        paragraphs: [
          "Para muitas empresas, a primeira interação relevante não precisa mais esperar uma pessoa ficar disponível. Um cliente pode fazer uma pergunta, descrever um problema, pedir um orçamento ou verificar um próximo passo e receber uma resposta útil imediatamente.",
          "Isso muda expectativas. Velocidade fica mais fácil de oferecer. Perguntas rotineiras podem ser resolvidas sem criar fila. Informações podem ser capturadas enquanto a intenção ainda está fresca.",
          "Mas uma interação mais rápida não é automaticamente uma interação melhor."
        ],
      },
      {
        heading: "A parte mais difícil não é gerar uma resposta.",
        paragraphs: [
          "Modelos de linguagem são muito bons em produzir linguagem plausível. Experiência do cliente exige algo mais difícil: saber o que a empresa pode dizer, o que ela realmente sabe, qual ação está autorizada e quando uma pessoa deve assumir.",
          "Uma assistente útil precisa acessar o contexto certo sem ter acesso irrestrito ao negócio. Precisa de políticas. Precisa de limites. Precisa distinguir claramente entre explicar, recomendar, registrar e executar.",
          "Sem esses controles, a automação pode criar confiança sem responsabilidade."
        ],
      },
      {
        heading: "Contexto importa mais do que personalidade.",
        paragraphs: [
          "Um tom acolhedor pode melhorar a interação, mas não compensa a falta de contexto. Clientes se frustram quando precisam repetir informações, quando um canal não sabe o que aconteceu no outro ou quando uma assistente promete algo que a operação não pode entregar.",
          "O problema de design mais importante, portanto, não é “quão humana a IA deve parecer?”. É “qual contexto precisa sobreviver de uma etapa para a seguinte?”.",
          "Quando uma conversa pode virar um registro estruturado de cliente, um pedido de orçamento, uma vistoria agendada ou um handoff humano sem perder seu histórico, a IA começa a melhorar o sistema em vez de apenas decorá-lo."
        ],
      },
      {
        heading: "Handoff humano é recurso, não fracasso.",
        paragraphs: [
          "Uma boa automação sabe onde sua competência termina. Algumas perguntas exigem julgamento. Alguns clientes querem a segurança de falar com uma pessoa. Algumas decisões comerciais carregam exceções que não deveriam ficar escondidas atrás de uma interface conversacional.",
          "Os melhores sistemas tornam essa transição explícita. Preservam o contexto já coletado, informam ao humano o que aconteceu e evitam obrigar o cliente a reiniciar a conversa.",
          "O objetivo não é impedir que pessoas entrem no processo. É garantir que elas entrem no ponto em que a atenção humana tem mais valor."
        ],
      },
      {
        heading: "O modelo operacional importa mais do que o nome do modelo.",
        paragraphs: [
          "Empresas costumam começar um projeto de IA perguntando qual modelo usar. Essa escolha importa, mas raramente é a decisão mais importante.",
          "As perguntas duráveis são operacionais: quais dados podem ser acessados, quais ações podem ser disparadas, o que exige confirmação, o que é auditado, como funcionam permissões, o que acontece quando a confiança é baixa e como a organização aprende com falhas.",
          "Um modelo melhor pode aumentar capacidade. Um desenho operacional melhor aumenta confiança."
        ],
      },
      {
        heading: "O que a IA não muda.",
        paragraphs: [
          "Clientes continuam querendo clareza. Continuam querendo que promessas sejam cumpridas. Continuam percebendo quando uma empresa não pensou direito no próprio processo.",
          "A IA não conserta uma proposta fraca, uma política confusa ou uma operação incapaz de entregar. Em alguns casos, ela expõe esses problemas mais rápido porque aumenta a velocidade e o volume das interações.",
          "As empresas que mais se beneficiarão da IA não serão as que automatizarem mais. Serão as que decidirem com cuidado o que deve ficar mais fácil, o que deve continuar humano e como a responsabilidade circula pelo sistema."
        ],
      },
    ],
    closing: "A pergunta útil não é quanto da experiência do cliente a IA consegue substituir. É quanto atrito ela consegue remover sem remover responsabilidade.",
  },
  {
    slug: "marca-e-performance",
    number: "03",
    eyebrow: "Marca / Performance",
    title: "Marca e performance não deveriam viver em salas separadas.",
    dek: "Marca cria a razão para escolher. Performance captura e amplia demanda. Tratar as duas como disciplinas opostas enfraquece ambas.",
    readTime: "6 min de leitura",
    sections: [
      {
        heading: "A separação é organizacional, não real.",
        paragraphs: [
          "Clientes não experimentam uma campanha de marca e uma campanha de performance como departamentos diferentes. Eles enxergam uma empresa.",
          "O anúncio, a landing page, a conversa comercial, a interface do produto e o atendimento contribuem para o mesmo julgamento: isso é relevante, confiável e vale a escolha?",
          "Quando marca e performance operam a partir de premissas diferentes, sobra para o cliente reconciliar a contradição."
        ],
      },
      {
        heading: "Marca cria eficiência antes do clique.",
        paragraphs: [
          "Uma marca forte torna a comunicação futura mais fácil de compreender. Dá significado a sinais visuais e verbais, cria familiaridade e reduz a quantidade de explicação necessária toda vez que a empresa entra no mercado.",
          "Isso importa para performance porque mídia não opera no vácuo. Duas empresas podem comprar a mesma audiência e receber resultados diferentes porque uma chega com reconhecimento maior, proposta mais clara ou confiança acumulada.",
          "Os dados de performance conseguem medir parte desse efeito, mas não criaram o efeito inteiro."
        ],
      },
      {
        heading: "Performance dá à marca uma superfície de contato com a realidade.",
        paragraphs: [
          "O oposto também é verdadeiro. Trabalho de marca fica mais fraco quando é protegido das evidências comerciais.",
          "Comportamento de busca, padrões de landing page, objeções de conversão, conversas de vendas e sinais de retenção podem revelar onde o mercado entende a proposta e onde não entende. Não são apenas métricas de mídia. São evidências sobre como a marca está funcionando.",
          "Uma equipe de marca que ignora esses sinais corre o risco de proteger uma ideia que os clientes não estão vivendo."
        ],
      },
      {
        heading: "Uma única proposta deve atravessar a jornada inteira.",
        paragraphs: [
          "A integração começa antes da produção criativa. A empresa precisa de uma resposta compartilhada para uma pergunta básica: por que esse público deveria escolher a gente agora?",
          "Essa proposta deve sobreviver ao caminho entre campanha e página, página e conversa, conversa e entrega. A expressão pode mudar por canal. A razão central não.",
          "É por isso que arquitetura de mensagem é operacional. Ela dá às diferentes áreas uma fonte comum em vez de obrigar cada canal a inventar sua própria versão da empresa."
        ],
      },
      {
        heading: "Aprendizado compartilhado importa mais do que reuniões compartilhadas.",
        paragraphs: [
          "Colocar marca e performance na mesma reunião não garante integração. O que importa é se o aprendizado circula entre elas.",
          "Testes criativos deveriam informar a expressão de marca. Objeções de vendas deveriam influenciar a mensagem. Estratégia de marca deveria definir quais sinais vale amplificar. Experiência do cliente deveria revelar se a promessa está sendo entregue.",
          "O valor está no ciclo de feedback, não no organograma."
        ],
      },
      {
        heading: "A melhor distinção é temporal, não ideológica.",
        paragraphs: [
          "Alguns trabalhos criam demanda ao longo do tempo. Outros capturam demanda que existe agora. Crescimento saudável precisa dos dois.",
          "O erro é transformar essa diferença em competição. Marca sem distribuição pode continuar invisível. Performance sem marca pode ficar cada vez mais cara e intercambiável.",
          "Uma empresa se torna mais difícil de substituir quando os dois sistemas reforçam a mesma razão para escolher."
        ],
      },
    ],
    closing: "Marca constrói preferência. Performance transforma preferência em ação. O negócio fica mais forte quando ambas aprendem com o mesmo mercado.",
  },
]
