#!/usr/bin/env sh

# abort on errors
set -e

gulp build

cd dist

echo 'www.hubertfauconnier.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/greird/greird.github.io.git master

cd -