import * as zoid from "zoid/dist/zoid.frameworks";

let MyWidget = zoid.create({
    tag: 'my-widget',
    url: 'http://localhost:2000/index.html',
    props: {
        name: {
            type: 'string',
            default: function() {
                return 'default';
            }
         },
        passDownFunc: {type: 'function'}
    }
})

console.log('yo! have loaded mywidget from child: ')
console.log(MyWidget)

export default MyWidget