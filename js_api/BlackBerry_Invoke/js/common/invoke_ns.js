/*
 * Copyright 2010 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function () {
	
	function Invoke(disp) {		
		/*
		 * This function will launch another application 
		 */
		this.constructor.prototype.invoke = function(appType, args) { return disp.invoke(appType, args); };
		
		/*
		 * Constructor for a new CameraArguments object.
		 * readwrite  property  Number   view
		 */
		this.constructor.prototype.CameraArguments = function() {
			this.view = 0;	
		};
		
		/*
		 * Define constants for CameraArguments
		 */
		this.constructor.prototype.CameraArguments.prototype.__defineGetter__("VIEW_CAMERA", function() { return 0; });	
		this.constructor.prototype.CameraArguments.prototype.__defineGetter__("VIEW_RECORDER", function() { return 1; });
		
		/* Open Browser application on the BlackBerry PlayBook.
		 * @param url The desired url to bring up in the browser.
		 */
		this.constructor.prototype.BrowserArguments = function(url) {
			this.url = url;
		};
	};
	
	/*
	 * Define constants for appType
	 */
	Invoke.prototype.__defineGetter__("APP_ADDRESSBOOK", function() { return 0; });
	Invoke.prototype.__defineGetter__("APP_BLUETOOTH_CONFIG", function() { return 1; });
	Invoke.prototype.__defineGetter__("APP_CALCULATOR", function() { return 2; });
	Invoke.prototype.__defineGetter__("APP_CALENDAR", function() { return 3; });
	Invoke.prototype.__defineGetter__("APP_CAMERA", function() { return 4; });
	Invoke.prototype.__defineGetter__("APP_MEMOPAD", function() { return 5; });
	Invoke.prototype.__defineGetter__("APP_MESSAGES", function() { return 6; });
	Invoke.prototype.__defineGetter__("APP_PHONE", function() { return 7; });
	Invoke.prototype.__defineGetter__("APP_SEARCH", function() { return 8; });
	Invoke.prototype.__defineGetter__("APP_TASKS", function() { return 9; });
	Invoke.prototype.__defineGetter__("APP_BROWSER", function() { return 10; });
	Invoke.prototype.__defineGetter__("APP_JAVA", function() { return 11; });
	Invoke.prototype.__defineGetter__("APP_MUSIC", function() { return 12; });
	Invoke.prototype.__defineGetter__("APP_PHOTOS", function() { return 13; });
	Invoke.prototype.__defineGetter__("APP_VIDEOS", function() { return 14; });
	Invoke.prototype.__defineGetter__("APP_APPWORLD", function() { return 15; });	
	
	blackberry.Loader.javascriptLoaded("blackberry.invoke", Invoke);
})();
