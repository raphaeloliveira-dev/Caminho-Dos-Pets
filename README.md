# Caminho dos Pets — site

Site de uma página da Caminho dos Pets (clínica veterinária, pet shop e banho e tosa, em Osasco/SP). Sem build, sem dependências: é só HTML, CSS e um JavaScript pequeno.

## Arquivos

```
index.html   estrutura e conteúdo da página
style.css    todo o visual (cores, tipografia, layout, tema escuro)
script.js    links do WhatsApp e o montador de mensagem
```

Os três precisam ficar na mesma pasta. A única coisa que vem de fora são as fontes DM Sans e Fredoka, carregadas do Google Fonts.

## Como abrir

Dê dois cliques no `index.html` que ele abre no navegador. Para testar como vai ficar no servidor, rode na pasta do projeto:

```
python3 -m http.server 8000
```

e acesse `http://localhost:8000`.

## Publicar

Suba os três arquivos na raiz da hospedagem (GitHub Pages, Netlify, Vercel, Hostinger, cPanel — qualquer uma serve, porque não há nada para compilar).

## O que dá para mexer

**Número do WhatsApp** — está em dois lugares, e os dois precisam bater:

- `script.js`, na primeira linha: `var NUM = "5511975741191";`
- `index.html`, nos `href="https://wa.me/5511975741191"` (eles são o fallback caso o JS não carregue)

O formato é país + DDD + número, sem espaços nem sinais.

**Mensagens prontas dos botões** — cada botão de agendamento tem um `data-msg` no `index.html`. O texto ali é o que já aparece digitado quando o WhatsApp abre.

**Endereço, Instagram e serviços** — direto no `index.html`, nas seções `#contato`, `#servicos` e `#especialistas`. Os cards de serviço são os `<article class="tile">`; para criar mais um, copie um bloco existente e dê a ele uma classe de cor (`t-a` a `t-e`).

**Cores e fontes** — tudo em variáveis no topo do `style.css`, dentro do `:root`. Trocar `--teal` e `--yellow` já muda a identidade da página inteira. As cores do tema escuro ficam logo abaixo, nos blocos `prefers-color-scheme: dark` e `[data-theme="dark"]` — se mudar uma paleta, mude as duas.

**Opções do formulário** — os botões de serviço e de tipo de pet estão no `index.html`, na seção "Monte sua mensagem". O atributo `data-v` é o texto que entra na mensagem; o texto do botão é só o rótulo na tela.

## Como funciona o formulário

Não existe servidor nem envio de dados. O `script.js` monta uma frase com as opções escolhidas e o nome do pet, e joga tudo na URL do `wa.me`. O cliente vê a mensagem pronta no WhatsApp e decide se envia. Nada é armazenado.

## Detalhes já resolvidos

- Tema claro e escuro automáticos, acompanhando a preferência do sistema
- Layout responsivo, do celular ao desktop
- Respeito a `prefers-reduced-motion` (a animação das patinhas não roda para quem pediu menos movimento)
- `env(safe-area-inset-*)` para não esbarrar nas barras do iPhone
- Botão flutuante do WhatsApp fixo na tela
- Foco visível no teclado e `aria-label` nos ícones

## Pendências sugeridas

- Trocar os emojis dos cards por ícones ou fotos reais da clínica
- Adicionar horário de funcionamento na seção de contato
- Incluir uma imagem de compartilhamento (`og:image`) para os links ficarem bonitos no WhatsApp e no Instagram
