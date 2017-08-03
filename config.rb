$LOAD_PATH.unshift(File.expand_path(File.dirname(__FILE__)))


# Require any additional compass plugins here.
require 'susy'
require 'breakpoint'

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "image"
javascripts_dir = "js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :compact

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

Encoding.default_external = 'utf-8'
# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

# callback - on_sprite_saved
# http://compass-style.org/help/tutorials/configuration-reference/
on_sprite_saved do |filename|
	if File.exists?(filename)
		# Post process sprite image
		postprocesspng(filename)
	end
end

# fn - Post processing for pngs
# http://compass-style.org/help/tutorials/configuration-reference/
# http://pngquant.org/
# http://advsys.net/ken/utils.htm & http://nicj.net/2012/05/15/pngoutbatch
# http://optipng.sourceforge.net/
def postprocesspng(filename)
	if File.exists?(filename)
		sleep 1
		#optimize(filename, utils_path + "pngquant/pngquant -iebug -verbose -force -ext .png 256")
		#optimize(filename, utils_path + "pngout/pngoutbatch.cmd")
		optimize(filename, "optipng -o7 -verbose")
	end
end

# fn - Run optimize command line for a specified script
# https://gist.github.com/2403117
def optimize(filename, script)
	if File.exists?(filename)
		sleep 1
		system script + " " + filename
	end
end
#Encoding.default_external = 'utf-8'
