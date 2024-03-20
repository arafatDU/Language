let ans=""; 
class Graph {
constructor(v, e) {
	this.v = v; // number of vertices
	this.e = e; // number of edges

	// initialize the adjacency matrix with 0s
	this.adj = Array.from(Array(v), () => new Array(v).fill(0));
}

// function to add an edge to the graph
addEdge(start, end) {
	// considering a bidirectional edge
	this.adj[start][end] = 1;
	this.adj[end][start] = 1;
}

// function to perform DFS on the graph
DFS(start, visited) {

	ans = ans +start + " ";
	visited[start] = true;

	for (let i = 0; i < this.v; i++) {

	if (this.adj[start][i] === 1 && !visited[i]) {
		this.DFS(i, visited);
	}
	}
}
}


const v = 5;
const e = 4; 

// create the graph
const G = new Graph(v, e);
G.addEdge(0, 1);
G.addEdge(0, 2);
G.addEdge(0, 3);
G.addEdge(0, 4);


const visited = new Array(v).fill(false);

G.DFS(0, visited); 
console.log(ans);
