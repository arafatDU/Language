/*
You are given n activities with their start and finish times. 
Select the maximum number of activities that can be performed by a single person, 
assuming that a person can only work on a single activity at a time. 
*/

#include <stdio.h> 


void printMaxActivities(int s[], int f[], int n) 
{ 
	int i, j; 
	printf("Following activities are selected\n"); 
	i = 0; 
	printf("%d ", i); 

	for (j = 1; j < n; j++) { 
		if (s[j] >= f[i]) { 
			printf("%d ", j); 
			i = j; 
		} 
	} 
} 



int main() 
{ 
	int start[] = { 1, 3, 0, 5, 8, 5 }; 
	int finish[] = { 2, 4, 6, 7, 9, 9 }; 
	int n = sizeof(start) / sizeof(start[0]); 

	printMaxActivities(start, finish, n); 
	return 0; 
}
