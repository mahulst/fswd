# thinkster-django-angular-boilerplate

## Installation

#creating nginx conf file
#sed "s/SITENAME/www.live.fsdw.com/g" deploy_tools/nginx.template.conf | sudo tee /etc/nginx/sites-available/www.live.fsdw.com

*NOTE: Requires [virtualenv](http://virtualenv.readthedocs.org/en/latest/),
[virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/) and
[Node.js](http://nodejs.org/).*

* Fork this repository.
* `$ git clone git@github.com:<your username>/thinkster-django-angular-boilerplate.git`
* `$ mkvirtualenv thinkster-djangular`
* `$ cd thinkster-django-angular-boilerplate/`
* `$ pip install -r requirements.txt`
* `$ npm install -g bower`
* `$ npm install`
* `$ bower install`
* `$ python manage.py migrate`
* `$ python manage.py runserver`

