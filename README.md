## Host On Github...
- Link: https://jhaman-09.github.io/portfolio/

> Upload files to github

        git inint
        git status
        git add .
        git commit -m "initial commit"
        git branch -M 'main
        git remote add origin "url"
        git push -u origin 'main'

> Install package

        npm install gh-pages --save-dev 

> Create website-url like : "https://jhaman-09.github.io/portfolio"

        {
          "homepage" : "website-url"
          "name": "food",
          "version": "0.1.0",
          "private": true,    

          scripts {               
            "predeploy":"npm run build"
            "deploy":"gh-pages -d build"
          }
        }

> Now Deploye it

        npm run deploy