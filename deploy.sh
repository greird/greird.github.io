#!/usr/bin/env sh

# abort on errors
set -e

# build
gulp build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.hubertfauconnier.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/greird/greird.github.io.git master:gh-pages

cd -