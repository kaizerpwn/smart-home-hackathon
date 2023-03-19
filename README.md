# 🏠HomeLab web aplikacija napravljena pomoću `Next JS`, `TailwindCSS` &amp; `Node JS` 
___

Za pokretanje ove aplikacije potrebno je da preuzmete ovaj github projekat na svoj uređaj i da pomoću NPM ( node package managera ) instalirate potrebne biblioteke i za server i klijent stranu.

Napomena prije nego što krenete podešavati server ili klijent stranu je da prvo ubacite databazu potrebnu za ovaj projekat koja se nalazi u main direktoriju i zove se smarthome.sql

Kreirajte databazu sa istim imenom, bez ikakve lozinke i `root` korisnikom

# Podešavanje databaze :
Ukoliko koristite phpmyadmin možete preuzeti `SQL datoteku` i kreirati databazu sa imenom `smarthome` i onda klikom na tu databazu i dugme `IMPORT`

# Predstavljeno na slici :
![Screenshot_1](https://user-images.githubusercontent.com/81625008/226169272-14142a59-e024-44a9-8302-9e6113f9022e.png)


# Podešavanje server strane :
`cd server`

`npm install`

Nakon što se preuzmu sve potrebne biblioteke isti projekat pokrećete sa komandom :

`npm start`

# Podešavanje klijent strane :
`cd client`

`npm install`

Nakon što se preuzmu sve potrebne biblioteke isti projekat pokrećete sa komandom :

`npm run build`

Nakon što se kreira build folder možete pokrenuti vaš projekat sa komandom

`npm start`

Također moguće je pokrenuti projekat i u development modu ( gdje će JIT compiler raditi u tom određenom trenutku i kompajlirati sve najnovije izmjene )
