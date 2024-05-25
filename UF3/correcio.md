### Repte 1 - Validació de Formularis (4p)

1. **Totes les validacions realitzades mitjançant JS (0,5p)**

   - **Complert**: Les validacions es fan exclusivament amb JavaScript. No s'utilitzen validacions HTML.
   - **Puntuació**: 0,5/0,5

2. **Ús d'almenys tres esdeveniments diferents (0,5p)**

   - **No complert**: Només es fa ús de l'esdeveniment `submit`. Falten altres esdeveniments com `input`, `change`, `focus`, `blur`.
   - **Puntuació**: 0/0,5

3. **Validacions correctes - 1a Part (1p)**

   - **Nom i Cognom**: La validació del nom està bé, però la del cognom no és correcta i no segueix el regex requerit.
   - **Email**: La validació d'email és correcta.
   - **Edat**: La validació d'edat no cobreix tots els requisits especificats.
   - **Missatge**: La validació del missatge no compleix els requisits, ja que només valida majúscules.
   - **Puntuació**: 0,5/1

4. **Validacions - 2a Part (1p)**

   - **Gènere**: La validació de gènere no està implementada.
   - **Edat**: Es mostra un `alert` si l'usuari és menor d'edat, però no hi ha una validació robusta.
   - **Missatge**: La validació del missatge no és correcta.
   - **Puntuació**: 0,5/1

5. **Validacions - 3a Part (1p)**
   - **Producte**: La validació del producte no està implementada.
   - **Quantitat**: La validació de la quantitat no està implementada.
   - **Puntuació**: 0/1

### Puntuació total del Repte 1: 1,5/4

**Comentaris**

- No es demanava fer-ho tot a través de Regex... no és precisament la millor estratègia.
- Es recomana millorar la validació dels camps del formulari, incloent l'ús de més esdeveniments per proporcionar feedback immediat a l'usuari.
- Les funcions de validació haurien de ser més robustes i complir amb els requisits especificats.
- Els missatges d'error haurien de ser dinàmics i mostrar-se al costat dels camps corresponents.

### Repte 2 - Afegir Productes al Formulari (5p)

1. **Carregar els productes disponibles (2p)**

   - **No complert**: Els productes no es carreguen correctament al formulari a causa de l'ús incorrecte de `createElement("aveure")` en lloc de `createElement("option")`.
   - **Puntuació**: 0/2

2. **Afegir productes a la llista (2p)**

   - **No implementat**: No hi ha cap funcionalitat per afegir productes seleccionats a una llista.
   - **Puntuació**: 0/2

3. **Finalització del formulari (1p)**
   - **No implementat**: No es valida el comportament lògic ni es mostra un missatge personalitzat a l'usuari.
   - **Puntuació**: 0/1

### Puntuació total del Repte 2: 0/5

**Comentaris**

- És important corregir la creació d'elements dins del formulari.
- Implementar la finalització lògica del formulari amb missatges personalitzats per a l'usuari.

### Puntuació global per la qualitat del codi, estructura, llegibilitat i comentaris (1p)

- **Qualitat del codi**: El codi presenta diversos errors de sintaxi i lògica.
- **Estructura i llegibilitat**: El codi necessita més comentaris i una millor estructura per millorar la llegibilitat.
- **Comentaris**: Hi ha alguns comentaris, però no són suficients per a una comprensió completa del codi.
- **Puntuació**: 0,5/1
