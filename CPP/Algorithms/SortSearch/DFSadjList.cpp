// C++ implementation of the approach
#include <bits/stdc++.h>
using namespace std;


void addEdge(vector<int> adj[], int s, int d) {
  adj[s].push_back(d);
  adj[d].push_back(s);
}

void dfs(vector<int> adj[], int start, vector<bool>& visited)
{
	cout << start << " ";
	visited[start] = true;

	for (int i = 0; i < adj[start].size(); i++) {

    int node = adj[start][i]; // all adjacency node of start
		if (!visited[node]) {
			dfs(adj, node, visited);
		}
	}
}


void printGraph(vector<int> adj[], int V) {
  for (int d = 0; d < V; ++d) {
    cout << "\n Vertex "
       << d << ":";
    for (auto x : adj[d])
      cout << "-> " << x;
    printf("\n");
  }
}

int main()
{

	int V = 5;
  vector<int> adj[V];

	addEdge(adj, 0, 1);
	addEdge(adj, 0, 2);
	addEdge(adj, 0, 3);
	addEdge(adj, 0, 4);

	vector<bool> visited(V, false);

  printGraph(adj, V);
  cout<<endl;
  
	dfs(adj, 0, visited);
}
