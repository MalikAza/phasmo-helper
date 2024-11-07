# React Template
React template for Keeclick *by MalikAza*
## Configuration
### Environment
Copy the environment file *and correctly fill it*.
```bash
cp .env.example .env
```

Remove the remote from the template repository.
```bash
git remote remove origin
```

Change the **name** and **version** in `package.json`
### Index.html
- ♻️ Corrects `icon`
- ♻️ Corrects `og:site_name`
- ♻️ *[Optional]* Corrects `html lang`
### Config
- ♻️ Corrects `@config/defaultHead.conf`
### Example
- 🗑️ Deletes `@app/routes/example.page`
- 🗑️ Deletes `@assets/images/*`
- 🗑️ Deletes `@assets/styles/examples.css`
- ♻️ Corrects `@assets/styles/index.css`
- ✏️ Make a proper **first page**
- ♻️ Corrects `@config/routes.conf` (with the first page)
### Further
- 🎨 Custom `@app/routes/notFound.page`
- 🎨 Custom CSS for `@app/routes/error.page`

Now you're good to go ✨ 🚀