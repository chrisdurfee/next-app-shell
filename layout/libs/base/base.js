/**
 * Base Framework
 * @version 2.0.0
 * @author Chris Durfee
 * @file This is a javascript framework to allow complex
 * functions to work in many browsers and versions.
 */

(function(global)
{
	"use strict";

	/* this will check to stop setup if already setup */
	if(global.base)
	{
		return false;
	}

	/**
	 * base framework constructor
	 * @class
	 */
	var Base = function()
	{
		/**
		 * @member {string} version
		 */
		this.version = '2.0.0';

		/**
		 * @member {array} errors
		 */
		this.errors = [];
	};

	Base.prototype =
	{
		/**
		 * @constructor
		 */
		constructor: Base,

		/**
		 * this will augement the base framework with new functionality.
		 *
		 * @param {object} methods The new methods to add.
		 * @return {object} An instance of base.
		 */
		augment: function(methods)
		{
			if(!methods || typeof methods !== 'object')
			{
				return this;
			}

			var prototype = this.constructor.prototype;
			for(var property in methods)
			{
				if(methods.hasOwnProperty(property))
				{
					prototype[property] = methods[property];
				}
			}
			return this;
		}
	};

	/**
	 * This will return the base prototype to allow the module
	 * to be added to base as a module.
	 *
	 * @static
	 * @return {object} the base prototype.
	 */
	Base.prototype.extend = (function()
	{
		return Base.prototype;
	})();

	/**
	 * This is the instance of base that all modules will use.
	 * @global
	 */
	var base = global._b = global.base = new Base();

	/* this will add the object creating and extending methods
	to allow classes to be created in es5 */
	base.augment(
	{
		/**
		 * This will convert a nodelist into an array.
		 *
		 * @param {object} list
		 * @return {array}
		 */
		listToArray: function(list)
		{
			return Array.prototype.slice.call(list);
		},

		/**
		 * This will override a method function with a new function.
		 *
		 * @param {object} obj The object being modified.
		 * @param {string} methodName the method name being overriden.
		 * @param {function} overrideMethod The new function to call.
		 * @param {array} args The args to pass to the first function call.
		 *
		 * @return {*} The results of the function being called.
		 */
		override: function(obj, methodName, overrideMethod, args)
		{
			return (obj[methodName] = overrideMethod).apply(obj, this.listToArray(args));
		},

		/**
		 * This will create a new object.
		 *
		 * @param {object} [object] An object to extend.
		 * @return {object}
		 */
		createObject: function(object)
		{
			/* create a local function to perform the check
			once then override the function */
			var createObject;
			if(typeof Object.create === 'function')
			{
				// modern browsers
				createObject = function(object)
				{
					return Object.create(object);
				};
			}
			else
			{
				// old browsers
				createObject = function(object)
				{
					var obj = function(){};
					obj.prototype = object;
					return new obj();
				};
			}

			return this.override(this, 'createObject', createObject, arguments);
		},

		/**
		 * This will extend an object to another object.
		 *
		 * @param {(function|object)} sourceObj
		 * @param {(function|object)} targetObj
		 * @return {object}
		 */
		extendObject: function(sourceObj, targetObj)
		{
			if(typeof sourceObj === 'undefined' || typeof targetObj === 'undefined')
			{
				return false;
			}

			for(var property in sourceObj)
			{
				if(sourceObj.hasOwnProperty(property) && typeof targetObj[property] === 'undefined')
				{
					targetObj[property] = sourceObj[property];
				}
			}

			return targetObj;
		},

		/**
		 * This will clone an object.
		 *
		 * @param {object} obj
		 * @return {object}
		 */
		cloneObject: function(obj)
		{
			return JSON.parse(JSON.stringify(obj));
		},

		/**
		 * This will get the class prototype.
		 *
		 * @param {(function|object)} object
		 * @return {object}
		 */
		_getClassObject: function(object)
		{
			return (typeof object === 'function')? object.prototype : object;
		},

		/**
		 * This will extend an object to another object.
		 *
		 * @param {(function|object)} sourceClass
		 * @param {(function|object)} targetClass
		 * @return {object}
		 */
		extendClass: function(sourceClass, targetClass)
		{
			/* if we are using a class constructor function
			we want to get the class prototype object */
			var source = this._getClassObject(sourceClass),
			target = this._getClassObject(targetClass);

			if(typeof source !== 'object' || typeof target !== 'object')
			{
				return false;
			}

			/* we want to create a new object and add the source
			prototype to the new object */
			var obj = this.createObject(source);

			/* we want to add any additional properties from the
			target class to the new object */
			for(var prop in target)
			{
				obj[prop] = target[prop];
			}

			return obj;
		}
	});

	/**
	 * This will create a base class that other classes
	 * can use to create a class like object in es5.
	 *
	 * @class
	 */
	var Class = function()
	{

	};

	Class.prototype =
	{
		constructor: Class
	};

	/**
	 * This will extend the parent object to a child object.
	 *
	 * @static
	 * @param {object} child
	 * @return {function} The child constructor.
	 */
	Class.extend = function(child)
	{
		if(!child)
		{
			return false;
		}

		var parent = this.prototype;

		/* the child constructor must be set to set
		the parent static methods on the child */
		var constructor = child.constructor || false;
		if(child.hasOwnProperty('constructor') === false)
		{
			constructor = function()
			{
				var args = base.listToArray(arguments);
				parent.constructor.apply(this, args);
			};
		}

		/* this will add the parent class to the
		child class */
		constructor.prototype = base.extendClass(parent, child);

		/* this will add the static methods from the parent to
		the child constructor. */
		base.extendObject(this, constructor);
		return constructor;
	};

	base.extend.Class = Class;

	/**
	 * TrackerTypes
	 *
	 * This will add and remove tracker types to the data tracker.
	 *
	 */
	var TrackerTypes =
	{
		/**
		 * @member {object} The Type and callBack that is called
		 * when the type is removed from the object.
		 */
		types: {},

		/**
		 * This will add a type.
		 * @param {string} type
		 * @param {function} callBack The function to call when an object
		 * is having the type removed.
		 */
		add: function(type, callBack)
		{
			this.types[type] = callBack;
		},

		/**
		 * This will get a type or return false.
		 * @param {string} type
		 * @return {(function|boolean)} The callBack or false.
		 */
		get: function(type)
		{
			return this.types[type] || false;
		},

		/**
		 * This will remove a type.
		 * @param {string} type
		 */
		remove: function(type)
		{
			delete this.types[type];
		}
	};

	/**
	 * Tracker
	 *
	 * This will create a tracker for an object that will
	 * store each type added and the data stored to
	 * each type.
	 *
	 * @class
	 */
	var Tracker = base.Class.extend(
	{
		/**
		 * @constructor
		 */
		constructor: function()
		{
			/**
			 * @member {object} types
			 */
			this.types = {};
		},

		/**
		 * This will add data to a type.
		 *
		 * @public
		 * @param {string} addingType The type of data.
		 * @param {*} data The data to store
		 */
		add: function(addingType, data)
		{
			var type = this.types[addingType] || (this.types[addingType] = []);
			type.push(data);
		},

		/**
		 * This will get all the data stored to a data type.
		 * @param {string} type
		 * @return {*|boolean} the data or false.
		 */
		get: function(type)
		{
			return this.types[type] || false;
		},

		/**
		 * This will call the callBack with the data.
		 *
		 * @private
		 * @param {function} callBack
		 * @param {*} data
		 */
		removeByCallBack: function(callBack, data)
		{
			if(typeof callBack === 'function')
			{
				callBack(data);
			}
		},

		/**
		 * This will remove the data by type.
		 *
		 * @private
		 * @param {string} removingType
		 */
		removeType: function(removingType)
		{
			var types = this.types;
			if(types)
			{
				var type = types[removingType];
				if(type.length)
				{
					var callBack = TrackerTypes.get(removingType);
					for(var i = 0, length = type.length; i < length; i++)
					{
						var data = type[i];
						if(data)
						{
							// this will stop any circular referrences
							type[i] = null;

							this.removeByCallBack(callBack, data);
						}
					}
					delete types[type];
				}
			}
		},

		/**
		 * This will remove the data by type or all if no type is
		 * set.
		 *
		 * @public
		 * @param {string} [type]
		 */
		remove: function(type)
		{
		 	if(type)
			{
				this.removeType(type);
			}
			else
			{
				var types = this.types;
				for(var prop in types)
				{
					if(types.hasOwnProperty(prop))
					{
						type = types[prop];
						if(!type)
						{
							continue;
						}

						this.removeType(prop);
					}
				}

				delete this.types;
			}
		}
	});

	/**
	 * DataTracker
	 *
	 * This will add data tracking for objects. The DataTracker is
	 * a single point where any data can be tracked to an object
	 * or element. Modules can register types to store their own
	 * data that can allow the data to be removed when the element
	 * is removed.
	 *
	 * @class
	 */
	var DataTracker = base.Class.extend(
	{
		/**
		 * @constructor
		 */
		constructor: function()
		{
			/**
			 * @private
			 * @member trackers This is an object that stores all tracker
			 * objects by tracking id.
			 */
			this.trackers = {};

			/**
			 * @private
			 * @member {int} trackingCount
			 */
			this.trackingCount = 0;
		},

		/**
		 * This will add a new type to the data tracker.
		 *
		 * @public
		 * @param {string} type The new type.
		 * @param {function} callBack The callBack to help clean
		 * up data when removed.
		 */
		addType: function(type, callBack)
		{
			TrackerTypes.add(type, callBack);
		},

		/**
		 * This will remove a type from the data tracker.
		 * @param {string} type
		 */
		removeType: function(type)
		{
			TrackerTypes.remove(type);
		},

		/**
		 * This will get the object tracking id or set it if
		 * not set.
		 *
		 * @param {object} obj
		 * @return {string}
		 */
		getTrackingId: function(obj)
		{
			return obj.trackingId || (obj.trackingId = 'dt' + this.trackingCount++);
		},

		/**
		 * This will add data to an object.
		 *
		 * @param {object} obj
		 * @param {string} type The type name.
		 * @param {*} data The data to track.
		 */
		add: function(obj, type, data)
		{
			var id = this.getTrackingId(obj),
			tracker = this.find(id);

			tracker.add(type, data);
		},

		/**
		 * This will get the data from a type or the tracker object
		 * if type is not set.
		 *
		 * @param {object} obj
		 * @param {string} [type]
		 * @return {*}
		 */
		get: function(obj, type)
		{
			var id = obj.trackingId,
			tracker = this.trackers[id];
			if(!tracker)
			{
				return false;
			}

			return (type)? tracker.get(type) : tracker;
		},

		/**
		 * This will get the tracker or create a new tracker
		 * if no tracker is set.
		 *
		 * @param {string} id
		 * @return {object} The tracker.
		 */
		find: function(id)
		{
			var trackers = this.trackers;
			return (trackers[id] || (trackers[id] = new Tracker()));
		},

		/**
		 * This will remove a type or all data for an object if
		 * no type is set.
		 *
		 * @param {object} obj
		 * @param {stirng} [type]
		 */
		remove: function(obj, type)
		{
			var id = obj.trackingId;
			if(!id)
			{
				return true;
			}

			var tracker = this.trackers[id];
			if(!tracker)
			{
				return false;
			}

			if(type)
			{
				tracker.remove(type);

				/* this will remove the msg from the elements
				if no elements are listed under the msg */
				if(base.isEmpty(tracker.types))
				{
					delete this.trackers[id];
				}
			}
			else
			{
				tracker.remove();

				delete this.trackers[id];
			}
		}
	});

	base.extend.DataTracker = new DataTracker();

	/* we want to add additional methods to the base prototype
	so they can be inherited */
	base.augment(
	{
		/**
		 * This will get the last error.
		 * @return {(object|boolean)} The last error or false.
		 */
		getLastError: function()
		{
			var errors = this.errors;
			return (errors.length)? errors.pop() : false;
		},

		/**
		 * This will add an error.
		 *
		 * @param {object} err
		 */
		addError: function(err)
		{
			this.errors.push(err);
		},

		/**
		 * This will parse a query string.
		 *
		 * @param {string} [str] The string to parse or the global
		 * location will be parsed.
		 * @return {object}
		 */
		parseQueryString: function(str)
		{
			if(typeof str !== 'string')
			{
				str = global.location.search;
			}

			var objURL = {},
			regExp = /([^?=&]+)(=([^&]*))?/g;
			str.replace(regExp, function(a, b, c, d)
			{
				/* we want to save the key and the
				value to the objURL */
				objURL[b] = decodeURIComponent(d);
			});

			return objURL;
		},

		/**
		 * This will check if an object is empty.
		 *
		 * @param {object} obj
		 * @return {boolean}
		 */
		isEmpty: function(obj)
		{
			if(!obj || typeof obj !== 'object')
			{
				return true;
			}

			/* we want to loop through each property and
			check if it belongs to the object directly */
			for(var key in obj)
			{
				if(obj.hasOwnProperty(key))
				{
					return false;
				}
			}
			return true;
		},

		/**
		 * This will select an element by id.
		 *
		 * @param {string} id
		 * @return {(object|boolean)} The element object or false.
		 */
		getById: function(id)
		{
			if(typeof id !== 'string')
			{
				return false;
			}
			var obj = document.getElementById(id);
			return (obj || false);
		},

		/**
		 * This will select elements by name.
		 *
		 * @param {string} name
		 * @return {(object|boolean)} The elements array or false.
		 */
		getByName: function(name)
		{
			if(typeof name !== 'string')
			{
				return false;
			}
			var obj = document.getElementsByName(name);
			return (obj)? this.listToArray(obj) : false;
		},

		/**
		 * This will select by css selector.
		 *
		 * @param {string} selector
		 * @param {boolean} single Set to true if you only want one result.
		 * @return {*}
		 */
		getBySelector: function(selector, single)
		{
			if(typeof selector !== 'string')
			{
				return false;
			}

			/* we want to check if we are only selecting
			the first element or all elements */
			single = single || false;
			if(single === true)
			{
				var obj = document.querySelector(selector);
				return (obj || false);
			}

			var elements = document.querySelectorAll(selector);
			if(elements)
			{
				/* if there is only one result just return the
				first element in the node list */
				return (elements.length === 1)? elements[0] : this.listToArray(elements);
			}
			return false;
		},

		/**
		 * This will get or set the innerHTML or an element.
		 *
		 * @param {object} obj
		 * @param {string} [html] If the html is not set, the html of the
		 * element will be returned.
		 *
		 * @return {(string|void)}
		 */
		html: function(obj, html)
		{
			if(!obj || typeof obj !== 'object')
			{
				 return false;
			}

			/* we want to check if we are getting the
			html or adding the html */
			if(typeof html !== 'undefined')
			{
				obj.innerHTML = html;
				return this;
			}

			return obj.innerHTML;
		},

		/**
		 * This will set the css property of an element.
		 *
		 * @param {object} obj
		 * @param {string} property
		 * @param {string} value
		 * @return {object} an instance of base.
		 */
		setCss: function(obj, property, value)
		{
			if(!obj || typeof obj !== 'object' || typeof property === 'undefined')
			{
				return this;
			}

			property = this.uncamelCase(property);
			obj.style[property] = value;
			return this;
		},

		/**
		 * This will get the css property of an element.
		 *
		 * @param {object} obj
		 * @param {string} property
		 * @return {(string|null)}
		 */
		getCss: function(obj, property)
		{
			if(!obj || typeof property === 'undefined')
			{
				return false;
			}

			property = this.uncamelCase(property);
			var css = obj.style[property];
			if(css !== '')
			{
				return css;
			}

			/* we want to check if we have an inherited
			value */
			var currentValue = null,
			currentStyle = obj.currentStyle;
			if(currentStyle && (currentValue = currentStyle[property]))
			{
				css = currentValue;
			}
			else
			{
				var inheritedStyle = window.getComputedStyle(obj, null);
				if(inheritedStyle)
				{
					css = inheritedStyle[property];
				}
			}

			return css;
		},

		/**
		 * This will get or set the css propety or an element.
		 *
		 * @param {object} obj
		 * @param {string} property
		 * @param {string} [value]
		 * @return {(string|void)}
		 */
		css: function(obj, property, value)
		{
			/* we want to check if we are getting the
			value or setting the value */
			if(typeof value !== 'undefined')
			{
				this.setCss(obj, property, value);

				return this;
			}

			return this.getCss(obj, property);
		},

		/**
		 * This will remove an attribute from an element.
		 *
		 * @private
		 * @return {*}
		 */
		_removeAttr: function()
		{
			var removeAttr;
			if(typeof document.documentElement.removeAttribute === 'function')
			{
				removeAttr = function(obj, property)
				{
					obj.removeAttribute(property);
				};
			}
			else
			{
				removeAttr = function(obj, property)
				{
					/* we cannot remove the attr through the remove
					attr method so we want to null the value.
					we want to camel caps the propety */
					property = base.camelCase(property);
					obj.property = null;
				};
			}

			return this.override(this, '_removeAttr', removeAttr, arguments);
		},

		/**
		 * This will remove an attribute from an element.
		 *
		 * @param {object} obj
		 * @param {string} property
		 * @return {object} an instance of base.
		 */
		removeAttr: function(obj, property)
		{
			if(obj && typeof obj === 'object')
			{
				this._removeAttr(obj, property);
			}
			return this;
		},

		/**
		 * This will set an attribute of an element.
		 *
		 * @private
		 * @return {void}
		 */
		setAttr: function()
		{
			/* create a local function to perform the check
			once then override the function */
			var setAttr;
			if(typeof document.documentElement.setAttribute === 'function')
			{
				// modern browsers
				setAttr = function(obj, property, value)
				{
					obj.setAttribute(property, value);
				};
			}
			else
			{
				// old browsers
				setAttr = function(obj, property, value)
				{
					obj[property] = value;
				};
			}

			return this.override(this, 'setAttr', setAttr, arguments);
		},

		/**
		 * This will get an attribute of an element.
		 *
		 * @return {string}
		 */
		getAttr: function()
		{
			/* create a local function to perform the check
			once then override the function */
			var getAttr;
			if(typeof document.documentElement.getAttribute === 'function')
			{
				// modern browsers
				getAttr = function(obj, property)
				{
					return obj.getAttribute(property);
				};
			}
			else
			{
				// old browsers
				getAttr = function(obj, property)
				{
					return obj[property];
				};
			}

			/* this will override method with cached method
			and we need to return and call with object */
			return this.override(this, 'getAttr', getAttr, arguments);
		},

		/**
		 * This will get or set an attribute from an element.
		 *
		 * @param {object} obj
		 * @param {string} property
		 * @param {string} [value]
		 * @return {(string|void)}
		 */
		attr: function(obj, property, value)
		{
			if(!obj || typeof obj !== 'object')
			{
				return false;
			}

			/* we want to check if we are getting the
			value or setting the value */
			if(typeof value !== 'undefined')
			{
				/* we want to check to set the value */
				this.setAttr(obj, property, value);

				return this;
			}

			return this.getAttr(obj, property);
		},

		/**
		 * This will prefix a string with "data-" if not set.
		 *
		 * @protected
		 * @param {string} prop
		 * @return {string}
		 */
		_checkDataPrefix: function(prop)
		{
			if(typeof prop !== 'string')
			{
				return prop;
			}

			/* we want to de camelcase if set */
			prop = base.uncamelCase(prop);
			if(prop.substring(0, 5) !== 'data-')
			{
				prop = 'data-' + prop;
			}

			return prop;
		},

		/**
		 * This will remove "data-" from a string.
		 *
		 * @protected
		 * @param {string} prop
		 * @return {string}
		 */
		_removeDataPrefix: function(prop)
		{
			if(typeof prop === 'string' && prop.substring(0, 5) === 'data-')
			{
				prop = prop.substring(5);
			}
			return prop;
		},

		/**
		 * This will set data to an element.
		 *
		 * @param {object} obj
		 * @param {string} property
		 * @param {string} value
		 */
		setData: function()
		{
			var self = this;
			/* create a local function to perform the check
			once then override the function */
			var setData;
			if(typeof document.documentElement.dataset !== 'undefined')
			{
				// modern browsers
				setData = function(obj, property, value)
				{
					/* this will return the property without the data prefix */
					property = self._removeDataPrefix(property);
					property = base.camelCase(property);

					obj.dataset[property] = value;
				};
			}
			else
			{
				// old browsers
				setData = function(obj, property, value)
				{
					/* we need to check the prop prefix */
					property = self._checkDataPrefix(property);
					base.attr(obj, property, value);
				};
			}

			return this.override(this, 'setData', setData, arguments);
		},

		/**
		 * This will get data from an element.
		 *
		 * @param {object} obj
		 * @param {string} property
		 * @param {string} value
		 * @return {string}
		 */
		getData: function()
		{
			var self = this;
			/* create a local function to perform the check
			once then override the function */
			var getData;
			if(typeof document.documentElement.dataset !== 'undefined')
			{
				// modern browsers
				getData = function(obj, property)
				{
					property = base.camelCase(self._removeDataPrefix(property));
					return obj.dataset[property];
				};
			}
			else
			{
				// old browsers
				getData = function(obj, property)
				{
					property = self._checkDataPrefix(property);
					return base.attr(obj, property);
				};
			}

			return this.override(this, 'getData', getData, arguments);
		},

		/**
		 * This will get or set data to an element.
		 *
		 * @param {object} obj
		 * @param {string} property
		 * @param {string} [value]
		 * @return {(string|void)}
		 */
		data: function(obj, property, value)
		{
			if(!obj || typeof obj !== 'object')
			{
				return false;
			}

			if(typeof value !== 'undefined')
			{
				this.setData(obj, property, value);
				return this;
			}

			/* we need to check the prop prefix */
			return this.getData(obj, property);
		},

		/**
		 * This will find elements in an element.
		 *
		 * @param {object} obj
		 * @param {string} queryString
		 * @return {array}
		 */
		find: function(obj, queryString)
		{
			if(!obj || typeof queryString !== 'string')
			{
				return false;
			}

			return obj.querySelectorAll(queryString);
		},

		/**
		 * This will display an element.
		 *
		 * @param {object} obj
		 * @return {object} An instance of base.
		 */
		show: function(obj)
		{
			if(!obj || typeof obj !== 'object')
			{
				return this;
			}

			/* we want to get the previous display style
			from the data-style-display attr */
			var previous = this.data(obj, 'style-display'),
			value = (typeof previous === 'string')? previous : '';

			this.css(obj, 'display', value);
			return this;
		},

		/**
		 * This will hide an element.
		 *
		 * @param {object} obj
		 * @return {object} An instance of base.
		 */
		hide: function(obj)
		{
			if(!obj || typeof obj !== 'object')
			{
				return this;
			}

			/* we want to set the previous display style
			on the element as a data attr */
			var previous = this.css(obj, 'display');
			if(previous !== 'none' && previous)
			{
				this.data(obj, 'style-display', previous);
			}

			this.css(obj, 'display', 'none');
			return this;
		},

		/**
		 * This will toggle the display an element.
		 *
		 * @param {object} obj
		 * @return {object} An instance of base.
		 */
		toggle: function(obj)
		{
			if(!obj || typeof obj !== 'object')
			{
				return this;
			}

			var mode = this.css(obj, 'display');
			if(mode !== 'none')
			{
				this.hide(obj);
			}
			else
			{
				this.show(obj);
			}
			return this;
		},

		/**
		 * This will camelCase a string.
		 *
		 * @param {string} str
		 * @return {(string|boolean)} The string or false.
		 */
		camelCase: function(str)
		{
			if(typeof str !== 'string')
			{
				return false;
			}

			var regExp = /(-|\s|\_)+\w{1}/g;
			return str.replace(regExp, function(match)
			{
				return match[1].toUpperCase();
			});
		},

		/**
		 * This will uncamel-case a string.
		 *
		 * @param {string} str
		 * @return {(string|boolean)} The string or false.
		 */
		uncamelCase: function(str, delimiter)
		{
			if(typeof str !== 'string')
			{
				return false;
			}

			delimiter = delimiter || '-';

			var regExp = /([A-Z]{1,})/g;
			return str.replace(regExp, function(match)
			{
				return delimiter + match.toLowerCase();
			}).toLowerCase();
		},

		/**
		 * This will get the size of an element.
		 *
		 * @param {object} obj
		 * @return {(object|boolean)} A size object or false.
		 */
		getSize: function(obj)
		{
			if(!obj || typeof obj !== 'object')
			{
				return false;
			}

			return {
				width: this.getWidth(obj),
				height: this.getHeight(obj)
			};
		},

		/**
		 * This will get the width of an element.
		 *
		 * @param {object} obj
		 * @return {(int|boolean)} A width or false.
		 */
		getWidth: function(obj)
		{
			/* we want to check if the object is not supplied */
			return (obj && typeof obj === 'object')? obj.offsetWidth : false;
		},

		/**
		 * This will get the height of an element.
		 *
		 * @param {object} obj
		 * @return {(int|boolean)} A height or false.
		 */
		getHeight: function(obj)
		{
			/* we want to check if the object is not supplied */
			return (obj && typeof obj === 'object')? obj.offsetHeight : false;
		},

		/**
		* This will get the scroll position.
		*
		* @param {object} [obj] The element or document element if not set.
		* @return {object}
		*/
		getScrollPosition: function(obj)
		{
			var left = 0, top = 0;
			if(typeof obj === 'undefined')
			{
				/* we want to use the document body */
				obj = document.documentElement;
				left = (window.pageXOffset || obj.scrollLeft);
				top = (window.pageYOffset || obj.scrollTop);
			}
			else if(typeof obj === 'object')
			{
				left = obj.scrollLeft;
				top = obj.scrollTop;
			}

			if(!obj || typeof obj !== 'object')
			{
				return false;
			}

			return {
				left: left - (obj.clientLeft || 0),
				top: top - (obj.clientTop || 0)
			};
		},

		/**
		 * This will get the scroll top position.
		 *
		 * @param {object} [obj] The element or document element if not set.
		 * @return {object}
		 */
		getScrollTop: function(obj)
		{
			var position = this.getScrollPosition(obj);
			return position.top;
		},

		/**
		 * This will get the scroll left position.
		 *
		 * @param {object} [obj] The element or document element if not set.
		 * @return {object}
		 */
		getScrollLeft: function(obj)
		{
			var position = this.getScrollPosition(obj);
			return position.left;
		},

		/**
		 * This will get the window size.
		 *
		 * @return {object}
		 */
		getWindowSize: function()
		{
			var w = window,
			doc = document,
			de = doc.documentElement,
			b = doc.getElementsByTagName('body')[0],
			width = w.innerWidth || de.clientWidth || b.clientWidth,
			height = w.innerHeight || de.clientHeight || b.clientHeight;

			return {
				width: width,
				height: height
			};
		},

		/**
		 * This will get the document size.
		 *
		 * @return {object}
		 */
		getDocumentSize: function()
		{
			var doc = document,
			body = doc.body,
			html = doc.documentElement;

			var height = Math.max(
				body.scrollHeight,
				body.offsetHeight,
				html.clientHeight,
				html.scrollHeight,
				html.offsetHeight
			);

			var width = Math.max(
				body.scrollWidth,
				body.offsetWidth,
				html.clientWidth,
				html.scrollWidth,
				html.offsetWidth
			);

			return {
				width: width,
				height: height
			};
		},

		/**
		 * This will get the document height.
		 *
		 * @return {object}
		 */
		getDocumentHeight: function()
		{
			return this.getDocumentSize().height;
		},

		/**
		 * This will get the value from a property on an object.
		 *
		 * @param {object} obj
		 * @param {string} property
		 * @param {*} [defaultText] A value if no value is set.
		 * @return {string}
		 */
		getProperty: function(obj, property, defaultText)
		{
			if(!obj || typeof obj !== 'object')
			{
				return '';
			}

			var value = obj[property];
			if(value)
			{
				return value;
			}

			/* if no value was available
			we want to return an empty string */
			return (typeof defaultText !== 'undefined')? defaultText : '';
		},

		/**
		 * This will get the position of an element.
		 *
		 * @param {object} obj
		 * @param {boolean} [depth] The number of levels, default is 1, 0 is to the root.
		 * @return {object}
		 */
		position: function(obj, depth)
		{
			var position = {x: 0, y: 0};

			if(!obj || typeof obj !== 'object')
			{
				return position;
			}

			depth = typeof depth === 'undefined'? 1 : depth;

			/* if the depth is 0 we will travel to the
			top element */
			var count = 0;
			while(obj && (depth === 0 || count < depth))
			{
				count++;
				position.x += (obj.offsetLeft + obj.clientLeft);
				position.y += (obj.offsetTop + obj.clientTop);
				obj = obj.offsetParent;
			}

			return position;
		},

		/**
		 * This will add a class to an element.
		 *
		 * @protected
		 * @param {object} obj
		 * @param {string} tmpClassName
		 */
		_addClass: function()
		{
			/* create a local function to perform the check
			once then override the function */
			var addClass;
			if(typeof document.documentElement.classList !== 'undefined')
			{
				// modern browsers
				addClass = function(obj, tmpClassName)
				{
					obj.classList.add(tmpClassName);
				};
			}
			else
			{
				// old browsers
				addClass = function(obj, tmpClassName)
				{
					obj.className = obj.className + ' ' + tmpClassName;
				};
			}

			/* this will override method with cached method
			and we need to return and call with object */
			return this.override(this, '_addClass', addClass, arguments);
		},

		/**
		 * This will add a class to an element.
		 *
		 * @param {object} obj
		 * @param {string} tmpClassName
		 */
		addClass: function(obj, tmpClassName)
		{
			if(!obj || typeof obj !== 'object' || tmpClassName === '')
			{
				return this;
			}

			if(typeof tmpClassName === 'string')
			{
				/* we want to divide the string by spaces and
				add any class listed */
				var adding = tmpClassName.split(' ');
				for(var i = 0, maxLength = adding.length; i < maxLength; i++)
				{
					this._addClass(obj, adding[i]);
				}
			}
			return this;
		},

		/**
		 * This will remove a class from an element.
		 *
		 * @protected
		 * @param {object} obj
		 * @param {string} tmpClassName
		 */
		_removeClass: function()
		{
			/* create a local function to perform the check
			once then override the function */
			var removeClass;
			if(typeof document.documentElement.classList !== 'undefined')
			{
				// modern browsers
				removeClass = function(obj, tmpClassName)
				{
					obj.classList.remove(tmpClassName);
				};
			}
			else
			{
				// old browsers
				removeClass = function(obj, tmpClassName)
				{
					/* we want to get the object classes in an array */
					var classNames = obj.className.split(' ');
					for(var i = 0, maxLength = classNames.length; i < maxLength; i++)
					{
						if(classNames[i] === tmpClassName)
						{
							classNames.splice(i, 1);
						}
					}
					obj.className = classNames.join(' ');
				};
			}

			/* this will override method with cached method
			and we need to return and call with object */
			return this.override(this, '_removeClass', removeClass, arguments);
		},

		/**
		 * This will remove a class or classes from an element.
		 *
		 * @param {object} obj
		 * @param {string} [tmpClassName]
		 */
		removeClass: function(obj, tmpClassName)
		{
			if(!obj || typeof obj !== 'object' || tmpClassName === '')
			{
				return this;
			}

			/* if no className was specified we will remove all classes from object */
			if(typeof tmpClassName === 'undefined')
			{
				obj.className = '';
			}
			else
			{
				this._removeClass(obj, tmpClassName);
			}
			return this;
		},

		/**
		 * This will check if an element has a class.
		 *
		 * @protected
		 * @param {object} obj
		 * @param {string} tmpClassName
		 * @return {boolean}
		 */
		_hasClass: function()
		{
			/* create a local function to perform the check
			once then override the function */
			var hasClass;
			if(typeof document.documentElement.classList !== 'undefined')
			{
				// modern browsers
				hasClass = function(obj, tmpClassName)
				{
					return obj.classList.contains(tmpClassName);
				};
			}
			else
			{
				// old browsers
				hasClass = function(obj, tmpClassName)
				{
					/* we want to get the object classes in an array */
					var check = false,
					classNames = obj.className.split(' ');
					for(var i = 0, maxLength = classNames.length; i < maxLength; i++)
					{
						if(classNames[i] === tmpClassName)
						{
							check = true;
							break;
						}
					}
					return check;
				};
			}

			/* this will override method with cached method
			and we need to return and call with object */
			return this.override(this, '_hasClass', hasClass, arguments);
		},

		/**
		 * This will check if an element has a class.
		 *
		 * @param {object} obj
		 * @param {string} tmpClassName
		 * @return {boolean}
		 */
		hasClass: function(obj, tmpClassName)
		{
			if(!obj || typeof obj !== 'object' || tmpClassName === '')
			{
				return false;
			}

			return this._hasClass(obj, tmpClassName);
		},

		/**
		 * This will toggle a class on an element.
		 *
		 * @param {object} obj
		 * @param {string} tmpClassName
		 * @return {object} An instance of base.
		 */
		toggleClass: function(obj, tmpClassName)
		{
			if(!obj || typeof obj !== 'object')
			{
				return this;
			}

			var hasClass = this.hasClass(obj, tmpClassName);
			if(hasClass === true)
			{
				this.removeClass(obj, tmpClassName);
			}
			else
			{
				this.addClass(obj, tmpClassName);
			}
			return this;
		},

		/**
		 * This will get the type of a variable.
		 *
		 * @param {*} data
		 * @return {string}
		 */
		getType: function(data)
		{
			var type = typeof data;
			if(type !== 'object')
			{
				return type;
			}

			return (this.isArray(data))? 'array' : type;
		},

		/**
		 * This will check if the variable is an array.
		 *
		 * @param {*} array
		 * @return {boolean}
		 */
		isArray: function(array)
		{
			/* create a local function to perform the check once */
			var isArray;
			if(typeof Array.isArray === 'function')
			{
				// modern browsers
				isArray = function(array)
				{
					return Array.isArray(array);
				};
			}
			else
			{
				// old browsers
				isArray = function(array)
				{
					return (array instanceof Array);
				};
			}

			return this.override(this, 'isArray', isArray, arguments);
		},

		/**
		 * This will check if a value is found in an array.
		 *
		 * @protected
		 * @param {array} array
		 * @param {string} element
		 * @param {int} [fromIndex]
		 * @return {int}
		 */
		_inArray: function()
		{
			/* create a local function to perform the check
			once then override the function */
			var inArray;
			if(typeof Array.prototype.indexOf === 'function')
			{
				// modern browsers
				inArray = function(array, element, fromIndex)
				{
					return array.indexOf(element, fromIndex);
				};
			}
			else
			{
				// old browsers
				inArray = function(array, element, fromIndex)
				{
					var length = (array.length),
					start = (!isNaN(fromIndex))? fromIndex : 0;

					for(var i = start; i < length; i++)
					{
						if(element === array[i])
						{
							return i;
						}
					}
					return -1;
				};
			}

			return this.override(this, '_inArray', inArray, arguments);
		},

		/**
		 * This will check if a value is found in an array.
		 *
		 * @param {array} array
		 * @param {string} element
		 * @param {int} [fromIndex]
		 * @return {int} This will return -1 if not found.
		 */
		inArray: function(array, element, fromIndex)
		{
			if(!array || typeof array !== 'object')
			{
				return -1;
			}

			return this._inArray(array, element, fromIndex);
		},

		/**
		 * This will create a callBack.
		 *
		 * @param {object} obj
		 * @param {function} method
		 * @param {array} [argArray] Default args to pass.
		 * @param {boolean} [addArgs] Set to add merge args from the
		 * curried function.
		 *
		 * @return {(function|boolean)} The callBack function or false.
		 */
		createCallBack: function(obj, method, argArray, addArgs)
		{
			if(typeof method !== 'function')
			{
				return false;
			}

			argArray = argArray || [];
			return function()
			{
				if(addArgs === true)
				{
					var args = base.listToArray(arguments);
					argArray = argArray.concat(args);
				}

				return method.apply(obj, argArray);
			};
		},

		/**
		 * This will bind scope to a method.
		 *
		 * @param {object} obj
		 * @param {function} method
		 * @return {function}
		 */
		bind: function(obj, method)
		{
			/* create a local function to perform the check
			once then override the function */
			var bind;
			if(typeof Function.prototype.bind === 'function')
			{
				// modern browsers
				bind = function(obj, method)
				{
					return method.bind(obj);
				};
			}
			else
			{
				// old browsers
				bind = function(obj, method)
				{
					return function()
					{
						return method.apply(obj, arguments);
					};
				};
			}

			return this.override(this, 'bind', bind, arguments);
		},

		/**
		 * This will prepare a json object to be used in an
		 * xhr request. This will sanitize the object values
		 * by encoding them to not break the param string.
		 *
		 * @param {object} obj
		 * @return {string}
		 */
		prepareJsonUrl: function(obj)
		{
			var escapeChars = function(str)
			{
				if(typeof str !== 'string')
				{
					str = String(str);
				}

				var newLine = /\n/g,
				returnCarriage = /\r/g,
				tab = /\t/g;

				return str.replace(newLine, "\\n").replace(returnCarriage, "\\r").replace(tab, "\\t");
			};

			var sanitize = function(text)
			{
				/* we need to escape chars and encode the uri
				components */
				text = escapeChars(text);

				if(typeof text === 'string')
				{
					text = encodeURIComponent(text);
				}

				/* we want to re-encode the double quotes so they
				will be escaped by the json encoder */
				var pattern = /\%22/g;
				return text.replace(pattern, '"');
			};

			var prepareUrl = function(data)
			{
				var type = typeof data;
				if(type === "undefined")
				{
					return data;
				}

				if(type !== 'object')
				{
					data = sanitize(data);
					return data;
				}

				for(var prop in data)
				{
					if(data.hasOwnProperty(prop) && data[prop] !== null)
					{
						var childType = typeof data[prop];
						if(childType)
						{
							data[prop] = prepareUrl(data[prop]);
						}
						else
						{
							data[prop] = sanitize(data[prop]);
						}
					}
				}
				return data;
			};

			/* we want to check to clone object so we won't modify the
			original object */
			var before = (typeof obj === 'object')? this.cloneObject(obj) : obj,
			after = prepareUrl(before);
			return this.jsonEncode(after);
		},

		/**
		 * This will parse JSON data.
		 *
		 * @param {string} data
		 * @return {*}
		 */
		jsonDecode: function(data)
		{
			return (typeof data !== "undefined" && data.length > 0)? JSON.parse(data) : false;
		},

		/**
		 * This will encode JSON data.
		 *
		 * @param {*} data
		 * @return {string}
		 */
		jsonEncode: function(data)
		{
			return (typeof data !== "undefined")? JSON.stringify(data) : false;
		},

		/**
		 * This will parse xml data.
		 *
		 * @protected
		 * @param {string} data
		 * @return {object}
		 */
		_xmlParse: function()
		{
			/* create a local function to perform the check
			once then override the function */
			var xmlParse;
			if(typeof window.DOMParser !== 'undefined')
			{
				// modern browsers
				xmlParse = function(data)
				{
					var parser = new DOMParser();
					return parser.parseFromString(data, "text/xml");
				};
			}
			else
			{
				// old browsers
				xmlParse = function(data)
				{
					var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
					xmlDoc.async = false;
					return xmlDoc.loadXML(data);
				};
			}

			/* this will override method with cached method
			and we need to return and call with object */
			return this.override(this, '_xmlParse', xmlParse, arguments);
		},

		/**
		 * This will parse xml data.
		 *
		 * @param {string} data
		 * @return {object}
		 */
		xmlParse: function(data)
		{
			return (typeof data !== "undefined")? this._xmlParse(data) : false;
		}

	});

	/**
	 * This will count the properties of an object.
	 *
	 * @param {object} obj
	 * @return {int}
	 */
	var countProperty = function(obj)
	{
		var count = 0;
		/* we want to count each property of the object */
		for(var property in obj)
		{
			if(obj.hasOwnProperty(property))
			{
				count++;
				/* we want to do a recursive count to get
				any child properties */
				if(typeof obj[property] === 'object')
				{
					count += countProperty(obj[property]);
				}
			}
		}
		return count;
	};

	/**
	 * This will validate if the object properties match another object.
	 *
	 * @param {object} obj1
	 * @param {object} obj2
	 * @return {boolean}
	 */
	var matchProperties = function(obj1, obj2)
	{
		var matched = false;

		if(typeof obj1 !== 'object' || typeof obj2 !== 'object')
		{
			return matched;
		}

		/* we want to check each object1 property to the
		object 2 property */
		for(var property in obj1)
		{
			/* we want to check if the property is owned by the
			object and that they have matching types */
			if(!obj1.hasOwnProperty(property) || !obj2.hasOwnProperty(property))
			{
				break;
			}

			var value1 = obj1[property],
			value2 = obj2[property];

			if(typeof value1 !== typeof value2)
			{
				break;
			}

			/* we want to check if the type is an object */
			if(typeof value1 === 'object')
			{
				/* this will do a recursive check to the
				child properties */
				matched = matchProperties(value1, value2);
				if(matched !== true)
				{
					/* if a property did not match we can stop
					the comparison */
					break;
				}
			}
			else
			{
				if(value1 === value2)
				{
					matched = true;
				}
				else
				{
					break;
				}
			}
		}

		return matched;
	};

	/**
	 * This will compare if two objects match.
	 *
	 * @param {object} obj1
	 * @param {object} obj2
	 * @return {boolean}
	 */
	var compareObjects = function(obj1, obj2)
	{
		/* we want to check if they have the same number of
		properties */
		var option1Count = countProperty(obj1),
		option2Count = countProperty(obj2);
		if(option1Count !== option2Count)
		{
			return false;
		}

		return matchProperties(obj1, obj2);
	};

	base.augment(
	{
		/**
		 * This will compare if two values match.
		 *
		 * @param {*} option1
		 * @param {*} option2
		 * @return {boolean}
		 */
		equals: function(option1, option2)
		{
			/* we want to check if there types match */
			var option1Type = typeof option1,
			option2Type = typeof option2;
			if(option1Type !== option2Type)
			{
				return false;
			}

			/* we need to check if the options are objects
			because we will want to match all the
			properties */
			if(option1Type === 'object')
			{
				return compareObjects(option1, option2);
			}

			return (option1 === option2);
		}
	});

})(this);

