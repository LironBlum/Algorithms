const { reduce } = require(`lodash`);

//neighbours = list of vertacies that are connected to minDistVertex.
//dist is the Edge value between minDistVertex and his neighbour
class Dijkstra {
    constructor(graph, start, finish) {
      this.graph = graph
      this.start = start
      this.finish = finish
      this.unVIsited = {}
      this.path = []
      this.pathLength = 0
    }
    
    algorithm(){
         //init
        for (const [key, value] of Object.entries( this.graph)) {
            key === this.start ? value.dist = 0 : value.dist = Number.POSITIVE_INFINITY
            this.unVIsited[key] = value.dist
            value.parent = null  
        }

        while(Object.keys(this.unVIsited).length > 0){ //loop until all vertex are visited

            const minDistVertex = Object.keys(this.unVIsited).reduce( (a,b) => this.graph[a].dist < this.graph[b].dist ? a : b ); 
            delete this.unVIsited[minDistVertex];
            
            
            for (const [vertex, edgeDist] of Object.entries(this.graph[minDistVertex].links)) { //go through each neighbour

                if(this.unVIsited.hasOwnProperty(vertex)){ //verify that the neighbour is visitable
                    const newDist = this.graph[minDistVertex].dist + edgeDist  

                    if(newDist < this.graph[vertex].dist) {
                        this.graph[vertex].dist = newDist //assign neighbour's new calculated dist if smaller then his original dist
                        this.graph[vertex].parent = minDistVertex 
                    }
                }   
            }
        }
    }
    
    execute() {
        this.algorithm()
        this.pathLength = this.graph[this.finish].dist
        this.getRoad(this.finish)

        console.log('path:',this.path)
        console.log('length:', this.pathLength)
    }

    getRoad(vertex){
        if(vertex === null){
            return
        }
        let cur = this.graph[vertex]
        this.path.push(vertex)
        this.getRoad(cur.parent)
    }
}

module.exports = Dijkstra


