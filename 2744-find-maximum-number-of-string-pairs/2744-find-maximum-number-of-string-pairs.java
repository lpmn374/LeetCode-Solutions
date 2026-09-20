class Solution {
    public int maximumNumberOfStringPairs(String[] words) {
        Set<String> set1= new HashSet<String>();
        int count=0;
        for(int i=0;i<words.length;i++){
            String reversed = new StringBuilder(words[i]).reverse().toString();
            if(set1.contains(reversed)) count++;
            else set1.add(words[i]);
        }
        return count;
    }
}