/* base framework module */
/*
	this adds event support
*/
(function(global)
{
	"use strict";

	var DataTracker = base.DataTracker;

	/* this will register the event system to the
	data tracker to remove events that have been
	added in layouts. */
	DataTracker.addType('events', function(data)
	{
		base.events.removeEvent(data);
	});

	base.extend.events =
	{
		/**
		 * This will get the events on an element.
		 *
		 * @param {object} obj
		 * @return {(array|boolean)}
		 */
		getEvents: function(obj)
		{
			if(!obj || typeof obj !== 'object')
			{
				return false;
			}
			return DataTracker.get(obj, 'events');
		},

		/**
		 * This will create an object to use with the DataTracker.
		 *
		 * @param {string} event The event name.
		 * @param {object} obj
		 * @param {function} fn
		 * @param {boolean} [capture]
		 * @param {boolean} [swapped]
		 * @param {function} [originalFn]
		 * @return {object}
		 */
		create: function(event, obj, fn, capture, swapped, originalFn)
		{
			/* we want to check if the swapped param was set */
			swapped = (swapped === true);

			return {
				event: event,
				obj: obj,
				fn: fn,
				capture: capture,
				swapped: swapped,
				originalFn: originalFn
			};
		},

		/* this will setup the add function to cache the
		proper function so we only check one time.
		@return (function) the function */
		/**
		 * This will add an event.
		 * @param {string} event The event name.
		 * @param {object} obj
		 * @param {function} fn
		 * @param {boolean} [capture]
		 */
		_add: function()
		{
			/* create a local function to perform the check
			once then override the function */
			var addEvent;
			if(typeof global.addEventListener === 'function')
			{
				// modern browsers
				addEvent = function(obj, event, fn, capture)
				{
					obj.addEventListener(event, fn, capture);
				};
			}
			else if(typeof document.attachEvent === 'function')
			{
				// old ie
				addEvent = function(obj, event, fn, capture)
				{
					obj.attachEvent("on" + event, fn);
				};
			}
			else
			{
				addEvent = function(obj, event, fn, capture)
				{
					obj["on" + event] = fn;
				};
			}

			base.override(this, '_add', addEvent, arguments);
		},

		/**
		 * This will add an event to an object.
		 *
		 * @param {string} event The event name.
		 * @param {object} obj
		 * @param {function} fn
		 * @param {boolean} [capture]
		 * @param {boolean} [swapped]
		 * @param {function} [originalFn]
		 */
		add: function(event, obj, fn, capture, swapped, originalFn)
		{
			if(!obj || typeof obj !== 'object')
			{
				return this;
			}

			capture = capture || false;

			/* we want to create an event object and add it the
			the active events to track */
			var data = this.create(event, obj, fn, capture, swapped, originalFn);
			DataTracker.add(obj, 'events', data);

			this._add(obj, event, fn, capture);

			return this;
		},

		/**
		 * This will remove an event from an object.
		 *
		 * @param {string} event The event name.
		 * @param {object} obj
		 * @param {function} fn
		 * @param {boolean} [capture]
		 * @return {object} a reference to the event object.
		 */
		remove: function(event, obj, fn, capture)
		{
			capture = capture || false;

			/* we want to select the event from the active events array */
			var result = this.getEvent(event, obj, fn, capture);
			if(result === false)
			{
				return this;
			}

			if(typeof result === 'object')
			{
				/* we want to use the remove event method and just
				pass the listener object */
				this.removeEvent(result);
			}
			return this;
		},

		/**
		 * This will remove an event from an object.
		 *
		 * @protected
		 * @param {string} event The event name.
		 * @param {object} obj
		 * @param {function} fn
		 * @param {boolean} [capture]
		 */
		_remove: function()
		{
			/* create a local function to perform the check
			once then override the function */
			var removeEvent;
			if(typeof global.removeEventListener === 'function')
			{
				// modern browsers
				removeEvent = function(obj, event, fn, capture)
				{
					obj.removeEventListener(event, fn, capture);
				};
			}
			else if(typeof document.detachEvent === 'function')
			{
				// old ie
				removeEvent = function(obj, event, fn, capture)
				{
					obj.detachEvent("on" + event, fn);
				};
			}
			else
			{
				removeEvent = function(obj, event, fn, capture)
				{
					obj["on" + event] = null;
				};
			}

			base.override(this, '_remove', removeEvent, arguments);
		},

		/**
		 * This will remove an event listener.
		 * @param {object} listener
		 * @return {object} a reference to the event object.
		 */
		removeEvent: function(listener)
		{
			if(typeof listener === 'object')
			{
				this._remove(listener.obj, listener.event, listener.fn, listener.capture);
			}
			return this;
		},

		/**
		 * This will search for an event.
		 *
		 * @protected
		 * @param {string} event The event name.
		 * @param {object} obj
		 * @param {function} fn
		 * @param {boolean} [capture]
		 * @return {(object|boolean)}
		 */
		getEvent: function(event, obj, fn, capture)
		{
			if(typeof obj !== 'object')
			{
				return false;
			}

			var events = this.getEvents(obj);
			if(!events || events.length < 1)
			{
				return false;
			}

			var eventObj = this.create(event, obj, fn, capture);
			/* if the search returns anything but false we
			found our active event */
			return this.search(eventObj, events);
		},

		/**
		 * This will search for an event from the object events.
		 *
		 * @param {object} eventObj
		 * @param {array} events
		 * @return {(object|boolean)}
		 */
		search: function(eventObj, events)
		{
			var swappable = this.isSwappable(eventObj.event);
			for(var i = 0, maxLength = events.length; i < maxLength; i++)
			{
				var listener = events[i];
				if(listener.event !== eventObj.event || listener.obj !== eventObj.obj)
				{
					continue;
				}

				if(listener.fn === eventObj.fn || (swappable === true && listener.originalFn === eventObj.fn))
				{
					return listener;
				}
			}

			return false;
		},

		/**
		 * This will remove all events on an object.
		 *
		 * @param {object} obj
		 * @return {object} a reference to the events object.
		 */
		removeEvents: function(obj)
		{
			if(!obj || typeof obj !== 'object')
			{
				return this;
			}

			DataTracker.remove(obj, 'events');

			return this;
		},

		/**
		 * @member {array} swap The swappable events.
		 */
		swap: [
			'DOMMouseScroll',
			'wheel',
			'mousewheel',
			'mousemove',
			'popstate'
		],

		/**
		 * This will a event type to the swappable array.
		 *
		 * @param {string} type
		 */
		addSwapped: function(type)
		{
			this.swap.push(type);
		},

		/**
		 * This will check if an event is swappable.
		 *
		 * @param {string} event
		 * @return {boolean}
		 */
		isSwappable: function(event)
		{
			/* we want to check if the event type is in the
			swapped event array */
			var index = base.inArray(this.swap, event);
			return (index > -1);
		}
	};

	base.augment(
	{
		/**
		 * This will add an event to an object.
		 *
		 * @param {string} event The event name.
		 * @param {object} obj
		 * @param {function} fn
		 * @param {boolean} [capture]
		 * @return {object} An instance of base.
		 */
		addListener: function(event, obj, fn, capture)
		{
			this.events.add(event, obj, fn, capture);

			return this;
		},

		/**
		 * This will add an event to an object.
		 *
		 * @param {string} event The event name.
		 * @param {object} obj
		 * @param {function} fn
		 * @param {boolean} [capture]
		 * @return {object} An instance of base.
		 */
		on: function(event, obj, fn, capture)
		{
			var events = this.events;
			if(this.isArray(event))
			{
				for(var i = 0, length = event.length; i < length; i++)
				{
					var evt = event[i];
					events.add(evt, obj, fn, capture);
				}
			}
			else
			{
				events.add(event, obj, fn, capture);
			}
			return this;
		},

		/**
		 * This will remove an event from an object.
		 *
		 * @param {string} event The event name.
		 * @param {object} obj
		 * @param {function} fn
		 * @param {boolean} [capture]
		 * @return {object} An instance of base.
		 */
		off: function(event, obj, fn, capture)
		{
			var events = this.events;
			if(this.isArray(event))
			{
				for(var i = 0, length = event.length; i < length; i++)
				{
					var evt = event[i];
					events.remove(evt, obj, fn, capture);
				}
			}
			else
			{
				events.remove(event, obj, fn, capture);
			}
			return this;
		},

		/**
		 * This will remove an event from an object.
		 *
		 * @param {string} event The event name.
		 * @param {object} obj
		 * @param {function} fn
		 * @param {boolean} [capture]
		 * @return {object} An instance of base.
		 */
		removeListener: function(event, obj, fn, capture)
		{
			/* we want to remove this from the active events */
			this.events.remove(event, obj, fn, capture);

			return this;
		},

		/**
		 * This will create a custom event.
		 *
		 * @protected
		 * @param {object} obj
		 * @param {object} event
		 * @param {string} eventType
		 * @param {object} [settings]
		 * @param {object} [params]
		 * @return {object}
		 */
		_createEvent: function()
		{
			/* create a local function to perform the check
			once then override the function */
			var createEvent;
			if('CustomEvent' in window)
			{
				createEvent = function(obj, event, eventType, settings, params)
				{
					var e;
					if(eventType === 'HTMLEvents')
					{
						e = new Event(event);
					}
					else if(eventType === 'MouseEvents')
					{
						e = new MouseEvent(event, settings);
					}
					else
					{
						e = new CustomEvent(event, params);
					}
					return e;
				};
			}
			else if('createEventObject' in document)
			{
				createEvent = function(obj, event, eventType, settings, params)
				{
					var e = document.createEventObject();
					e.eventType = event;
					return e;
				};
			}
			else
			{
				createEvent = function(obj, event, eventType, settings, params)
				{
					var e = document.createEvent(eventType);
					if (eventType === 'HTMLEvents')
					{
						obj.initEvent(event, settings.bubbles, settings.cancelable);
					}
					else if(eventType === 'MouseEvents')
					{
						e.initMouseEvent(
							event,
							settings.canBubble,
							settings.cancelable,
							settings.view,
							settings.detail,
							settings.screenX,
							settings.screenY,
							settings.clientX,
							settings.clientY,
							settings.ctrlKey,
							settings.altKey,
							settings.shiftKey,
							settings.metaKey,
							settings.button,
							settings.relatedTarget
						);
					}
					else if(eventType === 'CustomEvent')
					{
						e.initCustomEvent(event, settings.bubbles, settings.cancelable, params);
					}
					return e;
				};
			}

			/* this will override method with cached method
			and we need to return and call with object */
			return this.override(this, '_createEvent', createEvent, arguments);
		},

		/**
		 * This will create a custom event. This supports html, mouse,
		 * and customevents.
		 *
		 * @param {string} event
		 * @param {object} obj
		 * @param {object} [options]
		 * @param {object} [params]
		 * @return {object}
		 */
		createEvent: function(event, obj, options, params)
		{
			if(!obj || typeof obj !== 'object')
			{
				return false;
			}

			var settings =
			{
				pointerX: 0,
				pointerY: 0,
				button: 0,
				view: window,
				detail: 1,
				screenX: 0,
				screenY: 0,
				clientX: 0,
				clientY: 0,
				ctrlKey: false,
				altKey: false,
				shiftKey: false,
				metaKey: false,
				bubbles: true,
				cancelable: true,
				relatedTarget: null
			};

			if(options && typeof options === 'object')
			{
				settings = base.extendObject(settings, options);
			}

			var eventType = this._getEventType(event);
			return this._createEvent(obj, event, eventType, settings, params);
		},

		/**
		 * This will get thetype of an event.
		 *
		 * @protected
		 * @param {string} event
		 * @return {string}
		 */
		_getEventType: function(event)
		{
			var eventTypes = {
				'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
				'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
			};

			var eventType = 'CustomEvent';
			for(var prop in eventTypes)
			{
				if(eventTypes.hasOwnProperty(prop))
				{
					var value = eventTypes[prop];
					if(event.match(value))
					{
						eventType = prop;
						break;
					}
				}
			}
			return eventType;
		},

		/**
		 * This will trigger an event.
		 *
		 * @protected
		 * @param {object} obj
		 * @param {object} event
		 */
		_trigger: function()
		{
			/* create a local function to perform the check
			once then override the function */
			var trigger;
			if('createEvent' in document)
			{
				trigger = function(obj, event)
				{
					obj.dispatchEvent(event);
				};
			}
			else
			{
				// old ie
				trigger = function(obj, event)
				{
					var type = event.type;
					obj.fireEvent('on' + type, event);
				};
			}

			this.override(this, '_trigger', trigger, arguments);
		},

		/**
		 * This will trigger an event.
		 *
		 * @param {(string|object)} event
		 * @param {object} obj
		 * @param {object} [params]
		 * @return {object}
		 */
		trigger: function(event, obj, params)
		{
			if(!obj || typeof obj !== 'object')
			{
				return this;
			}

			var e = (typeof event === 'string')? this.createEvent(event, obj, null, params) : event;
			this._trigger(obj, e);
			return this;
		},

		/**
		 * @member {string} mouseWheelEventType The mouse wheel event name.
		 * @protected
		 */
		mouseWheelEventType: null,

		/**
		 * This will get the system mouse event.
		 *
		 * @protected
		 * @return {string}
		 */
		getWheelEventType: function()
		{
			/* this will check what mouse wheel type
			the client supports
			@return (string) the event name */
			var getMouseWheelType = function()
			{
				var type = 'wheel';
				if('onmousewheel' in global)
				{
					type = 'mousewheel';
				}
				else if('DOMMouseScroll' in global)
				{
					type = 'DOMMouseScroll';
				}
				return type;
			};

			/* this will get the event type or
			one time set the type and return the type */
			return this.mouseWheelEventType || (
				this.mouseWheelEventType = getMouseWheelType()
			);
		},

		/**
		 * This will add a mouse event to  an object.
		 *
		 * @param {function} callBackFn
		 * @param {object} [obj]
		 * @param {boolean} [cancelDefault]
		 * @param {boolean} capture
		 * @return {object} base object.
		 */
		onMouseWheel: function(callBackFn, obj, cancelDefault, capture)
		{
			if(typeof obj === "undefined")
			{
				 obj = window;
			}

			var self = this;

			/* we want to return the mousewheel data
			to this private callback function before
			returning to the call back function*/
			var mouseWheelResults = function(e)
			{
				e = e || window.event;
				var delta = Math.max(-1, Math.min(1, (-e.deltaY || e.wheelDelta || -e.detail)));

				/* we can now send the mouse wheel results to
				the call back function */
				if(typeof callBackFn === 'function')
				{
					callBackFn(delta, e);
				}

				/* we want to check to cancel default */
				if(cancelDefault === true)
				{
					self.preventDefault(e);
				}
			};

			var event = this.getWheelEventType();
			this.events.add(event, obj, mouseWheelResults, capture, true, callBackFn);
			return this;
		},

		/**
		 * This will remove a mouse event
		 *
		 * @param {function} callBackFn
		 * @param {object} [obj]
		 * @param {boolean} capture
		 * @return {object} base object.
		 */
		offMouseWheel: function(callBackFn, obj, capture)
		{
			if(typeof obj === "undefined")
			{
				obj = window;
			}

			var event = this.getWheelEventType();
			this.off(event, obj, callBackFn, capture);
			return this;
		},

		/**
		 * This will prevent default on an event.
		 *
		 * @param {object} e
		 * @return {object} base object.
		 */
		preventDefault: function(e)
		{
			e = e || window.event;

			if(typeof e.preventDefault === 'function')
			{
				e.preventDefault();
			}
			else
			{
				e.returnValue = false;
			}

			return this;
		},

		/**
		 * This will stop an event from propigating.
		 *
		 * @param {object} e
		 * @return {object} base object.
		 */
		stopPropagation: function(e)
		{
			e = e || window.event;

			if(typeof e.stopPropagation === 'function')
			{
				e.stopPropagation();
			}
			else
			{
				e.cancelBubble = true;
			}

			return this;
		}
	});

})(this);

