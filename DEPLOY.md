# Uputstvo za publikovanje sajta

## Opcija 1: GitHub Pages (PREPORUČENO)

### Korak 1: Kreirajte GitHub nalog
1. Idite na https://github.com
2. Kliknite "Sign up" i kreirajte nalog

### Korak 2: Kreirajte novi repository
1. Kliknite "+" u gornjem desnom uglu → "New repository"
2. Ime: `rb-team-website` (ili bilo koje ime)
3. Ostavite "Public" (za besplatno hostovanje)
4. NE kreirajte README, .gitignore ili licencu
5. Kliknite "Create repository"

### Korak 3: Upload fajlova
1. Na stranici repository-ja, kliknite "uploading an existing file"
2. Prevucite sve fajlove:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `images/` folder (sa logo.png unutra)
   - `README.md` (opciono)
3. Kliknite "Commit changes"

### Korak 4: Aktivirajte GitHub Pages
1. Idite u Settings (gornji meni repository-ja)
2. U levom meniju kliknite "Pages"
3. Pod "Source" izaberite "main" branch
4. Kliknite "Save"
5. Sačekajte 1-2 minuta

### Korak 5: Vaš sajt je dostupan!
URL će biti: `https://vase-korisnicko-ime.github.io/rb-team-website`

---

## Opcija 2: Netlify (NAJBRŽE)

### Korak 1: Kreirajte nalog
1. Idite na https://www.netlify.com
2. Kliknite "Sign up" (možete sa GitHub nalogom)

### Korak 2: Deploy sajt
1. Kliknite "Add new site" → "Deploy manually"
2. Prevucite ceo folder projekta u prozor
3. Sačekajte da se upload završi

### Korak 3: Vaš sajt je dostupan!
Netlify će automatski generisati URL (npr. `random-name-123.netlify.app`)
Možete promeniti ime u Site settings → Change site name

---

## Opcija 3: Vercel

### Korak 1: Kreirajte nalog
1. Idite na https://vercel.com
2. Sign up sa GitHub nalogom

### Korak 2: Deploy
1. Kliknite "Add New Project"
2. Importujte GitHub repository ILI drag & drop fajlove
3. Kliknite "Deploy"

---

## Važne napomene:

1. **Logo mora biti postavljen**: Pre deploy-a, obavezno postavite `logo.png` u `images/` folder
2. **Testirajte lokalno**: Otvorite `index.html` u browser-u pre deploy-a
3. **HTTPS je automatski**: Sve opcije daju besplatni HTTPS sertifikat
4. **Ažuriranje**: Nakon promena, samo upload-ujte nove fajlove

---

## Koja opcija je najbolja?

- **GitHub Pages**: Najbolje ako već imate GitHub nalog
- **Netlify**: Najbrže za početak (drag & drop)
- **Vercel**: Odlično ako koristite moderne alate

Sve opcije su potpuno besplatne za statičke sajtove!

