"""Generate the public, ATS-readable PDF from confirmed experience (no private client data)."""
from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from xml.sax.saxutils import escape

Path("public").mkdir(exist_ok=True)
out = Path("public/Logan_Mendes_Contardi_Curriculo_2026.pdf")
fonts = [Path("/usr/share/fonts/truetype/liberation/LiberationSans"), Path("/usr/share/fonts/truetype/liberation2/LiberationSans")]
base = next((p for p in fonts if Path(str(p) + "-Regular.ttf").exists()), None)
if base is not None:
    pdfmetrics.registerFont(TTFont("CvRegular", str(base) + "-Regular.ttf"))
    pdfmetrics.registerFont(TTFont("CvBold", str(base) + "-Bold.ttf"))
    regular, bold = "CvRegular", "CvBold"
else:
    regular, bold = "Helvetica", "Helvetica-Bold"
    print("Using built-in Helvetica fonts; install fonts-liberation for source-template fidelity.")
ink, muted, accent = HexColor("#22272B"), HexColor("#59616A"), HexColor("#CA5828")
styles = {
    "name": ParagraphStyle("name", fontName=bold, fontSize=16.5, leading=20, textColor=ink, alignment=TA_CENTER, spaceAfter=4),
    "subtitle": ParagraphStyle("subtitle", fontName=regular, fontSize=9, leading=13, textColor=muted, alignment=TA_CENTER, spaceAfter=6),
    "contact": ParagraphStyle("contact", fontName=regular, fontSize=8.5, leading=13, textColor=ink, alignment=TA_CENTER, spaceAfter=8),
    "head": ParagraphStyle("head", fontName=bold, fontSize=10, leading=12, textColor=ink, spaceBefore=8, spaceAfter=4),
    "body": ParagraphStyle("body", fontName=regular, fontSize=8.6, leading=11.2, textColor=ink, spaceAfter=5),
    "job": ParagraphStyle("job", fontName=bold, fontSize=9.2, leading=12, textColor=ink, spaceBefore=5, spaceAfter=1),
    "period": ParagraphStyle("period", fontName=regular, fontSize=8.3, leading=10.4, textColor=accent, spaceAfter=2),
    "bullet": ParagraphStyle("bullet", fontName=regular, fontSize=8.45, leading=10.7, textColor=ink, leftIndent=12, firstLineIndent=-9, spaceAfter=2),
    "small": ParagraphStyle("small", fontName=regular, fontSize=8.4, leading=10.8, textColor=ink, spaceAfter=2),
}
page_width, _ = A4
doc = SimpleDocTemplate(str(out), pagesize=A4, leftMargin=50, rightMargin=50, topMargin=30, bottomMargin=34,
    title="Currículo — Logan Mendes Contardi", author="Logan Mendes Contardi",
    subject="Desenvolvedor Full Stack Pleno WordPress PHP")
story = []

def paragraph(value, kind="body"):
    story.append(Paragraph(value, styles[kind]))

def heading(value):
    story.append(Spacer(1, 1))
    paragraph(value, "head")
    story.append(HRFlowable(width="100%", thickness=.75, color=ink, spaceBefore=-4, spaceAfter=5))

def job(company, title, period, bullets):
    paragraph(escape(company) + " — " + escape(title), "job")
    paragraph(escape(period), "period")
    for item in bullets:
        paragraph("•  " + item, "bullet")

paragraph("LOGAN MENDES CONTARDI", "name")
paragraph("DESENVOLVEDOR FULL STACK PLENO · WORDPRESS / PHP · INTEGRAÇÕES E PERFORMANCE", "subtitle")
paragraph('São Paulo, SP | <link href="mailto:loganmendescontardi@gmail.com" color="#CA5828"><u>loganmendescontardi@gmail.com</u></link> | <link href="https://github.com/loganshi" color="#CA5828"><u>github.com/loganshi</u></link> | <link href="https://logan-portfolio-dun.vercel.app" color="#CA5828"><u>Portfólio</u></link>', "contact")

heading("RESUMO PROFISSIONAL")
paragraph("Desenvolvedor Full Stack Pleno com experiência em WordPress, PHP, JavaScript, customização de temas e plugins, integrações com CRM, e-commerce e otimização de performance. Atuação em produtos de educação financeira, instituições de ensino, eventos e negócios internacionais. Experiência de ponta a ponta: levantamento de requisitos, implementação, manutenção e depuração de soluções web.")