/* base framework module */
(function()
{
	"use strict";

	/**
	 * This is the default xhr (ajax) settings.
	 */
	var XhrDefaultSettings =
	{
		url: '',

		/* this is the responseType of the server
		response (string) */
		responseType:  'json',

		/* this is the server method */
		method: 'POST',

		/* this can fix a param string to be added
		to every ajax request */
		fixedParams: '',

		/* headers (object) */
		headers:
		{
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},

		/* this will set the ajax request to async (bool) */
		async: true,

		/* cross domain (bool) */
		crossDomain: false,

		/* cors with credentials (bool) */
		withCredentials: false,

		/* events (function) */
		completed: null,
		failed: null,
		aborted: null,
		progress: null
	};

	/**
	 * This is the xhr factory that can create new xhr objects.
	 */
	var XhrFactory =
	{
		/**
		 * This will create an xhr object.
		 *
		 * @return {(object|null)}
		 */
		_createXHR: function()
		{
			/* create a local function to perform the check
			once then override the function */
			var createXhr;
			if(typeof XMLHttpRequest !== "undefined")
			{
				// modern browsers
				createXhr = function()
				{
					return new XMLHttpRequest();
				};
			}
			else
			{
				try{
					createXhr = function()
					{
						return new ActiveXObject("Msxml2.XMLHTTP");
					};
				}
				catch(e)
				{
					try{
						createXhr = function()
						{
							return new ActiveXObject("Microsoft.XMLHTTP");
						};
					}
					catch(err)
					{

					}
				}

				if(!createXhr)
				{
					createXhr = function()
					{
						return false;
					};
				}
			}

			return base.override(this, '_createXHR', createXhr, arguments);
		},

		/**
		 * This will create a CORS xhr object.
		 *
		 * @return {(object|null)}
		 */
		_createCorsXHR: function()
		{
			/* create a local function to perform the check
			once then override the function */
			var createXhr;
			if(typeof XMLHttpRequest !== "undefined" && typeof XDomainRequest === "undefined")
			{
				// modern browsers
				createXhr = function()
				{
					return new XMLHttpRequest();
				};
			}
			else if(typeof XDomainRequest !== "undefined")
			{
				createXhr = function()
				{
					return new XDomainRequest();
				};
			}
			else
			{
				createXhr = function()
				{
					return false;
				};
			}

			return base.override(this, '_createCorsXHR', createXhr, arguments);
		}
	};

	/* this will add ajax settings to the base class */
	base.augment(
	{
		/**
		 * @member {object} xhrSettings
		 */
		xhrSettings: XhrDefaultSettings,

		/**
		 * This will add fixed params to each xhr request.
		 *
		 * @param {(string|object)} params
		 */
		addFixedParams: function(params)
		{
			base.xhrSettings.fixedParams = params;
		},

		/**
		 * This will update the xhr settings.
		 *
		 * @param {object} settingsObj
		 */
		ajaxSettings: function(settingsObj)
		{
			if(typeof settingsObj === 'object')
			{
				base.xhrSettings = base.extendClass(base.xhrSettings, settingsObj);
			}
		},

		/**
		 * This will reset the xhr settings.
		 */
		resetAjaxSettings: function()
		{
			base.xhrSettings = XhrDefaultSettings;
		}
	});

	/**
	 * This will make an xhr (ajax) request.
	 *
	 * @param {string} url
	 * @param {string} params
	 * @param {function} callBackFn
	 * @param {string} responseType
	 * @param {string} [method=POST]
	 * @param {boolean} async
	 *
	 * or
	 *
	 * @param {object} settings
	 * @example
	 * {
	 * 	url: '',
	 * 	params: '',
	 * 	completed: function(response)
	 * 	{
	 *
	 * 	}
	 * }
	 *
	 * @return {object} xhr object.
	 */
	base.extend.ajax = function()
	{
		/* we want to save the args so we can check
		which way we are adding the ajax settings */
		var args = base.listToArray(arguments),
		ajax = new XhrRequest(args);
		return ajax.xhr;
	};

	/**
	 * XhrRequest
	 *
	 * This will create an xhr request object.
	 * @class
	 */
	var XhrRequest = base.Class.extend(
	{
		/**
		 * @constructor
		 * @param {*} args
		 */
		constructor: function(args)
		{
			this.settings = null;
			this.xhr = null;
			this.setup(args);
		},

		/**
		 * This will setup the xhr request.
		 *
		 * @protected
		 * @param {*} args
		 * @return {(object|boolean)}
		 */
		setup: function(args)
		{
			this.getXhrSettings(args);

			var xhr = this.xhr = this.createXHR();
			if(xhr === false)
			{
				return false;
			}

			var settings = this.settings;
			xhr.open(settings.method, settings.url, settings.async);

			this.setupHeaders();
			this.addXhrEvents();

			/* this will setup the params and send the
			xhr request */
			xhr.send(this.getParams());
		},

		/**
		 * This will convert an object to a string.
		 *
		 * @protected
		 * @param {object} object
		 * @return {string}
		 */
		objectToString: function(object)
		{
			var params = [];
			for (var prop in object)
			{
				if(object.hasOwnProperty(prop))
				{
					params.push(prop + '=' + object[prop]);
				}
			}
			return params.join('&');
		},

		/**
		 * This will add the base params to the request params.
		 *
		 * @protected
		 * @param {*} params
		 * @param {*} addingParams
		 * @return {*}
		 */
		setupParams: function(params, addingParams)
		{
			var paramsType = typeof params;
			if(addingParams)
			{
				/* this will convert the adding params to match
				the params type */
				var addingType = typeof addingParams;
				if(paramsType === 'string')
				{
					if(addingType !== 'string')
					{
						addingParams = this.objectToString(addingParams);
					}

					var char = (params === '')? '?' : '&';
					params += char + addingParams;
				}
				else
				{
					if(addingType === 'string')
					{
						addingParams = base.parseQueryString(addingParams);
					}

					if(params instanceof FormData)
					{
						for(var key in addingParams)
						{
							if(addingParams.hasOwnProperty(key))
							{
								params.append(key, addingParams[key]);
							}
						}
					}
					else if(paramsType === 'object')
					{
						/* we don't want to modify the original object
						so we need to clone the object before extending */
						params = JSON.parse(JSON.stringify(params));

						params = base.extendObject(addingParams, params);
						params = this.objectToString(params);
					}
				}
			}
			else
			{
				if((params instanceof FormData) === false && paramsType === 'object')
				{
					params = this.objectToString(params);
				}
			}
			return params;
		},

		/**
		 * This will get the params.
		 * @protected
		 * @return {*}
		 */
		getParams: function()
		{
			var settings = this.settings,
			params = settings.params;

			var fixedParams = settings.fixedParams;
			if(params)
			{
				params = this.setupParams(params, fixedParams);
			}
			else if(fixedParams)
			{
				params = this.setupParams(fixedParams);
			}

			return params;
		},

		/**
		 * This will set the settings from the args.
		 *
		 * @protected
		 * @param {array} args
		 */
		getXhrSettings: function(args)
		{
			/* we want to create a clone of the default
			settings before adding the new settings */
			var settings = this.settings = base.createObject(base.xhrSettings);

			/* we want to check if we are adding the ajax settings by
			individual args or by a settings object */
			if(args.length >= 2 && typeof args[0] !== 'object')
			{
				for(var i = 0, maxLength = args.length; i < maxLength; i++)
				{
					var arg = args[i];

					switch(i)
					{
						case 0:
							settings.url = arg;
							break;
						case 1:
							settings.params = arg;
							break;
						case 2:
							settings.completed = arg;
							settings.failed = arg;
							break;
						case 3:
							settings.responseType = arg || 'json';
							break;
						case 4:
							settings.method = (arg)? arg.toUpperCase() : 'POST';
							break;
						case 5:
							settings.async = (typeof arg !== 'undefined')? arg : true;
							break;
					}
				}
			}
			else
			{
				/* override the default settings with the args
				settings object */
				settings = this.settings = base.extendClass(this.settings, args[0]);

				/* we want to check to add the completed callback
				as the error and aborted if not set */
				if(typeof settings.completed === 'function')
				{
					if(typeof settings.failed !== 'function')
					{
						settings.failed = settings.completed;
					}

					if(typeof settings.aborted !== 'function')
					{
						settings.aborted = settings.failed;
					}
				}
			}
		},

		/**
		 * This will create the xhr object.
		 *
		 * @protected
		 * @return {(object|boolean)}
		 */
		createXHR: function()
		{
			/* we want to check to setup the xhr by
			the crossDomain settings */
			var settings = this.settings;
			var xhr = (settings && settings.crossDomain === true)? XhrFactory._createCorsXHR() : XhrFactory._createXHR();
			if(!xhr)
			{
				return false;
			}

			if(xhr.hasOwnProperty('responseType'))
			{
				xhr.responseType = settings.responseType;
			}

			if(settings.withCredentials === true)
			{
				xhr.withCredentials = true;
			}

			return xhr;
		},

		/**
		 * This will setup the request headers.
		 */
		setupHeaders: function()
		{
			var settings = this.settings;
			if(settings && typeof settings.headers === 'object')
			{
				/* we want to add a header for each
				property in the object */
				var headers = settings.headers;
				for(var header in headers)
				{
					if(headers.hasOwnProperty(header))
					{
						this.xhr.setRequestHeader(header, headers[header]);
					}
				}
			}
		},

		/**
		 * This will update the request status.
		 *
		 * @param {object} e
		 * @param {string} [overrideType]
		 */
		update: function(e, overrideType)
		{
			e = e || window.event;

			var xhr = this.xhr;

			/* this will remove the xhr events from the active events
			after the events are completed, aborted, or errored */
			var removeEvents = function()
			{
				var events = base.events;
				events.removeEvents(xhr.upload);
				events.removeEvents(xhr);
			};

			var settings = this.settings;
			if(!settings)
			{
				return false;
			}

			var type = overrideType || e.type;
			switch(type)
			{
				case 'load':
					if(typeof settings.completed === 'function')
					{
						var response = this.getResponseData();
						settings.completed(response, this.xhr);
					}
					removeEvents();
					break;
				case 'error':
					if(typeof settings.failed === 'function')
					{
						settings.failed(false, this.xhr);
					}
					removeEvents();
					break;
				case 'progress':
					if(typeof settings.progress === 'function')
					{
						settings.progress(e);
					}
					break;
				case 'abort':
					if(typeof settings.aborted === 'function')
					{
						settings.aborted(false, this.xhr);
					}
					removeEvents();
					break;
			}
		},

		/**
		 * This will get the response data.
		 *
		 * @return {*}
		 */
		getResponseData: function()
		{
			var xhr = this.xhr,
			response = xhr.responseText;

			if(xhr.responseType || typeof response !== 'string')
			{
				return response;
			}

			var encoded = false;
			/* we want to check to decode the response by the type */
			switch(this.settings.responseType.toLowerCase())
			{
				case 'json':

					encoded = base.jsonDecode(response);
					if(encoded !== false)
					{
						response = encoded;
					}
					else
					{
						response = response;
						this.error = 'yes';
					}
					break;
				case 'xml':
					encoded = base.xmlParse(response);
					if(encoded !== false)
					{
						response = encoded;
					}
					else
					{
						response = response;
						this.error = 'yes';
					}
					break;
				case 'text':
					break;

			}

			return response;
		},

		/**
		 * This will check the ready state.
		 *
		 * @protected
		 * @param {object} e
		 */
		checkReadyState: function(e)
		{
			e = e || window.event;

			var xhr = this.xhr;
			if(xhr.readyState != 4)
			{
				/* the response is not ready */
				return;
			}

			var type = 'error';
			if(xhr.status == 200)
			{
				 /* the ajax was successful
				 but we want to change the event type to load */
				 type = 'load';
			}

			this.update(e, type);
		},

		/**
		 * This will add the xhr events.
		 */
		addXhrEvents: function()
		{
			var settings = this.settings;
			if(!settings)
			{
				return false;
			}

			var xhr = this.xhr;
			/* we need to check if we can add new event listeners or
			if we have to use the old ready state */
			if(typeof xhr.onload !== 'undefined')
			{
				var callBack = base.bind(this, this.update);
				base.on(['load', 'error', 'abort'], xhr, callBack);
				base.on('progress', xhr.upload, callBack);
			}
			else
			{
				var self = this;
				xhr.onreadystatechange = function(e)
				{
					self.checkReadyState(e);
				};
			}
		}
	});
})();

