# React Template

React template for Keeclick _by MalikAza_

## Configuration

### Environment

- Copy the environment file _and correctly fill it_.

```bash
cp .env.example .env
```

- Remove the remote from the template repository.

```bash
git remote remove origin
```

- Change the **name** and **version** in `package.json`.
- Install dependencies.

```bash
yarn
```

### Index.html

- ♻️ Corrects `icon`
- ♻️ Corrects `og:site_name`
- ♻️ _[Optional]_ Corrects `html lang`

### Config

- ♻️ Corrects `@config/defaultHead.conf`

### Example

- 🗑️ Deletes `@app/routes/example.page`
- 🗑️ Deletes `@assets/images/*`
- 🗑️ Deletes `public/vite.svg`
- 🗑️ Deletes `@assets/styles/examples.css`
- ♻️ Corrects `@assets/styles/index.css`
- ✏️ Make a proper **first page**
- ♻️ Corrects `@config/routes.conf` (with the first page)

### Further

- 🎨 Custom `@app/routes/notFound.page`
- 🎨 Custom CSS for `@app/routes/error.page`

Now you're good to go ✨ 🚀
