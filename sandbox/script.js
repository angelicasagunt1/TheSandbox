var obj1 = {
    "foo": {
      "bar": "baz",
      "biz": "foo"
    },
    "fiz": {
      "foo": "baz"
    },
    "bar": "baz",
    "baz": [
      "foo",
      "bar"
    ],
    "miss": 123
  };
  
  var obj2 = {
  "foo": {
  "bar": "baz1",
  "biz": "foo"
  },
  "fiz": {
  "foo": "baz"
  },
  "bar": "baz",
  "baz": [
  "foo1"
  ],
  "new_value": 1
  };
  
  function diff(obj1, obj2) {
      const result = {};
     
     ObjectKeys = Object.keys(obj1).concat(Object.keys(obj2));
     
     ObjectKeys.forEach(key => {
          if(obj2[key] !== obj1[key]) {
  
                 result[key] = obj2[key];
          }
          
          if(typeof obj2[key] === 'object' && typeof obj1[key] === 'object') {
                  const value = diff(obj1[key], obj2[key]);
              if (value !== undefined) {
                      result[key] = value;
              }
          }
      });
      return result;
  }

  console.log(diff(obj1, obj2));
