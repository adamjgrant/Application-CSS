# It's like bootstrap for applications (instead of pages)

## Updating node package

`npm publish`

## Updating gem

-1. `gulp`
0. `cp public/css/app.css appcss/app/assets/stylesheets/appcss/`
1. `cd` to `appcss/`
2. `rvm gemset use appcss`
3. Change version in lib/appcss/version.rb
4. `gem build appcss.gemspec`
5. `gem push appcss-x.x.x.gem` (Replace the "x"s)
