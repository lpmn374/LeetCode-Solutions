class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack=new Stack<>();
        for(int i=0;i<s.length();i++)
            if ((s.charAt(i)==')' || s.charAt(i)==']' || s.charAt(i)=='}') && stack.isEmpty()) return false;
            else if((s.charAt(i)==')' && stack.peek()!='(') || (s.charAt(i)==']' && stack.peek()!='[') || (s.charAt(i)=='}' && stack.peek()!='{')) return false;
            else if (s.charAt(i)=='(' || s.charAt(i)=='[' || s.charAt(i)=='{') stack.add(s.charAt(i));
            else stack.pop();
        return stack.isEmpty();
    }
}