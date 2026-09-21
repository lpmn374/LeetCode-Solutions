class Solution {
    public int countPoints(String rings) {
        Map<Character, Set<Character>> map1 = new HashMap<>();
        int count=0;
        for(int i=1;i<rings.length();i+=2){
            map1.putIfAbsent(rings.charAt(i), new HashSet<>());
            map1.get(rings.charAt(i)).add(rings.charAt(i-1));
        }
        for(Set<Character> set: map1.values())
            if (set.size()==3) count++;
        return count;
    }
}