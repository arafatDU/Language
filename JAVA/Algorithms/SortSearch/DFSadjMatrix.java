package JAVA.Algorithms.SortSearch;

public class DFSadjMatrix {
  static int[][] adj;

  static void addEdge(int x, int y) {
    adj[x][y] = 1;
    adj[y][x] = 1;
  }

  static void dfs(int start, boolean[] visited) {
    System.out.print(start + " ");
    visited[start] = true;

    for (int i = 0; i < adj[start].length; i++) {

      if (adj[start][i] == 1 && (!visited[i])) {
        dfs(i, visited);
      }
    }
  }

  public static void main(String[] args) {
    int v = 5;
    // int e = 4;

    // adjacency matrix
    adj = new int[v][v];

    addEdge(0, 1);
    addEdge(0, 2);
    addEdge(0, 3);
    addEdge(0, 4);

    boolean[] visited = new boolean[v];
    dfs(0, visited);
  }
}