/* base framework module */
(function()
{
	"use strict";

	/**
	 * DataPubSub
	 *
	 * This is a pub sub class to allow subscribers to
	 * listen for updates when published by publishers.
	 * @class
	 */
	var DataPubSub = base.Class.extend(
	{
		/**
		 * @constructor
		 */
		constructor: function()
		{
			/**
			 * @member {object} callBacks
			 * @protected
			 */
			this.callBacks = {};

			/**
			 * @member {int} lastToken
			 * @protected
			 */
			this.lastToken = -1;
		},

		/**
		 * This will get a subscriber array.
		 *
		 * @param {string} msg
		 * @return {array}
		 */
		get: function(msg)
		{
			var callBacks = this.callBacks;
			return (callBacks[msg] || (callBacks[msg] = []));
		},

		/**
		 * This will reset pub sub.
		 */
		reset: function()
		{
			this.callBacks = {};
			this.lastToken = -1;
		},

		/**
		 * This will add a subscriber.
		 *
		 * @param {string} msg
		 * @param {function} callBack
		 * @return {string} The subscriber token.
		 */
		on: function(msg, callBack)
		{
			var token = (++this.lastToken);
			var list = this.get(msg);
			list.push({
				token: token,
				callBack: callBack
			});
			return token;
		},

		/**
		 * This will remove a subscriber.
		 *
		 * @param {string} msg
		 * @param {string} token
		 */
		off: function(msg, token)
		{
			var list = this.callBacks[msg] || false;
			if(list === false)
			{
				return false;
			}

			var length = list.length;
			for (var i = 0; i < length; i++ )
			{
				var item = list[i];
				if(item.token === token)
				{
					list.splice(i, 1);
					break;
				}
			}
		},

		/**
		 * This will delete a message.
		 *
		 * @param {string} msg
		 */
		remove: function(msg)
		{
			var callBacks = this.callBacks;
			if(callBacks[msg])
			{
				delete callBacks[msg];
			}
		},

		/**
		 * This will publish a message.
		 *
		 * @param {string} msg
		 * @param {string} value
		 * @param {object} committer
		 */
		publish: function(msg)
		{
			var i, length,
			list = this.callBacks[msg] || false;
			if(list === false)
			{
				return false;
			}

			var args = Array.prototype.slice.call(arguments, 1);

			length = list.length;
			for (i = 0; i < length; i++)
			{
				var item = list[i];
				if(!item)
				{
					continue;
				}
				item.callBack.apply(this, args);
			}
		}
	});

	var pubSub = new DataPubSub();
	base.extend.DataPubSub = DataPubSub;

	/**
	 * Source
	 *
	 * This will create a new source to use with
	 * a connection.
	 * @class
	 */
	var Source = base.Class.extend(
	{
		/**
		 * @constructor
		 */
		constructor: function()
		{
			/**
			 * @member {string} msg
			 * @protected
			 */
			this.msg = null;

			/**
			 * @member {string} token
			 */
			this.token = null;
		},

		/**
		 * This will set the token.
		 *
		 * @param {string} token
		 */
		setToken: function(token)
		{
			this.token = token;
		}
	});

	/**
	 * OneWaySource
	 *
	 * This will create a one way source to use with
	 * a connection.
	 * @class
	 * @augments Source
	 */
	var OneWaySource = Source.extend(
	{
		/**
		 * This will setup the data source.
		 *
		 * @param {object} data
		 */
		constructor: function(data)
		{
			Source.call(this);
			this.data = data;
		},

		/**
		 * This will subscribe to a message.
		 *
		 * @param {string} msg
		 * @param {function} callBack
		 */
		subscribe: function(msg, callBack)
		{
			this.msg = msg;
			this.token = this.data.on(msg, callBack);
		},

		/**
		 * This will unsubscribe from the message.
		 */
		unsubscribe: function()
		{
			this.data.off(this.msg, this.token);
		}
	});

	/**
	 * TwoWaySource
	 *
	 * This will create a two way source to use with
	 * a connection.
	 * @class
	 * @augments Source
	 */
	var TwoWaySource = Source.extend(
	{
		/**
		 * @member {function} callBack
		 */
		callBack: null,

		/**
		 * This will subscribe to a message.
		 *
		 * @param {string} msg
		 */
		subscribe: function(msg)
		{
			this.msg = msg;
			var callBack = base.bind(this, this.callBack);
			this.token = pubSub.on(msg, callBack);
		},

		/**
		 * This will unsubscribe from a message.
		 */
		unsubscribe: function()
		{
			pubSub.off(this.msg, this.token);
		}
	});

	/**
	 * DataSource
	 *
	 * This will create a data source to use with
	 * a connection.
	 * @class
	 * @augments TwoWaySource
	 */
	var DataSource = TwoWaySource.extend(
	{
		/**
		 * @constructor
		 * @param {object} data
		 * @param {string} prop
		 */
		constructor: function(data, prop)
		{
			TwoWaySource.call(this);
			this.data = data;
			this.prop = prop;
		},

		/**
		 * This will set the data value.
		 *
		 * @param {*} value
		 */
		set: function(value)
		{
			this.data.set(this.prop, value);
		},

		/**
		 * This will get the data value.
		 */
		get: function()
		{
			return this.data.get(this.prop);
		},

		/**
		 * The callBack when updated.
		 *
		 * @param {*} value
		 * @param {object} committer
		 */
		callBack: function(value, committer)
		{
			if(this.data !== committer)
			{
				this.data.set(this.prop, value, committer);
			}
		}
	});

	/**
	 * ElementSource
	 *
	 * This will create an element source to use with
	 * a connection.
	 * @class
	 * @augments TwoWaySource
	 */
	var ElementSource = TwoWaySource.extend(
	{
		/**
		 * @constructor
		 * @param {object} element
		 * @param {string} attr
		 * @param {(string|function)} [filter]
		 */
		constructor: function(element, attr, filter)
		{
			TwoWaySource.call(this);
			this.element = element;
			this.attr = this.getAttrBind(attr);

			if(typeof filter === 'string')
			{
				filter = this.setupFilter(filter);
			}
			this.filter = filter;
		},

		/**
		 * This will get the bind attribute.
		 *
		 * @param {string} [customAttr]
		 * @return {string}
		 */
		getAttrBind: function(customAttr)
		{
			/* this will setup the custom attr if the prop
			has specified one. */
			if(customAttr)
			{
				return customAttr;
			}

			var attr = 'textContent';
			/* if no custom attr has been requested we will get the
			default attr of the element */
			var element = this.element;
			if(!(element && typeof element === 'object'))
			{
				return attr;
			}

			var tagName = element.tagName.toLowerCase();
			if (tagName === "input" || tagName === "textarea" || tagName === "select")
			{
				var type = element.type;
				if(type)
				{
					switch(type)
					{
						case 'checkbox':
							attr = 'checked';
							break;
						case 'file':
							attr = 'files';
							break;
						default:
							attr = 'value';
					}
				}
				else
				{
					attr = 'value';
				}
			}
			return attr;
		},

		/**
		 * This will setup a filter callBack.
		 *
		 * @param {string} filter
		 * @return {function}
		 */
		setupFilter: function(filter)
		{
			var pattern = /(\[\[[^\]]+\]\])/;
			return function(value)
			{
				return filter.replace(pattern, value);
			};
		},

		/**
		 * This will set a value on an element.
		 *
		 * @param {*} value
		 */
		set: function(value)
		{
			var element = this.element;
			if(!element || typeof element !== 'object')
			{
				return false;
			}

			/* this will check to apply the option filter before
			setting the value */
			if(this.filter)
			{
				value = this.filter(value);
			}

			var attr = this.attr,
			type = element.type;
			if(type)
			{
				switch(type)
				{
					case 'checkbox':
						value = (value == 1);
						break;
					case 'radio':
						element.checked = (element.value === value);
						return true;
				}
			}

			if(attr.substr(4, 1) === '-')
			{
				base.setAttr(element, attr, value);
			}
			else
			{
				element[attr] = value;
			}
		},

		/**
		 * This will get the value from an element.
		 */
		get: function()
		{
			var element = this.element;
			if(!element || typeof element !== 'object')
			{
				return '';
			}

			var attr = this.attr;
			return (attr.substr(4, 1) === '-')? base.getAttr(element, attr) : element[attr];
		},

		/**
		 * The callBack when updated.
		 *
		 * @param {*} value
		 * @param {object} committer
		 */
		callBack: function(value, committer)
		{
			if(committer !== this.element)
			{
				this.set(value);
			}
		}
	});

	/**
	 * Connection
	 *
	 * This will create a connection.
	 * @class
	 */
	var Connection = base.Class.extend(
	{
		/**
		 * This will be used to unsubscribe.
		 */
		unsubscribe: function()
		{

		}
	});

	/**
	 * OneWayConnection
	 *
	 * This will create a one way connection.
	 * @class
	 * @augments Connection
	 */
	var OneWayConnection = Connection.extend(
	{
		/**
		 * @constructor
		 */
		constructor: function()
		{
			/**
			 * @member {object} source
			 */
			this.source = null;
		},

		/**
		 * This will setup the connection source.
		 *
		 * @param {object} data
		 * @return {object}
		 */
		addSource: function(data)
		{
			return (this.source = new OneWaySource(data));
		},

		/**
		 * This will be used to unsubscribe.
		 * @override
		 */
		unsubscribe: function()
		{
			this.source.unsubscribe();
			this.source = null;
		}
	});

	/**
	 * TwoWayConnection
	 *
	 * This will setup a two way connection.
	 * @class
	 * @augments Connection
	 */
	var TwoWayConnection = Connection.extend(
	{
		/**
		 * @constructor
		 */
		constructor: function()
		{
			this.element = null;
			this.data = null;
		},

		/**
		 * This will add the element source.
		 *
		 * @param {object} element
		 * @param {string} attr
		 * @param {(string|function)} filter
		 * @return {object}
		 */
		addElement: function(element, attr, filter)
		{
			return (this.element = new ElementSource(element, attr, filter));
		},

		/**
		 * This will add the data source.
		 *
		 * @param {object} data
		 * @param {string} prop
		 * @return {object}
		 */
		addData: function(data, prop)
		{
			return (this.data = new DataSource(data, prop));
		},

		/**
		 * This will unsubscribe from a source.
		 *
		 * @param {object} source
		 */
		unsubscribeSource: function(source)
		{
			if(source)
			{
				source.unsubscribe();
			}
		},

		/**
		 * This will be used to unsubscribe.
		 * @override
		 */
		unsubscribe: function()
		{
			this.unsubscribeSource(this.element);
			this.unsubscribeSource(this.data);

			this.element = null;
			this.data = null;
		}
	});

	/**
	 * ConnectionTracker
	 *
	 * This will create a new connection tracker to track active
	 * connections in the data binder.
	 * @class
	 */
	var ConnectionTracker = base.Class.extend(
	{
		/**
		 * @constructor
		 */
		constructor: function()
		{
			/**
			 * @member {object} connections
			 */
			this.connections = {};
		},

		/**
		 * This will add a new connection to be tracked.
		 *
		 * @param {string} id
		 * @param {string} attr
		 * @param {object} connection
		 * @return {object}
		 */
		add: function(id, attr, connection)
		{
			var connections = this.find(id);
			return (connections[attr] = connection);
		},

		/**
		 * This will get a connection.
		 *
		 * @param {string} id
		 * @param {string} attr
		 * @return {(object|bool)}
		 */
		get: function(id, attr)
		{
			var connections = this.connections[id];
			if(connections)
			{
				return (connections[attr] || false);
			}
			return false;
		},

		/**
		 * This will find a connection.
		 *
		 * @param {string} id
		 * @return {object}
		 */
		find: function(id)
		{
			var connections = this.connections;
			return (connections[id] || (connections[id] = {}));
		},

		/**
		 * This will remove a connection or all connections by id.
		 * @param {string} id
		 * @param {string} [attr]
		 */
		remove: function(id, attr)
		{
			var connections = this.connections[id];
			if(!connections)
			{
				return false;
			}

			var connection;
			if(attr)
			{
				connection = connections[attr];
				if(connection)
				{
					connection.unsubscribe();
					delete connections[attr];
				}

				/* this will remove the msg from the elements
				if no elements are listed under the msg */
				if(base.isEmpty(connections))
				{
					delete this.connections[id];
				}
			}
			else
			{
				for(var prop in connections)
				{
					if(connections.hasOwnProperty(prop))
					{
						connection = connections[prop];
						if(connection)
						{
							connection.unsubscribe();
						}
					}
				}

				delete this.connections[id];
			}
		}
	});

	/**
	 * DataBinder
	 *
	 * This will create a data binder object that can
	 * create one way and two way data bindings.
	 * @class
	 */
	var DataBinder = base.Class.extend(
	{
		/**
		 * @constructor
		 */
		constructor: function()
		{
			this.version = "1.0.1";
			this.attr = 'data-bind-id';

			this.connections = new ConnectionTracker();

			this.idCount = 0;
			this.setup();
		},

		/**
		 * This will setup the events.
		 * @protected
		 */
		setup: function()
		{
			this.setupEvents();
		},

		/**
		 * This will bind an element to a data property.
		 *
		 * @param {object} element
		 * @param {object} data
		 * @param {string} prop
		 * @param {(string|function)} [filter]
		 * @return {object} an instance of the databinder.
		 */
		bind: function(element, data, prop, filter)
		{
			var bindSettings = this.getPropSettings(prop);
			prop = bindSettings.prop;

			/* this will setup the model bind attr to the
			element and assign a bind id attr to support
			two way binding */
			var connection = this.setupConnection(element, data, prop, bindSettings.attr, filter);

			/* we want to get the starting value of the
			data and set it on our element */
			var connectionElement = connection.element,
			value = data.get(prop);
			if(typeof value !== 'undefined')
			{
				connectionElement.set(value);
			}
			else
			{
				/* this will set the element value
				as the prop value */
				value = connectionElement.get();
				if(value !== '')
				{
					connection.data.set(value);
				}
			}
			return this;
		},

		/**
		 * This will bind an element to a data property.
		 *
		 * @protected
		 * @param {object} element
		 * @param {object} data
		 * @param {string} prop
		 * @param {string} customAttr
		 * @param {(string|function)} [filter]
		 * @return {object} The new connection.
		 */
		setupConnection: function(element, data, prop, customAttr, filter)
		{
			var id = this.getBindId(element);
			var connection = new TwoWayConnection();

			// this will create the data source
			var dataSource = connection.addData(data, prop);
			// this will subscribe the data to the element
			dataSource.subscribe(id);

			/* this will add the data binding
			attr to our element so it will subscribe to
			the two data changes */
			var dataId = data.getDataId(),
			msg = dataId + ':' + prop;

			// this will create the element source
			var elementSource = connection.addElement(element, customAttr, filter);
			// this will subscribe the element to the data
			elementSource.subscribe(msg);

			this.addConnection(id, 'bind', connection);

			return connection;
		},

		/**
		 * This will add a new connection to the
		 * connection tracker.
		 *
		 * @protected
		 * @param {string} id
		 * @param {string} attr
		 * @param {object} connection
		 */
		addConnection: function(id, attr, connection)
		{
			this.connections.add(id, attr, connection);
		},

		/**
		 * This will set the bind id.
		 *
		 * @param {object} element
		 */
		setBindId: function(element)
		{
			var id = 'bs-db-' + this.idCount++;
			base.attr(element, this.attr, id);
			return id;
		},

		/**
		 * This will get the bind id.
		 *
		 * @param {object} element
		 * @return {string}
		 */
		getBindId: function(element)
		{
			var id = base.attr(element, this.attr);
			if(!id)
			{
				id = this.setBindId(element);
			}
			return id;
		},

		/**
		 * This will parse the prop to get the settings.
		 *
		 * @param {string} prop
		 * @return {object}
		 */
		getPropSettings: function(prop)
		{
			var bindProp = prop,
			bindAttr = null;

			/* this will setup the custom attr if the prop
			has specified one. */
			var parts = prop.split(':');
			if(parts.length > 1)
			{
				bindProp = parts[1];
				bindAttr = parts[0];
			}

			return {
				prop: bindProp,
				attr: bindAttr
			};
		},

		/**
		 * This will unbind the element.
		 *
		 * @param {object} element
		 * @return {object} an instance of the data binder.
		 */
		unbind: function(element)
		{
			var id = base.data(element, this.attr);
			if(id)
			{
				this.connections.remove(id);
			}
			return this;
		},

		/**
		 * This will setup a watcher for an element.
		 *
		 * @param {object} element
		 * @param {object} data
		 * @param {string} prop
		 * @param {function} callBack
		 */
		watch: function(element, data, prop, callBack)
		{
			if(!element || typeof element !== 'object')
			{
				return false;
			}

			var connection = new OneWayConnection();

			// this will create the one way source
			var source = connection.addSource(data);
			source.subscribe(prop, callBack);

			// this will add the new connection to the connection tracker
			var id = this.getBindId(element);
			var attr = data.getDataId() + ':' + prop;
			this.addConnection(id, attr, connection);

			var value = data.get(prop);
			if(typeof value !== 'undefined')
			{
				callBack(value);
			}
		},

		/**
		 * This will remove a watcher from an element.
		 *
		 * @param {object} element
		 * @param {object} data
		 * @param {string} prop
		 */
		unwatch: function(element, data, prop)
		{
			if(!element || typeof element !== 'object')
			{
				return false;
			}

			var id = base.attr(element, this.attr);
			if(id)
			{
				var attr = data.getDataId() + ':' + prop;
				this.connections.remove(id, attr);
			}
		},

		/**
		 * This will publish to the pub sub.
		 *
		 * @param {string} msg
		 * @param {*} value
		 * @param {object} committer
		 * @return {object} an instance of the data binder.
		 */
		publish: function(msg, value, committer)
		{
			pubSub.publish(msg, value, committer);
			return this;
		},

		/**
		 * This will check if an element is bound.
		 *
		 * @protected
		 * @param {object} element
		 * @return {boolean}
		 */
		isDataBound: function(element)
		{
			if(element)
			{
				var id = base.data(element, this.attr);
				if(id)
				{
					return id;
				}
			}
			return false;
		},

		/**
		 * @member {array} blockedKeys
		 * @protected
		 */
		blockedKeys: [
			20, //caps lock
			37, //arrows
			38,
			39,
			40
		],

		isBlocked: function(evt)
		{
			if(evt.type !== 'keyup')
			{
				return false;
			}

			/* this will check to block ctrl, shift or alt +
			buttons */
			return (base.inArray(this.blockedKeys, evt.keyCode) !== -1);
		},

		/**
		 * This is the callBack for the chnage event.
		 *
		 * @param {object} evt
		 */
		bindHandler: function(evt)
		{
			if(this.isBlocked(evt))
			{
				return true;
			}

			var target = evt.target || evt.srcElement;
			var id = this.isDataBound(target);
			if(id)
			{
				var connection = this.connections.get(id, 'bind');
				if(connection)
				{
					var value = connection.element.get();
					/* this will publish to the ui and to the
					model that subscribes to the element */
					pubSub.publish(id, value, target);
				}
			}
			evt.stopPropagation();
		},

		/* this will setup the on change handler and
		add the events. this needs to be setup before adding
		the events. */
		changeHandler: null,

		/**
		 * This wil setup the events.
		 * @protected
		 */
		setupEvents: function()
		{
			this.changeHandler = base.bind(this, this.bindHandler);

			this.addEvents();
		},

		/**
		 * This will add the events.
		 */
		addEvents: function()
		{
			base.on(["change", "keyup"], document, this.changeHandler, false);
		},

		/**
		 * This will remove the events.
		 */
		removeEvents: function()
		{
			base.off(["change", "keyup"], document, this.changeHandler, false);
		}
	});

	base.extend.DataBinder = new DataBinder();
})();

