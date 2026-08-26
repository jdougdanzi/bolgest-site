# bolgest-site

Site estático do **Bolgest** (bolgest.com) — home, política de privacidade e termos de uso.

- Deploy: integração GIT do hPanel da Hostinger → `public_html`, branch `main`, com webhook de auto-deploy (todo push publica).
- Fonte da verdade dos textos legais: cérebro Bolgest (`empresa/contexto/politica-privacidade.md` e `termo-de-uso.md`). Editar lá, regenerar aqui.
- GA4: trocar `G-XXXXXXXXXX` no `index.html` pelo ID real — o script ativa sozinho.
- Zero build: HTML/CSS/JS puros, sem dependências.

Mantido pela Bea (agente do cérebro Bolgest) · Danzi & Ribeiro Contadores Associados LTDA.
