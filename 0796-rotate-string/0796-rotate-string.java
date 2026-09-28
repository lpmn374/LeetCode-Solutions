class Solution {
    public boolean rotateString(String s, String goal) {
        if(s.length()!=goal.length()) return false;
        int pointer=0;
        ArrayList<Integer> array= new ArrayList<>();
        for(int i=0;i<goal.length();i++)
            if(goal.charAt(i)==s.charAt(0)){
                array.add(i);
            }
        if(array.isEmpty()) return false;
        int start=0;
        while(start<array.size()){
            pointer=array.get(start++);
            for(int i=0;i<s.length();i++){
                if(s.charAt(i)!=goal.charAt(pointer)) break;
                pointer++;
                if(i==s.length()-1) return true;
                if(pointer==s.length()) pointer=0;
            }
        }
        return false;
    }
}