heading("COMPETÊNCIAS TÉCNICAS")
paragraph("<b>WordPress e PHP:</b> arquitetura de temas e plugins, Elementor, ACF, Gravity Forms, WooCommerce, MySQL, manutenção e diagnóstico.")
paragraph("<b>Frontend:</b> HTML5, CSS3, JavaScript, jQuery, Bootstrap; React, TypeScript e Next.js em projetos próprios / complementares.")
paragraph("<b>Integrações e operações:</b> REST APIs, webhooks, Salesforce, Stripe via plugins, Git/GitHub, Linux/Bash, cache, performance e SEO técnico.")
paragraph("<b>Dados e marketing:</b> Google Tag Manager, GA4, Meta Pixel, mensuração e Core Web Vitals.")

heading("EXPERIÊNCIA PROFISSIONAL")
job("FK Partners", "Desenvolvedor Full Stack Pleno", "08/2024 — Atual", [
    "Desenvolvimento e sustentação de soluções WordPress/PHP e funcionalidades customizadas; manutenção de consultas e integrações com MySQL.",
    "Criação de plugin customizado para envio de formulários Gravity Forms ao Salesforce, incluindo mapeamento de campos e fluxos do CRM.",
    "Diagnóstico e otimizações de cache, consultas, assets e ambiente durante campanhas de alto tráfego; colaboração em code reviews e decisões técnicas.",
])
job("Sinnapse Agência Digital", "Desenvolvedor WordPress", "08/2023 — 08/2024", [
    "Desenvolvimento de sites e landing pages em WordPress com personalização de temas, front-end responsivo, manutenção e resolução de bugs.",
    "Destaques: site do <b>Expo Neon</b> (empreendimento do Expo Center Norte) e desenvolvimento integral do site da <b>Barcelona Academy</b> e suas integrações.",
    "Entregas adicionais: FADISP, RoleUSA, Grupo Audens, Faculdade Belavista, UNIALFA, Colégio Alves Faria e página de serviços da Sinnapse.",
])
job("Wetok Software", "Desenvolvedor Front-End", "01/2023 — 08/2023", [
    "Criação das landing pages WetokSoft (HTML5, CSS, JavaScript, jQuery) e ConnectPlay (HTML5, CSS, JavaScript, Bootstrap, jQuery).",
    "Desenvolvimento, manutenção e testes de sistemas e funcionalidades em JavaScript.",
])
job("WK Group", "Desenvolvedor Front-End", "04/2021 — 01/2023", [
    "Desenvolvimento e personalização de sites WordPress; WooCommerce, integração Stripe via plugins, SEO e adaptação multilíngue.",
    "Implementação de sistema interno de estoque com HTML5, CSS, JavaScript, jQuery e Bootstrap.",
    "Relatórios para métricas web, apoio técnico a clientes internacionais e manutenção de páginas e funcionalidades.",
])
heading("PROJETOS SELECIONADOS")
paragraph('<link href="https://www.exponeon.com.br/" color="#CA5828"><u>Expo Neon</u></link> · <link href="https://barcaacademy.com.br/" color="#CA5828"><u>Barcelona Academy</u></link> · <link href="https://fadisp.com.br/" color="#CA5828"><u>FADISP</u></link> · <link href="https://github.com/loganshi/logan-portfolio" color="#CA5828"><u>Portfólio Next.js</u></link>', "small")
heading("FORMAÇÃO")
paragraph("<b>Tecnólogo em Análise e Desenvolvimento de Sistemas</b> — Centro Universitário Braz Cubas (conclusão: 12/2024).", "small")
paragraph("Cursos: Desenvolvimento Web, Git/GitHub, POO e Design de Interfaces. <b>Idiomas:</b> Português (nativo), Inglês (B1).", "small")

def footer(canvas, document):
    canvas.setStrokeColor(HexColor("#D9DBDE"))
    canvas.line(50, 34, page_width - 50, 34)
    canvas.setFont(regular, 7)
    canvas.setFillColor(muted)
    canvas.drawString(50, 23, "LOGAN MENDES CONTARDI  ·  CURRÍCULO PROFISSIONAL")
    canvas.drawRightString(page_width - 50, 23, str(document.page))

doc.build(story, onFirstPage=footer, onLaterPages=footer)
print("Generated", out, "bytes:", out.stat().st_size)
