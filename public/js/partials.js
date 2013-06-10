angular.module('partials', [])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/mege-menu.html', [
'',
'<div class="mobile-main-nav-padding">',
'  <div class="row top">',
'    <div class="eight columns"><a href="http://zurb.com">',
'        <h4>',
'          <Manage>MiCloud service </Manage>',
'        </h4></a></div>',
'  </div>',
'  <div class="row">',
'    <div class="tablet-padding">',
'      <div id="services" class="three columns property"><a href="http://micloud.tw">',
'          <h4>Services</h4>',
'          <p>We\'ll help you get online products designed better and faster than ever before and set you up for future iterations.</p><span>Let\'s Work Together →</span></a></div>',
'      <div class="show-on-phones"><br><br></div>',
'      <div id="foundation" class="three columns property"><a href="https://portal.micloud.tw">',
'          <h4>Create your own machine </h4>',
'          <p>We developed the most advanced responsive front-end framework in the world and made it free-for-all.</p><span>Discover Foundation →</span></a></div>',
'      <div class="show-on-phones"><br><br></div>',
'      <div id="apps" class="three columns property"><a href="http://zurb.com/apps">',
'          <h4>Other <span class="apps">apps</span></h4>',
'          <p>A powerful design suite that will help you prototype, iterate and collect feedback on your product design.</p><span>Get Started →</span></a></div>',
'      <div class="show-on-phones"><br><br></div>',
'      <div id="expo" class="three columns property"><a href="http://zurb.com/expo">',
'          <h4>Expo</h4>',
'          <p>We think anyone can design great products. We\'ll share our ideas, thoughts and design resources to show you how to do it.</p><span>Learn More →</span></a></div>',
'    </div>',
'  </div>',
'</div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/nav.html', [
'',
'<li ng-class="getClass(\'/todo\')"><a ng-href="#/todo">index </a></li>',
'<li ng-class="getClass(\'/profile\')"><a ng-href="#/profile">Profile </a></li>',
'<li ng-class="getClass(\'/setting\')"><a ng-href="#/setting">Setting </a></li>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/partial1.html', [
'',
'<p>this is Profile page </p>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/partial2.html', [
'',
'<p>This is the Setting for users</p>',
'<p>',
'  Showing of \'interpolate\' filter:',
'  {{ \'Current version is v%VERSION%.\' | interpolate }}',
'</p>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/todo.html', [
'',
'<div ng-app="ng-app">',
'  <h2>Todo</h2>',
'  <div ng-controller="TodoCtrl">',
'    <div class="alert-box"><span>{{remaining()}} of {{todos.length}} remaining</span> [<a href="" ng-click="archive()" style="color:#ff0">archive</a>]</div>',
'    <div class="row">',
'      <div class="small-9 large-4 columns">',
'        <div ng-repeat="todo in todos">',
'          <label for="checkbox">',
'            <input type="checkbox" id="checkbox" ng-model="todo.done"><span class="custom checkbox">{{todo.text}}</span>',
'          </label>',
'        </div>',
'      </div>',
'    </div>',
'    <form ng-submit="addTodo()" class="form-inline">',
'      <div class="row">',
'        <div class="large-6 columns">',
'          <div class="small-9 columns">',
'            <input type="text" ng-model="todoText" size="30" placeholder="add new todo here">',
'          </div>',
'          <div class="small-3 columns">',
'            <input type="submit" value="add" class="button prefix">',
'          </div>',
'        </div>',
'      </div>',
'    </form>',
'  </div>',
'</div>',''].join("\n"));
}]);