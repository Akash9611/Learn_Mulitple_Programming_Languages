public class NextGreaterElement {
    public static void main(String[] args) {
        int[] arr = {4, 5, 2, 25};
        int n = arr.length;
        int[] nge = new int[n];

        for (int i = 0; i < n; i++) {
            nge[i] = -1; // Default value if no greater element is found
            for (int j = i + 1; j < n; j++) {
                if (arr[j] > arr[i]) {
                    nge[i] = arr[j];
                    break; // Exit inner loop once the next greater element is found
                }
            }
        }

        // Print the Next Greater Elements
        System.out.println("Element\tNext Greater Element");
        for (int i = 0; i < n; i++) {
            System.out.println(arr[i] + "\t" + nge[i]);
        }
    }
    // Time Complexity: O(n^2) due to the nested loops
    // Space Complexity: O(n) for storing the result in the nge array


    // Note: This is a simple implementation. More efficient solutions exist using stacks with O(n) time complexity.
    // This can be achieved by maintaining a stack to keep track of elements for which we need to find the next greater element.
    // Here's a brief outline of the stack-based approach:
    /*
    1. Initialize an empty stack.
    2. Traverse the array from right to left.
    3. For each element, pop elements from the stack until you find a greater element or the stack is empty.
    4. If the stack is not empty, the top element is the next greater element.
    5. Push the current element onto the stack.
    */
}
