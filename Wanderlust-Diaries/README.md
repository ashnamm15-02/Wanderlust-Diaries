# WanderWorld – My Personal Travelogue

A beginner-friendly, responsive travelogue website made with HTML, CSS and basic JavaScript.

## Project structure

```text
WanderWorld-Travelogue/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── travel photographs
└── README.md
```

## Run locally in VS Code

1. Open this folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Choose **Open with Live Server**.

You can also open `index.html` directly in a browser.

## Personalise the website

- In `index.html`, personalise the About paragraph, destinations and story text.
- Add your photographs to `images/` and use their relative paths, such as `images/kollam436.jpeg`, in the image `src` attributes.
- Update the image alt text and captions so they accurately describe each photograph.
- Replace `your-email@example.com` with an email address you want visitors to use.
- Keep destination names in the cards, story labels and map buttons consistent with your trips.

## Publish with GitHub Pages

1. Create a **public** GitHub repository, for example `WanderWorld-Travelogue`.
2. Open this project folder in VS Code.
3. Open Terminal → New Terminal and run:

```bash
git init
git add .
git commit -m "Create my travelogue website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/WanderWorld-Travelogue.git
git push -u origin main
```

4. On GitHub, open the repository → **Settings** → **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch `main` and folder `/ (root)`, then click **Save**.
7. After deployment, your site will be at:

`https://YOUR_USERNAME.github.io/WanderWorld-Travelogue/`

Replace `YOUR_USERNAME` with your GitHub username.

## Notes

- The map embed uses Google Maps search and does not require an API key.
- Travel photographs are stored locally in `images/`; the map embed and web fonts need an internet connection.
- This is a static website. A real contact form, login system or database would need a backend or a third-party service.
