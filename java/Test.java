import java.util.*;
import java.util.stream.*;

public class Test {
    public static void main(String []args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        System.out.println(frequentString(input));
    }

    public static String frequentString(String str) {
        Map<Character, Integer> map = new LinkedHashMap<>();

        for (char c : str.toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }

        List<Map.Entry<Character, Integer>> sorted = map.entrySet().stream()
                .sorted((a, b) -> b.getValue() - a.getValue()).collect(Collectors.toList());

        StringBuilder result = new StringBuilder();
        for (Map.Entry<Character, Integer> val : sorted) {
            char ch = val.getKey();
            int count = val.getValue();

            String chunks = String.valueOf(ch).repeat(count);
            result.append(chunks);

        }

        return result.toString();
    }
}