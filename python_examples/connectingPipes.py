from collections import deque

# Function to parse the input file and extract objects with their coordinates
def parse_input(file_path):
    objects = []
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            # Split each line into parts: object, x-coordinate, and y-coordinate
            parts = line.strip().split()
            obj, x, y = parts[0], int(parts[1]), int(parts[2])
            # Append the object and its coordinates as a tuple to the objects list
            objects.append((obj, x, y))
    return objects

# Function to create a grid based on the objects and their coordinates
def create_grid(objects):
    # Find the maximum x and y coordinates to determine the grid size
    max_x = max(obj[1] for obj in objects)
    max_y = max(obj[2] for obj in objects)
    # Create a grid (list of lists) initialized with empty strings
    grid = [['' for _ in range(max_y + 1)] for _ in range(max_x + 1)]
    # Populate the grid with the objects at their respective coordinates
    for obj, x, y in objects:
        grid[x][y] = obj
    print(grid)
    return grid, max_x, max_y

# Function to get valid neighbors of a given cell based on directions
def get_neighbors(x, y, grid, directions):
    neighbors = []
    for dx, dy in directions:
        nx, ny = x + dx, y + dy
        # Check if the neighbor's coordinates are within the grid boundaries
        if 0 <= nx < len(grid) and 0 <= ny < len(grid[0]):
            neighbors.append((nx, ny))
    return neighbors

# Dictionary defining the possible connections for each type of pipe
pipe_connections = {
    '═': [(0, -1), (0, 1)],    # Horizontal pipe
    '║': [(-1, 0), (1, 0)],    # Vertical pipe
    '╔': [(1, 0), (0, 1)],     # Bottom-right corner
    '╗': [(1, 0), (0, -1)],    # Bottom-left corner
    '╚': [(-1, 0), (0, 1)],    # Top-right corner
    '╝': [(-1, 0), (0, -1)],   # Top-left corner
    '╠': [(0, -1), (0, 1), (1, 0)],    # Horizontal with bottom
    '╣': [(0, -1), (0, 1), (-1, 0)],   # Horizontal with top
    '╦': [(0, -1), (1, 0), (-1, 0)],   # Vertical with left
    '╩': [(0, 1), (1, 0), (-1, 0)]     # Vertical with right
}

# Function to perform BFS and find all connected sinks starting from the source
def traverse_pipes(start_x, start_y, grid):
    visited = set()  # Set to keep track of visited cells
    queue = deque([(start_x, start_y)])  # Queue for BFS
    connected_sinks = set()  # Set to store connected sinks
    
    while queue:
        x, y = queue.popleft()  # Get the next cell to process
        if (x, y) in visited:
            continue  # Skip if already visited
        visited.add((x, y))  # Mark the cell as visited
        cell = grid[x][y]  # Get the object at the current cell
        
        if cell.isalpha():  # If the cell is a sink (an uppercase letter)
            connected_sinks.add(cell)  # Add it to the connected sinks
        
        # Get possible directions based on the cell type (pipe or source/sink)
        directions = pipe_connections.get(cell, [(-1, 0), (1, 0), (0, -1), (0, 1)])
        neighbors = get_neighbors(x, y, grid, directions)  # Get valid neighbors
        
        for nx, ny in neighbors:
            neighbor_cell = grid[nx][ny]  # Get the object at the neighbor cell
            if (nx, ny) not in visited and neighbor_cell:  # If not visited and not empty
                # Check if the current cell and neighbor cell are connected
                if (cell == '*' or neighbor_cell == '*') or (
                    cell in pipe_connections and 
                    any((nx - x, ny - y) in pipe_connections[cell] for (dx, dy) in directions)
                ) or (
                    neighbor_cell.isalpha()  # Neighbor is a sink
                ):
                    queue.append((nx, ny))  # Add the neighbor to the queue
    
    return ''.join(sorted(connected_sinks))  # Return connected sinks sorted alphabetically

# Main function to get connected sinks from the input file
def get_connected_sinks(file_path):
    objects = parse_input(file_path)  # Parse the input file
    grid, max_x, max_y = create_grid(objects)  # Create the grid
    
    # Find the source (asterisk) in the objects list
    for obj, x, y in objects:
        if obj == '*':
            start_x, start_y = x, y
            break
    
    return traverse_pipes(start_x, start_y, grid)  # Perform BFS and return connected sinks

if __name__ == "__main__":
    file_path = 'input.txt'  # Path to the input file
    result = get_connected_sinks(file_path)  # Get the result
    print(result)  # Print the result