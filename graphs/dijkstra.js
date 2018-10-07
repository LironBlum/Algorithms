const Dijkstra = require('./dijkstraFuncs')

const graph = {
    'a': { links: { f: 7, c: 14, d: 9 }},
    'c': { links: { a: 14 , d: 2, b: 9 }},
    'b': { links: { c: 9, e: 6 }}, 
    'e': { links: { b: 6, d: 11, f: 15 }},
    'd': { links: { e: 11, f: 10, a: 9, c: 2 }},
    'f': { links: { e: 15, d: 10, a: 7 }}
}

const graph1 = [
    { 
        name: 'a',
        links: { f: 7, c: 14, d: 9 }
    },
    {
        name: 'c',
        links: { a: 14 , d: 2, b: 9 }
    },
    { 
        name: 'b',
        links: { c: 9, e: 6 }
    }, 
    { 
        name: 'e',
        links: { b: 6, d: 11, f: 15 }
    },
    { 
        name: 'd',
        links: { e: 11, f: 10, a: 9, c: 2 }
    },
    {
        name: 'f',
        links: { e: 15, d: 10, a: 7 }
    }
]

const inst = new Dijkstra(graph, 'a', 'f')
inst.findPath()


