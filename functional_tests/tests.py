from .base import FunctionalTest
import sys
class LoginScreenTest(FunctionalTest):

    def test_see_login_screen(self):
        self.browser.get(self.server_url)
        assert 'boilerplate angular app with django backend' in self.browser.title