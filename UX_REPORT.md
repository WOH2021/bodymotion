# Relatorio UX - Body Motion Pilates

**Data da revisao:** 20 de agosto de 2026  
**Site avaliado:** https://woh2021.github.io/bodymotion/  
**Objetivo principal do utilizador:** perceber os servicos, confiar na clinica e marcar uma primeira aula ou contacto.

## Resumo executivo

O site apresenta uma proposta de valor clara no inicio, uma identidade visual coerente e varios caminhos para contacto. A experiencia perde credibilidade, no entanto, por conteudo incompleto na pagina Sobre, informacao operacional inconsistente e uma jornada de marcacao que termina numa pagina de contactos em vez de permitir uma acao de reserva direta.

Prioridade: corrigir primeiro a informacao que afeta confianca e decisao, depois reduzir o esforco para contactar.

## O que funciona

- A pagina inicial comunica rapidamente Pilates Clinico, bem-estar e recuperacao.
- O CTA principal, "Marcar Primeira Aula", esta visivel no primeiro ecran e leva a uma pagina de contacto.
- A navegacao principal e curta e inclui uma acao orientada a conversao: "Marcar Aula".
- Telefone, WhatsApp e Instagram sao apresentados como opcoes de contacto, adequadas a utilizadores em mobile.
- A pagina de servicos organiza a oferta por Pilates Clinico e especialidades, o que ajuda a descoberta inicial.
- A estrutura semantica inclui titulos, texto alternativo nas imagens e um botao de menu identificado para leitores de ecran.

## Principais problemas e recomendacoes

### P0 - Remover conteudo de equipa incompleto antes de promover a clinica

**Evidencia:** a pagina Sobre apresenta varios cartoes com "Nome Sobrenome", "Funcao / Especialidade" e texto de preenchimento.

**Impacto:** conteudo de placeholder reduz a confianca, especialmente num servico clinico onde as credenciais e as pessoas sao decisivas.

**Recomendacao:** publicar apenas profissionais com nome, fotografia, cargo, credenciais relevantes e uma breve descricao real. Se estes dados ainda nao estiverem prontos, ocultar a secao da equipa e manter apenas a historia da clinica e um CTA para contacto.

**Criterio de aceitacao:** nao existem nomes, cargos, descricoes ou imagens de placeholder em PT ou EN.

### P0 - Definir uma unica fonte para horarios e morada

**Evidencia:** a pagina inicial indica segunda a sexta, 8h-21h, e sabado, 8h-13h. A pagina de servicos indica segunda a sabado "sob agendamento". O material do site tambem mostra variacoes de horario e de numero de porta na morada.

**Impacto:** informacao contraditoria cria duvida antes de telefonar ou deslocar-se e pode gerar contactos perdidos.

**Recomendacao:** validar internamente o horario, regime de marcacao e morada; guardar esses dados numa unica origem reutilizada em cabecalho, contacto, rodape, metadados e schema.org.

**Criterio de aceitacao:** a mesma morada e horario aparecem em todas as paginas e nos resultados partilhados/pesquisaveis.

### P1 - Tornar a escolha de servico mais orientada a necessidades

**Evidencia:** a pagina de servicos enumera modalidades e especialidades, mas nao ajuda claramente quem chega com uma necessidade, como dor, gravidez, pos-parto ou recuperacao de lesao.

**Impacto:** visitantes sem linguagem clinica podem nao saber qual servico selecionar e adiar o contacto.

**Recomendacao:** adicionar uma faixa "Como podemos ajudar?" antes da lista detalhada, com caminhos por necessidade: dor ou lesao, gravidez/pos-parto, mobilidade/forca, criancas e bem-estar. Cada caminho deve levar ao servico recomendado e a um CTA de contacto contextual.

**Criterio de aceitacao:** um visitante consegue identificar o proximo passo sem ter de conhecer o nome da modalidade.

### P1 - Usar imagens reais para comunicar espaco, equipa e cuidado

**Evidencia:** no primeiro ecran avaliado, o hero e maioritariamente um bloco escuro com texto; a imagem/video nao comunica imediatamente o estudio, o atendimento ou os equipamentos. As imagens existentes surgem mais abaixo.

**Impacto:** a primeira impressao comunica menos diferenciacao e confianca do que poderia para um servico presencial.

**Recomendacao:** usar uma foto ou video curto, luminoso e real do estudio, equipamento e acompanhamento clinico no hero, garantindo contraste do texto e um poster de imagem para carregamento rapido.

**Criterio de aceitacao:** no primeiro ecran, a pessoa percebe onde sera atendida e o tipo de experiencia oferecida, sem comprometer a legibilidade do CTA.

### P2 - Clarificar arquitetura de informacao e consistencia bilingue

**Evidencia:** a navegacao e os titulos de pagina alternam entre "Aulas", "Servicos" e referencias antigas a horario. A versao inglesa e portuguesa devem manter a mesma oferta e o mesmo percurso de conversao.

**Impacto:** rotulos inconsistentes tornam a navegacao menos previsivel e dificultam manutencao e SEO local.

**Recomendacao:** escolher uma taxonomia unica: Inicio, Sobre, Servicos, Contacto e Marcar Aula. Rever os dois idiomas pagina a pagina, incluindo titulos, CTAs, links de idioma, metadados e rodapes.

**Criterio de aceitacao:** cada pagina PT tem equivalente EN funcional, com o mesmo conteudo essencial e sem rotulos antigos.

### P2 - Melhorar acessibilidade e controlo de qualidade visual

**Evidencia:** o menu mobile possui nome acessivel e os links de contacto sao acionaveis, mas a avaliacao visual mostrou um cabecalho alto e o menu recolhido como elemento dominante no primeiro ecran. Foi tambem observado um erro 404 no carregamento da pagina inicial.

**Impacto:** um recurso em falta pode degradar a experiencia; espaco excessivo no cabecalho reduz a informacao util acima da dobra em ecras pequenos.

**Recomendacao:** identificar e corrigir o recurso 404, testar o menu com teclado e leitor de ecran, verificar foco visivel, e reduzir a altura do cabecalho mobile sem diminuir a area de toque do botao.

**Criterio de aceitacao:** nao ha erros 404 em recursos essenciais; menu abre/fecha com teclado, atualiza `aria-expanded` e mantem foco visivel; a proposta e CTA continuam visiveis sem scroll num viewport mobile comum.

## Plano de implementacao

1. Validar dados reais: equipa, morada, horarios e canais preferidos de marcacao.
2. Eliminar placeholders e sincronizar conteudo PT/EN.
3. Reestruturar a pagina Contacto em torno de uma acao primaria de marcacao por WhatsApp.
4. Adicionar caminhos por necessidade na pagina de Servicos.
5. Substituir o hero por media real otimizado e corrigir o recurso que devolve 404.
6. Fazer teste final em mobile e desktop: navegar, mudar idioma, marcar aula, abrir WhatsApp, telefonar, localizar no mapa e verificar todos os links.

## Limites da avaliacao

Revisao heuristica baseada no site publico e na sua estrutura de conteudo em 20 de agosto de 2026. Nao incluiu entrevistas com clientes, analytics, testes moderados, nem auditoria automatizada completa de acessibilidade ou desempenho.