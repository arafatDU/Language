/*
The Floyd Warshall Algorithm is an all pair shortest path algorithm unlike Dijkstra and 
Bellman Ford which are single source shortest path algorithms. This algorithm works 
for both the directed and undirected weighted graphs. But, it does not work for the 
graphs with negative cycles (where the sum of the edges in a cycle is negative). 
It follows Dynamic Programming approach to check every possible path going via every 
possible node in order to calculate shortest distance between every pair of nodes.

for k = 0 to n – 1
for i = 0 to n – 1
for j = 0 to n – 1
Distance[i, j] = min(Distance[i, j], Distance[i, k] + Distance[k, j])

where i = source Node, j = Destination Node, k = Intermediate Node
*/


#include <stdio.h>

#define V 4
#define INF 99999

void printSolution(int dist[][V]);


void floydWarshall(int dist[][V])
{
	int i, j, k;

	for (k = 0; k < V; k++) {
		for (i = 0; i < V; i++) {
			for (j = 0; j < V; j++) {
				if (dist[i][k] + dist[k][j] < dist[i][j])
					dist[i][j] = dist[i][k] + dist[k][j];
			}
		}
	}

	printSolution(dist);
}


void printSolution(int dist[][V])
{
	printf(
		"The following matrix shows the shortest distances"
		" between every pair of vertices \n");
	for (int i = 0; i < V; i++) {
		for (int j = 0; j < V; j++) {
			if (dist[i][j] == INF)
				printf("%7s", "INF");
			else
				printf("%7d", dist[i][j]);
		}
		printf("\n");
	}
}


int main()
{
	/* create the following weighted graph
			10
	(0)------->(3)
		|		 /|\
	5 |		 |
		|		 | 1
	\|/		 |
	(1)------->(2)
			3		 */
	int graph[V][V] = { { 0, 5, INF, 10 },
						{ INF, 0, 3, INF },
						{ INF, INF, 0, 1 },
						{ INF, INF, INF, 0 } };


	floydWarshall(graph);
	return 0;
}

