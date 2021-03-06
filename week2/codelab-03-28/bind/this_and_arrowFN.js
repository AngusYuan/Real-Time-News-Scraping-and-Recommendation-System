/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

var a = 37;

var obj1 = {
   a: 39,
   f: () => {
      console.log('f', this.a);
   },
   ff: function() {
        function f1() {
           console.log('f1', this.a);
        }
        f1();

        (() => {
           console.log('f1', this.a);
        })();
   },
   fff: function() {
        function f1() {
           var a = 41;
           function f2() {
              console.log('f2', this.a);
           }
           f2();

           (() => {
               console.log('f2', this.a);
           })();
        }
        f1();
   }
}

obj1.f();
obj1.ff();
obj1.fff();


// var out_f = obj1.f;
// out_f();
//
// var obj2 = {
//    a: 40,
//    f: function(callback) {
//       g = callback.bind(this)
//       g();
//       callback();
//    }
// }
//
// obj2.f(obj1.f);
