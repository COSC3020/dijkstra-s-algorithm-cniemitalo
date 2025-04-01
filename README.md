# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

My implementation has the beginning for loop, assigning the starting distance values of all vertices to infinity, which would be a runtime of |V|. Then we have another for loop to iterate through every vertex again, but this one contains two other for loops, one to find the minimum distance and one to iterate through that vertex's connected vertices. This would run in |V|(|V| + |V|) time, so $|V|^2 + |V|^2$. Therefore the total runtime of the program would be $|V| + 2|V|^2$ or $\Theta(|V|^2)$, the fastest growing portion disregarding constants. 

### Sources and Plagiarism 

https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.