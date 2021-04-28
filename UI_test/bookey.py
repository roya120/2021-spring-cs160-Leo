from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
import time


class Bookey(object):
    def __init__(self):
        self.driver = webdriver.Chrome('./chromedriver')

    def open_bookey(self):
        print("Opening Bookey:")
        self.driver.get('http://localhost:3000')
        time.sleep(3)
        if self.driver.find_element_by_link_text("Login/Signup"):
            return True
        else:
            return False


    def go_to_login(self):
        print("Going to Login Page:")
        time.sleep(2)
        open_login = self.driver.find_element_by_link_text("Login/Signup")
        open_login.click()
        if self.driver.find_element_by_class_name("registerbtn"):
            return True
        else:
            return False

    def login(self, username, password):
        print("Loging with valid account:")
        login = self.driver.find_element_by_link_text("Login/Signup")
        login.click()
        try:
            email = self.driver.find_element_by_id("email")
            email.send_keys(username)
            pw = self.driver.find_element_by_id("password")
            pw.send_keys(password)
            login_button = self.driver.find_element_by_class_name("registerbtn")
            login_button.click()
            time.sleep(2)
            if username and password and self.driver.find_element_by_class_name("loggedInClass"):
                return True
            elif (not password or not username) and self.driver.find_element_by_class_name("errMsg"):
                return True
        except NoSuchElementException:
            return False

    def close(self):
        self.driver.close()


class TestLeo:
    def test_open_bookey(self):
        sc = Bookey()
        assert sc.open_bookey()
        sc.close()

    def test_go_to_login(self):
        sc = Bookey()
        sc.open_bookey()
        assert sc.go_to_login()
        sc.close()

    def test_valid_login(self):
        sc = Bookey()
        sc.open_bookey()
        sc.go_to_login()
        assert sc.login("ramjadi1@yahoo.com", "123456")
        sc.close()

    def test_invalid_login_1(self):
        sc = Bookey()
        sc.open_bookey()
        sc.go_to_login()
        assert sc.login("ramjadi1@yahoo.com", "")
        sc.close()

    def test_invalid_login_2(self):
        sc = Bookey()
        sc.open_bookey()
        sc.go_to_login()
        assert sc.login("", "")
        sc.close()


if __name__ == '__main__':
    ex = Bookey()
    ex.open_bookey()

