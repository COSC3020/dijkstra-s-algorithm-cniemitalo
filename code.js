function dijkstra(graph, sourceNode) {
    let visited = []; 
    let distance = []; 

    //initialze all nodes in the graph to a distance of infinity
    for (let i = 0; i < graph.length; i++) {
        distance[i] = Number.MAX_VALUE;  
    }

    //set source's dist to 0 
    distance[sourceNode] = 0; 

    for (let j = 0; j < graph.length; j++) {
        let min = Number.MAX_VALUE;
        let vertex = 0; 

        for (let v = 0; v < graph.length; v++) {
            if (!visited.includes(v) && distance[v] <= min) {
                min = distance[v];
                vertex = v; 
            }
        }

        visited.push(vertex); 

        for (let next = 0; next < graph.length; next++) {
            let temp = distance[vertex] + graph[vertex][next]; 
            if (graph[vertex][next] > 0 && distance[next] > temp) {
                distance[next] = Math.min(distance[next], temp); 
            }
        }
    }

    return distance; 
}