/* base framework module */
(function()
{
	"use strict";

	/**
	 * This will get the data attribute settings.
	 *
	 * @param {object} settings
	 * @return {object}
	 */
	var setupAttrSettings = function(settings)
	{
		var attributes = {};
		if(!settings && typeof settings !== 'object')
		{
			return attributes;
		}

		settings = base.cloneObject(settings);

		for(var prop in settings)
		{
			if(settings.hasOwnProperty(prop))
			{
				var setting = settings[prop];
				if(typeof setting !== 'function')
				{
					attributes[prop] = setting;
					delete settings[prop];
				}
			}
		}
		return attributes;
	};

	var DataUtils =
	{
		deepDataPattern: /(\w+)|(?:\[(\d)\))/g,

		/**
		 * This will check if a string has deep data.
		 *
		 * @param {string} str
		 * @return {bool}
		 */
		hasDeepData: function(str)
		{
			return (str.indexOf('.') !== -1 || str.indexOf('[') !== -1);
		},

		/**
		 * This will get the deep data segments
		 * @param {string} str
		 * @return {array}
		 */
		getSegments: function(str)
		{
			var pattern = this.deepDataPattern;
			return str.match(pattern);
		}
	};

	var BasicData = base.Class.extend(
	{
		/**
		 * @constructor
		 * @param {object} [settings]
		 */
		constructor: function(settings)
		{
			this.dirty = false;

			this._init();
			this.setup();

			/* this will setup the event sub for
			one way binding */
			this.eventSub = new base.DataPubSub();

			/* this will set the construct attributes */
			var attributes = setupAttrSettings(settings);
			this.set(attributes);
		},

		setup: function()
		{
			this.stage = {};
		},

		/**
		 * @member {string} dataTypeId
		 */
		dataTypeId: 'bd',

		/**
		 * This will setup the number and unique id of the data object.
		 * @protected
		 */
		_init: function()
		{
			var constructor = this.constructor;
			this._dataNumber = (typeof constructor._dataNumber === 'undefined')? constructor._dataNumber = 0 : (++constructor._dataNumber);

			var dataId = this.dataTypeId + '-';
			this._id = dataId + this._dataNumber;
			this._dataId = this._id + ':';
		},

		/**
		 * This will get the data id.
		 * @return {string}
		 */
		getDataId: function()
		{
			return this._id;
		},

		/**
		 * This is a placeholder.
		 */
		remove: function()
		{

		},

		/**
		 * This will setup a one way bind.
		 *
		 * @param {string} attrName
		 * @param {function} callBack
		 * @return {string} The subscription token.
		 */
		on: function(attrName, callBack)
		{
			var message = attrName + ':change';
			return this.eventSub.on(message, callBack);
		},

		/**
		 * This will unbind from a one way bind.
		 *
		 * @param {string} attrName
		 * @param {string} token
		 */
		off: function(attrName, token)
		{
			var message = attrName + ':change';
			this.eventSub.off(message, token);
		},

		/**
		 * This will set the attribute value.
		 *
		 * @protected
		 * @param {string} attr
		 * @param {*} val
		 * @param {object} committer
		 */
		_setAttr: function(attr, val, committer)
		{
			var prevValue = this.stage[attr];
			if(val === prevValue)
			{
				return false;
			}

			this.stage[attr] = val;

			committer = committer || this;

			/* this will publish the data to the data binder
			to update any ui elements that are subscribed */
			this._publish(attr, val, committer, prevValue);
		},

		/**
		 * This will set the data value of an attribute or attributes.
		 *
		 * @param {string} key
		 * @param {*} value
		 *
		 * or
		 *
		 * @param {object} data
		 */
		set: function()
		{
			var args = arguments;
			if(typeof args[0] === 'object')
			{
				var items = args[0],
				committer = args[1],
				stopMerge = args[2];

				for(var attr in items)
				{
					if(items.hasOwnProperty(attr))
					{
						var item = items[attr];
						if(typeof item === 'function')
						{
							continue;
						}
						this._setAttr(attr, item, committer, stopMerge);
					}
				}
			}
			else
			{
				this._setAttr(args[0], args[1], args[2], args[3]);
			}
		},

		/**
		 * This will get the model data.
		 */
		getModelData: function()
		{
			return this.stage;
		},

		/**
		 * This will toggle a bool attribute.
		 *
		 * @param {string} attr
		 */
		toggle: function(attr)
		{
			if(typeof attr === 'undefined')
			{
				return;
			}

			this.set(attr, !this.get(attr));
		},

		/**
		 * This will increment an attribute.
		 *
		 * @param {string} attr
		 */
		increment: function(attr)
		{
			if(typeof attr === 'undefined')
			{
				return;
			}

			var val = this.get(attr);
			this.set(attr, ++val);
		},

		/**
		 * This will decrement an attribute.
		 *
		 * @param {string} attr
		 */
		decrement: function(attr)
		{
			if(typeof attr === 'undefined')
			{
				return;
			}

			var val = this.get(attr);
			this.set(attr, --val);
		},

		/**
		 * This will delete an attribute.
		 *
		 * @param {object} obj
		 * @param {string} attr
		 * @return {*}
		 */
		_deleteAttr: function(obj, attr)
		{
			delete obj[attr];
		},

		/**
		 * This will delete a property value or the model data.
		 *
		 * @param {string} [attrName]
		 * @return {*}
		 */
		delete: function(attrName)
		{
			if(typeof attrName !== 'undefined')
			{
				this._deleteAttr(this.stage, attrName);
				return;
			}

			// this will clear the stage and attributes
			this.setup();
		},

		/**
		 * This will get the value of an attribute.
		 *
		 * @param {object} obj
		 * @param {string} attr
		 * @return {*}
		 */
		_getAttr: function(obj, attr)
		{
			return obj[attr];
		},

		/**
		 * This will get a property value or the model data.
		 *
		 * @param {string} [attrName]
		 * @return {*}
		 */
		get: function(attrName)
		{
			if(typeof attrName !== 'undefined')
			{
				return this._getAttr(this.stage, attrName);
			}
			else
			{
				return this.getModelData();
			}
		}
	});

	var DataBinder = base.DataBinder;


	/**
	 * Data
	 *
	 * This will create a new data object that can be used to
	 * bind elements to values.
	 * @class
	 * @augments BasicData
	 */
	var Data = BasicData.extend(
	{
		/**
		 * This will setup the stage and attributes object.
		 */
		setup: function()
		{
			this.attributes = {};
			this.stage = {};
		},

		/**
		 * This will update an attribute value.
		 *
		 * @protected
		 * @param {object} obj
		 * @param {string} attr
		 * @param {*} val
		 */
		_updateAttr: function(obj, attr, val)
		{
			var utils = DataUtils;
			/* this will check if we need to update
			deep nested data */
			if(utils.hasDeepData(attr))
			{
				var prop,
				props = utils.getSegments(attr),
				length = props.length,
				end = length - 1;

				for (var i = 0; i < length; i++)
				{
					prop = props[i];

					/* this will add the value to the last prop */
					if(i === end)
					{
						obj[prop] = val;
						break;
					}

					if (obj[prop] === undefined)
					{
						/* this will check to setup a new object
						or an array if the prop is a number */
						obj[prop] = isNaN(prop)? {} : [];
					}
					obj = obj[prop];
				}
			}
			else
			{
				obj[attr] = val;
			}
		},

		/**
		 * This will set the attribute value.
		 *
		 * @protected
		 * @param {string} attr
		 * @param {*} val
		 * @param {object} committer
		 * @param {boolean} stopMerge
		 */
		_setAttr: function(attr, val, committer, stopMerge)
		{
			/* this will check to update the model based on who
			updated it. if the data binder updated the data only
			the stage data is updated */
			if(!committer && stopMerge !== true)
			{
				/* this will update the attribute data because
				it was updated outside the data binder */
				this._updateAttr(this.attributes, attr, val);
			}
			else
			{
				if(this.dirty === false)
				{
					this.dirty = true;
				}
			}

			this._updateAttr(this.stage, attr, val);

			/* this will publish the data to the data binder
			to update any ui elements that are subscribed */
			committer = committer || this;
			this._publish(attr, val, committer);
		},

		/**
		 * This will publish an update to the data binder.
		 *
		 * @protected
		 * @param {string} attr
		 * @param {*} val
		 * @param {*} committer
		 */
		_publish: function(attr, val, committer)
		{
			this.publish(attr, val, committer);
		},

		/**
		 * This will publish deep and simple data to the data binder.
		 *
		 * @protected
		 * @param {string} attr
		 * @param {*} val
		 * @param {object} committer
		 */
		publishDeep: function(attr, val, committer)
		{
			var utils = DataUtils;
			if(utils.hasDeepData(attr))
			{
				var prop,
				props = utils.getSegments(attr),
				length = props.length,
				end = length - 1;

				/* the path is a string equivalent of the javascript dot notation path
				of the object being published. */
				var path = '',
				obj = this.stage;
				for (var i = 0; i < length; i++)
				{
					var prop = props[i];

					/* we need to setup the object to go to the next level
					of the data object before calling the next property. */
					obj = obj[prop];

					if (i > 0)
					{
						/* this will add the property to the path based on if its an
						object property or an array. */
						if(isNaN(prop))
						{
							path += '.' + prop;
						}
					}
					else
					{
						path = prop;
					}

					var publish;
					if(i === end)
					{
						/* if the loop is on the last pass it only needs to publish
						the val. */
						publish = val;
					}
					else
					{
						/* we only want to publish the modified branches. we need to
						get the next property in the props array and create a publish
						object or array with the next property value. */
						var nextProp = props[i + 1];
						if(isNaN(nextProp) === false)
						{
							path += '[' + nextProp + ']';
							continue;
						}

						var nextAttr = {};
						nextAttr[nextProp] = obj[nextProp];
						publish = nextAttr;
					}

					this.publish(path, publish, committer);
				}
			}
			else
			{
				this.publish(attr, val, committer);
			}
		},

		/**
		 * This will publish an update to the data binder.
		 *
		 * @protected
		 * @param {string} pathString
		 * @param {*} obj
		 * @param {*} committer
		 */
		publish: function(pathString, obj, committer)
		{
			pathString = pathString || "";
			this._publishAttr(pathString, obj, committer);

			if(obj && typeof obj === 'object')
			{
				var subPath, value;
				if(Array.isArray(obj))
				{
					var length = obj.length;
					for(var i = 0; i < length; i++)
					{
						value = obj[i];
						subPath = pathString + '[' + i + ']';
						this._checkPublish(subPath, value, committer);
					}
				}
				else
				{
					for(var prop in obj)
					{
						if(obj.hasOwnProperty(prop))
						{
							value = obj[prop];
							subPath = pathString + '.' + prop;
							this._checkPublish(subPath, value, committer);
						}
					}
				}
			}
		},

		_checkPublish: function(subPath, val, committer)
		{
			if(!val || typeof val !== 'object')
			{
				this._publishAttr(subPath, val, committer);
			}
			else
			{
				this.publish(subPath, val, committer);
			}
		},

		/**
		 * This will publish an update on an attribute.
		 *
		 * @protected
		 * @param {string} subPath
		 * @param {*} val
		 * @param {object} committer
		 */
		_publishAttr: function(subPath, val, committer)
		{
			/* save path and value */
			DataBinder.publish(this._dataId + subPath, val, committer);

			var message = subPath + ':change';
			this.eventSub.publish(message, val, committer);
		},

		/**
		 * This will merge the attribute with the stage.
		 * @protected
		 */
		mergeStage: function()
		{
			/* this will clone the stage object to the
			attribute object */
			this.attributes = base.cloneObject(this.stage);
			this.dirty = false;
		},

		/**
		 * This will get the model data.
		 */
		getModelData: function()
		{
			this.mergeStage();
			return this.attributes;
		},

		/**
		 * This will revert the stage back to the previous attributes.
		 */
		revert: function()
		{
			/* this will reset the stage to the previous
			attributes */
			this.set(this.attributes);
			this.dirty = false;
		},

		/**
		 * This will delete an attribute.
		 *
		 * @param {object} obj
		 * @param {string} attr
		 * @return {*}
		 */
		_deleteAttr: function(obj, attr)
		{
			var utils = DataUtils;
			if(utils.hasDeepData(attr))
			{
				var props = utils.getSegments(attr),
				length = props.length,
				end = length - 1;

				for (var i = 0; i < length; i++)
				{
					var prop = props[i];
					var propValue = obj[prop];
					if (propValue !== undefined)
					{
						if(i === end)
						{
							if(base.isArray(obj))
							{
								obj.splice(prop, 1);
								break;
							}

							delete obj[prop];
							break;
						}
						obj = propValue;
					}
					else
					{
						break;
					}
				}
			}
			else
			{
				delete obj[attr];
			}
		},

		/**
		 * This will get the value of an attribute.
		 *
		 * @param {object} obj
		 * @param {string} attr
		 * @return {*}
		 */
		_getAttr: function(obj, attr)
		{
			var utils = DataUtils;
			if(utils.hasDeepData(attr))
			{
				var props = utils.getSegments(attr),
				length = props.length,
				end = length - 1;

				for (var i = 0; i < length; i++)
				{
					var prop = props[i];
					var propValue = obj[prop];
					if (propValue !== undefined)
					{
						obj = propValue;

						if(i === end)
						{
							return obj;
						}
					}
					else
					{
						break;
					}
				}

				return undefined;
			}
			else
			{
				return obj[attr];
			}
		}
	});

	/**
	 * SimpleData
	 *
	 * This will extend Data to add a simple data object
	 * that doesn't allow deep nested data.
	 * @class
	 * @augments BasicData
	 */
	var SimpleData = BasicData.extend(
	{
		/**
		 * This will publish an update to the data binder.
		 *
		 * @override
		 * @protected
		 * @param {string} attr
		 * @param {*} val
		 * @param {*} committer
		 * @param {*} prevValue
		 */
		_publish: function(attr, val, committer, prevValue)
		{
			var message = attr + ':change';
			this.eventSub.publish(message, val, prevValue, committer);

			committer = committer || this;

			DataBinder.publish(this._dataId + attr, val, committer);
		}
	});

	base.extend.Data = Data;
	base.extend.SimpleData = SimpleData;

	/**
	 * Model
	 *
	 * This will extend Data to add a model that can specify
	 * a service that connects to a remote source.
	 */
	var Model = Data.extend(
	{
		/**
		 * @constructor
		 * @param {object} [settings]
		 */
		constructor: function(settings)
		{
			Data.call(this, settings);

			this.initialize();

			/**
			 * @member {object} xhr The model service.
			 */
			this.xhr = null;
		},

		/**
		 * This adds a method to call if you want the model
		 * to do something when its initialized.
		 */
		initialize: function()
		{

		}
	});

	/**
	 * This will get the defaults from the settings.
	 *
	 * @param {object} settings
	 * @return {object}
	 */
	var setupDefaultAttr = function(settings)
	{
		var attributes = {};
		if(!settings || typeof settings !== 'object')
		{
			return attributes;
		}

		var defaults = settings.defaults;
		if(!defaults)
		{
			return attributes;
		}

		for(var prop in defaults)
		{
			if(defaults.hasOwnProperty(prop))
			{
				var attr = defaults[prop];
				if(typeof attr !== 'function')
				{
					attributes[prop] = attr;
				}
			}
		}
		delete settings.defaults;
		return attributes;
	};

	/**
	 * This will get the xhr settings.
	 *
	 * @param {object} settings
	 * @return {object}
	 */
	var getXhr = function(settings)
	{
		if(!settings || typeof settings.xhr !== 'object')
		{
			return {};
		}

		var settingsXhr = settings.xhr,
		xhr = base.createObject(settingsXhr);
		delete settings.xhr;
		return xhr;
	};

	/* this will track the number of model types */
	var modelTypeNumber = 0;

	/**
	 * This will extend the model to a child model.
	 *
	 * @static
	 * @param {object} settings
	 * @return {object} The new model.
	 */
	Model.extend = function(settings)
	{
		var parent = this,
		xhr = getXhr(settings),
		modelService = this.prototype.xhr.extend(xhr);

		settings = settings || {};

		/* this will setup the default attribute settings for
		the model */
		var defaultAttributes = setupDefaultAttr(settings),
		model = function(instanceSettings)
		{
			/* this will get the instance attributes that
			the model will set as attribute data */
			var instanceAttr = setupAttrSettings(instanceSettings);

			/* we want to extend the default attr with the
			instance attr before we set the data and call
			the parent constructor */
			instanceAttr = base.extendObject(defaultAttributes, instanceAttr);
			parent.call(this, instanceAttr);

			/* this will setup the model service and
			pass the new model instance to the service */
			this.xhr = new modelService(this);
		};

		/* this will extend the model and add the static
		methods to the new object */
		var extended = model.prototype = base.extendClass(this.prototype, settings);
		extended.constructor = model;
		extended.xhr = modelService;

		/* this will assign a unique id to the model type */
		extended.dataTypeId = 'bm' + (modelTypeNumber++);

		/* this will extend the static methods */
		base.extendObject(parent, model);
		return model;
	};

	base.extend.Model = Model;

	/**
	 * ModelService
	 *
	 * This will create a new model service.
	 * @class
	 */
	var ModelService = base.Class.extend(
	{
		/**
		 * @constructor
		 * @param {object} model
		 */
		constructor: function(model)
		{
			/**
			 * @member {object} model
			 */
			this.model = model;

			this.url = '';
			this.init();
		},

		init: function()
		{
			var model = this.model;
			if(model && model.url)
			{
				this.url = model.url;
			}
		},

		validateCallBack: null,

		/**
		 * This will check if the model is valid.
		 *
		 * @return {boolean}
		 */
		isValid: function()
		{
			var result = this.validate();
			if(result !== false)
			{
				var callBack = this.validateCallBack;
				if(typeof callBack === 'function')
				{
					callBack(result);
				}
			}
			return result;
		},

		/**
		 * This should be overriden to validate the model
		 * before submitting.
		 *
		 * @return {boolean}
		 */
		validate: function()
		{
			return true;
		},

		/**
		 * This can be overriden to add default params
		 * with each request.
		 *
		 * @protected
		 * @return {string}
		 */
		getDefaultParams: function()
		{
			return '';
		},

		/**
		 * This will setup the request params.
		 *
		 * @protected
		 * @param {(string|object)} params
		 * @return {(string|object)}
		 */
		setupParams: function(params)
		{
			var defaults = this.getDefaultParams();
			params = this.addParams(params, defaults);
			return params;
		},

		/**
		 * This will add the params.
		 *
		 * @protected
		 * @param {*} params
		 * @param {*} addingParams
		 * @return {(string|object)}
		 */
		addParams: function(params, addingParams)
		{
			params = params || {};
			if(typeof params === 'string')
			{
				params = base.parseQueryString(params);
			}

			if(!addingParams)
			{
				return params;
			}

			if(typeof addingParams === 'string')
			{
				addingParams = base.parseQueryString(addingParams);
			}

			if(this._isFormData(params))
			{
				for(var key in addingParams)
				{
					if(addingParams.hasOwnProperty(key))
					{
						params.append(key, addingParams[key]);
					}
				}
			}
			else
			{
				params = base.extendObject(params, addingParams);
			}

			return params;
		},

		/**
		 * @member {string} objectType The return type.
		 */
		objectType: 'item',

		/**
		 * This will get the model by id.
		 *
		 * @param {string} [instanceParams]
		 * @param {function} [callBack]
		 * @return {object}
		 */
		get: function(instanceParams, callBack)
		{
			var id = this.model.get('id'),
			params = 'op=get' +
						 '&id=' + id;

			var model = this.model,
			self = this;
			return this.request(params, instanceParams, callBack, function(response)
			{
				if(response)
				{
					/* this will update the model with the get request
					response */
					var object = self.getObject(response);
					if(object)
					{
						model.set(object);
					}
				}
			});
		},

		/**
		 * This will get the object from the response.
		 *
		 * @protected
		 * @param {object} response
		 * @return {object}
		 */
		getObject: function(response)
		{
			/* this will update the model with the get request
			response */
			var object = response[this.objectType] || response;
			return object || false;
		},

		/**
		 * This will return a string with the model data json encoded.
		 *
		 * @protected
		 * @return {string}
		 */
		setupObjectData: function()
		{
			var item = this.model.get();
			return this.objectType + '=' + base.prepareJsonUrl(item);
		},

		/**
		 * This will add or update the model.
		 *
		 * @param {string} [instanceParams]
		 * @param {function} [callBack]
		 * @return {object}
		 */
		setup: function(instanceParams, callBack)
		{
			if(!this.isValid())
			{
				return false;
			}

			var params = 'op=setup' +
						 '&' + this.setupObjectData();

			/* this will add the instance params with the
			method params */
			params = this.addParams(params, instanceParams, instanceParams);

			return this.request(params, callBack);
		},

		/**
		 * This will add the model.
		 *
		 * @param {string} [instanceParams]
		 * @param {function} [callBack]
		 * @return {object}
		 */
		add: function(instanceParams, callBack)
		{
			if(!this.isValid())
			{
				return false;
			}

			var params = 'op=add' +
						 '&' + this.setupObjectData();

			return this.request(params, instanceParams, callBack);
		},

		/**
		 * This will update the model.
		 *
		 * @param {string} [instanceParams]
		 * @param {function} [callBack]
		 * @return {object}
		 */
		update: function(instanceParams, callBack)
		{
			if(!this.isValid())
			{
				return false;
			}

			var params = 'op=update' +
						 '&' + this.setupObjectData();

			return this.request(params, instanceParams, callBack);
		},

		/**
		 * This will delete the model.
		 *
		 * @param {string} [instanceParams]
		 * @param {function} [callBack]
		 * @return {object}
		 */
		delete: function(instanceParams, callBack)
		{
			var id = this.model.get('id'),
			params = 'op=delete' +
						 '&id=' + id;

			return this.request(params, instanceParams, callBack);
		},

		/**
		 * This will list rows of the model.
		 *
		 * @param {string} [instanceParams]
		 * @param {function} [callBack]
		 * @param {int} start
		 * @param {int} count
		 * @param {string} filter
		 * @return {object}
		 */
		all: function(instanceParams, callBack, start, count, filter)
		{
			filter = filter || '';
			start = !isNaN(start)? start : 0;
			count = !isNaN(count)? count : 50;

			var params = 'op=all' +
						 '&option=' + filter +
						 '&start=' + start +
						 '&stop=' + count;

			return this.request(params, instanceParams, callBack);
		},

		/**
		 * This will make an ajax request.
		 *
		 * @param {string} method
		 * @param {(string|object)} params
		 * @param {function} callBack
		 * @param {function} [requestCallBack]
		 * @param {object}
		 */
		setupRequest: function(method, params, callBack, requestCallBack)
		{
			var self = this,
			settings = {
				url: this.url,
				type: method,
				params: params,
				completed: function(response, xhr)
				{
					if(typeof requestCallBack === 'function')
					{
						requestCallBack(response);
					}

					self.getResponse(response, callBack, xhr);
				}
			};

			var overrideHeader = this._isFormData(params);
			if(overrideHeader)
			{
				settings.headers = {};
			}

			return base.ajax(settings);
		},

		_isFormData: function(data)
		{
			return data instanceof FormData;
		},

		/**
		 * This will make an ajax request.
		 *
		 * @param {(string|object)} params
		 * @param {string} instanceParams
		 * @param {function} callBack
		 * @param {function} [requestCallBack]
		 * @param {object}
		 */
		request: function(params, instanceParams, callBack, requestCallBack)
		{
			return this._request('POST', params, instanceParams, callBack, requestCallBack);
		},

		/**
		 * This will make a GET request.
		 *
		 * @param {(string|object)} params
		 * @param {string} instanceParams
		 * @param {function} callBack
		 * @param {function} [requestCallBack]
		 * @param {object}
		 */
		_get: function(params, instanceParams, callBack, requestCallBack)
		{
			return this._request('GET', params, instanceParams, callBack, requestCallBack);
		},

		/**
		 * This will make a POST request.
		 *
		 * @param {(string|object)} params
		 * @param {string} instanceParams
		 * @param {function} callBack
		 * @param {function} [requestCallBack]
		 * @param {object}
		 */
		_post: function(params, instanceParams, callBack, requestCallBack)
		{
			return this._request('POST', params, instanceParams, callBack, requestCallBack);
		},

		/**
		 * This will make a PUT request.
		 *
		 * @param {(string|object)} params
		 * @param {string} instanceParams
		 * @param {function} callBack
		 * @param {function} [requestCallBack]
		 * @param {object}
		 */
		_put: function(params, instanceParams, callBack, requestCallBack)
		{
			return this._request('PUT', params, instanceParams, callBack, requestCallBack);
		},

		/**
		 * This will make a DELETE request.
		 *
		 * @param {(string|object)} params
		 * @param {string} instanceParams
		 * @param {function} callBack
		 * @param {function} [requestCallBack]
		 * @param {object}
		 */
		_delete: function(params, instanceParams, callBack, requestCallBack)
		{
			return this._request('DELETE', params, instanceParams, callBack, requestCallBack);
		},

		/**
		 * This will make an ajax request.
		 *
		 * @param {string} method
		 * @param {(string|object)} params
		 * @param {string} instanceParams
		 * @param {function} callBack
		 * @param {function} [requestCallBack]
		 * @param {object}
		 */
		_request: function(method, params, instanceParams, callBack, requestCallBack)
		{
			params = this.setupParams(params);
			params = this.addParams(params, instanceParams);

			return this.setupRequest(method, params, callBack, requestCallBack);
		},

		getResponse: function(response, callBack, xhr)
		{
			/* this will check to return the response
			to the callBack function */
			if(typeof callBack === 'function')
			{
				callBack(response, xhr);
			}
		}
	});

	/* we need to add the service object to the
	model prototype as the xhr service */
	Model.prototype.xhr = ModelService;
})();

