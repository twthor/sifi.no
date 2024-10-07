- Fork repositoryet:

- Plugins å installere: ESLint, Prettier ESLint, Prettier - code fromatter.

- Ctrl + Shift + P -> settings -> “open workspace settings” (IKKE JSON) -> Søk på “format” og huk av for “Editor: format on save”.

Lag .vscode mappe utenfor sifi-mappen -> lag settings.json fil -> lim inn dette:

```javascript
{
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true
}
```

Installer nødvendige dependencies

```shell
npm install slugs
npm install -D prettier
```

Kompiler og vis nettsiden på localhost:

```shell
npm run dev
```
