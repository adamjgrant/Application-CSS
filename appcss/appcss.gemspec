# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'appcss/version'

Gem::Specification.new do |spec|
  spec.name          = "appcss"
  spec.version       = Appcss::VERSION
  spec.authors       = ["Adam Kochanowicz"]
  spec.email         = ["ajkochanowicz@gmail.com"]
  spec.summary       = %q{Like bootstrap for robust backend applications.}
  spec.description   = %q{Like bootstrap for robust backend applications.}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.6"
  spec.add_development_dependency "rake", "~> 10.0"
end