/* base framework module */
/*
	this will create dynamic html to be
	added and modified
*/
(function()
{
	"use strict";

	var DataTracker = base.DataTracker,
	DataBinder = base.DataBinder;

	/**
	 * This will get the javascript property name.
	 *
	 * @param {string} prop
	 * @return {string}
	 */
	var filterProperty = function(prop)
	{
		switch(prop)
		{
			case 'class':
				prop = 'className';
				break;
			case 'text':
				prop = 'textContent';
				break;
			case 'for':
				prop = 'htmlFor';
				break;
			case 'readonly':
				prop = 'readOnly';
				break;
			case 'maxlength':
				prop = 'maxLength';
				break;
			case 'cellspacing':
				prop = 'cellSpacing';
				break;
			case 'rowspan':
				prop = 'rowSpan';
				break;
			case 'colspan':
				prop = 'colSpan';
				break;
			case 'tabindex':
				prop = 'tabIndex';
				break;
			case 'cellpadding':
				prop = 'cellPadding';
				break;
			case 'usemap':
				prop = 'useMap';
				break;
			case 'frameborder':
				prop = 'frameBorder';
				break;
			case 'contenteditable':
				prop = 'contentEditable';
				break;
		}

		return prop;
	};

	/**
	 * This will remove on from a property.
	 *
	 * @param {string} prop
	 * @return {string}
	 */
	var removePrefix = function(prop)
	{
		if(typeof prop === 'string' && prop.substring(0, 2) === 'on')
		{
			return prop.substring(2);
		}
		return prop;
	};

	/**
	 * htmlBuilder
	 *
	 * This will create an html builder object that can create
	 * and remove dom elements.
	 * @class
	 */
	var htmlBuilder = base.Class.extend(
	{
		/**
		 * @constructor
		 */
		constructor: function()
		{

		},

		/**
		 * This will create a new element.
		 *
		 * @param {string} nodeName The node name.
		 * @param {object} attrObject The node attributes.
		 * @param {object} container The node container.
		 * @param {boolean} [prepend=false] Add to the begining of the container.
		 * @return {object} The new element.
		 */
		create: function(nodeName, attrObject, container, prepend)
		{
			var obj = document.createElement(nodeName);
			this._addElementAttrs(obj, attrObject);

			/* we want to check if the new element should be
			added to the begining or end */
			if(prepend === true)
			{
				this.prepend(container, obj);
			}
			else
			{
				this.append(container, obj);
			}
			return obj;
		},

		/**
		 * This will add the element attributes.
		 *
		 * @protected
		 * @param {object} obj
		 * @param {object} attrObject
		 */
		_addElementAttrs: function(obj, attrObject)
		{
			/* we want to check if we have attrributes to add */
			if(!attrObject || typeof attrObject !== 'object')
			{
				return false;
			}

			/* we need to add the type if set to stop ie
			from removing the value if set after the value is
			added */
			var type = attrObject.type;
			if(typeof type !== 'undefined')
			{
				base.setAttr(obj, 'type', type);
			}

			/* we want to add each attr to the obj */
			for(var prop in attrObject)
			{
				/* we have already added the type so we need to
				skip if the prop is type */
				if(attrObject.hasOwnProperty(prop) === false || prop === 'type')
				{
					continue;
				}

				var attrPropValue = attrObject[prop];

				/* we want to check to add the attr settings
				 by property name */
				if(prop === 'innerHTML')
				{
					obj.innerHTML = attrPropValue;
				}
				else if(prop.substr(4, 1) === '-')
				{
					// this will handle data and aria attributes
					base.setAttr(obj, prop, attrPropValue);
				}
				else
				{
					this.addAttr(obj, prop, attrPropValue);
				}
			}
		},

		/**
		 * This will add html to an element.
		 *
		 * @param {object} obj
		 * @param {string} content
		 */
		addHtml: function(obj, content)
		{
			if(typeof content !== 'undefined' && content !== '')
			{
				/* we need to check if we are adding inner
				html content or just a string */
				var pattern = /(?:<[a-z][\s\S]*>)/i;
				if(pattern.test(content))
				{
					/* html */
					obj.innerHTML = content;
				}
				else
				{
					/* string */
					obj.textContent = content;
				}
			}
		},

		/**
		 * This will add an element attribute.
		 *
		 * @param {object} obj
		 * @param {object} attr
		 * @param {string} value
		 */
		addAttr: function(obj, attr, value)
		{
			if(value === '' || !attr)
			{
				return false;
			}

			/* we want to check to add a value or an event listener */
			var type = typeof value;
			if(type === 'function')
			{
				/* this will add the event using the base events
				so the event is tracked */
				attr = removePrefix(attr);
				base.addListener(attr, obj, value);
			}
			else
			{
				var attrName = filterProperty(attr);
				obj[attrName] = value;
			}
		},

		/**
		 * This will create a doc fragment.
		 *
		 * @return {object}
		 */
		createDocFragment: function()
		{
			return document.createDocumentFragment();
		},

		/**
		 * This will create a text node.
		 *
		 * @param {string} text
		 * @param {object} container
		 * @return {object}
		 */
		createTextNode: function(text, container)
		{
			var obj = document.createTextNode(text);

			if(container)
			{
				this.append(container, obj);
			}
			return obj;
		},

		/**
		 * This will create the options on a select.
		 *
		 * @param {object} selectElem
		 * @param {array} optionArray
		 * @param {string} [defaultValue]
		 */
		setupSelectOptions: function(selectElem, optionArray, defaultValue)
		{
			if(!selectElem || typeof selectElem !== 'object')
			{
				return false;
			}

			if(!optionArray || !optionArray.length)
			{
				return false;
			}

			/* create each option then add it to the select */
			for(var n = 0, maxLength = optionArray.length; n < maxLength; n++)
			{
				var settings = optionArray[n];
				var option = selectElem.options[n] = new Option(settings.label, settings.value);

				/* we can select an option if a default value
				has been sumbitted */
				if(defaultValue !== null && option.value == defaultValue)
				{
					option.selected = true;
				}
			}
		},

		/**
		 * This will remove an elements data.
		 *
		 * @param {object} ele
		 */
		removeElementData: function(ele)
		{
			/* we want to do a recursive remove child
			removal */
			var children = ele.childNodes;
			if(children)
			{
				var length = children.length - 1;
				for(var i = length; i >= 0; i--)
				{
					var child = children[i];
					if(child)
					{
						/* this will remove the child element data
						before the parent is removed */
						this.removeElementData(child);
					}
				}
			}

			DataTracker.remove(ele);

			/* this will loop though the element attrs to
			check for any event listeners to cancel and
			remove any data binding */
			var attributes = ele.attributes;
			if(attributes)
			{
				/* this will only remove the data bind */
				var bound = attributes['data-bind-id'];
				if(bound)
				{
					/* this will check to remove any data bindings
					to the element */
					DataBinder.unbind(ele);
				}
			}
		},

		/**
		 * This will remove an element and its data.
		 *
		 * @param {object} obj
		 */
		removeElement: function(obj)
		{
			var container;

			if(!obj || !(container = obj.parentNode))
			{
				return this;
			}

			/* this will remove all element data and binding
			and remove from the parent container */
			this.removeElementData(obj);
			container.removeChild(obj);

			return this;
		},

		/**
		 * This will remove an element.
		 *
		 * @param {object} child
		 */
		removeChild: function(child)
		{
			this.removeElement(child);
		},

		/**
		 * This will remove all elements from the container.
		 *
		 * @param {object} container
		 */
		removeAll: function(container)
		{
			if(typeof container === 'object')
			{
				var children = container.childNodes;
				for(var child in children)
				{
					if(children.hasOwnProperty(child))
					{
						this.removeElementData(children[child]);
					}
				}
				container.innerHTML = '';
			}
		},

		/**
		 * This change the parent of an element.
		 *
		 * @param {object} child
		 * @param {object} newParent
		 */
		changeParent: function(child, newParent)
		{
			if(typeof child === 'string')
			{
				child = document.getElementById(child);
			}

			var container = (typeof newParent === 'string')? document.getElementById(newParent) : newParent;
			container.appendChild(child);
		},

		/**
		 * This will append a child element.
		 *
		 * @param {object} parent
		 * @param {object} child
		 */
		append: function(parent, child)
		{
			switch(typeof parent)
			{
				case "object":
					break;
				case "string":
					parent = document.getElementById(parent);
					break;
				case "undefined":
					parent = document.body;
					break;
			}

			parent.appendChild(child);
		},

		/**
		 * This will prepend a child element.
		 *
		 * @param {object} parent
		 * @param {object} child
		 */
		prepend: function(parent, child)
		{
			switch(typeof parent)
			{
				case "object":
					break;
				case "string":
					parent = document.getElementById(parent);
					break;
				case "undefined":
					parent = document.body;
					break;
			}

			parent.insertBefore(child, parent.firstChild);
		},

		/**
		 * This will clone an element.
		 *
		 * @param {object} node
		 * @param {boolean} deepCopy
		 * @return {object}
		 */
		clone: function(node, deepCopy)
		{
			if(!node || typeof node !== 'object')
			{
				return false;
			}

			deepCopy = deepCopy || false;
			return node.cloneNode(deepCopy);
		}
	});

	/* we want to use a few private functions to add input selection
	to an element and reduce any closures */
	/**
	 * This will focus an element.
	 *
	 * @param {object} e
	 */
	var focusElement = function(e)
	{
		e = e || window.event;
		var src = e.srcElement || e.target;
		src.select();
	};

	base.extend.htmlBuilder = htmlBuilder;

})();

/* base framework module */
/*
	this will create a layout builder object
	and shortcut functions.
*/
(function()
{
	"use strict";

	/**
	 * LayoutParser
	 *
	 * This will parse JSON layouts.
	 * @class
	 */
	var LayoutParser = base.Class.extend(
	{
		/**
		 * @member {array} _reserved
		 * @protected
		 */
		_reserved: [
			'tag',
			'bind',
			'onCreated',
			'route',
			'switch',
			'onSet',
			'onState',
			'watch',
			'cache'
		],

		/**
		 * This will get the tag name of an element.
		 *
		 * @param {object} obj
		 * @return {string}
		 */
		getElementTag: function(obj)
		{
			var type = 'div';

			var node = obj.tag || obj.t;
			if (typeof node !== 'undefined')
			{
				type = obj.tag = node;
			}

			return type;
		},

		/**
		 * This will parse a layout element.
		 *
		 * @param {object} obj
		 * @return {object}
		 */
		parseElement: function(obj)
		{
			var attr = {},
			children = [];

			var tag = this.getElementTag(obj);
			if(tag === 'button')
			{
				attr.type = attr.type || 'button';
			}

			if(typeof obj.children === 'undefined')
			{
				obj.children = null;
			}

			var reserved = this._reserved;

			for (var key in obj)
			{
				if (obj.hasOwnProperty(key))
				{
					var value = obj[key];
					if (value === null || base.inArray(reserved, key) !== -1)
					{
						continue;
					}

					/* we need to filter the children from the attr
					settings. the children need to keep their order. */
					if (typeof value !== 'object')
					{
						attr[key] = value;
					}
					else
					{
						if (key === 'children')
						{
							children = children.concat(value);
						}
						else
						{
							children.push(value);
						}
					}
				}
			}

			return {
				tag: tag,
				attr: attr,
				children: children
			};
		}
	});

	/**
	 * WatcherHelper
	 *
	 * This helper creates watcher callBacks, parses watcher strings
	 * and sets up watchers.
	 */
	var WatcherHelper =
	{
		/**
		 * This will get the property names to be watched.
		 *
		 * @protected
		 * @param {string} string
		 * @return {(array|null)}
		 */
		_getWatcherProps: function(string)
		{
			var pattern = /\[\[(.*?)\]\]/g;
			var matches = string.match(pattern);
			if(matches)
			{
				pattern = /(\[\[|\]\])/g;
				for(var i = 0, length = matches.length; i < length; i++)
				{
					matches[i] = matches[i].replace(pattern, '');
				}
			}
			return matches;
		},

		/**
		 * This will update an element attribute.
		 *
		 * @protected
		 * @param {object} ele
		 * @param {string} attr
		 * @param {string} value
		 */
		updateAttr: function(ele, attr, value)
		{
			if(attr === 'text' || attr === 'textContent')
			{
				ele.textContent = value;
			}
			else if(attr === 'innerHTML')
			{
				ele.innerHTML = value;
			}
			else
			{
				base.setAttr(ele, attr, value);
			}
		},

		/**
		 * This will get a watcher callBack.
		 *
		 * @protected
		 * @param {object} ele
		 * @param {(string|array)} data
		 * @param {string} string
		 * @param {string} attr
		 * @param {boolean} isArray
		 * @return {function}
		 */
		_getWatcherCallBack: function(ele, data, string, attr, isArray)
		{
			var self = this;
			return function()
			{
				var count = 0,
				pattern = /(\[\[(.*?)\]\])/g,
				value = string.replace(pattern, function()
				{
					var watcherData = (isArray)? data[count] : data;
					count++;
					var result = watcherData.get(arguments[2]);
					return (typeof result !== 'undefined'? result : '');
				});
				self.updateAttr(ele, attr, value);
			};
		},

		/**
		 * This will get a watcher value.
		 *
		 * @private
		 * @param {(string|object)} settings
		 * @param {object} parent
		 * @return {array}
		 */
		getValue: function(settings, parent)
		{
			if(typeof settings === 'string')
			{
				settings =
				{
					value: settings
				};
			}

			var value = settings.value;
			if(base.isArray(value) === false)
			{
				value = [value, (parent.data || parent.state)];
			}
			return value;
		},

		/**
		 * This will get the watcher callBack.
		 *
		 * @param {object} settings
		 * @param {object} ele
		 * @param {object} data
		 * @param {string} string
		 * @param {bool} isDataArray
		 * @return {function}
		 */
		getCallBack: function(settings, ele, data, string, isDataArray)
		{
			var callBack,
			overrideCallBack = settings.callBack;
			if(typeof overrideCallBack === 'function')
			{
				callBack = function(value, committer)
				{
					overrideCallBack(ele, value, committer);
				};
			}
			else
			{
				var attr = settings.attr || 'textContent';
				callBack = this._getWatcherCallBack(ele, data, string, attr, isDataArray);
			}
			return callBack;
		},

		/**
		 * This will add a data watcher.
		 *
		 * @private
		 * @param {object} ele
		 * @param {(string|object)} settings
		 * @param {object} parent
		 */
		addDataWatcher: function(ele, settings, parent)
		{
			var value = this.getValue(settings, parent),
			data = value[1];
			if(!data)
			{
				return false;
			}

			var string = value[0],
			isDataArray = base.isArray(data);

			var callBack = this.getCallBack(settings, ele, data, string, isDataArray);
			var props = this._getWatcherProps(string);
			for(var i = 0, length = props.length; i < length; i++)
			{
				var watcherData = (isDataArray)? data[i] : data;
				this.addWatcher(ele, watcherData, props[i], callBack);
			}
		},

		/**
		 * This will setup a data watcher.
		 *
		 * @param {object} ele
		 * @param {(string|object)} settings
		 * @param {object} parent
		 */
		setup: function(ele, settings, parent)
		{
			if(!settings)
			{
				return false;
			}

			this.addDataWatcher(ele, settings, parent);
		},

		/**
		 * This will add a watcher.
		 *
		 * @private
		 * @param {object} ele
		 * @param {object} data
		 * @param {string} prop
		 * @param {function} callBack
		 */
		addWatcher: function(ele, data, prop, callBack)
		{
			base.DataBinder.watch(ele, data, prop, callBack);
		}
	};

	var parser = new LayoutParser();

	/**
	 * LayoutBuilder
	 *
	 * This will build JSON layouts.
	 *
	 * @class
	 * @augments base.htmlBuilder
	 */
	var LayoutBuilder = base.htmlBuilder.extend(
	{
		/**
		 * This will create a new element.
		 *
		 * @override
		 * @param {string} nodeName The node name.
		 * @param {object} attrObject The node attributes.
		 * @param {object} container The node container.
		 * @param {boolean} [prepend=false] Add to the begining of the container.
		 * @return {object} The new element.
		 */
		create: function(nodeName, attrObject, container, prepend)
		{
			var obj = document.createElement(nodeName);
			this._addElementAttrs(obj, attrObject);
			this.append(container, obj);
			return obj;
		},

		/**
		 * This will build a JSON layout.
		 *
		 * @param {object} obj The JSON layout.
		 * @param {object} [container] The parent receiving the layout.
		 * @param {object} [parent] The component adding the layout.
		 * @return {object} The doc Frag element.
		 */
		build: function(obj, container, parent)
		{
			var fragment = this.createDocFragment();

			if (base.isArray(obj))
			{
				var item;
				for (var i = 0, length = obj.length; i < length; i++)
				{
					item = obj[i];
					this.buildElement(item, fragment, parent);
				}
			}
			else
			{
				this.buildElement(obj, fragment, parent);
			}

			if(container && typeof container === 'object')
			{
				container.appendChild(fragment);
			}
			return fragment;
		},

		/**
		 * This will build an element or component.
		 *
		 * @param {object} obj
		 * @param {object} container
		 * @param {object} [parent] The component adding the layout.
		 */
		buildElement: function(obj, container, parent)
		{
			if(obj.component || obj.isComponent === true)
			{
				this.createComponent(obj, container, parent);
			}
			else
			{
				this.createElement(obj, container, parent);
			}
		},

		/**
		 * This will append a child element to a parent.
		 *
		 * @override
		 * @param {object} parent
		 * @param {object} child
		 */
		append: function(parent, child)
		{
			parent.appendChild(child);
		},

		/**
		 * This will create an element.
		 *
		 * @protected
		 * @param {object} obj
		 * @param {object} container
		 * @param {object} [parent] The component adding the layout.
		 */
		createElement: function(obj, container, parent)
		{
			var settings = parser.parseElement(obj);
			var ele = this.createNode(settings, container);

			var propName = obj.cache;
			if(parent && propName)
			{
				parent[propName] = ele;
			}

			if(typeof obj.onCreated === 'function')
			{
				obj.onCreated(ele);
			}

			/* this will check to bind the element to
			the prop of a data */
			var bind = obj.bind;
			if(bind)
			{
				this.bindElement(ele, bind, parent);
			}

			if(obj.route)
			{
				this.addRoute(ele, obj.route, parent);
			}

			if(obj.switch)
			{
				this.addSwitch(ele, obj.switch, parent);
			}

			if(parent)
			{
				var onState = obj.onState;
				if(onState && onState.length)
				{
					this.onState(ele, onState, parent);
				}

				var onSet = obj.onSet;
				if(onSet && onSet.length)
				{
					this.onSet(ele, onSet, parent);
				}
			}

			if(obj.watch)
			{
				this.watch(ele, obj.watch, parent);
			}

			/* we want to recursively add the children to
			the new element */
			var children = settings.children;
			if (children.length > 0)
			{
				var child;
				for (var i = 0, length = children.length; i < length; i++)
				{
					child = children[i];
					if(child === null)
					{
						continue;
					}

					this.buildElement(child, ele, parent);
				}
			}
		},

		/**
		 * This will get the data source from the parent component.
		 *
		 * @protected
		 * @param {object} [parent]
		 * @return {(object|boolean)}
		 */
		_getDataSource: function(parent)
		{
			if(!parent)
			{
				return false;
			}

			var data = (parent.data || parent.state);
			return data || false;
		},

		/**
		 * This will bind an element to data.
		 *
		 * @protected
		 * @param {object} ele
		 * @param {(string|array)} bind
		 * @param {*} parent
		 */
		bindElement: function(ele, bind, parent)
		{
			var data, prop, filter;

			if(typeof bind === 'string')
			{
				data = this._getDataSource(parent);
				if(!data)
				{
					return false;
				}

				prop = bind;
			}
			else if(base.isArray(bind))
			{
				if((typeof bind[0] !== 'object'))
				{
					var dataSource = this._getDataSource(parent);
					if(!dataSource)
					{
						return false;
					}
					else
					{
						bind.unshift(dataSource);
					}
				}

				data = bind[0];
				prop = bind[1];
				filter = bind[2];
			}

			base.DataBinder.bind(ele, data, prop, filter);
		},

		/**
		 * This will add a route.
		 *
		 * @protected
		 * @param {object} ele
		 * @param {(object|array)} route
		 * @param {object} parent
		 */
		addRoute: function(ele, route, parent)
		{
			if(!route)
			{
				return false;
			}

			if(base.isArray(route))
			{
				for(var i = 0, length = route.length; i < length; i++)
				{
					this.setupRoute(ele, route[i], parent);
				}
			}
			else
			{
				this.setupRoute(ele, route, parent);
			}
		},

		/**
		 * This will setup a route.
		 *
		 * @protected
		 * @param {object} ele
		 * @param {object} route
		 * @param {object} parent
		 */
		setupRoute: function(ele, route, parent)
		{
			route.container = ele;
			route.parent = parent;
			var newRoute = base.router.add(route);

			base.DataTracker.add(ele, 'routes',
			{
				route: newRoute
			});
		},

		/**
		 * This will add a switch.
		 *
		 * @protected
		 * @param {object} ele
		 * @param {array} group
		 * @param {object} parent
		 */
		addSwitch: function(ele, group, parent)
		{
			for(var i = 0, length = group.length; i < length; i++)
			{
				var route = group[i];
				route.container = ele;
				route.parent = parent;
			}

			var id = base.router.addSwitch(group);
			base.DataTracker.add(ele, 'switch',
			{
				id: id
			});
		},

		/**
		 * This will add a watcher.
		 *
		 * @protected
		 * @param {object} ele
		 * @param {(array|object)} watcher
		 * @param {object} [parent]
		 */
		watch: function(ele, watcher, parent)
		{
			if(!watcher)
			{
				return false;
			}

			if(base.isArray(watcher))
			{
				for(var i = 0, length = watcher.length; i < length; i++)
				{
					WatcherHelper.setup(ele, watcher[i], parent);
				}
			}
			else
			{
				WatcherHelper.setup(ele, watcher, parent);
			}
		},

		/**
		 * This will add an onState watcher.
		 *
		 * @param {object} ele
		 * @param {array} onState
		 * @param {object} parent
		 */
		onState: function(ele, onState, parent)
		{
			this.onUpdate(ele, parent.state, onState, parent);
		},

		/**
		 * This will add an onSet watcher.
		 *
		 * @param {object} ele
		 * @param {array} onSet
		 * @param {object} parent
		 */
		onSet: function(ele, onSet, parent)
		{
			this.onUpdate(ele, parent.data, onSet, parent);
		},

		/**
		 * This will setup a data watcher.
		 *
		 * @param {object} ele
		 * @param {object} data
		 * @param {string} prop
		 * @param {(function|object)} callBack
		 * @param {string} parent
		 */
		onUpdate: function(ele, data, settings, parent)
		{
			var prop,
			self = this,
			callBack, update;

			if(base.isArray(settings[0]))
			{
				for(var i = 0, maxLength = settings.length; i < maxLength; i++)
				{
					var itemSettings = settings[i];
					if(!itemSettings)
					{
						continue;
					}

					this.onUpdate(ele, data, itemSettings, parent);
				}
				return;
			}

			if(settings.length < 3)
			{
				prop = settings[0];
				callBack = settings[1];
			}
			else
			{
				data = settings[0];
				prop = settings[1];
				callBack = settings[2];
			}

			if(!data || !prop)
			{
				return false;
			}

			switch(typeof callBack)
			{
				case 'object':
					update = function(value)
					{
						self.addClass(ele, callBack, value);
					};
					break;
				case 'function':
					update = function(value)
					{
						self.updateElement(ele, callBack, prop, value, parent);
					};
					break;
			}

			base.DataBinder.watch(ele, data, prop, update);
		},

		/**
		 * This will setup a data watcher.
		 *
		 * @private
		 * @param {object} ele
		 * @param {function} callBack
		 * @param {string} value
		 * @param {string} parent
		 */
		updateElement: function(ele, callBack, prop, value, parent)
		{
			var result = callBack(ele, value);
			switch(typeof result)
			{
				case 'object':
					if(parent && parent.persist === true && parent.state)
					{
						var key = prop + ':' + value,
						state = parent.state,
						previousResult = state.get(key);
						if(typeof previousResult !== 'undefined')
						{
							result = previousResult;
						}

						state.set(key, result);
					}
					this.rebuild(ele, result, parent);
					break;
				case 'string':
					this.addHtml(ele, result);
					break;
			}
		},

		/**
		 * This will add or remove a class from an element.
		 *
		 * @param {object} ele
		 * @param {object} stateStyles
		 * @param {*} newValue
		 */
		addClass: function(ele, stateStyles, newValue)
		{
			for(var prop in stateStyles)
			{
				if(!stateStyles.hasOwnProperty(prop) || !prop)
				{
					continue;
				}

				if(stateStyles[prop] === newValue)
				{
					base.addClass(ele, prop);
				}
				else
				{
					base.removeClass(ele, prop);
				}
			}
		},

		/**
		 * This will reset an element innerHTML and rebuild.
		 *
		 * @private
		 * @param {object} ele
		 * @param {object} layout
		 * @param {object} parent
		 */
		rebuild: function(ele, layout, parent)
		{
			this.removeAll(ele);
			this.build(layout, ele, parent);
		},

		/**
		 * This will create a component.
		 *
		 * @protected
		 * @param {object} obj
		 * @param {object} container
		 * @param {object} parent
		 */
		createComponent: function(obj, container, parent)
		{
			// this will allow both cached components or native components
			var component = obj.component || obj;
			component.parent = parent;

			if(parent && parent.persist === true)
			{
				component.persist = true;
			}

			component.setup(container);

			if(obj.component && typeof obj.onCreated === 'function')
			{
				obj.onCreated(component);
			}
		},

		/**
		 * This will create a node.
		 *
		 * @param {object} settings
		 * @param {object} container
		 * @return {object}
		 */
		createNode: function(settings, container)
		{
			var tag = settings.tag;
			if(tag !== 'text')
			{
				return this.create(tag, settings.attr, container);
			}

			var attr = settings.attr;
			var text = attr.textContent || attr.text;
			return this.createTextNode(text, container);
		}
	});

	var builder = base.extend.builder = new LayoutBuilder();

	/**
	 * This will build a JSON layout.
	 *
	 * @param {object} obj
	 * @param {object} [container]
	 * @param {object} [parent]
	 * @return {object}
	 */
	base.extend.buildLayout = function(obj, container, parent)
	{
		builder.build(obj, container, parent);
	};
})();

