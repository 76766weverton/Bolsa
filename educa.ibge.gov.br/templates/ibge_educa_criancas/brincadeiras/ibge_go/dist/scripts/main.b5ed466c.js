!function o(s, n, r) { function u(t, a) { if (!n[t]) { if (!s[t]) { var e = "function" == typeof require && require; if (!a && e) return e(t, !0); if (c) return c(t, !0); throw new Error("Cannot find module '" + t + "'") } var i = n[t] = { exports: {} }; s[t][0].call(i.exports, function (a) { var e = s[t][1][a]; return u(e || a) }, i, i.exports, o, s, n, r) } return n[t].exports } for (var c = "function" == typeof require && require, a = 0; a < r.length; a++)u(r[a]); return u }({
    1: [function (a, e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var i, o = t.dificuldade = void 0; (i = o || (t.dificuldade = o = {}))[i.facil = 0] = "facil", i[i.medio = 1] = "medio", i[i.dificil = 2] = "dificil" }, {}], 2: [function (a, e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var i = a("./dificuldade.enum"); Object.defineProperty(t, "dificuldade", { enumerable: !0, get: function () { return i.dificuldade } }) }, { "./dificuldade.enum": 1 }], 3: [function (a, e, t) { "use strict"; var i = a("./quiz/BancoQuestoes"), o = a("./quiz/Quiz"); (new Image).src = "img./spin.gif", new o.Quiz(new i.BancoQuestoes).run() }, { "./quiz/BancoQuestoes": 4, "./quiz/Quiz": 5 }], 4: [function (a, e, t) {
        "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.BancoQuestoes = void 0; var i = function () { function i(a, e) { for (var t = 0; t < e.length; t++) { var i = e[t]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, i.key, i) } } return function (a, e, t) { return e && i(a.prototype, e), t && i(a, t), a } }(), s = a("../utils/random"); var o = a("./banco2").banco; t.BancoQuestoes = function () {
            function a() { !function (a, e) { if (!(a instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, a), this._questoes = Object.create(null) } return i(a, [{ key: "sortearQuestao", value: function (a, e) { var t = this._getQuestoes(a, e), i = (0, s.getRandomInteger)(0, t.length - 1), o = this._extractQuestao(a, e, i); return { id: o.id, pergunta: o.pergunta, dificuldade: o.dificuldade, resposta: o.resposta, opcoes: (0, s.shuffleArray)(o.falsas.concat(o.resposta)), conjunto: o.conjunto, imagemSrc: o.imagemSrc } } }, { key: "_getQuestoes", value: function (a, e) { return this._questoes[a] || (this._questoes[a] = Object.create(null)), this._questoes[a][e] && 0 !== this._questoes[a][e].length || (this._questoes[a][e] = o[a][e].slice(0)), this._questoes[a][e] } }, { key: "_extractQuestao", value: function (a, e, t) { return this._questoes[a][e].splice(t, 1)[0] } }]), a
        }()
    }, { "../utils/random": 12, "./banco2": 6 }], 5: [function (a, e, t) {
        "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.Quiz = void 0; var i = function () { function i(a, e) { for (var t = 0; t < e.length; t++) { var i = e[t]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, i.key, i) } } return function (a, e, t) { return e && i(a.prototype, e), t && i(a, t), a } }(), o = a("../telas/ganhou.screen"), s = a("../telas/erro.screen"), n = a("../telas/tempo.screen"), r = a("../telas/questao.screen"), u = a("../utils/routes"), c = a("../telas/splash.screen"), l = a("../interfaces/index"); var d = window.jQuery; t.Quiz = function () {
            function e(a) {
                !function (a, e) {
                    if (!(a instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._banco = a, this._questoes = Array.apply(null, Array(7)).map(function () { return { dificuldade: l.dificuldade.facil, conjunto: "Weverton" } }), this.score = 0, this.threshold = 5, this.paginaAtual = 0, this.timer = 0, this.questaoAtual = null, this.intervalId = null, this.htmlContainer = document.querySelector("#wrapper")
            } return i(e, [{
                key: "run", value: function () {
                    var e = this, t = this; this._questoes.length < this.threshold && (this.threshold = this._questoes.length), window.fails = [], window.addEventListener("hashchange", function (a) { e._showPage((0, u.getHash)()) }), d("body").on("click", ".enviar", function (a) { var e = d(".seunome").val(); d(this).html('<img src="img/spin.gif" />'), d("input[type=checkbox]").is(":checked") && d.post("#", { email: e }), d.post("#", { email: e }).done(function () { (0, u.goToHash)("0") }).fail(function () { window.fails.push(e), alert("Não foi possível registrar seu email.") }) }), d("body").on("click", ".mailing", function (a) { var e = d(".seunome").val(); if (d(this).html('<img src="img/spin.gif" />'), !e.trim()) return (0, u.goToHash)("0"); d.post("#", { email: e }).always(function () { (0, u.goToHash)("0") }) }), d("body").on("click", ".resposta", function (a) {
                        if (t.questaoAtual) {
                            t.timer += 2; var e = parseInt(t.paginaAtual.toString(), 10) + 1; d(".questoes .resposta").each(function () { d(this).text() === t.questaoAtual.resposta && d(this).addClass("certa") }), d(this).text() === t.questaoAtual.resposta ? t.score += 1 : d(this).addClass("errada")

                                , setTimeout(function () { (0, u.goToHash)(e.toString()) }, 2e3)
                        }
                    }), d("body").on("click", ".recomecar", function (a) { (0, u.goToHash)("0") }), "0" !== (0, u.getHash)() ? (0, u.goToHash)("0") : this._showPage("0")
                }
            }, { key: "_showPage", value: function (a) { var e = parseInt(a, 10); isNaN(e) ? this.paginaAtual = a : e > this._questoes.length ? (this.paginaAtual = this.score >= this.threshold ? "vitoria" : "erro", a = this.paginaAtual) : this.paginaAtual = e; this.questaoAtual; switch (a) { case "0": this.questaoAtual = null, this.stopClock(), this.idle(); break; case "vitoria": this.questaoAtual = null, this.stopClock(), this._success(); break; case "erro": this.questaoAtual = null, this.stopClock(), this._lose("erro"); break; case "tempo": this.questaoAtual = null, this.stopClock(), this._lose("tempo"); break; default: this.questao(parseInt(a, 10)) } } }, { key: "idle", value: function () { this.score = 0, c.splashScreen.render(this.threshold, this._questoes.length, this.htmlContainer), d("button").on("click", function () { return (0, u.goToHash)("1") }) } }, { key: "questao", value: function (a) { var e = this._questoes[a - 1], t = e.conjunto, i = e.dificuldade; this.questaoAtual = this._banco.sortearQuestao(t, i), 1 === this.paginaAtual ? (this.timer = 30, r.QuestaoScreen.render(this.questaoAtual, this.formatTimer(), this.htmlContainer), this.startClock()) : (this.addTime(this.questaoAtual), r.QuestaoScreen.updateScreen(this.questaoAtual, this.formatTimer(), parseInt(this.paginaAtual.toString(), 10) - 1)) } }, { key: "startClock", value: function () { var a = this; this.intervalId = setInterval(function () { if (0 === a.timer) return (0, u.goToHash)("tempo"); a.timer -= 1, r.QuestaoScreen.updateTimer(a.formatTimer()) }, 1e3) } }, { key: "stopClock", value: function () { this.intervalId && (clearInterval(this.intervalId), this.intervalId = null) } }, { key: "addTime", value: function (a) { this.timer = 30 } }, { key: "formatTimer", value: function () { var a = Math.floor(this.timer / 60), e = this.timer % 60; return (a < 10 ? "0" + a : a.toString(10)) + ":" + (e < 10 ? "0" + e : e.toString(10)) } }, { key: "_success", value: function () { o.vitoriaScreen.render(this.score, this._questoes.length, this.htmlContainer) } }, { key: "_lose", value: function (a) { "erro" === a ? s.erroScreen.render(this.score, this._questoes.length, this.htmlContainer) : n.tempoScreen.render(this.htmlContainer) } }]), e
        }()
    }

        , { "../interfaces/index": 2, "../telas/erro.screen": 7, "../telas/ganhou.screen": 8, "../telas/questao.screen": 9, "../telas/splash.screen": 10, "../telas/tempo.screen": 11, "../utils/routes": 13 }], 6: [function (a, e, t) {
            "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); t.banco = {
                Weverton: {
                    0: [{ id: 1, pergunta: "O que significa a sigla B3??", dificuldade: 0, resposta: "Brasil, Bolsa, Balcão", falsas: ["Brasil, Bolsa, Bal", "Brasil, Bolivia, Barcelona", "Brasil, Banco, Balcão", "Banco, Bolsa, Balcão"], conjunto: "Weverton" },



                    { id: 2, pergunta: "Quem exerce o controle de crédito na economia?", dificuldade: 0, resposta: "Bacen ", falsas: ["Banco do Brasil"], conjunto: "Weverton" }, 
                    
                    { id: 3, pergunta: "As Sociedades Distribuidoras de Títulos e Valores Mobiliários são fiscalizadas?", dificuldade: 0, resposta: "Apenas CVM ", falsas: ["Sul", "CMN e Bacen"], conjunto: "Weverton" }, 
                    
                    { id: 4, pergunta: "Responsável por regular, fiscalizar e garantir o bom funcionamento dos mercados de capitais nas Bolsas de Valores?", dificuldade: 0, resposta: "CVM", falsas: ["Um caju", "Bovespa",], conjunto: "Weverton" }, 
                    
                    { id: 5, pergunta: "Onde fica a sede da bolsa de valores?", dificuldade: 0, resposta: "São Paulo", falsas: ["Bahia",], conjunto: "Weverton" }, 
                    
                    { id: 6, pergunta: "Uma sociedade de crédito imobiliário, uma financeira e um banco de investimento se unirão formando um banco múltiplo. Este banco deverá?", dificuldade: 0, resposta: "Operar com um CNPJ para cada carteira, mas podendo publicar um único balanço", falsas: ["Operar com um único CNPJ e publicar um balanço para cada carteira"], conjunto: "Weverton" }, 
                    
                    { id: 7, pergunta: "Presidente do CMN (Conselho Monetário Nacional)?", dificuldade: 0, resposta: "Ministro da Fazenda", falsas: ["Presidente do Bacen"], conjunto: "Weverton" }, 
                    
                    { id: 8, pergunta: "A respeito do Sistema Financeiro Nacional (SFN)?", dificuldade: 0, resposta: "Formado por instituições normativas, executivas, fiscalizadoras, dentro outras múltiplas outras distintas instituições do subsistema de intermediação. ", falsas: ["Formado pelo Bacen e CV"], conjunto: "Weverton" }, 
                    
                    { id: 9, pergunta: "O Conselho Monetário Nacional, dentre outras funções, deve?", dificuldade: 0, resposta: "Regular os índices de inflação, a fim de evitar desequilíbrios", falsas: ["Fiscalizar os mercados de capitais"], conjunto: "Weverton" }, 
                    
                    { id: 10, pergunta: "Órgão responsável pela regulamentação e fiscalização dos Fundos de Investimento?", dificuldade: 0, resposta: "CVM", falsas: ["Susep"], conjunto: "Weverton" }, 
                    
                    { id: 11, pergunta: "Qual o país do mundo com a maior extensão territorial?", dificuldade: 0, resposta: "Rússia", falsas: ["Canadá"], conjunto: "Weverton" }, 
                    
                    { id: 12, pergunta: "As Distribuidoras de Títulos e Valores Mobiliários estão autorizadas a executar os serviços abaixo, com exceção de?", dificuldade: 0, resposta: "Administrar títulos de capitalização", falsas: ["Praticar operações no mercado de câmbio de taxas flutuantes"], conjunto: "Weverton"
                    }, 
                    
                    { id: 13, pergunta: "Dentre as funções da Comissão de Valores Mobiliários (CVM)?", dificuldade: 0, resposta: "Garantir o bom funcionamento da bolsa de valores", falsas: ["Aprovar orçamentos de crédito da economia"], conjunto: "Weverton" }, 
                    
                    { id: 14, pergunta: "Instituição financeira autorizada a administrar Fundos e Clubes de Investimento?", dificuldade: 0, resposta: "Corretora de Títulos e Valores Mobiliários", falsas: ["Banco Central"], conjunto: "Weverton" }, 
                    
                    { id: 15, pergunta: "Responsável por receber os depósitos compulsórios: Correto Notas relativas a este envio?", dificuldade: 0, resposta: "Bacen ", falsas: ["Dólar"], conjunto: "COPOM" }, 
                    
                    { id: 16, pergunta: "Uma das funções do Banco Central?", dificuldade: 0, resposta: "Oferecer redesconto de liquidez ", falsas: ["Desenvolver o mercado de valores mobiliários"], conjunto: "Weverton" }, 
                    
                    { id: 17, pergunta: "É responsabilidade do Banco Central?", dificuldade: 0, resposta: "Decidir a taxa de juros de redesconto ", falsas: ["Desenvolver o mercado de valores mobiliários"], conjunto: "Weverton" }, 
                    
                    {id: 18, pergunta: "Atuam na intermediação nos pregões de bolsa de valores e mercadorias?", dificuldade: 0, resposta: "Corretoras e Distribuidoras de Valores Mobiliários ", falsas: ["Corretoras de Valores Mobiliários"], conjunto: "Weverton" }, 
                    
                    { id: 19, pergunta: "Competência exclusiva do Bacen?", dificuldade: 0, resposta: "Fiscalizar as instituições financeiras", falsas: ["Aprovar os orçamentários de moeda e crédito"], conjunto: "Weverton" }, 
                    
                    { id: 20,  pergunta: "Responsável por autorizar (o funcionamento) e fiscalizar as instituições financeiras?", dificuldade: 0, resposta: "Banco Central", falsas: ["Comissão de Valores Mobiliários"], conjunto: "Weverton" }, 
                    
                    { id: 21, pergunta: "Dentre as carteiras de um banco múltiplo, a carteira que apenas os bancos públicos podem operar é?", dificuldade: 0, resposta: "Desenvolvimento", falsas: ["Comercial"], conjunto: "Weverton" }, 
                    
                    { id: 22, pergunta: "Efetuar, em nome do Tesouro Nacional, compra e venda de títulos públicos é uma atribuição?", dificuldade: 0, resposta: "Do Banco Central do Brasil – Bacen ", falsas: ["Do Sistema Especial de Liquidação e Custódia – Selic"], conjunto: "Weverton" }, 
                    
                    { id: 23, pergunta: "O mercado de previdência aberta e capitalização é supervisionado pelo órgão?", dificuldade: 0, resposta: "Susep", falsas: ["CNSP (Conselho Nacional de Seguros Privados)"], conjunto: "Weverton" }, 
                    
                    { id: 24, pergunta: "Para operar no mercado finaceiro exige ensino superior", dificuldade: 0, resposta: "Errado", falsas: ["Certo"], conjunto: "Weverton" }, 
                    
                    { id: 25, pergunta: " O efeito manada no gera resultados expressivos?", dificuldade: 0, resposta: "Sim", falsas: ["Não"], conjunto: "Weverton" }, 
                    
                    
                    { id: 26, pergunta: "Com relação ao BACEN e suas funções, assinale a alternativa correta?", dificuldade: 0, resposta: "Comprar e vender títulos públicos federais para exercer a política monetária.", falsas: ["Fiscalizar as emissões de valores mobiliários."], conjunto: "Weverton"
                    }, 
                    
                    { id: 27, pergunta: "Mercado Financeiro é de alto risco?", dificuldade: 0, resposta: "Certo", falsas: ["Errado"], conjunto: "Weverton" }, 
                    
                    { id: 28, pergunta: "Quanto maior exposição ao risco maior a lucratividade?", dificuldade: 0, resposta: "Certo", falsas: ["Errado"], conjunto: "Weverton" }, 
                    
                    { id: 29, pergunta: "A melhor forma de aprender operar é ir direto para conta real?", dificuldade: 0, resposta: "Errado", falsas: ["Certo"], conjunto: "Weverton" }, 
                    
                    { id: 30, pergunta: "Mercado de ações envolve baixo risco?", dificuldade: 0, resposta: "Errado", falsas: ["Certo"], conjunto: "Weverton" }, 
                    
                    {
                        id: 31, pergunta: "Quanto mais volatil o mercado, melhor de operar ?", dificuldade: 0, resposta: "Errado", falsas: ["Certo"], conjunto: "Weverton" }, 
                    
                    { id: 32, pergunta: "No mercado Finaceiro existe um padrão de mercado?", dificuldade: 0, resposta: "Errado", falsas: ["Certo"], conjunto: "Weverton" }, 
                    
                    { id: 33, pergunta: "Proteger seu capital é uma forma de investimento?", dificuldade: 0, resposta: "Certo", falsas: ["Errado"], conjunto: "Weverton" }, 
                    
                    
                    
                    { id: 35, pergunta: "A politica influência diretamento na ecomomia de qualquer país.", dificuldade: 0, resposta: "Certo", falsas: ["Errado"], conjunto: "Weverton" }]
                }
            }
        }, {}], 7: [function (a, e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); t.erroScreen = { template: '\n    <div class="geral splash2">\n        <div class="pure-g">\n            <div class="pure-u-1">\n                <h1>{{ mensagem }}</h1>\n                <h2>Estude mais!</h2>\n                <br /><a class="resposta" href="index2.html">jogar de novo</a>\n <h2></h2>\n                <br /><a class="resposta" href="https://www.google.com.br/">Assistir Anúncios</a>            </div>\n        </div>\n    </div>\n    ', render: function (a, e) { (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : document.body).innerHTML = this.getHTML(a, e) }, makeMensagem: function (a, e) { return 0 === a ? "Você não acertou nenhuma das " + e + " perguntas" : "Ops! Você acertou apenas<br> " + a + " de " + e + " perguntas..." }, getHTML: function (a, e) { return this.template.replace("{{ mensagem }}", this.makeMensagem(a, e)).replace("{{ total }}", e) } } }, {}], 
        
        
        8: [function (a, e, t) {
            "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); t.vitoriaScreen = {
                template: '\n<div class="geral splash">\n<div class="pure-g">\n<div class="pure-u-1">\n <h1>Parabéns! Você acertou<br>{{ acertos }} perguntas!</h1>\n<h2>Você sabe muito sobre o mercado financeiro.<br />&#xa9; Criador Weverton Pontes</h2>\n<br /><a class="resposta" href="index2.html">jogar de novo</a>\n <a class="resposta" href="index2.html">Assistir Anúncios</a></div>\n</div>\n</div>', render: function (a, e) { (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : document.body).innerHTML = this.getHTML(a, e) }, getHTML: function (a, e) { return this.template.replace("{{ acertos }}", a < e ? a + " de " + e : "todas as") }
            }
        }, {}], 9: [function (a, e, t) {
            "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.QuestaoScreen = void 0; var s = function (a, e) { if (Array.isArray(a)) return a; if (Symbol.iterator in Object(a)) return function (a, e) { var t = [], i = !0, o = !1, s = void 0; try { for (var n, r = a[Symbol.iterator](); !(i = (n = r.next()).done) && (t.push(n.value), !e || t.length !== e); i = !0); } catch (a) { o = !0, s = a } finally { try { !i && r.return && r.return() } finally { if (o) throw s } } return t }(a, e); throw new TypeError("Invalid attempt to destructure non-iterable instance") }, o = a("../utils/random"), n = window.jQuery; t.QuestaoScreen = {
                template: '\n    <div class="geral {{ classe }}">\n        <div class="wrapper">\n                <div class="pure-g">\n                {{ pergunta }}\n                {{ timer }}\n                {{ questoes }}\n                {{ foto }}\n                {{ paginacao }}\n                <div class="pure-u-1-4">\n                    <div class="sair">\n                        <p><a href="#0">sair <img src="img/sair.png"></a></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    ', timer: '\n         <div class="pure-u-1-4 timer">\n            <p>{{ tempo }}</p>\n        </div>\n    ', pergunta: '\n        <div class="pure-u-3-4 pergunta">\n            <h1>{{ texto }}</h1>\n        </div>\n    ', questoes: '\n         <div class="pure-u-1-2 questoes">\n            {{ questao }}\n        </div>\n    ', questao: '\n        <button class="resposta">{{ texto }}</button>\n    ', foto: '\n        <div class="pure-u-1-2 foto">\n            <img src="{{ src }}">\n        </div>\n    ', paginacao: '\n        <div class="pure-u-3-4">\n            <ul class="perguntas">\n                <li>1</li>\n                <li>2</li>\n                <li>3</li>\n                <li>4</li>\n                <li>5</li>\n                <li>6</li>\n                <li>7</li>\n            </ul>\n            <div class="linha"></div>\n        </div>\n    ', getHTML: function (a, e) { var t = this.template, i = this.classes[a.conjunto] || "fundo" + (0, o.getRandomInteger)(1, 3); return console.log("classe", i), t = t.replace("{{ classe }}", i).replace("{{ pergunta }}", this.pergunta.replace("{{ texto }}", a.pergunta)).replace("{{ timer }}", this.timer.replace("{{ tempo }}", e)).replace("{{ questoes }}", this.questoes.replace("{{ questao }}", this._buildOpcoes(a.opcoes))).replace("{{ foto }}", a.imagemSrc ? this.foto.replace("{{ src }}", "img/" + a.imagemSrc) : '<div class="pure-u-1-2 foto"></div>').replace("{{ paginacao }}", this.paginacao) }, classes: { brasil: "fundo2", paises: "fundo1", biomas: "fundo3" }, _buildOpcoes: function (a) { var e = this; return a.map(function (a) { return e.questao.replace("{{ texto }}", a) }).join("") }, render: function (a, e) { var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : document.body, i = this.getHTML(a, e); n(t).html(i), this.updatePaginacao(0) }, updateScreen: function (a, e, t) { this.updateQuestao(a), this.updateImagem(a), this.updateTimer(e), this.updatePaginacao(t) }, updateImagem: function (a) { a.imagemSrc ? n(".foto").replaceWith(this.foto.replace("{{ src }}", "img/" + a.imagemSrc)) : n(".foto").html("") }, updateQuestao: function (a) { n(".pergunta h1").text(a.pergunta), n(".questoes").html(n(this._buildOpcoes(a.opcoes))); var e = this.classes[a.conjunto] || "fundo" + (0, o.getRandomInteger)(1, 3); n(".geral").hasClass(e) || n(".geral").attr("class", "geral " + e) }, updatePaginacao: function (t) { n(".perguntas").find("li").map(function (a, e) { a < t && n(e).attr("class", "passada"), a === t && n(e).attr("class", "atual"), t < a && n(e).attr("class", "") }) }, updateTimer: function (a) {
                    var e = a.split(":").map(function (a) { return parseInt(a, 10) }), t = s(e, 2), i = t[0], o = t[1]; 0 === i && o < 10 ? n(".timer p").css("color", "red") : n(".timer p")

                        .css("color", "black"), n(".timer p").text(a)
                }
            }
        }, { "../utils/random": 12 }], 
        
        
        10: [function (a, e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); t.splashScreen = { template: '<div class="geral splash">\n            <div class="pure-g">\n                <div class="pure-u-1">\n                    <img " src/">\n                    <h1>Mostre que você sabe tudo sobre o Mercado Financeiro!</h1>\n                    <button class="resposta">Começar</button> \n                </div>\n            </div>\n        </div>', render: function (a, e) { (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : document.body).innerHTML = this.getHTML(a, e) }, getHTML: function (a, e) { return this.template.replace("{{ numero }}", a < e ? a : "todas as") } } }, {}], 
        
        
        
        
        
        11: [function (a, e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); t.tempoScreen = { template: '\n    <div class="geral splash2">\n        <div class="pure-g">\n            <div class="pure-u-1">\n                <h3>Seu tempo acabou!</h3>\n                <br /><a class="resposta" href="index2.html">jogar de novo</a>\n            </div>\n        </div>\n    </div>\n    ', render: function () { (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document.body).innerHTML = this.getHTML() }, getHTML: function () { return this.template } } }, {}], 
        
        
        
        
        12: [function (a, e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.getRandomInteger = function (a, e) { return Math.floor(Math.random() * (e - a + 1) + a) }, t.shuffleArray = function (a) { for (var e = a.length - 1; 0 < e; e--) { var t = Math.floor(Math.random() * (e + 1)), i = a[e]; a[e] = a[t], a[t] = i } return a } }, {}], 
        
        
        
        
        13: [function (a, e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.goToHash = function (a) { window.location.hash = a }, t.getHash = function () { return window.location.hash.replace("#", "").trim() } }, {}]
}, {}, [3]);