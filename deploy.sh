#!/usr/bin/env sh

# abort on errors
set -e

gulp build

git add -A
git commit -m 'deploy'
git push https://github.com/greird/greird.github.io.git master:develop

cd dist

echo 'www.hubertfauconnier.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/greird/greird.github.io.git master

cd -