/* base framework module */
(function()
{
	"use strict";

	/**
	 * EventHelper
	 *
	 * This will create an event object to make
	 * adding and removing events easier.
	 * @class
	 */
	var EventHelper = base.Class.extend(
	{
		/**
		 * @constructor
		 */
		constructor: function()
		{
			this.events = [];
		},

		/**
		 * This will add an array of events.
		 *
		 * @param {array} events
		 */
		addEvents: function(events)
		{
			if(events.length < 1)
			{
				return false;
			}

			for(var i = 0, length = events.length; i < length; i++)
			{
				var event = events[i];
				this.on(event[0], event[1], event[2], event[3]);
			}
		},

		/**
		 * This will add an event.
		 *
		 * @param {string} event
		 * @param {object} obj
		 * @param {function} callBack
		 * @param {boolean} capture
		 */
		on: function(event, obj, callBack, capture)
		{
			base.on(event, obj, callBack, capture);

			this.events.push({
				event: event,
				obj: obj,
				callBack: callBack,
				capture: capture
			});
		},

		/**
		 * This will remove an event.
		 *
		 * @param {string} event
		 * @param {object} obj
		 * @param {function} callBack
		 * @param {boolean} capture
		 */
		off: function(event, obj, callBack, capture)
		{
			base.off(event, obj, callBack, capture);

			var option,
			events = this.events;
			for(var i = 0, length = events.length; i < length; i++)
			{
				option = events[i];
				if(option.event === event && option.obj === obj)
				{
					events.splice(i, 1);
					break;
				}
			}
		},

		/**
		 * This will set all events.
		 */
		set: function()
		{
			var event,
			events = this.events;
			for(var i = 0, length = events.length; i < length; i++)
			{
				event = events[i];
				base.on(event.event, event.obj, event.callBack, event.capture);
			}
		},

		unset: function()
		{
			var event,
			events = this.events;
			for(var i = 0, length = events.length; i < length; i++)
			{
				event = events[i];
				base.off(event.event, event.obj, event.callBack, event.capture);
			}
		},

		/**
		 * This will reset the events.
		 */
		reset: function()
		{
			this.unset();
			this.events = [];
		}
	});

	base.extend.EventHelper = EventHelper;

	/* this will register the component system to the
	data tracker to remove components that have been
	nested in layouts. */
	base.DataTracker.addType('components', function(data)
	{
		if(!data)
		{
			return false;
		}

		var component = data.component;
		if(component && component.rendered === true)
		{
			component.prepareDestroy();
		}
	});

	/**
	 * StateHelper
	 *
	 * This is a helper to manage component states.
	 */
	var StateHelper = base.Class.extend(
	{
		/**
		 * @constructor
		 * @param {object} state
		 * @param {object} states
		 */
		constructor: function(state, states)
		{
			this.remoteStates = [];

			var actions = this.convertStates(states);
			this.addStatesToTarget(state, actions);
		},

		/**
		 * This will create a state object.
		 *
		 * @param {string} action
		 * @param {*} state
		 * @param {function} callBack
		 * @param {string} [targetId]
		 * @return {object}
		 */
		createState: function(action, state, callBack, targetId)
		{
			return {
				action: action,
				state: state,
				callBack: callBack,
				targetId: targetId,
				token: null
			};
		},

		/**
		 * This will convert an action object to a state array.
		 *
		 * @protected
		 * @param {object} action
		 * @return {array}
		 */
		convertStates: function(action)
		{
			var actions = [];
			for(var prop in action)
			{
				if(action.hasOwnProperty(prop) === false)
				{
					continue;
				}
				else if(prop === 'remotes')
				{
					this.setupRemoteStates(action[prop], actions);
					continue;
				}

				var targetId = null,
				callBack = null,
				state = action[prop];
				if(state && typeof state === 'object')
				{
					callBack = state.callBack;
					targetId = state.id || state.targetId;
					state = state.state;
				}

				actions.push(this.createState(
					prop,
					state,
					callBack,
					targetId
				));
			}
			return actions;
		},

		setupRemoteStates: function(remotes, actions)
		{
			var remote;
			for(var i = 0, length = remotes.length; i < length; i++)
			{
				remote = remotes[i];
				if(!remote)
				{
					continue;
				}

				for(var prop in remote)
				{
					if(remote.hasOwnProperty(prop) === false || prop === 'id')
					{
						continue;
					}

					var callBack = null,
					value = remote[prop],
					state = (value !== null)? value : undefined;
					if(state && typeof state === 'object')
					{
						callBack = state.callBack;
						state = state.state;
					}

					actions.push(this.createState(
						prop,
						state,
						callBack,
						remote.id
					));
				}
			}
		},

		/**
		 * This will remove remote states.
		 */
		removeRemoteStates: function()
		{
			var remoteStates = this.remoteStates;
			if(remoteStates)
			{
				this.removeActions(remoteStates);
			}
		},

		/**
		 * This will remove the actions.
		 *
		 * @param {array} actions
		 */
		removeActions: function(actions)
		{
			if(actions.length < 1)
			{
				return false;
			}

			var states = base.state;
			for(var i = 0, length = actions.length; i < length; i++)
			{
				var action = actions[i];
				states.remove(action.targetId, action.action, action.token);
			}
		},

		/**
		 * This will restore a state.
		 *
		 * @param {object} state
		 */
		restore: function(state)
		{
			state.restore();

			var remotes = this.remoteStates;
			if(!remotes)
			{
				return;
			}

			for(var i = 0, length = remotes.length; i < length; i++)
			{
				var action = remotes[i];
				action.token = this.bindRemoteState(state, action.action, action.targetId);
			}
		},

		/**
		 * This will setup a two way bind to a remote state.
		 *
		 * @param {object} target
		 * @param {string} actionEvent
		 * @param {string} remoteTargetId
		 * @return {string}
		 */
		bindRemoteState: function(target, actionEvent, remoteTargetId)
		{
			var token,
			remoteTarget = base.state.getTarget(remoteTargetId);

			var value = remoteTarget.get(actionEvent);
			if(typeof value !== 'undefined')
			{
				target.set(actionEvent, value);
			}

			token = remoteTarget.on(actionEvent, function(state, prevState, committer)
			{
				if(committer === target)
				{
					return false;
				}

				target.set(actionEvent, state, remoteTarget);
			});

			target.on(actionEvent, function(state, prevState, committer)
			{
				if(committer === remoteTarget)
				{
					return false;
				}

				remoteTarget.set(actionEvent, state, target);
			});

			return token;
		},

		/**
		 * This will add the states to the target.
		 *
		 * @protected
		 * @param {object} state
		 * @param {array} actions
		 */
		addStatesToTarget: function(state, actions)
		{
			var remotes = this.remoteStates;

			for(var i = 0, length = actions.length; i < length; i++)
			{
				var action = actions[i],
				token = this.addAction(state, action);

				if(action.targetId)
				{
					action.token = token;
					remotes.push(action);
				}
			}

			if(remotes.length < 1)
			{
				this.remoteStates = null;
			}
		},

		/**
		 * This will add an action.
		 *
		 * @param {object} target
		 * @param {object} action
		 */
		addAction: function(target, action)
		{
			var token,
			actionEvent = action.action;

			/* this will check to select the remote target if set */
			var targetId = action.targetId;
			if(targetId)
			{
				token = this.bindRemoteState(target, actionEvent, targetId);
			}

			if(typeof action.state !== 'undefined')
			{
				target.addAction(actionEvent, action.state);
			}

			var callBack = action.callBack;
			if(typeof callBack === 'function')
			{
				target.on(actionEvent, callBack);
			}

			return token;
		}
	});

	var builder = base.builder;

	/**
	 * Component
	 *
	 * @class
	 *
	 * This will allow components to be extended
	 * from a single factory.
	 *
	 * @example
	 * var QuickFlashPanel = base.Component.extend(
	 *	{
	 *		constructor: function(props)
	 *		{
	 *			// this will setup the component id
	 *			base.Component.call(this, props);
	 *		},
 	 *
	 *		render: function()
	 *		{
	 *			return {
 	 *
	 *			};
	 *		}
	 *	});
	 */
	var Component = base.Class.extend(
	{
		/**
		 * @constructor
		 * @param {object} [props]
		 */
		constructor: function(props)
		{
			this.init();
			this.setupProps(props);
			this.onCreated();

			this.rendered = false;
			this.container = null;
		},

		/**
		 * @param {bool} isComponent
		 */
		isComponent: true,

		/**
		 * This will setup the component number and unique
		 * instance id for the component elements.
		 * @protected
		 */
		init: function()
		{
			var constructor = this.constructor;
			this.number = (typeof constructor.number === 'undefined')? constructor.number = 0 : (++constructor.number);

			var name = this.overrideTypeId || this.componentTypeId;
			this.id = name + this.number;
		},

		/**
		 * This will setup the component props.
		 *
		 * @param {object} [props]
		 */
		setupProps: function(props)
		{
			if(!props || typeof props !== 'object')
			{
				return false;
			}

			for(var prop in props)
			{
				if(props.hasOwnProperty(prop))
				{
					this[prop] = props[prop];
				}
			}
		},

		/**
		 * override this to do something when created.
		 */
		onCreated: function()
		{

		},

		/**
		 * This will render the component.
		 *
		 * @return {object}
		 */
		render: function()
		{
			return {

			};
		},

		/**
		 * This will cache the layout panel and set the main id.
		 * @param {object} layout
		 * @return {object}
		 */
		_cacheRoot: function(layout)
		{
			if(!layout)
			{
				return layout;
			}

			if(!layout.id)
			{
				layout.id = this.getId();
			}

			layout.cache = 'panel';
			return layout;
		},

		/**
		 * This will create the component layout.
		 * @protected
		 * @return {object}
		 */
		_createLayout: function()
		{
			if(this.persist)
			{
				return this._layout || (this._layout = this.render());
			}

			return this.render();
		},

		/**
		 * This will prepare the layout.
		 *
		 * @protected
		 * @return {object}
		 */
		prepareLayout: function()
		{
			var layout = this._createLayout();
			return this._cacheRoot(layout);
		},

		/**
		 * This will build the layout.
		 * @protected
		 */
		buildLayout: function()
		{
			var layout = this.prepareLayout();
			this.build(layout, this.container);

			base.DataTracker.add(this.panel, 'components',
			{
				component: this
			});

			this.rendered = true;
		},

		/**
		 * This will build a layout.
		 *
		 * @param {object} layout
		 * @param {object} container
		 * @return {object}
		 */
		build: function(layout, container)
		{
			return builder.build(layout, container, this);
		},

		/**
		 * This will rebuild a layout.
		 *
		 * @param {object} layout
		 * @param {object} container
		 * @return {object}
		 */
		rebuild: function(layout, container)
		{
			return builder.rebuild(container, layout, this);
		},

		/**
		 * This will remove children from an element.
		 *
		 * @param {object} layout
		 * @param {object} container
		 * @return {object}
		 */
		removeAll: function(ele)
		{
			return builder.removeAll(ele);
		},

		/**
		 * This will cache an element when its created by
		 * saving a reference to it as a property on the
		 * component.
		 *
		 * @param {string} propName The name to use as
		 * the reference.
		 * @param {object} layout
		 * @param {function} [callBack]
		 * @return {object}
		 */
		cache: function(propName, layout, callBack)
		{
			if(!layout || typeof layout !== 'object')
			{
				return false;
			}

			if(layout instanceof base.Component)
			{
				layout =
				{
					component: layout
				};
			}

			var self = this;
			layout.onCreated = function(element)
			{
				self[propName] = element;

				if(typeof callBack === 'function')
				{
					callBack(element);
				}
			};
			return layout;
		},

		/**
		 * This will get an id of the component or the full
		 * id that has the component id prepended to the
		 * requested id.
		 *
		 * @param {string} [id]
		 * @return {string}
		 */
		getId: function(id)
		{
			var mainId = this.id;
			if(typeof id === 'string')
			{
				mainId += '-' + id;
			}
			return mainId;
		},

		/**
		 * This will initialize the component.
		 * @protected
		 */
		initialize: function()
		{
			this.beforeSetup();
			this.addStates();
			this.buildLayout();
			this.addEvents();
			this.afterSetup();
		},

		/**
		 * override this to do something before setup.
		 */
		beforeSetup: function()
		{

		},

		/**
		 * override this to do something after setup.
		 */
		afterSetup: function()
		{

		},

		/**
		 * This will setup and render the component.
		 * @param {object} container
		 */
		setup: function(container)
		{
			this.container = container;
			this.initialize();
		},

		/* this will allow the component to override the
		state target id to add a custom id */
		/**
		 * @member {string} [stateTargetId] // optional override of state id
		 */
		stateTargetId: null,

		/**
		 * This will setup the state target.
		 *
		 * @protected
		 * @param {string} [id]
		 */
		setupStateTarget: function(id)
		{
			var targetId = id || this.stateTargetId || this.id;
			this.state = base.state.getTarget(targetId);
		},

		/**
		 * Override this to setup the component states.
		 * @return {object}
		 */
		setupStates: function()
		{
			/*
			return {
				action: 'state'
			};

			or

			return {
				action:
				{
					state: 'state',
					callBack: function(state, prevState)
					{

					}
				}
			};*/

			return {

			};
		},

		/**
		 * This will add the states.
		 * @protected
		 */
		addStates: function()
		{
			/* this will check to restore previous a previous state if the
			component has been preserved. */
			var state = this.state;
			if(state)
			{
				this.stateHelper.restore(state);
				return;
			}

			/* this will only setupa state manager if
			we have states */
			var states = this.setupStates();
			if(base.isEmpty(states))
			{
				return;
			}

			this.setupStateTarget();
			this.stateHelper = new StateHelper(this.state, states);
		},

		/**
		 * This will remove the states.
		 * @protected
		 */
		removeStates: function()
		{
			var state = this.state;
			if(!state)
			{
				return false;
			}

			this.stateHelper.removeRemoteStates();
			state.remove();
		},

		/**
		 * This will setup the event helper.
		 *
		 * @protected
		 */
		setupEventHelper: function()
		{
			if(!this.events)
			{
				this.events = new EventHelper();
			}
		},

		/**
		 * This will setup the events.
		 *
		 * @protected
		 * @return {array}
		 */
		setupEvents: function()
		{
			return [
				//['action', element, function(e){}, false]
			];
		},

		/**
		 * This will add the events.
		 *
		 * @protected
		 */
		addEvents: function()
		{
			var events = this.setupEvents();
			if(events.length < 1)
			{
				return false;
			}

			this.setupEventHelper();
			this.events.addEvents(events);
		},

		/**
		 * This will remove the events.
		 * @protected
		 */
		removeEvents: function()
		{
			var events = this.events;
			if(events)
			{
				events.reset();
			}
		},

		/**
		 * This will remove the component.
		 * @protected
		 */
		remove: function()
		{
			this.prepareDestroy();

			var panel = this.panel || this.id;
			builder.removeElement(panel);
		},

		/**
		 * This will prepare the component to be destroyed.
		 */
		prepareDestroy: function()
		{
			this.rendered = false;
			this.beforeDestroy();
			this.removeEvents();
			this.removeStates();
		},

		/**
		 * Override this to do something before destroy.
		 */
		beforeDestroy: function()
		{

		},

		/**
		 * This will destroy the component.
		 */
		destroy: function()
		{
			this.remove();
		},

		/**
		 * This will bind and element to data.
		 *
		 * @param {object} element
		 * @param {object} data
		 * @param {string} prop
		 * @param {function} filter
		 */
		bindElement: function(element, data, prop, filter)
		{
			if(element)
			{
				base.DataBinder.bind(element, data, prop, filter);
			}
		}
	});

	var componentTypeNumber = 0;

	/**
	 * This will extend the parent component to a child
	 * component.
	 *
	 * @static
	 * @param {object} child
	 * @return {function}
	 */
	Component.extend = function(child)
	{
		if(!child)
		{
			return false;
		}

		var parent = this.prototype;

		/* the child constructor must be set to set
		the parent static methods on the child */
		var constructor = child && child.constructor? child.constructor : false;
		if(child.hasOwnProperty('constructor') === false)
		{
			constructor = function()
			{
				var args = base.listToArray(arguments);
				parent.constructor.apply(this, args);
			};
		}

		/* this will add the parent class to the
		child class */
		constructor.prototype = base.extendClass(parent, child);

		/* this will assign a unique id to the type of
		component */
		constructor.prototype.componentTypeId = 'bs-cp-' + (componentTypeNumber++) + '-';

		/* this will add the static methods from the parent to
		the child constructor. could use assign but ie doesn't
		support it */
		//Object.assign(constructor, this);
		base.extendObject(this, constructor);
		return constructor;
	};

	/* this will add a reference to the component
	object */
	base.extend.Component = Component;

})();

/* base framework module */
/*
	this will create a layout builder object
	and shortcut functions.
*/
(function()
{
	"use strict";

	/**
	 * StateTarget
	 *
	 * This will create a state target to track the state
	 * of an object.
	 * @class
	 * @augments base.SimpleData
	 */
	var StateTarget = base.SimpleData.extend(
	{
		/**
		 * @constructor
		 * @param {string} id
		 */
		constructor: function(id)
		{
			this._init();

			/* this will setup the event sub for
			one way binding */
			this.eventSub = new base.DataPubSub();

			this.stage = {};
			this.id = id;
		},

		/**
		 * This will restore a state to the controller.
		 */
		restore: function()
		{
			base.state.restore(this.id, this);
		},

		/**
		 * This will remove the target from the controller.
		 */
		remove: function()
		{
			base.state.remove(this.id);
		},

		/**
		 * This will add an action to the target.
		 *
		 * @param {string} action
		 * @param {*} state
		 */
		addAction: function(action, state)
		{
			if(typeof state !== 'undefined')
			{
				this.set(action, state);
			}
		},

		/**
		 * This will get the state of an action.
		 *
		 * @param {string} action
		 * @return {*}
		 */
		getState: function(action)
		{
			return this.get(action);
		},

		/**
		 * This will remove an action or a callBack
		 * from an action. if no token is passed the
		 * whole action is removed.
		 *
		 * @param {string} action
		 * @param {string} [token]
		 */
		removeAction: function(action, token)
		{
			/* if we have a token then the token will be
			the only item removed */
			if(token)
			{
				this.off(action, token);
			}
			else
			{
				var actions = this.stage;
				if(typeof actions[action] !== 'undefined')
				{
					delete actions[action];
				}
			}
		}
	});

	/**
	 * StateController
	 *
	 * This will create a state controller that can
	 * add and remove targets, actions, and action
	 * subscriber callBack functions.
	 *
	 * @class
	 */
	var StateController = base.Class.extend(
	{
		/**
		 * @constructor
		 */
		constructor: function()
		{
			this.targets = {};
		},

		/**
		 * This will restore a state target.
		 *
		 * @param {string} id
		 * @param {object} target
		 */
		restore: function(id, target)
		{
			this.targets[id] = target;
		},

		/**
		 * This will get the state target.
		 *
		 * @param {string} id
		 * @return {object}
		 */
		getTarget: function(id)
		{
			var targets = this.targets;
			return (targets[id] || (targets[id] = new StateTarget(id)));
		},

		/**
		 * This will get the state of an action.
		 *
		 * @param {string} targetId
		 * @param {string} action
		 */
		getActionState: function(targetId, action)
		{
			var target = this.getTarget(targetId);
			return target.get(action);
		},

		/**
		 * This will add a new target.
		 *
		 * @param {string} targetId
		 * @param {string} [action]
		 * @param {*} [state] the primary action state
		 * @return {object}
		 */
		add: function(targetId, action, state)
		{
			var target = this.getTarget(targetId);
			if(action)
			{
				target.addAction(action, state);
			}
			return target;
		},

		/**
		 * This will add a new action to a target.
		 *
		 * @param {string} targetId
		 * @param {string} action
		 * @param {string} [state]
		 * @return {object}
		 */
		addAction: function(targetId, action, state)
		{
			return this.add(targetId, action, state);
		},

		/**
		 * This will remove the action from a target.
		 *
		 * @param {string} targetId
		 * @param {string} action
		 * @param {string} [token]
		 */
		removeAction: function(targetId, action, token)
		{
			this.off(targetId, action, token);
		},

		/**
		 * This will add a new subscriber to the action.
		 *
		 * @param {string} targetId
		 * @param {string} action
		 * @param {function} callBack
		 * @return {string}
		 */
		on: function(targetId, action, callBack)
		{
			var target = this.getTarget(targetId);
			if(action)
			{
				return target.on(action, callBack);
			}
			return false;
		},

		/**
		 * This will remove a subscriber from an action.
		 *
		 * @param {string} targetId
		 * @param {string} action
		 * @param {string} token
		 */
		off: function(targetId, action, token)
		{
			this.remove(targetId, action, token);
		},

		/**
		 * This will remove a target or action or callBack.
		 *
		 * @param {string} targetId
		 * @param {string} [action]
		 * @param {string} [token]
		 */
		remove: function(targetId, action, token)
		{
			var targets = this.targets;
			var target = targets[targetId];
			if(!target)
			{
				return false;
			}

			if(action)
			{
				target.off(action, token);
			}
			else
			{
				delete targets[targetId];
			}
		},

		/**
		 * This will set the action state.
		 *
		 * @param {string} targetId
		 * @param {string} action
		 * @param {*} state
		 */
		set: function(targetId, action, state)
		{
			var target = this.getTarget(targetId);
			target.set(action, state);
		}
	});

	base.extend.StateController = StateController;
	base.extend.state = new StateController();
})();

