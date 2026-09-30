# DevLearn

Plateforme EdTech pour apprendre l'informatique.

## Lancer le projet plus tard

```bash
npm install
cp .env.example .env
# Remplacez DATABASE_URL par votre URL PostgreSQL
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

Ouvrez ensuite http://localhost:3000. La page d'inscription est disponible sur http://localhost:3000/register.

Le mot de passe doit contenir au moins 8 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial. Les mots de passe sont hachés avant d'être enregistrés.
