/*HCL Question: 
 Simple program to sort characters of a string by frequency (descending).
 If two characters have the same frequency, they keep the order of first occurrence.

 This implementation uses only simple for-loops and basic collections:
  - Count characters while recording first-occurrence order (LinkedHashMap)
  - Repeatedly scan the order list to find the character with the highest remaining count
    and append it to the result. This preserves first-occurrence for ties.

 PSEUDOCODE:
 1. If input is empty -> return it.
 2. Use LinkedHashMap<char, count> to count characters while preserving first-occurrence order.
 3. Build a list of characters in first-occurrence order.
 4. While any count > 0:
      - scan the list and pick the character with the largest remaining count (ties -> earlier one)
      - append that character repeated by its count to the result
      - set its count to 0
 5. Return result.
*/

import java.util.*;
import java.util.stream.*;

public class FrequencySortWithStream {
    public static void main(String[] args) {
        // System.out.println(sortString("test")); // ttes
        // System.out.println(sortString("ellaa")); // llaae
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        System.out.println(sortString(input));
    }

    public static String sortString(String s) {

        // Step 1: LinkedHashMap to store first appearance order
        Map<Character, Integer> map = new LinkedHashMap<>();

        for (char c : s.toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }

        // Step 2: Sort entries by value (frequency ↓)
        // If tie → LinkedHashMap keeps original insertion order
        List<Map.Entry<Character, Integer>> sorted = map.entrySet()
                .stream()
                .sorted((a, b) -> b.getValue() - a.getValue()) // descending by freq
                .collect(Collectors.toList());

        // Step 3: Build result
        StringBuilder result = new StringBuilder();
        for (Map.Entry<Character, Integer> entry : sorted) {
            char ch = entry.getKey();
            int cnt = entry.getValue();
            String chunk = String.valueOf(ch).repeat(cnt);
            result.append(chunk);
        }

        return result.toString();
    }
}