/* base framework module */
(function()
{
	"use strict";

	/* this will register the route system to the
	data tracker to remove routes that have been
	nested in layouts. */
	base.DataTracker.addType('routes', function(data)
	{
		if(!data)
		{
			return false;
		}

		var route = data.route;
		if(route)
		{
			base.router.removeRoute(route);
		}
	});

	base.DataTracker.addType('switch', function(data)
	{
		if(!data)
		{
			return false;
		}

		var id = data.id;
		base.router.removeSwitch(id);
	});

	/**
	 * Utils
	 *
	 * These are some helper functions for the router.
	 */
	var Utils =
	{
		/**
		 * This will remove the begining and ending slashes from a url.
		 *
		 * @param {string} uri
		 * @return {string}
		 */
		removeSlashes: function(uri)
		{
			if(typeof uri === 'string')
			{
				if(uri.substr(0, 1) === '/')
				{
					uri = uri.substr(1);
				}

				if(uri.substr(-1) === '/')
				{
					uri = uri.substr(0, uri.length - 1);
				}
			}

			return uri;
		}
	};

	/**
	 * Router
	 *
	 * This will create a browser router.
	 * @class
	 */
	var Router = base.Class.extend(
	{
		constructor: function()
		{
			/**
			 * @member {string} version
			 */
			this.version = '1.0.2';

			/* this is the root of the uri for the routing object
			and the base title */
			this.baseURI = '/';
			this.title = '';

			this.lastPath = null;
			this.path = null;

			/* this will be used to access our history object */
			this.history = null;
			this.callBackLink = null;
			this.location = window.location;

			/* this will store each route added to the
			router. */
			this.routes = [];
			this.switches = {};
			this.switchCount = 0;

			/**
			 * @member {object} data
			 */
			this.data = new base.Data(
			{
				path: this.location.pathname
			});
		},

		/**
		 * This will setup our history object.
		 */
		setupHistory: function()
		{
			this.history = new History(this);
			this.history.setup();
		},

		/**
		 * This will create a new route.
		 *
		 * @protected
		 * @param {object} settings
		 * @return {object}
		 */
		createRoute: function(settings)
		{
			var uri = settings.uri || '*';
			settings.baseUri = this.createURI(uri);

			var route = new Route(settings);
			return route;
		},

		/**
		 * This will add a new route to the router.
		 *
		 * @param {object} settings
		 * @return {object}
		 */
		add: function(settings)
		{
			if(typeof settings !== 'object')
			{
				var args = arguments;
				settings =
				{
					uri: args[0],
					component: args[1],
					callBack: args[2],
					title: args[3],
					id: args[4],
					container: args[5]
				};
			}

			var route = this.createRoute(settings);
			this.routes.push(route);
			this.checkRoute(route, this.location.pathname);
			return route;
		},

		/**
		 * This will get the base path.
		 *
		 * @protected
		 * @return {string}
		 */
		getBasePath: function()
		{
			if(!this.basePath)
			{
				var pathURI = this.baseURI || '';
				if((pathURI[pathURI.length - 1] !== '/'))
				{
					pathURI += '/';
				}
				this.basePath = pathURI;
			}
			return this.basePath;
		},

		/**
		 * This will create a uri.
		 *
		 * @protected
		 * @param {string} uri
		 * @return {string}
		 */
		createURI: function(uri)
		{
			var baseUri = this.getBasePath();
			return (baseUri + Utils.removeSlashes(uri));
		},

		/**
		 * This will get a route by uri.
		 *
		 * @param {string} uri
		 * @return {(object|boolean)}
		 */
		getRoute: function(uri)
		{
			var routes = this.routes,
			length = routes.length;
			if(length > 0)
			{
				for(var i = 0; i < length; i++)
				{
					var route = routes[i];
					if(route.uri === uri)
					{
						return route;
					}
				}
			}
			return false;
		},

		/**
		 * This will get a route by id.
		 *
		 * @param {string} id
		 * @return {(object|boolean)}
		 */
		getRouteById: function(id)
		{
			var routes = this.routes,
			length = routes.length;
			if(length > 0)
			{
				for(var i = 0; i < length; i++)
				{
					var route = routes[i];
					if(route.id === id)
					{
						return route;
					}
				}
			}
			return false;
		},

		/**
		 * This will remove a route.
		 *
		 * @param {object} route
		 */
		removeRoute: function(route)
		{
			var routes = this.routes;
			var index = base.inArray(routes, route);
			if(index > -1)
			{
				routes.splice(index, 1);
			}
		},

		/**
		 * This will add a switch.
		 *
		 * @param {array} group
		 * @return {string} the switch id.
		 */
		addSwitch: function(group)
		{
			var switches = this.switches;
			var id = this.switchCount++;
			var switchArray = switches[id] = [];

			for(var i = 0, length = group.length; i < length; i++)
			{
				var route = this.createRoute(group[i]);
				switchArray.push(route);
			}

			this.checkGroup(switchArray, this.location.pathname);
			return id;
		},

		/**
		 * This will remove a switch by id.
		 *
		 * @param {string} id
		 */
		removeSwitch: function(id)
		{
			var switches = this.switches;
			if(switches[id])
			{
				delete switches[id];
			}
		},

		/**
		 * This will remove a route by uri.
		 *
		 * @param {string} uri
		 * @return {object} a reference to the router object.
		 */
		remove: function(uri)
		{
			uri = this.createURI(uri);

			var route = this.getRoute(uri);
			if(route !== false)
			{
				this.removeRoute(route);
			}
			return this;
		},

		/**
		 * This will setup the router.
		 *
		 * @param {string} [baseURI]
		 * @param {string} [title]
		 * @return {object} a reference to the router object.
		 */
		setup: function(baseURI, title)
		{
			this.baseURI = baseURI || '/';
			this.title = (typeof title !== 'undefined')? title : '';

			this.setupHistory();

			this.callBackLink = base.bind(this, this.checkLink);
			base.on('click', document, this.callBackLink);

			/* this will route to the first url entered
			when the router loads. this will fix the issue
			that stopped the first endpoint from being
			added to the history */
			var endPoint = this.getEndPoint();
			this.navigate(endPoint, null, true);
			return this;
		},

		/**
		 * This will get the parent element link.
		 *
		 * @param {object} ele
		 * @return {(object|boolean)}
		 */
		getParentLink: function(ele)
		{
			var target = ele.parentNode;
			while(target !== null)
			{
				if(target.nodeName.toLowerCase() === 'a')
				{
					return target;
				}

				target = target.parentNode;
			}
			return false;
		},

		/**
		 * This will check if a link was routed.
		 *
		 * @protected
		 * @param {object} evt
		 */
		checkLink: function(evt)
		{
			var target = evt.target || evt.srcElement;
			if(target.nodeName.toLowerCase() !== 'a')
			{
				/* this will check to get the parent to check
				if the child is contained in a link */
				target = this.getParentLink(target);
				if(target === false)
				{
					return true;
				}
			}

			if(target.target === '_blank' || base.data(target, 'cancel-route'))
			{
				return true;
			}

			var href = target.getAttribute('href');
			if(typeof href !== 'undefined')
			{
				var path = href.replace(this.baseURI, '');
				this.navigate(path);

				evt.preventDefault();
				evt.stopPropagation();
				return false;
			}
		},

		/**
		 * This will reset the router.
		 *
		 * @return {object} a reference to the router object.
		 */
		reset: function()
		{
			this.routes = [];
			this.switches = [];
			this.switchCount = 0;

			return this;
		},

		/**
		 * This will check the active routes.
		 *
		 * @return {object} a reference to the router object.
		 */
		activate: function()
		{
			this.checkActiveRoutes();
			return this;
		},

		/**
		 * This will navigate the router.
		 *
		 * @param {string} uri
		 * @param {object} [data]
		 * @param {boolean} [replace]
		 * @return {object} a reference to the router object.
		 */
		navigate: function(uri, data, replace)
		{
			uri = this.createURI(uri);
			this.history.addState(uri, data, replace);
			this.activate();

			return this;
		},

		/**
		 * This will update the data path.
		 * @protected
		 */
		updatePath: function()
		{
			var path = this.location.pathname;
			this.data.set('path', path);
		},

		/**
		 * This will update the title.
		 *
		 * @protected
		 * @param {object} route
		 */
		updateTitle: function(route)
		{
			if(!route || !route.title)
			{
				return this;
			}

			var title = route.title,
			parent = this;

			var getTitle = function(title)
			{
				/* this will uppercase each word in a string
				@param (string) str = the string to uppercase
				@return (string) the uppercase string */
				var toTitleCase = function(str)
				{
					var pattern = /\w\S*/;
					return str.replace(pattern, function(txt)
					{
						return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
					});
				};


				/* this will replace the params in the title
				@param (string) str = the route title
				@return (string) the title string */
				var replaceParams = function(str)
				{
					if(str.indexOf(':') > -1)
					{
						var params = route.stage;
						for(var prop in params)
						{
							if(params.hasOwnProperty(prop))
							{
								var param = params[prop];
								var pattern = new RegExp(':' + prop, 'gi');
								str = str.replace(pattern, param);
							}
						}
					}
					return str;
				};

				if(title)
				{
					/* we want to replace any params in the title
					and uppercase the title */
					title = replaceParams(title);
					var pattern = /-/g;
					title = toTitleCase(title.replace(pattern, ' '));

					/* we want to check to add the base title to the
					to the end of the title */
					if(parent.title !== '')
					{
						title += " - " + parent.title;
					}
				}
				return title;
			};

			document.title = getTitle(title);
		},

		/**
		 * This will check the routes to match the path.
		 *
		 * @protected
		 * @param {string} [path]
		 */
		checkActiveRoutes: function(path)
		{
			this.lastPath = this.path;

			path = path || this.getPath();
			this.path = path;

			var routes = this.routes,
			length = routes.length;

			var route;
			for(var i = 0; i < length; i++)
			{
				route = routes[i];
				if(typeof route === 'undefined')
				{
					continue;
				}

				this.checkRoute(route, path);
			}

			this.checkSwitches(path);
			this.updatePath();
		},

		/**
		 * This will check the switches to match the path.
		 *
		 * @protected
		 * @param {string} [path]
		 */
		checkSwitches: function(path)
		{
			var switches = this.switches;
			for(var id in switches)
			{
				if(switches.hasOwnProperty(id) === false)
				{
					continue;
				}

				var group = switches[id];
				this.checkGroup(group, path);
			}
		},

		/**
		 * This will check a group to match a path.
		 *
		 * @protected
		 * @param {object} group
		 * @param {string} path
		 */
		checkGroup: function(group, path)
		{
			var check = false,
			route, firstRoute, lastSelected, selected, hasController = false;

			for(var i = 0, length = group.length; i < length; i++)
			{
				route = group[i];
				if(typeof route === 'undefined')
				{
					continue;
				}

				/* we want to save the first route in the switch
				so it can be selected if no route is active */
				if(i === 0)
				{
					firstRoute = route;
				}

				if(!lastSelected && route.get('active'))
				{
					lastSelected = route;
				}

				if(check !== false)
				{
					if(hasController)
					{
						route.deactivate();
					}
					continue;
				}

				/* we will break the loop on the first match */
				check = route.match(path);
				if(check !== false)
				{
					selected = route;

					if(route.controller)
					{
						this.select(route);
						hasController = true;
					}
				}
			}

			if(selected === undefined)
			{
				this.select(firstRoute);

				if(lastSelected && firstRoute !== lastSelected)
				{
					lastSelected.deactivate();
				}
			}
			else
			{
				if(lastSelected)
				{
					if(hasController && selected !== lastSelected)
					{
						lastSelected.deactivate();
					}
				}
				else if(firstRoute && hasController === false)
				{
					this.select(firstRoute);
				}
			}
		},

		/**
		 * This will check if a route matches the path.
		 *
		 * @param {object} route
		 * @param {string} path
		 * @return {boolean}
		 */
		checkRoute: function(route, path)
		{
			var check = this.check(route, path);
			if(check !== false)
			{
				this.select(route);
			}
			else
			{
				route.deactivate();
			}
			return check;
		},

		/**
		 * This will select a route if the route matches the path.
		 *
		 * @param {object} route
		 * @param {string} [path]
		 */
		check: function(route, path)
		{
			/* we want to check if the route has been
			deleted from the routes */
			if(!route)
			{
				return false;
			}

			/* we want to check to use the supplied uri or get the
			current uri if not setup */
			path = path || this.getPath();

			/* we want to check if the route uri matches the path uri */
			return (route.match(path) !== false);
		},

		/**
		 * This will select the route.
		 *
		 * @param {object} route
		 */
		select: function(route)
		{
			if(!route)
			{
				return false;
			}

			route.setPath(this.path, this.lastPath);
			route.select();
			this.updateTitle(route);
		},

		/**
		 * This will get the endpoint.
		 *
		 * @return {string}
		 */
		getEndPoint: function()
		{
			var path = this.getPath();
			return (path.replace(this.baseURI, '') || '/');
		},

		/**
		 * This will remove the router events.
		 */
		destroy: function()
		{
			base.off('click', document, this.callBackLink);
		},

		/**
		 * This will get the location pathname.
		 *
		 * @return {string}
		 */
		getPath: function()
		{
			/* we want to get the window location path */
			var location = this.location,
			path = this.path = location.pathname;

			return path + location.search + location.hash;
		}
	});

	var routerNumber = 0;

	/**
	 * History
	 *
	 * This will setup the history controller.
	 * @class
	 */
	var History = base.Class.extend(
	{
		/**
		 * @constructor
		 * @param {object} router
		 */
		constructor: function(router)
		{
			this.router = router;

			/* this will check if the history api is supported
			and enabled */
			this.enabled = false;
			this.locationId = 'base-app-router-' + routerNumber++;
			this.callBack = null;
		},

		/**
		 * This will check if the history api is supported
		 * and add events.
		 *
		 * @return {object} a reference to the object.
		 */
		setup: function()
		{
			/* we want to check if history is enabled */
			this.enabled = this.isSupported();

			/* we want to check to add the history event listener
			that will check the popsate events and select the
			nav option by the history state object */
			if(this.enabled !== true)
			{
				return this;
			}

			this.callBack = base.bind(this, this.check);
			this.addEvent();
			return this;
		},

		/**
		 * This will check if the browser supports the history api.
		 *
		 * @return {boolean}
		 */
		isSupported: function()
		{
			if('history' in window && 'pushState' in window.history)
			{
				return true;
			}

			return false;
		},

		/**
		 * This will add the events.
		 *
		 * @return {object} a reference to the object.
		 */
		addEvent: function()
		{
			base.on('popstate', window, this.callBack);
			return this;
		},

		/**
		 * This will remove the events.
		 *
		 * @return {object} a reference to the object.
		 */
		removeEvent: function()
		{
			base.off('popstate', window, this.callBack);
			return this;
		},

		/**
		 * This will check to activate the router.
		 *
		 * @param {object} evt
		 */
		check: function(evt)
		{
			/* we want to check if the event has a state and if the
			state location is from the background */
			var state = evt.state;
			if(!state || state.location !== this.locationId)
			{
				return false;
			}

			evt.preventDefault();
			evt.stopPropagation();

			this.router.checkActiveRoutes(state.uri);
		},

		/**
		 * This will create a state object.
		 *
		 * @param {string} uri
		 * @param {*} data
		 * @return {object}
		 */
		createState: function(uri, data)
		{
			var stateObj = {
				location: this.locationId,
				uri: uri
			};

			if(data && typeof data === 'object')
			{
				stateObj = base.extendObject(stateObj, data);
			}

			return stateObj;
		},

		/**
		 * This will add a state to the history.
		 *
		 * @param {string} uri
		 * @param {object} data
		 * @param {boolean} replace
		 * @return {object} a reference to the object.
		 */
		addState: function(uri, data, replace)
		{
			if(this.enabled !== true)
			{
				return this;
			}

			var history = window.history,
			lastState = history.state;

			if(lastState && lastState.uri === uri)
			{
				return this;
			}

			var stateObj = this.createState(uri, data);

			/* this will check to push state or
			replace state */
			replace = (replace === true);
			var method = (replace === false)? 'pushState' : 'replaceState';
			history[method](stateObj, null, uri);

			return this;
		}
	});

	/**
	 * This will setup a route uri pattern.
	 *
	 * @param {string} uri
	 * @return {string}
	 */
	var routePattern = function(uri)
	{
		var uriQuery = "";
		if(uri)
		{
			/* we want to setup the wild card and param
			checks to be modified to the route uri string */
			var allowAll = /(\*)/g,
			param = /(:[^\/?&($]+)/g,
			optionalParams = /(\?\/+\*?)/g,
			optionalSlash = /(\/):[^\/(]*?\?/g,
			filter = /\//g;
			uriQuery = uri.replace(filter, "\/").replace(allowAll, '.*');

			/* this will setup for optional slashes before the optional params */
			uriQuery = uriQuery.replace(optionalSlash, function(str)
			{
				var pattern = /\//g;
				return str.replace(pattern, '(?:$|\/)');
			});

			/* this will setup for optional params and params
			and stop at the last slash or query start */
			uriQuery = uriQuery.replace(optionalParams, '?\/*').replace(param, '([^\/|?]+)');
		}

		/* we want to set and string end if the wild card is not set */
		uriQuery += (uri[uri.length - 1] === '*')? '' : '$';
		return uriQuery;
	};

	/**
	 * This will get the param keys from the uri.
	 *
	 * @param {string} uri
	 * @return {array}
	 */
	var paramPattern = function(uri)
	{
		var params = [];
		if(!uri)
		{
			return params;
		}

		var filter = /[\*?]/g;
		uri = uri.replace(filter, '');

		var pattern = /:(.[^\/?&($]+)\?*/g,
		matches = uri.match(pattern);
		if(matches === null)
		{
			return params;
		}

		for(var i = 0, maxLength = matches.length; i < maxLength; i++)
		{
			var param = matches[i];
			if(param)
			{
				param = param.replace(':', '');
				params.push(param);
			}
		}
		return params;
	};

	var routeCount = 0;

	/**
	 * Route
	 *
	 * This will create a route.
	 * @class
	 * @augments base.SimpleData
	 */
	var Route = base.SimpleData.extend(
	{
		/**
		 * @constructor
		 * @param {object} settings
		 */
		constructor: function(settings)
		{
			this.setupRoute(settings);

			var params = this.getParamDefaults();
			base.SimpleData.call(this, params);

			this.set('active', false);
		},

		/**
		 * This will setup the route settings.
		 *
		 * @protected
		 * @param {object} settings
		 */
		setupRoute: function(settings)
		{
			this.id = settings.id || 'bs-rte-' + routeCount++;

			var uri = settings.baseUri;
			this.uri = uri;
			this.path = null;
			this.referralPath = null;

			/* route reg ex */
			var uriMatch = routePattern(uri);
			this.uriQuery = new RegExp('^' + uriMatch);

			/* params */
			this.paramKeys = paramPattern(uri);
			this.params = null;

			/* this will setup the template and route component
			if one has been set */
			this.setupComponentHelper(settings);

			this.callBack = settings.callBack;
			this.title = settings.title;
		},

		/**
		 * This will get the default route params.
		 *
		 * @return {(object|null)}
		 */
		getParamDefaults: function()
		{
			var params = this.paramKeys;
			if(params.length)
			{
				var defaults = {};
				for(var i = 0, length = params.length; i < length; i++)
				{
					defaults[params[i]] = null;
				}
				return defaults;
			}
			return null;
		},

		/**
		 * This will deactivate the route.
		 */
		deactivate: function()
		{
			this.set('active', false);

			var controller = this.controller;
			if(controller)
			{
				controller.remove();
			}
		},

		/**
		 * This will setup the route component.
		 *
		 * @protected
		 * @param {object} settings
		 */
		setupComponentHelper: function(settings)
		{
			var component = settings.component;
			if(component)
			{
				var helperSettings =
				{
					component: component,
					container: settings.container,
					persist: settings.persist || false,
					parent: settings.parent
				};
				this.controller = new ComponentHelper(this, helperSettings);
			}
		},

		/**
		 * This will set the route path.
		 *
		 * @param {string} path
		 * @param {string} referralPath
		 */
		setPath: function(path, referralPath)
		{
			this.path = path;
			this.referralPath = referralPath;
		},

		/**
		 * This will select the route.
		 */
		select: function()
		{
			this.set('active', true);

			var params = this.stage;
			var callBack = this.callBack;
			if(typeof callBack === 'function')
			{
				callBack(params);
			}

			var controller = this.controller;
			if(controller)
			{
				controller.focus(params);
			}
		},

		/**
		 * This will check if a route matches the path.
		 *
		 * @param {string} path
		 * @return {(object|boolean)}
		 */
		match: function(path)
		{
			var matched = false;

			/* we want to check to use the supplied uri or get the
			current uri if not setup */
			var result = path.match(this.uriQuery);
			if(result === null)
			{
				this.resetParams();
				return matched;
			}

			if(result && typeof result === 'object')
			{
				/* this will remove the first match from the
				the params */
				result.shift();
				matched = result;
				/* this will get the uri params of the route
				and if set will save them to the route */
				this.setParams(result);
			}

			return matched;
		},

		/**
		 * This will reset the params.
		 */
		resetParams: function()
		{
			this.stage = {};
		},

		/**
		 * This will set the params.
		 *
		 * @param {object} values
		 */
		setParams: function(values)
		{
			if(values && typeof values === 'object')
			{
				var keys = this.paramKeys;
				if(keys)
				{
					var params = {};
					for(var i = 0, maxL = keys.length; i < maxL; i++)
					{
						var key = keys[i];
						if(typeof key !== 'undefined')
						{
							params[key] = values[i];
						}
					}
					this.set(params);
				}
			}
		},

		/**
		 * This will get the params.
		 *
		 * @return {object}
		 */
		getParams: function()
		{
			return this.stage;
		}
	});

	/**
	 * ComponentHelper
	 *
	 * This will create a helper to create and destroy components
	 * that are added to a route.
	 * @class
	 */
	var ComponentHelper = base.Class.extend(
	{
		/**
		 * @constructor
		 * @param {object} route
		 * @param {object} settings
		 */
		constructor: function(route, settings)
		{
			this.route = route;

			this.template = settings.component;
			this.component = null;
			this.hasTemplate = false;

			this.setup = false;
			this.container = settings.container;
			this.persist = settings.persist;
			this.parent = settings.parent;

			this.setupTemplate();
		},

		/**
		 * This will create the component.
		 *
		 * @param {object} params
		 */
		focus: function(params)
		{
			if(this.setup === false)
			{
				this.create();
			}

			this.update(params);
		},

		/**
		 * This will setup the template.
		 * @protected
		 */
		setupTemplate: function()
		{
			var template = this.template;
			if(typeof template === 'string')
			{
				template = this.template = window[template];
			}

			var type = typeof template;
			if(type === 'function' || type === 'object')
			{
				if(type === 'object')
				{
					var comp = this.component = this.template;
					comp.route = this.route;
					comp.persist = true;
					comp.parent = this.parent;
					this.persist = true;
				}

				this.hasTemplate = true;
			}
		},

		/**
		 * This will create the route component.
		 * @protected
		 */
		create: function()
		{
			if(!this.hasTemplate)
			{
				return false;
			}

			this.setup = true;

			var comp = this.component;
			if(!(this.persist && comp))
			{
				comp = this.component = new this.template({
					route: this.route,
					persist: this.persist,
					parent: this.parent
				});
			}

			comp.setup(this.container);
		},

		/**
		 * This will remove the component.
		 */
		remove: function()
		{
			if(this.setup !== true)
			{
				return false;
			}

			this.setup = false;

			var component = this.component;
			if(!component)
			{
				return false;
			}

			if(typeof component.destroy === 'function')
			{
				component.destroy();
			}

			// this will remove the reference to the component if persit is false
			if(this.persist === false)
			{
				this.component = null;
			}
		},

		/**
		 * This will call the component update method and pass the params.
		 *
		 * @protected
		 * @param {object} params
		 */
		update: function(params)
		{
			var component = this.component;
			if(!component)
			{
				return false;
			}

			if(typeof component.update === 'function')
			{
				component.update(params);
			}
		}
	});

	/**
	 * NavLink
	 *
	 * This will create a nav link that will add an active
	 * class when the browser route path matches the link
	 * href.
	 *
	 * @class
	 */
	var NavLink = base.Component.extend(
	{
		/**
		 * This will configure the link active class.
		 *
		 * @protected
		 */
		beforeSetup: function()
		{
			this.selectedClass = this.activeClass || 'active';
		},

		/**
		 * This will render the component.
		 *
		 * @return {object}
		 */
		render: function()
		{
			var href = this.href,
			text = this.text;

			var watchers = this.setupWatchers(href, text);

			var onState = {};
			onState[this.selectedClass] = true;

			return {
				tag: 'a',
				className: this.className || null,
				onState: ['selected', onState],
				href: this.getString(href),
				text: this.getString(text),
				children: this.children,
				watch: watchers
			};
		},

		/**
		 * This will get string.
		 *
		 * @param {string} string
		 * @return {(string|null)}
		 */
		getString: function(string)
		{
			var type = typeof string;
			return (type !== 'object' && type !== 'undefined')? string : null;
		},

		/**
		 * This will setup the watchers.
		 *
		 * @protected
		 * @param {string} href
		 * @param {string} text
		 * @return {array}
		 */
		setupWatchers: function(href, text)
		{
			var self = this,
			exact = (this.exact !== false),
			data = base.router.data;

			var watchers = [];

			if(href && typeof href === 'object')
			{
				watchers.push(
				{
					attr: 'href',
					value: href
				});
			}

			if(text && typeof text === 'object')
			{
				watchers.push(
				{
					attr: 'text',
					value: text
				});
			}

			watchers.push({
				value: ['[[path]]', data],
				callBack: function(ele, value)
				{
					var selected = exact? (value === ele.pathname) : (new RegExp(ele.pathname + '($|\/|\\.).*').test(value));
					self.update(ele, selected);
				}
			});

			return watchers;
		},

		setupStates: function()
		{
			return {
				selected: false
			};
		},

		/**
		 * This will update the class on the element.
		 *
		 * @param {object} ele
		 * @param {bool} selected
		 */
		update: function(ele, selected)
		{
			this.state.set('selected', selected);
		}
	});

	window.NavLink = NavLink;

	base.router = new Router();
	base.extend.Router = Router;
})();

/* base framework module */
/*
	this will create dynamic html to be
	added and modified
*/
(function(global)
{
	"use strict";

	/**
	 * Atom
	 *
	 * This will create an interface for atoms to
	 * extend from a parent atom.
	 * @class
	 */
    var Atom = function()
	{

	};

	/**
	 * This will extend the atom to a child atom.
	 * @static
	 * @param {(object|function)}
	 * @return {function} The child atom constructor.
	 */
	Atom.extend = function extend(childLayout)
	{
		var parent = this;

		/*
		this will setup a layout function to call to standardize
		the interface for non function atoms.
		*/
		if(typeof childLayout === 'object')
		{
			var layoutObject = childLayout;
			childLayout = function(props)
			{
				return base.cloneObject(layoutObject);
			};
		}

		var child = function(props)
		{
			props = props || {};
			var layout = childLayout(props);

			// we want to check to merge the layout with the parent layout
			var parentLayout = parent(props);
			if(typeof parentLayout === 'object')
			{
				layout = base.extendObject(parentLayout, layout);
			}
			return layout;
		};

		child.extend = extend;
		return child;
	};

	global.Atom = Atom;

})(this);