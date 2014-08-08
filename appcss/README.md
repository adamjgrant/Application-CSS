# Installing

1. `gem install appcss`
2. Load the css with `<%= stylesheet_link_tag asset_path "appcss/app.css" %>`
3. Add the following to config/initializers/assets.rb  `Rails.application.config.assets.precompile += %w( appcss/app.css )`
