Video de fundo (hero-bg.mp4 / hero-bg.webm / hero-bg-poster.jpg): OK, ja
esta nesta pasta, convertido do .wmv que voce enviou (sem audio, com loop).

Faltam so 2 assets: logo e icone "union". O index.html ainda esta usando
URLs temporarias do Figma pra esses dois, que expiram em ~7 dias.

Baixe os 2 arquivos e salve nesta pasta com estes nomes:
  logo-alan.svg
  union-icon.svg

URLs (validas por poucos dias a partir de 16/08/2026):
  https://www.figma.com/api/mcp/asset/432fd872-1b4f-4fc4-9cdf-8debe8c3ebdc.svg
  https://www.figma.com/api/mcp/asset/9f43d090-8bf6-4f34-98a3-306f6fc8690f.svg

Depois, troque os 2 caminhos "src=" no index.html de
  https://www.figma.com/api/mcp/asset/...
para
  assets/logo-alan.svg / assets/union-icon.svg

---

Secao "Double Diamond" (nova): tambem usa URLs temporarias do Figma para
4 assets (expiram em ~7 dias a partir de 16/08/2026):

  glow de fundo (Ellipse 3):
  https://www.figma.com/api/mcp/asset/f7cb7a01-9e01-481a-ac19-a0e688fb39e7.svg
  -> salvar como assets/double-diamond-glow.svg

  icone "diamante" ao lado do titulo:
  https://www.figma.com/api/mcp/asset/2cc1eeb7-f7ed-4786-84b8-e87b919a898f.png
  -> salvar como assets/double-diamond-icon.png

  icone da badge "Research" (medal-shine):
  https://www.figma.com/api/mcp/asset/8e19d3bc-7932-47d6-bf57-fd7e5ed0fe87.svg
  -> salvar como assets/badge-research.svg

  imagem da caneta (card 01 Research):
  https://www.figma.com/api/mcp/asset/da488ac5-a65f-47e9-8e49-18d850232627.png
  -> salvar como assets/double-diamond-research.png

IMPORTANTE: bati no limite de chamadas do Figma MCP (plano Starter) e ainda
NAO tenho os textos/imagens reais dos cards 02 Design, 03 Develop e
04 Handoff. Por enquanto eles estao com texto placeholder generico e uma
caixa tracejada no lugar da imagem. Assim que o limite resetar (ou se voce
mandar prints/o conteudo real desses 3 estados), eu troco pelo conteudo
definitivo do Figma.

---

Secao "Um pouco sobre mim": RESOLVIDO. As 2 imagens (foto do Alan e a
medalha) foram pegas direto da pasta Mockups que voce conectou e ja estao
salvas aqui:
  assets/about-photo.png   (de "Eu 2.png")
  assets/about-medal.jpeg  (de "Gemini_Generated_Image_dyhh91dyhh91dyhh.jpeg")

Sao arquivos locais permanentes, nao expiram.

---

BONUS: reparei que a mesma pasta Mockups tem os arquivos originais de
outras imagens que hoje ainda estao usando URLs temporarias do Figma
(portfolio + Double Diamond). Se quiser, posso trocar essas tambem pelos
arquivos locais permanentes:
  Gemini_Generated_Image_nvyjslnvyjslnvyj.png -> mockup laptop Juliana Novaes
  Mockup_Gran Pro.png -> mockup monitor Gran Pro
  Mocukp_Cronograma.png -> mockup celular Cronograma
  Mockup_times square.png -> mockup Times Square
  diamente negro.png -> icone Double Diamond
  caneta ico.png -> imagem da caneta (card Research)
E' so pedir.
